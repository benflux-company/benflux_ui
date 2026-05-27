"use client"

import * as React from "react"

import { cn } from "@benflux-ui/utils"

export interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: string
  label?: string
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, label, id, ...props }, ref) => {
    const textareaId = id ?? React.useId()

    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && (
          <label htmlFor={textareaId} className="text-sm font-medium leading-none">
            {label}
          </label>
        )}
        <textarea
          id={textareaId}
          ref={ref}
          className={cn(
            "border-input bg-background flex min-h-[80px] w-full rounded-md border px-3 py-2 text-sm",
            "ring-offset-background placeholder:text-muted-foreground",
            "focus-visible:ring-ring focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
            "disabled:cursor-not-allowed disabled:opacity-50",
            "resize-none transition-all duration-200",
            error && "border-destructive focus-visible:ring-destructive",
            className,
          )}
          aria-invalid={!!error}
          {...props}
        />
        {error && <p className="text-destructive text-xs">{error}</p>}
      </div>
    )
  },
)
Textarea.displayName = "Textarea"

export { Textarea }
