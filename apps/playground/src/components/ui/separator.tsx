"use client"

import * as React from "react"

import * as SeparatorPrimitive from "@radix-ui/react-separator"

import { cn } from "@benflux-ui/utils"

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root> & { label?: string }
>(({ className, orientation = "horizontal", decorative = true, label, ...props }, ref) => {
  if (label) {
    return (
      <div className="flex items-center gap-4">
        <SeparatorPrimitive.Root
          ref={ref}
          decorative={decorative}
          orientation={orientation}
          className={cn(
            "bg-border flex-1 shrink-0",
            orientation === "horizontal" ? "h-px" : "w-px",
            className,
          )}
          {...props}
        />
        <span className="text-muted-foreground whitespace-nowrap text-xs">{label}</span>
        <SeparatorPrimitive.Root
          decorative={decorative}
          orientation={orientation}
          className={cn(
            "bg-border flex-1 shrink-0",
            orientation === "horizontal" ? "h-px" : "w-px",
            className,
          )}
        />
      </div>
    )
  }

  return (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        "bg-border shrink-0",
        orientation === "horizontal" ? "h-px w-full" : "h-full w-px",
        className,
      )}
      {...props}
    />
  )
})
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
