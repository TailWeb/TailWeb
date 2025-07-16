"use client";

import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { memo, useState } from "react";

const FAQItem = memo(function FAQItem({
  faq,
  index,
  isOpen,
  onToggle,
}: {
  faq: { question: string; answer: string };
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden"
    >
      <button
        onClick={onToggle}
        className="w-full px-6 py-4 text-left bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-between"
      >
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white pr-4">
          {faq.question}
        </h3>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-primary-500 flex-shrink-0" />
        ) : (
          <ChevronDown className="h-5 w-5 text-primary-500 flex-shrink-0" />
        )}
      </button>

      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          duration: 0.4,
          ease: "easeInOut",
          opacity: {
            duration: 0.3,
            delay: isOpen ? 0.1 : 0,
          },
        }}
        style={{ overflow: "hidden" }}
        className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
      >
        <motion.div className="px-6 py-4">
          <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
            {faq.answer}
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
});

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Combien coûte la création d'un site web startup ?",
      answer:
        "Mes forfaits commencent à 800€ pour un site vitrine professionnel (Pack Indépendant). Le Pack Growth Startup à 2000€ est recommandé pour les startups en croissance, incluant SEO avancé, blog et analytics. Le Pack Scale-up à 3000€ offre A/B testing et intégrations CRM pour scaler rapidement.",
    },
    {
      question: "Quel est le délai de livraison d'un site web ?",
      answer:
        "Je développe le site web entre 24h pour les sites les plus simples, et jusqu'à 5 jours pour une plateforme E-Commerce complète. Mais le délai pour un forfait moyen est de 72h maximum sauf si gros imprévus. Le Pack Indépendant peut être livré en 24-48h, parfait pour les lancements urgents. Chaque projet inclut des révisions et un accompagnement personnalisé.",
    },
    {
      question: "Proposez-vous un audit gratuit pour les startups ?",
      answer:
        "Oui ! Je propose un audit gratuit complet de votre projet startup avec analyse concurrentielle, recommandations techniques et devis personnalisé. Réponse garantie sous 24h avec un plan d'action détaillé.",
    },
    {
      question: "Quelles technologies utilisez-vous pour créer les sites ?",
      answer:
        "J'utilise les technologies les plus modernes : Next.js, React, TypeScript, Tailwind CSS. Tous mes sites sont optimisés pour la performance, le SEO et la conversion. Sécurisation et certificat SSL inclus.",
    },
    {
      question: "Offrez-vous un support après la livraison ?",
      answer:
        "Absolument ! Chaque forfait inclut un support technique : 1 mois pour le Pack Indépendant, 3 mois pour le Pack Growth, 6 mois pour le Pack Scale-up. Support par email, corrections de bugs et optimisations mineures incluses.",
    },
    {
      question: "Garantissez-vous les résultats en termes de trafic ?",
      answer:
        "Oui, je garantis minimum +150% de trafic qualifié en 3 mois grâce au SEO technique avancé et à la stratégie de contenu. Si les objectifs ne sont pas atteints, je continue les optimisations gratuitement jusqu'à réussite.",
    },
    {
      question: "Travaillez-vous avec des startups de tous secteurs ?",
      answer:
        "Oui, j'accompagne des startups de tous secteurs : SaaS, E-Commerce, Services, Fintech, Healthtech, etc. Mon expertise couvre aussi bien les sites vitrines que les plateformes complexes avec intégrations spécifiques.",
    },
  ];

  return (
    <section className="section-padding bg-white dark:bg-gray-900">
      <div className="container-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Questions{" "}
            <span className="text-primary-600 dark:text-primary-400">
              Fréquentes
            </span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Tout ce que vous devez savoir sur nos services de création de sites
            web pour startups
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              faq={faq}
              index={index}
              isOpen={openIndex === index}
              onToggle={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mt-12"
        >
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Vous avez d'autres questions ?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Contactez-nous pour un audit gratuit
          </a>
        </motion.div>
      </div>
    </section>
  );
}
