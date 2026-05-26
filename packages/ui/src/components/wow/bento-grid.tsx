"use client"

import { motion } from "framer-motion"
import { cn } from "@benflux-ui/utils"

interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  columns?: 2 | 3 | 4
}

export function BentoGrid({ className, columns = 3, children, ...props }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid gap-4",
        {
          "grid-cols-1 md:grid-cols-2": columns === 2,
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-3": columns === 3,
          "grid-cols-1 md:grid-cols-2 lg:grid-cols-4": columns === 4,
        },
        "auto-rows-[200px]",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  )
}

interface BentoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  name?: string
  description?: string
  icon?: React.ReactNode
  cta?: string
  background?: React.ReactNode
  className?: string
  colSpan?: 1 | 2 | 3
  rowSpan?: 1 | 2 | 3
  href?: string
}

export function BentoCard({
  name,
  description,
  icon,
  cta,
  background,
  className,
  colSpan = 1,
  rowSpan = 1,
  href,
  ...props
}: BentoCardProps) {
  return (
    <motion.div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl",
        "bg-card border border-border",
        "transition-all duration-300 hover:border-primary/40 hover:shadow-glow",
        {
          "col-span-1": colSpan === 1,
          "col-span-1 md:col-span-2": colSpan === 2,
          "col-span-1 md:col-span-3": colSpan === 3,
          "row-span-1": rowSpan === 1,
          "row-span-2": rowSpan === 2,
          "row-span-3": rowSpan === 3,
        },
        className,
      )}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.01 }}
      {...(props as React.ComponentProps<typeof motion.div>)}
    >
      {/* Background */}
      <div className="absolute inset-0">{background}</div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-card via-card/80 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mt-auto p-6">
        {icon && (
          <div className="mb-3 w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
            {icon}
          </div>
        )}
        {name && (
          <h3 className="text-base font-semibold tracking-tight text-foreground mb-1">{name}</h3>
        )}
        {description && (
          <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
        )}
        {cta && href && (
          <a
            href={href}
            className="mt-3 inline-flex items-center text-xs font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity"
          >
            {cta} →
          </a>
        )}
      </div>
    </motion.div>
  )
}
