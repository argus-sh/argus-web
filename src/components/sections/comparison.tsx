"use client";

import { motion } from "framer-motion";
import { FadeIn } from "@/components/magicui/fade-in";
import { FeatureComparison } from "@/components/ui/feature-comparison";

export function Comparison() {
  return (
    <section className="py-24 relative" id="comparison">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn delay={0.1}>
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-gray-900 dark:text-white font-serif"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Why Choose Argus SH?
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-sans"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              See how our CLI tools compare to traditional frameworks. Our
              flagship <strong>argus-ts</strong> leads a new generation of
              developer tools.
            </motion.p>
          </div>
        </FadeIn>

        <FadeIn delay={0.3}>
          <FeatureComparison />
        </FadeIn>

        {/* Call to Action */}
        <FadeIn delay={0.5}>
          <div className="text-center mt-16">
            <motion.div
              className="inline-flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-gray-800 via-gray-900 to-black dark:from-gray-200 dark:via-gray-100 dark:to-white text-white dark:text-gray-900 rounded-lg transition-all duration-300 font-medium shadow-lg hover:shadow-xl font-sans"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Try argus-ts Now
              </motion.a>
              <motion.a
                href="https://github.com/argus-sh"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-gray-100 transition-colors font-medium font-sans border border-gray-200 dark:border-gray-700 rounded-lg hover:border-gray-300 dark:hover:border-gray-600"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                View on GitHub
              </motion.a>
            </motion.div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
