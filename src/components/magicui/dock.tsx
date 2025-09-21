"use client";

import { motion } from "framer-motion";
import { Github, Mail } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "../theme-toggle";

const navItems = [
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Comparison",
    href: "#comparison",
  },
  {
    name: "Evolution",
    href: "#evolution",
  },
  {
    name: "About",
    href: "#about",
  },
];

const socialItems = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/argus-sh",
  },
  {
    icon: Mail,
    label: "Email",
    href: "mailto:hello@argus.sh",
  },
];

interface DockProps {
  className?: string;
}

export function Dock({ className }: DockProps) {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed top-4 left-0 right-0 flex justify-center z-50">
      <motion.div
        className={cn(
          "flex items-center gap-3 px-6 py-2 bg-white/80 dark:bg-[#111]/80 backdrop-blur-md rounded-full shadow-lg border border-gray-200/50 dark:border-gray-800/50",
          className,
        )}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <motion.button
          onClick={() => scrollToSection("#home")}
          className="flex items-center gap-2"
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div className="w-6 h-6 bg-gradient-to-r from-gray-700 to-gray-900 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-xs">A</span>
          </div>
        </motion.button>

        <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />

        <div className="flex items-center gap-2">
          {navItems.map((item) => (
            <motion.button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-sans px-2 py-1 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.button>
          ))}
        </div>

        <div className="w-px h-6 bg-gray-300 dark:bg-gray-600" />

        <div className="flex items-center gap-1">
          {socialItems.map((item) => (
            <motion.a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-8 h-8 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <item.icon className="w-4 h-4" />
              <span className="sr-only">{item.label}</span>
            </motion.a>
          ))}
        </div>

        <ThemeToggle />
      </motion.div>
    </div>
  );
}
