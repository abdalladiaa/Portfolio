"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { portfolioData } from "@/userData/portfolio-data";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const { personal, social } = portfolioData;

  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden"
    >
      {/* Background Animated Blobs */}
      <div className="blob w-96 h-96 bg-primary/20 top-20 -left-20" />
      <div className="blob w-96 h-96 bg-secondary/20 bottom-20 -right-20 delay-700" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-card border border-border text-primary text-xs font-bold uppercase tracking-wider mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            <span>Available for new opportunities</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl font-black leading-tight mb-6"
          >
            Design <br />
            <span className="gradient-text">Experiences.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-muted max-w-lg mb-10 leading-relaxed"
          >
            I&apos;m{" "}
            <span className="text-foreground font-bold">{personal.name}</span>,{" "}
            {personal.tagline} {personal.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap gap-5"
          >
            <a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-2xl font-bold flex items-center space-x-3 transition-all hover:scale-105 shadow-xl shadow-primary/25 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                size={20}
              />
            </a>
            <button className="glass group text-foreground px-8 py-4 rounded-2xl font-bold flex items-center space-x-3 transition-all duration-300 hover:bg-card/80 border border-border active:scale-95">
              <Download
                size={20}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
              />
              <span>Resume</span>
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center space-x-6 mt-12"
          >
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                className="text-muted hover:text-primary transition-colors"
              >
                <FaGithub size={24} />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                className="text-muted hover:text-primary transition-colors"
              >
                <FaLinkedin size={24} />
              </a>
            )}
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          <div className="relative w-[500px] h-[500px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[40px] rotate-6 border border-border" />
            <div className="absolute inset-0 bg-card rounded-[40px] -rotate-3 border border-border overflow-hidden shadow-2xl group">
              <Image
                src={personal.avatar}
                alt={personal.name}
                fill
                priority
                className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-in-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-60 group-hover:opacity-20 transition-opacity duration-700" />

              <div className="absolute bottom-10 left-10 right-10 p-8 glass rounded-3xl border border-border translate-y-2 group-hover:translate-y-0 transition-transform duration-700">
                <h3 className="text-2xl font-bold mb-2 text-foreground">
                  {personal.title}
                </h3>
                <p className="text-sm text-muted">{personal.location}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        onClick={(e) => {
          e.preventDefault();
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted cursor-pointer hover:text-primary transition-colors z-20"
        aria-label="Scroll to About Section"
      >
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-primary rounded-full" />
        </div>
      </motion.a>
    </section>
  );
}
