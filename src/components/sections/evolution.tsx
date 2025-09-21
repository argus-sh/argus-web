"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/magicui/fade-in";
import { DotPattern } from "@/components/ui/dot-pattern";
import { EvolutionTimeline } from "@/components/ui/evolution-timeline";
import { cn } from "@/lib/utils";

export function Evolution() {
  return (
    <section className="py-24 relative overflow-hidden" id="evolution">
      {/* Subtle animated dot pattern */}
      <DotPattern
        width={60}
        height={60}
        cx={3}
        cy={3}
        cr={1.5}
        className={cn(
          "absolute inset-0 h-full w-full text-green-300/20 dark:text-green-400/15 -z-10",
        )}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn delay={0.1}>
          <div className="text-center mb-20">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-300 mb-6 font-sans border border-green-200 dark:border-green-800"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm font-medium">The Evolution Story</span>
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-serif"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              From Shell Scripts to{" "}
              <span className="bg-gradient-to-r from-green-600 via-green-700 to-green-800 dark:from-green-400 dark:via-green-300 dark:to-green-200 bg-clip-text text-transparent">
                Argus
              </span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-sans"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Witness the remarkable journey of command-line development. From
              primitive shell scripts to the modern, type-safe era of CLI tools.
            </motion.p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <EvolutionTimeline />
        </FadeIn>

        {/* Background Elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-32 h-32 bg-green-400/5 dark:bg-green-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-10 w-40 h-40 bg-cyan-400/5 dark:bg-cyan-400/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.5, 0.3, 0.5],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>
    </section>
  );
}
