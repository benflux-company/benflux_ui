"use client"

import * as React from "react"
import { createPortal } from "react-dom"

import { Check, ChevronRight, ChevronsUpDown, X } from "lucide-react"

import { cn } from "@benflux-ui/utils"

export interface CascaderOption {
  value: string
  label: string
  disabled?: boolean
  children?: CascaderOption[]
}

export interface CascaderProps {
  options: CascaderOption[]
  value?: string[]
  defaultValue?: string[]
  onChange?: (value: string[], selectedOptions: CascaderOption[]) => void
  placeholder?: string
  disabled?: boolean
  allowClear?: boolean
  separator?: string
  className?: string
  style?: React.CSSProperties
  notFoundContent?: string
  expandTrigger?: "click" | "hover"
}

function findPath(options: CascaderOption[], value: string[]): CascaderOption[] {
  const result: CascaderOption[] = []
  let current = options
  for (const v of value) {
    const found = current.find((o) => o.value === v)
    if (!found) return result
    result.push(found)
    current = found.children ?? []
  }
  return result
}

function getLabelPath(options: CascaderOption[], value: string[], sep: string): string {
  return findPath(options, value)
    .map((o) => o.label)
    .join(sep)
}

export function Cascader({
  options,
  value: controlledValue,
  defaultValue = [],
  onChange,
  placeholder = "Select...",
  disabled = false,
  allowClear = false,
  separator = " / ",
  className,
  style,
  notFoundContent = "No options",
  expandTrigger = "click",
}: CascaderProps) {
  const [open, setOpen] = React.useState(false)
  const [internalValue, setInternalValue] = React.useState<string[]>(defaultValue)
  const [menuPath, setMenuPath] = React.useState<CascaderOption[][]>([options])
  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : internalValue
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

  React.useEffect(() => {
    if (open) setMenuPath([options])
  }, [open, options])

  const displayLabel = value.length ? getLabelPath(options, value, separator) : ""

  const handleSelect = (opt: CascaderOption, depth: number) => {
    if (opt.disabled) return
    const newPath = [...menuPath.slice(0, depth + 1)]
    if (opt.children?.length) {
      newPath.push(opt.children)
      setMenuPath(newPath)
    } else {
      // leaf — build full value path
      // reconstruct selected ancestors from opened menus
      const selectedValues: string[] = []
      for (let i = 0; i < depth; i++) {
        const menu = menuPath[i]
        if (!menu) continue
        const nextMenu = menuPath[i + 1]
        const selectedInMenu = menu.find(
          (o) => nextMenu === o.children || o.value === (value[i] ?? ""),
        )
        if (selectedInMenu) selectedValues.push(selectedInMenu.value)
      }
      selectedValues.push(opt.value)
      const selectedOptions = findPath(options, selectedValues)
      if (!isControlled) setInternalValue(selectedValues)
      onChange?.(selectedValues, selectedOptions)
      setOpen(false)
    }
  }

  const handleHover = (opt: CascaderOption, depth: number) => {
    if (expandTrigger !== "hover" || !opt.children?.length) return
    const newPath = [...menuPath.slice(0, depth + 1), opt.children]
    setMenuPath(newPath)
  }

  const handleClear = (e: React.MouseEvent) => {
    e.stopPropagation()
    if (!isControlled) setInternalValue([])
    onChange?.([], [])
  }

  // Close on outside click
  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  return (
    <div ref={containerRef} className={cn("relative inline-block w-full", className)} style={style}>
      <button
        type="button"
        onClick={() => !disabled && setOpen((o) => !o)}
        disabled={disabled}
        className={cn(
          "flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 text-sm shadow-sm",
          "transition-colors focus:outline-none focus:ring-1 focus:ring-ring",
          "disabled:cursor-not-allowed disabled:opacity-50",
          open && "ring-1 ring-ring",
        )}
      >
        <span className={cn("truncate", !displayLabel && "text-muted-foreground")}>
          {displayLabel || placeholder}
        </span>
        <span className="ml-2 flex shrink-0 items-center gap-1">
          {allowClear && value.length > 0 && (
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
            className="fixed z-[9999] flex overflow-hidden rounded-md border border-border bg-popover shadow-lg"
            style={{ top: rect.bottom + 4 + window.scrollY, left: rect.left + window.scrollX }}
          >
            {menuPath.map((menu, depth) => (
              <ul
                key={depth}
                className="max-h-60 min-w-[140px] overflow-y-auto border-r border-border py-1 last:border-r-0"
              >
                {menu.length === 0 ? (
                  <li className="px-3 py-2 text-sm text-muted-foreground">{notFoundContent}</li>
                ) : (
                  menu.map((opt) => {
                    const isActive =
                      menuPath[depth + 1] === opt.children || value[depth] === opt.value
                    return (
                      <li
                        key={opt.value}
                        onClick={() => handleSelect(opt, depth)}
                        onMouseEnter={() => handleHover(opt, depth)}
                        className={cn(
                          "flex cursor-pointer items-center justify-between px-3 py-2 text-sm",
                          isActive ? "bg-accent font-medium text-foreground" : "hover:bg-accent",
                          opt.disabled && "cursor-not-allowed opacity-40",
                        )}
                      >
                        <span>{opt.label}</span>
                        {opt.children?.length ? (
                          <ChevronRight className="ml-2 h-3.5 w-3.5 text-muted-foreground" />
                        ) : isActive ? (
                          <Check className="ml-2 h-3.5 w-3.5 text-primary" />
                        ) : null}
                      </li>
                    )
                  })
                )}
              </ul>
            ))}
          </div>,
          document.body,
        )}
    </div>
  )
}
