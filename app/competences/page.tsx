import { SkillsSection } from "@/components/sections/SkillsSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Compétences Développeur Web Startup | Next.js React SEO | TailWeb",
  description:
    "Compétences techniques développeur web startup : Next.js 95%, React 90%, SEO 85%, TypeScript 90%. Expert création sites performants.",
};

export default function SkillsPage() {
  return (
    <>
      <SkillsSection />
    </>
  );
}
