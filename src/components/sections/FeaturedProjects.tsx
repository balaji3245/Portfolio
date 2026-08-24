"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { 
  ExternalLink, 
  ShoppingBag, 
  Building2, 
  Globe, 
  Layers, 
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  Lock,
  Database
} from "lucide-react"
import { FaGithub as Github } from "react-icons/fa"
import { DetailModal } from "@/components/ui/detail-modal"

export function FeaturedProjects() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)

  const projects = [
    {
      id: "bharat-cart",
      title: "Bharat Cart",
      subtitle: "Large-Scale Multi-Vendor E-Commerce Platform",
      category: "Flagship Full-Stack System",
      featured: true,
      shortDesc:
        "Engineered the full architecture for a large-scale e-commerce platform with PostgreSQL/Prisma variant modeling, Supabase storage, and JWT/RBAC security.",
      fullOverview:
        "Designed the complete architecture from scratch for a large-scale, Meesho-style e-commerce platform and independently engineered its core services, database schemas, authentication, variant systems, and media storage pipelines.",
      architecture:
        "Built with Next.js and Node.js utilizing a PostgreSQL database managed via Prisma ORM. Engineered deterministic variant-combination uniqueness models to prevent concurrency collisions during catalog scaling. Integrated Supabase for structured media storage and secured the API with HttpOnly JWTs and RBAC.",
      engineeringHighlights: [
        "Architected end-to-end system: product catalog, multi-attribute variants, inventory tracking, orders, and payment flow integration.",
        "Implemented production security architecture: JWT in HttpOnly cookies, Bcrypt password hashing, RBAC permissions, and brute-force account lockout protection.",
        "Engineered deterministic variant-combination uniqueness protection in PostgreSQL/Prisma data models.",
        "Integrated structured Supabase Storage for secure media assets and designed for high concurrency safety.",
        "Managed complete deployment lifecycle on Linux VPS with Nginx reverse proxying and process supervision.",
      ],
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "PostgreSQL",
        "Prisma ORM",
        "Supabase",
        "JWT & Bcrypt",
        "Linux / VPS",
      ],
      github: "https://github.com/balaji3245",
      live: "https://chaughulebalaji.tech",
      icon: <ShoppingBag className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
    },
    {
      id: "shree-sai-creation",
      title: "Shree Sai Creation",
      subtitle: "Full-Featured Commercial E-Commerce Platform",
      category: "Commercial Client Delivery",
      featured: false,
      shortDesc:
        "Commercial e-commerce platform delivering seamless customer journeys from product discovery and cart operations through checkout and wishlist.",
      fullOverview:
        "Designed and engineered an end-to-end commercial e-commerce platform delivering a seamless shopping experience from catalog exploration to cart management and checkout.",
      architecture:
        "Engineered with Next.js, React, and Node.js on a modular component architecture. Structured the platform with client-side state optimization and backend API integration, deployed directly on a production Linux VPS.",
      engineeringHighlights: [
        "Designed comprehensive user journeys: product discovery, interactive product details, cart operations, checkout, and wishlist management.",
        "Built responsive interfaces optimized for smooth mobile, tablet, and desktop customer browsing.",
        "Structured application for future multi-category scalability and managed complete VPS deployment.",
        "Integrated interactive gallery, customer contact forms, and dynamic FAQ systems.",
      ],
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Node.js",
        "Tailwind CSS",
        "VPS / Linux",
      ],
      github: "https://github.com/balaji3245",
      live: "https://chaughulebalaji.tech",
      icon: <Layers className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      id: "chandigarh-consultancy",
      title: "Chandigarh Consultancy",
      subtitle: "Business & Informational Digital Platform",
      category: "Business Platform",
      featured: false,
      shortDesc:
        "High-performance business platform with responsive component architecture, optimized page speeds, and technical SEO structure.",
      fullOverview:
        "Engineered the platform architecture, UI/UX, and high-performance frontend experience from the ground up for a professional consulting organization.",
      architecture:
        "Developed with Next.js and TypeScript utilizing semantic HTML5 and tailored Tailwind CSS for fast page loads and strong search engine indexing (SEO).",
      engineeringHighlights: [
        "Designed and implemented high-performance responsive interface across mobile, tablet, and desktop viewports.",
        "Implemented structured component architecture and comprehensive technical SEO metadata.",
        "Delivered the initial platform end-to-end before systematically transitioning admin panel modules to team members.",
      ],
      techStack: [
        "Next.js",
        "React",
        "TypeScript",
        "Tailwind CSS",
        "Technical SEO",
        "VPS",
      ],
      github: "https://github.com/balaji3245",
      live: "https://chaughulebalaji.tech",
      icon: <Building2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      id: "yj-developers-portfolio",
      title: "YJ Developers Company Platform",
      subtitle: "Corporate Agency Portfolio Platform",
      category: "Corporate Platform",
      featured: false,
      shortDesc:
        "Official company portfolio platform highlighting agency engineering capabilities, services, client showcases, and lead workflows.",
      fullOverview:
        "Designed and developed the official company portfolio platform for YJ Developers Pvt. Ltd. from initial wireframing through production deployment.",
      architecture:
        "Modern component-driven web application highlighting company engineering capabilities, services, client case studies, and corporate contact pipelines.",
      engineeringHighlights: [
        "Owned UI/UX design, frontend implementation, responsive behavior, and application structure.",
        "Configured production hosting, Nginx reverse proxying, and continuous delivery.",
        "Engineered modular project showcases and interactive lead capture workflows.",
      ],
      techStack: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Node.js",
        "PM2 / Linux",
      ],
      github: "https://github.com/balaji3245",
      live: "https://chaughulebalaji.tech",
      icon: <Globe className="w-5 h-5 text-purple-600 dark:text-purple-400" />,
    },
  ]

  const handleOpenProject = (project: any) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  return (
    <section id="projects" className="py-16 sm:py-20 bg-background border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="text-xs font-mono font-semibold uppercase tracking-widest text-muted-foreground mb-2 flex items-center gap-2">
              <span className="w-6 h-px bg-foreground/40" />
              Selected Work
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
              Featured Case Studies
            </h2>
          </div>

          
        </div>

        {/* 2x2 Clean Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`editorial-card rounded-2xl p-6 sm:p-7 flex flex-col justify-between ${
                project.featured ? "border-slate-300 dark:border-slate-700" : ""
              }`}
            >
              <div>
                {/* Meta Top */}
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-xl bg-muted border border-border">
                      {project.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono font-semibold uppercase text-muted-foreground tracking-wider">
                        {project.category}
                      </span>
                      <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>

                  {project.featured && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-mono font-semibold bg-blue-50 text-blue-700 dark:bg-blue-950/50 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      Flagship
                    </span>
                  )}
                </div>

                <div className="text-xs font-mono text-muted-foreground mb-3">
                  &gt; {project.subtitle}
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-5">
                  {project.shortDesc}
                </p>
              </div>

              <div>
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1 mb-5 pt-3 border-t border-border/60">
                  {project.techStack.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded bg-muted text-foreground/80 font-mono text-[10px] font-medium border border-border/50"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.techStack.length > 4 && (
                    <span className="px-1.5 py-0.5 rounded bg-muted text-muted-foreground font-mono text-[10px]">
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-2 border-t border-border/60">
                  <button
                    onClick={() => handleOpenProject(project)}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-foreground text-background text-xs font-semibold hover:opacity-90 transition-opacity"
                  >
                    <span>Know More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <div className="flex items-center gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="GitHub Code"
                      className="p-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Live Demo"
                      className="p-1.5 rounded-lg border border-border text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Case Study Detail Modal */}
      {selectedProject && (
        <DetailModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          badge={selectedProject.category}
          title={selectedProject.title}
          subtitle={selectedProject.subtitle}
          footer={
            <div className="flex items-center justify-between w-full">
              <a
                href={selectedProject.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-muted-foreground hover:text-foreground"
              >
                <Github className="w-4 h-4" />
                <span>View Source Code</span>
              </a>

              <a
                href={selectedProject.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-foreground text-background text-xs font-semibold hover:opacity-90 transition-opacity"
              >
                <span>Live Project Overview</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          }
        >
          {/* Overview */}
          <div>
            <h4 className="text-xs font-mono font-semibold uppercase text-muted-foreground tracking-wider mb-1.5">
              Project Overview
            </h4>
            <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
              {selectedProject.fullOverview}
            </p>
          </div>

          {/* Architecture */}
          <div className="pt-3 border-t border-border/70">
            <h4 className="text-xs font-mono font-semibold uppercase text-muted-foreground tracking-wider mb-1.5">
              Architectural Approach
            </h4>
            <p className="text-xs sm:text-sm text-foreground/90 leading-relaxed">
              {selectedProject.architecture}
            </p>
          </div>

          {/* Key Implementations */}
          <div className="pt-3 border-t border-border/70 space-y-2">
            <h4 className="text-xs font-mono font-semibold uppercase text-muted-foreground tracking-wider mb-2">
              Key Engineering Implementations
            </h4>
            {selectedProject.engineeringHighlights.map((item: string, i: number) => (
              <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          {/* Full Tech Stack */}
          <div className="pt-3 border-t border-border/70">
            <h4 className="text-xs font-mono font-semibold uppercase text-muted-foreground tracking-wider mb-2">
              Full Technology Stack
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {selectedProject.techStack.map((tech: string) => (
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
