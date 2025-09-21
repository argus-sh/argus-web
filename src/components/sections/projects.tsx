"use client";

import { motion } from "framer-motion";
import { Calendar, ExternalLink, GitFork, Github, Star } from "lucide-react";
import { useEffect, useState } from "react";
import { FadeIn } from "@/components/magicui/fade-in";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchOrgRepos } from "@/lib/github";
import type { GitHubRepo } from "@/lib/types";

export function Projects() {
  const [repos, setRepos] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadRepos = async () => {
      try {
        const data = await fetchOrgRepos();
        const filteredRepos = data.filter((repo) => repo.name !== ".github");
        setRepos(filteredRepos);
      } catch (error) {
        console.error("Failed to load repos:", error);
      } finally {
        setLoading(false);
      }
    };

    loadRepos();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  };

  return (
    <section id="projects" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center mb-16">
            <motion.h2
              className="text-4xl font-bold mb-4 text-gray-900 dark:text-white font-serif"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Our Projects
            </motion.h2>
            <motion.p
              className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto font-sans"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              Carefully crafted tools designed for developers who value
              simplicity and elegance
            </motion.p>
          </div>
        </FadeIn>

        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[...Array(2)].map((_, i) => (
              <Card
                key={i}
                className="animate-pulse border-gray-200 dark:border-gray-800"
              >
                <CardHeader>
                  <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded mb-2"></div>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4"></div>
                </CardHeader>
                <CardContent>
                  <div className="h-4 bg-gray-200 dark:bg-gray-700 rounded mb-4"></div>
                  <div className="flex gap-2">
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-16"></div>
                    <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-12"></div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
            {repos.map((repo) => (
              <FadeIn key={repo.id} delay={0.1}>
                <motion.div
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="h-full"
                >
                  <Card className="h-full border-gray-200 dark:border-gray-800 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 bg-white/50 dark:bg-[#111]/50 backdrop-blur-sm group flex flex-col">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between mb-2">
                        <CardTitle className="text-lg text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                          <a
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2"
                          >
                            {repo.name}
                            <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </a>
                        </CardTitle>
                        <Badge
                          variant="secondary"
                          className="text-xs bg-blue-50 text-blue-700 dark:bg-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                        >
                          Active Maintenance
                        </Badge>
                      </div>
                      <CardDescription className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                        {repo.description || "No description available"}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0 space-y-3 flex flex-col flex-grow">
                      <div className="flex-grow space-y-3">
                        <div className="flex items-center gap-4 text-sm">
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                            <span className="text-gray-500 dark:text-gray-400">
                              {repo.language || "Other"}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-3 h-3 text-yellow-500" />
                            <span className="text-gray-500 dark:text-gray-400">
                              {repo.stargazers_count}
                            </span>
                          </div>
                          <div className="flex items-center gap-1">
                            <GitFork className="w-3 h-3 text-gray-400" />
                            <span className="text-gray-500 dark:text-gray-400">
                              {repo.forks_count}
                            </span>
                          </div>
                        </div>

                        {repo.topics && repo.topics.length > 0 && (
                          <div className="flex flex-wrap gap-1">
                            {repo.topics.slice(0, 3).map((topic) => (
                              <Badge
                                key={topic}
                                variant="outline"
                                className="text-xs border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 px-2 py-0"
                              >
                                {topic}
                              </Badge>
                            ))}
                            {repo.topics.length > 3 && (
                              <Badge
                                variant="outline"
                                className="text-xs border-gray-200 dark:border-gray-700 text-gray-500 dark:text-gray-500 px-2 py-0"
                              >
                                +{repo.topics.length - 3}
                              </Badge>
                            )}
                          </div>
                        )}
                      </div>

                      <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:from-blue-50 hover:to-blue-100 dark:hover:from-blue-900/20 dark:hover:to-blue-800/20 hover:border-blue-300 dark:hover:border-blue-600 hover:text-blue-700 dark:hover:text-blue-300 transition-all duration-300 font-medium"
                            asChild
                          >
                            <a
                              href={repo.html_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2"
                            >
                              <Github className="w-4 h-4" />
                              GitHub
                            </a>
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="flex-1 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-700 dark:hover:to-gray-600 hover:text-gray-800 dark:hover:text-gray-200 transition-all duration-300"
                            asChild
                          >
                            <a
                              href={`${repo.html_url}/issues`}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center justify-center gap-2"
                            >
                              Issues
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </FadeIn>
            ))}

            <FadeIn delay={0.3}>
              <motion.div
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full"
              >
                <Card className="h-full border-gray-200 dark:border-gray-800 hover:shadow-lg hover:border-gray-300 dark:hover:border-gray-700 transition-all duration-300 bg-white/50 dark:bg-[#111]/50 backdrop-blur-sm group flex flex-col">
                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between mb-2">
                      <CardTitle className="text-lg text-gray-900 dark:text-white group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors">
                        The Next Chapter
                      </CardTitle>
                      <Badge
                        variant="secondary"
                        className="text-xs bg-purple-50 text-purple-700 dark:bg-purple-900/30 dark:text-purple-300 border border-purple-200 dark:border-purple-800"
                      >
                        In R&D
                      </Badge>
                    </div>
                    <CardDescription className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                      Rich terminal interfaces and interactive CLI experiences
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0 space-y-3 flex flex-col flex-grow">
                    <div className="flex-grow space-y-3">
                      <div className="flex items-center gap-4 text-sm">
                        <div className="flex items-center gap-1">
                          <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                          <span className="text-gray-500 dark:text-gray-400">
                            Research & Development
                          </span>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                              Advanced Terminal UI
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 text-xs">
                              Interactive components for command-line
                              applications
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <div className="w-1 h-1 bg-gray-500 rounded-full mt-2 flex-shrink-0" />
                          <div>
                            <h4 className="font-medium text-gray-900 dark:text-white text-sm">
                              Plugin System
                            </h4>
                            <p className="text-gray-600 dark:text-gray-400 text-xs">
                              Extensible architecture for custom tools
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="mt-auto pt-4 border-t border-gray-100 dark:border-gray-800">
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border-gray-200 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:from-purple-50 hover:to-purple-100 dark:hover:from-purple-900/20 dark:hover:to-purple-800/20 hover:border-purple-300 dark:hover:border-purple-600 hover:text-purple-700 dark:hover:text-purple-300 transition-all duration-300 font-medium"
                        >
                          Get Notified
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex-1 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 border-gray-200 dark:border-gray-600 text-gray-600 dark:text-gray-400 hover:from-gray-100 hover:to-gray-200 dark:hover:from-gray-700 dark:hover:to-gray-600 hover:text-gray-800 dark:hover:text-gray-200 transition-all duration-300"
                        >
                          Join Discussion
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </FadeIn>
          </div>
        )}

        <FadeIn delay={0.7}>
          <div className="text-center mt-16">
            <motion.a
              href="https://github.com/argus-sh"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-lg hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors font-medium"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github className="w-5 h-5" />
              View All Projects on GitHub
            </motion.a>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
