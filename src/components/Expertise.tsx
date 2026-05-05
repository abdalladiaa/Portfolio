"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/userData/portfolio-data";
import { Code2, Layout, Zap, Smartphone, Search, Database } from "lucide-react";

const iconMap: Record<string, any> = {
  code: Code2,
  layout: Layout,
  zap: Zap,
  smartphone: Smartphone,
  search: Search,
  database: Database,
};

export default function Expertise() {
  const { services } = portfolioData;

  return (
    <section id="expertise" className="py-24 relative overflow-hidden bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"
          >
            <Zap size={14} className="text-primary" />
            <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">What I Offer</span>
          </motion.div>
          
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black mb-6 text-foreground"
          >
            Professional <span className="gradient-text">Expertise.</span>
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = iconMap[service.icon] || Code2;
            
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-[40px] blur opacity-0 group-hover:opacity-10 transition duration-500" />
                
                <div className="relative h-full glass rounded-[40px] border border-border p-10 flex flex-col items-center text-center hover:border-primary/20 transition-all duration-500 shadow-sm hover:shadow-xl">
                  <div className="w-20 h-20 rounded-3xl bg-primary/10 flex items-center justify-center mb-8 group-hover:bg-primary group-hover:scale-110 transition-all duration-500">
                    <Icon size={40} className="text-primary group-hover:text-white" />
                  </div>
                  
                  <h4 className="text-2xl font-black mb-4 text-foreground group-hover:text-primary transition-colors">{service.title}</h4>
                  <p className="text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
                    {service.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
