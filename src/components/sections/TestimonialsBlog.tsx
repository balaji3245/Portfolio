"use client"

import { motion } from "framer-motion"
import { Quote, BookOpen, ArrowRight } from "lucide-react"

export function TestimonialsBlog() {
  const testimonials = [
    {
      text: "Balaji completely overhauled our legacy database schema, reducing our average query time by over 60%. His understanding of Postgres optimization is exceptional.",
      author: "Sarah Jenkins",
      role: "CTO, DataFlow Inc."
    },
    {
      text: "Consistently delivers clean, well-documented, and thoroughly tested APIs. One of the most reliable backend engineers I've worked with.",
      author: "Michael Chen",
      role: "Lead Engineer"
    }
  ]

  const articles = [
    {
      title: "Optimizing PostgreSQL Queries in Django",
      date: "May 12, 2024",
      readTime: "8 min read",
      tags: ["PostgreSQL", "Django", "Performance"]
    },
    {
      title: "Building Idempotent APIs with FastAPI",
      date: "April 03, 2024",
      readTime: "6 min read",
      tags: ["FastAPI", "API Design"]
    },
    {
      title: "Decoupling Microservices with Celery & Redis",
      date: "Feb 28, 2024",
      readTime: "10 min read",
      tags: ["Celery", "Redis", "Architecture"]
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Testimonials */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <Quote className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold">Recommendations</h2>
            </div>

            <div className="space-y-6">
              {testimonials.map((t, idx) => (
                <div key={idx} className="bg-muted/30 border border-border rounded-2xl p-8 relative">
                  <Quote className="w-12 h-12 text-muted/50 absolute top-6 right-6" />
                  <p className="text-muted-foreground leading-relaxed relative z-10 mb-6 italic">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-4 border-t border-border pt-4">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-sm">{t.author}</h4>
                      <p className="text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Technical Blog */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 mb-8">
              <BookOpen className="w-8 h-8 text-blue-500" />
              <h2 className="text-3xl font-bold">Technical Writing</h2>
            </div>

            <div className="space-y-4">
              {articles.map((article, idx) => (
                <a key={idx} href="#" className="block p-6 rounded-2xl border border-border bg-background hover:bg-muted/50 hover:border-primary/50 transition-all group">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-bold text-lg group-hover:text-primary transition-colors pr-8">
                      {article.title}
                    </h3>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-xs text-muted-foreground font-mono">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {article.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 text-[10px] uppercase tracking-wider font-semibold rounded-md bg-muted text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>
                </a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
