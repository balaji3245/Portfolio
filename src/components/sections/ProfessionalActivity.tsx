"use client"

import { motion } from "framer-motion"
import { Code, Award, Target, BookOpen, ExternalLink, GitPullRequest } from "lucide-react"
import { FaGithub as Github } from "react-icons/fa"
import { Badge } from "@/components/ui/badge"

export function ProfessionalActivity() {
  const openSource = [
    { repo: "tiangolo/fastapi", type: "Bugfix", pr: "#10234", status: "Merged", desc: "Fixed an edge case in dependency injection resolution for background tasks." },
    { repo: "encode/starlette", type: "Feature", pr: "#2341", status: "Merged", desc: "Added support for strict trailing slashes in routing configuration." }
  ]

  const certifications = [
    { name: "AWS Certified Developer – Associate", issuer: "Amazon Web Services", date: "2024" },
    { name: "PostgreSQL Advanced Tuning", issuer: "DataCamp", date: "2023" }
  ]

  const codingProfiles = [
    { name: "LeetCode", handle: "@balaji32", rank: "Top 5%", solved: "450+", icon: <Code className="w-5 h-5 text-yellow-500" /> },
    { name: "HackerRank", handle: "@balaji_c", rank: "5 Star Python", solved: "120+", icon: <Target className="w-5 h-5 text-green-500" /> }
  ]

  return (
    <section className="py-24 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* GitHub & Open Source */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Github className="w-8 h-8 text-foreground" />
              <h2 className="text-3xl font-bold">GitHub & Open Source</h2>
            </div>
            <p className="text-muted-foreground mb-8">
              Active contributor to the Python ecosystem. I believe in giving back to the tools I use daily in production.
            </p>

            {/* Mock GitHub Graph */}
            <div className="bg-background rounded-xl p-6 border border-border mb-8">
              <div className="flex justify-between items-end mb-4">
                <div>
                  <h3 className="font-bold">balaji3245</h3>
                  <p className="text-sm text-muted-foreground">2,431 contributions in the last year</p>
                </div>
                <Badge variant="outline">Top 3%</Badge>
              </div>
              <div className="grid grid-cols-12 gap-1 sm:gap-2">
                {/* Deterministic mock contribution graph */}
                {Array.from({ length: 48 }).map((_, i) => {
                  const val = (i * 7 + 13) % 10;
                  const bgClass = val > 7 ? 'bg-primary/80' : val > 4 ? 'bg-primary/40' : 'bg-muted';
                  return (
                    <div key={i} className={`h-3 w-3 rounded-sm ${bgClass}`} />
                  )
                })}
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="font-bold flex items-center gap-2"><GitPullRequest className="w-4 h-4 text-emerald-500" /> Recent Contributions</h3>
              {openSource.map((os, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-background border border-border hover:border-primary/50 transition-colors">
                  <div className="flex justify-between items-start mb-2">
                    <a href="#" className="font-bold text-primary hover:underline flex items-center gap-1">
                      {os.repo} <ExternalLink className="w-3 h-3" />
                    </a>
                    <Badge variant="outline" className="text-[10px] uppercase text-emerald-500 border-emerald-500/30 bg-emerald-500/10">
                      {os.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{os.desc}</p>
                  <div className="mt-3 flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs font-mono">{os.pr}</Badge>
                    <span className="text-xs text-muted-foreground">{os.type}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Profiles */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Certifications */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Award className="w-8 h-8 text-primary" />
                <h2 className="text-3xl font-bold">Certifications</h2>
              </div>
              <div className="space-y-4">
                {certifications.map((cert, idx) => (
                  <div key={idx} className="flex items-center justify-between p-4 rounded-xl bg-background border border-border">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-muted-foreground" />
                      </div>
                      <div>
                        <h3 className="font-bold">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                      </div>
                    </div>
                    <div className="text-sm font-mono text-muted-foreground">{cert.date}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Coding Profiles */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-8 h-8 text-purple-500" />
                <h2 className="text-3xl font-bold">Competitive Coding</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {codingProfiles.map((profile, idx) => (
                  <div key={idx} className="p-5 rounded-xl bg-background border border-border flex flex-col items-center text-center hover:border-primary/50 transition-colors">
                    <div className="mb-3">{profile.icon}</div>
                    <h3 className="font-bold mb-1">{profile.name}</h3>
                    <p className="text-xs text-primary font-mono mb-3">{profile.handle}</p>
                    <div className="w-full flex justify-between items-center text-sm pt-3 border-t border-border">
                      <span className="text-muted-foreground">Rank</span>
                      <span className="font-bold">{profile.rank}</span>
                    </div>
                    <div className="w-full flex justify-between items-center text-sm mt-1">
                      <span className="text-muted-foreground">Solved</span>
                      <span className="font-bold">{profile.solved}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  )
}
