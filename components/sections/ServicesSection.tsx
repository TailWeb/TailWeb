"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle,
  DollarSign,
  Monitor,
  Rocket,
  ShoppingCart,
  Star,
  Target,
  TrendingUp,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { memo } from "react";

const StartupServiceCard = memo(function StartupServiceCard({
  service,
  index,
}: {
  service: any;
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
      className={`relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg border-2 will-change-transform service-card-hover ${
        service.featured
          ? "border-primary-500 ring-2 ring-primary-200 dark:ring-primary-800 scale-105"
          : "border-gray-200 dark:border-gray-700"
      }`}
      style={{ minHeight: "520px" }}
    >
      {service.featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
            <Star className="h-4 w-4 mr-1" />
            Recommandé startup
          </div>
        </div>
      )}

      <div className="p-8 flex flex-col h-full">
        <div className="text-center mb-6">
          <div
            className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-4 ${service.bgColor}`}
          >
            <service.icon className={`h-8 w-8 ${service.color}`} />
          </div>
          <h3 className="text-2xl font-bold mb-2">{service.title}</h3>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            {service.description}
          </p>
          <div className="flex items-baseline justify-center mb-4">
            <span className="text-4xl font-bold text-primary-500">
              {service.price}
            </span>
            {service.price !== "Sur devis" && (
              <span className="text-gray-600 dark:text-gray-400 ml-1">€</span>
            )}
          </div>
          {service.originalPrice && (
            <div className="text-sm text-gray-500 line-through mb-2">
              Prix marché : {service.originalPrice}
            </div>
          )}
        </div>

        <div className="space-y-4 mb-8 flex-grow">
          {service.features.map((feature: any, featureIndex: number) => (
            <div key={featureIndex} className="flex items-start space-x-3">
              <CheckCircle className="h-5 w-5 text-trust-500 mt-0.5 flex-shrink-0" />
              <div>
                <span className="text-gray-900 dark:text-white font-medium">
                  {feature.name}
                </span>
                {feature.description && (
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    {feature.description}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

        {service.results && (
          <div className="bg-trust-50 dark:bg-trust-900/20 rounded-lg p-4 mb-6">
            <h4 className="font-semibold text-trust-700 dark:text-trust-300 mb-2">
              Résultats garantis :
            </h4>
            <div className="grid grid-cols-2 gap-2 text-sm">
              {service.results.map((result: string, resultIndex: number) => (
                <div key={resultIndex} className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-trust-500" />
                  <span className="text-trust-600 dark:text-trust-400">
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
            className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-full font-semibold transition-all duration-300 text-center will-change-transform hover:scale-105 ${
              service.featured
                ? "bg-primary-500 hover:bg-primary-600 text-white shadow-lg hover:shadow-xl"
                : "bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-900 dark:text-white border border-gray-200 dark:border-gray-600"
            }`}
          >
            <span className="relative z-10">{service.cta}</span>
            <ArrowRight className="ml-2 h-5 w-5 relative z-10" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
});

const WhyStartupsCard = memo(function WhyStartupsCard({
  reason,
  index,
}: {
  reason: any;
  index: number;
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
      className="text-center p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
    >
      <div
        className={`inline-flex items-center justify-center w-12 h-12 rounded-lg mb-4 ${reason.bgColor}`}
      >
        <reason.icon className={`h-6 w-6 ${reason.color}`} />
      </div>
      <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
        {reason.title}
      </h4>
      <p className="text-sm text-gray-600 dark:text-gray-400">
        {reason.description}
      </p>
    </motion.div>
  );
});

export function ServicesSection() {
  const startupServices = [
    {
      icon: Monitor,
      title: "Pack Indépendant",
      price: "800",
      originalPrice: "1 800€",
      description: "Site vitrine professionnel pour freelances",
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
      color: "text-trust-500",
      bgColor: "bg-trust-100 dark:bg-trust-900/30",
      cta: "Créer mon site vitrine",
      featured: false,
    },
    {
      icon: Rocket,
      title: "Pack Growth",
      price: "2 000",
      originalPrice: "4 000€",
      description: "Solution complète pour startups en croissance",
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
      color: "text-primary-500",
      bgColor: "bg-primary-100 dark:bg-primary-900/30",
      cta: "Démarrer mon projet startup",
      featured: true,
    },
    {
      icon: TrendingUp,
      title: "Pack Scale-up",
      price: "3 000",
      originalPrice: "6 000€",
      description: "Pour startups prêtes à scaler rapidement",
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
      color: "text-accent-500",
      bgColor: "bg-accent-100 dark:bg-accent-900/30",
      cta: "Scaler mon business",
      featured: false,
    },
    {
      icon: ShoppingCart,
      title: "Pack E-Commerce",
      price: "Sur devis",
      originalPrice: "50% plus cher",
      description: "Boutique en ligne pour startups produit",
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
      color: "text-success-500",
      bgColor: "bg-success-100 dark:bg-success-900/30",
      cta: "Discuter de mon projet",
      featured: false,
    },
  ];

  const whyStartups = [
    {
      icon: Target,
      title: "Expertise startup",
      description:
        "Se lancer vite, lever des fonds sans exploser le budget, c’est possible",
      color: "text-primary-500",
      bgColor: "bg-primary-100 dark:bg-primary-900/30",
    },
    {
      icon: Zap,
      title: "Livraison express",
      description: "Site en ligne en 48-72h, clé en main et responsive",
      color: "text-warning-500",
      bgColor: "bg-warning-100 dark:bg-warning-900/30",
    },
    {
      icon: DollarSign,
      title: "ROI mesurable",
      description:
        "Analytics avancés, tracking conversions, reporting mensuel de performance",
      color: "text-trust-500",
      bgColor: "bg-trust-100 dark:bg-trust-900/30",
    },
    {
      icon: BarChart3,
      title: "Outils avancés",
      description: "Sulutions d'A/B testing, audit UX, intégration CRM",
      color: "text-accent-500",
      bgColor: "bg-accent-100 dark:bg-accent-900/30",
    },
  ];

  return (
    <section className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full mb-6">
            <span className="text-primary-700 dark:text-primary-300 font-medium text-sm">
              🎯 Solutions startup-first
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Forfaits <span className="text-gradient">Site Web Startup</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Solutions web adaptées à chaque étape de votre croissance. Tarifs
            transparents, livraison express, résultats garantis.
          </p>
        </motion.div>

        {/* Services startup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {startupServices.map((service, index) => (
            <StartupServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* Pourquoi les startups nous choisissent */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-16"
        >
          <h3 className="text-3xl font-bold text-center mb-12">
            Pourquoi les{" "}
            <span className="text-primary-600 dark:text-primary-400">
              startups
            </span>{" "}
            me choisissent ?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyStartups.map((reason, index) => (
              <WhyStartupsCard key={index} reason={reason} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Section garantie startup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-gradient-to-r from-primary-700 to-cyan-700 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            Garantie Startup 100% Satisfait
          </h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-6">
            Engagement résultats : +150% de trafic qualifié en 3 mois ou
            optimisations gratuites jusqu'à atteinte de l'objectif.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">30 jours</div>
              <div className="text-sm opacity-90">Garantie remboursement</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">3 mois</div>
              <div className="text-sm opacity-90">
                Suivi performance gratuit
              </div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <div className="text-2xl font-bold">7j/7</div>
              <div className="text-sm opacity-90">Support technique</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
