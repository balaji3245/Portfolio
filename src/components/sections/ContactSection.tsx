"use client"

import { motion } from "framer-motion"
import { Mail, MapPin, Phone } from "lucide-react"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Together</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-8" />
          <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
            Looking for a backend engineer to architect your next system or scale your existing API? I'm currently open to new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-3 gap-2 sm:gap-8 max-w-4xl mx-auto">
          
          {/* Email Info */}
          <div className="bg-muted/30 p-2 sm:p-6 rounded-xl sm:rounded-2xl border border-border flex flex-col items-center text-center">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-2 sm:mb-4">
              <Mail className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-bold text-[10px] sm:text-xl mb-0.5 sm:mb-2">Email</h3>
            <p className="text-muted-foreground mb-2 sm:mb-4 text-[8px] sm:text-base break-all">chaughulebalaji09@gmail.com</p>
            <a href="mailto:chaughulebalaji09@gmail.com" className="text-[8px] sm:text-sm text-primary font-medium inline-flex items-center hover:underline mt-auto">
              Send a message &rarr;
            </a>
          </div>

          {/* Phone Info */}
          <div className="bg-muted/30 p-2 sm:p-6 rounded-xl sm:rounded-2xl border border-border flex flex-col items-center text-center">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-500 mb-2 sm:mb-4">
              <Phone className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-bold text-[10px] sm:text-xl mb-0.5 sm:mb-2">Phone</h3>
            <p className="text-muted-foreground mb-2 sm:mb-4 text-[8px] sm:text-base break-all">+91 8263092932</p>
            <a href="tel:8263092932" className="text-[8px] sm:text-sm text-emerald-500 font-medium inline-flex items-center hover:underline mt-auto">
              Call now &rarr;
            </a>
          </div>

          {/* Location Info */}
          <div className="bg-muted/30 p-2 sm:p-6 rounded-xl sm:rounded-2xl border border-border flex flex-col items-center text-center">
            <div className="w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 mb-2 sm:mb-4">
              <MapPin className="w-4 h-4 sm:w-6 sm:h-6" />
            </div>
            <h3 className="font-bold text-[10px] sm:text-xl mb-0.5 sm:mb-2">Location</h3>
            <p className="text-muted-foreground mb-2 sm:mb-4 text-[8px] sm:text-sm leading-tight sm:leading-relaxed">Bhise Wagholi, Latur, Maharashtra 413511</p>
            <span className="px-1.5 sm:px-3 py-0.5 sm:py-1 bg-background border border-border rounded-full text-[7px] sm:text-xs text-muted-foreground mt-auto whitespace-nowrap">
              Remote Available
            </span>
          </div>
          
        </div>
      </div>
    </section>
  )
}
