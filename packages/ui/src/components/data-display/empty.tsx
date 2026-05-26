"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Inbox } from "lucide-react"
import { cn } from "@benflux-ui/utils"

interface EmptyProps {
  title?: string
  description?: string
  icon?: React.ReactNode
  action?: React.ReactNode
  className?: string
  size?: "sm" | "default" | "lg"
  image?: string
}

export function Empty({
  title = "No data",
  description = "There's nothing here yet.",
  icon,
  action,
  className,
  size = "default",
  image,
}: EmptyProps) {
  const sizes = {
    sm: { icon: "h-8 w-8", title: "text-sm", desc: "text-xs", gap: "gap-2" },
    default: { icon: "h-12 w-12", title: "text-base", desc: "text-sm", gap: "gap-3" },
    lg: { icon: "h-16 w-16", title: "text-lg", desc: "text-sm", gap: "gap-4" },
  }
  const s = sizes[size]

  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={cn("flex flex-col items-center justify-center text-center py-12 px-6", s.gap, className)}
    >
      {image ? (
        <img src={image} alt="" className="max-h-40 opacity-60 mb-2" />
      ) : (
        <div className={cn("text-muted-foreground/40", s.icon)}>
          {icon ?? <Inbox className="h-full w-full" />}
        </div>
      )}
      <div className="space-y-1">
        <p className={cn("font-medium text-foreground", s.title)}>{title}</p>
        {description && <p className={cn("text-muted-foreground", s.desc)}>{description}</p>}
      </div>
      {action && <div className="mt-2">{action}</div>}
    </motion.div>
  )
}
