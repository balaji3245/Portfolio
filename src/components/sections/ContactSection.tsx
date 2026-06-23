"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Mail, MapPin, Send, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ContactSection() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const formData = new FormData(e.currentTarget);
    // Replace this access key with your own from https://web3forms.com/
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setSuccess(false), 3000);
      } else {
        console.error("Error submitting form", data);
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let's Build Together</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mx-auto mb-8" />
          <p className="text-lg text-muted-foreground">
            Looking for a backend engineer to architect your next system or scale your existing API? I'm currently open to new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Contact Info */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-muted/30 p-6 rounded-2xl border border-border">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary mb-4">
                <Mail className="w-5 h-5" />
              </div>
              <h3 className="font-bold mb-2">Email</h3>
              <p className="text-sm text-muted-foreground">contact@example.com</p>
              <a href="mailto:contact@example.com" className="text-xs text-primary font-medium mt-2 inline-block hover:underline">
                Send a message &rarr;
              </a>
            </div>

            <div className="bg-muted/30 p-6 rounded-2xl border border-border">
              <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 mb-4">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-bold mb-2">Location</h3>
              <p className="text-sm text-muted-foreground">San Francisco, CA</p>
              <p className="text-xs text-muted-foreground mt-2 inline-block">
                Remote Available
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="md:col-span-2">
            <form onSubmit={handleSubmit} className="bg-background rounded-2xl border border-border p-8 shadow-sm">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required 
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required 
                    className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  rows={4} 
                  required 
                  className="w-full bg-muted border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project, API needs, or system requirements..."
                />
              </div>

              <Button type="submit" disabled={loading} className="w-full h-12 text-base font-semibold">
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                    Sending...
                  </>
                ) : success ? (
                  "Message Sent!"
                ) : (
                  <>
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
