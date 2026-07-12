"use client"

import * as React from "react"
import Link from "next/link"
import { Terminal, Menu, X } from "lucide-react"
import { ThemeToggle } from "@/components/ui/theme-toggle"
import { CommandPalette } from "@/components/ui/command-palette"

export function Navbar() {
  const [cmdOpen, setCmdOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)

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
            <div className="flex items-center gap-3 relative">
              {/* Desktop Theme Toggle */}
              <div className="hidden md:block">
                <ThemeToggle />
              </div>

              {/* Mobile 3-Dots Menu */}
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="p-2 -mr-2 rounded-full hover:bg-muted transition-colors flex md:hidden items-center justify-center text-foreground"
                aria-label="Menu"
              >
                {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>

              {menuOpen && (
                <div className="absolute top-14 right-0 w-56 bg-background border border-border rounded-xl shadow-lg p-2 flex flex-col z-50 origin-top-right animate-in fade-in zoom-in duration-200 md:hidden">
                  <div className="flex items-center justify-between px-3 py-2 border-b border-border mb-2">
                    <span className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Navigation</span>
                    <div className="scale-90 origin-right">
                      <ThemeToggle />
                    </div>
                  </div>
                  <Link href="#about" onClick={() => setMenuOpen(false)} className="px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted/80 rounded-md transition-colors">Experience</Link>
                  <Link href="#skills" onClick={() => setMenuOpen(false)} className="px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted/80 rounded-md transition-colors">Stack</Link>
                  <Link href="#projects" onClick={() => setMenuOpen(false)} className="px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted/80 rounded-md transition-colors">Projects</Link>
                  <Link href="#contact" onClick={() => setMenuOpen(false)} className="px-3 py-2.5 text-sm font-medium text-foreground hover:bg-muted/80 rounded-md transition-colors">Contact</Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      
      <CommandPalette open={cmdOpen} setOpen={setCmdOpen} />
    </>
  )
}
