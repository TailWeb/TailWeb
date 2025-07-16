"use client";

import { motion } from "framer-motion";
import { Brain, Code, Rocket, Users } from "lucide-react";
import { memo } from "react";

const SkillCard = memo(function SkillCard({ 
  skill, 
  index 
}: { 
  skill: { icon: any; title: string; description: string }; 
  index: number 
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ 
        duration: 0.5, 
        delay: index * 0.1,
        ease: "easeOut"
      }}
      viewport={{ once: true, margin: "-50px" }}
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg will-change-transform"
    >
      <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg mb-4">
        <skill.icon className="h-6 w-6 text-primary-500" />
      </div>
      <h3 className="text-lg font-semibold mb-2">{skill.title}</h3>
      <p className="text-gray-600 dark:text-gray-400 text-sm">
        {skill.description}
      </p>
    </motion.div>
  );
});

export function AboutSection() {
  const skills = [
    {
      icon: Code,
      title: "Développement",
      description: "Next.js, React, TypeScript, Node.js",
    },
    {
      icon: Brain,
      title: "Prompt Engineering",
      description: "IA générative, optimisation prompts",
    },
    {
      icon: Rocket,
      title: "Performance",
      description: "Optimisation, SEO, accessibilité",
    },
    {
      icon: Users,
      title: "UX/UI",
      description: "Design moderne, expérience utilisateur",
    },
  ];

  return (
    <section className="section-padding">
      <div className="container-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À propos de <span className="text-gradient">moi</span>
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Développeur Web et Prompt Engineer à seulement 15 ans. Je suis
              passionné par l'informatique depuis tout petit. À 8 ans déjà, je
              faisais mes premiers serveurs et programmes.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Grâce à ma passion pour l'informatique, j'ai découvert l'IA dès
              2021. Aujourd'hui, avec 3 ans d'expérience dans l'IA et 5 dans le
              développement, je peux créer des sites web rapides, élégants et
              quasiment parfaits.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
              Ma jeunesse me permet d'apporter une vision fraîche et moderne au
              développement web, tout en garantissant un professionnalisme et
              une qualité irréprochables.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="bg-primary-100 dark:bg-primary-900 px-4 py-2 rounded-full">
                <span className="text-primary-700 dark:text-primary-300 font-medium">
                  Autodidacte
                </span>
              </div>
              <div className="bg-accent-100 dark:bg-accent-900 px-4 py-2 rounded-full">
                <span className="text-accent-700 dark:text-accent-300 font-medium">
                  Innovant
                </span>
              </div>
              <div className="bg-success-100 dark:bg-success-900 px-4 py-2 rounded-full">
                <span className="text-success-700 dark:text-success-300 font-medium">
                  Efficace
                </span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {skills.map((skill, index) => (
              <SkillCard key={index} skill={skill} index={index} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}