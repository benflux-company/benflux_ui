"use client"

import * as React from "react"

import { GripHorizontal, GripVertical } from "lucide-react"

import { cn } from "@benflux-ui/utils"

export interface SplitterPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  defaultSize?: number
  min?: number
  max?: number
  collapsible?: boolean
  resizable?: boolean
}

export interface SplitterProps extends React.HTMLAttributes<HTMLDivElement> {
  layout?: "horizontal" | "vertical"
  onResize?: (sizes: number[]) => void
  onResizeEnd?: (sizes: number[]) => void
  children: React.ReactElement<SplitterPanelProps>[]
}

export function SplitterPanel({ className, children, ...props }: SplitterPanelProps) {
  return (
    <div className={cn("overflow-auto", className)} {...props}>
      {children}
    </div>
  )
}

export function Splitter({
  layout = "horizontal",
  onResize,
  onResizeEnd,
  className,
  children,
  ...props
}: SplitterProps) {
  const panels = React.Children.toArray(children) as React.ReactElement<SplitterPanelProps>[]
  const count = panels.length

  const getDefaultSizes = () => panels.map((p) => p.props.defaultSize ?? 100 / count)

  const [sizes, setSizes] = React.useState<number[]>(getDefaultSizes)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const dragging = React.useRef<{ index: number; startPos: number; startSizes: number[] } | null>(
    null,
  )

  const isHorizontal = layout === "horizontal"

  const handleMouseDown = (e: React.MouseEvent, index: number) => {
    e.preventDefault()
    dragging.current = {
      index,
      startPos: isHorizontal ? e.clientX : e.clientY,
      startSizes: [...sizes],
    }

    const handleMouseMove = (ev: MouseEvent) => {
      if (!dragging.current || !containerRef.current) return
      const { index: i, startPos, startSizes } = dragging.current
      const containerSize = isHorizontal
        ? containerRef.current.offsetWidth
        : containerRef.current.offsetHeight
      const delta = (((isHorizontal ? ev.clientX : ev.clientY) - startPos) / containerSize) * 100

      const newSizes = [...startSizes]
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const propsA = panels[i]!.props
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const propsB = panels[i + 1]!.props
      const minA = propsA.min ?? 10
      const maxA = propsA.max ?? 90
      const minB = propsB.min ?? 10
      const maxB = propsB.max ?? 90
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const sizeA = startSizes[i]!
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const sizeB = startSizes[i + 1]!

      let nextA = Math.min(maxA, Math.max(minA, sizeA + delta))
      let nextB = Math.min(maxB, Math.max(minB, sizeB - delta))

      const diff = nextA - sizeA
      nextB = sizeB - diff

      if (nextA < minA) {
        nextA = minA
        nextB = sizeA + sizeB - minA
      }
      if (nextB < minB) {
        nextB = minB
        nextA = sizeA + sizeB - minB
      }

      newSizes[i] = nextA
      newSizes[i + 1] = nextB
      setSizes(newSizes)
      onResize?.(newSizes)
    }

    const handleMouseUp = () => {
      if (dragging.current) {
        onResizeEnd?.(sizes)
      }
      dragging.current = null
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseup", handleMouseUp)
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseup", handleMouseUp)
  }

  return (
    <div
      ref={containerRef}
      className={cn("flex overflow-hidden", isHorizontal ? "flex-row" : "flex-col", className)}
      {...props}
    >
      {panels.map((panel, i) => (
        <React.Fragment key={i}>
          <div
            style={{ [isHorizontal ? "width" : "height"]: `${sizes[i]}%`, flexShrink: 0 }}
            className="overflow-auto"
          >
            {panel}
          </div>
          {i < panels.length - 1 && (
            <div
              onMouseDown={(e) => handleMouseDown(e, i)}
              className={cn(
                "group flex shrink-0 select-none items-center justify-center",
                "bg-border/30 hover:bg-primary/20 active:bg-primary/30",
                "cursor-col-resize transition-colors duration-150",
                isHorizontal
                  ? "w-1.5 cursor-col-resize flex-col hover:w-2"
                  : "h-1.5 cursor-row-resize flex-row hover:h-2",
              )}
              role="separator"
              aria-orientation={isHorizontal ? "vertical" : "horizontal"}
            >
              {isHorizontal ? (
                <GripVertical className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              ) : (
                <GripHorizontal className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              )}
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
  )
}
