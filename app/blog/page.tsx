import { Metadata } from 'next'
import { BlogSection } from '@/components/sections/BlogSection'

export const metadata: Metadata = {
  title: 'Blog Développement Web Startup | Conseils & Guides | TailWeb',
  description: 'Guides et conseils pour créer un site web startup performant. SEO, conversion, technologies modernes. Expertise développeur web freelance.',
}

export default function BlogPage() {
  return (
    <BlogSection />
  )
}