"use client"

import * as React from "react"
import { createPortal } from "react-dom"

import { Check, ChevronRight, ChevronsUpDown, Search, X } from "lucide-react"

import { cn } from "@benflux-ui/utils"

export interface TreeSelectNode {
  value: string
  label: string
  disabled?: boolean
  checkable?: boolean
  children?: TreeSelectNode[]
}

export interface TreeSelectProps {
  treeData: TreeSelectNode[]
  value?: string | string[]
  defaultValue?: string | string[]
  onChange?: (value: string | string[]) => void
  multiple?: boolean
  placeholder?: string
  disabled?: boolean
  allowClear?: boolean
  showSearch?: boolean
  searchPlaceholder?: string
  treeDefaultExpandAll?: boolean
  treeDefaultExpandedKeys?: string[]
  className?: string
  style?: React.CSSProperties
  notFoundContent?: string
  maxTagCount?: number
}

function flattenTree(nodes: TreeSelectNode[]): TreeSelectNode[] {
  return nodes.flatMap((n) => [n, ...(n.children ? flattenTree(n.children) : [])])
}

function filterTree(nodes: TreeSelectNode[], search: string): TreeSelectNode[] {
  const lower = search.toLowerCase()
  return nodes.reduce<TreeSelectNode[]>((acc, node) => {
    const childrenMatch = node.children ? filterTree(node.children, search) : []
    const selfMatch = node.label.toLowerCase().includes(lower)
    if (selfMatch || childrenMatch.length > 0) {
      acc.push({ ...node, children: childrenMatch.length > 0 ? childrenMatch : node.children })
    }
    return acc
  }, [])
}

function TreeNode({
  node,
  selected,
  multiple,
  expanded,
  onToggleExpand,
  onSelect,
  expandAll,
}: {
  node: TreeSelectNode
  selected: string[]
  multiple: boolean
  expanded: Set<string>
  onToggleExpand: (v: string) => void
  onSelect: (v: string) => void
  expandAll: boolean
}) {
  const hasChildren = (node.children?.length ?? 0) > 0
  const isExpanded = expandAll || expanded.has(node.value)
  const isSelected = selected.includes(node.value)

  return (
    <li>
      <div
        className={cn(
          "flex cursor-pointer items-center gap-1 rounded px-2 py-1.5 text-sm",
          isSelected ? "bg-primary/10 font-medium text-primary" : "hover:bg-accent",
          node.disabled && "cursor-not-allowed opacity-40",
        )}
        onClick={() => {
          if (!node.disabled) onSelect(node.value)
        }}
      >
        {hasChildren ? (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation()
              onToggleExpand(node.value)
            }}
            className="flex h-4 w-4 shrink-0 items-center justify-center transition-transform"
            style={{ transform: isExpanded ? "rotate(90deg)" : "rotate(0deg)" }}
          >
            <ChevronRight className="h-3.5 w-3.5 text-muted-foreground" />
          </button>
        ) : (
          <span className="h-4 w-4 shrink-0" />
        )}
        <span className="flex-1 truncate">{node.label}</span>
        {isSelected && <Check className="h-3.5 w-3.5 shrink-0 text-primary" />}
      </div>
      {hasChildren && isExpanded && (
        <ul className="ml-4 space-y-0.5 border-l border-border pl-2">
          {node.children!.map((child) => (
            <TreeNode
              key={child.value}
              node={child}
              selected={selected}
              multiple={multiple}
              expanded={expanded}
              onToggleExpand={onToggleExpand}
              onSelect={onSelect}
              expandAll={expandAll}
            />
          ))}
        </ul>
      )}
    </li>
  )
}

export function TreeSelect({
  treeData,
  value: controlledValue,
  defaultValue,
  onChange,
  multiple = false,
  placeholder = "Select...",
  disabled = false,
  allowClear = false,
  showSearch = false,
  searchPlaceholder = "Search...",
  treeDefaultExpandAll = false,
  treeDefaultExpandedKeys = [],
  className,
  style,
  notFoundContent = "No data",
  maxTagCount,
}: TreeSelectProps) {
  const normalize = (v?: string | string[]): string[] =>
    v === undefined ? [] : Array.isArray(v) ? v : v === "" ? [] : [v]

  const [internalValue, setInternalValue] = React.useState<string[]>(() => normalize(defaultValue))
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")
  const [expanded, setExpanded] = React.useState<Set<string>>(new Set(treeDefaultExpandedKeys))
  const isControlled = controlledValue !== undefined
  const selected = isControlled ? normalize(controlledValue) : internalValue
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [rect, setRect] = React.useState<DOMRect | null>(null)
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  React.useEffect(() => {
    if (!open || !containerRef.current) {
      setRect(null)
      return
    }
    const update = () => setRect(containerRef.current!.getBoundingClientRect())
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update, { passive: true })
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [open])
  const flat = React.useMemo(() => flattenTree(treeData), [treeData])

  const filtered = React.useMemo(
    () => (search ? filterTree(treeData, search) : treeData),
    [treeData, search],
  )

  const updateValue = (vals: string[]) => {
    if (!isControlled) setInternalValue(vals)
    onChange?.(multiple ? vals : (vals[0] ?? ""))
  }

  const handleSelect = (v: string) => {
    if (multiple) {
      const next = selected.includes(v) ? selected.filter((s) => s !== v) : [...selected, v]
      updateValue(next)
    } else {
      updateValue([v])
      setOpen(false)
    }
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    updateValue([])
  }

  const toggleExpand = (v: string) => {
    setExpanded((prev) => {
      const next = new Set(prev)
      next.has(v) ? next.delete(v) : next.add(v)
      return next
    })
  }

  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const getLabel = (v: string) => flat.find((n) => n.value === v)?.label ?? v

  const displayedTags = maxTagCount !== undefined ? selected.slice(0, maxTagCount) : selected
  const overflow = selected.length - displayedTags.length

  return (
    <div ref={containerRef} className={cn("relative w-full", className)} style={style}>
      <button
        type="button"
        onClick={() => !disabled && setOpen((o) => !o)}
        disabled={disabled}
        className={cn(
          "flex min-h-9 w-full flex-wrap items-center gap-1 rounded-md border border-input bg-background px-3 py-1.5 text-sm shadow-sm",
          "text-left transition-colors focus:outline-none focus:ring-1 focus:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
        )}
      >
        <span className="flex flex-1 flex-wrap gap-1">
          {selected.length === 0 ? (
            <span className="text-muted-foreground">{placeholder}</span>
          ) : multiple ? (
            <>
              {displayedTags.map((v) => (
                <span
                  key={v}
                  className="inline-flex items-center gap-1 rounded-sm bg-accent px-1.5 py-0.5 text-xs"
                >
                  {getLabel(v)}
                  <X
                    className="h-3 w-3 cursor-pointer hover:text-destructive"
                    onClick={(e) => {
                      e.stopPropagation()
                      handleSelect(v)
                    }}
                  />
                </span>
              ))}
              {overflow > 0 && <span className="text-xs text-muted-foreground">+{overflow}</span>}
            </>
          ) : (
            <span>{getLabel(String(selected[0] ?? ""))}</span>
          )}
        </span>
        <span className="ml-auto flex shrink-0 items-center gap-1">
          {allowClear && selected.length > 0 && (
            <X
              className="h-3.5 w-3.5 text-muted-foreground hover:text-foreground"
              onClick={handleClear}
            />
          )}
          <ChevronsUpDown className="h-4 w-4 text-muted-foreground" />
        </span>
      </button>

      {open &&
        rect &&
        mounted &&
        createPortal(
          <div
            className="fixed z-[9999] rounded-md border border-border bg-popover shadow-md"
            style={{
              top: rect.bottom + 4,
              left: rect.left,
              width: rect.width,
            }}
          >
            {showSearch && (
              <div className="border-b border-border p-2">
                <div className="relative">
                  <Search className="absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
                  <input
                    autoFocus
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder={searchPlaceholder}
                    className="h-8 w-full rounded-sm border border-input bg-background pl-8 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-ring"
                  />
                </div>
              </div>
            )}
            {filtered.length === 0 ? (
              <div className="py-4 text-center text-sm text-muted-foreground">
                {notFoundContent}
              </div>
            ) : (
              <ul className="max-h-64 space-y-0.5 overflow-y-auto p-2">
                {filtered.map((node) => (
                  <TreeNode
                    key={node.value}
                    node={node}
                    selected={selected}
                    multiple={multiple}
                    expanded={expanded}
                    onToggleExpand={toggleExpand}
                    onSelect={handleSelect}
                    expandAll={treeDefaultExpandAll}
                  />
                ))}
              </ul>
            )}
          </div>,
          document.body,
        )}
    </div>
  )
}
