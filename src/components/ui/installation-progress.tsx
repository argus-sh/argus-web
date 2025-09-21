"use client";

import { motion } from "framer-motion";
import { CheckCircle, Download, Package } from "lucide-react";
import { useEffect, useState } from "react";

interface Step {
  id: string;
  label: string;
  status: "pending" | "running" | "completed";
  icon: React.ReactNode;
}

export function InstallationProgress({
  className = "",
}: {
  className?: string;
}) {
  const [currentStep, setCurrentStep] = useState(0);
  const [progress, setProgress] = useState(0);

  const steps: Step[] = [
    {
      id: "download",
      label: "Downloading argus-ts",
      status: "pending",
      icon: <Download className="w-4 h-4" />,
    },
    {
      id: "install",
      label: "Installing dependencies",
      status: "pending",
      icon: <Package className="w-4 h-4" />,
    },
    {
      id: "complete",
      label: "Ready to use!",
      status: "pending",
      icon: <CheckCircle className="w-4 h-4" />,
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + Math.random() * 15 + 5;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress > 30 && currentStep === 0) {
      setCurrentStep(1);
    } else if (progress > 70 && currentStep === 1) {
      setCurrentStep(2);
    } else if (progress >= 100 && currentStep === 2) {
      setCurrentStep(3);
    }
  }, [progress, currentStep]);

  return (
    <motion.div
      className={`bg-gray-900/95 dark:bg-black/90 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 dark:border-gray-800 ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-white">Installation</h3>
          <div className="text-sm text-gray-400">{Math.round(progress)}%</div>
        </div>

        {/* Progress Bar */}
        <div className="space-y-2">
          <div className="w-full bg-gray-700 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${Math.min(progress, 100)}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
          <div className="text-xs text-gray-400 text-center">
            Installing argus-ts and dependencies...
          </div>
        </div>

        {/* Steps */}
        <div className="space-y-3">
          {steps.map((step, index) => {
            const isActive = index === currentStep;
            const isCompleted = index < currentStep;

            return (
              <motion.div
                key={step.id}
                className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                  isActive
                    ? "bg-blue-500/20 border border-blue-500/30"
                    : isCompleted
                      ? "bg-green-500/20 border border-green-500/30"
                      : "bg-gray-800/50 border border-gray-700/50"
                }`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <motion.div
                  className={`${
                    isCompleted
                      ? "text-green-400"
                      : isActive
                        ? "text-blue-400"
                        : "text-gray-500"
                  }`}
                  animate={isActive ? { scale: [1, 1.2, 1] } : {}}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  {step.icon}
                </motion.div>
                <span
                  className={`text-sm ${
                    isCompleted
                      ? "text-green-300"
                      : isActive
                        ? "text-blue-300"
                        : "text-gray-400"
                  }`}
                >
                  {step.label}
                </span>
                {isActive && (
                  <motion.div
                    className="ml-auto"
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full" />
                  </motion.div>
                )}
                {isCompleted && (
                  <motion.div
                    className="ml-auto text-green-400"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 500 }}
                  >
                    <CheckCircle className="w-4 h-4" />
                  </motion.div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Terminal Output */}
        {progress >= 100 && (
          <motion.div
            className="bg-gray-800/50 rounded-lg p-4 border border-gray-700"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ delay: 0.5 }}
          >
            <div className="font-mono text-xs space-y-1">
              <div className="text-green-400">✓ argus-ts@latest installed</div>
              <div className="text-blue-400">✓ TypeScript support enabled</div>
              <div className="text-yellow-400">
                ✓ Ready to build amazing CLIs!
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
