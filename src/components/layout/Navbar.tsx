"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, X, ArrowUpRight, FileText } from "lucide-react"
import { FaGithub as Github, FaLinkedin as Linkedin, FaInstagram as Instagram } from "react-icons/fa"
import { ThemeToggle } from "@/components/ui/theme-toggle"

export function Navbar() {
  const [scrolled, setScrolled] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Architecture", href: "#architecture" },
    { name: "Skills", href: "#skills" },
    { name: "Education", href: "#education" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-200 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md border-b border-border/80 shadow-[0_2px_8px_rgba(0,0,0,0.03)]"
          : "bg-background/60 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo & Identity */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 rounded-lg bg-slate-900 text-white dark:bg-white dark:text-slate-950 flex items-center justify-center font-mono font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
              CB
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-sm tracking-tight text-foreground flex items-center gap-1.5">
                Chaughule Balaji
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </span>
              <span className="text-[11px] text-muted-foreground font-mono hidden sm:inline-block">
                Full-Stack Dev & Team Leader
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-muted/60 p-1 rounded-full border border-border/60">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="px-3.5 py-1.5 text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-background rounded-full transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Action Cluster */}
          <div className="flex items-center gap-2.5">
            <div className="hidden sm:flex items-center gap-1">
              <a
                href="https://github.com/balaji3245"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/balaji-chaughule-47b33a3a1"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/chaughule_balaji_/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram Profile"
                className="p-2 text-muted-foreground hover:text-pink-500 rounded-lg hover:bg-muted transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>

            <a
              href="#contact"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg bg-foreground text-background hover:opacity-90 transition-opacity shadow-sm"
            >
              Get in Touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <ThemeToggle />

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 rounded-lg text-foreground hover:bg-muted transition-colors lg:hidden"
              aria-label="Toggle Navigation Menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Slide-down Navigation Menu */}
      {menuOpen && (
        <div className="lg:hidden border-b border-border bg-background/98 backdrop-blur-xl px-4 pt-3 pb-6 space-y-3 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="grid grid-cols-2 gap-2 pt-1 pb-3 border-b border-border">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="flex items-center justify-between pt-1">
            <div className="flex items-center gap-3">
              <a
                href="https://github.com/balaji3245"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/balaji-chaughule-47b33a3a1"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-muted-foreground hover:text-foreground rounded-lg hover:bg-muted transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/chaughule_balaji_/"
                target="_blank"
                rel="noreferrer"
                className="p-2 text-muted-foreground hover:text-pink-500 rounded-lg hover:bg-muted transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold rounded-lg bg-foreground text-background"
            >
              Get in Touch
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
