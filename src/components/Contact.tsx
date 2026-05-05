"use client";

import React from "react";
import { motion } from "framer-motion";
import { portfolioData } from "@/userData/portfolio-data";
import { Mail, Send, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const { contact, social } = portfolioData;

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-background">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-6"
            >
              <MessageSquare size={14} className="text-primary" />
              <span className="text-[10px] font-black text-primary uppercase tracking-[0.2em]">Contact Me</span>
            </motion.div>
            
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-black tracking-tight mb-6 text-foreground"
            >
              {contact.heading.split(' ').slice(0, -1).join(' ')} <span className="gradient-text">{contact.heading.split(' ').slice(-1)}</span>
            </motion.h3>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-500 dark:text-slate-400 text-xl max-w-lg mb-12 leading-relaxed"
            >
              {contact.subheading}
            </motion.p>

            <div className="space-y-6">
              <motion.a
                href={`mailto:${contact.email}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-6 p-6 glass rounded-3xl border border-border group hover:border-primary/30 transition-all duration-300 shadow-sm hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary transition-colors duration-500">
                  <Mail className="text-primary group-hover:text-white" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-500 uppercase tracking-widest mb-1">Email Me</p>
                  <p className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">{contact.email}</p>
                </div>
              </motion.a>

              <div className="flex gap-4">
                <motion.a
                  href={social.linkedin}
                  target="_blank"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="p-5 glass rounded-2xl border border-border hover:border-primary/30 transition-all group shadow-sm"
                >
                  <FaLinkedin className="text-slate-500 group-hover:text-primary transition-colors" />
                </motion.a>
                <motion.a
                  href={social.github}
                  target="_blank"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="p-5 glass rounded-2xl border border-border hover:border-primary/30 transition-all group shadow-sm"
                >
                  <FaGithub className="text-slate-500 group-hover:text-primary transition-colors" />
                </motion.a>
              </div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass rounded-[40px] border border-border p-8 md:p-12 shadow-2xl"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-4">Full Name</label>
                  <input 
                    type="text" 
                    placeholder="John Doe"
                    className="w-full bg-card border border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors text-foreground"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-4">Email Address</label>
                  <input 
                    type="email" 
                    placeholder="john@example.com"
                    className="w-full bg-card border border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors text-foreground"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-4">Subject</label>
                <input 
                  type="text" 
                  placeholder="Project Collaboration"
                  className="w-full bg-card border border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors text-foreground"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-black text-slate-500 uppercase tracking-widest ml-4">Your Message</label>
                <textarea 
                  rows={4}
                  placeholder="How can I help you?"
                  className="w-full bg-card border border-border rounded-2xl px-6 py-4 focus:outline-none focus:border-primary/50 transition-colors resize-none text-foreground"
                />
              </div>
              <button className="w-full bg-primary hover:bg-primary/90 text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-3 group">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
