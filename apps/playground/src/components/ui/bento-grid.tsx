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
        "bg-card border-border border",
        "hover:border-primary/40 hover:shadow-glow transition-all duration-300",
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
      <div className="from-card via-card/80 absolute inset-0 bg-gradient-to-t to-transparent" />

      {/* Content */}
      <div className="relative z-10 mt-auto p-6">
        {icon && (
          <div className="bg-primary/10 border-primary/20 text-primary mb-3 flex h-10 w-10 items-center justify-center rounded-xl border">
            {icon}
          </div>
        )}
        {name && (
          <h3 className="text-foreground mb-1 text-base font-semibold tracking-tight">{name}</h3>
        )}
        {description && <p className="text-muted-foreground line-clamp-2 text-sm">{description}</p>}
        {cta && href && (
          <a
            href={href}
            className="text-primary mt-3 inline-flex items-center text-xs font-medium opacity-0 transition-opacity group-hover:opacity-100"
          >
            {cta} →
          </a>
        )}
      </div>
    </motion.div>
  )
}
