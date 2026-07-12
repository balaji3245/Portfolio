import Link from "next/link"
import { Terminal, Mail } from "lucide-react"
import { FaGithub as Github, FaLinkedin as Linkedin } from "react-icons/fa"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Terminal className="h-5 w-5 text-primary" />
              <span className="font-mono font-bold text-lg tracking-tight">balaji<span className="text-muted-foreground">.dev</span></span>
            </Link>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xs mb-4 sm:mb-6 leading-relaxed">
              Python Backend Engineer building robust APIs, scalable microservices, and reliable cloud infrastructure.
            </p>
            <div className="flex gap-4">
              <a href="https://github.com/balaji3245" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="mailto:chaughulebalaji09@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Mail className="h-5 w-5" />
                <span className="sr-only">Email</span>
              </a>
            </div>
          </div>
          
          <div className="grid grid-cols-2 col-span-1 md:col-span-2 gap-4 sm:gap-8">
            <div>
              <h3 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4 text-foreground">Navigation</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li><Link href="#about" className="hover:text-primary transition-colors">About</Link></li>
                <li><Link href="#skills" className="hover:text-primary transition-colors">Skills</Link></li>
                <li><Link href="#projects" className="hover:text-primary transition-colors">Projects</Link></li>
                <li><Link href="#architecture" className="hover:text-primary transition-colors">Architecture</Link></li>
                <li><Link href="#contact" className="hover:text-primary transition-colors">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-sm sm:text-base mb-3 sm:mb-4 text-foreground">Tech Stack</h3>
              <ul className="space-y-1.5 sm:space-y-2 text-xs sm:text-sm text-muted-foreground">
                <li>Python & Django/FastAPI</li>
                <li>PostgreSQL & Redis</li>
                <li>Docker & CI/CD</li>
                <li>AWS & Cloud Deployment</li>
                <li>Next.js (Portfolio)</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-border text-center text-[10px] sm:text-xs text-muted-foreground">
          <p>© {new Date().getFullYear()} Balaji Chaughule</p>
        </div>
      </div>
    </footer>
  )
}
