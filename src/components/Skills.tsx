"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/userData/portfolio-data";
// استيراد الأيقونات
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss,
  SiFramer, SiRedux, SiHtml5, SiJavascript,
  SiVite, SiGit, SiDocker, SiPostman,
  SiBootstrap, SiFigma, SiReactquery, SiReactrouter,
  SiAxios, SiZod,
  SiN8N
} from "react-icons/si";
import { TbLock, TbComponents } from "react-icons/tb";
import { Cpu, Code2, Layout, Zap, Database } from "lucide-react";
import { DiCss3 } from "react-icons/di";

// فانكشن ربط الاسم بالأيقونة مع الألوان الرسمية
const getIcon = (skillName: string) => {
  const icons: { [key: string]: React.ReactNode } = {
    "HTML5": <SiHtml5 className="text-[#E34F26]" />,
    "CSS3": <DiCss3 className="text-[#1572B6]" />,
    "JavaScript (ES6+)": <SiJavascript className="text-[#F7DF1E]" />,
    "React": <SiReact className="text-[#61DAFB]" />,
    "Next.js": <SiNextdotjs className="text-foreground" />,
    "TypeScript": <SiTypescript className="text-[#3178C6]" />,
    "Responsive Design": <Layout className="text-[#00DF9A]" />,
    "React Router": <SiReactrouter className="text-[#CA4245]" />,
    "NextAuth": <TbLock className="text-[#FFD700]" />,
    "Tailwind CSS": <SiTailwindcss className="text-[#06B6D4]" />,
    "Bootstrap": <SiBootstrap className="text-[#7952B3]" />,
    "Shadcn UI": <TbComponents className="text-foreground" />,
    "HeroUI": <Zap className="text-primary" />,
    "Framer Motion": <SiFramer className="text-[#0055FF]" />,
    "Figma": <SiFigma className="text-[#F24E1E]" />,
    "Lucide Icons": <Zap className="text-[#FFD700]" />,
    "UI/UX Principles": <Layout className="text-primary" />,
    "React Query (TanStack)": <SiReactquery className="text-[#FF4154]" />,
    "Redux Toolkit": <SiRedux className="text-[#764ABC]" />,
    "Context API": <Database className="text-[#61DAFB]" />,
    "React Hook Form + Zod": <SiZod className="text-[#EC5990]" />,
    "Git & GitHub": <SiGit className="text-[#F05032]" />,
    "REST APIs & Axios": <SiAxios className="text-[#5A29E4]" />,
    "Docker": <SiDocker className="text-[#2496ED]" />,
    "Vite": <SiVite className="text-[#646CFF]" />,
    "n8n": <SiN8N className="text-[#FF6D5A]" />,
    "Postman": <SiPostman className="text-[#FF6C37]" />,
  };
  return icons[skillName] || <Code2 className="text-slate-500" />;
};

export default function Skills() {
  const { skills } = portfolioData;

  const categories = [
    { title: "Development", items: skills.frontend, icon: <Layout size={20} /> },
    { title: "Styling & Motion", items: skills.styling, icon: <Zap size={20} /> },
    { title: "Tools & DevOps", items: [...skills.stateManagement, ...skills.toolsWorkflow], icon: <Code2 size={20} /> },
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-20">
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black mb-4 text-foreground"
          >
            Technical <span className="gradient-text">Skills.</span>
          </motion.h3>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="glass p-8 rounded-[35px] border border-border relative group"
            >
              <div className="flex items-center gap-3 mb-10">
                <div className="p-3 rounded-2xl bg-primary/10 text-primary border border-primary/20">
                  {category.icon}
                </div>
                <h4 className="text-xl font-bold text-foreground">{category.title}</h4>
              </div>

              {/* Skills Grid */}
              <div className="grid grid-cols-3 gap-y-10 gap-x-4">
                {category.items.map((skill) => (
                  <div key={skill.name} className="flex flex-col items-center group/item text-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="relative w-16 h-16 rounded-2xl bg-card border border-border flex items-center justify-center text-3xl mb-3 transition-all duration-300 group-hover/item:border-primary/50 group-hover/item:bg-primary/5"
                    >
                      {/* Glow Behind Icon */}
                      <div className="absolute inset-0 rounded-2xl bg-primary/0 group-hover/item:bg-primary/10 blur-xl transition-all duration-300" />
                      
                      <div className="relative z-10">
                        {getIcon(skill.name)}
                      </div>
                    </motion.div>
                    
                    <span className="text-[9px] sm:text-[10px] leading-tight uppercase tracking-widest font-black text-slate-500 group-hover/item:text-foreground transition-colors h-8 flex items-center justify-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer: CS Fundamentals */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 p-8 glass rounded-[35px] border border-border flex flex-wrap justify-center gap-4"
        >
          <div className="w-full text-center mb-4 flex items-center justify-center gap-2 text-slate-500">
            <Cpu size={18} />
            <span className="text-sm font-bold uppercase tracking-[0.2em]">Computer Science Foundations</span>
          </div>
          {skills.csFundamentals.map((item) => (
            <span
              key={item}
              className="px-5 py-2 rounded-xl bg-card border border-border text-xs font-bold text-slate-500 dark:text-slate-400 hover:text-primary hover:border-primary/40 transition-all cursor-default"
            >
              {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}