"use client"

import { motion } from "framer-motion"
import { Layers, Network, Zap, HardDrive } from "lucide-react"

export function SystemDesign() {
  const principles = [
    {
      title: "Horizontal Scaling & Load Balancing",
      icon: <Network className="w-6 h-6 text-blue-500" />,
      text: "Designing stateless application layers that can be horizontally scaled behind an API Gateway or Load Balancer. Utilizing Round Robin or Least Connections algorithms depending on the traffic pattern."
    },
    {
      title: "Caching Strategies",
      icon: <Zap className="w-6 h-6 text-yellow-500" />,
      text: "Implementing Write-Through and Cache-Aside patterns using Redis to reduce database read pressure. Handling Cache Invalidation and mitigating Cache Stampedes via probabilistic early expiration."
    },
    {
      title: "Asynchronous Processing",
      icon: <Layers className="w-6 h-6 text-purple-500" />,
      text: "Decoupling heavy tasks (like email sending, report generation, and ML inference) from the main request thread using Message Queues (RabbitMQ/Celery) to maintain sub-100ms API response times."
    },
    {
      title: "Database Scaling",
      icon: <HardDrive className="w-6 h-6 text-emerald-500" />,
      text: "Applying read-replicas for heavy read workloads, implementing database connection pooling (PgBouncer), and utilizing logical partitioning for massive tables."
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">System Design Principles</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            Building systems that survive contact with the real world requires planning for failure, latency, and scale from day one.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {principles.map((principle, idx) => (
            <motion.div 
              key={principle.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="flex gap-6 p-6 rounded-2xl bg-muted/30 border border-border hover:bg-muted/50 transition-colors"
            >
              <div className="flex-shrink-0 w-12 h-12 bg-background border border-border rounded-xl flex items-center justify-center">
                {principle.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{principle.title}</h3>
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {principle.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
