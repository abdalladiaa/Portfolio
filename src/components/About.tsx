"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Users,
  Rocket,
  ChevronRight,
  Code2,
} from "lucide-react";
import { FaDribbble, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { portfolioData } from "@/userData/portfolio-data";

export default function About() {
  const { about, personal, social: socialData } = portfolioData;

  return (
    <section
      id="about"
      className="py-24 px-4 md:px-8 bg-background relative overflow-hidden"
      aria-labelledby="about-title"
    >
      {/* Background decorations */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-primary/10 rounded-full filter blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-secondary/10 rounded-full filter blur-3xl opacity-50"></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-lg font-medium mb-3 block">
            Who I Am
          </span>
          <h2 className="text-5xl font-black mb-4">
            About{" "}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Abdalla Diaa
            </span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full"></div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side (Content) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Personal Story */}
            <div className="relative">
              {/* Large decorative quote */}
              <div className="absolute -top-4 -left-2 text-8xl text-primary/10 font-serif leading-none">
                "
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-6 text-foreground leading-tight">
                  I love turning ideas into{" "}
                  <span className="text-primary">digital reality</span>
                </h3>
                <p className="text-lg text-muted leading-relaxed">
                  {about.bio}
                </p>
              </div>
            </div>

            {/* Quick Info Tags */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border transition-colors hover:bg-card/80">
                <GraduationCap className="w-4 h-4 text-primary" />
                <span className="text-sm font-medium">Computer Science</span>
              </div>
              <div className="flex items-center gap-2 bg-card px-4 py-2 rounded-full border border-border transition-colors hover:bg-card/80">
                <Briefcase className="w-4 h-4 text-secondary" />
                <span className="text-sm font-medium">+15 Projects</span>
              </div>
            </div>

            {/* Services List */}
            <div className="bg-card/50 backdrop-blur-sm rounded-2xl p-6 border border-border shadow-sm">
              <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                What I Offer
                <Rocket className="w-5 h-5 text-primary animate-bounce" />
              </h4>
              <motion.div
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-3"
              >
                {[
                  {
                    text: "Full-stack web development with React & Next.js",
                    color: "bg-primary",
                  },
                  {
                    text: "Modern and attractive UI design",
                    color: "bg-secondary",
                  },
                  {
                    text: "Performance and load speed optimization",
                    color: "bg-orange-500",
                  },
                  {
                    text: "Responsive development for all devices",
                    color: "bg-emerald-500",
                  },
                ].map((service, idx) => (
                  <motion.div
                    key={idx}
                    variants={{
                      hidden: { opacity: 0, x: -20 },
                      show: { opacity: 1, x: 0 },
                    }}
                    className="flex items-center gap-3 text-muted"
                  >
                    <span
                      className={`w-2 h-2 ${service.color} rounded-full`}
                    ></span>
                    <span className="text-sm md:text-base">{service.text}</span>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Side (Terminal + Stats) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Code Terminal Card */}
            <div className="bg-slate-900 dark:bg-slate-950 rounded-2xl overflow-hidden shadow-2xl border border-slate-700 hover:shadow-primary/10 hover:border-slate-600 transition-all duration-500 transform hover:-translate-y-1">
              {/* Terminal Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-slate-700">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <div className="flex items-center gap-2 text-slate-400 text-xs font-mono">
                  <Code2 className="w-3 h-3" />
                  <span>abdalla.js</span>
                </div>
              </div>
              {/* Terminal Content */}
              <div className="p-6 font-mono text-sm md:text-base leading-relaxed overflow-x-auto text-slate-200">
                <p className="text-slate-500">// My identity in a nutshell</p>
                <div className="mt-3">
                  <p>
                    <span className="text-purple-400">const</span>{" "}
                    <span className="text-blue-400">abdalla</span> = {"{"}
                  </p>
                  <p className="ml-4">
                    <span className="text-green-400">name</span>:{" "}
                    <span className="text-yellow-400">"Abdalla Diaa"</span>,
                  </p>
                  <p className="ml-4">
                    <span className="text-green-400">title</span>:{" "}
                    <span className="text-yellow-400">
                      "Frontend Developer"
                    </span>
                    ,
                  </p>
                  <p className="ml-4">
                    <span className="text-green-400">location</span>:{" "}
                    <span className="text-yellow-400">"{personal.location}"</span>,
                  </p>
                  <p className="ml-4">
                    <span className="text-green-400">skills</span>: [
                  </p>
                  <p className="ml-8">
                    <span className="text-yellow-400">"React"</span>,{" "}
                    <span className="text-yellow-400">"Next.js"</span>,
                  </p>
                  <p className="ml-8">
                    <span className="text-yellow-400">"TypeScript"</span>,{" "}
                    <span className="text-yellow-400">"Tailwind"</span>
                  </p>
                  <p className="ml-4">],</p>
                  <p className="ml-4">
                    <span className="text-green-400">passion</span>:{" "}
                    <span className="text-yellow-400">
                      "Creating pixel-perfect UIs"
                    </span>
                    ,
                  </p>
                  <p className="ml-4">
                    <span className="text-green-400">available</span>:{" "}
                    <span className="text-blue-400">true</span>,
                  </p>
                  <p className="ml-4">
                    <span className="text-green-400">hireable</span>:{" "}
                    <span className="text-blue-400">true</span>
                  </p>
                  <p>{"};"}</p>
                  <p className="mt-4">
                    <span className="text-purple-400">export default</span>{" "}
                    <span className="text-blue-400">abdalla</span>;
                  </p>
                </div>
              </div>
            </div>

            {/* Quick Stats Row */}
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  label: "Projects",
                  value: "15+",
                  color: "hover:border-primary",
                  textCol: "text-primary",
                },
                {
                  label: "Passion",
                  value: "100%",
                  color: "hover:border-secondary",
                  textCol: "text-secondary",
                },
                {
                  label: "Status",
                  value: personal.availableForWork ? "Active" : "Busy",
                  color: "hover:border-orange-500",
                  textCol: "text-orange-500",
                },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className={`bg-card glass rounded-2xl p-5 text-center transition-all duration-300 shadow-sm ${stat.color}`}
                >
                  <div className={`text-xl md:text-3xl font-black ${stat.textCol} mb-1`}>
                    {stat.value}
                  </div>
                  <div className="text-[10px] md:text-sm text-muted font-medium uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                {
                  icon: <FaGithub />,
                  label: "GitHub",
                  href: socialData.github,
                  hover: "hover:bg-slate-900",
                },
                {
                  icon: <FaLinkedin />,
                  label: "LinkedIn",
                  href: socialData.linkedin,
                  hover: "hover:bg-[#0A66C2]",
                },
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-card glass rounded-xl flex items-center justify-center ${social.hover} hover:text-white transition-all duration-300 shadow-sm group`}
                  aria-label={social.label}
                >
                  <span className="w-5 h-5 transition-transform group-hover:scale-110">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
