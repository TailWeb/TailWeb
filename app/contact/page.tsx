import { Metadata } from 'next'
import { ContactSection } from '@/components/sections/ContactSection'

export const metadata: Metadata = {
  title: 'Contact Développeur Web Startup | Audit Gratuit 24h | TailWeb',
  description: 'Contactez développeur web freelance spécialisé startup. Audit gratuit 24h, devis personnalisé, réponse garantie. Projet dès 800€.',
}

export default function ContactPage() {
  return (
    <ContactSection />
  )
}