"use client";

import { Mail, MapPin } from "lucide-react";
import Link from "next/link";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/a-propos" },
  { name: "Compétences", href: "/competences" },
  { name: "Réalisations", href: "/realisations" },
  { name: "Forfaits", href: "/forfaits" },
  { name: "Contact", href: "/contact" },
];

const legal = [
  { name: "Mentions légales", href: "/mentions-legales" },
  { name: "Politique de confidentialité", href: "/politique-confidentialite" },
];

export function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="container-center py-8 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="mb-4"></div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <a
                  href="mailto:louis.muscat73610@gmail.com"
                  className="flex items-center space-x-2 hover:text-primary-500 transition-colors duration-200 font-inter"
                >
                  <Mail className="h-4 w-4" />
                  <span>louis.muscat73610@gmail.com</span>
                </a>
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-500 to-trust-500 origin-left transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </div>
              <div className="flex items-center space-x-2 text-gray-600 dark:text-gray-400">
                <MapPin className="h-4 w-4" />
                <span className="font-inter">France</span>
              </div>
            </div>
          </div>

          {/* Navigation avec hovers améliorés */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-inter">
              Navigation
            </h3>
            <ul className="space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="relative text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-all duration-300 font-inter group inline-block"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-trust-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                    {/* Subtle glow effect */}
                    <span className="absolute inset-0 bg-primary-500/5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal avec hovers améliorés */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-inter">Légal</h3>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="relative text-gray-600 dark:text-gray-400 hover:text-primary-500 transition-all duration-300 font-inter group inline-block"
                  >
                    {item.name}
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-primary-500 to-trust-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
                    <span className="absolute inset-0 bg-primary-500/5 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-800">
          <div className="text-center">
            <p className="text-gray-600 dark:text-gray-400 text-sm font-inter">
              © {new Date().getFullYear()} TailWeb. Tous droits réservés.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}