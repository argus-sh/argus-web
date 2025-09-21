"use client";

import { motion } from "framer-motion";
import { Github, Heart, Mail, Twitter } from "lucide-react";
import { FadeIn } from "@/components/magicui/fade-in";
import { DotPattern } from "@/components/ui/dot-pattern";
import { cn } from "@/lib/utils";

const navigation = {
  main: [
    { name: "Projects", href: "#projects" },
    { name: "Philosophy", href: "#about" },
    { name: "GitHub", href: "https://github.com/argus-sh" },
    { name: "Documentation", href: "#" },
  ],
  social: [
    {
      name: "GitHub",
      href: "https://github.com/argus-sh",
      icon: Github,
    },
    {
      name: "Twitter",
      href: "#",
      icon: Twitter,
    },
    {
      name: "Email",
      href: "mailto:hello@argus.sh",
      icon: Mail,
    },
  ],
};

export function Footer() {
  return (
    <footer className="bg-[#111] text-white border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-2">
              <motion.div
                className="flex items-center gap-2 mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-sm">A</span>
                </div>
                <span className="text-xl font-bold font-serif">Argus SH</span>
              </motion.div>
              <p className="text-gray-400 mb-4 max-w-md font-sans">
                Simple, powerful tools for the command line. Thoughtfully
                designed for an unparalleled developer experience.
              </p>
              <div className="flex space-x-4">
                {navigation.social.map((item) => (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-6 w-6" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-serif">
                Navigation
              </h3>
              <ul className="space-y-2">
                {navigation.main.map((item) => (
                  <li key={item.name}>
                    <motion.a
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                      whileHover={{ x: 4 }}
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                      }}
                    >
                      {item.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4 font-serif">
                Community
              </h3>
              <ul className="space-y-2">
                <li>
                  <motion.a
                    href="https://github.com/argus-sh/argus-ts"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Contribute
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="https://github.com/argus-sh/argus-ts/issues"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Issues
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="https://github.com/argus-sh/argus-ts/discussions"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Discussions
                  </motion.a>
                </li>
                <li>
                  <motion.a
                    href="https://github.com/sponsors/argus-sh"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    Sponsors
                  </motion.a>
                </li>
              </ul>
            </div>
          </div>
        </FadeIn>

        {/* Bottom */}
        <FadeIn delay={0.3}>
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <motion.p
                className="text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                © {new Date().getFullYear()} Argus SH. Built with{" "}
                <Heart className="inline w-4 h-4 text-red-500 mx-1" /> for
                developers, by developers.
              </motion.p>

              <motion.div
                className="flex items-center gap-4 mt-4 md:mt-0"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                <span className="text-gray-400 text-sm">Powered by</span>
                <motion.div
                  className="flex items-center gap-1"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-5 h-5 bg-gray-700 rounded"></div>
                  <span className="text-sm font-medium">TypeScript</span>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </FadeIn>
      </div>
    </footer>
  );
}
