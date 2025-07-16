import { Metadata } from 'next'
import { AboutSection } from '@/components/sections/AboutSection'
import { TimelineSection } from '@/components/sections/TimelineSection'

export const metadata: Metadata = {
  title: 'Louis Muscat - Développeur Web 15 ans | Expert Startup | TailWeb',
  description: 'Développeur web freelance de 15 ans spécialisé startups. Autodidacte depuis 8 ans, expert Next.js, React, SEO. +150% trafic garanti.',
}

export default function AboutPage() {
  return (
    <>
      <AboutSection />
      <TimelineSection />
    </>
  )
}