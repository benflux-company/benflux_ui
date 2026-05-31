"use client"

import * as React from "react"

import { cn } from "@benflux-ui/utils"

type FlexJustify =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "normal"
type FlexAlign = "flex-start" | "flex-end" | "center" | "baseline" | "stretch" | "normal"

export interface FlexProps extends React.HTMLAttributes<HTMLDivElement> {
  vertical?: boolean
  wrap?: boolean | "nowrap" | "wrap" | "wrap-reverse"
  justify?: FlexJustify
  align?: FlexAlign
  gap?: number | "small" | "middle" | "large"
  flex?: string | number
  component?: keyof React.JSX.IntrinsicElements
}

const GAP_MAP = { small: 8, middle: 16, large: 24 } as const

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(function Flex(
  {
    vertical = false,
    wrap,
    justify,
    align,
    gap,
    flex,
    component = "div",
    className,
    style,
    children,
    ...props
  },
  ref,
) {
  const gapValue =
    gap !== undefined
      ? typeof gap === "string"
        ? (GAP_MAP[gap as keyof typeof GAP_MAP] ?? 0)
        : gap
      : undefined

  const inlineStyle: React.CSSProperties = {
    display: "flex",
    flexDirection: vertical ? "column" : "row",
    justifyContent: justify,
    alignItems: align,
    gap: gapValue,
    flex,
    flexWrap: typeof wrap === "boolean" ? (wrap ? "wrap" : "nowrap") : wrap,
    ...style,
  }

  const Tag = component as React.ElementType

  return (
    <Tag ref={ref} className={cn(className)} style={inlineStyle} {...props}>
      {children}
    </Tag>
  )
})
