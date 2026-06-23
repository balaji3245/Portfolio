"use client"

import { motion } from "framer-motion"
import { Database, Search, GitMerge, FileJson } from "lucide-react"

export function DatabaseEngineering() {
  const focuses = [
    {
      title: "Query Optimization",
      icon: <Search className="w-5 h-5 text-blue-500" />,
      desc: "Analyzing EXPLAIN ANALYZE plans to optimize slow queries. Heavy use of proper indexing (B-Tree, GIN, GiST) and avoiding N+1 query problems in ORMs (Django ORM, SQLAlchemy)."
    },
    {
      title: "Data Integrity & Normalization",
      icon: <Database className="w-5 h-5 text-emerald-500" />,
      desc: "Designing databases to 3NF standard to eliminate redundancy, while selectively denormalizing specific tables when read-heavy performance requirements demand it."
    },
    {
      title: "Transaction Management",
      icon: <GitMerge className="w-5 h-5 text-purple-500" />,
      desc: "Ensuring ACID compliance across distributed operations. Implementing pessimistic and optimistic locking strategies to handle concurrent database mutations."
    },
    {
      title: "JSONB & Semi-structured Data",
      icon: <FileJson className="w-5 h-5 text-yellow-500" />,
      desc: "Leveraging PostgreSQL JSONB capabilities for schema-less attributes within relational models, including specialized JSONB indexing for fast document retrieval."
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Database Engineering</h2>
            <div className="w-20 h-1.5 bg-primary rounded-full mb-8" />
            <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
              The database is the heart of any backend application. I specialize in PostgreSQL and Redis, focusing on schema design, query optimization, and data consistency under high concurrency.
            </p>

            <div className="space-y-6">
              {focuses.map((item, idx) => (
                <div key={idx} className="flex gap-4 p-4 rounded-xl hover:bg-muted/50 transition-colors border border-transparent hover:border-border">
                  <div className="mt-1 bg-background p-2 rounded-lg border border-border">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="font-bold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
             <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-2xl blur-xl" />
             <div className="relative bg-muted/30 border border-border rounded-2xl p-6 shadow-xl backdrop-blur-sm">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-border">
                  <div className="flex items-center gap-2">
                    <Database className="w-5 h-5 text-blue-400" />
                    <span className="font-mono font-bold text-sm">db_schema.sql</span>
                  </div>
                  <span className="text-xs font-mono text-muted-foreground">PostgreSQL</span>
                </div>
                
                <div className="font-mono text-sm space-y-4 text-muted-foreground">
                  <div>
                    <span className="text-purple-400">CREATE TABLE</span> <span className="text-blue-300">users</span> (
                    <div className="pl-4">id <span className="text-yellow-300">UUID PRIMARY KEY</span>,</div>
                    <div className="pl-4">email <span className="text-yellow-300">VARCHAR(255) UNIQUE NOT NULL</span>,</div>
                    <div className="pl-4">created_at <span className="text-yellow-300">TIMESTAMPTZ DEFAULT NOW()</span></div>
                    );
                  </div>
                  
                  <div>
                    <span className="text-purple-400">CREATE TABLE</span> <span className="text-blue-300">orders</span> (
                    <div className="pl-4">id <span className="text-yellow-300">UUID PRIMARY KEY</span>,</div>
                    <div className="pl-4">user_id <span className="text-yellow-300">UUID REFERENCES</span> users(id) <span className="text-emerald-400">ON DELETE CASCADE</span>,</div>
                    <div className="pl-4">metadata <span className="text-yellow-300">JSONB</span>,</div>
                    <div className="pl-4">status <span className="text-yellow-300">VARCHAR(50)</span></div>
                    );
                  </div>

                  <div>
                    <span className="text-muted-foreground/50">-- B-Tree index for foreign key lookups</span><br/>
                    <span className="text-purple-400">CREATE INDEX</span> idx_orders_user_id <span className="text-purple-400">ON</span> orders(user_id);
                  </div>

                  <div>
                    <span className="text-muted-foreground/50">-- GIN index for JSONB queries</span><br/>
                    <span className="text-purple-400">CREATE INDEX</span> idx_orders_metadata <span className="text-purple-400">ON</span> orders <span className="text-emerald-400">USING GIN</span> (metadata);
                  </div>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
