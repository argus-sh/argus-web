"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollTextProps {
  children: string;
  className?: string;
  delay?: number;
}

export function ScrollText({
  children,
  className = "",
  delay = 0,
}: ScrollTextProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const words = children.split(" ");

  return (
    <div ref={ref} className={className}>
      {words.map((word, index) => (
        <motion.span
          key={`word-${word}-${index}-${children.slice(0, 10)}`}
          className="inline-block mr-2"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{
            delay: delay + index * 0.1,
            duration: 0.5,
            ease: "easeOut",
          }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
