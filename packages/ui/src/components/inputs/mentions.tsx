"use client"

import * as React from "react"
import { createPortal } from "react-dom"

import { cn } from "@benflux-ui/utils"

export interface MentionOption {
  value: string
  label?: string
  avatar?: string
  description?: string
}

export interface MentionsProps {
  value?: string
  defaultValue?: string
  onChange?: (value: string) => void
  onSelect?: (option: MentionOption, prefix: string) => void
  options: MentionOption[]
  prefix?: string | string[]
  placeholder?: string
  disabled?: boolean
  rows?: number
  className?: string
  style?: React.CSSProperties
  notFoundContent?: React.ReactNode
  filterOption?: boolean | ((input: string, option: MentionOption) => boolean)
  split?: string
}

export function Mentions({
  value: controlledValue,
  defaultValue = "",
  onChange,
  onSelect,
  options,
  prefix = "@",
  placeholder,
  disabled = false,
  rows = 4,
  className,
  style,
  notFoundContent = "No matches",
  filterOption = true,
  split = " ",
}: MentionsProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue)
  const [dropdownState, setDropdownState] = React.useState<{
    visible: boolean
    search: string
    prefix: string
    triggerIndex: number
    position: { top: number; left: number }
  }>({ visible: false, search: "", prefix: "@", triggerIndex: 0, position: { top: 0, left: 0 } })
  const [highlighted, setHighlighted] = React.useState(0)

  const isControlled = controlledValue !== undefined
  const value = isControlled ? controlledValue : internalValue
  const textareaRef = React.useRef<HTMLTextAreaElement>(null)
  const containerRef = React.useRef<HTMLDivElement>(null)
  const [containerRect, setContainerRect] = React.useState<DOMRect | null>(null)
  const [mounted, setMounted] = React.useState(false)
  React.useEffect(() => setMounted(true), [])
  React.useEffect(() => {
    if (!dropdownState.visible || !containerRef.current) {
      setContainerRect(null)
      return
    }
    const update = () => setContainerRect(containerRef.current!.getBoundingClientRect())
    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update, { passive: true })
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [dropdownState.visible])

  const prefixes = Array.isArray(prefix) ? prefix : [prefix]

  const updateValue = (v: string) => {
    if (!isControlled) setInternalValue(v)
    onChange?.(v)
  }

  const getFilteredOptions = () => {
    if (!filterOption) return options
    const search = dropdownState.search.toLowerCase()
    if (typeof filterOption === "function") {
      return options.filter((o) => filterOption(search, o))
    }
    return options.filter(
      (o) =>
        o.value.toLowerCase().includes(search) || (o.label ?? "").toLowerCase().includes(search),
    )
  }

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const text = e.target.value
    updateValue(text)

    const cursor = e.target.selectionStart ?? 0
    const textBefore = text.slice(0, cursor)

    // Find active prefix
    let found = false
    for (const pre of prefixes) {
      const lastIdx = textBefore.lastIndexOf(pre)
      if (lastIdx === -1) continue
      const between = textBefore.slice(lastIdx + pre.length)
      // valid mention: no space after prefix
      if (!between.includes(" ") && !between.includes("\n")) {
        found = true
        // Get caret position for dropdown
        const rect = e.target.getBoundingClientRect()
        setDropdownState({
          visible: true,
          search: between,
          prefix: pre,
          triggerIndex: lastIdx,
          position: { top: rect.bottom - rect.top + 4, left: 0 },
        })
        setHighlighted(0)
        break
      }
    }
    if (!found) setDropdownState((d) => ({ ...d, visible: false }))
  }

  const handleSelect = (opt: MentionOption) => {
    const { prefix: pre, triggerIndex } = dropdownState
    const before = value.slice(0, triggerIndex + pre.length)
    const after = value.slice(triggerIndex + pre.length + dropdownState.search.length)
    const newValue = before + opt.value + split + after
    updateValue(newValue)
    onSelect?.(opt, pre)
    setDropdownState((d) => ({ ...d, visible: false }))
    // Restore focus
    setTimeout(() => {
      const ta = textareaRef.current
      if (!ta) return
      const pos = before.length + opt.value.length + split.length
      ta.focus()
      ta.setSelectionRange(pos, pos)
    }, 0)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!dropdownState.visible) return
    const opts = getFilteredOptions()
    if (e.key === "ArrowDown") {
      e.preventDefault()
      setHighlighted((h) => Math.min(h + 1, opts.length - 1))
    } else if (e.key === "ArrowUp") {
      e.preventDefault()
      setHighlighted((h) => Math.max(h - 1, 0))
    } else if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault()
      const opt = opts[highlighted]
      if (opt) handleSelect(opt)
    } else if (e.key === "Escape") {
      setDropdownState((d) => ({ ...d, visible: false }))
    }
  }

  const filteredOptions = getFilteredOptions()

  return (
    <div ref={containerRef} className={cn("relative w-full", className)} style={style}>
      <textarea
        ref={textareaRef}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        className={cn(
          "flex w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm",
          "placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
          "resize-y transition-colors disabled:cursor-not-allowed disabled:opacity-50",
        )}
      />
      {dropdownState.visible &&
        containerRect &&
        mounted &&
        createPortal(
          <div
            className="absolute z-[9999] min-w-[200px] rounded-md border border-border bg-popover shadow-md"
            style={{
              top: containerRect.bottom + 4 + window.scrollY,
              left: containerRect.left + window.scrollX,
            }}
          >
            {filteredOptions.length === 0 ? (
              <div className="py-4 text-center text-sm text-muted-foreground">
                {notFoundContent}
              </div>
            ) : (
              <ul className="max-h-52 overflow-y-auto py-1" role="listbox">
                {filteredOptions.map((opt, i) => (
                  <li
                    key={opt.value}
                    onMouseDown={(e) => {
                      e.preventDefault()
                      handleSelect(opt)
                    }}
                    onMouseEnter={() => setHighlighted(i)}
                    className={cn(
                      "flex cursor-pointer items-center gap-2.5 px-3 py-2 text-sm",
                      i === highlighted ? "bg-accent" : "hover:bg-accent",
                    )}
                  >
                    {opt.avatar && (
                      <img src={opt.avatar} alt="" className="h-6 w-6 rounded-full object-cover" />
                    )}
                    <div className="min-w-0">
                      <p className="truncate font-medium">{opt.label ?? opt.value}</p>
                      {opt.description && (
                        <p className="truncate text-xs text-muted-foreground">{opt.description}</p>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>,
          document.body,
        )}
    </div>
  )
}
