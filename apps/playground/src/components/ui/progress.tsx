"use client"

import * as React from "react"

import * as ProgressPrimitive from "@radix-ui/react-progress"
import { motion } from "framer-motion"

import { cn } from "@benflux-ui/utils"

interface ProgressProps extends React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root> {
  showValue?: boolean
  label?: string
  variant?: "default" | "gradient" | "glow" | "striped"
  size?: "sm" | "default" | "lg"
  animated?: boolean
}

const Progress = React.forwardRef<React.ElementRef<typeof ProgressPrimitive.Root>, ProgressProps>(
  (
    {
      className,
      value = 0,
      showValue = false,
      label,
      variant = "default",
      size = "default",
      animated = true,
      ...props
    },
    ref,
  ) => (
    <div className="w-full space-y-1.5">
      {(label || showValue) && (
        <div className="flex items-center justify-between">
          {label && <span className="text-muted-foreground text-sm">{label}</span>}
          {showValue && <span className="text-sm font-medium">{value}%</span>}
        </div>
      )}
      <ProgressPrimitive.Root
        ref={ref}
        className={cn(
          "bg-secondary relative w-full overflow-hidden rounded-full",
          {
            "h-1.5": size === "sm",
            "h-2.5": size === "default",
            "h-4": size === "lg",
          },
          className,
        )}
        {...props}
      >
        <ProgressPrimitive.Indicator asChild>
          <motion.div
            className={cn("h-full w-full flex-1 origin-left rounded-full", {
              "bg-primary": variant === "default",
              "from-primary bg-gradient-to-r via-purple-500 to-cyan-500": variant === "gradient",
              "bg-primary shadow-glow": variant === "glow",
              "bg-primary bg-[image:repeating-linear-gradient(45deg,transparent,transparent_5px,rgba(255,255,255,.1)_5px,rgba(255,255,255,.1)_10px)] bg-[length:20px_20px]":
                variant === "striped",
            })}
            initial={{ scaleX: 0 }}
            animate={{ scaleX: (value ?? 0) / 100 }}
            transition={{ duration: animated ? 1 : 0, ease: "easeOut" }}
          />
        </ProgressPrimitive.Indicator>
      </ProgressPrimitive.Root>
    </div>
  ),
)
Progress.displayName = ProgressPrimitive.Root.displayName

export { Progress }
