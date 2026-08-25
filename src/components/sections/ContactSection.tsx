"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Copy, Check, ArrowUpRight, Globe } from "lucide-react"
import { FaGithub as Github, FaLinkedin as Linkedin, FaInstagram as Instagram } from "react-icons/fa"

export function ContactSection() {
  const [copied, setCopied] = useState(false)
  const email = "chaughulebalaji09@gmail.com"
  const phone = "+91 82630 92932"

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="py-10 sm:py-14 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-6 sm:mb-8">
          <div>
            <div className="text-[10px] font-mono font-semibold uppercase tracking-widest text-muted-foreground mb-1 flex items-center gap-1.5">
              <span className="w-4 h-px bg-foreground/40" />
              Direct Communication
            </div>
            <h2 className="text-lg sm:text-2xl font-extrabold text-foreground tracking-tight">
              Get in Touch
            </h2>
          </div>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-6 max-w-5xl">
          
          {/* Main Direct Email & Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-7 p-3.5 sm:p-5 rounded-xl bg-muted/30 border border-border/40 hover:border-border/80 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/40">
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded-md bg-muted border border-border/60">
                    <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xs sm:text-sm font-bold text-foreground">Direct Email</h3>
                    <p className="text-[10px] text-muted-foreground">Primary communication channel</p>
                  </div>
                </div>

                <button
                  onClick={copyToClipboard}
                  className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-muted hover:bg-muted/80 text-[11px] font-mono text-foreground transition-colors border border-border/50"
                >
                  {copied ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-muted-foreground" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mb-4">
                <a
                  href={`mailto:${email}`}
                  className="text-base sm:text-lg font-bold text-foreground hover:text-blue-500 tracking-tight break-all transition-colors block"
                >
                  {email}
                </a>
                <p className="text-[11px] text-muted-foreground mt-0.5">
                  Prompt responses for engineering roles and consultations.
                </p>
              </div>
            </div>

            <div className="pt-3 border-t border-border/40 flex flex-wrap items-center gap-2.5">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center gap-1 px-3.5 py-1.5 rounded-lg bg-foreground text-background font-semibold text-[11px] hover:opacity-90 transition-opacity"
              >
                <span>Send Email</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>

              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-1 px-3 py-1.5 rounded-lg bg-background border border-border hover:bg-muted text-foreground font-semibold text-[11px] transition-colors"
              >
                <Phone className="w-3 h-3 text-emerald-600" />
                <span>Call {phone}</span>
              </a>
            </div>
          </motion.div>

          {/* Location & Social Profiles */}
          <div className="lg:col-span-5 space-y-3">
            
            {/* Location & Status */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.04 }}
              className="p-3 rounded-xl bg-muted/30 border border-border/40"
            >
              <div className="flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-muted border border-border/60">
                  <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-foreground">Location</h4>
                  <p className="text-[10px] text-muted-foreground">Latur, Maharashtra, India</p>
                </div>
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.08 }}
              className="p-3 rounded-xl bg-muted/30 border border-border/40"
            >
              <h4 className="font-bold text-[10px] font-mono uppercase text-muted-foreground mb-2">
                Verified Profiles
              </h4>

              <div className="space-y-1.5">
                <a
                  href="https://linkedin.com/in/balaji-chaughule-47b33a3a1"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-muted/50 hover:bg-muted border border-border/40 transition-colors group text-[11px]"
                >
                  <div className="flex items-center gap-1.5">
                    <Linkedin className="w-3 h-3 text-blue-600" />
                    <span className="font-semibold text-foreground">LinkedIn</span>
                  </div>
                  <span className="font-mono text-muted-foreground group-hover:text-foreground flex items-center gap-0.5 text-[10px]">
                    balaji-chaughule <ArrowUpRight className="w-2.5 h-2.5" />
                  </span>
                </a>

                <a
                  href="https://github.com/balaji3245"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-muted/50 hover:bg-muted border border-border/40 transition-colors group text-[11px]"
                >
                  <div className="flex items-center gap-1.5">
                    <Github className="w-3 h-3 text-foreground" />
                    <span className="font-semibold text-foreground">GitHub</span>
                  </div>
                  <span className="font-mono text-muted-foreground group-hover:text-foreground flex items-center gap-0.5 text-[10px]">
                    balaji3245 <ArrowUpRight className="w-2.5 h-2.5" />
                  </span>
                </a>

                <a
                  href="https://www.instagram.com/chaughule_balaji_/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2 rounded-lg bg-muted/50 hover:bg-muted border border-border/40 transition-colors group text-[11px]"
                >
                  <div className="flex items-center gap-1.5">
                    <Instagram className="w-3 h-3 text-pink-600 dark:text-pink-400" />
                    <span className="font-semibold text-foreground">Instagram</span>
                  </div>
                  <span className="font-mono text-muted-foreground group-hover:text-foreground flex items-center gap-0.5 text-[10px]">
                    @chaughule_balaji_ <ArrowUpRight className="w-2.5 h-2.5" />
                  </span>
                </a>
              </div>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  )
}
