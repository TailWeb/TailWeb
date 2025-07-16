"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Image from "next/image";
import { memo } from "react";

const ProjectCard = memo(function ProjectCard({
  project,
  index,
}: {
  project: any;
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
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg border border-gray-100 dark:border-gray-700 will-change-transform project-card-hover relative"
    >
      <div className="relative h-48 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-primary-500 text-white px-2 py-1 rounded text-xs font-medium">
            {project.category}
          </span>
        </div>
        {project.status === "completed" && (
          <div className="absolute top-4 right-4">
            <div className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-trust-500/90 text-white backdrop-blur-sm">
              <CheckCircle className="h-3 w-3 mr-1" />
              Terminé
            </div>
          </div>
        )}
      </div>

      <div className="p-6 relative z-10">
        <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-primary-600 dark:group-hover:text-primary-400">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, tagIndex: number) => (
            <span
              key={tagIndex}
              className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 px-2 py-1 rounded text-xs transition-all duration-300 group-hover:bg-primary-100 dark:group-hover:bg-primary-900/30 group-hover:text-primary-700 dark:group-hover:text-primary-300"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between">
          {/* Suppression de l'affichage de la date */}
          <div className="flex items-center space-x-2">
            <a
              href={project.link}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-all duration-300 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:scale-110"
              aria-label="Voir le projet"
            ></a>
            <a
              href={project.github}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-trust-500 transition-all duration-300 rounded-full hover:bg-trust-50 dark:hover:bg-trust-900/20 hover:scale-110"
              aria-label="Voir le code source"
            ></a>
          </div>
        </div>
      </div>
    </motion.div>
  );
});

export function ProjectsSection() {
  const projects = [
    {
      id: 1,
      title: "Landing page - E-commerce",
      description:
        "Page d'accueil basique qui redirige vers un site de vente. La page est optimisée pour le SEO.",
      image: "/images/1.jpg", // <- image locale
      tags: ["HTML", "CSS", "JavaScript", "Tailwind"],
      category: "Landing Page",
      status: "completed",
    },
    {
      id: 2,
      title: "Site MultiPages - Groupe Musical",
      description:
        "Site Web Multiplages pour groupe de musique avec interface admin pour gérer les événements.",
      image: "/images/2.jpg",
      tags: ["React", "Tailwind", "Next.js", "Node.js"],
      category: "Multipages",
      status: "completed",
    },
    {
      id: 3,
      title: "Application - Tracking Alimentaire",
      description:
        "Application Web complète pour gérer les repas, les recettes, les apports caloriques etc.",
      image: "/images/3.jpg",
      tags: ["Next.js", "Framer Motion", "Tailwind"],
      category: "WebApp",
      status: "completed",
    },
    {
      id: 4,
      title: "Site Multipages - Jeu Vidéo",
      description:
        "Site Web Multipages complet pour un Jeu Vidéo avec guide d'installation, une sidebar, informations complètes, animations etc.",
      image: "/images/4.jpg",
      tags: ["React", "Tailwind", "Next.js", "Node.js"],
      category: "Multipages",
      status: "completed",
    },
    {
      id: 5,
      title: "Plateforme E-Commerce",
      description:
        "Plateforme E-Commerce avec panel administrateur, gestion des produits, des commandes, des clients etc.",
      image: "/images/5.jpg",
      tags: ["React", "Paypal SDK", "Tailwind", "Next.js"],
      category: "E-Commerce",
      status: "completed",
    },
    {
      id: 6,
      title: "Dashboard - Gestion de Tâches",
      description: "Dashboard d'administration pour gérer toutes les tâches.",
      image: "/images/6.jpg",
      tags: ["Vue.js", "Tailwind", "GSAP", "Nuxt"],
      category: "Portfolio",
      status: "completed",
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
            Mes <span className="text-gradient">Réalisations</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Découvrez mes derniers projets et réalisations, témoins de mon
            expertise et de ma créativité
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Trust section optimisée */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, margin: "-50px" }}
          className="mt-16 text-center"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-700">
            <div className="flex items-center justify-center mb-4">
              <CheckCircle className="h-8 w-8 text-trust-500 mr-3" />
              <h3 className="text-2xl font-bold trust-accent">
                100% de projets livrés dans les délais
              </h3>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Chaque projet montre mon implication et ma détermination. Je met
              systématiquement 100% de mon énergie dans la réalisation de votre
              site.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
