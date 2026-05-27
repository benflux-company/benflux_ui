"use client"

import { type VariantProps, cva } from "class-variance-authority"
import { motion } from "framer-motion"

import { cn } from "@benflux-ui/utils"

const spinnerVariants = cva("animate-spin rounded-full border-2 border-transparent", {
  variants: {
    variant: {
      default: "border-t-primary border-r-primary",
      white: "border-t-white border-r-white",
      muted: "border-t-muted-foreground border-r-muted-foreground",
    },
    size: {
      xs: "h-3 w-3",
      sm: "h-4 w-4",
      default: "h-6 w-6",
      lg: "h-8 w-8",
      xl: "h-12 w-12",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
})

interface SpinnerProps extends VariantProps<typeof spinnerVariants> {
  className?: string
  label?: string
}

export function Spinner({ className, variant, size, label }: SpinnerProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div
        className={cn(spinnerVariants({ variant, size }), className)}
        role="status"
        aria-label={label ?? "Loading..."}
      />
      {label && <p className="text-muted-foreground animate-pulse text-sm">{label}</p>}
    </div>
  )
}

interface LoadingOverlayProps {
  loading: boolean
  children: React.ReactNode
  label?: string
  blur?: boolean
}

export function LoadingOverlay({ loading, children, label, blur = true }: LoadingOverlayProps) {
  return (
    <div className="relative">
      {children}
      {loading && (
        <motion.div
          className={cn(
            "absolute inset-0 flex items-center justify-center rounded-[inherit]",
            "bg-background/70 z-50",
            blur && "backdrop-blur-sm",
          )}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <Spinner label={label} />
        </motion.div>
      )}
    </div>
  )
}

export function DotsSpinner({ className }: { className?: string }) {
  return (
    <div className={cn("flex items-center gap-1.5", className)}>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="bg-primary h-2 w-2 rounded-full"
          animate={{ y: [0, -6, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </div>
  )
}
