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
    <section id="contact" className="py-16 sm:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
              <span className="w-6 h-px bg-foreground/40" />
              Direct Communication
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Get in Touch
            </h2>
          </div>

          
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-5xl">
          
          {/* Main Direct Email & Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-7 editorial-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/80">
                <div className="flex items-center gap-2.5">
                  <div className="p-2.5 rounded-xl bg-muted border border-border">
                    <Mail className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-foreground">Direct Email</h3>
                    <p className="text-[11px] text-muted-foreground">Primary communication channel</p>
                  </div>
                </div>

                <button
                  onClick={copyToClipboard}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted hover:bg-muted/80 text-xs font-mono text-foreground transition-colors border border-border"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-muted-foreground" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <div className="mb-6">
                <a
                  href={`mailto:${email}`}
                  className="text-lg sm:text-xl font-bold text-foreground hover:text-blue-600 dark:hover:text-blue-400 tracking-tight break-all transition-colors block"
                >
                  {email}
                </a>
                <p className="text-xs text-muted-foreground mt-1">
                  Prompt responses for engineering roles and consultations.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-border/80 flex flex-wrap items-center gap-3">
              <a
                href={`mailto:${email}`}
                className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-foreground text-background font-semibold text-xs hover:opacity-90 transition-opacity"
              >
                Send Email Directly
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>

              <a
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xl bg-background border border-border hover:bg-muted text-foreground font-semibold text-xs transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-emerald-600" />
                Call {phone}
              </a>
            </div>
          </motion.div>

          {/* Location & Social Profiles */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Location & Status */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.05 }}
              className="editorial-card rounded-2xl p-5"
            >
              <div className="flex items-center gap-2.5 mb-2">
                <div className="p-2 rounded-lg bg-muted border border-border">
                  <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <h4 className="font-bold text-xs sm:text-sm text-foreground">Location</h4>
                  <p className="text-[11px] text-muted-foreground">Latur, Maharashtra, India</p>
                </div>
              </div>

            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.1 }}
              className="editorial-card rounded-2xl p-5"
            >
              <h4 className="font-bold text-xs font-mono uppercase text-muted-foreground mb-3">
                Verified Profiles
              </h4>

              <div className="space-y-2">
                <a
                  href="https://linkedin.com/in/balaji-chaughule-47b33a3a1"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-muted/60 hover:bg-muted border border-border/60 transition-colors group text-xs"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-3.5 h-3.5 text-blue-600" />
                    <span className="font-semibold text-foreground">LinkedIn</span>
                  </div>
                  <span className="font-mono text-muted-foreground group-hover:text-foreground flex items-center gap-1 text-[11px]">
                    balaji-chaughule <ArrowUpRight className="w-3 h-3" />
                  </span>
                </a>

                <a
                  href="https://github.com/balaji3245"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-muted/60 hover:bg-muted border border-border/60 transition-colors group text-xs"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-3.5 h-3.5 text-foreground" />
                    <span className="font-semibold text-foreground">GitHub</span>
                  </div>
                  <span className="font-mono text-muted-foreground group-hover:text-foreground flex items-center gap-1 text-[11px]">
                    balaji3245 <ArrowUpRight className="w-3 h-3" />
                  </span>
                </a>

                <a
                  href="https://www.instagram.com/chaughule_balaji_/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-muted/60 hover:bg-muted border border-border/60 transition-colors group text-xs"
                >
                  <div className="flex items-center gap-2">
                    <Instagram className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
                    <span className="font-semibold text-foreground">Instagram</span>
                  </div>
                  <span className="font-mono text-muted-foreground group-hover:text-foreground flex items-center gap-1 text-[11px]">
                    @chaughule_balaji_ <ArrowUpRight className="w-3 h-3" />
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
