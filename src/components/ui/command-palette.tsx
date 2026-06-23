"use client"

import * as React from "react"
import { Command } from "cmdk"
import { Search, Folder, Terminal, User, FileText, Settings, X } from "lucide-react"

export function CommandPalette({ open, setOpen }: { open: boolean, setOpen: (open: boolean) => void }) {
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [setOpen])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-32 bg-background/80 backdrop-blur-sm" onClick={() => setOpen(false)}>
      <div className="w-full max-w-2xl bg-background border border-border rounded-xl shadow-2xl overflow-hidden" onClick={e => e.stopPropagation()}>
        <Command className="w-full flex flex-col">
          <div className="flex items-center px-4 border-b border-border">
            <Search className="w-5 h-5 text-muted-foreground mr-3" />
            <Command.Input 
              autoFocus
              placeholder="Type a command or search..." 
              className="w-full h-14 bg-transparent outline-none text-foreground placeholder:text-muted-foreground font-sans text-lg"
            />
            <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <Command.List className="max-h-[300px] overflow-y-auto p-2">
            <Command.Empty className="py-6 text-center text-muted-foreground">No results found.</Command.Empty>

            <Command.Group heading="Navigation" className="px-2 py-1.5 text-xs font-semibold text-muted-foreground">
              <Command.Item className="flex items-center px-3 py-2 mt-1 rounded-md cursor-pointer aria-selected:bg-accent aria-selected:text-accent-foreground group transition-colors" onSelect={() => { window.location.href = "#projects"; setOpen(false); }}>
                <Folder className="w-4 h-4 mr-3 text-muted-foreground group-aria-selected:text-primary" />
                <span>Featured Projects</span>
              </Command.Item>
              <Command.Item className="flex items-center px-3 py-2 mt-1 rounded-md cursor-pointer aria-selected:bg-accent aria-selected:text-accent-foreground group transition-colors" onSelect={() => { window.location.href = "#skills"; setOpen(false); }}>
                <Terminal className="w-4 h-4 mr-3 text-muted-foreground group-aria-selected:text-primary" />
                <span>Technical Skills</span>
              </Command.Item>
              <Command.Item className="flex items-center px-3 py-2 mt-1 rounded-md cursor-pointer aria-selected:bg-accent aria-selected:text-accent-foreground group transition-colors" onSelect={() => { window.location.href = "#about"; setOpen(false); }}>
                <User className="w-4 h-4 mr-3 text-muted-foreground group-aria-selected:text-primary" />
                <span>Professional Summary</span>
              </Command.Item>
              <Command.Item className="flex items-center px-3 py-2 mt-1 rounded-md cursor-pointer aria-selected:bg-accent aria-selected:text-accent-foreground group transition-colors" onSelect={() => { window.location.href = "#contact"; setOpen(false); }}>
                <FileText className="w-4 h-4 mr-3 text-muted-foreground group-aria-selected:text-primary" />
                <span>Contact & Resume</span>
              </Command.Item>
            </Command.Group>
          </Command.List>
        </Command>
      </div>
    </div>
  )
}
