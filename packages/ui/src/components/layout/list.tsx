import * as React from "react"

import { cn } from "@benflux-ui/utils"

// ─── List ───────────────────────────────────────────────────────────────────

interface ListProps<T> {
  dataSource?: T[]
  renderItem?: (item: T, index: number) => React.ReactNode
  header?: React.ReactNode
  footer?: React.ReactNode
  bordered?: boolean
  split?: boolean
  grid?: { columns?: number; gap?: number }
  loading?: boolean
  locale?: { emptyText?: React.ReactNode }
  className?: string
  children?: React.ReactNode
}

function List<T>({
  dataSource,
  renderItem,
  header,
  footer,
  bordered = false,
  split = true,
  grid,
  loading,
  locale,
  className,
  children,
}: ListProps<T>) {
  const items = dataSource && renderItem ? dataSource.map((item, i) => renderItem(item, i)) : null

  return (
    <div className={cn("w-full", bordered && "rounded-lg border border-border", className)}>
      {header && (
        <div
          className={cn(
            "px-4 py-3 text-sm font-medium text-muted-foreground",
            bordered && "border-b border-border",
          )}
        >
          {header}
        </div>
      )}

      {loading ? (
        <div className="flex items-center justify-center py-10">
          <div className="h-6 w-6 animate-spin rounded-full border-2 border-primary border-t-transparent" />
        </div>
      ) : items?.length === 0 || (children === undefined && items?.length === 0) ? (
        <div className="flex items-center justify-center py-10 text-sm text-muted-foreground">
          {locale?.emptyText ?? "No data"}
        </div>
      ) : grid ? (
        <div
          className="p-4"
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${grid.columns ?? 3}, 1fr)`,
            gap: grid.gap ?? 16,
          }}
        >
          {items ?? children}
        </div>
      ) : (
        <ul className={cn(split && "divide-y divide-border")}>{items ?? children}</ul>
      )}

      {footer && (
        <div
          className={cn(
            "px-4 py-3 text-sm text-muted-foreground",
            bordered && "border-t border-border",
          )}
        >
          {footer}
        </div>
      )}
    </div>
  )
}

// ─── ListItem ───────────────────────────────────────────────────────────────

interface ListItemProps extends Omit<React.LiHTMLAttributes<HTMLLIElement>, "title"> {
  avatar?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  extra?: React.ReactNode
  actions?: React.ReactNode[]
}

function ListItem({
  className,
  avatar,
  title,
  description,
  extra,
  actions,
  children,
  ...props
}: ListItemProps) {
  return (
    <li className={cn("flex items-start gap-4 px-4 py-4", className)} {...props}>
      {avatar && <div className="shrink-0">{avatar}</div>}
      <div className="min-w-0 flex-1">
        {title && <div className="font-medium text-foreground">{title}</div>}
        {description && <div className="mt-0.5 text-sm text-muted-foreground">{description}</div>}
        {children}
        {actions && actions.length > 0 && (
          <div className="mt-2 flex items-center gap-3">
            {actions.map((action, i) => (
              <span key={i} className="text-sm">
                {action}
              </span>
            ))}
          </div>
        )}
      </div>
      {extra && <div className="shrink-0">{extra}</div>}
    </li>
  )
}

function ListItemMeta({
  avatar,
  title,
  description,
  className,
}: {
  avatar?: React.ReactNode
  title?: React.ReactNode
  description?: React.ReactNode
  className?: string
}) {
  return (
    <div className={cn("flex items-start gap-3", className)}>
      {avatar && <div className="shrink-0">{avatar}</div>}
      <div className="min-w-0">
        {title && <div className="font-medium text-foreground">{title}</div>}
        {description && <div className="text-sm text-muted-foreground">{description}</div>}
      </div>
    </div>
  )
}

export { List, ListItem, ListItemMeta }
export type { ListProps, ListItemProps }
