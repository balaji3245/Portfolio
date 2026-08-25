"use client"

import { motion } from "framer-motion"
import { 
  Code2, 
  Layout, 
  Server, 
  Database, 
  Cloud, 
  ShieldCheck, 
  Wrench, 
  BrainCircuit,
  Terminal
} from "lucide-react"

export function TechnicalSkillsMatrix() {
  const skillCategories = [
    {
      category: "Languages & Frameworks",
      icon: <Terminal className="w-4 h-4 text-blue-600 dark:text-blue-400" />,
      skills: ["TypeScript", "JavaScript (ES6+)", "Python", "SQL", "Java", "HTML5 / CSS3"],
    },
    {
      category: "Frontend & UI/UX",
      icon: <Layout className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />,
      skills: ["React.js", "Next.js (App Router)", "Tailwind CSS", "Server Components", "Responsive UI/UX"],
    },
    {
      category: "Backend & REST APIs",
      icon: <Server className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
      skills: ["Node.js", "NestJS", "RESTful APIs", "API Architecture", "Middleware Pipelines"],
    },
    {
      category: "Databases & ORM",
      icon: <Database className="w-4 h-4 text-purple-600 dark:text-purple-400" />,
      skills: ["PostgreSQL", "Prisma ORM", "MongoDB", "Supabase", "Schema Normalization"],
    },
    {
      category: "Cloud & Linux Hosting",
      icon: <Cloud className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
      skills: ["AWS", "VPS Hosting", "Linux (Ubuntu/Debian)", "Nginx Reverse Proxy", "PM2 Supervision"],
    },
    {
      category: "Security & Protocols",
      icon: <ShieldCheck className="w-4 h-4 text-rose-600 dark:text-rose-400" />,
      skills: ["JWT", "HttpOnly Cookies", "RBAC", "Bcrypt Hashing", "Account Lockout Protection"],
    },
    {
      category: "DevOps & Tools",
      icon: <Wrench className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
      skills: ["Git", "GitHub", "Deployment Automation", "Postman", "PM2 Clustering"],
    },
    {
      category: "Data Science & ML",
      icon: <BrainCircuit className="w-4 h-4 text-teal-600 dark:text-teal-400" />,
      skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib / Seaborn", "SQL Analysis", "Power BI", "Tableau"],
    },
  ]

  return (
    <section id="skills" className="py-10 sm:py-14 bg-background border-b border-border/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 mb-6 sm:mb-8">
          <div>
            <div className="text-[10px] font-mono font-semibold uppercase tracking-widest text-muted-foreground mb-1 flex items-center gap-1.5">
              <span className="w-4 h-px bg-foreground/40" />
              Capabilities & Stack
            </div>
            <h2 className="text-lg sm:text-2xl font-extrabold text-foreground tracking-tight">
              Technical Skills Matrix
            </h2>
          </div>
        </div>

        {/* Compact 2-Column on Mobile, 4-Column on Desktop */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
          {skillCategories.map((cat, idx) => (
            <motion.div
              key={cat.category}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.04 }}
              className="p-2.5 sm:p-3.5 rounded-xl bg-muted/30 border border-border/40 hover:border-border/80 transition-colors flex flex-col justify-between"
            >
              <div className="flex items-center gap-1.5 sm:gap-2 mb-2">
                <div className="p-1.5 rounded-md bg-muted border border-border/60 flex-shrink-0">
                  {cat.icon}
                </div>
                <h3 className="font-bold text-xs sm:text-sm text-foreground leading-tight">
                  {cat.category}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1 pt-2 border-t border-border/40">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-1.5 py-0.2 rounded bg-muted text-foreground/80 font-mono text-[9px] font-medium border border-border/30"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
