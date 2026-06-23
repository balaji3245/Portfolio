"use client"

import { motion } from "framer-motion"
import { ExternalLink, Database, Network, Lock, Zap } from "lucide-react"
import { FaGithub as Github } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function FeaturedProjects() {
  const projects = [
    {
      title: "E-Commerce Backend API",
      description: "A robust, scalable backend for a modern e-commerce platform handling catalog management, cart operations, secure checkout, and order processing.",
      problem: "Needed a reliable system to handle concurrent checkout requests and complex product variations without data anomalies.",
      architecture: "Microservices pattern using FastAPI for core services, PostgreSQL for relational data, and Redis for cart session management and caching.",
      techStack: ["FastAPI", "PostgreSQL", "Redis", "Celery", "Stripe API"],
      achievements: [
        "Implemented idempotency keys for payment processing",
        "Reduced catalog query time by 60% using Redis caching",
        "Achieved 99.9% uptime across all endpoints"
      ],
      github: "#",
      live: "#",
      icon: <Database className="w-6 h-6 text-primary" />
    },
    {
      title: "Centralized Authentication Service",
      description: "A standalone OAuth2/OIDC compliant authentication service providing Single Sign-On (SSO) capabilities across multiple internal applications.",
      problem: "Managing authentication logic redundantly across 5 different services led to security inconsistencies and maintenance overhead.",
      architecture: "Built with Django and Django REST Framework, utilizing JWT for stateless session management and PostgreSQL for user data storage.",
      techStack: ["Django", "DRF", "JWT", "OAuth2", "Docker"],
      achievements: [
        "Unified login across all company domains",
        "Implemented Role-Based Access Control (RBAC)",
        "Added rate limiting to prevent brute-force attacks"
      ],
      github: "#",
      live: "#",
      icon: <Lock className="w-6 h-6 text-blue-500" />
    },
    {
      title: "Real-time Task Management System",
      description: "A collaborative project management tool featuring real-time updates, task assignments, and WebSocket-based notifications.",
      problem: "REST polling was causing massive server load and noticeable delays in task status updates between users.",
      architecture: "Event-driven architecture using FastAPI WebSockets, Redis Pub/Sub for message broadcasting, and PostgreSQL for persistent storage.",
      techStack: ["FastAPI", "WebSockets", "Redis Pub/Sub", "SQLAlchemy"],
      achievements: [
        "Supported 5,000+ concurrent WebSocket connections",
        "Reduced server load by 80% compared to previous polling method",
        "Implemented offline-sync capabilities"
      ],
      github: "#",
      live: "#",
      icon: <Network className="w-6 h-6 text-emerald-500" />
    },
    {
      title: "High-Performance URL Shortener",
      description: "A URL shortening service capable of handling high-volume traffic redirects and tracking granular click analytics.",
      problem: "Generating unique, collision-free short codes at scale while maintaining sub-50ms redirect latency.",
      architecture: "Base62 encoding combined with a distributed counter. Caching layer handles 95% of redirect reads before hitting the database.",
      techStack: ["Go/Python", "Redis", "MongoDB", "Nginx"],
      achievements: [
        "Handled 10,000+ redirects per second during load testing",
        "Implemented geo-location tracking for analytics",
        "Created background workers for asynchronous analytics processing"
      ],
      github: "#",
      live: "#",
      icon: <Zap className="w-6 h-6 text-yellow-500" />
    },
    {
      title: "Headless Blog CMS API",
      description: "A comprehensive Content Management System API supporting rich text, media uploads, scheduled publishing, and revision history.",
      problem: "Content writers needed a system that safely handled concurrent edits and provided granular revision tracking without data corruption.",
      architecture: "Django backend utilizing PostgreSQL JSONB fields for flexible metadata and AWS S3 for media storage via presigned URLs.",
      techStack: ["Django", "PostgreSQL", "AWS S3", "Celery"],
      achievements: [
        "Implemented a robust revision control system",
        "Optimized image processing using background tasks",
        "Built comprehensive API documentation using Swagger UI"
      ],
      github: "#",
      live: "#",
      icon: <Database className="w-6 h-6 text-purple-500" />
    },
    {
      title: "AI Resume Analyzer Pipeline",
      description: "An asynchronous processing pipeline that extracts entities, skills, and experience metrics from uploaded PDF resumes using NLP.",
      problem: "Processing PDFs and running ML models synchronously caused API timeouts and a poor user experience.",
      architecture: "API Gateway pattern routing requests to an async worker pool managed by Celery/RabbitMQ, with results pushed back via WebHooks.",
      techStack: ["FastAPI", "Celery", "RabbitMQ", "spaCy", "MongoDB"],
      achievements: [
        "Decoupled heavy ML processing from the main API thread",
        "Implemented a retry mechanism for failed processing jobs",
        "Achieved 95% accuracy in skill extraction"
      ],
      github: "#",
      live: "#",
      icon: <Network className="w-6 h-6 text-rose-500" />
    }
  ]

  return (
    <section id="projects" className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Backend Projects</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            A selection of production-grade systems I've architected and built. Focus on scalability, security, and clean architecture.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="group bg-background rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-all hover:-translate-y-1 hover:border-primary/30 flex flex-col"
            >
              <div className="p-8 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-xl bg-muted/50 border border-border flex items-center justify-center">
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    <a href={project.github} className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted">
                      <Github className="w-5 h-5" />
                    </a>
                    <a href={project.live} className="text-muted-foreground hover:text-foreground transition-colors p-2 rounded-full hover:bg-muted">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{project.title}</h3>
                <p className="text-muted-foreground mb-6 line-clamp-2">{project.description}</p>

                <div className="space-y-4 mb-6 flex-1">
                  <div>
                    <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1 font-mono">The Problem</h4>
                    <p className="text-sm text-muted-foreground">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-1 font-mono">Architecture</h4>
                    <p className="text-sm text-muted-foreground">{project.architecture}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-xs font-semibold text-foreground uppercase tracking-wider mb-2 font-mono">Key Achievements</h4>
                  <ul className="space-y-1">
                    {project.achievements.map((ach, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1 text-[10px]">▶</span>
                        {ach}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-border">
                  {project.techStack.map(tech => (
                    <Badge key={tech} variant="secondary" className="font-mono text-[10px]">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
