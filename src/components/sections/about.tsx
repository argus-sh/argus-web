"use client";

import { motion } from "framer-motion";
import { Code, Heart, Shield, Target, Users, Zap } from "lucide-react";
import { useTheme } from "next-themes";
import { lazy, Suspense } from "react";
import { FadeIn } from "@/components/magicui/fade-in";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DotPattern } from "@/components/ui/dot-pattern";
import { TestimonialCarousel } from "@/components/ui/testimonial-carousel";
import { cn } from "@/lib/utils";

// Lazy load Globe component
const Globe = lazy(() =>
  import("@/components/ui/globe").then((module) => ({ default: module.Globe })),
);

const principles = [
  {
    icon: Code,
    title: "Type-Safety First",
    description:
      "Every tool we build prioritizes compile-time safety and excellent developer experience.",
    color: "text-gray-600 dark:text-gray-400",
  },
  {
    icon: Zap,
    title: "Performance Matters",
    description:
      "Our tools are designed to be fast, efficient, and resource-conscious by default.",
    color: "text-yellow-600 dark:text-yellow-400",
  },
  {
    icon: Shield,
    title: "Security Built-In",
    description:
      "Security is not an afterthought. We build secure tools from the ground up.",
    color: "text-green-600 dark:text-green-400",
  },
  {
    icon: Heart,
    title: "Elegant Design",
    description:
      "Beautiful code that follows established patterns and is a joy to work with.",
    color: "text-red-600 dark:text-red-400",
  },
  {
    icon: Target,
    title: "Focused Solutions",
    description:
      "Each tool solves a specific problem exceptionally well, rather than trying to do everything.",
    color: "text-purple-600 dark:text-purple-400",
  },
  {
    icon: Users,
    title: "Community Driven",
    description:
      "We believe in open source and building tools that benefit the entire developer community.",
    color: "text-indigo-600 dark:text-indigo-400",
  },
];

const roadmap = [
  {
    phase: "Current",
    title: "Foundation Building",
    items: [
      "argus-ts: Type-safe CLI framework",
      "Comprehensive documentation",
      "Community feedback integration",
    ],
  },
  {
    phase: "Next",
    title: "Rich Terminal Interfaces",
    items: [
      "Interactive CLI components",
      "Advanced terminal graphics",
      "Cross-platform compatibility",
    ],
  },
  {
    phase: "Future",
    title: "Ecosystem Expansion",
    items: [
      "Additional specialized tools",
      "Plugin system architecture",
      "Enterprise solutions",
    ],
  },
];

export function About() {
  const { resolvedTheme } = useTheme();

  return (
    <section className="py-24 relative">
      {/* Subtle dot pattern for philosophy section */}
      <DotPattern
        width={40}
        height={40}
        cx={1}
        cy={1}
        cr={0.5}
        className={cn(
          "absolute inset-0 h-full w-full text-gray-400/30 dark:text-gray-500/30 -z-10",
        )}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <FadeIn>
          <div className="text-center mb-20">
            <motion.h2
              className="text-3xl sm:text-4xl font-bold mb-6 font-serif"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Philosophy
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed font-sans"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              We believe that the most powerful tools are also the most
              intuitive. Argus SH is dedicated to building a new class of
              command-line utilities with a relentless focus on simplicity,
              type-safety, and elegant design.
            </motion.p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 [grid-auto-rows:1fr]">
          {principles.map((principle, index) => (
            <FadeIn key={principle.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full"
              >
                <Card className="h-full hover:shadow-2xl hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 bg-white/50 dark:bg-[#111]/50 backdrop-blur-sm group flex flex-col">
                  <CardHeader className="pb-4 flex-shrink-0">
                    <div className="flex items-center gap-4 mb-4">
                      <div
                        className={`w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <principle.icon
                          className={`w-6 h-6 ${principle.color}`}
                        />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors font-serif">
                          {principle.title}
                        </CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0 flex-grow">
                    <CardDescription className="text-gray-600 dark:text-gray-400 text-base leading-relaxed font-sans">
                      {principle.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="bg-transparent dark:bg-transparent backdrop-blur-sm rounded-2xl p-8 lg:p-12 mb-20 relative overflow-hidden">
            {/* Special pattern for Why Argus SH section */}
            <DotPattern
              width={32}
              height={32}
              cx={2}
              cy={2}
              cr={1}
              glow={false}
              className={cn(
                "absolute inset-0 h-full w-full text-purple-400/20 dark:text-purple-400/15 -z-10",
              )}
            />
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative">
              <div>
                <motion.h3
                  className="text-2xl sm:text-3xl font-bold mb-6 font-serif"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  Why Argus SH?
                </motion.h3>
                <motion.div
                  className="space-y-4 text-gray-600 dark:text-gray-300 font-sans"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <p>
                    In a world of complex tools and frameworks, we saw an
                    opportunity to create something different. Argus SH
                    represents a return to simplicity without sacrificing power
                    or capability.
                  </p>
                  <p>
                    Our tools are built by developers, for developers. We
                    understand the pain points of modern development and strive
                    to eliminate them through thoughtful design and careful
                    implementation.
                  </p>
                  <p>
                    Every decision we make prioritizes the developer experience.
                    From the first installation to the daily usage, we want
                    every interaction to feel natural and enjoyable.
                  </p>
                  <motion.div
                    className="mt-8 p-4 bg-gray-100/80 dark:bg-gray-800/30 rounded-lg border border-gray-300/60 dark:border-gray-700/50 shadow-sm"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm font-medium text-gray-800 dark:text-gray-300">
                        Used by developers worldwide
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 dark:text-gray-400">
                      From startups in Silicon Valley to enterprises in Tokyo,
                      Argus tools power CLI applications across the globe.
                    </p>
                  </motion.div>
                </motion.div>
              </div>

              <div className="relative flex items-center justify-center">
                <motion.div
                  className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[400px] lg:h-[400px]"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <Suspense
                    fallback={
                      <div className="w-full h-full flex items-center justify-center">
                        <div className="w-16 h-16 border-4 border-purple-200 border-t-purple-600 rounded-full animate-spin"></div>
                      </div>
                    }
                  >
                    <Globe key={resolvedTheme} className="w-full h-full" />
                  </Suspense>
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/5 via-transparent to-blue-500/5 pointer-events-none" />
                </motion.div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* Terminal Demo Section */}
        <FadeIn delay={0.5}>
          <div className="text-center mb-16">
            <motion.h3
              className="text-2xl sm:text-3xl font-bold mb-4 font-serif"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Getting Started
            </motion.h3>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-sans mb-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              See how easy it is to create your first CLI application with Argus
            </motion.p>
            <div className="max-w-2xl mx-auto">
              <motion.div
                className="bg-white/50 dark:bg-[#111]/50 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {/* Simple Terminal Header */}
                <div className="flex items-center gap-2 px-6 py-4 bg-gray-100/50 dark:bg-gray-900/50 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full" />
                    <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                    <div className="w-3 h-3 bg-green-500 rounded-full" />
                  </div>
                  <span className="text-sm text-gray-700 dark:text-gray-300 ml-2">
                    terminal
                  </span>
                </div>

                {/* Simple Terminal Content */}
                <div className="p-6 font-mono text-sm space-y-2">
                  <div className="text-green-600 dark:text-green-400">
                    $ npm install argus-ts
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    ✓ Installing dependencies...
                  </div>
                  <div className="text-blue-600 dark:text-cyan-300">
                    ✓ added 15 packages in 2.3s
                  </div>
                  <div className="h-4"></div>
                  <div className="text-green-600 dark:text-green-400">
                    $ argus --version
                  </div>
                  <div className="text-gray-600 dark:text-gray-300">
                    argus-ts v1.0.0
                  </div>
                  <div className="h-4"></div>
                  <div className="text-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="text-lg font-bold bg-gradient-to-r from-gray-600 via-gray-800 to-gray-900 dark:from-gray-300 dark:via-gray-100 dark:to-gray-50 bg-clip-text text-transparent font-serif">
                      Ready to build! 🚀
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </FadeIn>

        {/* Testimonials */}
        <FadeIn delay={0.6}>
          <div className="mb-20">
            <motion.h3
              className="text-2xl sm:text-3xl font-bold text-center mb-12 font-serif"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Loved by Developers
            </motion.h3>
            <TestimonialCarousel />
          </div>
        </FadeIn>

        <FadeIn delay={0.7}>
          <div className="text-center mb-12">
            <motion.h3
              className="text-2xl sm:text-3xl font-bold mb-4 font-serif"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Roadmap
            </motion.h3>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto font-sans"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Building the future of command-line development, one tool at a
              time
            </motion.p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {roadmap.map((phase, index) => (
            <FadeIn key={phase.phase} delay={index * 0.2}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="h-full hover:shadow-2xl hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 bg-white/50 dark:bg-[#111]/50 backdrop-blur-sm group">
                  <CardHeader className="pb-6">
                    <div className="text-center">
                      <div
                        className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl mb-6 transition-all duration-300 ${
                          index === 0
                            ? "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 group-hover:scale-110"
                            : index === 1
                              ? "bg-gray-100 dark:bg-gray-900/30 text-gray-600 dark:text-gray-400 group-hover:scale-110"
                              : "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 group-hover:scale-110"
                        }`}
                      >
                        <span className="text-xl font-bold">{index + 1}</span>
                      </div>
                      <CardTitle className="text-lg mb-2 text-gray-900 dark:text-white group-hover:text-gray-800 dark:group-hover:text-gray-200 transition-colors font-serif">
                        {phase.phase}
                      </CardTitle>
                      <h4 className="text-xl font-semibold text-gray-700 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors font-serif">
                        {phase.title}
                      </h4>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <ul className="space-y-3">
                      {phase.items.map((item, itemIndex) => (
                        <motion.li
                          key={`${phase.phase}-${item}`}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 + itemIndex * 0.1 }}
                        >
                          <div
                            className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 transition-colors ${
                              index === 0
                                ? "bg-green-500"
                                : index === 1
                                  ? "bg-gray-500"
                                  : "bg-purple-500"
                            }`}
                          />
                          <span className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-sans">
                            {item}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
