"use client"

import * as React from "react"
import Link from "next/link"
import { Terminal, Search } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { CommandPalette } from "@/components/ui/command-palette"

export function Navbar() {
  const [cmdOpen, setCmdOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <>
      <header className={`fixed top-0 w-full z-40 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md border-b border-border shadow-sm" : "bg-transparent"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center gap-2 group">
                <div className="bg-primary/10 p-2 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <Terminal className="h-5 w-5 text-primary" />
                </div>
                <span className="font-mono font-bold text-lg tracking-tight">balaji<span className="text-muted-foreground">.dev</span></span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-8">
              <Link href="#about" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Experience</Link>
              <Link href="#skills" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Stack</Link>
              <Link href="#projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Projects</Link>
              <Link href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</Link>
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-3">
              <button 
                onClick={() => setCmdOpen(true)}
                className="hidden md:flex items-center gap-2 px-3 py-1.5 text-sm text-muted-foreground bg-muted/50 hover:bg-muted border border-border rounded-lg transition-colors"
              >
                <Search className="h-4 w-4" />
                <span>Search...</span>
                <kbd className="hidden sm:inline-flex items-center gap-1 font-mono text-[10px] font-medium opacity-70">
                  <span className="text-xs">⌘</span>K
                </kbd>
              </button>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </header>
      
      <CommandPalette open={cmdOpen} setOpen={setCmdOpen} />
    </>
  )
}
