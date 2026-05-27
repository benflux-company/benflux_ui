"use client"

import * as React from "react"

import { cn } from "@benflux-ui/utils"

interface SegmentedOption {
  label: React.ReactNode
  value: string
  icon?: React.ReactNode
  disabled?: boolean
}

interface SegmentedProps {
  options: SegmentedOption[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  size?: "sm" | "md" | "lg"
  block?: boolean
  disabled?: boolean
  className?: string
}

function Segmented({
  options,
  value,
  defaultValue,
  onChange,
  size = "md",
  block = false,
  disabled = false,
  className,
}: SegmentedProps) {
  const [internal, setInternal] = React.useState(defaultValue ?? options[0]?.value ?? "")
  const current = value !== undefined ? value : internal

  const [indicatorStyle, setIndicatorStyle] = React.useState<React.CSSProperties>({})
  const containerRef = React.useRef<HTMLDivElement>(null)
  const optionRefs = React.useRef<(HTMLButtonElement | null)[]>([])

  React.useEffect(() => {
    const idx = options.findIndex((o) => o.value === current)
    const el = optionRefs.current[idx]
    if (el && containerRef.current) {
      const containerRect = containerRef.current.getBoundingClientRect()
      const elRect = el.getBoundingClientRect()
      setIndicatorStyle({
        width: elRect.width,
        transform: `translateX(${elRect.left - containerRect.left - 4}px)`,
      })
    }
  }, [current, options])

  const select = (val: string) => {
    setInternal(val)
    onChange?.(val)
  }

  const sizeClass = {
    sm: "h-7 px-2.5 text-xs",
    md: "h-8 px-3 text-sm",
    lg: "h-10 px-4 text-base",
  }[size]

  return (
    <div
      ref={containerRef}
      role="group"
      className={cn(
        "relative inline-flex rounded-lg bg-muted p-1",
        block && "flex w-full",
        disabled && "pointer-events-none opacity-50",
        className,
      )}
    >
      {/* Sliding indicator */}
      <div
        className="absolute bottom-1 top-1 rounded-md bg-background shadow-sm transition-all duration-200"
        style={indicatorStyle}
      />

      {options.map((opt, i) => (
        <button
          key={opt.value}
          ref={(el) => {
            optionRefs.current[i] = el
          }}
          role="radio"
          aria-checked={current === opt.value}
          disabled={disabled || opt.disabled}
          onClick={() => select(opt.value)}
          className={cn(
            "relative z-10 flex items-center justify-center gap-1.5 rounded-md font-medium transition-colors duration-150 disabled:opacity-40",
            sizeClass,
            block && "flex-1",
            current === opt.value
              ? "text-foreground"
              : "text-muted-foreground hover:text-foreground",
          )}
        >
          {opt.icon}
          {opt.label}
        </button>
      ))}
    </div>
  )
}

export { Segmented }
export type { SegmentedProps, SegmentedOption }
