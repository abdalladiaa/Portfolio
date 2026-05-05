"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/userData/portfolio-data";
import { GraduationCap, Calendar, MapPin, BookOpen } from "lucide-react";

export default function Education() {
  const { education } = portfolioData;

  return (
    <section id="education" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <GraduationCap size={14} className="text-primary" />
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Academic Background</span>
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black tracking-tight text-foreground"
            >
              My <span className="gradient-text">Education.</span>
            </motion.h3>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group"
            >
              <div className="relative glass rounded-[40px] border border-border p-8 md:p-12 transition-all duration-500 hover:border-primary/20 shadow-sm hover:shadow-xl">
                <div className="flex flex-col lg:flex-row justify-between gap-8">
                  <div className="flex gap-6">
                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <GraduationCap size={32} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="text-2xl md:text-3xl font-black mb-2 text-foreground">{edu.degree}</h4>
                      <div className="flex flex-col gap-2">
                        <span className="text-xl text-foreground font-bold">{edu.institution}</span>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-slate-500 dark:text-slate-400 font-bold text-sm">
                          <div className="flex items-center gap-2">
                            <Calendar size={14} className="text-primary" />
                            {edu.period}
                          </div>
                          <span className="w-1 h-1 rounded-full bg-slate-300 dark:bg-slate-600 hidden sm:block" />
                          <div className="flex items-center gap-2">
                            <MapPin size={14} className="text-primary" />
                            {edu.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:w-1/3">
                    <div className="p-6 rounded-3xl bg-card border border-border">
                      <div className="flex items-center gap-2 mb-4">
                        <BookOpen size={16} className="text-primary" />
                        <span className="text-xs font-black text-primary uppercase tracking-widest">Key Coursework</span>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {edu.coursework.map((course, i) => (
                          <span key={i} className="px-3 py-1 bg-background border border-border rounded-lg text-[10px] font-bold text-slate-500 dark:text-slate-400">
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
