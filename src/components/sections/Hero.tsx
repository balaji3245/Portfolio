"use client"

import { motion } from "framer-motion"
import { Download, Mail, Terminal, Database, Server } from "lucide-react"
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export function Hero() {
  const stats = [
    { label: "Years Experience", value: "3+" },
    { label: "Production APIs", value: "15+" },
    { label: "Databases Scaled", value: "5+" },
    { label: "GitHub Commits", value: "2.4k+" },
  ]

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden bg-grid-pattern">
      {/* Decorative background elements */}
      <div className="absolute inset-0 bg-background/80 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-start"
          >
            <div className="flex items-center gap-2 mb-6">
              <Badge variant="outline" className="px-3 py-1 bg-background/50 backdrop-blur-md border-primary/30 text-primary">
                <Terminal className="w-3 h-3 mr-2" />
                Available for hire
              </Badge>
              <Badge variant="outline" className="px-3 py-1 bg-background/50 backdrop-blur-md">
                v2.0.0
              </Badge>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-4">
              <span className="block text-foreground">Balaji</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-400">Chaughule</span>
            </h1>

            <h2 className="text-2xl sm:text-3xl font-semibold text-muted-foreground mb-6 font-mono tracking-tight flex items-center gap-2">
              &gt; Python Backend Developer<span className="animate-pulse">_</span>
            </h2>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl leading-relaxed">
              I architect and build scalable backend systems, robust REST APIs, and reliable cloud infrastructure. Focused on performance, clean code, and database optimization.
            </p>

            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Button size="lg" className="font-semibold" onClick={() => window.open('/resume.pdf')}>
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button size="lg" variant="outline" className="bg-background/50 backdrop-blur-sm">
                <Github className="w-4 h-4 mr-2" />
                GitHub
              </Button>
              <div className="flex items-center gap-2 ml-2">
                <a href="#" className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors border border-transparent hover:border-border">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="#contact" className="p-2.5 text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors border border-transparent hover:border-border">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full pt-8 border-t border-border">
              {stats.map((stat, i) => (
                <motion.div 
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 + (i * 0.1) }}
                >
                  <div className="text-2xl font-bold text-foreground font-mono">{stat.value}</div>
                  <div className="text-xs text-muted-foreground mt-1 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            className="hidden lg:flex relative h-full items-center justify-center"
          >
            {/* Visual representation of backend stack */}
            <div className="relative w-full aspect-square max-w-[500px]">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-blue-500/10 rounded-3xl transform rotate-3 scale-105 border border-primary/20 backdrop-blur-3xl" />
              <div className="absolute inset-0 bg-background/80 rounded-3xl border border-border shadow-2xl overflow-hidden glass-panel flex flex-col p-6">
                <div className="flex items-center gap-2 mb-6 pb-4 border-b border-border">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <div className="ml-2 font-mono text-xs text-muted-foreground flex-1 text-center">server.py</div>
                </div>
                <div className="flex-1 font-mono text-sm leading-relaxed overflow-hidden relative">
                  <div className="text-muted-foreground mb-4"># Initializing production environment</div>
                  <div className="text-blue-400">from <span className="text-foreground">fastapi</span> import <span className="text-foreground">FastAPI</span></div>
                  <div className="text-blue-400">from <span className="text-foreground">core.database</span> import <span className="text-foreground">engine</span></div>
                  <div className="text-blue-400">from <span className="text-foreground">api.routes</span> import <span className="text-foreground">router</span></div>
                  <br />
                  <div><span className="text-yellow-300">app</span> = FastAPI(title=<span className="text-green-400">"Core API"</span>)</div>
                  <br />
                  <div className="text-purple-400">@app.on_event(<span className="text-green-400">"startup"</span>)</div>
                  <div className="text-blue-400">async def <span className="text-yellow-300">startup</span>():</div>
                  <div className="pl-4">await database.connect()</div>
                  <div className="pl-4">redis.initialize_pool()</div>
                  <br />
                  <div>app.include_router(router, prefix=<span className="text-green-400">"/api/v1"</span>)</div>
                  
                  <div className="absolute bottom-0 right-0 p-4 flex gap-4 opacity-50">
                    <Database className="w-12 h-12 text-blue-500" />
                    <Server className="w-12 h-12 text-primary" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
