"use client";

import React from "react";
import { portfolioData } from "@/userData/portfolio-data";
import { Mail, Heart } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  const { personal, social } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <h2 className="text-xl font-black gradient-text tracking-tighter">
              {personal.name.toUpperCase()}
            </h2>
            <p className="text-slate-500 text-sm font-medium">
              © {currentYear} — Designed & Built with passion
            </p>
          </div>

          <div className="flex items-center gap-4">
            <a href={social.github} target="_blank" className="p-3 rounded-xl bg-card border border-border hover:bg-primary/20 hover:text-primary transition-all duration-300">
              <FaGithub size={20} />
            </a>
            <a href={social.linkedin} target="_blank" className="p-3 rounded-xl bg-card border border-border hover:bg-primary/20 hover:text-primary transition-all duration-300">
              <FaLinkedin size={20} />
            </a>
            <a href={`mailto:${personal.email}`} className="p-3 rounded-xl bg-card border border-border hover:bg-primary/20 hover:text-primary transition-all duration-300">
              <Mail size={20} />
            </a>
          </div>

          <div className="flex items-center gap-2 text-slate-500 text-sm font-bold">
            Built with <Heart size={14} className="text-primary fill-primary" /> using Next.js
          </div>
        </div>
      </div>
    </footer>
  );
}
