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
    <section id="education" className="py-16 sm:py-20 bg-muted/20 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
              <span className="w-6 h-px bg-foreground/40" />
              Credentials & Foundation
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Education & Verified Certifications
            </h2>
          </div>

          
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          
          {/* Degree & Languages Card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="lg:col-span-5 editorial-card rounded-2xl p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2.5 rounded-xl bg-muted border border-border">
                  <GraduationCap className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                  <span className="text-[10px] font-mono font-semibold uppercase text-muted-foreground">
                    Academic Degree
                  </span>
                  <h3 className="text-lg font-bold text-foreground">
                    Bachelor of Computer Science (BCS)
                  </h3>
                </div>
              </div>

              <div className="space-y-1 text-xs sm:text-sm text-muted-foreground mb-4">
                <div className="font-semibold text-foreground">Swami Vivekanand Mahavidyalaya, Latur</div>
                <div>Latur, Maharashtra, India</div>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-emerald-600 dark:text-emerald-400 font-semibold mb-6">
                <ShieldCheck className="w-4 h-4" />
                <span>Graduated in Computer Science</span>
              </div>
            </div>

            {/* Language Strip */}
            <div className="pt-4 border-t border-border/70">
              <div className="text-[11px] font-mono font-semibold text-muted-foreground uppercase mb-2">
                Languages
              </div>
              <div className="flex flex-wrap gap-2">
                {languageProficiency.map((l) => (
                  <span
                    key={l.lang}
                    className="px-2.5 py-1 rounded-md bg-muted text-foreground text-xs font-medium border border-border/60"
                  >
                    <span className="font-semibold">{l.lang}</span>{" "}
                    <span className="text-muted-foreground font-mono text-[10px]">({l.level})</span>
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 4 Compact Certifications Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.05 }}
                className="editorial-card rounded-xl p-4 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-muted-foreground font-semibold uppercase">
                      {cert.issuer}
                    </span>
                    <Award className="w-3.5 h-3.5 text-muted-foreground/60" />
                  </div>

                  <h4 className="font-bold text-xs sm:text-sm text-foreground mb-1 leading-snug">
                    {cert.title}
                  </h4>
                </div>

                <div className="pt-3 border-t border-border/60 flex items-center justify-between mt-3">
                  <span className="text-[10px] font-mono text-muted-foreground">
                    {cert.date}
                  </span>
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span>View Credential</span>
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
