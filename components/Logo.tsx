"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { memo } from "react";
import { useTheme } from "./ThemeProvider";

const Logo = memo(function Logo() {
  const { theme } = useTheme();

  const logoSrc = theme === "light" ? "/logo-v2-white.png" : "/logo-v2.png";

  return (
    <motion.div
      className="relative flex items-center justify-center"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2, ease: "easeOut" },
      }}
    >
      <Image
        src={logoSrc}
        alt="TailWeb Logo"
        width={100}
        height={100}
        className="h-auto w-auto max-w-[100px] max-h-[100px]"
        priority
      />
    </motion.div>
  );
});

export { Logo };
