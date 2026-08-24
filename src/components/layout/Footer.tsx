import { ArrowUp } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-muted/20 text-foreground py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
        <a
          href="#hero"
          className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors px-3 py-1.5 rounded-full hover:bg-muted/60"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </a>
      </div>
    </footer>
  )
}
