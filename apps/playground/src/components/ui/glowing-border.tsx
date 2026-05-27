"use client"

import { motion } from "framer-motion"

import { cn } from "@benflux-ui/utils"

interface BorderBeamProps {
  className?: string
  size?: number
  duration?: number
  borderWidth?: number
  anchor?: number
  colorFrom?: string
  colorTo?: string
  delay?: number
}

export function BorderBeam({
  className,
  size = 200,
  duration = 15,
  anchor = 90,
  borderWidth = 1.5,
  colorFrom = "hsl(var(--primary))",
  colorTo = "hsl(var(--accent))",
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--anchor": anchor,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
      className={cn(
        "pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent]",
        "![mask-clip:padding-box,border-box] ![mask-composite:intersect]",
        "[mask:linear-gradient(transparent,transparent),linear-gradient(white,white)]",
        "after:animate-border-beam after:absolute after:aspect-square after:w-[calc(var(--size)*1px)]",
        "after:[animation-delay:var(--delay)] after:[background:none]",
        "after:[offset-anchor:calc(var(--anchor)*1%)_50%]",
        "after:[offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]",
        "after:[background:linear-gradient(to_left,var(--color-from),var(--color-to),transparent)]",
        className,
      )}
    />
  )
}

interface GlowingBorderProps extends React.HTMLAttributes<HTMLDivElement> {
  glowColor?: string
  borderRadius?: string
  borderWidth?: number
  animateGlow?: boolean
}

export function GlowingBorder({
  children,
  className,
  glowColor = "hsl(var(--primary))",
  borderRadius = "0.75rem",
  borderWidth = 1,
  animateGlow = true,
  ...props
}: GlowingBorderProps) {
  return (
    <div className={cn("relative", className)} style={{ borderRadius }} {...props}>
      {animateGlow && (
        <motion.div
          className="absolute -inset-0.5 rounded-[inherit] opacity-75 blur-sm"
          style={{ background: glowColor }}
          animate={{ opacity: [0.5, 0.8, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
      <div
        className="bg-background relative rounded-[inherit]"
        style={{ border: `${borderWidth}px solid ${glowColor}33` }}
      >
        {children}
      </div>
    </div>
  )
}
