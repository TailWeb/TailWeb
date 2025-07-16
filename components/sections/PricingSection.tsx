"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Calendar,
  CheckCircle,
  Clock,
  Rocket,
  Star,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { memo, useState } from "react";

const PricingCard = memo(function PricingCard({
  plan,
  index,
}: {
  plan: any;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "-50px" }}
      className={`relative bg-white dark:bg-gray-800 rounded-xl shadow-lg border flex flex-col will-change-transform pricing-card-hover ${
        plan.highlighted
          ? "ring-2 ring-primary-500 scale-105 border-primary-200 dark:border-primary-700 shadow-2xl"
          : "border-gray-100 dark:border-gray-700"
      }`}
      style={{ minHeight: "600px" }}
    >
      {plan.highlighted && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="bg-gradient-to-r from-cyan-500 to-green-400 text-white px-6 py-2 rounded-full text-sm font-bold flex items-center shadow-lg">
            <Star className="h-4 w-4 mr-2" />
            Recommandé startup
          </div>
        </div>
      )}

      <div className="p-8 flex-grow flex flex-col relative z-10">
        <div className="text-center mb-8">
          <div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${plan.bgColor}`}
          >
            <plan.icon className={`h-8 w-8 ${plan.color}`} />
          </div>
          <h3 className="text-2xl font-bold mb-3 font-inter transition-colors duration-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">
            {plan.name}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 font-inter leading-relaxed">
            {plan.description}
          </p>

          <div className="flex items-baseline justify-center mb-4">
            {plan.originalPrice && (
              <span className="text-lg text-gray-400 line-through mr-2 font-inter">
                {plan.originalPrice}€
              </span>
            )}
            <span className="text-5xl font-bold text-primary-500 font-inter transition-all duration-300 group-hover:scale-110">
              {plan.price}
            </span>
            {plan.price !== "Sur devis" && (
              <span className="text-xl text-gray-600 dark:text-gray-400 ml-1 font-inter">
                €
              </span>
            )}
          </div>

          {plan.savings && (
            <div className="text-sm font-semibold text-trust-600 dark:text-trust-400 mb-4">
              Économie de {plan.savings} vs marché
            </div>
          )}

          {plan.delivery && (
            <div className="inline-flex items-center px-3 py-1 bg-trust-100 dark:bg-trust-900/30 rounded-full text-trust-700 dark:text-trust-300 text-sm font-medium mb-6">
              <Clock className="h-4 w-4 mr-1" />
              {plan.delivery}
            </div>
          )}
        </div>

        <ul className="space-y-4 mb-8 flex-grow">
          {plan.features.map((feature: any, featureIndex: number) => (
            <li key={featureIndex} className="flex items-start">
              <CheckCircle className="h-5 w-5 text-trust-500 mr-3 mt-0.5 flex-shrink-0 transition-all duration-300 group-hover:scale-110" />
              <div>
                <span className="text-gray-900 dark:text-white font-medium text-sm font-inter">
                  {feature.name}
                </span>
                {feature.description && (
                  <p className="text-xs text-gray-600 dark:text-gray-400 mt-1 font-inter">
                    {feature.description}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>

        {plan.results && (
          <div className="bg-trust-50 dark:bg-trust-900/20 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-trust-700 dark:text-trust-300 mb-3 flex items-center">
              <Target className="h-4 w-4 mr-2" />
              Résultats garantis :
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {plan.results.map((result: string, resultIndex: number) => (
                <div key={resultIndex} className="flex items-center space-x-2">
                  <TrendingUp className="h-3 w-3 text-trust-500" />
                  <span className="text-xs text-trust-600 dark:text-trust-400 font-medium">
                    {result}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="mt-auto">
          <Link
            href="/contact"
            className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-full font-bold transition-all duration-300 text-center font-inter will-change-transform group-hover:scale-105 ${
              plan.highlighted
                ? "bg-gradient-to-r from-primary-500 to-trust-500 hover:from-primary-600 hover:to-trust-600 text-white shadow-lg hover:shadow-xl"
                : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600 hover:shadow-lg"
            }`}
          >
            <span className="relative z-10">{plan.cta}</span>
            <ArrowRight className="ml-2 h-5 w-5 relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
});

const ComparisonTable = memo(function ComparisonTable() {
  const features = [
    {
      name: "Pages incluses",
      startup: "5-7 pages",
      scaleup: "7-10 pages",
      indie: "3-4 pages",
      ecommerce: "Illimitées",
    },
    {
      name: "SEO avancé",
      startup: "✓",
      scaleup: "✓ Premium",
      indie: "Basique",
      ecommerce: "✓ Premium",
    },
    {
      name: "Blog intégré",
      startup: "✓",
      scaleup: "✓",
      indie: "✗",
      ecommerce: "✓",
    },
    {
      name: "Analytics",
      startup: "GA4 + GSC",
      scaleup: "GA4 + GSC + Custom",
      indie: "GA4",
      ecommerce: "E-commerce tracking",
    },
    {
      name: "Formation",
      startup: "2h",
      scaleup: "4h",
      indie: "1h",
      ecommerce: "6h",
    },
    {
      name: "Support",
      startup: "3 mois",
      scaleup: "6 mois",
      indie: "1 mois",
      ecommerce: "6 mois",
    },
    {
      name: "A/B Testing",
      startup: "✗",
      scaleup: "✓",
      indie: "✗",
      ecommerce: "✓",
    },
    {
      name: "Intégrations CRM",
      startup: "Basique",
      scaleup: "Avancées",
      indie: "✗",
      ecommerce: "E-commerce",
    },
  ];

  return (
    <div className="overflow-x-auto">
      <table className="w-full bg-white dark:bg-gray-800 rounded-lg shadow-lg">
        <thead>
          <tr className="border-b border-gray-200 dark:border-gray-700">
            <th className="text-left p-4 font-semibold">Fonctionnalités</th>
            <th className="text-center p-4 font-semibold text-primary-600">
              Startup Growth
            </th>
            <th className="text-center p-4 font-semibold text-accent-600">
              Scale-up
            </th>
            <th className="text-center p-4 font-semibold text-trust-600">
              Indépendant
            </th>
            <th className="text-center p-4 font-semibold text-success-600">
              E-Commerce
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => (
            <tr
              key={index}
              className="border-b border-gray-100 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700/50"
            >
              <td className="p-4 font-medium">{feature.name}</td>
              <td className="p-4 text-center text-sm">{feature.startup}</td>
              <td className="p-4 text-center text-sm">{feature.scaleup}</td>
              <td className="p-4 text-center text-sm">{feature.indie}</td>
              <td className="p-4 text-center text-sm">{feature.ecommerce}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
});

export function PricingSection() {
  const [showComparison, setShowComparison] = useState(false);

  const plans = [
    {
      icon: Zap,
      name: "Pack Indépendant",
      price: "800",
      originalPrice: "1 800",
      savings: "1000€",
      delivery: "Livraison 24-48h",
      description: "Site vitrine professionnel pour freelances et consultants",
      features: [
        {
          name: "Site 3-4 pages responsive",
          description: "landing page, contact, pages custom",
        },
        {
          name: "SEO de base optimisé",
          description: "Audit de base, optimisation, stratégie mots-clés",
        },
        {
          name: "Formulaire de contact",
          description: "Intégration d'un service d'envoi d'email sécurisé",
        },
        {
          name: "Livraison 48h",
          description: "Livraison rapide (24-48h sauf imprévu) garantie",
        },
        {
          name: "1 mois de support",
          description: "Support technique, mises à jour, optimisations",
        },
      ],
      highlighted: false,
      cta: "Créer mon site vitrine",
      color: "text-trust-500",
      bgColor: "bg-trust-100 dark:bg-trust-900/30",
    },
    {
      icon: Rocket,
      name: "Pack Growth",
      price: "2 000",
      originalPrice: "4 000",
      savings: "2 000€",
      delivery: "Livraison 48-72h",
      description: "Solution complète pour startups en croissance rapide",
      features: [
        {
          name: "Site 5-7 pages optimisé conversion",
          description: "Landing page, à propos, contact, pages custom",
        },
        {
          name: "SEO technique + contenu",
          description:
            "Audit complet, optimisation on-page, stratégie mots-clés",
        },
        {
          name: "Blog intégré + 3 articles",
          description: "CMS optimisé et contenu SEO pour votre secteur",
        },
        {
          name: "Analytics + tracking leads",
          description: "Google Analytics 4, Search Console, suivi conversions",
        },
        {
          name: "Maintenance 3 mois",
          description: "Support technique, mises à jour, optimisations",
        },
      ],
      highlighted: true,
      cta: "Démarrer mon projet startup",
      color: "text-primary-500",
      bgColor: "bg-primary-100 dark:bg-primary-900/30",
    },
    {
      icon: TrendingUp,
      name: "Pack Scale-up",
      price: "3 000",
      originalPrice: "6 000",
      savings: "3 000€",
      delivery: "Livraison 72-96h",
      description: "Pour startups prêtes à scaler massivement",
      features: [
        {
          name: "Tout Pack Growth inclus",
          description: "Base solide + fonctionnalités avancées",
        },
        {
          name: "Landing pages A/B testing",
          description: "Optimisation conversion avec tests multivariés",
        },
        {
          name: "Intégrations CRM/outils",
          description: "HubSpot, Pipedrive, Mailchimp, Zapier...",
        },
        {
          name: "Audit UX approfondi",
          description: "Analyse comportement utilisateur et recommandations",
        },
        {
          name: "Support prioritaire 6 mois",
          description: "Réponse <8h, hotline dédiée, optimisations gratuites",
        },
      ],
      highlighted: false,
      cta: "Scaler mon business",
      color: "text-accent-500",
      bgColor: "bg-accent-100 dark:bg-accent-900/30",
    },
    {
      icon: Calendar,
      name: "Pack E-Commerce",
      price: "Sur devis",
      savings: "+50%",
      delivery: "Livraison 96-120h",
      description: "Boutique en ligne complète pour startups produit",
      features: [
        {
          name: "Boutique complète",
          description: "Site e-commerce complet, prêt à vendre",
        },
        {
          name: "Paiement sécurisé avec intégration",
          description: "Intégration service de payement au choix",
        },
        {
          name: "Gestion stocks automatisée",
          description: "Suivi automatique des stock en temps réel",
        },
        {
          name: "Dashboard analytics avancé",
          description: "Suivi clair des performances",
        },
        {
          name: "Support 6 mois inclus",
          description: "Réponse <8h, hotline dédiée, optimisations gratuites",
        },
      ],
      highlighted: false,
      cta: "Discuter de mon e-commerce",
      color: "text-success-500",
      bgColor: "bg-success-100 dark:bg-success-900/30",
    },
  ];

  return (
    <section className="section-padding relative overflow-hidden">
      {/* Background decorative elements optimisés */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <div
          className="absolute top-20 left-10 w-32 h-32 bg-primary-500 rounded-full blur-3xl will-change-transform"
          style={{
            animation: "float 20s ease-in-out infinite",
            transform: "translateZ(0)",
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-40 h-40 bg-trust-500 rounded-full blur-3xl will-change-transform"
          style={{
            animation: "float 25s ease-in-out infinite",
            animationDelay: "2s",
            transform: "translateZ(0)",
          }}
        />
      </div>

      <div className="container-center relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6">
            <span className="text-primary-700 dark:text-primary-300 font-medium text-sm">
              💰 Tarifs startup-friendly
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 font-inter">
            Forfaits{" "}
            <span className="text-primary-600 dark:text-primary-400">
              Site Web
            </span>{" "}
            Startup
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto font-inter leading-relaxed">
            Solutions web adaptées à chaque étape de votre croissance. Tarifs
            transparents, livraison express.
            <br />
            <strong className="text-trust-600 dark:text-trust-400">
              ROI garanti : investissement rentabilisé en 3-6 mois maximum.
            </strong>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {plans.map((plan, index) => (
            <PricingCard key={index} plan={plan} index={index} />
          ))}
        </div>

        {/* Tableau comparatif */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="mb-16"
        >
          <div className="text-center mb-8">
            <button
              onClick={() => setShowComparison(!showComparison)}
              className="inline-flex items-center px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              {showComparison ? "Masquer" : "Voir"} le comparatif détaillé
              <ArrowRight
                className={`ml-2 h-4 w-4 transition-transform duration-300 ${
                  showComparison ? "rotate-90" : ""
                }`}
              />
            </button>
          </div>

          <motion.div
            initial={false}
            animate={{
              height: showComparison ? "auto" : 0,
            }}
            transition={{
              duration: 0.5,
              ease: "easeInOut",
            }}
            style={{ overflow: "hidden" }}
          >
            <motion.div
              initial={false}
              animate={{
                opacity: showComparison ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
                delay: showComparison ? 0.2 : 0,
                ease: "easeOut",
              }}
            >
              <ComparisonTable />
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Garanties et conditions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <h3 className="text-2xl font-bold mb-6">
              Inclus dans tous nos{" "}
              <span className="text-primary-600 dark:text-primary-400">
                forfaits
              </span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="h-6 w-6 text-trust-500" />
                <span className="font-medium">Aide au déploiement</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="h-6 w-6 text-trust-500" />
                <span className="font-medium">Optimisation mobile</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <CheckCircle className="h-6 w-6 text-trust-500" />
                <span className="font-medium">2 modifications gratuites</span>
              </div>
            </div>
            <p className="text-sm text-gray-500 dark:text-gray-500 font-inter">
              Garantie satisfait ou remboursé 30 jours • Paiement sécurisé •
              Devis gratuit sous 24h
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
