"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Plus, Edit2, Trash2, Search } from "lucide-react"

// Mock data based on ExperienceTimeline.tsx
const initialExperiences = [
  {
    id: 1,
    role: "Backend Engineer Intern",
    company: "TechFlow Systems",
    period: "Jan 2025 - Present",
    tags: ["FastAPI", "Redis", "Microservices", "Docker"]
  },
  {
    id: 2,
    role: "Freelance Backend Developer",
    company: "Various Clients",
    period: "Jun 2024 - Dec 2024",
    tags: ["Django", "PostgreSQL", "AWS ECS", "Stripe API"]
  },
  {
    id: 3,
    role: "Open Source Contributor",
    company: "Python Community",
    period: "Jan 2024 - May 2024",
    tags: ["Python", "PyTest", "AsyncIO", "GitHub"]
  },
  {
    id: 4,
    role: "Computer Science Student",
    company: "University of Technology",
    period: "2021 - 2025",
    tags: ["Algorithms", "DBMS", "Networking", "C++"]
  }
]

export default function ExperienceAdminPage() {
  const [experiences, setExperiences] = useState(initialExperiences)
  const [searchQuery, setSearchQuery] = useState("")

  const filteredExps = experiences.filter(exp => 
    exp.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
    exp.company.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">Experience</h1>
          <p className="text-muted-foreground mt-2">Manage your professional experience and timeline.</p>
        </div>
        <button className="inline-flex items-center justify-center px-4 py-2.5 bg-primary text-primary-foreground font-medium rounded-xl hover:bg-primary/90 transition-colors shadow-sm shadow-primary/20">
          <Plus className="w-5 h-5 mr-2" />
          Add Experience
        </button>
      </div>

      <div className="bg-muted/30 border border-border rounded-2xl overflow-hidden">
        <div className="p-4 border-b border-border flex items-center justify-between">
          <div className="relative w-full max-w-md">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-muted-foreground" />
            </div>
            <input
              type="text"
              placeholder="Search experiences..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="block w-full pl-10 pr-3 py-2 border border-border rounded-xl leading-5 bg-background placeholder-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary sm:text-sm transition-all"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-muted/50 border-b border-border text-sm text-muted-foreground">
                <th className="px-6 py-4 font-medium">Role & Company</th>
                <th className="px-6 py-4 font-medium">Period</th>
                <th className="px-6 py-4 font-medium">Tags</th>
                <th className="px-6 py-4 font-medium text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {filteredExps.map((exp) => (
                <motion.tr 
                  key={exp.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="hover:bg-muted/30 transition-colors group"
                >
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="font-medium text-foreground">{exp.role}</div>
                    <div className="text-sm text-muted-foreground">{exp.company}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-muted-foreground">
                    {exp.period}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1.5">
                      {exp.tags.slice(0, 2).map(tag => (
                        <span key={tag} className="px-2 py-0.5 text-xs font-mono rounded bg-background border border-border text-muted-foreground">
                          {tag}
                        </span>
                      ))}
                      {exp.tags.length > 2 && (
                        <span className="px-2 py-0.5 text-xs font-mono rounded bg-background border border-border text-muted-foreground">
                          +{exp.tags.length - 2}
                        </span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button className="text-muted-foreground hover:text-primary transition-colors p-2" aria-label="Edit">
                      <Edit2 className="w-4 h-4" />
                    </button>
                    <button className="text-muted-foreground hover:text-red-500 transition-colors p-2 ml-2" aria-label="Delete">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </motion.tr>
              ))}
              {filteredExps.length === 0 && (
                <tr>
                  <td colSpan={4} className="px-6 py-8 text-center text-muted-foreground">
                    No experiences found matching your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
