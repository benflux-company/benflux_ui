"use client"

import * as React from "react"

import * as AvatarPrimitive from "@radix-ui/react-avatar"
import { type VariantProps } from "class-variance-authority"

import { cn, cva } from "@benflux-ui/utils"

const avatarVariants = cva("relative flex shrink-0 overflow-hidden rounded-full", {
  variants: {
    size: {
      xs: "h-6 w-6",
      sm: "h-8 w-8",
      default: "h-10 w-10",
      lg: "h-12 w-12",
      xl: "h-16 w-16",
      "2xl": "h-20 w-20",
    },
    ring: {
      none: "",
      default: "ring-2 ring-background",
      primary: "ring-2 ring-primary ring-offset-2 ring-offset-background",
      glow: "ring-2 ring-primary shadow-glow",
    },
  },
  defaultVariants: {
    size: "default",
    ring: "none",
  },
})

export interface AvatarProps
  extends
    React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Root>,
    VariantProps<typeof avatarVariants> {}

const Avatar = React.forwardRef<React.ElementRef<typeof AvatarPrimitive.Root>, AvatarProps>(
  ({ className, size, ring, ...props }, ref) => (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(avatarVariants({ size, ring }), className)}
      {...props}
    />
  ),
)
Avatar.displayName = AvatarPrimitive.Root.displayName

const AvatarImage = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Image>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Image>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Image
    ref={ref}
    className={cn("aspect-square h-full w-full object-cover", className)}
    {...props}
  />
))
AvatarImage.displayName = AvatarPrimitive.Image.displayName

const AvatarFallback = React.forwardRef<
  React.ElementRef<typeof AvatarPrimitive.Fallback>,
  React.ComponentPropsWithoutRef<typeof AvatarPrimitive.Fallback>
>(({ className, ...props }, ref) => (
  <AvatarPrimitive.Fallback
    ref={ref}
    className={cn(
      "bg-muted text-muted-foreground flex h-full w-full items-center justify-center rounded-full text-sm font-medium uppercase",
      className,
    )}
    {...props}
  />
))
AvatarFallback.displayName = AvatarPrimitive.Fallback.displayName

export interface AvatarGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  max?: number
  size?: VariantProps<typeof avatarVariants>["size"]
}

function AvatarGroup({ children, max, size = "default", className, ...props }: AvatarGroupProps) {
  const avatarArray = React.Children.toArray(children)
  const visibleAvatars = max ? avatarArray.slice(0, max) : avatarArray
  const remaining = max ? avatarArray.length - max : 0

  return (
    <div className={cn("flex -space-x-3", className)} {...props}>
      {visibleAvatars.map((child, i) =>
        React.cloneElement(child as React.ReactElement<AvatarProps>, {
          key: i,
          ring: "default",
          size,
        }),
      )}
      {remaining > 0 && (
        <Avatar size={size} ring="default">
          <AvatarFallback className="bg-muted text-muted-foreground">+{remaining}</AvatarFallback>
        </Avatar>
      )}
    </div>
  )
}

export { Avatar, AvatarImage, AvatarFallback, AvatarGroup, avatarVariants }
