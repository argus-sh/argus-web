"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGradientTextProps {
  children: React.ReactNode;
  className?: string;
}

export function AnimatedGradientText({
  children,
  className,
}: AnimatedGradientTextProps) {
  return (
    <motion.span
      className={cn(
        "bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 dark:from-gray-300 dark:via-gray-100 dark:to-gray-50 bg-clip-text text-transparent",
        className,
      )}
      animate={{
        backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
      }}
      transition={{
        duration: 3,
        ease: "linear",
        repeat: Infinity,
      }}
      style={{
        backgroundSize: "200% 200%",
      }}
    >
      {children}
    </motion.span>
  );
}
