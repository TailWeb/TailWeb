"use client";

import { motion } from "framer-motion";
import {
  AlertCircle,
  CheckCircle,
  Clock,
  Mail,
  MapPin,
  Send,
} from "lucide-react";
import { memo, useCallback, useState } from "react";

const ContactInfo = memo(function ContactInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-8"
    >
      <div>
        <h2 className="text-2xl font-semibold mb-6">Informations de contact</h2>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg">
              <Mail className="h-6 w-6 text-primary-500" />
            </div>
            <div>
              <p className="font-medium">Email</p>
              <a
                href="mailto:louis.muscat73610@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-colors"
              >
                louis.muscat73610@gmail.com
              </a>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg">
              <MapPin className="h-6 w-6 text-primary-500" />
            </div>
            <div>
              <p className="font-medium">Localisation</p>
              <p className="text-gray-600 dark:text-gray-400">France</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-lg">
              <Clock className="h-6 w-6 text-primary-500" />
            </div>
            <div>
              <p className="font-medium">Disponibilité</p>
              <p className="text-gray-600 dark:text-gray-400">Lun-Ven 9h-18h</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-trust-500 rounded-lg p-6 text-white">
        <div className="flex items-center mb-2">
          <CheckCircle className="h-6 w-6 mr-2" />
          <h3 className="text-xl font-semibold">Réponse rapide garantie</h3>
        </div>
        <p className="opacity-90">
          Je m'engage à vous répondre dans les 24h suivant votre message. Pour
          les projets urgents, n'hésitez pas à le préciser.
        </p>
      </div>
    </motion.div>
  );
});

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setError(null);

      if (
        !formData.name ||
        !formData.email ||
        !formData.subject ||
        !formData.message
      ) {
        setError("Veuillez remplir tous les champs obligatoires");
        return;
      }

      if (formData.name.length < 2 || formData.name.length > 100) {
        setError("Le nom doit contenir entre 2 et 100 caractères");
        return;
      }

      if (formData.message.length < 10 || formData.message.length > 2000) {
        setError("Le message doit contenir entre 10 et 2000 caractères");
        return;
      }

      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!emailRegex.test(formData.email)) {
        setError("Veuillez entrer une adresse email valide");
        return;
      }

      setIsSubmitting(true);

      try {
        const res = await fetch("/api/contact", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        });

        const data = await res.json();

        if (!res.ok) {
          throw new Error(data.error || "Erreur inconnue");
        }

        setIsSubmitted(true);
        setFormData({ name: "", email: "", subject: "", message: "" });

        setTimeout(() => {
          setIsSubmitted(false);
        }, 5000);
      } catch (err: any) {
        console.error("Erreur:", err);
        setError(err.message || "Erreur lors de l'envoi du message.");
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  const handleChange = useCallback(
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      setFormData((prev) => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
      if (error) setError(null);
    },
    [error]
  );

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
            Contactez-
            <span className="text-primary-600 dark:text-primary-400">moi</span>
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Discutons de votre projet. Réponse garantie sous 24h.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <ContactInfo />

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} noValidate>
                  {error && (
                    <div className="mb-6 flex items-center space-x-2 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-md">
                      <AlertCircle className="h-5 w-5 text-red-500" />
                      <span className="text-red-700 dark:text-red-400 text-sm">
                        {error}
                      </span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium mb-2"
                      >
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        maxLength={100}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white transition-colors"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium mb-2"
                      >
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        maxLength={254}
                        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white transition-colors"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="subject"
                      className="block text-sm font-medium mb-2"
                    >
                      Sujet *
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white transition-colors"
                    >
                      <option value="">Sélectionnez un sujet</option>
                      <option value="site-vitrine">
                        Site vitrine professionnel
                      </option>
                      <option value="site-startup">Site web startup</option>
                      <option value="e-commerce">Boutique e-commerce</option>
                      <option value="audit-seo">Audit SEO gratuit</option>
                      <option value="projet-sur-mesure">
                        Projet sur mesure
                      </option>
                      <option value="autre">Autre demande</option>
                    </select>
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      maxLength={2000}
                      className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-700 dark:text-white transition-colors resize-vertical"
                      placeholder="Décrivez votre projet, vos besoins, votre budget approximatif..."
                    />
                    <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                      {formData.message.length}/2000 caractères
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full inline-flex items-center justify-center bg-primary-500 hover:bg-primary-600 text-white font-medium px-6 py-3 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900 will-change-transform ${
                      isSubmitting ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Envoi en cours...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Envoyer le message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                    Vos données sont protégées et ne seront jamais partagées
                    avec des tiers.
                  </p>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="email-success text-center py-12"
                >
                  <div className="flex items-center justify-center w-20 h-20 bg-trust-100 dark:bg-trust-900/30 rounded-full mx-auto mb-6">
                    <CheckCircle className="h-10 w-10 text-trust-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-trust-600 dark:text-trust-400 mb-4">
                    Message envoyé avec succès !
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    Merci pour votre message. Je vous répondrai dans les 24h.
                  </p>
                  <div className="success-indicator">
                    <CheckCircle className="h-4 w-4 mr-1" />
                    Réponse garantie sous 24h
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
