"use client"

import { motion } from "framer-motion"
import { Code2, Database, Shield, Zap } from "lucide-react"

export function ProfessionalSummary() {
  const focuses = [
    {
      icon: <Code2 className="w-6 h-6 text-primary" />,
      title: "API Development",
      desc: "Building robust RESTful & GraphQL APIs with Python (FastAPI, Django). Focusing on clean architecture, versioning, and comprehensive documentation."
    },
    {
      icon: <Database className="w-6 h-6 text-blue-500" />,
      title: "Database Engineering",
      desc: "Designing normalized schemas, optimizing complex queries, and managing migrations across PostgreSQL, MySQL, and Redis."
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-500" />,
      title: "Security & Auth",
      desc: "Implementing secure authentication flows (JWT, OAuth2), Role-Based Access Control (RBAC), and securing endpoints against common vulnerabilities."
    },
    {
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      title: "Performance",
      desc: "Optimizing response times using caching strategies, asynchronous processing (Celery), and efficient database indexing."
    }
  ]

  return (
    <section id="about" className="pt-16 pb-12 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Summary</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-8" />
          <div className="prose prose-lg dark:prose-invert max-w-3xl text-muted-foreground leading-relaxed">
            <p className="line-clamp-3 md:line-clamp-none">
              I am a Python Backend Engineer dedicated to building scalable systems and robust infrastructure. With expertise in architecting high-performance APIs, optimizing complex databases, and establishing CI/CD pipelines, I focus on writing clean, maintainable code that businesses can rely on.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {focuses.map((focus, i) => (
            <motion.div 
              key={focus.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="p-4 sm:p-6 rounded-2xl bg-muted/50 border border-border hover:border-primary/50 hover:bg-muted transition-colors group"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-background rounded-xl border border-border flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                {focus.icon}
              </div>
              <h3 className="text-sm sm:text-xl font-bold mb-2 sm:mb-3 leading-tight">{focus.title}</h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed line-clamp-3 md:line-clamp-none">
                {focus.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
