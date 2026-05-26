"use client"

import { useCallback, useEffect, useRef } from "react"
import { motion, useMotionTemplate, useMotionValue } from "framer-motion"

import { cn } from "@benflux-ui/utils"

interface MagicCardProps extends React.HTMLAttributes<HTMLDivElement> {
  gradientSize?: number
  gradientColor?: string
  gradientOpacity?: number
  gradientFrom?: string
  gradientTo?: string
}

export function MagicCard({
  children,
  className,
  gradientSize = 200,
  gradientColor = "#262626",
  gradientOpacity = 0.8,
  gradientFrom = "hsl(var(--primary))",
  gradientTo = "hsl(var(--accent))",
}: MagicCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const mouseX = useMotionValue(-gradientSize)
  const mouseY = useMotionValue(-gradientSize)

  const handleMouseMove = useCallback(
    (e: MouseEvent) => {
      if (cardRef.current) {
        const { left, top } = cardRef.current.getBoundingClientRect()
        const clientX = e.clientX
        const clientY = e.clientY
        mouseX.set(clientX - left)
        mouseY.set(clientY - top)
      }
    },
    [mouseX, mouseY],
  )

  const handleMouseLeave = useCallback(() => {
    mouseX.set(-gradientSize)
    mouseY.set(-gradientSize)
  }, [mouseX, mouseY, gradientSize])

  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.addEventListener("mousemove", handleMouseMove)
      cardRef.current.addEventListener("mouseleave", handleMouseLeave)
    }
    return () => {
      if (cardRef.current) {
        cardRef.current.removeEventListener("mousemove", handleMouseMove)
        cardRef.current.removeEventListener("mouseleave", handleMouseLeave)
      }
    }
  }, [handleMouseMove, handleMouseLeave])

  const background = useMotionTemplate`
    radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
      ${gradientFrom},
      ${gradientTo},
      transparent 100%
    )
  `

  const borderBackground = useMotionTemplate`
    radial-gradient(${gradientSize}px circle at ${mouseX}px ${mouseY}px,
      ${gradientFrom},
      ${gradientTo},
      transparent 100%
    )
  `

  return (
    <div
      ref={cardRef}
      className={cn(
        "group relative rounded-xl",
        "bg-gradient-to-br from-background to-muted",
        className,
      )}
    >
      {/* Border gradient */}
      <motion.div
        className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: borderBackground }}
      />
      <div className="relative m-[1px] rounded-xl bg-background">
        {/* Content highlight */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background,
            opacity: gradientOpacity,
          }}
        />
        <div className="relative z-10">{children}</div>
      </div>
    </div>
  )
}
