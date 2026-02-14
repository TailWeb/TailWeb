import {
  logSecurityEvent,
  rateLimitCheck,
  sanitizeInput,
  validateContactForm,
} from "@/lib/security";
import FormData from "form-data";
import Mailgun from "mailgun.js";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const ipAddress =
      request.headers.get("x-forwarded-for") ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (!rateLimitCheck(ipAddress, 5, 300000)) {
      logSecurityEvent(
        "rate_limit",
        `Trop de tentatives depuis ${ipAddress}`,
        ipAddress
      );
      return NextResponse.json(
        { error: "Trop de tentatives. Veuillez réessayer dans 5 minutes." },
        { status: 429 }
      );
    }

    const body = await request.json();

    const sanitizedData = {
      name: sanitizeInput(body.name || ""),
      email: sanitizeInput(body.email || ""),
      subject: sanitizeInput(body.subject || ""),
      message: sanitizeInput(body.message || ""),
    };

    const validation = validateContactForm(sanitizedData);
    if (!validation.isValid) {
      logSecurityEvent(
        "validation_error",
        `Données invalides: ${validation.errors.join(", ")}`,
        ipAddress
      );
      return NextResponse.json(
        { error: "Données invalides", details: validation.errors },
        { status: 400 }
      );
    }

    const suspiciousPatterns = [
      /<script/i,
      /javascript:/i,
      /onclick/i,
      /onerror/i,
      /eval\(/i,
      /document\./i,
      /window\./i,
    ];

    const allContent = `${sanitizedData.name} ${sanitizedData.email} ${sanitizedData.subject} ${sanitizedData.message}`;
    const isSuspicious = suspiciousPatterns.some((pattern) =>
      pattern.test(allContent)
    );

    if (isSuspicious) {
      logSecurityEvent(
        "suspicious_activity",
        `Contenu suspect détecté dans le formulaire`,
        ipAddress
      );
      return NextResponse.json(
        { error: "Contenu non autorisé détecté" },
        { status: 400 }
      );
    }

    // ENVOI EMAIL VIA MAILGUN
    try {
      const mailgun = new Mailgun(FormData);
      const client = mailgun.client({
        username: "api",
        key: process.env.MAILGUN_API_KEY || "dummy-key-for-build",
        url: process.env.MAILGUN_HOST
          ? `https://${process.env.MAILGUN_HOST}`
          : undefined,
      });

      const DOMAIN = process.env.MAILGUN_DOMAIN || "";
      const messageData = {
        from: `TailWeb Contact <noreply@${DOMAIN}>`,
        to: process.env.CONTACT_EMAIL ? [process.env.CONTACT_EMAIL] : [],
        "h:Reply-To": sanitizedData.email,
        subject: sanitizedData.subject || "Nouveau message de contact",
        text: `Nom: ${sanitizedData.name}\nEmail: ${sanitizedData.email}\n\n${sanitizedData.message}`,
        html: `<p><strong>Nom:</strong> ${
          sanitizedData.name
        }</p><p><strong>Email:</strong> ${
          sanitizedData.email
        }</p><p><strong>Message:</strong><br/>${sanitizedData.message.replace(
          /\n/g,
          "<br/>"
        )}</p>`,
      };

      await client.messages.create(DOMAIN, messageData);

      logSecurityEvent(
        "contact_form",
        `Nouveau message de ${sanitizedData.name} (${sanitizedData.email}) envoyé avec succès via Mailgun`,
        ipAddress
      );
    } catch (mailError) {
      logSecurityEvent(
        "suspicious_activity",
        `Erreur Mailgun: ${
          mailError instanceof Error ? mailError.message : String(mailError)
        }`,
        ipAddress
      );
      return NextResponse.json(
        {
          error:
            "Erreur lors de l'envoi du message. Veuillez réessayer plus tard.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        message:
          "Message envoyé avec succès. Nous vous répondrons dans les 24h.",
      },
      {
        status: 200,
        headers: {
          "Cache-Control": "no-store, no-cache, must-revalidate",
          Pragma: "no-cache",
        },
      }
    );
  } catch (error) {
    const ipAddress = request.headers.get("x-forwarded-for") || "unknown";
    console.error("Erreur API contact:", error);

    logSecurityEvent(
      "suspicious_activity",
      `Erreur serveur dans contact: ${
        error instanceof Error ? error.message : String(error)
      }`,
      ipAddress
    );

    return NextResponse.json(
      { error: "Erreur serveur temporaire. Veuillez réessayer." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Méthode non autorisée" }, { status: 405 });
}
export async function PUT() {
  return NextResponse.json({ error: "Méthode non autorisée" }, { status: 405 });
}
export async function DELETE() {
  return NextResponse.json({ error: "Méthode non autorisée" }, { status: 405 });
}
