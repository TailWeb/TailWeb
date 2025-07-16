import { Metadata } from 'next'
import { PricingSection } from '@/components/sections/PricingSection'

export const metadata: Metadata = {
  title: 'Forfaits Site Web Startup dès 800€ | Livraison 48h',
  description: 'Forfaits création site web startup : Pack Indépendant 800€, Pack Growth 2000€, Pack Scale-up 3000€. Livraison express, SEO inclus, support 3-6 mois.',
}

export default function PricingPage() {
  return (
    <PricingSection />
  )
}