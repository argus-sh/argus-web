"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronUp } from "lucide-react";
import { useEffect, useState } from "react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollYProgress } = useScroll();

  // Transform scroll progress to opacity and scale
  const opacity = useTransform(scrollYProgress, [0.2, 0.3], [0, 1]);
  const scale = useTransform(scrollYProgress, [0.2, 0.3], [0.8, 1]);

  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      setIsVisible(latest > 0.2); // Show after 20% scroll
    });

    return () => unsubscribe();
  }, [scrollYProgress]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  if (!isVisible) return null;

  return (
    <motion.button
      onClick={scrollToTop}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-gradient-to-r from-gray-800 via-gray-900 to-black dark:from-gray-200 dark:via-gray-100 dark:to-white text-white dark:text-gray-900 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      style={{ opacity, scale }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-md" />

      {/* Arrow icon */}
      <ChevronUp className="w-5 h-5 relative z-10 group-hover:animate-bounce" />

      {/* Tooltip */}
      <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 text-xs rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none">
        Back to top
        <div className="absolute top-full right-3 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900 dark:border-t-gray-100" />
      </div>
    </motion.button>
  );
}
