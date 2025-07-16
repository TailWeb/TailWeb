"use client";

import { motion } from "framer-motion";
import { memo } from "react";

const SkillBar = memo(function SkillBar({
  skill,
  index,
}: {
  skill: { name: string; level: number };
  index: number;
}) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <span className="text-sm font-medium">{skill.name}</span>
        <span className="text-sm text-gray-600 dark:text-gray-400">
          {skill.level}%
        </span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${skill.level}%` }}
          transition={{
            duration: 1,
            delay: index * 0.1,
            ease: "easeOut",
          }}
          className="bg-primary-500 h-2 rounded-full"
        />
      </div>
    </div>
  );
});

const SkillCategory = memo(function SkillCategory({
  category,
  index,
}: {
  category: { title: string; skills: { name: string; level: number }[] };
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.5,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg will-change-transform"
    >
      <h3 className="text-xl font-semibold mb-6 text-center">
        {category.title}
      </h3>
      <div className="space-y-4">
        {category.skills.map((skill, skillIndex) => (
          <SkillBar key={skillIndex} skill={skill} index={skillIndex} />
        ))}
      </div>
    </motion.div>
  );
});

export function SkillsSection() {
  const skillCategories = [
    {
      title: "Frontend",
      skills: [
        { name: "React/Next.js", level: 95 },
        { name: "TypeScript", level: 90 },
        { name: "Tailwind CSS", level: 98 },
        { name: "Framer Motion", level: 85 },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "APIs RESTful", level: 90 },
        { name: "Bases de données", level: 80 },
        { name: "Authentification", level: 85 },
      ],
    },
    {
      title: "Outils & Méthodes",
      skills: [
        { name: "Git/GitHub", level: 90 },
        { name: "SEO", level: 85 },
        { name: "Performance", level: 88 },
        { name: "Accessibilité", level: 82 },
      ],
    },
    {
      title: "IA & Prompt Engineering",
      skills: [
        { name: "Claude/Gemini/etc", level: 92 },
        { name: "Optimisation prompts", level: 88 },
        { name: "Automatisation", level: 85 },
        { name: "Intégrations IA", level: 80 },
      ],
    },
  ];

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
            Mes{" "}
            <span className="text-primary-600 dark:text-primary-400">
              Compétences
            </span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des solutions web
            modernes
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} category={category} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
