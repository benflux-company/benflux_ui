"use client"

import * as React from "react"

import { ChevronDown, ChevronRight } from "lucide-react"

import { cn } from "@benflux-ui/utils"

export interface MenuItem {
  key: string
  label: React.ReactNode
  icon?: React.ReactNode
  children?: MenuItem[]
  disabled?: boolean
  danger?: boolean
  href?: string
}

interface MenuProps {
  items: MenuItem[]
  selectedKey?: string
  openKeys?: string[]
  defaultOpenKeys?: string[]
  onSelect?: (key: string) => void
  onOpenChange?: (keys: string[]) => void
  mode?: "vertical" | "horizontal" | "inline"
  collapsed?: boolean
  className?: string
}

function Menu({
  items,
  selectedKey,
  openKeys: externalOpenKeys,
  defaultOpenKeys = [],
  onSelect,
  onOpenChange,
  mode = "inline",
  collapsed = false,
  className,
}: MenuProps) {
  const [internalOpen, setInternalOpen] = React.useState<string[]>(defaultOpenKeys)
  const openKeys = externalOpenKeys ?? internalOpen

  const toggleOpen = (key: string) => {
    const next = openKeys.includes(key) ? openKeys.filter((k) => k !== key) : [...openKeys, key]
    setInternalOpen(next)
    onOpenChange?.(next)
  }

  return (
    <nav
      className={cn(
        "select-none",
        mode === "inline" && "flex flex-col",
        mode === "horizontal" && "flex flex-row items-center gap-1",
        collapsed && "w-12",
        className,
      )}
    >
      {items.map((item) => (
        <MenuNode
          key={item.key}
          item={item}
          depth={0}
          selectedKey={selectedKey}
          openKeys={openKeys}
          onSelect={onSelect}
          onToggleOpen={toggleOpen}
          mode={mode}
          collapsed={collapsed}
        />
      ))}
    </nav>
  )
}

interface MenuNodeProps {
  item: MenuItem
  depth: number
  selectedKey?: string
  openKeys: string[]
  onSelect?: (key: string) => void
  onToggleOpen: (key: string) => void
  mode: MenuProps["mode"]
  collapsed: boolean
}

function MenuNode({
  item,
  depth,
  selectedKey,
  openKeys,
  onSelect,
  onToggleOpen,
  mode,
  collapsed,
}: MenuNodeProps) {
  const hasChildren = !!item.children?.length
  const isOpen = openKeys.includes(item.key)
  const isSelected = selectedKey === item.key

  const Tag = item.href ? "a" : "button"
  const tagProps = item.href ? { href: item.href } : { type: "button" as const }

  const baseClass = cn(
    "flex w-full items-center gap-2 rounded-md px-3 py-2 text-sm transition-colors",
    depth > 0 && "pl-8",
    isSelected
      ? "bg-primary/10 text-primary font-medium"
      : "text-foreground/70 hover:bg-accent hover:text-foreground",
    item.disabled && "opacity-40 pointer-events-none",
    item.danger && "text-destructive hover:bg-destructive/10",
  )

  return (
    <div>
      <Tag
        {...(tagProps as any)}
        onClick={() => {
          if (hasChildren) onToggleOpen(item.key)
          else onSelect?.(item.key)
        }}
        title={collapsed ? String(item.label) : undefined}
        className={baseClass}
      >
        {item.icon && <span className="h-4 w-4 shrink-0">{item.icon}</span>}
        {!collapsed && <span className="flex-1 text-left">{item.label}</span>}
        {!collapsed &&
          hasChildren &&
          (mode === "inline" ? (
            <ChevronDown
              className={cn("h-3.5 w-3.5 shrink-0 transition-transform", isOpen && "rotate-180")}
            />
          ) : (
            <ChevronRight className="h-3.5 w-3.5 shrink-0" />
          ))}
      </Tag>

      {hasChildren && isOpen && !collapsed && mode === "inline" && (
        <div className="mt-0.5 space-y-0.5">
          {item.children!.map((child) => (
            <MenuNode
              key={child.key}
              item={child}
              depth={depth + 1}
              selectedKey={selectedKey}
              openKeys={openKeys}
              onSelect={onSelect}
              onToggleOpen={onToggleOpen}
              mode={mode}
              collapsed={collapsed}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export { Menu }
export type { MenuProps }
