"use client";

import { motion } from "framer-motion";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { TypingAnimation } from "./typing-animation";

interface CodeLine {
  text: string;
  highlight?: boolean;
  delay?: number;
}

interface CodeShowcaseProps {
  title?: string;
  language?: string;
  lines: CodeLine[];
  className?: string;
}

export function CodeShowcase({
  title = "Example Usage",
  language = "typescript",
  lines,
  className = "",
}: CodeShowcaseProps) {
  const [copied, setCopied] = useState(false);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const copyToClipboard = () => {
    const code = lines.map((line) => line.text).join("\n");
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      className={`bg-gray-900/95 dark:bg-black/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl border border-gray-700 dark:border-gray-800 ${className}`}
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 bg-gray-800/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-700 dark:border-gray-800">
        <div className="flex items-center gap-3">
          <div className="flex gap-2">
            <div className="w-3 h-3 bg-red-500 rounded-full" />
            <div className="w-3 h-3 bg-yellow-500 rounded-full" />
            <div className="w-3 h-3 bg-green-500 rounded-full" />
          </div>
          <span className="text-sm font-medium text-gray-300">{title}</span>
          <span className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded">
            {language}
          </span>
        </div>
        <motion.button
          onClick={copyToClipboard}
          className="flex items-center gap-2 text-xs text-gray-400 hover:text-gray-200 transition-colors"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4" />
          )}
          {copied ? "Copied!" : "Copy"}
        </motion.button>
      </div>

      {/* Code Content */}
      <div className="p-6 font-mono text-sm bg-gray-900/50 dark:bg-black/50">
        <div className="space-y-2">
          {lines.map((line, index) => (
            <motion.div
              key={`${line.text}-${index}`}
              className={`flex items-center gap-4 ${
                line.highlight
                  ? "bg-blue-500/10 border-l-2 border-blue-500 pl-4"
                  : ""
              }`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="text-gray-500 text-xs w-6 text-right select-none">
                {index + 1}
              </span>
              <div className="flex-1">
                {index <= currentLineIndex ? (
                  <TypingAnimation
                    text={line.text}
                    duration={30}
                    showCursor={index === currentLineIndex}
                    onComplete={() => setCurrentLineIndex((prev) => prev + 1)}
                    className="text-gray-300"
                  />
                ) : (
                  <span className="text-gray-600">{line.text}</span>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
