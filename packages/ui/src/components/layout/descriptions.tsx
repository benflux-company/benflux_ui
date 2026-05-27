import * as React from "react"

import { cn } from "@benflux-ui/utils"

interface DescriptionsItemProps {
  label: React.ReactNode
  children?: React.ReactNode
  span?: number
  className?: string
}

interface DescriptionsProps {
  title?: React.ReactNode
  extra?: React.ReactNode
  bordered?: boolean
  column?: number
  layout?: "horizontal" | "vertical"
  size?: "sm" | "md" | "lg"
  colon?: boolean
  items?: DescriptionsItemProps[]
  className?: string
  children?: React.ReactNode
}

function DescriptionsItem({ label, children, span = 1, className }: DescriptionsItemProps) {
  return null // rendered by parent
}

function Descriptions({
  title,
  extra,
  bordered = false,
  column = 3,
  layout = "horizontal",
  size = "md",
  colon = true,
  items,
  className,
  children,
}: DescriptionsProps) {
  const resolvedItems: DescriptionsItemProps[] = items ?? []

  // Collect items from children if not provided via items prop
  React.Children.forEach(children, (child) => {
    if (React.isValidElement(child) && child.type === DescriptionsItem) {
      resolvedItems.push(child.props as DescriptionsItemProps)
    }
  })

  const paddingClass = {
    sm: "px-3 py-1.5 text-xs",
    md: "px-4 py-3 text-sm",
    lg: "px-6 py-4 text-base",
  }[size]

  const rows: DescriptionsItemProps[][] = []
  let current: DescriptionsItemProps[] = []
  let currentSpan = 0
  for (const item of resolvedItems) {
    const span = item.span ?? 1
    if (currentSpan + span > column) {
      rows.push(current)
      current = [item]
      currentSpan = span
    } else {
      current.push(item)
      currentSpan += span
    }
  }
  if (current.length) rows.push(current)

  return (
    <div className={cn("w-full", className)}>
      {(title || extra) && (
        <div className="mb-4 flex items-center justify-between">
          {title && <div className="text-base font-semibold text-foreground">{title}</div>}
          {extra && <div>{extra}</div>}
        </div>
      )}

      <div className={cn("w-full", bordered && "overflow-hidden rounded-lg border border-border")}>
        {rows.map((row, ri) => (
          <div
            key={ri}
            className={cn("grid", bordered && ri > 0 && "border-t border-border")}
            style={{
              gridTemplateColumns: `repeat(${column * (layout === "horizontal" ? 2 : 1)}, 1fr)`,
            }}
          >
            {row.map((item, ii) => (
              <React.Fragment key={ii}>
                {layout === "horizontal" ? (
                  <>
                    <div
                      className={cn(
                        paddingClass,
                        "bg-muted/50 font-medium text-muted-foreground",
                        bordered && ii > 0 && "border-l border-border",
                      )}
                      style={{ gridColumn: `span 1` }}
                    >
                      {item.label}
                      {colon ? ":" : ""}
                    </div>
                    <div
                      className={cn(
                        paddingClass,
                        "text-foreground",
                        bordered && "border-l border-border",
                      )}
                      style={{ gridColumn: `span ${(item.span ?? 1) * 2 - 1}` }}
                    >
                      {item.children}
                    </div>
                  </>
                ) : (
                  <div
                    className={cn("flex flex-col", bordered && ii > 0 && "border-l border-border")}
                    style={{ gridColumn: `span ${item.span ?? 1}` }}
                  >
                    <div
                      className={cn(
                        paddingClass,
                        "border-b border-border bg-muted/50 font-medium text-muted-foreground",
                      )}
                    >
                      {item.label}
                      {colon ? ":" : ""}
                    </div>
                    <div className={cn(paddingClass, "text-foreground")}>{item.children}</div>
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export { Descriptions, DescriptionsItem }
export type { DescriptionsProps, DescriptionsItemProps }
