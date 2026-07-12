"use client"

import { motion } from "framer-motion"
import { Briefcase, FileCode, Users, Eye } from "lucide-react"

const stats = [
  { name: "Total Experiences", value: "4", icon: Briefcase, color: "text-blue-500", bg: "bg-blue-500/10" },
  { name: "Projects Portfolio", value: "6", icon: FileCode, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { name: "Testimonials", value: "3", icon: Users, color: "text-purple-500", bg: "bg-purple-500/10" },
  { name: "Profile Views", value: "1.2k", icon: Eye, color: "text-primary", bg: "bg-primary/10" },
]

export default function AdminDashboard() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground tracking-tight">Dashboard Overview</h1>
        <p className="text-muted-foreground mt-2">Welcome back! Here's what's happening with your portfolio today.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-10">
        {stats.map((stat, idx) => {
          const Icon = stat.icon
          return (
            <motion.div
              key={stat.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: idx * 0.1 }}
              className="bg-muted/30 border border-border rounded-2xl p-6 flex flex-col items-start hover:border-primary/30 transition-colors"
            >
              <div className={`p-3 rounded-xl ${stat.bg} mb-4`}>
                <Icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <p className="text-sm font-medium text-muted-foreground mb-1">{stat.name}</p>
              <h3 className="text-3xl font-bold text-foreground">{stat.value}</h3>
            </motion.div>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="bg-muted/30 border border-border rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            <p className="text-sm text-muted-foreground italic">No recent activity. (Mock data)</p>
          </div>
        </div>
        
        <div className="bg-muted/30 border border-border rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
          <div className="space-y-3">
             <button className="w-full text-left px-4 py-3 bg-background border border-border rounded-xl text-sm font-medium hover:border-primary hover:text-primary transition-colors">
               + Add New Experience
             </button>
             <button className="w-full text-left px-4 py-3 bg-background border border-border rounded-xl text-sm font-medium hover:border-primary hover:text-primary transition-colors">
               + Add New Project
             </button>
          </div>
        </div>
      </div>
    </div>
  )
}
