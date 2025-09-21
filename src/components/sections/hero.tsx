"use client";

import { motion } from "framer-motion";
import { Download, Github, Star, Terminal, Users } from "lucide-react";
import { FadeIn } from "@/components/magicui/fade-in";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { DotPattern } from "@/components/ui/dot-pattern";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { cn } from "@/lib/utils";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Hero-specific glowing dot pattern */}
      <DotPattern
        width={64}
        height={64}
        cx={4}
        cy={4}
        cr={2}
        glow={true}
        className={cn(
          "absolute inset-0 h-full w-full text-blue-400/15 dark:text-blue-400/15 -z-10",
        )}
      />
      {/* Floating particles */}
      <FloatingParticles count={15} className="-z-10" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <FadeIn delay={0.1}>
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 mb-8 font-sans"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Terminal className="w-4 h-4" />
            <span className="text-sm font-medium">
              Simple, Powerful CLI Tools
            </span>
          </motion.div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-gray-900 dark:text-white font-serif">
            <span className="block">Thoughtfully designed</span>
            <span className="block bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 dark:from-gray-300 dark:via-gray-100 dark:to-gray-50 bg-clip-text text-transparent">
              command-line utilities
            </span>
            <span className="block text-gray-600 dark:text-gray-400 font-sans">
              for the modern developer
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.5}>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed font-sans">
            We believe that the most powerful tools are also the most intuitive.
            Argus SH is dedicated to building a new class of command-line
            utilities with a relentless focus on simplicity, type-safety, and
            elegant design.
          </p>
        </FadeIn>

        <FadeIn delay={0.7}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <motion.a
              href="#projects"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black dark:from-gray-200 dark:via-gray-100 dark:to-white text-white dark:text-gray-900 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl relative overflow-hidden group font-sans"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Github className="w-5 h-5" />
              Explore Our Tools
            </motion.a>

            <motion.a
              href="#about"
              className="inline-flex items-center gap-2 px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium font-sans"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Learn More
              <motion.div
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.div>
            </motion.a>
          </div>
        </FadeIn>

        <FadeIn delay={0.9}>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 max-w-lg mx-auto">
            <motion.div
              className="text-center p-4 rounded-lg bg-white/30 dark:bg-[#111]/30 backdrop-blur-sm border border-gray-200/20 dark:border-gray-800/20 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Star className="w-5 h-5 text-yellow-500 mx-auto mb-2" />
              <div className="text-lg font-bold text-gray-900 dark:text-white font-mono">
                <AnimatedCounter value={127} suffix="+" />
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 font-sans">
                Stars
              </div>
            </motion.div>

            <motion.div
              className="text-center p-4 rounded-lg bg-white/30 dark:bg-[#111]/30 backdrop-blur-sm border border-gray-200/20 dark:border-gray-800/20 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Download className="w-5 h-5 text-green-500 mx-auto mb-2" />
              <div className="text-lg font-bold text-gray-900 dark:text-white font-mono">
                <AnimatedCounter value={2400} suffix="+" />
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 font-sans">
                Downloads
              </div>
            </motion.div>

            <motion.div
              className="text-center p-4 rounded-lg bg-white/30 dark:bg-[#111]/30 backdrop-blur-sm border border-gray-200/20 dark:border-gray-800/20 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Users className="w-5 h-5 text-blue-500 mx-auto mb-2" />
              <div className="text-lg font-bold text-gray-900 dark:text-white font-mono">
                <AnimatedCounter value={89} suffix="+" />
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 font-sans">
                Developers
              </div>
            </motion.div>

            <motion.div
              className="text-center p-4 rounded-lg bg-white/30 dark:bg-[#111]/30 backdrop-blur-sm border border-gray-200/20 dark:border-gray-800/20 hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <Terminal className="w-5 h-5 text-purple-500 mx-auto mb-2" />
              <div className="text-lg font-bold text-gray-900 dark:text-white font-mono">
                <AnimatedCounter value={15} suffix="+" />
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 font-sans">
                Projects
              </div>
            </motion.div>
          </div>
        </FadeIn>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-gray-300 dark:border-gray-600 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-gray-400 dark:bg-gray-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}
