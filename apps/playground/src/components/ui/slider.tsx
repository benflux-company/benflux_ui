"use client"

import * as React from "react"

import * as SliderPrimitive from "@radix-ui/react-slider"

import { cn } from "@benflux-ui/utils"

interface SliderProps extends React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> {
  showValue?: boolean
  formatValue?: (value: number) => string
  label?: string
}

const Slider = React.forwardRef<React.ElementRef<typeof SliderPrimitive.Root>, SliderProps>(
  (
    { className, showValue, formatValue = (v) => `${v}`, label, value, defaultValue, ...props },
    ref,
  ) => {
    const currentValue = Array.isArray(value)
      ? value
      : Array.isArray(defaultValue)
        ? defaultValue
        : [0]

    return (
      <div className="w-full space-y-2">
        {(label || showValue) && (
          <div className="flex items-center justify-between">
            {label && <span className="text-sm font-medium">{label}</span>}
            {showValue && (
              <span className="text-muted-foreground text-sm">
                {currentValue.map(formatValue).join(" – ")}
              </span>
            )}
          </div>
        )}
        <SliderPrimitive.Root
          ref={ref}
          value={value}
          defaultValue={defaultValue}
          className={cn(
            "group relative flex w-full touch-none select-none items-center",
            className,
          )}
          {...props}
        >
          <SliderPrimitive.Track className="bg-secondary relative h-1.5 w-full grow overflow-hidden rounded-full">
            <SliderPrimitive.Range className="bg-primary absolute h-full" />
          </SliderPrimitive.Track>
          {currentValue.map((_, i) => (
            <SliderPrimitive.Thumb
              key={i}
              className={cn(
                "border-primary bg-background block h-4 w-4 rounded-full border-2 shadow",
                "transition-transform group-hover:scale-110",
                "focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                "disabled:pointer-events-none disabled:opacity-50",
              )}
            />
          ))}
        </SliderPrimitive.Root>
      </div>
    )
  },
)
Slider.displayName = SliderPrimitive.Root.displayName

export { Slider }
