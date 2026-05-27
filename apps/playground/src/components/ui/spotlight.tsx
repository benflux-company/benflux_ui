"use client"

import { useCallback, useRef } from "react"

import { motion, useMotionTemplate, useMotionValue, useSpring } from "framer-motion"

import { cn } from "@benflux-ui/utils"

interface SpotlightCardProps extends React.HTMLAttributes<HTMLDivElement> {
  spotlightColor?: string
  spotlightSize?: number
}

export function SpotlightCard({
  children,
  className,
  spotlightColor = "hsl(var(--primary) / 0.15)",
  spotlightSize = 350,
}: SpotlightCardProps) {
  const ref = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 15, stiffness: 150 }
  const springX = useSpring(mouseX, springConfig)
  const springY = useSpring(mouseY, springConfig)

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return
      const { left, top } = ref.current.getBoundingClientRect()
      mouseX.set(e.clientX - left)
      mouseY.set(e.clientY - top)
    },
    [mouseX, mouseY],
  )

  const background = useMotionTemplate`
    radial-gradient(${spotlightSize}px circle at ${springX}px ${springY}px, ${spotlightColor}, transparent 80%)
  `

  return (
    <div
      ref={ref}
      className={cn(
        "border-border group relative overflow-hidden rounded-xl border",
        "bg-card transition-colors duration-300",
        "hover:border-primary/30",
        className,
      )}
      onMouseMove={handleMouseMove}
    >
      <motion.div
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  )
}

interface SpotlightTextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span"
}

export function SpotlightText({
  children,
  className,
  as: Tag = "h1",
  ...props
}: SpotlightTextProps) {
  return (
    <Tag
      className={cn(
        "animate-spotlight bg-[radial-gradient(ellipse_at_50%_0%,_hsl(var(--primary))_0%,_hsl(var(--foreground))_60%)] bg-clip-text text-transparent",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
