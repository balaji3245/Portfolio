"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Quote, BookOpen, ArrowRight, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function TestimonialsBlog() {
  const [showAll, setShowAll] = useState(false)

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
    },
    {
      text: "His expertise in CI/CD and containerization helped us reduce our deployment times from hours to minutes. A true DevOps professional.",
      author: "Alex Morgan",
      role: "VP of Engineering"
    },
    {
      text: "Balaji has a rare ability to understand complex business logic and translate it into scalable backend architecture. Highly recommended.",
      author: "Priya Sharma",
      role: "Product Manager"
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

            <div className="space-y-4 sm:space-y-6">
              {(showAll ? testimonials : testimonials.slice(0, 2)).map((t, idx) => (
                <div key={idx} className="bg-muted/30 border border-border rounded-2xl p-5 sm:p-8 relative">
                  <Quote className="w-8 h-8 sm:w-12 sm:h-12 text-muted/50 absolute top-4 right-4 sm:top-6 sm:right-6" />
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed relative z-10 mb-4 sm:mb-6 italic pr-6 sm:pr-10">
                    "{t.text}"
                  </p>
                  <div className="flex items-center gap-3 sm:gap-4 border-t border-border pt-3 sm:pt-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm sm:text-base">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-xs sm:text-sm">{t.author}</h4>
                      <p className="text-[10px] sm:text-xs text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {testimonials.length > 2 && (
              <div className="mt-6 flex justify-center lg:justify-start">
                <Button 
                  variant="outline" 
                  onClick={() => setShowAll(!showAll)}
                  className="group h-7 px-3 text-xs rounded-full"
                >
                  {showAll ? (
                    <>View Less <ChevronUp className="w-4 h-4 ml-2 group-hover:-translate-y-1 transition-transform" /></>
                  ) : (
                    <>View More <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" /></>
                  )}
                </Button>
              </div>
            )}
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

            <div className="space-y-3 sm:space-y-4">
              {articles.map((article, idx) => (
                <a key={idx} href="#" className="block p-4 sm:p-6 rounded-2xl border border-border bg-background hover:bg-muted/50 hover:border-primary/50 transition-all group">
                  <div className="flex justify-between items-start mb-2 sm:mb-3">
                    <h3 className="font-bold text-base sm:text-lg group-hover:text-primary transition-colors pr-4 sm:pr-8 leading-tight">
                      {article.title}
                    </h3>
                    <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
                  </div>
                  <div className="flex flex-wrap items-center gap-2 sm:gap-4 text-[10px] sm:text-xs text-muted-foreground font-mono">
                    <span>{article.date}</span>
                    <span className="w-1 h-1 rounded-full bg-muted-foreground/50" />
                    <span>{article.readTime}</span>
                  </div>
                  <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                    {article.tags.map(tag => (
                      <span key={tag} className="px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] uppercase tracking-wider font-semibold rounded-md bg-muted text-muted-foreground">
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
