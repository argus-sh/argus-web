"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";
import { useEffect, useState } from "react";
import { TypingAnimation } from "@/components/ui/typing-animation";
import { cn } from "@/lib/utils";

interface TerminalCommand {
  text: string;
  type?: "command" | "output" | "success" | "warning" | "empty";
  delay?: number;
}

interface TerminalProps {
  className?: string;
  commands?: TerminalCommand[];
  showCursor?: boolean;
  autoPlay?: boolean;
}

export function Terminal({
  className,
  commands = [
    { text: "$ npm install argus-ts", type: "command" },
    { text: "", type: "empty" },
    { text: "✓ Installing dependencies...", type: "output", delay: 500 },
    { text: "✓ added 15 packages in 2.3s", type: "success", delay: 800 },
    { text: "", type: "empty" },
    { text: "$ argus --help", type: "command", delay: 1200 },
    { text: "Usage: argus [options] [command]", type: "output", delay: 300 },
    { text: "", type: "empty" },
    { text: "A minimal, type-safe CLI framework", type: "success", delay: 200 },
    {
      text: "Ready to build something amazing! ⚡",
      type: "warning",
      delay: 400,
    },
  ],
  autoPlay = true,
}: TerminalProps) {
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [showPrompt, setShowPrompt] = useState(false);
  const [completedCommands, setCompletedCommands] = useState<Set<number>>(
    new Set(),
  );

  useEffect(() => {
    if (!autoPlay) return;

    let timeout: NodeJS.Timeout;

    if (currentCommandIndex < commands.length) {
      const command = commands[currentCommandIndex];
      const delay = command.delay || 800;

      timeout = setTimeout(() => {
        setCompletedCommands((prev) => new Set([...prev, currentCommandIndex]));
        setCurrentCommandIndex((prev) => prev + 1);
      }, delay);
    } else {
      setShowPrompt(true);
    }

    return () => clearTimeout(timeout);
  }, [currentCommandIndex, commands, autoPlay]);

  const getCommandStyle = (type?: string) => {
    switch (type) {
      case "command":
        return "text-green-500 dark:text-green-400 font-semibold";
      case "success":
        return "text-cyan-500 dark:text-cyan-300";
      case "warning":
        return "text-yellow-500 dark:text-yellow-400";
      case "output":
        return "text-gray-600 dark:text-gray-300";
      case "empty":
        return "h-4";
      default:
        return "text-gray-600 dark:text-gray-400";
    }
  };

  return (
    <motion.div
      className={cn(
        "bg-gray-900/95 dark:bg-black/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-gray-700 dark:border-gray-800",
        className,
      )}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-gray-800/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full hover:bg-red-400 transition-colors cursor-pointer" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full hover:bg-yellow-400 transition-colors cursor-pointer" />
            <div className="w-3 h-3 bg-green-500 rounded-full hover:bg-green-400 transition-colors cursor-pointer" />
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md flex items-center justify-center">
              <span className="text-white font-bold text-xs">A</span>
            </div>
            <span className="text-sm font-medium">argus-cli</span>
          </div>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-400">
          <motion.div
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <Zap className="w-3 h-3 text-green-400" />
          </motion.div>
          <span>Live</span>
        </div>
      </div>

      {/* Terminal Content */}
      <div className="p-6 font-mono text-sm min-h-[320px] bg-gray-900/50 dark:bg-black/50">
        <div className="space-y-3">
          {commands.map((command, index) => {
            const isVisible =
              completedCommands.has(index) || index < currentCommandIndex;
            const isCurrentlyTyping = index === currentCommandIndex && autoPlay;

            if (!isVisible && !isCurrentlyTyping) return null;

            return (
              <motion.div
                key={`${command.text}-${index}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className={cn("leading-relaxed", getCommandStyle(command.type))}
              >
                {command.type === "empty" ? (
                  <div className="h-4" />
                ) : isCurrentlyTyping ? (
                  <TypingAnimation
                    text={command.text || ""}
                    duration={command.text?.startsWith("$") ? 80 : 40}
                    showCursor={false}
                    onComplete={() => {
                      setCompletedCommands((prev) => new Set([...prev, index]));
                      setCurrentCommandIndex((prev) => prev + 1);
                    }}
                  />
                ) : (
                  command.text || ""
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Interactive Prompt */}
        {showPrompt && (
          <motion.div
            className="mt-6 flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <span className="text-green-400">$</span>
            <span className="text-gray-300">argus</span>
            <motion.span
              className="inline-block w-2 h-5 bg-green-400 ml-1"
              animate={{ opacity: [1, 0] }}
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              }}
            />
          </motion.div>
        )}

        {/* Bottom Tagline */}
        <motion.div
          className="text-center pt-8 border-t border-gray-700/50 mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: showPrompt ? 1 : 0 }}
          transition={{ delay: 1 }}
        >
          <div className="text-lg font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent font-serif">
            Ready to build the future
          </div>
          <div className="text-sm text-gray-400 mt-1 font-sans">
            Type-safe • Fast • Elegant
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
