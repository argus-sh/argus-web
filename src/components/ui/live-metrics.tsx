"use client";

import { motion } from "framer-motion";
import { Activity, TrendingUp, Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedCounter } from "./animated-counter";

interface Metric {
  label: string;
  value: number;
  change: number;
  icon: React.ReactNode;
  color: string;
}

export function LiveMetrics({ className = "" }: { className?: string }) {
  const [metrics, setMetrics] = useState<Metric[]>([
    {
      label: "Performance",
      value: 98.5,
      change: 2.1,
      icon: <Zap className="w-4 h-4" />,
      color: "text-green-500",
    },
    {
      label: "Uptime",
      value: 99.9,
      change: 0.1,
      icon: <Activity className="w-4 h-4" />,
      color: "text-blue-500",
    },
    {
      label: "Growth",
      value: 156,
      change: 12.3,
      icon: <TrendingUp className="w-4 h-4" />,
      color: "text-purple-500",
    },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics((prev) =>
        prev.map((metric) => ({
          ...metric,
          value: metric.value + (Math.random() - 0.5) * 0.5,
          change: metric.change + (Math.random() - 0.5) * 0.2,
        })),
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`grid grid-cols-3 gap-4 ${className}`}>
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.label}
          className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-sm rounded-lg p-4 border border-white/20 dark:border-gray-800/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          whileHover={{ scale: 1.02, y: -2 }}
        >
          <div className="flex items-center justify-between mb-2">
            <div className={`${metric.color}`}>{metric.icon}</div>
            <motion.div
              className={`text-xs px-2 py-1 rounded-full ${
                metric.change > 0
                  ? "bg-green-500/20 text-green-400"
                  : "bg-red-500/20 text-red-400"
              }`}
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {metric.change > 0 ? "+" : ""}
              {metric.change.toFixed(1)}%
            </motion.div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl font-bold text-white font-mono">
              <AnimatedCounter
                value={metric.value}
                suffix={metric.label === "Growth" ? "" : "%"}
              />
            </div>
            <div className="text-xs text-gray-400">{metric.label}</div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
