import ClientProviders from "@/components/ClientProviders";
import { CookieBanner } from "@/components/CookieBanner";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ParticleBackground } from "@/components/ParticleBackground";
import { StructuredData } from "@/components/StructuredData";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

export const metadata: Metadata = {
  title: {
    template: "%s | TailWeb - Création Site Web Startup",
    default:
      "Création Site Web Startup | Développeur Freelance 15 ans | TailWeb",
  },
  description:
    "Création site web startup professionnel dès 800€. Développeur freelance 15 ans, livraison 48-72h. +150% trafic garanti. Audit gratuit 24h.",
  keywords: [
    "création site web startup",
    "développeur web freelance",
    "site internet pas cher",
    "création site web professionnel",
    "développeur web 15 ans",
    "site web startup 48h",
    "audit site web gratuit",
    "développeur Next.js France",
    "site web conversion optimisé",
    "création site internet PME",
    "développeur web jeune",
    "site responsive mobile",
    "Next.js",
    "React",
    "SEO startup",
  ],
  authors: [{ name: "Louis Muscat", url: "https://tailweb.fr" }],
  creator: "Louis Muscat",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://tailweb.fr",
    title: "Création Site Web Startup | Développeur Freelance 15 ans | TailWeb",
    description:
      "Création site web startup professionnel dès 800€. Développeur freelance 15 ans, livraison 48-72h. +150% trafic garanti.",
    siteName: "TailWeb",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TailWeb Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Création Site Web Startup | TailWeb",
    description:
      "Création site web startup professionnel dès 800€. Livraison 48-72h. +150% trafic garanti.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    "max-image-preview": "large",
    "max-snippet": -1,
    "max-video-preview": -1,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "verification_token",
    yandex: "yandex_verification",
  },
  alternates: {
    canonical: "https://tailweb.fr",
  },
  other: {
    "google-site-verification": "your-google-verification-code",
  },
};

function LoadingFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-500"></div>
    </div>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="canonical" href="https://tailweb.fr" />
        <meta name="geo.region" content="FR" />
        <meta name="geo.placename" content="France" />
        <meta name="ICBM" content="46.603354, 1.888334" />
        <meta name="theme-color" content="#0ea5e9" />
        {/* Favicon & icons */}
        <link rel="icon" href="/icon/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icon/favicon-16x16.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/icon/apple-touch-icon.png"
        />
        <link rel="manifest" href="/icon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/icon/safari-pinned-tab.svg"
          color="#0ea5e9"
        />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        <meta name="msapplication-config" content="/icon/browserconfig.xml" />
      </head>
      <body className="font-inter antialiased">
        <StructuredData />
        <ClientProviders>
          <div className="min-h-screen flex flex-col">
            <Suspense fallback={null}>
              <ParticleBackground />
            </Suspense>
            <Header />
            <main className="flex-1 pt-20">
              <Suspense fallback={<LoadingFallback />}>{children}</Suspense>
            </main>
            <Footer />
          </div>
          <Suspense fallback={null}>
            <CookieBanner />
          </Suspense>
        </ClientProviders>
      </body>
    </html>
  );
}
