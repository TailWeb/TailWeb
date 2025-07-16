'use client'

import { memo } from 'react'

const StructuredData = memo(function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TailWeb",
    "description": "Développeur web freelance spécialisé création sites web startup. Livraison 48h, tarifs dès 800€.",
    "url": "https://tailweb.fr",
    "logo": "https://tailweb.fr/logo.png",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+33-XXX-XXX-XXX",
      "contactType": "customer service",
      "availableLanguage": "French"
    },
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "FR"
    },
    "sameAs": [
      "https://linkedin.com/in/louis-muscat",
      "https://github.com/louis-muscat"
    ]
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Création Site Web Startup",
    "description": "Service de création de sites web professionnels pour startups et PME. Livraison express 48-72h.",
    "provider": {
      "@type": "Organization",
      "name": "TailWeb"
    },
    "areaServed": "France",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Forfaits Site Web Startup",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pack Indépendant"
          },
          "price": "800",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pack Growth Startup"
          },
          "price": "2000",
          "priceCurrency": "EUR"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Pack Scale-up"
          },
          "price": "3000",
          "priceCurrency": "EUR"
        }
      ]
    }
  }

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Louis Muscat",
    "jobTitle": "Développeur Web Freelance",
    "description": "Développeur web freelance de 15 ans spécialisé dans la création de sites web pour startups.",
    "url": "https://tailweb.fr",
    "image": "https://tailweb.fr/louis-muscat.jpg",
    "knowsAbout": [
      "Développement Web",
      "Next.js",
      "React",
      "SEO",
      "Startup",
      "Prompt Engineering"
    ],
    "hasOccupation": {
      "@type": "Occupation",
      "name": "Développeur Web",
      "occupationLocation": {
        "@type": "Country",
        "name": "France"
      }
    }
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Combien coûte la création d'un site web startup ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nos forfaits commencent à 800€ pour un site vitrine professionnel. Le Pack Growth Startup à 2000€ est recommandé pour les startups en croissance."
        }
      },
      {
        "@type": "Question",
        "name": "Quel est le délai de livraison d'un site web ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Nous livrons votre site web en 48-72h maximum. Le Pack Indépendant peut être livré en 24-48h."
        }
      },
      {
        "@type": "Question",
        "name": "Proposez-vous un audit gratuit ?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Oui, nous proposons un audit gratuit de votre projet startup avec réponse garantie sous 24h."
        }
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  )
})

export { StructuredData }