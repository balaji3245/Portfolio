"use client"

import { motion } from "framer-motion"
import { Briefcase, GitPullRequest, Laptop, GraduationCap } from "lucide-react"

export function ExperienceTimeline() {
  const experiences = [
    {
      id: 1,
      role: "Backend Engineer Intern",
      company: "TechFlow Systems",
      period: "Jan 2025 - Present",
      icon: <Briefcase className="w-5 h-5 text-primary" />,
      description: "Working on the core microservices architecture. Migrated a legacy monolithic authentication service to a decentralized JWT-based auth flow using FastAPI and Redis, improving authentication latency by 40%.",
      tags: ["FastAPI", "Redis", "Microservices", "Docker"]
    },
    {
      id: 2,
      role: "Freelance Backend Developer",
      company: "Various Clients",
      period: "Jun 2024 - Dec 2024",
      icon: <Laptop className="w-5 h-5 text-blue-500" />,
      description: "Designed and developed RESTful APIs for mobile applications and SaaS dashboards. Handled database design, implemented payment gateways (Stripe), and deployed containerized apps on AWS ECS.",
      tags: ["Django", "PostgreSQL", "AWS ECS", "Stripe API"]
    },
    {
      id: 3,
      role: "Open Source Contributor",
      company: "Python Community",
      period: "Jan 2024 - May 2024",
      icon: <GitPullRequest className="w-5 h-5 text-emerald-500" />,
      description: "Contributed to multiple open-source Python packages. Resolved bugs related to async database connection pooling and improved test coverage by writing comprehensive PyTest suites.",
      tags: ["Python", "PyTest", "AsyncIO", "GitHub"]
    },
    {
      id: 4,
      role: "Computer Science Student",
      company: "University of Technology",
      period: "2021 - 2025",
      icon: <GraduationCap className="w-5 h-5 text-yellow-500" />,
      description: "Focused on Data Structures, Algorithms, Database Management Systems, and Computer Networks. Built foundational projects in Python and C++.",
      tags: ["Algorithms", "DBMS", "Networking", "C++"]
    }
  ]

  return (
    <section id="experience" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience Timeline</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-8" />
          <p className="text-lg text-muted-foreground">
            My professional journey from learning fundamentals to engineering production backend systems.
          </p>
        </div>

        <div className="relative border-l-2 border-muted ml-3 md:ml-6 space-y-12 pb-8">
          {experiences.map((exp, idx) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative pl-8 md:pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[21px] top-1 w-10 h-10 rounded-full bg-background border-2 border-border flex items-center justify-center shadow-sm">
                {exp.icon}
              </div>

              <div className="bg-muted/30 border border-border rounded-2xl p-6 md:p-8 hover:border-primary/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                    <div className="text-lg font-medium text-muted-foreground mt-1">{exp.company}</div>
                  </div>
                  <div className="inline-flex items-center px-3 py-1 rounded-full bg-background border border-border text-xs font-mono text-muted-foreground whitespace-nowrap">
                    {exp.period}
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {exp.tags.map(tag => (
                    <span key={tag} className="px-2.5 py-1 text-xs font-mono rounded-md bg-background border border-border text-muted-foreground">
                      {tag}
                    </span>
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
