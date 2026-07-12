"use client"

import { motion } from "framer-motion"
import { Container, Workflow, MonitorPlay, ServerCog } from "lucide-react"

export function DevOpsDeployment() {
  const cards = [
    {
      title: "Containerization",
      icon: <Container className="w-8 h-8 text-blue-500" />,
      items: [
        "Multi-stage Docker builds for minimal image size",
        "Docker Compose for consistent local development",
        "Managing volume persistence and network bridging"
      ]
    },
    {
      title: "CI/CD Pipelines",
      icon: <Workflow className="w-8 h-8 text-emerald-500" />,
      items: [
        "GitHub Actions for automated testing and linting",
        "Automated Docker image building and pushing to ECR",
        "Zero-downtime deployment strategies"
      ]
    },
    {
      title: "Server & Infrastructure",
      icon: <ServerCog className="w-8 h-8 text-purple-500" />,
      items: [
        "Linux server administration (Ubuntu/Debian)",
        "Nginx reverse proxy configuration and load balancing",
        "AWS EC2, S3, and RDS provisioning and management"
      ]
    },
    {
      title: "Monitoring & Logging",
      icon: <MonitorPlay className="w-8 h-8 text-yellow-500" />,
      items: [
        "Centralized logging strategies",
        "Application Performance Monitoring (Sentry/New Relic)",
        "Uptime tracking and alerting setups"
      ]
    }
  ]

  return (
    <section className="py-24 bg-muted/30 border-y border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">DevOps & Deployment</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-8" />
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Code isn't done until it's running reliably in production. I handle the full lifecycle from Git push to containerized deployment.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((card, idx) => (
            <motion.div 
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-background rounded-2xl p-4 sm:p-6 border border-border hover:border-primary/50 transition-colors shadow-sm flex flex-col"
            >
              <div className="mb-3 sm:mb-6 p-2 sm:p-4 inline-block rounded-xl bg-muted border border-border self-start">
                <div className="scale-75 sm:scale-100">{card.icon}</div>
              </div>
              <h3 className="text-sm sm:text-xl font-bold mb-2 sm:mb-4 leading-tight">{card.title}</h3>
              <ul className="space-y-2 sm:space-y-3 mt-auto">
                {card.items.map((item, i) => (
                  <li key={i} className="text-[10px] sm:text-sm text-muted-foreground flex items-start gap-1.5 sm:gap-2">
                    <span className="text-primary mt-0.5 sm:mt-1 text-[8px] sm:text-[10px]">▶</span>
                    <span className="leading-tight sm:leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
