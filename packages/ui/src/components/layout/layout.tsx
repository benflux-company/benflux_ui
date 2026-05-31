"use client"

import * as React from "react"

import { ChevronLeft, ChevronRight } from "lucide-react"

import { cn } from "@benflux-ui/utils"

// ─── Layout (root) ────────────────────────────────────────

export interface LayoutProps extends React.HTMLAttributes<HTMLDivElement> {
  hasSider?: boolean
}

export function Layout({ hasSider, className, children, ...props }: LayoutProps) {
  return (
    <div
      className={cn("flex min-h-0 flex-1", hasSider ? "flex-row" : "flex-col", className)}
      {...props}
    >
      {children}
    </div>
  )
}

// ─── Header ───────────────────────────────────────────────

export interface LayoutHeaderProps extends React.HTMLAttributes<HTMLElement> {
  height?: number | string
}

export function Header({ height = 64, className, style, children, ...props }: LayoutHeaderProps) {
  return (
    <header
      className={cn(
        "flex shrink-0 items-center border-b border-border bg-background px-6",
        className,
      )}
      style={{ height, ...style }}
      {...props}
    >
      {children}
    </header>
  )
}

// ─── Content ──────────────────────────────────────────────

export interface LayoutContentProps extends React.HTMLAttributes<HTMLElement> {}

export function Content({ className, children, ...props }: LayoutContentProps) {
  return (
    <main className={cn("flex-1 overflow-auto p-6", className)} {...props}>
      {children}
    </main>
  )
}

// ─── Footer ───────────────────────────────────────────────

export interface LayoutFooterProps extends React.HTMLAttributes<HTMLElement> {
  height?: number | string
}

export function Footer({ height, className, style, children, ...props }: LayoutFooterProps) {
  return (
    <footer
      className={cn(
        "shrink-0 border-t border-border bg-background px-6 py-4 text-center text-sm text-muted-foreground",
        className,
      )}
      style={height ? { height, ...style } : style}
      {...props}
    >
      {children}
    </footer>
  )
}

// ─── Sider ────────────────────────────────────────────────

export interface SiderProps extends React.HTMLAttributes<HTMLElement> {
  width?: number | string
  collapsedWidth?: number | string
  collapsible?: boolean
  collapsed?: boolean
  defaultCollapsed?: boolean
  onCollapse?: (collapsed: boolean) => void
  trigger?: React.ReactNode | null
  breakpoint?: "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
  theme?: "light" | "dark"
  reverseArrow?: boolean
}

const BREAKPOINTS: Record<string, number> = {
  xs: 480,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}

export function Sider({
  width = 200,
  collapsedWidth = 64,
  collapsible = false,
  collapsed: controlledCollapsed,
  defaultCollapsed = false,
  onCollapse,
  trigger,
  breakpoint,
  theme = "light",
  reverseArrow = false,
  className,
  children,
  ...props
}: SiderProps) {
  const [internalCollapsed, setInternalCollapsed] = React.useState(defaultCollapsed)
  const isControlled = controlledCollapsed !== undefined
  const collapsed = isControlled ? controlledCollapsed : internalCollapsed

  React.useEffect(() => {
    if (!breakpoint) return
    const bp = BREAKPOINTS[breakpoint] ?? 768
    const mq = window.matchMedia(`(max-width: ${bp}px)`)
    const handler = (e: MediaQueryListEvent | MediaQueryList) => {
      const val = e.matches
      if (!isControlled) setInternalCollapsed(val)
      onCollapse?.(val)
    }
    mq.addEventListener("change", handler)
    handler(mq)
    return () => mq.removeEventListener("change", handler)
  }, [breakpoint, isControlled, onCollapse])

  const handleToggle = () => {
    const next = !collapsed
    if (!isControlled) setInternalCollapsed(next)
    onCollapse?.(next)
  }

  const currentWidth = collapsed ? collapsedWidth : width

  const Arrow = reverseArrow
    ? collapsed
      ? ChevronRight
      : ChevronLeft
    : collapsed
      ? ChevronRight
      : ChevronLeft

  return (
    <aside
      className={cn(
        "relative flex shrink-0 flex-col overflow-hidden border-r border-border transition-[width] duration-200",
        theme === "dark" ? "bg-neutral-900 text-neutral-100" : "bg-background",
        className,
      )}
      style={{ width: currentWidth }}
      {...props}
    >
      <div className="flex-1 overflow-y-auto overflow-x-hidden">{children}</div>
      {collapsible && (
        <div className="border-t border-border">
          {trigger === null ? null : trigger ? (
            <div onClick={handleToggle} className="cursor-pointer">
              {trigger}
            </div>
          ) : (
            <button
              onClick={handleToggle}
              className={cn(
                "flex w-full items-center justify-center py-3 transition-colors hover:bg-accent",
                theme === "dark" ? "hover:bg-neutral-800" : "",
              )}
              aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            >
              <Arrow className="h-4 w-4" />
            </button>
          )}
        </div>
      )}
    </aside>
  )
}
