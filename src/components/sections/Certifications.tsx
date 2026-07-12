"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Award, ExternalLink, ShieldCheck, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Certifications() {
  const [showAll, setShowAll] = useState(false)

  const certifications = [
    {
      id: 1,
      title: "Frontend Developer Internship",
      issuer: "YJ Developers Pvt. Ltd.",
      date: "July 2026",
      credentialUrl: "/yj-internship-certificate.pdf"
    },
    {
      id: 2,
      title: "Python (Basic) Certification",
      issuer: "HackerRank",
      date: "2026",
      credentialUrl: "/python-basic-certificate.pdf"
    },
    {
      id: 3,
      title: "JavaScript (Intermediate) Certification",
      issuer: "HackerRank",
      date: "2026",
      credentialUrl: "/javascript-intermediate-certificate.pdf"
    },
    {
      id: 4,
      title: "CSS Certification",
      issuer: "HackerRank",
      date: "2026",
      credentialUrl: "/css-certificate.pdf"
    },
    {
      id: 5,
      title: "Additional Certification 1",
      issuer: "Various",
      date: "2026",
      credentialUrl: "/certificate-1.jpg"
    },
    {
      id: 6,
      title: "Additional Certification 2",
      issuer: "Various",
      date: "2026",
      credentialUrl: "/certificate-2.jpg"
    },
    {
      id: 7,
      title: "Additional Certification 3",
      issuer: "Various",
      date: "2026",
      credentialUrl: "/certificate-3.jpg"
    },
    {
      id: 8,
      title: "Additional Certification 4",
      issuer: "Various",
      date: "2026",
      credentialUrl: "/certificate-4.jpg"
    }
  ]

  return (
    <section id="certifications" className="py-24 bg-muted/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 whitespace-nowrap sm:whitespace-normal">Licenses & Certifications</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-8" />
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Professional credentials validating my expertise in cloud architecture, data engineering, and container orchestration.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-8">
          {(showAll ? certifications : certifications.slice(0, 4)).map((cert, idx) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="bg-background border border-border rounded-2xl p-4 sm:p-6 hover:shadow-md hover:border-primary/30 transition-all group flex flex-col"
            >
              <div className="flex items-start justify-between mb-3 sm:mb-4">
                <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                  <ShieldCheck className="w-4 h-4 sm:w-6 sm:h-6" />
                </div>
                <Award className="w-4 h-4 sm:w-6 sm:h-6 text-muted-foreground/30 group-hover:text-primary/20 transition-colors" />
              </div>
              
              <h3 className="font-bold text-sm sm:text-lg mb-1 sm:mb-2 text-foreground group-hover:text-primary transition-colors leading-tight line-clamp-2">
                {cert.title}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">
                {cert.issuer}
              </p>
              
              <div className="flex flex-row items-center justify-between mt-auto pt-3 sm:pt-4 border-t border-border/50 w-full">
                <span className="text-[10px] sm:text-xs font-medium text-muted-foreground">
                  Issued: {cert.date}
                </span>
                <a 
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-[10px] sm:text-xs font-medium text-primary hover:underline ml-auto"
                >
                  <span className="hidden sm:inline">Show Credential</span>
                  <span className="sm:hidden">View</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {certifications.length > 4 && (
          <div className="mt-8 flex justify-center">
            <Button 
              variant="outline" 
              onClick={() => setShowAll(!showAll)}
              className="group h-7 px-3 text-xs rounded-full"
            >
              {showAll ? (
                <>View Less <ChevronUp className="w-4 h-4 ml-2 group-hover:-translate-y-1 transition-transform" /></>
              ) : (
                <>View More <ChevronDown className="w-4 h-4 ml-2 group-hover:translate-y-1 transition-transform" /></>
              )}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
