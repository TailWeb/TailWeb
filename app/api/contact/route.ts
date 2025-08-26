import {
  logSecurityEvent,
  rateLimitCheck,
  sanitizeInput,
  validateContactForm,
} from "@/lib/security";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const smtpConfig = {
  host: process.env.SMTP_HOST || "smtp.gmail.com",
  port: parseInt(process.env.SMTP_PORT || "587"),
  secure: process.env.SMTP_SECURE === "true",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
};

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

    // ENVOI EMAIL VIA GMAIL SMTP
    const transporter = nodemailer.createTransport(smtpConfig);
    const mailOptions = {
      from: `Contact TailWeb <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_EMAIL,
      replyTo: sanitizedData.email,
      subject: sanitizedData.subject || "Nouveau message de contact",
      text: `Nom: ${sanitizedData.name}\nEmail: ${sanitizedData.email}\n\n${sanitizedData.message}`,
      html: `<p><strong>Nom:</strong> ${sanitizedData.name}</p><p><strong>Email:</strong> ${sanitizedData.email}</p><p><strong>Message:</strong><br/>${sanitizedData.message.replace(/\n/g, "<br/>")}</p>`,
    };

    try {
      await transporter.sendMail(mailOptions);
    } catch (mailError) {
      logSecurityEvent(
        "suspicious_activity",
        `Erreur SMTP: ${mailError.message || mailError}`,
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

    logSecurityEvent(
      "contact_form",
      `Nouveau message de ${sanitizedData.name} (${sanitizedData.email}) envoyé avec succès via SMTP`,
      ipAddress
    );

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
  } catch (error: any) {
    const ipAddress = request.headers.get("x-forwarded-for") || "unknown";
    console.error("Erreur API contact:", error);

    logSecurityEvent(
      "suspicious_activity",
      `Erreur serveur dans contact: ${error.message}`,
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
