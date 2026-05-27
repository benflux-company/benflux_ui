"use client"

import * as React from "react"

import { Check, ChevronsUpDown, Search } from "lucide-react"

import { cn } from "@benflux-ui/utils"

import { Popover, PopoverContent, PopoverTrigger } from "../navigation/popover"
import { Button } from "./button"

interface ComboboxOption {
  value: string
  label: string
  description?: string
  icon?: React.ReactNode
  disabled?: boolean
}

interface ComboboxProps {
  options: ComboboxOption[]
  value?: string
  onValueChange?: (value: string) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  className?: string
  disabled?: boolean
  multiple?: false
}

interface MultiComboboxProps {
  options: ComboboxOption[]
  value?: string[]
  onValueChange?: (value: string[]) => void
  placeholder?: string
  searchPlaceholder?: string
  emptyMessage?: string
  className?: string
  disabled?: boolean
  multiple: true
  maxDisplayed?: number
}

export function Combobox({
  options,
  value,
  onValueChange,
  placeholder = "Select...",
  searchPlaceholder = "Search...",
  emptyMessage = "No options found.",
  className,
  disabled,
}: ComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")

  const filtered = options.filter((opt) => opt.label.toLowerCase().includes(search.toLowerCase()))

  const selected = options.find((opt) => opt.value === value)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "w-full justify-between font-normal",
            !selected && "text-muted-foreground",
            className,
          )}
          disabled={disabled}
        >
          {selected ? (
            <span className="flex items-center gap-2">
              {selected.icon}
              {selected.label}
            </span>
          ) : (
            placeholder
          )}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
        <div className="border-border flex items-center border-b px-3">
          <Search className="text-muted-foreground h-4 w-4 shrink-0" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={searchPlaceholder}
            className="placeholder:text-muted-foreground flex h-10 w-full bg-transparent px-3 text-sm outline-none"
          />
        </div>
        <div className="max-h-60 overflow-y-auto p-1">
          {filtered.length === 0 ? (
            <p className="text-muted-foreground py-6 text-center text-sm">{emptyMessage}</p>
          ) : (
            filtered.map((option) => (
              <button
                key={option.value}
                onClick={() => {
                  onValueChange?.(option.value)
                  setOpen(false)
                  setSearch("")
                }}
                disabled={option.disabled}
                className={cn(
                  "flex w-full cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm",
                  "hover:bg-accent hover:text-accent-foreground transition-colors",
                  "disabled:pointer-events-none disabled:opacity-50",
                  value === option.value && "bg-accent text-accent-foreground",
                )}
              >
                <Check
                  className={cn("h-4 w-4", value === option.value ? "opacity-100" : "opacity-0")}
                />
                {option.icon && <span className="shrink-0">{option.icon}</span>}
                <div className="flex-1 text-left">
                  <p>{option.label}</p>
                  {option.description && (
                    <p className="text-muted-foreground text-xs">{option.description}</p>
                  )}
                </div>
              </button>
            ))
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}

export function MultiCombobox({
  options,
  value = [],
  onValueChange,
  placeholder = "Select...",
  searchPlaceholder = "Search...",
  emptyMessage = "No options found.",
  className,
  disabled,
  maxDisplayed = 3,
}: MultiComboboxProps) {
  const [open, setOpen] = React.useState(false)
  const [search, setSearch] = React.useState("")

  const filtered = options.filter((opt) => opt.label.toLowerCase().includes(search.toLowerCase()))

  const toggle = (optValue: string) => {
    const next = value.includes(optValue)
      ? value.filter((v) => v !== optValue)
      : [...value, optValue]
    onValueChange?.(next)
  }

  const displayLabel =
    value.length === 0
      ? placeholder
      : value.length <= maxDisplayed
        ? options
            .filter((o) => value.includes(o.value))
            .map((o) => o.label)
            .join(", ")
        : `${value.length} selected`

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className={cn(
            "w-full justify-between font-normal",
            value.length === 0 && "text-muted-foreground",
            className,
          )}
          disabled={disabled}
        >
          <span className="truncate">{displayLabel}</span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0" align="start">
        <div className="border-border flex items-center border-b px-3">
          <Search className="text-muted-foreground h-4 w-4 shrink-0" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder={searchPlaceholder}
            className="placeholder:text-muted-foreground flex h-10 w-full bg-transparent px-3 text-sm outline-none"
          />
        </div>
        <div className="max-h-60 overflow-y-auto p-1">
          {filtered.length === 0 ? (
            <p className="text-muted-foreground py-6 text-center text-sm">{emptyMessage}</p>
          ) : (
            filtered.map((option) => (
              <button
                key={option.value}
                onClick={() => toggle(option.value)}
                disabled={option.disabled}
                className={cn(
                  "flex w-full cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm",
                  "hover:bg-accent hover:text-accent-foreground transition-colors",
                  "disabled:pointer-events-none disabled:opacity-50",
                )}
              >
                <Check
                  className={cn(
                    "h-4 w-4",
                    value.includes(option.value) ? "opacity-100" : "opacity-0",
                  )}
                />
                {option.icon && <span className="shrink-0">{option.icon}</span>}
                {option.label}
              </button>
            ))
          )}
        </div>
      </PopoverContent>
    </Popover>
  )
}
