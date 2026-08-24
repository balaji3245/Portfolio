"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Briefcase, Calendar, MapPin, CheckCircle2, ArrowRight, Award, ArrowUpRight } from "lucide-react"
import { DetailModal } from "@/components/ui/detail-modal"

export function ExperienceTimeline() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedExp, setSelectedExp] = useState<any>(null)

  const experiences = [
    {
      id: "yj-lead",
      role: "Full-Stack Developer & Team Leader",
      company: "YJ Developers Pvt. Ltd.",
      type: "Full-Time",
      period: "8 July 2026 – Present",
      location: "Maharashtra, India",
      shortSummary:
        "Leading end-to-end software architecture, technical decision-making, team guidance, and cloud infrastructure for e-commerce, SaaS, and client platforms.",
      fullSummary:
        "Responsible for overall software architecture, full-stack application development, database design, and production hosting. Mentoring developers, conducting technical reviews, and translating complex business requirements into robust production systems.",
      highlights: [
        "Design and implement end-to-end software architecture for e-commerce, SaaS, business, and portfolio applications.",
        "Lead technical development and guide team members on architecture, debugging, code quality, and engineering practices.",
        "Develop scalable applications using React, Next.js, TypeScript, Node.js, and NestJS.",
        "Design database architectures and data models using PostgreSQL, MongoDB, and Prisma.",
        "Manage AWS and VPS infrastructure, Linux server configuration, Nginx reverse proxying, and PM2 process management.",
        "Translate business and client requirements into technical architecture and implementation plans.",
        "Mentor and guide developers during project development and technical execution.",
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "NestJS",
        "PostgreSQL",
        "Prisma",
        "MongoDB",
        "AWS",
        "VPS",
        "Linux",
        "Nginx",
        "PM2",
      ],
    },
    {
      id: "yj-intern",
      role: "Frontend Developer Intern",
      company: "YJ Developers Pvt. Ltd.",
      type: "Internship (6 Months)",
      period: "7 February 2026 – 7 July 2026",
      location: "Maharashtra, India",
      shortSummary:
        "Completed a 6-month professional internship delivering responsive web applications, component libraries, and API integrations with Next.js & React.",
      fullSummary:
        "Focused on frontend development, UI/UX implementation, cross-device responsiveness, component optimization, and API integration across client and internal web applications.",
      highlights: [
        "Developed production-grade interfaces using React, Next.js, JavaScript, TypeScript, and Tailwind CSS.",
        "Engineered responsive components with strong cross-device fidelity across mobile, tablet, and desktop viewports.",
        "Integrated RESTful APIs, managed client state, and optimized web application performance.",
        "Contributed to client and company projects within agile team workflows and version control practices.",
      ],
      technologies: [
        "React.js",
        "Next.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
        "HTML5 / CSS3",
        "REST APIs",
        "Git",
      ],
      credentialUrl: "/yj-internship-certificate.pdf",
    },
  ]

  const handleOpenExp = (exp: any) => {
    setSelectedExp(exp)
    setModalOpen(true)
  }

  return (
    <section id="experience" className="py-16 sm:py-20 bg-muted/20 border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
              <span className="w-5 h-px bg-foreground/40" />
              Career History
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Work Experience & Leadership
            </h2>
          </div>
        </div>

        {/* 2 Streamlined Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="editorial-card rounded-2xl p-6 flex flex-col justify-between"
            >
              <div>
                {/* Meta Top */}
                <div className="flex items-start justify-between gap-2 mb-3">
                  <div>
                    <span className="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-muted text-foreground mb-1.5 border border-border/60">
                      {exp.type}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
                      {exp.role}
                    </h3>
                    <div className="text-xs sm:text-sm font-semibold text-muted-foreground mt-0.5">
                      {exp.company}
                    </div>
                  </div>

                  <div className="text-[11px] font-mono text-muted-foreground bg-muted/60 px-2.5 py-1 rounded-md border border-border/50 whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                  {exp.shortSummary}
                </p>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1 mb-4 pt-3 border-t border-border/60">
                  {exp.technologies.slice(0, 5).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-muted text-foreground/80 font-mono text-[10px] font-medium border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {exp.technologies.length > 5 && (
                    <span className="px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-mono text-[10px]">
                      +{exp.technologies.length - 5}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-2 border-t border-border/60">
                  <button
                    onClick={() => handleOpenExp(exp)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-foreground hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span>Know More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  {exp.credentialUrl && (
                    <a
                      href={exp.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <Award className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Certificate</span>
                      <ArrowUpRight className="w-3 h-3" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedExp && (
        <DetailModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          badge={selectedExp.type}
          title={selectedExp.role}
          subtitle={`${selectedExp.company} • ${selectedExp.period}`}
          footer={
            selectedExp.credentialUrl ? (
              <a
                href={selectedExp.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-foreground text-background text-xs font-semibold"
              >
                <Award className="w-3.5 h-3.5" />
                <span>View Certificate</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ) : undefined
          }
        >
          <p className="text-sm text-foreground/90 leading-relaxed mb-4 font-medium">
            {selectedExp.fullSummary}
          </p>

          <div className="space-y-2.5 pt-3 border-t border-border/70">
            <h4 className="text-xs font-mono font-semibold uppercase text-muted-foreground tracking-wider mb-2">
              Key Responsibilities & Contributions
            </h4>
            {selectedExp.highlights.map((item: string, i: number) => (
              <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-border/70 mt-4">
            <h4 className="text-xs font-mono font-semibold uppercase text-muted-foreground tracking-wider mb-2">
              Technologies Used
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {selectedExp.technologies.map((tech: string) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md bg-muted text-foreground font-mono text-xs font-medium border border-border/60"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </DetailModal>
      )}
    </section>
  )
}
