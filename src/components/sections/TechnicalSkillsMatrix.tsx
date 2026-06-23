"use client"

import { motion } from "framer-motion"

export function TechnicalSkillsMatrix() {
  const categories = [
    {
      name: "Backend",
      skills: [
        { name: "Python", level: 95 },
        { name: "FastAPI", level: 90 },
        { name: "Django", level: 85 },
        { name: "Flask", level: 80 },
        { name: "Node.js", level: 70 },
      ]
    },
    {
      name: "Databases",
      skills: [
        { name: "PostgreSQL", level: 90 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 85 },
        { name: "MySQL", level: 75 },
      ]
    },
    {
      name: "DevOps & Cloud",
      skills: [
        { name: "Docker", level: 85 },
        { name: "AWS", level: 75 },
        { name: "Linux / Nginx", level: 80 },
        { name: "GitHub Actions", level: 85 },
      ]
    },
    {
      name: "Tools & Testing",
      skills: [
        { name: "Git", level: 90 },
        { name: "PyTest", level: 85 },
        { name: "Postman / Swagger", level: 95 },
        { name: "Celery", level: 75 },
      ]
    }
  ]

  return (
    <section id="skills" className="py-24 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Technical Skills Matrix</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            A comprehensive overview of my technical expertise, categorized by domain. Proficiency is indicated by the proficiency bars based on years of active usage and project complexity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {categories.map((category, idx) => (
            <motion.div 
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-background rounded-2xl p-8 border border-border shadow-sm"
            >
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
                <span className="w-8 h-8 rounded-lg bg-primary/10 text-primary flex items-center justify-center font-mono text-sm">
                  0{idx + 1}
                </span>
                {category.name}
              </h3>
              
              <div className="space-y-6">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-sm">{skill.name}</span>
                      <span className="text-xs text-muted-foreground font-mono">{skill.level}%</span>
                    </div>
                    <div className="h-2 w-full bg-muted rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                        className="h-full bg-gradient-to-r from-primary to-blue-400 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
