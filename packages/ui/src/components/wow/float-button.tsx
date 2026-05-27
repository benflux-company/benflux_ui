"use client"

import * as React from "react"

import { ArrowUp, Plus } from "lucide-react"

import { cn } from "@benflux-ui/utils"

interface FloatButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: React.ReactNode
  tooltip?: string
  shape?: "circle" | "square"
  size?: "sm" | "md" | "lg"
  position?: { bottom?: number; right?: number; top?: number; left?: number }
  badge?: number
}

function FloatButton({
  className,
  icon,
  tooltip,
  shape = "circle",
  size = "md",
  position = { bottom: 24, right: 24 },
  badge,
  children,
  ...props
}: FloatButtonProps) {
  const sizeClass = { sm: "h-10 w-10 text-sm", md: "h-12 w-12 text-base", lg: "h-14 w-14 text-lg" }[
    size
  ]
  const shapeClass = shape === "circle" ? "rounded-full" : "rounded-lg"

  return (
    <div className="group fixed z-50" style={position as React.CSSProperties}>
      {tooltip && (
        <span className="pointer-events-none absolute right-full top-1/2 mr-2 -translate-y-1/2 whitespace-nowrap rounded bg-popover px-2 py-1 text-xs text-popover-foreground opacity-0 shadow transition-opacity group-hover:opacity-100">
          {tooltip}
        </span>
      )}
      <button
        className={cn(
          "relative flex items-center justify-center bg-primary text-primary-foreground shadow-lg transition-all hover:scale-105 hover:shadow-xl active:scale-95",
          sizeClass,
          shapeClass,
          className,
        )}
        {...props}
      >
        {badge !== undefined && (
          <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-medium text-white">
            {badge > 99 ? "99+" : badge}
          </span>
        )}
        {icon ?? children ?? <Plus className="h-5 w-5" />}
      </button>
    </div>
  )
}

// Back to top variant
function FloatButtonBackTop({ className, ...props }: Omit<FloatButtonProps, "icon">) {
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  if (!visible) return null

  return (
    <FloatButton
      icon={<ArrowUp className="h-5 w-5" />}
      tooltip="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={className}
      {...props}
    />
  )
}

// Group of float buttons
interface FloatButtonGroupProps {
  trigger?: React.ReactNode
  children: React.ReactNode
  className?: string
  position?: FloatButtonProps["position"]
}

function FloatButtonGroup({
  trigger,
  children,
  className,
  position = { bottom: 24, right: 24 },
}: FloatButtonGroupProps) {
  const [open, setOpen] = React.useState(false)
  const items = React.Children.toArray(children)

  return (
    <div className={cn("fixed z-50", className)} style={position as React.CSSProperties}>
      <div className="flex flex-col-reverse items-center gap-3">
        {open &&
          items.map((child, i) => (
            <div
              key={i}
              className="duration-200 animate-in fade-in slide-in-from-bottom-2"
              style={{ animationDelay: `${i * 40}ms` }}
            >
              {child}
            </div>
          ))}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-all hover:scale-105"
        >
          <Plus className={cn("h-5 w-5 transition-transform duration-200", open && "rotate-45")} />
        </button>
      </div>
    </div>
  )
}

export { FloatButton, FloatButtonBackTop, FloatButtonGroup }
export type { FloatButtonProps }
