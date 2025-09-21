"use client";

import { motion } from "framer-motion";
import { Check, X, Zap } from "lucide-react";

interface ComparisonFeature {
  feature: string;
  argus: boolean | string;
  others: boolean | string;
  highlight?: boolean;
}

const comparisonData: ComparisonFeature[] = [
  {
    feature: "TypeScript-First Design",
    argus: true,
    others: "Partial",
    highlight: true,
  },
  {
    feature: "Zero Configuration Setup",
    argus: true,
    others: false,
  },
  {
    feature: "Built-in Auto-completion",
    argus: true,
    others: "Limited",
  },
  {
    feature: "Development Hot Reloading",
    argus: true,
    others: false,
    highlight: true,
  },
  {
    feature: "Bundle Size (argus-ts)",
    argus: "< 50KB",
    others: "> 200KB",
  },
  {
    feature: "Learning Curve",
    argus: "Minutes",
    others: "Hours",
  },
  {
    feature: "Type Safety",
    argus: "Full",
    others: "Partial",
    highlight: true,
  },
  {
    feature: "Modern CLI Patterns",
    argus: true,
    others: "Legacy",
  },
];

export function FeatureComparison({ className = "" }: { className?: string }) {
  return (
    <div className={`max-w-4xl mx-auto ${className}`}>
      <motion.div
        className="bg-white/50 dark:bg-[#111]/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-200/50 dark:border-gray-800/50 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <div className="grid grid-cols-3 gap-4 p-6 bg-gray-100/50 dark:bg-gray-900/50 border-b border-gray-200/50 dark:border-gray-700/50">
          <div className="text-center">
            <h3 className="font-semibold text-gray-600 dark:text-gray-400 font-sans text-sm">
              Feature
            </h3>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-1">
              <div className="w-6 h-6 bg-gradient-to-r from-gray-600 to-gray-800 rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-xs">A</span>
              </div>
              <span className="font-semibold text-gray-800 dark:text-gray-200 font-serif">
                Argus SH
              </span>
            </div>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-sans">
              CLI Tools
            </p>
          </div>
          <div className="text-center">
            <h3 className="font-semibold text-gray-600 dark:text-gray-400 font-sans">
              Other Frameworks
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400 font-sans">
              Commander, Yargs, etc.
            </p>
          </div>
        </div>

        {/* Comparison Rows */}
        <div className="divide-y divide-gray-200/50 dark:divide-gray-700/50">
          {comparisonData.map((item, index) => (
            <motion.div
              key={item.feature}
              className={`grid grid-cols-3 gap-4 p-4 hover:bg-gray-50/50 dark:hover:bg-gray-800/20 transition-colors ${
                item.highlight ? "bg-blue-50/30 dark:bg-blue-900/10" : ""
              }`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Feature Name */}
              <div className="flex items-center gap-2">
                {item.highlight && <Zap className="w-4 h-4 text-yellow-500" />}
                <span className="font-medium text-gray-700 dark:text-gray-300 font-sans">
                  {item.feature}
                </span>
              </div>

              {/* Argus Value */}
              <div className="flex items-center justify-center">
                {typeof item.argus === "boolean" ? (
                  item.argus ? (
                    <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                      <Check className="w-5 h-5" />
                      <span className="text-sm font-medium">Yes</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-red-500">
                      <X className="w-5 h-5" />
                      <span className="text-sm font-medium">No</span>
                    </div>
                  )
                ) : (
                  <span className="text-sm font-medium text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 px-2 py-1 rounded-md">
                    {item.argus}
                  </span>
                )}
              </div>

              {/* Others Value */}
              <div className="flex items-center justify-center">
                {typeof item.others === "boolean" ? (
                  item.others ? (
                    <div className="flex items-center gap-1 text-green-600 dark:text-green-400">
                      <Check className="w-5 h-5" />
                      <span className="text-sm font-medium">Yes</span>
                    </div>
                  ) : (
                    <div className="flex items-center gap-1 text-red-500">
                      <X className="w-5 h-5" />
                      <span className="text-sm font-medium">No</span>
                    </div>
                  )
                ) : (
                  <span className="text-sm font-medium text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-900/20 px-2 py-1 rounded-md">
                    {item.others}
                  </span>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-6 bg-gray-50/50 dark:bg-gray-800/20 text-center">
          <p className="text-sm text-gray-600 dark:text-gray-400 font-sans">
            Ready to experience the difference?
            <motion.span
              className="text-gray-800 dark:text-gray-200 font-semibold ml-1 cursor-pointer hover:underline"
              whileHover={{ scale: 1.05 }}
            >
              Get started now →
            </motion.span>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
