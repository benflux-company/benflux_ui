"use client"

import { motion } from "framer-motion"
import { cn } from "@benflux-ui/utils"

interface AuroraBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode
  showRadialGradient?: boolean
  colors?: string[]
}

export function AuroraBackground({
  className,
  children,
  showRadialGradient = true,
  colors,
  ...props
}: AuroraBackgroundProps) {
  const defaultColors = colors ?? [
    "#6675f6",
    "#8b5cf6",
    "#3b82f6",
    "#06b6d4",
    "#10b981",
  ]

  const gradientColors = defaultColors.join(", ")

  return (
    <div
      className={cn("relative flex flex-col min-h-screen bg-zinc-950 text-white", className)}
      {...props}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className={cn(
            "absolute -inset-[10px] opacity-50",
            "[--aurora:repeating-linear-gradient(100deg,var(--color-0)_10%,var(--color-1)_15%,var(--color-2)_20%,var(--color-3)_25%,var(--color-4)_30%)]",
            "[background-image:var(--aurora)]",
            "[background-size:300%_200%]",
            "[background-position:50%_50%]",
            "filter blur-[10px] saturate-150",
            "animate-aurora-shift",
          )}
          style={{
            "--color-0": defaultColors[0],
            "--color-1": defaultColors[1],
            "--color-2": defaultColors[2],
            "--color-3": defaultColors[3],
            "--color-4": defaultColors[4],
          } as React.CSSProperties}
        />
        {showRadialGradient && (
          <div className="absolute inset-0 [background:radial-gradient(ellipse_at_100%_0%,rgba(0,0,0,0)_10%,#0f0f1a_70%)]" />
        )}
      </div>
      {children}
    </div>
  )
}
