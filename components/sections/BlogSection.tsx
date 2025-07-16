'use client'

import { motion } from 'framer-motion'
import { Calendar, Clock, ArrowRight, TrendingUp } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { memo } from 'react'

const BlogCard = memo(function BlogCard({ 
  article, 
  index 
}: { 
  article: any; 
  index: number 
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover transition-transform duration-300 hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            {article.category}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-3">
          <Calendar className="h-4 w-4 mr-2" />
          {new Date(article.date).toLocaleDateString('fr-FR', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })}
          <Clock className="h-4 w-4 ml-4 mr-2" />
          {article.readTime} min
        </div>

        <h2 className="text-xl font-bold mb-3 text-gray-900 dark:text-white hover:text-primary-600 dark:hover:text-primary-400 transition-colors">
          <Link href={`/blog/${article.slug}`}>
            {article.title}
          </Link>
        </h2>

        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {article.excerpt}
        </p>

        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            {article.tags.slice(0, 2).map((tag: string, tagIndex: number) => (
              <span
                key={tagIndex}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs"
              >
                {tag}
              </span>
            ))}
          </div>

          <Link
            href={`/blog/${article.slug}`}
            className="inline-flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 font-medium text-sm transition-colors"
          >
            Lire la suite
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  )
})

export function BlogSection() {
  const articles = [
    {
      id: 1,
      title: "Comment créer un site web startup en 2025 ? Guide complet",
      slug: "creer-site-web-startup-2025",
      excerpt: "Découvrez les étapes essentielles pour créer un site web startup performant : technologies, design, SEO et conversion.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      category: "Guide Startup",
      date: "2025-01-15",
      readTime: 8,
      tags: ["Startup", "Développement Web", "SEO", "Conversion"]
    },
    {
      id: 2,
      title: "Site web startup : 10 erreurs à éviter absolument",
      slug: "erreurs-site-web-startup",
      excerpt: "Les erreurs les plus courantes qui peuvent ruiner le succès de votre site web startup et comment les éviter.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      category: "Conseils",
      date: "2025-01-10",
      readTime: 6,
      tags: ["Startup", "Erreurs", "Conseils", "UX"]
    },
    {
      id: 3,
      title: "Développeur web freelance vs agence : que choisir pour votre startup ?",
      slug: "freelance-vs-agence-startup",
      excerpt: "Comparaison détaillée entre freelance et agence pour le développement de votre site web startup.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      category: "Business",
      date: "2025-01-05",
      readTime: 7,
      tags: ["Freelance", "Agence", "Startup", "Budget"]
    },
    {
      id: 4,
      title: "SEO pour startup : guide du débutant 2025",
      slug: "seo-startup-guide-debutant",
      excerpt: "Tout ce qu'une startup doit savoir sur le SEO pour être visible sur Google dès le lancement.",
      image: "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?w=600&h=400&fit=crop",
      category: "SEO",
      date: "2025-01-01",
      readTime: 10,
      tags: ["SEO", "Startup", "Google", "Trafic"]
    },
    {
      id: 5,
      title: "Combien coûte un site web professionnel en 2025 ?",
      slug: "cout-site-web-professionnel-2025",
      excerpt: "Analyse détaillée des coûts de création d'un site web professionnel selon vos besoins et objectifs.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop",
      category: "Tarifs",
      date: "2024-12-28",
      readTime: 5,
      tags: ["Tarifs", "Budget", "Site Web", "Coûts"]
    },
    {
      id: 6,
      title: "Next.js vs React : quel framework choisir pour votre startup ?",
      slug: "nextjs-vs-react-startup",
      excerpt: "Comparaison technique entre Next.js et React pour le développement d'applications web startup.",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
      category: "Technique",
      date: "2024-12-25",
      readTime: 9,
      tags: ["Next.js", "React", "Framework", "Performance"]
    }
  ]

  const featuredArticle = articles[0]
  const regularArticles = articles.slice(1)

  return (
    <section className="section-padding">
      <div className="container-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Blog <span className="text-primary-600 dark:text-primary-400">Développement Web</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Guides, conseils et actualités pour créer des sites web startup performants
          </p>
        </motion.div>

        {/* Article en vedette */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-xl border border-gray-100 dark:border-gray-700">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="relative h-64 lg:h-auto">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary-500 text-white px-3 py-2 rounded-full text-sm font-bold flex items-center">
                    <TrendingUp className="h-4 w-4 mr-1" />
                    Article vedette
                  </span>
                </div>
              </div>
              
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(featuredArticle.date).toLocaleDateString('fr-FR', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                  <Clock className="h-4 w-4 ml-4 mr-2" />
                  {featuredArticle.readTime} min
                </div>

                <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                  {featuredArticle.title}
                </h2>

                <p className="text-lg text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  {featuredArticle.excerpt}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredArticle.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 px-3 py-1 rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Link
                  href={`/blog/${featuredArticle.slug}`}
                  className="inline-flex items-center bg-primary-500 hover:bg-primary-600 text-white font-semibold px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl w-fit"
                >
                  Lire l'article complet
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Grille d'articles */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {regularArticles.map((article, index) => (
            <BlogCard key={article.id} article={article} index={index} />
          ))}
        </div>

        {/* CTA Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 bg-gradient-to-r from-primary-600 to-cyan-600 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            Restez informé des dernières tendances
          </h3>
          <p className="text-xl opacity-90 mb-6 max-w-2xl mx-auto">
            Recevez nos guides exclusifs et conseils d'expert pour faire décoller votre startup
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center bg-white text-primary-600 hover:bg-gray-100 font-bold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Audit gratuit de votre projet
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}