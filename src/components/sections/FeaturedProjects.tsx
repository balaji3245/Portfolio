"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { 
  ShoppingBag, 
  Building2, 
  Globe, 
  Layers, 
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  ChevronDown
} from "lucide-react"
import { DetailModal } from "@/components/ui/detail-modal"

interface ProjectImage {
  url: string
  local: string
  caption: string
}

interface ProjectData {
  id: string
  title: string
  subtitle: string
  category: string
  featured: boolean
  images: ProjectImage[]
  shortDesc: string
  fullOverview: string
  architecture: string
  engineeringHighlights: string[]
  techStack: string[]
  github: string
  live: string
  icon: React.ReactNode
}

// Reusable Auto-Scrolling 3-Image Carousel Component
function ProjectImageSlider({ 
  images, 
  title, 
  autoPlayInterval = 3200,
  showControls = true,
  aspectClass = "aspect-video"
}: { 
  images: ProjectImage[]
  title: string
  autoPlayInterval?: number
  showControls?: boolean
  aspectClass?: string
}) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }, [images.length])

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    if (isPaused || images.length <= 1) return
    const timer = setInterval(() => {
      nextSlide()
    }, autoPlayInterval)
    return () => clearInterval(timer)
  }, [isPaused, nextSlide, autoPlayInterval, images.length])

  return (
    <div 
      className={`relative ${aspectClass} w-full overflow-hidden bg-muted/80 select-none group/slider`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Sliding Image Transition */}
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex].url}
          onError={(e: any) => {
            if (e.currentTarget.src !== images[currentIndex].local) {
              e.currentTarget.src = images[currentIndex].local
            }
          }}
          alt={`${title} - ${images[currentIndex].caption}`}
          initial={{ opacity: 0, scale: 1.04 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full object-cover object-top"
        />
      </AnimatePresence>

      {/* Dark Gradient Overlay for Readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent pointer-events-none" />

      {/* Slide Caption Badge */}
      <div className="absolute bottom-3 left-3 px-2 py-0.5 rounded-md bg-black/60 backdrop-blur-md border border-white/15 text-[10px] font-mono text-white/90 shadow-sm pointer-events-none">
        {images[currentIndex].caption}
      </div>

      {/* Left/Right Arrow Navigation Buttons */}
      {showControls && images.length > 1 && (
        <>
          <button
            onClick={(e) => {
              e.stopPropagation()
              prevSlide()
            }}
            aria-label="Previous Slide"
            className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-black/80 shadow-md"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation()
              nextSlide()
            }}
            aria-label="Next Slide"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/20 opacity-0 group-hover/slider:opacity-100 transition-opacity hover:bg-black/80 shadow-md"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* Bottom Pagination Dots */}
      {images.length > 1 && (
        <div className="absolute bottom-3 right-3 flex items-center gap-1.5 z-10">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.stopPropagation()
                setCurrentIndex(idx)
              }}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                idx === currentIndex
                  ? "w-5 bg-white shadow-sm"
                  : "w-1.5 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export function FeaturedProjects() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null)
  const [showAll, setShowAll] = useState(false)

  const projects: ProjectData[] = [
    {
      id: "bharat-cart",
      title: "Bharat Cart",
      subtitle: "Large-Scale Multi-Vendor E-Commerce Platform",
      category: "Flagship Full-Stack System",
      featured: true,
      images: [
        {
          url: "/projects/bharat-cart/1.png",
          local: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1200&auto=format&fit=crop",
          caption: "Storefront & Catalog",
        },
        {
          url: "/projects/bharat-cart/2.png",
          local: "https://images.unsplash.com/photo-1556742049-0a67e55722c6?q=80&w=1200&auto=format&fit=crop",
          caption: "Checkout & Payments",
        },
        {
          url: "/projects/bharat-cart/3.png",
          local: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
          caption: "Vendor Analytics",
        },
      ],
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
      live: "https://bhartcarts.com",
      icon: <ShoppingBag className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
    },
    {
      id: "shree-sai-creation",
      title: "Shree Sai Creation",
      subtitle: "Full-Featured Commercial E-Commerce Platform",
      category: "Commercial Client Delivery",
      featured: false,
      images: [
        {
          url: "/projects/shree-sai/1.png",
          local: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop",
          caption: "Product Showcase",
        },
        {
          url: "/projects/shree-sai/2.png",
          local: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?q=80&w=1200&auto=format&fit=crop",
          caption: "Boutique Collection",
        },
        {
          url: "/projects/shree-sai/3.png",
          local: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1200&auto=format&fit=crop",
          caption: "Cart & Order Flow",
        },
      ],
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
      live: "https://shreesaicreation.com/",
      icon: <Layers className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
    },
    {
      id: "chandigarh-consultancy",
      title: "Chandigarh Consultancy",
      subtitle: "Business & Informational Digital Platform",
      category: "Business Platform",
      featured: false,
      images: [
        {
          url: "/projects/chandigarh/1.png",
          local: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
          caption: "Corporate Portal",
        },
        {
          url: "/projects/chandigarh/2.png",
          local: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
          caption: "Consulting Services",
        },
        {
          url: "/projects/chandigarh/3.png",
          local: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200&auto=format&fit=crop",
          caption: "Advisory Team",
        },
      ],
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
      live: "https://www.chandigarhconsultancy.com/",
      icon: <Building2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
    },
    {
      id: "yj-developers-portfolio",
      title: "YJ Developers Company Platform",
      subtitle: "Corporate Agency Portfolio Platform",
      category: "Corporate Platform",
      featured: false,
      images: [
        {
          url: "/projects/yj-developers/1.png",
          local: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop",
          caption: "Agency Overview",
        },
        {
          url: "/projects/yj-developers/2.png",
          local: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop",
          caption: "Engineering Services",
        },
        {
          url: "/projects/yj-developers/3.png",
          local: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop",
          caption: "Digital Showcases",
        },
      ],
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
      live: "https://yjdeveloper.com/",
      icon: <Globe className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
    },
  ]

  const handleOpenProject = (project: ProjectData) => {
    setSelectedProject(project)
    setModalOpen(true)
  }

  const visibleProjects = showAll ? projects : projects.slice(0, 2)

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

        {/* Project Grid with 3-Image Auto-Scrolling Showcases */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {visibleProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`editorial-card rounded-2xl overflow-hidden flex flex-col justify-between group ${
                project.featured ? "border-slate-300 dark:border-slate-700" : ""
              }`}
            >
              <div>
                {/* 3-Image Auto-Scrolling Slider */}
                <div className="relative border-b border-border/70">
                  <ProjectImageSlider
                    images={project.images}
                    title={project.title}
                    autoPlayInterval={3400 + idx * 300}
                  />

                  {/* Top Floating Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 z-10 pointer-events-none">
                    <span className="px-2.5 py-1 rounded-full bg-background/90 dark:bg-black/80 backdrop-blur-md border border-border/80 text-[10px] font-mono font-semibold text-foreground shadow-sm flex items-center gap-1.5">
                      {project.icon}
                      <span>{project.category}</span>
                    </span>
                  </div>

                  {/* Top Right Flagship Badge */}
                  <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10 pointer-events-none">
                    {project.featured && (
                      <span className="px-2.5 py-1 rounded-full bg-blue-600/90 backdrop-blur-md text-white text-[10px] font-mono font-semibold shadow-sm">
                        Flagship
                      </span>
                    )}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-lg sm:text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>

                  <div className="text-xs font-mono text-muted-foreground mb-3">
                    &gt; {project.subtitle}
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                    {project.shortDesc}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 sm:px-6 sm:pb-6">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1 mb-4 pt-3 border-t border-border/60">
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

                {/* Action Buttons */}
                <div className="flex items-center justify-between pt-3 border-t border-border/60">
                  <button
                    onClick={() => handleOpenProject(project)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-foreground text-background text-xs font-semibold hover:opacity-90 transition-opacity shadow-sm"
                  >
                    <span>Know More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Live Demo"
                    className="inline-flex items-center gap-1 px-3.5 py-1.5 rounded-lg border border-border bg-muted/40 hover:bg-muted text-foreground text-xs font-semibold transition-colors"
                  >
                    <span>Live Site</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground" />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More / Show Less Toggle Button */}
        {projects.length > 2 && (
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-muted/70 hover:bg-muted border border-border text-foreground font-semibold text-xs sm:text-sm transition-all shadow-sm group hover:scale-[1.02]"
            >
              <span>{showAll ? "Show Less Projects" : `View More Projects (+${projects.length - 2})`}</span>
              <ChevronDown className={`w-4 h-4 text-muted-foreground group-hover:text-foreground transition-transform duration-300 ${showAll ? "rotate-180" : ""}`} />
            </button>
          </div>
        )}

      </div>

      {/* Case Study Detail Modal with Full 3-Image Slider */}
      {selectedProject && (
        <DetailModal
          open={modalOpen}
          onOpenChange={setModalOpen}
          badge={selectedProject.category}
          title={selectedProject.title}
          subtitle={selectedProject.subtitle}
          footer={
            <div className="flex items-center justify-end w-full">
              <a
                href={selectedProject.live}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl bg-foreground text-background text-xs font-semibold hover:opacity-90 transition-opacity w-full sm:w-auto shadow-sm"
              >
                <span>Visit Live Platform</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          }
        >
          {/* Modal Auto-Scrolling Carousel Banner */}
          <div className="rounded-xl overflow-hidden border border-border/70 mb-4 shadow-sm">
            <ProjectImageSlider
              images={selectedProject.images}
              title={selectedProject.title}
              autoPlayInterval={3600}
              aspectClass="aspect-[16/9]"
            />
          </div>

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
