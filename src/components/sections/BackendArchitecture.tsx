"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ShieldCheck, Database, Server, Lock, ArrowRight, CheckCircle2 } from "lucide-react"
import { DetailModal } from "@/components/ui/detail-modal"

export function BackendArchitecture() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedArch, setSelectedArch] = useState<any>(null)

  const architecturalPillars = [
    {
      id: "security",
      title: "Authentication & Security",
      badge: "Security Core",
      icon: <Lock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      shortDesc:
        "Stateless JWT in HttpOnly cookies, Bcrypt password hashing, RBAC route protection, and brute-force account lockout prevention.",
      fullOverview:
        "Engineered for defense-in-depth across client and server boundaries to safeguard sensitive user operations and multi-tenant access.",
      specifications: [
        "Stateless JWT authorization tokens persisted exclusively within HttpOnly, Secure, SameSite cookies to mitigate XSS vulnerabilities.",
        "Adaptive Bcrypt password hashing with tuned work factors for cryptographic credential safety.",
        "Granular Role-Based Access Control (RBAC) middleware for protecting admin, vendor, and customer routes.",
        "Account lockout protection and rate limiting to prevent brute-force credential stuffing attacks.",
      ],
      technologies: ["JWT", "HttpOnly Cookies", "Bcrypt", "RBAC", "Middleware Security"],
    },
    {
      id: "data-modeling",
      title: "Data Modeling & Concurrency",
      badge: "Database Engineering",
      icon: <Database className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      shortDesc:
        "PostgreSQL & Prisma schemas with deterministic variant uniqueness protection, relational cascading, and Supabase media storage.",
      fullOverview:
        "Designed normalized PostgreSQL schemas and Prisma ORM models capable of handling complex catalog hierarchies and concurrent inventory mutations.",
      specifications: [
        "Deterministic variant-combination uniqueness constraints preventing race conditions during product updates.",
        "Strict relational foreign key integrity with explicit cascading rules and transactional safety.",
        "Supabase Storage integration with structured bucket policies for optimized media asset delivery.",
        "Selective document modeling with MongoDB for unstructured metadata where high agility is required.",
      ],
      technologies: ["PostgreSQL", "Prisma ORM", "MongoDB", "Supabase Storage", "SQL"],
    },
    {
      id: "infrastructure",
      title: "Cloud Hosting & DevOps",
      badge: "DevOps & Infrastructure",
      icon: <Server className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      shortDesc:
        "Linux VPS & AWS deployment with Nginx reverse proxying, SSL/TLS termination, PM2 process supervision, and automated reloads.",
      fullOverview:
        "Managing complete hosting lifecycles on AWS and VPS instances with automated process supervision and zero-downtime reloads.",
      specifications: [
        "Linux (Ubuntu/Debian) server configuration with strict firewall rules and SSH key hardening.",
        "Nginx reverse proxying with SSL/TLS termination, HTTP/2 optimizations, and gzip compression.",
        "PM2 process clustering for auto-restart on failure, log rotation, and zero-downtime reloads.",
        "Automated deployment workflows using Git webhooks and server automation scripts.",
      ],
      technologies: ["AWS", "Linux VPS", "Nginx", "PM2", "Git CI/CD", "Server Config"],
    },
  ]

  const handleOpenArch = (pillar: any) => {
    setSelectedArch(pillar)
    setModalOpen(true)
  }

  return (
    <section id="architecture" className="py-10 sm:py-14 bg-muted/20 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-6 sm:mb-8">
          <div>
            <div className="text-[10px] font-mono font-semibold uppercase tracking-widest text-muted-foreground mb-1 flex items-center gap-1.5">
              <span className="w-4 h-px bg-foreground/40" />
              Engineering Standards
            </div>
            <h2 className="text-lg sm:text-2xl font-extrabold text-foreground tracking-tight">
              System Architecture & Standards
            </h2>
          </div>
        </div>

        {/* 3 Compact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-6">
          {architecturalPillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.05 }}
              className="p-3.5 sm:p-5 rounded-xl bg-muted/30 border border-border/40 hover:border-border/80 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2.5">
                  <div className="p-1.5 rounded-md bg-muted border border-border/60">
                    {pillar.icon}
                  </div>
                  <span className="px-2 py-0.5 rounded-full text-[9px] font-mono font-semibold bg-muted text-foreground border border-border/50">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-foreground mb-1.5 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                  {pillar.shortDesc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-3 pt-2.5 border-t border-border/40">
                  {pillar.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-1.5 py-0.2 rounded bg-muted text-foreground/80 font-mono text-[9px] font-medium border border-border/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleOpenArch(pillar)}
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-foreground hover:text-blue-500 transition-colors w-full pt-1"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-3 h-3 text-muted-foreground hover:text-blue-500" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Architecture Detail Modal */}
      {selectedArch && (
        <DetailModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          badge={selectedArch.badge}
          title={selectedArch.title}
          subtitle={`Specifications & Architectural Standards`}
        >
          <p className="text-sm text-foreground/90 leading-relaxed mb-4">
            {selectedArch.fullOverview}
          </p>

          <div className="space-y-2.5 pt-3 border-t border-border/70">
            <h4 className="text-xs font-mono font-semibold uppercase text-muted-foreground tracking-wider mb-2">
              Detailed Specifications
            </h4>
            {selectedArch.specifications.map((spec: string, i: number) => (
              <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{spec}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-border/70 flex flex-wrap gap-1.5 mt-4">
            {selectedArch.technologies.map((tech: string) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-muted text-foreground font-mono text-xs font-medium border border-border/60"
              >
                {tech}
              </span>
            ))}
          </div>
        </DetailModal>
      )}
    </section>
  )
}
