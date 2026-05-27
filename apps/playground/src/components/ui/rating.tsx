"use client"

import * as React from "react"

import { motion } from "framer-motion"
import { Star } from "lucide-react"

import { cn } from "@benflux-ui/utils"

interface RatingProps {
  value?: number
  defaultValue?: number
  max?: number
  onChange?: (value: number) => void
  readOnly?: boolean
  size?: "sm" | "default" | "lg"
  className?: string
  label?: string
  allowHalf?: boolean
}

export function Rating({
  value,
  defaultValue = 0,
  max = 5,
  onChange,
  readOnly = false,
  size = "default",
  className,
  label,
  allowHalf = false,
}: RatingProps) {
  const [hovered, setHovered] = React.useState<number | null>(null)
  const [internalValue, setInternalValue] = React.useState(defaultValue)

  const currentValue = value ?? internalValue

  const sizeClass = { sm: "h-4 w-4", default: "h-5 w-5", lg: "h-7 w-7" }[size]

  const handleClick = (rating: number) => {
    if (readOnly) return
    setInternalValue(rating)
    onChange?.(rating)
  }

  return (
    <div className={cn("space-y-1", className)}>
      {label && <p className="text-sm font-medium">{label}</p>}
      <div className="flex items-center gap-0.5">
        {Array.from({ length: max }, (_, i) => {
          const starValue = i + 1
          const filled = hovered !== null ? starValue <= hovered : starValue <= currentValue
          return (
            <motion.button
              key={i}
              type="button"
              whileHover={readOnly ? undefined : { scale: 1.2 }}
              whileTap={readOnly ? undefined : { scale: 0.9 }}
              onClick={() => handleClick(starValue)}
              onMouseEnter={() => !readOnly && setHovered(starValue)}
              onMouseLeave={() => setHovered(null)}
              disabled={readOnly}
              className={cn("transition-colors", readOnly && "pointer-events-none cursor-default")}
            >
              <Star
                className={cn(
                  sizeClass,
                  "transition-colors",
                  filled
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-muted-foreground/40 fill-transparent",
                )}
              />
            </motion.button>
          )
        })}
        {!readOnly && currentValue > 0 && (
          <span className="text-muted-foreground ml-2 text-sm">
            {currentValue}/{max}
          </span>
        )}
      </div>
    </div>
  )
}
