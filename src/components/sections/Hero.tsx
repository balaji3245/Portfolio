"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight, FileText, CheckCircle2, MapPin } from "lucide-react"
import { FaGithub as Github, FaLinkedin as Linkedin, FaInstagram as Instagram } from "react-icons/fa"

export function Hero() {
  const [imgSrc, setImgSrc] = useState("/raw_avatar.png")

  const coreDisciplines = [
    "Full-Stack Web Architecture",
    "Scalable E-Commerce Systems",
    "PostgreSQL & Prisma Modeling",
    "AWS, VPS & Linux Infrastructure",
  ]

  const keyFacts = [
    { label: "Current Role", value: "Full-Stack Dev & Team Leader", detail: "YJ Developers Pvt. Ltd." },
    { label: "Core Experience", value: "2 Years Practical", detail: "End-to-End Delivery" },
    { label: "Specialization", value: "Scalable Architecture", detail: "Next.js • Node.js • PostgreSQL" },
    { label: "Deployment", value: "AWS / VPS & Linux", detail: "Nginx • PM2 • Cloud" },
  ]

  return (
    <section id="hero" className="relative pt-24 pb-12 sm:pt-32 sm:pb-16 overflow-hidden border-b border-border/60 bg-subtle-grid">
      {/* Ambient soft glow */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-blue-100/50 dark:bg-blue-950/20 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* Left Column: Editorial Summary */}
          <motion.div 
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="order-2 lg:order-1 lg:col-span-7 flex flex-col items-start"
          >
            {/* Status Indicator */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-muted border border-border text-xs font-mono text-muted-foreground mb-4 shadow-sm">
              <span className="text-foreground font-medium flex items-center gap-1">
                <MapPin className="w-3 h-3 text-muted-foreground text-red-500" />
                Latur, Maharashtra, India
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-foreground leading-tight mb-2">
              Chaughule Balaji
            </h1>
            <div className="text-base sm:text-xl font-semibold tracking-tight text-muted-foreground mb-4 font-mono">
              Full-Stack Developer | Data Scientist
            </div>

            {/* Concise Subtitle */}
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl mb-6">
              I am <span className="font-semibold text-foreground">Chaughule Balaji</span>, leading full-stack engineering at <span className="font-semibold text-foreground">YJ Developers</span>. I specialize in designing high-performance e-commerce and SaaS architectures across Next.js, TypeScript, Node.js, NestJS, PostgreSQL, and AWS.
            </p>

            {/* 4 Core Pillars Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full mb-6">
              {coreDisciplines.map((item) => (
                <div key={item} className="flex items-center gap-2 text-xs text-foreground/90 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#projects"
                className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-foreground text-background font-semibold text-xs sm:text-sm hover:opacity-90 transition-opacity shadow-sm"
              >
                View Projects
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-background border border-border hover:bg-muted text-foreground font-semibold text-xs sm:text-sm transition-colors shadow-sm"
              >
                <FileText className="w-3.5 h-3.5 text-muted-foreground" />
                View CV
              </a>

              <div className="flex items-center gap-1.5 ml-auto sm:ml-2">
                <a
                  href="https://github.com/balaji3245"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="p-2.5 rounded-xl bg-background border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github className="w-4 h-4" />
                </a>
                <a
                  href="https://linkedin.com/in/balaji-chaughule-47b33a3a1"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="p-2.5 rounded-xl bg-background border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href="https://www.instagram.com/chaughule_balaji_/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="p-2.5 rounded-xl bg-background border border-border hover:bg-muted text-muted-foreground hover:text-pink-500 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Circular Portrait with Boundary Ring */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="order-1 lg:order-2 lg:col-span-5 flex flex-col items-center justify-center relative"
          >
            {/* Soft Ambient Backlight Glow behind the circle */}
            <div className="absolute inset-0 max-w-[340px] max-h-[340px] m-auto bg-gradient-to-tr from-blue-500/20 via-indigo-500/15 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />

            <div className="relative flex items-center justify-center">
              {/* Circle Boundary Container (Clean & Normal) */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 md:w-[340px] md:h-[340px] rounded-full p-1.5 bg-background border-2 border-slate-300 dark:border-slate-700 shadow-lg overflow-hidden flex items-center justify-center group">
                <div className="w-full h-full rounded-full overflow-hidden bg-muted relative">
                  <img
                    src={imgSrc}
                    onError={() => {
                      if (imgSrc === "/raw_avatar.png") {
                        setImgSrc("/profile.png")
                      } else if (imgSrc === "/profile.png") {
                        setImgSrc("/profile.jpg")
                      } else {
                        setImgSrc("https://github.com/balaji3245.png")
                      }
                    }}
                    alt="Chaughule Balaji"
                    className="w-full h-full object-cover object-top select-none group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>

              {/* Floating Minimal Badge overlapping the circle boundary */}
              <div className="absolute -bottom-3 px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-white/20 text-white shadow-xl flex items-center gap-2 z-10">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-semibold tracking-tight text-white">Chaughule Balaji</span>
                <span className="text-white/40">|</span>
                <span className="text-[11px] font-mono text-white/90">Team Leader</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Bottom Key Facts Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-10 pt-6 border-t border-border/70">
          {keyFacts.map((fact) => (
            <div key={fact.label} className="p-3 rounded-xl bg-muted/40 border border-border/60">
              <div className="text-[10px] font-mono font-medium text-muted-foreground uppercase">{fact.label}</div>
              <div className="text-sm font-bold text-foreground mt-0.5 tracking-tight">{fact.value}</div>
              <div className="text-[11px] text-muted-foreground mt-0.5">{fact.detail}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
