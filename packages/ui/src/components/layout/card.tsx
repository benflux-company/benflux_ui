"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { type VariantProps } from "class-variance-authority"

import { cn, cva } from "@benflux-ui/utils"

const cardVariants = cva(
  "rounded-lg text-card-foreground transition-all duration-300",
  {
    variants: {
      variant: {
        default: "bg-card border border-border shadow-sm",
        glass: "bg-card/60 backdrop-blur-xl border border-white/10 shadow-glass",
        glow: "bg-card border border-primary/20 shadow-glow hover:shadow-glow-lg hover:border-primary/40",
        gradient: "bg-gradient-to-br from-card to-muted border border-border",
        outlined: "bg-transparent border-2 border-border hover:border-primary/50",
        elevated: "bg-card border border-border shadow-lg hover:shadow-xl hover:-translate-y-0.5",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
)

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
  hoverable?: boolean
  animate?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, hoverable = false, animate = false, children, ...props }, ref) => {
    const classes = cn(
      cardVariants({ variant, className }),
      hoverable && "cursor-pointer hover:-translate-y-1 hover:shadow-lg",
    )

    if (animate) {
      return (
        <motion.div
          ref={ref}
          className={classes}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          whileHover={hoverable ? { scale: 1.01 } : undefined}
          {...(props as React.ComponentProps<typeof motion.div>)}
        >
          {children}
        </motion.div>
      )
    }

    return (
      <div ref={ref} className={classes} {...props}>
        {children}
      </div>
    )
  },
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
)
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3
      ref={ref}
      className={cn("text-xl font-semibold leading-none tracking-tight", className)}
      {...props}
    />
  ),
)
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
  ),
)
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
)
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, cardVariants }
