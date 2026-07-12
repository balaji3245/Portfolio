"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { LayoutDashboard, Briefcase, FileCode, Users, Settings, LogOut } from "lucide-react"

const navigation = [
  { name: "Overview", href: "/admin", icon: LayoutDashboard },
  { name: "Experience", href: "/admin/experience", icon: Briefcase },
  { name: "Projects", href: "/admin/projects", icon: FileCode },
  { name: "Testimonials", href: "/admin/testimonials", icon: Users },
  { name: "Settings", href: "/admin/settings", icon: Settings },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="flex h-full w-64 flex-col bg-muted/30 border-r border-border px-4 py-8">
      <div className="mb-10 px-4">
        <h2 className="text-2xl font-bold text-primary">Admin Panel</h2>
        <p className="text-sm text-muted-foreground mt-1">Portfolio Manager</p>
      </div>

      <nav className="flex-1 space-y-1">
        {navigation.map((item) => {
          const isActive = pathname === item.href
          const Icon = item.icon
          
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`
                group flex items-center px-4 py-3 text-sm font-medium rounded-xl transition-all duration-200
                ${isActive 
                  ? "bg-primary text-primary-foreground shadow-sm shadow-primary/20" 
                  : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
                }
              `}
            >
              <Icon 
                className={`mr-3 h-5 w-5 flex-shrink-0 transition-colors ${
                  isActive ? "text-primary-foreground" : "text-muted-foreground group-hover:text-foreground"
                }`} 
                aria-hidden="true" 
              />
              {item.name}
            </Link>
          )
        })}
      </nav>

      <div className="mt-auto border-t border-border pt-4">
        <Link
          href="/"
          className="group flex items-center px-4 py-3 text-sm font-medium text-muted-foreground rounded-xl hover:bg-muted/50 hover:text-foreground transition-all duration-200"
        >
          <LogOut className="mr-3 h-5 w-5 flex-shrink-0 text-muted-foreground group-hover:text-foreground transition-colors" aria-hidden="true" />
          Back to Site
        </Link>
      </div>
    </div>
  )
}
