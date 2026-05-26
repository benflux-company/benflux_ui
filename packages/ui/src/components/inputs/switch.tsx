"use client"

import * as React from "react"
import * as SwitchPrimitive from "@radix-ui/react-switch"
import { cn } from "@benflux-ui/utils"

interface SwitchProps extends React.ComponentPropsWithoutRef<typeof SwitchPrimitive.Root> {
  label?: string
  description?: string
  size?: "sm" | "default" | "lg"
}

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitive.Root>,
  SwitchProps
>(({ className, label, description, size = "default", id, ...props }, ref) => {
  const switchId = id ?? React.useId()

  const switchEl = (
    <SwitchPrimitive.Root
      id={switchId}
      className={cn(
        "peer inline-flex shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent",
        "transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
        {
          "h-4 w-7": size === "sm",
          "h-5 w-9": size === "default",
          "h-6 w-11": size === "lg",
        },
        className,
      )}
      ref={ref}
      {...props}
    >
      <SwitchPrimitive.Thumb
        className={cn(
          "pointer-events-none block rounded-full bg-background shadow-lg",
          "ring-0 transition-transform",
          {
            "h-3 w-3 data-[state=checked]:translate-x-3 data-[state=unchecked]:translate-x-0": size === "sm",
            "h-4 w-4 data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0": size === "default",
            "h-5 w-5 data-[state=checked]:translate-x-5 data-[state=unchecked]:translate-x-0": size === "lg",
          },
        )}
      />
    </SwitchPrimitive.Root>
  )

  if (!label) return switchEl

  return (
    <div className="flex items-center gap-3">
      {switchEl}
      <div className="grid gap-0.5">
        <label htmlFor={switchId} className="text-sm font-medium cursor-pointer leading-none">
          {label}
        </label>
        {description && (
          <p className="text-xs text-muted-foreground">{description}</p>
        )}
      </div>
    </div>
  )
})
Switch.displayName = SwitchPrimitive.Root.displayName

export { Switch }
