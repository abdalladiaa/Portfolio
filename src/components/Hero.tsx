"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import { portfolioData } from "@/userData/portfolio-data";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Hero() {
  const { personal, social } = portfolioData;

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-28 lg:pt-20 overflow-hidden"
    >
      <div className="absolute top-20 -left-20 w-72 h-72 md:w-96 md:h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse -z-10" />
      <div className="absolute bottom-20 -right-20 w-72 h-72 md:w-96 md:h-96 bg-secondary/20 rounded-full blur-[100px] animate-pulse delay-700 -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left order-2 lg:order-1"
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
            className="text-5xl md:text-7xl lg:text-8xl font-black leading-tight mb-6"
          >
            Design <br />
            <span className="gradient-text">Experiences.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-base md:text-lg text-muted max-w-lg mx-auto lg:mx-0 mb-10 leading-relaxed"
          >
            I&apos;m{" "}
            <span className="text-foreground font-bold">{personal.name}</span>,{" "}
            {personal.tagline} {personal.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center lg:justify-start gap-4 md:gap-5"
          >
            <button
              onClick={() => scrollToSection("projects")}
              className="group bg-primary hover:bg-primary/90 text-white px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold flex items-center space-x-3 transition-all hover:scale-105 shadow-xl shadow-primary/25 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                size={20}
              />
            </button>

            <a
              href="https://drive.google.com/uc?export=download&id=16Ly0Y-JaAmLyXvAKU5-FVw0qmPPl8MUs"
              download
              className="glass group text-foreground px-6 md:px-8 py-3 md:py-4 rounded-2xl font-bold flex items-center space-x-3 transition-all duration-300 hover:bg-card/80 border border-border active:scale-95 cursor-pointer"
            >
              <Download
                size={20}
                className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-110"
              />
              <span>Resume</span>
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center lg:justify-start space-x-6 mt-12"
          >
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors p-2 hover:bg-white/5 rounded-xl"
              >
                <FaGithub size={24} />
              </a>
            )}
            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted hover:text-primary transition-colors p-2 hover:bg-white/5 rounded-xl"
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
          className="relative order-1 lg:order-2"
        >
          <div className="relative w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] lg:w-[500px] lg:h-[500px] mx-auto">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[40px] border border-border" />

            <div className="absolute inset-0 bg-card rounded-[40px] border border-border overflow-hidden shadow-2xl group">
              <Image
                src={personal.avatar}
                alt={personal.name}
                fill
                priority
                className="object-cover lg:grayscale lg:group-hover:grayscale-0 transition-all duration-700 ease-in-out scale-110 group-hover:scale-100"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80 lg:opacity-60 lg:group-hover:opacity-20 transition-opacity duration-700" />

              <div className="absolute bottom-6 left-6 right-6 lg:bottom-10 lg:left-10 lg:right-10 p-5 lg:p-8 glass rounded-2xl lg:rounded-3xl border border-border backdrop-blur-md transition-all duration-700">
                <h3 className="text-xl lg:text-2xl font-bold mb-1 lg:mb-2 text-foreground truncate">
                  {personal.title}
                </h3>
                <p className="text-xs lg:text-sm text-muted flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                  {personal.location}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToSection("about")}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-6 md:bottom-10 left-1/2 -translate-x-1/2 text-muted cursor-pointer hover:text-primary transition-colors z-20"
        aria-label="Scroll to About Section"
      >
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center p-1">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 16 }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-2 bg-primary rounded-full"
          />
        </div>
      </motion.button>
    </section>
  );
}
