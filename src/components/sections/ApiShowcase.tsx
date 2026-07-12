"use client"

import { motion } from "framer-motion"
import { Code, CheckCircle, ShieldAlert, Key } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ApiShowcase() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">API Development Standards</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-8" />
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            My APIs are built with strict typing, robust authentication, pagination, caching, and rate limiting by default. Here's a realistic example of a production-ready endpoint.
          </p>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-8">
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6 sm:space-y-8"
          >
            <div className="flex gap-3 sm:gap-4">
              <div className="mt-1"><ShieldAlert className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-500" /></div>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-0.5 sm:mb-1">Security First</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">Endpoints are protected by JWT authentication and granular Role-Based Access Control (RBAC) scopes. Users can only access their own data unless they hold superuser privileges.</p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="mt-1"><CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" /></div>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-0.5 sm:mb-1">Data Validation</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">Using Pydantic/FastAPI for strict request and response validation. Query parameters are sanitized using Regex to prevent injection attacks and ensure data integrity.</p>
              </div>
            </div>

            <div className="flex gap-3 sm:gap-4">
              <div className="mt-1"><Key className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-500" /></div>
              <div>
                <h3 className="font-bold text-base sm:text-lg mb-0.5 sm:mb-1">Performance & Caching</h3>
                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">Implemented Redis caching with TTLs for frequent reads. Added Rate Limiting decorators to prevent API abuse and ensure fair resource allocation.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-2 sm:pt-4">
              {['FastAPI', 'JWT Auth', 'Redis Caching', 'Rate Limiting', 'Pagination', 'Pydantic'].map(t => (
                <Badge key={t} variant="outline" className="font-mono text-[9px] sm:text-xs bg-background/50 px-1.5 sm:px-2.5 py-0 sm:py-0.5">{t}</Badge>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
