"use client"

import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

export function DetailModal({
  open,
  onOpenChange,
  title,
  subtitle,
  badge,
  children,
  footer,
}: {
  open: boolean
  onOpenChange: (open: boolean) => void
  title: string
  subtitle?: string
  badge?: string
  children: React.ReactNode
  footer?: React.ReactNode
}) {
  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <DialogPrimitive.Portal>
        {/* Backdrop */}
        <DialogPrimitive.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />

        {/* Content Container */}
        <DialogPrimitive.Content className="fixed left-[50%] top-[50%] z-50 grid w-[92vw] max-w-2xl max-h-[85vh] translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-6 sm:p-8 shadow-2xl duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 rounded-2xl overflow-y-auto">
          {/* Header */}
          <div className="flex items-start justify-between gap-4 pb-4 border-b border-border/80">
            <div>
              {badge && (
                <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-muted text-foreground mb-2 border border-border/60">
                  {badge}
                </span>
              )}
              <DialogPrimitive.Title className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                {title}
              </DialogPrimitive.Title>
              {subtitle && (
                <DialogPrimitive.Description className="text-xs sm:text-sm text-muted-foreground mt-1 font-mono">
                  {subtitle}
                </DialogPrimitive.Description>
              )}
            </div>

            <DialogPrimitive.Close className="rounded-lg p-2 text-muted-foreground hover:text-foreground hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400">
              <X className="h-5 w-5" />
              <span className="sr-only">Close</span>
            </DialogPrimitive.Close>
          </div>

          {/* Body Content */}
          <div className="space-y-4 text-sm text-foreground/90 leading-relaxed py-2">
            {children}
          </div>

          {/* Optional Footer */}
          {footer && (
            <div className="pt-4 border-t border-border/80 flex flex-wrap items-center justify-between gap-3 mt-2">
              {footer}
            </div>
          )}
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  )
}
