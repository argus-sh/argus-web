"use client";

import { motion, useInView } from "framer-motion";
import { Calendar, Code, Cpu, Sparkles, Terminal, Zap } from "lucide-react";
import { useRef } from "react";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  icon: React.ElementType;
  status: "past" | "present" | "future";
  color: string;
  highlight?: boolean;
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "1970s",
    title: "The Beginning",
    description:
      "Simple shell scripts and basic command-line utilities. Everything was manual and error-prone.",
    icon: Terminal,
    status: "past",
    color: "gray",
  },
  {
    year: "2000s",
    title: "First Frameworks",
    description:
      "Libraries like getopt emerged. Still complex configuration and limited type safety.",
    icon: Code,
    status: "past",
    color: "orange",
  },
  {
    year: "2010s",
    title: "Modern Libraries",
    description:
      "Commander.js, Yargs, and Click appeared. Better APIs but still lacking in developer experience.",
    icon: Cpu,
    status: "past",
    color: "blue",
  },
  {
    year: "2020s",
    title: "Type-Safe Era",
    description:
      "TypeScript adoption grows. Developers demand better tooling and type safety in CLI development.",
    icon: Sparkles,
    status: "past",
    color: "purple",
  },
  {
    year: "2024",
    title: "Argus Revolution",
    description:
      "Zero-config, TypeScript-first, hot-reloading CLI framework. The future of command-line development.",
    icon: Zap,
    status: "present",
    color: "green",
    highlight: true,
  },
  {
    year: "Future",
    title: "What's Next?",
    description:
      "AI-powered CLI generation, visual debugging, and seamless cloud integration. Stay tuned.",
    icon: Calendar,
    status: "future",
    color: "cyan",
  },
];

export function EvolutionTimeline({ className = "" }: { className?: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-100px" });

  const getColorClasses = (color: string) => {
    const colors = {
      gray: {
        bg: "bg-gray-100 dark:bg-gray-800",
        border: "border-gray-300 dark:border-gray-600",
        icon: "text-gray-600 dark:text-gray-400",
        accent: "bg-gray-500",
      },
      orange: {
        bg: "bg-orange-50 dark:bg-orange-900/20",
        border: "border-orange-200 dark:border-orange-800",
        icon: "text-orange-600 dark:text-orange-400",
        accent: "bg-orange-500",
      },
      blue: {
        bg: "bg-blue-50 dark:bg-blue-900/20",
        border: "border-blue-200 dark:border-blue-800",
        icon: "text-blue-600 dark:text-blue-400",
        accent: "bg-blue-500",
      },
      purple: {
        bg: "bg-purple-50 dark:bg-purple-900/20",
        border: "border-purple-200 dark:border-purple-800",
        icon: "text-purple-600 dark:text-purple-400",
        accent: "bg-purple-500",
      },
      green: {
        bg: "bg-green-50 dark:bg-green-900/20",
        border: "border-green-200 dark:border-green-800",
        icon: "text-green-600 dark:text-green-400",
        accent: "bg-green-500",
      },
      cyan: {
        bg: "bg-cyan-50 dark:bg-cyan-900/20",
        border: "border-cyan-200 dark:border-cyan-800",
        icon: "text-cyan-600 dark:text-cyan-400",
        accent: "bg-cyan-500",
      },
    };

    return colors[color as keyof typeof colors] || colors.gray;
  };

  return (
    <div ref={containerRef} className={`max-w-4xl mx-auto ${className}`}>
      <div className="relative">
        {/* Central Timeline Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-gray-200 via-gray-400 to-gray-200 dark:from-gray-700 dark:via-gray-500 dark:to-gray-700" />

        {/* Timeline Events */}
        <div className="space-y-12">
          {timelineEvents.map((event, index) => {
            const colorClasses = getColorClasses(event.color);
            const isLeft = index % 2 === 0;

            return (
              <motion.div
                key={event.year}
                className={`relative flex items-center ${
                  isLeft ? "justify-start" : "justify-end"
                }`}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                {/* Timeline Node */}
                <motion.div
                  className={`absolute left-1/2 transform -translate-x-1/2 z-10 w-12 h-12 rounded-full border-4 border-white dark:border-[#111] ${colorClasses.accent} flex items-center justify-center shadow-lg`}
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.2 + 0.3, duration: 0.4 }}
                  whileHover={{ scale: 1.1 }}
                >
                  <event.icon className="w-5 h-5 text-white" />
                </motion.div>

                {/* Content Card */}
                <motion.div
                  className={`${
                    isLeft ? "mr-auto pr-8" : "ml-auto pl-8"
                  } w-5/12 min-w-0`}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div
                    className={`p-6 rounded-2xl border-2 ${colorClasses.bg} ${colorClasses.border} shadow-lg backdrop-blur-sm ${
                      event.highlight
                        ? "ring-2 ring-green-400 dark:ring-green-500 shadow-green-200 dark:shadow-green-900/20"
                        : ""
                    }`}
                  >
                    {/* Year Badge */}
                    <div
                      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold mb-3 ${colorClasses.accent} text-white`}
                    >
                      <Calendar className="w-3 h-3" />
                      {event.year}
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-bold text-gray-800 dark:text-gray-200 mb-2 font-serif">
                      {event.title}
                      {event.highlight && (
                        <motion.span
                          className="ml-2 text-green-500"
                          animate={{ rotate: [0, 10, -10, 0] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          ⚡
                        </motion.span>
                      )}
                    </h3>

                    {/* Description */}
                    <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed font-sans">
                      {event.description}
                    </p>

                    {/* Status Indicator */}
                    <div className="mt-4 flex items-center gap-2">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          event.status === "present"
                            ? "bg-green-500 animate-pulse"
                            : event.status === "future"
                              ? "bg-cyan-400 animate-ping"
                              : "bg-gray-400"
                        }`}
                      />
                      <span className="text-xs text-gray-500 dark:text-gray-400 font-medium capitalize">
                        {event.status === "present"
                          ? "Current Era"
                          : event.status}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Gradient Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white dark:from-[#111] to-transparent pointer-events-none" />
      </div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: timelineEvents.length * 0.2 + 0.5 }}
      >
        <motion.div
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl transition-all cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Zap className="w-4 h-4" />
          <span>Join the Revolution</span>
        </motion.div>
      </motion.div>
    </div>
  );
}
