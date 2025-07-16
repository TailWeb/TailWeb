"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  Play,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";
import Link from "next/link";
import { memo, useState } from "react";

const TrustBadge = memo(function TrustBadge({
  metric,
  label,
  index,
}: {
  metric: string;
  label: string;
  index: number;
}) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: 0.8 + index * 0.1,
        ease: "easeOut",
      }}
    >
      <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">
        {metric}
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
        {label}
      </div>
    </motion.div>
  );
});

const BenefitCard = memo(function BenefitCard({
  benefit,
  index,
}: {
  benefit: { icon: any; title: string; description: string };
  index: number;
}) {
  return (
    <motion.div
      className="flex items-start space-x-4 p-4 bg-white/50 dark:bg-gray-800/50 rounded-lg backdrop-blur-sm"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.4,
        delay: 1.2 + index * 0.1,
        ease: "easeOut",
      }}
    >
      <div className="flex-shrink-0 w-8 h-8 bg-trust-500 rounded-lg flex items-center justify-center">
        <benefit.icon className="h-4 w-4 text-white" />
      </div>
      <div>
        <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
          {benefit.title}
        </h4>
        <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
          {benefit.description}
        </p>
      </div>
    </motion.div>
  );
});

export function HeroSection() {
  const [showVideo, setShowVideo] = useState(false);

  const trustMetrics = [
    { metric: "+150%", label: "Trafic qualifié" },
    { metric: "+200%", label: "Leads générés" },
    { metric: "100%", label: "Clients satisfaits" },
    { metric: "48h", label: "Délai moyen" },
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "Design professionnel",
      description: "Qui inspire confiance aux investisseurs",
    },
    {
      icon: TrendingUp,
      title: "SEO avancé",
      description: "Dominez Google dans votre secteur",
    },
    {
      icon: Zap,
      title: "Conversion optimisée",
      description: "Transformez vos visiteurs en clients",
    },
    {
      icon: Users,
      title: "Budget maîtrisé",
      description: "2-3K€ tout inclus, ROI garanti",
    },
  ];

  const handleVideoClick = () => {
    // Redirection vers la section des résultats/témoignages
    const statsSection = document.getElementById("stats-section");
    if (statsSection) {
      statsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden min-h-screen flex items-center bg-gradient-to-br from-gray-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-900 dark:to-blue-900">
      <div className="relative container-center section-padding w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contenu principal */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Badge startup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="inline-flex items-center px-4 py-2 bg-primary-100 dark:bg-primary-900/30 rounded-full"
            >
              <span className="text-primary-700 dark:text-primary-300 font-medium text-sm">
                🚀 Spécialiste sites web startup
              </span>
            </motion.div>

            {/* Titre principal */}
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight font-inter">
                <span className="text-gray-900 dark:text-white">
                  Création Site Web
                </span>
                <br />
                <span className="text-primary-600 dark:text-primary-400">
                  Professionnel Livraison 48h
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mt-6 leading-relaxed font-inter">
                Développeur web freelance spécialisé startups. J'accompagne
                votre croissance avec des sites performants.
                <br />
                <strong className="text-trust-600 dark:text-trust-400">
                  +150% de trafic qualifié garanti en 3 mois. Audit gratuit 24h.
                </strong>
              </p>
            </div>

            {/* Bénéfices clés */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <BenefitCard key={index} benefit={benefit} index={index} />
              ))}
            </div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
              className="flex flex-col sm:flex-row gap-4"
            >
              {/* Bouton Audit gratuit */}
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 text-lg font-inter will-change-transform hover:scale-105"
              >
                <span className="relative z-10">Audit Gratuit Startup 24h</span>
                <ArrowRight className="ml-2 h-5 w-5 relative z-10" />
              </Link>

              {/* Bouton Voir les forfaits */}
              <Link
                href="/forfaits"
                className="inline-flex items-center justify-center bg-white hover:bg-gray-50 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-semibold px-8 py-4 rounded-full transition-all duration-200 border border-gray-200 dark:border-gray-700 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 text-lg font-inter will-change-transform hover:scale-105"
              >
                <Play className="mr-2 h-5 w-5" />
                <span className="relative z-10">Forfaits dès 800€</span>
              </Link>
            </motion.div>

            {/* Trust metrics */}
            <div className="grid grid-cols-4 gap-4 pt-8 border-t border-gray-200 dark:border-gray-700">
              {trustMetrics.map((metric, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-primary-600 dark:text-primary-400">
                    {metric.metric}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                    {metric.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Visuel côté droit */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 border border-gray-100 dark:border-gray-700">
              {/* Mockup site startup */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="flex-1 bg-gray-100 dark:bg-gray-700 rounded px-3 py-1 text-xs text-gray-600 dark:text-gray-400">
                    startup-success.com
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="h-4 bg-primary-500 rounded w-3/4"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-full"></div>
                  <div className="h-3 bg-gray-200 dark:bg-gray-600 rounded w-5/6"></div>

                  <div className="grid grid-cols-3 gap-3 mt-6">
                    <div className="h-16 bg-trust-100 dark:bg-trust-900/30 rounded flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-trust-500" />
                    </div>
                    <div className="h-16 bg-primary-100 dark:bg-primary-900/30 rounded flex items-center justify-center">
                      <Users className="h-6 w-6 text-primary-500" />
                    </div>
                    <div className="h-16 bg-accent-100 dark:bg-accent-900/30 rounded flex items-center justify-center">
                      <Zap className="h-6 w-6 text-accent-500" />
                    </div>
                  </div>

                  <div className="bg-trust-500 text-white rounded-lg p-4 text-center">
                    <div className="text-sm font-semibold">Conversion Rate</div>
                    <div className="text-2xl font-bold">+200%</div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-trust-500 text-white rounded-lg p-3 shadow-lg">
                <div className="text-xs font-semibold">ROI</div>
                <div className="text-lg font-bold">Dès 3 mois</div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-primary-500 text-white rounded-lg p-3 shadow-lg">
                <div className="text-xs font-semibold">Leads/mois</div>
                <div className="text-lg font-bold">+150</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Floating elements optimisés */}
        <div
          className="absolute top-20 left-10 w-24 h-24 bg-primary-500/5 rounded-full blur-xl will-change-transform"
          style={{
            animation: "float 20s ease-in-out infinite",
            transform: "translateZ(0)",
          }}
        />
        <div
          className="absolute bottom-20 right-10 w-32 h-32 bg-trust-500/5 rounded-full blur-xl will-change-transform"
          style={{
            animation: "float 25s ease-in-out infinite",
            animationDelay: "1s",
            transform: "translateZ(0)",
          }}
        />
      </div>
    </section>
  );
}
