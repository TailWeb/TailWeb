'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Calendar, CheckCircle, MessageCircle, Rocket, Star } from 'lucide-react'
import Link from 'next/link'
import { memo } from 'react'

const BenefitPoint = memo(function BenefitPoint({ 
  benefit, 
  index 
}: { 
  benefit: { icon: any; text: string }; 
  index: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.4, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true }}
      className="flex items-center space-x-3 text-white/90"
    >
      <benefit.icon className="h-5 w-5 text-trust-300 flex-shrink-0" />
      <span className="font-medium">{benefit.text}</span>
    </motion.div>
  );
});

const CTASection = memo(function CTASection() {
  const benefits = [
    { icon: CheckCircle, text: "Audit gratuit de votre projet en 24h" },
    { icon: Rocket, text: "Devis personnalisé sous 48h" },
    { icon: Star, text: "Consultation stratégie startup offerte" },
    { icon: Calendar, text: "Livraison garantie en 48-72h*" },
  ];

  return (
    <section className="section-padding bg-gradient-to-br from-primary-800 to-blue-500 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-trust-300 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-accent-300 rounded-full blur-2xl"></div>
      </div>

      <div className="container-center relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Prêt à transformer votre startup ?
          </h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
            Rejoignez les 5 entreprises qui ont choisi TailWeb pour leur croissance digitale.
            <br />
            <strong className="text-3xl">
              Audit gratuit + devis personnalisé en 24h chrono.
            </strong>
          </p>

          {/* Benefits grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10 max-w-2xl mx-auto">
            {benefits.map((benefit, index) => (
              <BenefitPoint key={index} benefit={benefit} index={index} />
            ))}
          </div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-6 justify-center mb-12"
          >
            <Link
              href="/contact"
              className="inline-flex items-center justify-center bg-white text-primary-600 hover:bg-gray-100 font-bold px-10 py-5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 will-change-transform hover:scale-105 text-lg"
            >
              <MessageCircle className="mr-3 h-6 w-6" />
              Audit gratuit de mon projet
            </Link>
            <Link
              href="/forfaits"
              className="inline-flex items-center justify-center bg-transparent border-2 border-white hover:bg-white hover:text-primary-600 font-bold px-10 py-5 rounded-full transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-primary-600 will-change-transform hover:scale-105 text-lg"
            >
              Voir les tarifs startup
              <ArrowRight className="ml-3 h-6 w-6" />
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5, ease: "easeOut" }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            {[
              { value: "24h", label: "Réponse garantie" },
              { value: "30j", label: "Satisfait ou remboursé" },
              { value: "100%", label: "Startups satisfaites" },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl font-bold mb-2">{item.value}</div>
                <div className="text-sm opacity-80">{item.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
});

export { CTASection };
