"use client";

import { motion } from "framer-motion";
import { memo } from "react";

const TimelineItem = memo(function TimelineItem({ 
  item, 
  index 
}: { 
  item: { year: string; age: string; title: string; description: string }; 
  index: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="relative flex items-center mb-8"
    >
      {/* Timeline dot */}
      <div className="absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-800"></div>

      {/* Content */}
      <div className="ml-16 bg-white dark:bg-gray-900 rounded-lg p-6 shadow-lg flex-1 will-change-transform">
        <div className="flex items-center mb-2">
          <span className="text-2xl font-bold text-primary-500 mr-4">
            {item.year}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-2 py-1 rounded">
            {item.age}
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
        <p className="text-gray-600 dark:text-gray-400">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
});

export function TimelineSection() {
  const timeline = [
    {
      year: "2018",
      age: "8 ans",
      title: "Premiers pas",
      description:
        "Découverte de l'informatique et créations de mes premiers serveurs",
    },
    {
      year: "2020",
      age: "10 ans",
      title: "Apprentissage du code",
      description: "HTML, CSS, JavaScript - passion immédiate",
    },
    {
      year: "2022",
      age: "13 ans",
      title: "Premiers projets",
      description: "Création de sites web pour des proches",
    },
    {
      year: "2024",
      age: "14 ans",
      title: "Professionnalisation",
      description:
        "Lancement de mon activité freelance et création de site gratuitement auprès d'entreprises",
    },
    {
      year: "2025",
      age: "15 ans",
      title: "Expertise confirmée",
      description:
        "Ayant travaillé avec des entreprises dans le passé, je commence à monétisé mon offre",
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Mon <span className="text-gradient2">Parcours</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            De la curiosité d'un enfant à l'expertise d'un professionnel
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>

            {timeline.map((item, index) => (
              <TimelineItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}