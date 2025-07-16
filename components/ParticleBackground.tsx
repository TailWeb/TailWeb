"use client";

import { memo } from "react";
import { useTheme } from "./ThemeProvider";

const ParticleBackground = memo(function ParticleBackground() {
  const { theme } = useTheme();

  if (theme !== "dark") return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Éléments décoratifs colorés subtils optimisés */}
      <div
        className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-500/5 to-trust-500/5 rounded-full blur-3xl will-change-transform"
        style={{
          animation: "float 20s ease-in-out infinite",
          transform: "translateZ(0)",
        }}
      />
      <div
        className="absolute bottom-32 right-16 w-40 h-40 bg-gradient-to-br from-trust-500/4 to-accent-500/4 rounded-full blur-3xl will-change-transform"
        style={{
          animation: "float 25s ease-in-out infinite",
          animationDelay: "2s",
          transform: "translateZ(0)",
        }}
      />
      <div
        className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-accent-500/3 to-primary-500/3 rounded-full blur-2xl will-change-transform"
        style={{
          animation: "float 30s ease-in-out infinite",
          animationDelay: "4s",
          transform: "translateZ(0)",
        }}
      />
      <div
        className="absolute top-1/3 right-1/3 w-28 h-28 bg-gradient-to-br from-primary-500/4 to-trust-500/3 rounded-full blur-3xl will-change-transform"
        style={{
          animation: "float 22s ease-in-out infinite",
          animationDelay: "6s",
          transform: "translateZ(0)",
        }}
      />
      <div
        className="absolute bottom-1/4 left-1/3 w-36 h-36 bg-gradient-to-br from-trust-500/3 to-primary-500/4 rounded-full blur-3xl will-change-transform"
        style={{
          animation: "float 28s ease-in-out infinite",
          animationDelay: "8s",
          transform: "translateZ(0)",
        }}
      />
    </div>
  );
});

export { ParticleBackground };
