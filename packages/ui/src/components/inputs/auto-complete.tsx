"use client"

import * as React from "react"

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
  const listRef = React.useRef<HTMLUListElement>(null)

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
    const v = e.target.value
    updateValue(v)
    onSearch?.(v)
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

  // Close on outside click
  React.useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (!containerRef.current?.contains(e.target as Node)) setOpen(false)
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

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

      {open && (
        <div className="absolute z-50 mt-1 w-full rounded-md border border-border bg-popover shadow-md">
          {loading ? (
            <div className="flex items-center justify-center py-4 text-sm text-muted-foreground">
              <span className="mr-2 animate-spin">⟳</span> Loading…
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-4 text-center text-sm text-muted-foreground">{notFoundContent}</div>
          ) : (
            <ul ref={listRef} className="max-h-60 overflow-y-auto py-1" role="listbox">
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
        </div>
      )}
    </div>
  )
}
