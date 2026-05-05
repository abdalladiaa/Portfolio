"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { portfolioData } from "@/userData/portfolio-data";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function Projects() {
  const { projects } = portfolioData;
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Next.js", "React", "Vanila JS", "HTML & CSS"];

  const filteredProjects = activeFilter === "All" 
    ? projects 
    : projects.filter(p => {
        const tags = p.tags.map(t => t.toLowerCase());
        const filter = activeFilter.trim().toLowerCase();

        if (filter === "next.js") return tags.includes("next.js");
        if (filter === "react") return tags.includes("react");
        if (filter === "vanila js") return tags.includes("javascript") || tags.includes("js");
        if (filter === "html & css") return tags.some(t => ["html5", "css3", "html", "css", "bootstrap"].includes(t));
        return false;
      });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-black text-primary uppercase tracking-[0.3em] mb-4"
          >
            Portfolio
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-black mb-12"
          >
            Featured <span className="gradient-text">Projects.</span>
          </motion.h3>

          {/* Filter Navigation */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-2 p-2 glass max-w-2xl mx-auto rounded-[24px] border border-border"
          >
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2.5 rounded-[18px] text-sm font-bold transition-all duration-300 ${
                  activeFilter === filter 
                    ? "bg-primary text-white shadow-lg shadow-primary/25" 
                    : "text-slate-500 hover:text-foreground hover:bg-card/50"
                }`}
              >
                {filter}
              </button>
            ))}
          </motion.div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const screenshotUrl = project.liveUrl 
                ? `https://api.microlink.io?url=${encodeURIComponent(project.liveUrl)}&screenshot=true&meta=false&embed=screenshot.url`
                : project.image;

              return (
                <motion.div
                  layout
                  key={project.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ 
                    opacity: { duration: 0.3 },
                    scale: { duration: 0.3 },
                    layout: { duration: 0.4, ease: "easeInOut" }
                  }}
                  className="group relative glass rounded-[40px] border border-border overflow-hidden hover:border-primary/20 transition-all duration-500 shadow-sm hover:shadow-xl"
                >
                  {/* Project Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500 z-10" />
                    <Image
                      src={screenshotUrl}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      unoptimized={!!project.liveUrl}
                    />
                    
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-background/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex items-center justify-center gap-4">
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-4 bg-white/10 hover:bg-white/20 rounded-2xl text-white transition-all transform translate-y-4 group-hover:translate-y-0"
                      >
                        <FaGithub size={24} />
                      </a>
                      <a 
                        href={project.liveUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="p-4 bg-primary hover:bg-primary/90 rounded-2xl text-white transition-all transform translate-y-4 group-hover:translate-y-0 delay-75"
                      >
                        <ExternalLink size={24} />
                      </a>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <span className="text-xs font-black text-primary uppercase tracking-widest mb-2 block">{project.type}</span>
                        <h4 className="text-xl font-black text-foreground group-hover:text-primary transition-colors">{project.title}</h4>
                      </div>
                      <ArrowUpRight className="text-slate-400 group-hover:text-primary group-hover:rotate-45 transition-all duration-500" />
                    </div>
                    
                    <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                      {project.shortDesc}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span key={tag} className="px-3 py-1 bg-card border border-border rounded-lg text-[10px] font-bold text-slate-500 dark:text-slate-400">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

