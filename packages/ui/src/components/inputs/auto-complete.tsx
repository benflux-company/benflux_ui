"use client"

import * as React from "react"
import { createPortal } from "react-dom"

import { Check, X } from "lucide-react"

import { cn } from "@benflux-ui/utils"

export interface AutoCompleteOption {
  value: string
  label?: string
  disabled?: boolean
}

export interface AutoCompleteProps {
  options: AutoCompleteOption[] | string[]
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  onSelect?: (value: string) => void
  onSearch?: (value: string) => void
  placeholder?: string
  disabled?: boolean
  allowClear?: boolean
  filterOption?: boolean | ((input: string, option: AutoCompleteOption) => boolean)
  className?: string
  style?: React.CSSProperties
  notFoundContent?: React.ReactNode
  loading?: boolean
}

function normalizeOptions(opts: AutoCompleteOption[] | string[]): AutoCompleteOption[] {
  return opts.map((o) => (typeof o === "string" ? { value: o } : o))
}

function useDropdownRect(ref: React.RefObject<HTMLElement | null>, open: boolean) {
  const [rect, setRect] = React.useState<DOMRect | null>(null)
  React.useEffect(() => {
    if (!open || !ref.current) {
      setRect(null)
      return
    }
    const update = () => setRect(ref.current!.getBoundingClientRect())
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update, { passive: true })
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [open, ref])
  return rect
}

export function AutoComplete({
  options,
  value: controlledValue,
  defaultValue = "",
  onChange,
  onSelect,
  onSearch,
  placeholder = "Search...",
  disabled = false,
  allowClear = false,
  filterOption = true,
  className,
  style,
  notFoundContent = "No matches",
  loading = false,
}: AutoCompleteProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue)
  const [open, setOpen] = React.useState(false)
  const [highlighted, setHighlighted] = React.useState(-1)
  const isControlled = controlledValue !== undefined
  const inputValue = isControlled ? controlledValue : internalValue
  const containerRef = React.useRef<HTMLDivElement>(null)
  const rect = useDropdownRect(containerRef, open)
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])

  const normalizedOpts = React.useMemo(() => normalizeOptions(options), [options])

  const filtered = React.useMemo(() => {
    if (!filterOption) return normalizedOpts
    if (typeof filterOption === "function") {
      return normalizedOpts.filter((o) => filterOption(inputValue, o))
    }
    const lower = inputValue.toLowerCase()
    return normalizedOpts.filter((o) => (o.label ?? o.value).toLowerCase().includes(lower))
  }, [normalizedOpts, inputValue, filterOption])

  const updateValue = (v: string) => {
    if (!isControlled) setInternalValue(v)
    onChange?.(v)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateValue(e.target.value)
    onSearch?.(e.target.value)
    setOpen(true)
    setHighlighted(-1)
  }

  const handleSelect = (opt: AutoCompleteOption) => {
    updateValue(opt.value)
    onSelect?.(opt.value)
    setOpen(false)
  }

  const handleClear = () => {
    updateValue("")
    onSearch?.("")
    setOpen(false)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) {
      if (e.key === "ArrowDown") setOpen(true)
      return
    }
    if (e.key === "Escape") {
      setOpen(false)
      return
    }
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setHighlighted((h) => Math.min(h + 1, filtered.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setHighlighted((h) => Math.max(h - 1, 0))
    } else if (e.key === "Enter" && highlighted >= 0) {
      e.preventDefault()
      const opt = filtered[highlighted]
      if (opt && !opt.disabled) handleSelect(opt)
    }
  }

  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  const dropdown =
    open && rect && mounted
      ? createPortal(
          <div
            className="absolute z-[9999] rounded-md border border-border bg-popover shadow-md"
            style={{
              top: rect.bottom + 4 + window.scrollY,
              left: rect.left + window.scrollX,
              width: rect.width,
            }}
          >
            {loading ? (
              <div className="flex items-center justify-center py-4 text-sm text-muted-foreground">
                <span className="mr-2 animate-spin">⟳</span> Loading…
              </div>
            ) : filtered.length === 0 ? (
              <div className="py-4 text-center text-sm text-muted-foreground">
                {notFoundContent}
              </div>
            ) : (
              <ul className="max-h-60 overflow-y-auto py-1" role="listbox">
                {filtered.map((opt, i) => (
                  <li
                    key={opt.value}
                    role="option"
                    aria-selected={inputValue === opt.value}
                    aria-disabled={opt.disabled}
                    onMouseDown={(e) => {
                      e.preventDefault()
                      if (!opt.disabled) handleSelect(opt)
                    }}
                    onMouseEnter={() => setHighlighted(i)}
                    className={cn(
                      "flex cursor-pointer items-center justify-between px-3 py-2 text-sm",
                      i === highlighted && "bg-accent",
                      opt.disabled ? "cursor-not-allowed opacity-40" : "hover:bg-accent",
                    )}
                  >
                    <span>{opt.label ?? opt.value}</span>
                    {inputValue === opt.value && <Check className="h-3.5 w-3.5 text-primary" />}
                  </li>
                ))}
              </ul>
            )}
          </div>,
          document.body,
        )
      : null

  return (
    <div ref={containerRef} className={cn("relative w-full", className)} style={style}>
      <div className="relative">
        <input
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setOpen(true)}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          disabled={disabled}
          className={cn(
            "flex h-9 w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm",
            "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
            "transition-colors disabled:cursor-not-allowed disabled:opacity-50",
            allowClear && inputValue ? "pr-8" : "",
          )}
        />
        {allowClear && inputValue && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
      {dropdown}
    </div>
  )
}
