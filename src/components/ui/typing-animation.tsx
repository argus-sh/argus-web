"use client";

import { useEffect, useState } from "react";

interface TypingAnimationProps {
  text: string;
  duration?: number;
  className?: string;
  showCursor?: boolean;
  onComplete?: () => void;
}

export function TypingAnimation({
  text,
  duration = 50,
  className = "",
  showCursor = true,
  onComplete,
}: TypingAnimationProps) {
  const [displayedText, setDisplayedText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showBlinkingCursor, setShowBlinkingCursor] = useState(true);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(text.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, duration);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [currentIndex, text, duration, onComplete]);

  useEffect(() => {
    if (showCursor) {
      const cursorInterval = setInterval(() => {
        setShowBlinkingCursor((prev) => !prev);
      }, 500);

      return () => clearInterval(cursorInterval);
    }
  }, [showCursor]);

  return (
    <span className={className}>
      {displayedText}
      {showCursor && (
        <span
          className={`inline-block w-2 h-4 ml-1 bg-green-500 ${
            showBlinkingCursor ? "opacity-100" : "opacity-0"
          } transition-opacity`}
        />
      )}
    </span>
  );
}
