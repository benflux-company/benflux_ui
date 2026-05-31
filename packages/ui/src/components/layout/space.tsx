"use client"

import * as React from "react"

import { cn } from "@benflux-ui/utils"

type SpaceSize = "small" | "middle" | "large" | number

const SIZE_MAP: Record<string, string> = {
  small: "gap-2",
  middle: "gap-4",
  large: "gap-6",
}

function resolveGap(size: SpaceSize): string {
  if (typeof size === "number") return ""
  return SIZE_MAP[size as string] ?? "gap-4"
}

function resolveGapStyle(size: SpaceSize): React.CSSProperties {
  if (typeof size === "number") return { gap: size }
  return {}
}

export interface SpaceProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: SpaceSize | [SpaceSize, SpaceSize]
  direction?: "horizontal" | "vertical"
  align?: "start" | "end" | "center" | "baseline"
  wrap?: boolean
  split?: React.ReactNode
}

export function Space({
  size = "small",
  direction = "horizontal",
  align,
  wrap = false,
  split,
  className,
  style,
  children,
  ...props
}: SpaceProps) {
  const sizeX = Array.isArray(size) ? size[0] : size
  const sizeY = Array.isArray(size) ? size[1] : size

  const items = React.Children.toArray(children).filter(Boolean)

  const gapClass = Array.isArray(size) ? "" : resolveGap(size)
  const gapStyle = Array.isArray(size)
    ? {
        columnGap: typeof sizeX === "number" ? sizeX : undefined,
        rowGap: typeof sizeY === "number" ? sizeY : undefined,
      }
    : resolveGapStyle(size)

  return (
    <div
      className={cn(
        "flex",
        direction === "vertical" ? "flex-col" : "flex-row",
        wrap && "flex-wrap",
        align && `items-${align}`,
        gapClass,
        className,
      )}
      style={{ ...gapStyle, ...style }}
      {...props}
    >
      {split
        ? items.map((child, i) => (
            <React.Fragment key={i}>
              {child}
              {i < items.length - 1 && (
                <span className="flex shrink-0 items-center text-border">{split}</span>
              )}
            </React.Fragment>
          ))
        : items}
    </div>
  )
}

// ─── Space.Compact ─────────────────────────────────────────

export interface SpaceCompactProps extends React.HTMLAttributes<HTMLDivElement> {
  direction?: "horizontal" | "vertical"
  size?: "small" | "middle" | "large"
  block?: boolean
}

export function SpaceCompact({
  direction = "horizontal",
  block = false,
  className,
  children,
  ...props
}: SpaceCompactProps) {
  return (
    <div
      className={cn(
        "flex",
        direction === "vertical" ? "flex-col" : "flex-row",
        block ? "w-full" : "inline-flex",
        // Collapse child borders and radii for a grouped look
        "[&>*]:rounded-none",
        direction === "horizontal"
          ? "[&>*:first-child]:rounded-l-md [&>*:last-child]:rounded-r-md [&>*:not(:last-child)]:-mr-px"
          : "[&>*:first-child]:rounded-t-md [&>*:last-child]:rounded-b-md [&>*:not(:last-child)]:-mb-px",
        className,
      )}
      data-space-compact
      {...props}
    >
      {children}
    </div>
  )
}

Space.Compact = SpaceCompact
