"use client";

import { motion } from "framer-motion";
import { Button, type ButtonProps } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends ButtonProps {
  children: React.ReactNode;
}

export function GradientButton({
  children,
  className,
  ...props
}: GradientButtonProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <Button
        className={cn(
          "relative overflow-hidden bg-gradient-to-r from-gray-700 via-gray-800 to-gray-900 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300",
          "before:absolute before:inset-0 before:bg-gradient-to-r before:from-gray-900 before:via-gray-800 before:to-gray-700 before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-300",
          "after:absolute after:inset-0 after:bg-white/10 after:opacity-0 hover:after:opacity-100 after:transition-opacity after:duration-300",
          className,
        )}
        {...props}
      >
        <span className="relative z-10">{children}</span>
      </Button>
    </motion.div>
  );
}
