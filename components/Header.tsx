"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { Logo } from "./Logo";
import { useTheme } from "./ThemeProvider";

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "À propos", href: "/a-propos" },
  { name: "Compétences", href: "/competences" },
  { name: "Réalisations", href: "/realisations" },
  { name: "Forfaits", href: "/forfaits" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const router = useRouter();

  const handleScroll = useCallback(() => {
    setScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  const toggleMobileMenu = useCallback(() => {
    setMobileMenuOpen(!mobileMenuOpen);
  }, [mobileMenuOpen]);

  const closeMobileMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme(theme === "dark" ? "light" : "dark");
  }, [theme, setTheme]);

  // Préchargement de toutes les routes principales au chargement
  useEffect(() => {
    navigation.forEach((item) => {
      if (item.href !== pathname) {
        router.prefetch(item.href);
      }
    });
    // Précharge aussi la page contact
    if (pathname !== "/contact") {
      router.prefetch("/contact");
    }
  }, [pathname, router]);

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-2" : "py-4"
        }`}
      >
        <div className="container-center">
          <div className="flex items-center justify-between">
            {/* Logo avec fond semi-transparent élégant */}
            <Link href="/" className="z-50 relative group">
              <div className="absolute inset-0 bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm rounded-xl border border-white/30 dark:border-gray-700/30 shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100" />
              <div className="relative p-3">
                <Logo />
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              <div className="glassmorphism rounded-full px-6 py-3 shadow-lg">
                <div className="flex items-center space-x-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 group will-change-transform subtle-hover ${
                        pathname === item.href
                          ? "text-primary-500"
                          : "text-gray-700 dark:text-gray-200 hover:text-primary-500"
                      }`}
                      aria-current={pathname === item.href ? "page" : undefined}
                    >
                      {item.name}
                      {pathname === item.href && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-primary-500/10 rounded-md -z-10"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  ))}

                  <div className="w-px h-6 bg-gray-200 dark:bg-gray-700" />

                  {/* Bouton Contact avec hover élégant */}
                  <Link
                    href="/contact"
                    className="relative bg-trust-500 text-white font-medium px-4 py-2 rounded-full text-sm will-change-transform contact-button-hover transition-all duration-300 hover:shadow-lg hover:shadow-trust-500/20"
                  >
                    <span className="relative z-10">Contact</span>
                  </Link>

                  {/* Theme toggle avec hover amélioré */}
                  <button
                    onClick={toggleTheme}
                    className="relative p-2 rounded-full transition-all duration-300 will-change-transform group hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md"
                    aria-label="Toggle theme"
                  >
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary-500/5 to-trust-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {theme === "dark" ? (
                      <Sun className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:rotate-12 group-hover:scale-110" />
                    ) : (
                      <Moon className="h-5 w-5 relative z-10 transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110" />
                    )}
                  </button>
                </div>
              </div>
            </nav>

            {/* Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full glassmorphism hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 will-change-transform group"
                aria-label="Toggle theme"
              >
                {theme === "dark" ? (
                  <Sun className="h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                ) : (
                  <Moon className="h-5 w-5 transition-transform duration-300 group-hover:-rotate-12" />
                )}
              </button>

              <button
                onClick={toggleMobileMenu}
                className="p-2 rounded-full glassmorphism hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-300 will-change-transform group"
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 transition-transform duration-300 group-hover:rotate-90" />
                ) : (
                  <Menu className="h-6 w-6 transition-transform duration-300 group-hover:scale-110" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu optimisé */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-40 lg:hidden"
          >
            {/* Overlay derrière le menu, z-30 */}
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30"
              onClick={closeMobileMenu}
            />
            {/* Menu mobile au-dessus, z-40 */}
            <div className="fixed right-0 top-0 h-full w-64 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md shadow-xl z-40">
              <div className="flex flex-col pt-20 p-6">
                <nav className="flex flex-col space-y-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => {
                        closeMobileMenu();
                        if (item.href === "/" && pathname === "/") {
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }
                      }}
                      className={`relative px-3 py-2 text-base font-medium transition-all duration-300 group will-change-transform subtle-hover ${
                        pathname === item.href
                          ? "text-primary-500 bg-primary-50 dark:bg-primary-900/20 rounded-md"
                          : "text-gray-700 dark:text-gray-200 hover:text-primary-500 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-md"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="pt-4">
                    <Link
                      href="/contact"
                      onClick={closeMobileMenu}
                      className="relative bg-trust-500 text-white font-medium px-4 py-2 rounded-full transition-all duration-300 w-full text-center block will-change-transform contact-button-hover hover:shadow-lg hover:shadow-trust-500/20"
                    >
                      <span className="relative z-10">Contact</span>
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
