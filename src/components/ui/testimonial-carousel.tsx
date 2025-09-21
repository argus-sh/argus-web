"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useEffect, useState } from "react";

interface Testimonial {
  id: number;
  text: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Argus transformed how we build CLI tools. The type safety and intuitive API made our development process 3x faster.",
    author: "Sarah Chen",
    role: "Senior Developer",
    company: "TechCorp",
    avatar: "SC",
  },
  {
    id: 2,
    text: "Finally, a CLI framework that doesn't fight against you. Argus feels like what TypeScript should have been for command-line tools.",
    author: "Marcus Rodriguez",
    role: "DevOps Engineer",
    company: "CloudScale",
    avatar: "MR",
  },
  {
    id: 3,
    text: "We migrated 12 internal tools to Argus. The developer experience is unmatched - clean, fast, and incredibly reliable.",
    author: "Alex Thompson",
    role: "Tech Lead",
    company: "StartupXYZ",
    avatar: "AT",
  },
];

export function TestimonialCarousel({
  className = "",
}: {
  className?: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );
    setIsAutoPlaying(false);
  };

  return (
    <div className={`relative max-w-4xl mx-auto ${className}`}>
      <motion.div
        className="bg-white/50 dark:bg-[#111]/50 backdrop-blur-sm rounded-2xl p-8 lg:p-12 border border-gray-200/50 dark:border-gray-800/50 shadow-lg"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {/* Quote Icon */}
        <div className="flex justify-center mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 rounded-full flex items-center justify-center">
            <Quote className="w-6 h-6 text-white dark:text-gray-900" />
          </div>
        </div>

        {/* Testimonial Content */}
        <div className="relative h-48 flex items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="text-center w-full"
            >
              <blockquote className="text-lg lg:text-xl text-gray-700 dark:text-gray-300 mb-6 font-serif leading-relaxed">
                "{testimonials[currentIndex].text}"
              </blockquote>

              <div className="flex items-center justify-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {testimonials[currentIndex].avatar}
                  </span>
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-800 dark:text-gray-200 font-sans">
                    {testimonials[currentIndex].author}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 font-sans">
                    {testimonials[currentIndex].role} at{" "}
                    {testimonials[currentIndex].company}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <motion.button
            onClick={prevTestimonial}
            className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </motion.button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={`dot-${testimonial.id}`}
                onClick={() => {
                  setCurrentIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-gray-600 dark:bg-gray-300"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
                whileHover={{ scale: 1.2 }}
              />
            ))}
          </div>

          <motion.button
            onClick={nextTestimonial}
            className="w-10 h-10 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <ChevronRight className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
