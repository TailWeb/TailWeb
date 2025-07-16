import { Metadata } from 'next'
import { ProjectsSection } from '@/components/sections/ProjectsSection'

export const metadata: Metadata = {
  title: 'Réalisations Sites Web Startup | Portfolio Développeur | TailWeb',
  description: 'Portfolio sites web startup : e-commerce, SaaS, plateformes. +150% trafic, conversion optimisée, livraison 48h. Projets Next.js React.',
}

export default function ProjectsPage() {
  return (
    <ProjectsSection />
  )
}