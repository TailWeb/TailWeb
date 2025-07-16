import { CTASection } from "@/components/sections/CTASection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Création Site Web Startup | Développeur Freelance 15 ans",
  description:
    "Création site web startup professionnel dès 800€. Développeur freelance 15 ans, livraison 48-72h. +150% trafic qualifié garanti. Audit gratuit 24h.",
};

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <StatsSection />
      <FAQSection />
      <CTASection />
    </>
  );
}
