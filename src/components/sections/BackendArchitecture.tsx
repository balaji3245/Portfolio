"use client"

import { motion } from "framer-motion"
import { ArrowRight, Server, Database, ShieldCheck, Globe, Cpu, Layers } from "lucide-react"

export function BackendArchitecture() {
  const layers = [
    {
      title: "API Gateway Layer",
      icon: <Globe className="w-6 h-6 text-blue-500" />,
      desc: "Nginx / Traefik",
      details: "Handles SSL termination, rate limiting, and reverse proxying to application servers."
    },
    {
      title: "Authentication Layer",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
      desc: "JWT / OAuth2",
      details: "Stateless authentication validating tokens before request reaches core services."
    },
    {
      title: "Application / Service Layer",
      icon: <Server className="w-6 h-6 text-primary" />,
      desc: "FastAPI / Django",
      details: "Core business logic execution, validation, and asynchronous task delegation."
    },
    {
      title: "Caching Layer",
      icon: <Cpu className="w-6 h-6 text-yellow-500" />,
      desc: "Redis",
      details: "In-memory caching of frequent queries and session storage to reduce DB load."
    },
    {
      title: "Data Persistence Layer",
      icon: <Database className="w-6 h-6 text-purple-500" />,
      desc: "PostgreSQL",
      details: "ACID compliant relational storage with optimized indexing and connection pooling."
    },
    {
      title: "Background Workers",
      icon: <Layers className="w-6 h-6 text-rose-500" />,
      desc: "Celery / RabbitMQ",
      details: "Asynchronous processing for emails, reports, and heavy computational tasks."
    }
  ]

  return (
    <section id="architecture" className="py-24 bg-background border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Architecture Approach</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-8" />
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            My standard approach to building scalable, maintainable backend systems. Decoupling concerns allows for independent scaling and easier debugging.
          </p>
        </div>

        <div className="relative">
          {/* Vertical connecting line for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

          <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:block lg:space-y-0">
            {layers.map((layer, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div key={layer.title} className={`flex flex-col lg:flex-row items-center justify-center ${isEven ? 'lg:flex-row-reverse' : ''} relative`}>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden lg:block lg:w-1/2" />
                  
                  {/* Center Node */}
                  <motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-4 border-muted items-center justify-center z-10"
                  >
                    <ArrowRight className={`w-5 h-5 text-muted-foreground ${isEven ? 'rotate-180' : ''} opacity-50`} />
                  </motion.div>

                  {/* Content Card */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className={`w-full lg:w-1/2 ${isEven ? 'lg:pl-16' : 'lg:pr-16'} relative h-full`}
                  >
                    <div className="bg-muted/30 border border-border rounded-2xl p-4 sm:p-6 hover:border-primary/50 transition-colors group h-full flex flex-col">
                      <div className="flex flex-col xl:flex-row items-start gap-3 sm:gap-4 flex-1">
                        <div className="p-2 sm:p-3 bg-background border border-border rounded-xl group-hover:scale-110 transition-transform">
                          <div className="scale-75 sm:scale-100">{layer.icon}</div>
                        </div>
                        <div>
                          <h3 className="text-sm sm:text-xl font-bold mb-1 leading-tight">{layer.title}</h3>
                          <div className="font-mono text-[9px] sm:text-xs text-primary mb-2 sm:mb-3 font-semibold tracking-wider uppercase leading-tight">{layer.desc}</div>
                          <p className="text-[10px] sm:text-sm text-muted-foreground leading-relaxed line-clamp-4">
                            {layer.details}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
