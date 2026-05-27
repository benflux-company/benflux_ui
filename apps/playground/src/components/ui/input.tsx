"use client"

import * as React from "react"

import { type VariantProps } from "class-variance-authority"

import { cn, cva } from "@benflux-ui/utils"

const inputVariants = cva(
  [
    "flex w-full rounded-md",
    "text-sm bg-background",
    "ring-offset-background",
    "file:border-0 file:bg-transparent file:text-sm file:font-medium",
    "placeholder:text-muted-foreground",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "transition-all duration-200",
  ],
  {
    variants: {
      variant: {
        default:
          "border border-input px-3 py-2 shadow-sm hover:border-primary/50 focus-visible:border-primary",
        ghost: "border-transparent hover:border-border focus-visible:border-input px-3 py-2",
        filled:
          "bg-muted border-transparent px-3 py-2 focus-visible:bg-background focus-visible:border-ring",
        underline:
          "border-b border-input rounded-none px-0 py-2 focus-visible:border-primary focus-visible:ring-0 focus-visible:ring-offset-0",
      },
      inputSize: {
        sm: "h-7 text-xs",
        default: "h-9",
        lg: "h-10",
        xl: "h-12 text-base",
      },
    },
    defaultVariants: {
      variant: "default",
      inputSize: "default",
    },
  },
)

export interface InputProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  leftElement?: React.ReactNode
  rightElement?: React.ReactNode
  error?: string
  label?: string
  description?: string
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      variant,
      inputSize,
      leftElement,
      rightElement,
      error,
      label,
      description,
      id,
      ...props
    },
    ref,
  ) => {
    const inputId = id ?? React.useId()

    if (!leftElement && !rightElement && !label && !description && !error) {
      return (
        <input
          id={inputId}
          ref={ref}
          className={cn(
            inputVariants({ variant, inputSize, className }),
            error && "border-destructive focus-visible:ring-destructive",
          )}
          aria-invalid={!!error}
          {...props}
        />
      )
    }

    return (
      <div className="flex w-full flex-col gap-1.5">
        {label && (
          <label
            htmlFor={inputId}
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            {label}
          </label>
        )}
        {description && <p className="text-muted-foreground text-xs">{description}</p>}
        <div className="relative flex w-full items-center">
          {leftElement && (
            <div className="text-muted-foreground pointer-events-none absolute left-2.5 flex items-center">
              {leftElement}
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            className={cn(
              inputVariants({ variant, inputSize, className }),
              leftElement && "pl-9",
              rightElement && "pr-9",
              error && "border-destructive focus-visible:ring-destructive",
            )}
            aria-invalid={!!error}
            aria-describedby={error ? `${inputId}-error` : undefined}
            {...props}
          />
          {rightElement && (
            <div className="text-muted-foreground absolute right-2.5 flex items-center">
              {rightElement}
            </div>
          )}
        </div>
        {error && (
          <p id={`${inputId}-error`} className="text-destructive text-xs">
            {error}
          </p>
        )}
      </div>
    )
  },
)

Input.displayName = "Input"

export { Input, inputVariants }
