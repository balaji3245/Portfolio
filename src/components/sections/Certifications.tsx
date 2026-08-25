"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, ExternalLink, ShieldCheck, Languages, ArrowUpRight } from "lucide-react"

export function Certifications() {
  const certifications = [
    {
      id: "yj-cert",
      title: "Frontend Developer Internship",
      issuer: "YJ Developers Pvt. Ltd.",
      date: "July 2026",
      credentialUrl: "/yj-internship-certificate.pdf",
    },
    {
      id: "python-hackerrank",
      title: "Python (Basic) Certificate",
      issuer: "HackerRank",
      date: "Verified",
      credentialUrl: "/python-basic-certificate.pdf",
    },
    {
      id: "js-cert",
      title: "JavaScript (Intermediate)",
      issuer: "HackerRank",
      date: "Verified",
      credentialUrl: "/javascript-intermediate-certificate.pdf",
    },
    {
      id: "css-cert",
      title: "CSS Certification",
      issuer: "HackerRank",
      date: "Verified",
      credentialUrl: "/css-certificate.pdf",
    },
  ]

  const languageProficiency = [
    { lang: "Marathi", level: "Native" },
    { lang: "Hindi", level: "Fluent" },
    { lang: "English", level: "Professional" },
  ]

  return (
    <section id="education" className="py-10 sm:py-14 bg-muted/20 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-6 sm:mb-8">
          <div>
            <div className="text-[10px] font-mono font-semibold uppercase tracking-widest text-muted-foreground mb-1 flex items-center gap-1.5">
              <span className="w-4 h-px bg-foreground/40" />
              Credentials & Foundation
            </div>
            <h2 className="text-lg sm:text-2xl font-extrabold text-foreground tracking-tight">
              Education & Verified Certifications
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-6">
          
          {/* Degree & Languages Card */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="lg:col-span-5 p-3.5 sm:p-5 rounded-xl bg-muted/30 border border-border/40 hover:border-border/80 transition-colors flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2.5 mb-3">
                <div className="p-1.5 rounded-md bg-muted border border-border/60">
                  <GraduationCap className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <span className="text-[9px] font-mono font-semibold uppercase text-muted-foreground">
                    Academic Degree
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-foreground leading-snug">
                    Bachelor of Computer Science (BCS)
                  </h3>
                </div>
              </div>

              <div className="space-y-0.5 text-xs text-muted-foreground mb-3">
                <div className="font-semibold text-foreground">Swami Vivekanand Mahavidyalaya, Latur</div>
                <div>Latur, Maharashtra, India</div>
              </div>

            </div>

            {/* Language Strip */}
            <div className="pt-3 border-t border-border/40">
              <div className="text-[10px] font-mono font-semibold text-muted-foreground uppercase mb-1.5">
                Languages
              </div>
              <div className="flex flex-wrap gap-1.5">
                {languageProficiency.map((l) => (
                  <span
                    key={l.lang}
                    className="px-2 py-0.5 rounded-md bg-muted text-foreground text-xs font-medium border border-border/50"
                  >
                    <span className="font-semibold">{l.lang}</span>{" "}
                    <span className="text-muted-foreground font-mono text-[9px]">({l.level})</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 4 Compact Certifications Grid (2-Column on Mobile & Desktop) */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-2.5 sm:gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="p-2.5 sm:p-3.5 rounded-xl bg-muted/30 border border-border/40 hover:border-border/80 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] font-mono text-muted-foreground font-semibold uppercase">
                      {cert.issuer}
                    </span>
                    <Award className="w-3.5 h-3.5 text-muted-foreground/60" />
                  </div>

                  <h4 className="font-bold text-xs sm:text-sm text-foreground mb-1 leading-snug">
                    {cert.title}
                  </h4>
                </div>

                <div className="pt-2 border-t border-border/40 flex items-center justify-between mt-2">
                  <span className="text-[9px] font-mono text-muted-foreground">
                    {cert.date}
                  </span>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-0.5 text-[10px] sm:text-[11px] font-semibold text-foreground hover:text-blue-500 transition-colors"
                  >
                    <span>View</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
