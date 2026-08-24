"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Code2, Database, ShieldCheck, CloudCog, ArrowRight, CheckCircle2, Users } from "lucide-react"
import { DetailModal } from "@/components/ui/detail-modal"

export function ProfessionalSummary() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedPillar, setSelectedPillar] = useState<any>(null)

  const pillars = [
    {
      id: "full-stack",
      icon: <Code2 className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
      title: "Full-Stack Web Architecture",
      shortDesc: "Architecting modular web applications with Next.js, React, TypeScript, Node.js, and NestJS.",
      fullDesc:
        "Specializing in modern full-stack application development from user interface implementation to server-side APIs. Focusing on Next.js Server Components, clean separation of concerns, robust TypeScript typing, and performant state management.",
      details: [
        "Component architecture designed for reusability, accessibility, and high performance.",
        "SSR, SSG, and ISR rendering strategies with Next.js App Router.",
        "Modular REST API controllers with structured request validation and error handling.",
        "Client and server-side state synchronization with clean data fetching patterns.",
      ],
      tags: ["Next.js", "React", "TypeScript", "Node.js", "NestJS"],
    },
    {
      id: "database",
      icon: <Database className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
      title: "Database Design & Data Modeling",
      shortDesc: "Designing normalized schemas and ORM models with PostgreSQL, MongoDB, and Prisma.",
      fullDesc:
        "Engineering data persistence layers with relational integrity and concurrency safety. Experienced in building complex multi-attribute e-commerce variant matrices, index optimization, and transactional isolation.",
      details: [
        "PostgreSQL schema normalization and relational foreign key cascading rules.",
        "Prisma ORM data modeling with deterministic variant-combination uniqueness protection.",
        "MongoDB document collections for flexible, unstructured metadata.",
        "Supabase Storage bucket architecture and secure access policies for media assets.",
      ],
      tags: ["PostgreSQL", "Prisma ORM", "MongoDB", "Supabase"],
    },
    {
      id: "security",
      icon: <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
      title: "Production Security & Auth",
      shortDesc: "Engineering authentication with JWT in HttpOnly cookies, RBAC, Bcrypt, and account protection.",
      fullDesc:
        "Building defense-in-depth security architectures to protect user data and access boundaries across client and server environments.",
      details: [
        "JWT tokens stored exclusively in HttpOnly, Secure, SameSite cookies to mitigate XSS risks.",
        "Adaptive Bcrypt password hashing for cryptographic credential storage.",
        "Role-Based Access Control (RBAC) middleware for fine-grained route authorization.",
        "Account lockout protection and rate limiting to prevent brute-force attacks.",
      ],
      tags: ["JWT", "HttpOnly Cookies", "RBAC", "Bcrypt"],
    },
    {
      id: "cloud-devops",
      icon: <CloudCog className="w-5 h-5 text-amber-600 dark:text-amber-400" />,
      title: "Cloud & DevOps Infrastructure",
      shortDesc: "Managing AWS and VPS environments with Linux, Nginx reverse proxying, and PM2.",
      fullDesc:
        "Handling the full software lifecycle through production hosting on cloud and virtual private servers with automated process supervision and zero-downtime reloads.",
      details: [
        "Linux (Ubuntu/Debian) server configuration, security hardening, and SSH key management.",
        "Nginx reverse proxying with SSL/TLS termination, HTTP/2, and gzip compression.",
        "PM2 process clustering for auto-restart on failure, log rotation, and zero-downtime updates.",
        "Deployment automation workflows using Git and shell deployment scripts.",
      ],
      tags: ["AWS", "VPS", "Linux", "Nginx", "PM2"],
    },
  ]

  const handleOpenPillar = (pillar: any) => {
    setSelectedPillar(pillar)
    setModalOpen(true)
  }

  return (
    <section id="about" className="py-16 sm:py-20 bg-background border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
              <span className="w-5 h-px bg-foreground/40" />
              Engineering Profile
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Core Engineering Disciplines
            </h2>
          </div>

          
        </div>

        {/* 4 Compact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              className="editorial-card rounded-2xl p-5 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="p-2.5 rounded-xl bg-muted border border-border">
                    {pillar.icon}
                  </div>
                  <span className="font-mono text-[11px] text-muted-foreground font-semibold">
                    0{idx + 1}
                  </span>
                </div>

                <h3 className="text-base font-bold text-foreground mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {pillar.shortDesc}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1 mb-4 pt-3 border-t border-border/60">
                  {pillar.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded bg-muted text-foreground/80 font-mono text-[10px] font-medium border border-border/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button
                  onClick={() => handleOpenPillar(pillar)}
                  className="inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors w-full pt-1"
                >
                  <span>Know More</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedPillar && (
        <DetailModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          badge="Engineering Discipline"
          title={selectedPillar.title}
          subtitle={`Core Focus: ${selectedPillar.tags.join(" • ")}`}
        >
          <p className="text-sm text-foreground/90 leading-relaxed mb-4">
            {selectedPillar.fullDesc}
          </p>

          <div className="space-y-2.5 pt-3 border-t border-border/70">
            <h4 className="text-xs font-mono font-semibold uppercase text-muted-foreground tracking-wider mb-2">
              Key Technical Practices
            </h4>
            {selectedPillar.details.map((detail: string, i: number) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{detail}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-border/70 flex flex-wrap gap-1.5 mt-4">
            {selectedPillar.tags.map((tag: string) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md bg-muted text-foreground font-mono text-xs font-medium border border-border/60"
              >
                {tag}
              </span>
            ))}
          </div>
        </DetailModal>
      )}
    </section>
  )
}
