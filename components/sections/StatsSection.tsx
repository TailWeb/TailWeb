"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, Shield, Target, TrendingUp, Users } from "lucide-react";
import { memo } from "react";

const TrustIndicator = memo(function TrustIndicator({ 
  icon: Icon, 
  title, 
  description, 
  bgColor, 
  textColor,
  index 
}: { 
  icon: any; 
  title: string; 
  description: string; 
  bgColor: string; 
  textColor: string;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="centered-content flex-col space-y-3 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg will-change-transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105 group"
    >
      <div className={`centered-content w-12 h-12 ${bgColor} rounded-full transition-all duration-300 group-hover:scale-110`}>
        <Icon className={`h-6 w-6 ${textColor} transition-all duration-300 group-hover:scale-110`} />
      </div>
      <span className={`font-semibold ${textColor} transition-colors duration-300 group-hover:text-primary-600 dark:group-hover:text-primary-400`}>
        {title}
      </span>
      <span className="text-sm text-gray-600 dark:text-gray-400 text-center">
        {description}
      </span>
    </motion.div>
  );
});

export function StatsSection() {
  const trustIndicators = [
    {
      icon: Shield,
      title: "Sécurité garantie",
      description: "SSL, RGPD, sauvegardes automatiques",
      bgColor: "bg-trust-100 dark:bg-trust-900/30",
      textColor: "text-trust-600 dark:text-trust-400"
    },
    {
      icon: CheckCircle,
      title: "100% satisfaction",
      description: "Aucun client insatisfait",
      bgColor: "bg-success-100 dark:bg-success-900/30",
      textColor: "text-success-600 dark:text-success-400"
    },
    {
      icon: Award,
      title: "Expertise reconnue",
      description: "5 clients, tous satisfaits",
      bgColor: "bg-primary-100 dark:bg-primary-900/30",
      textColor: "text-primary-600 dark:text-primary-400"
    }
  ];

  return (
    <section id="stats-section" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">

        {/* Trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {trustIndicators.map((indicator, index) => (
            <TrustIndicator 
              key={index} 
              {...indicator} 
              index={index}
            />
          ))}
        </div>

        {/* Section finale avec garanties */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="bg-gradient-to-r from-trust-600 to-trust-500 rounded-2xl p-8 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-4">
            Rejoignez les startups qui réussissent
          </h3>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Plus de 5 entreprises me font confiance pour leur croissance digitale. 
            Votre succès est ma priorité.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white/10 rounded-lg p-4">
              <Users className="h-8 w-8 mx-auto mb-2" />
              <div className="text-lg font-bold">5 entreprises</div>
              <div className="text-sm opacity-90">accompagnées</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <TrendingUp className="h-8 w-8 mx-auto mb-2" />
              <div className="text-lg font-bold">+150% trafic</div>
              <div className="text-sm opacity-90">visiteurs qualifiés</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <Target className="h-8 w-8 mx-auto mb-2" />
              <div className="text-lg font-bold">100% satisfaction</div>
              <div className="text-sm opacity-90">objectifs atteints</div>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <Award className="h-8 w-8 mx-auto mb-2" />
              <div className="text-lg font-bold">0% échec</div>
              <div className="text-sm opacity-90">En 5 créations</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
