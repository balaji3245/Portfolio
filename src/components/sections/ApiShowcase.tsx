"use client"

import { motion } from "framer-motion"
import { Code, CheckCircle, ShieldAlert, Key } from "lucide-react"
import { Badge } from "@/components/ui/badge"

export function ApiShowcase() {
  const codeSnippet = `
@router.get("/api/v1/users/{user_id}/orders", response_model=Page[OrderResponse])
@requires_auth(scopes=["orders:read"])
@rate_limit(calls=100, period=60)
async def get_user_orders(
    user_id: UUID,
    current_user: User = Depends(get_current_active_user),
    db: AsyncSession = Depends(get_db),
    status: Optional[OrderStatus] = Query(None),
    sort_by: str = Query("created_at", regex="^(created_at|amount)$"),
    page_params: PaginationParams = Depends()
):
    """
    Retrieve paginated orders for a specific user.
    Uses Redis cache if no filters applied.
    """
    # 1. Authorization check
    if current_user.id != user_id and not current_user.is_superuser:
        raise HTTPException(status_code=403, detail="Not authorized")

    # 2. Check Cache
    cache_key = f"orders:{user_id}:{page_params.page}:{status}"
    if cached := await redis.get(cache_key):
        return json.loads(cached)

    # 3. Database Query (Optimized)
    query = select(Order).where(Order.user_id == user_id)
    if status:
        query = query.where(Order.status == status)
        
    orders = await paginate(db, query.order_by(desc(sort_by)), page_params)
    
    # 4. Set Cache (TTL: 5 mins)
    await redis.setex(cache_key, 300, orders.json())
    
    return orders
  `

  return (
    <section className="py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">API Development Standards</h2>
          <div className="w-20 h-1.5 bg-primary rounded-full mb-8" />
          <p className="text-lg text-muted-foreground max-w-2xl">
            My APIs are built with strict typing, robust authentication, pagination, caching, and rate limiting by default. Here's a realistic example of a production-ready endpoint.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex gap-4">
              <div className="mt-1"><ShieldAlert className="w-6 h-6 text-emerald-500" /></div>
              <div>
                <h3 className="font-bold text-lg mb-1">Security First</h3>
                <p className="text-sm text-muted-foreground">Endpoints are protected by JWT authentication and granular Role-Based Access Control (RBAC) scopes. Users can only access their own data unless they hold superuser privileges.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1"><CheckCircle className="w-6 h-6 text-blue-500" /></div>
              <div>
                <h3 className="font-bold text-lg mb-1">Data Validation</h3>
                <p className="text-sm text-muted-foreground">Using Pydantic/FastAPI for strict request and response validation. Query parameters are sanitized using Regex to prevent injection attacks and ensure data integrity.</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="mt-1"><Key className="w-6 h-6 text-yellow-500" /></div>
              <div>
                <h3 className="font-bold text-lg mb-1">Performance & Caching</h3>
                <p className="text-sm text-muted-foreground">Implemented Redis caching with TTLs for frequent reads. Added Rate Limiting decorators to prevent API abuse and ensure fair resource allocation.</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-4">
              {['FastAPI', 'JWT Auth', 'Redis Caching', 'Rate Limiting', 'Pagination', 'Pydantic'].map(t => (
                <Badge key={t} variant="outline" className="font-mono text-xs bg-background/50">{t}</Badge>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-primary/5 rounded-2xl transform rotate-2" />
            <div className="relative bg-[#1e1e2e] rounded-2xl border border-border shadow-2xl overflow-hidden">
              <div className="flex items-center px-4 py-3 bg-[#181825] border-b border-[#313244]">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#f38ba8]" />
                  <div className="w-3 h-3 rounded-full bg-[#f9e2af]" />
                  <div className="w-3 h-3 rounded-full bg-[#a6e3a1]" />
                </div>
                <div className="flex-1 text-center font-mono text-xs text-[#a6adc8]">api/routes/orders.py</div>
                <Code className="w-4 h-4 text-[#a6adc8]" />
              </div>
              <div className="p-4 overflow-x-auto text-sm font-mono text-[#cdd6f4] leading-relaxed">
                <pre><code>{codeSnippet.trim()}</code></pre>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
