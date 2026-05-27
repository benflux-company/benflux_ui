"use client"

import * as React from "react"

import { motion } from "framer-motion"

import { cn } from "@benflux-ui/utils"

interface TimelineItem {
  id?: string
  title: string
  description?: string
  date?: string
  icon?: React.ReactNode
  status?: "completed" | "active" | "pending"
  color?: string
}

interface TimelineProps {
  items: TimelineItem[]
  className?: string
  animate?: boolean
  orientation?: "vertical" | "alternate"
}

export function Timeline({
  items,
  className,
  animate = true,
  orientation = "vertical",
}: TimelineProps) {
  const statusColors = {
    completed: "bg-green-500",
    active: "bg-primary",
    pending: "bg-muted-foreground/30",
  }

  return (
    <div className={cn("relative", className)}>
      <div className="bg-border absolute bottom-0 left-4 top-0 w-px" />
      <div className="space-y-6">
        {items.map((item, i) => {
          const Wrapper = animate ? motion.div : React.Fragment
          const wrapperProps = animate
            ? {
                initial: { opacity: 0, x: -20 },
                animate: { opacity: 1, x: 0 },
                transition: { delay: i * 0.1, duration: 0.3 },
              }
            : {}

          const statusColor = item.status ? statusColors[item.status] : statusColors.completed

          return (
            <Wrapper key={item.id ?? i} {...(wrapperProps as Record<string, unknown>)}>
              <div className="relative flex gap-4 pl-10">
                <div
                  className={cn(
                    "border-background absolute left-0 flex h-8 w-8 items-center justify-center rounded-full border-2",
                    item.color ?? statusColor,
                  )}
                >
                  {item.icon ? (
                    <span className="text-xs text-white">{item.icon}</span>
                  ) : (
                    <div className="h-2 w-2 rounded-full bg-white/80" />
                  )}
                </div>
                <div className="flex-1 pb-2">
                  <div className="flex items-start justify-between gap-4">
                    <h4 className="text-sm font-semibold">{item.title}</h4>
                    {item.date && (
                      <time className="text-muted-foreground whitespace-nowrap text-xs">
                        {item.date}
                      </time>
                    )}
                  </div>
                  {item.description && (
                    <p className="text-muted-foreground mt-1 text-sm">{item.description}</p>
                  )}
                </div>
              </div>
            </Wrapper>
          )
        })}
      </div>
    </div>
  )
}
