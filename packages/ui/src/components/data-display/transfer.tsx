"use client"

import * as React from "react"

import { ChevronLeft, ChevronRight, Search } from "lucide-react"

import { cn } from "@benflux-ui/utils"

export interface TransferItem {
  key: string
  title: string
  description?: string
  disabled?: boolean
}

interface TransferProps {
  dataSource?: TransferItem[]
  targetKeys?: string[]
  selectedKeys?: string[]
  onChange?: (targetKeys: string[], direction: "left" | "right", moveKeys: string[]) => void
  onSelectChange?: (sourceSelectedKeys: string[], targetSelectedKeys: string[]) => void
  titles?: [string, string]
  operations?: [string, string]
  showSearch?: boolean
  searchPlaceholder?: string
  filterOption?: (inputValue: string, item: TransferItem) => boolean
  render?: (item: TransferItem) => React.ReactNode
  disabled?: boolean
  className?: string
}

function Transfer({
  dataSource = [],
  targetKeys: externalTargetKeys,
  selectedKeys: externalSelectedKeys,
  onChange,
  onSelectChange,
  titles = ["Source", "Target"],
  operations = [">", "<"],
  showSearch = false,
  searchPlaceholder = "Search",
  filterOption,
  render,
  disabled = false,
  className,
}: TransferProps) {
  const [internalTargetKeys, setInternalTargetKeys] = React.useState<string[]>([])
  const [leftSelected, setLeftSelected] = React.useState<string[]>([])
  const [rightSelected, setRightSelected] = React.useState<string[]>([])
  const [leftSearch, setLeftSearch] = React.useState("")
  const [rightSearch, setRightSearch] = React.useState("")

  const targetKeys = externalTargetKeys ?? internalTargetKeys

  const sourceItems = dataSource.filter((i) => !targetKeys.includes(i.key))
  const targetItems = dataSource.filter((i) => targetKeys.includes(i.key))

  const filterItems = (items: TransferItem[], search: string) =>
    search
      ? items.filter((i) =>
          filterOption
            ? filterOption(search, i)
            : i.title.toLowerCase().includes(search.toLowerCase()),
        )
      : items

  const moveRight = () => {
    const next = [...targetKeys, ...leftSelected]
    setInternalTargetKeys(next)
    onChange?.(next, "right", leftSelected)
    onSelectChange?.([], rightSelected)
    setLeftSelected([])
  }

  const moveLeft = () => {
    const next = targetKeys.filter((k) => !rightSelected.includes(k))
    setInternalTargetKeys(next)
    onChange?.(next, "left", rightSelected)
    onSelectChange?.(leftSelected, [])
    setRightSelected([])
  }

  const toggleSelect = (key: string, side: "left" | "right") => {
    if (side === "left") {
      setLeftSelected((prev) =>
        prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
      )
    } else {
      setRightSelected((prev) =>
        prev.includes(key) ? prev.filter((k) => k !== key) : [...prev, key],
      )
    }
  }

  const toggleAll = (items: TransferItem[], side: "left" | "right") => {
    const keys = items.filter((i) => !i.disabled).map((i) => i.key)
    if (side === "left") {
      setLeftSelected(leftSelected.length === keys.length ? [] : keys)
    } else {
      setRightSelected(rightSelected.length === keys.length ? [] : keys)
    }
  }

  const renderList = (
    items: TransferItem[],
    side: "left" | "right",
    search: string,
    setSearch: (v: string) => void,
    selected: string[],
  ) => {
    const filtered = filterItems(items, search)
    const allSelected = filtered.filter((i) => !i.disabled).every((i) => selected.includes(i.key))

    return (
      <div className="flex w-56 flex-col rounded-lg border border-border bg-background">
        <div className="border-b border-border px-3 py-2.5">
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={allSelected && filtered.length > 0}
              onChange={() => toggleAll(filtered, side)}
              disabled={disabled || filtered.length === 0}
              className="h-3.5 w-3.5 accent-primary"
            />
            <span className="flex-1 text-sm font-medium text-foreground">
              {titles[side === "left" ? 0 : 1]}
            </span>
            <span className="text-xs text-muted-foreground">
              {selected.length}/{items.length}
            </span>
          </div>
          {showSearch && (
            <div className="relative mt-2">
              <Search className="absolute left-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder={searchPlaceholder}
                className="h-7 w-full rounded border border-input bg-muted pl-7 pr-2 text-xs outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
          )}
        </div>
        <ul className="flex-1 overflow-y-auto">
          {filtered.map((item) => (
            <li
              key={item.key}
              onClick={() => !disabled && !item.disabled && toggleSelect(item.key, side)}
              className={cn(
                "flex cursor-pointer items-center gap-2 px-3 py-2 text-sm transition-colors hover:bg-accent",
                item.disabled && "cursor-not-allowed opacity-40",
                selected.includes(item.key) && "bg-primary/5",
              )}
            >
              <input
                type="checkbox"
                checked={selected.includes(item.key)}
                disabled={disabled || item.disabled}
                onChange={() => {}}
                className="h-3.5 w-3.5 accent-primary"
              />
              <div className="min-w-0">
                <div className="truncate font-medium">{render ? render(item) : item.title}</div>
                {item.description && (
                  <div className="truncate text-xs text-muted-foreground">{item.description}</div>
                )}
              </div>
            </li>
          ))}
          {filtered.length === 0 && (
            <li className="flex items-center justify-center py-6 text-sm text-muted-foreground">
              No data
            </li>
          )}
        </ul>
      </div>
    )
  }

  return (
    <div className={cn("flex items-start gap-3", className)}>
      {renderList(sourceItems, "left", leftSearch, setLeftSearch, leftSelected)}

      <div className="flex flex-col gap-2 pt-16">
        <button
          onClick={moveRight}
          disabled={disabled || leftSelected.length === 0}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-40"
        >
          {operations[0]}
        </button>
        <button
          onClick={moveLeft}
          disabled={disabled || rightSelected.length === 0}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-background text-sm text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-40"
        >
          {operations[1]}
        </button>
      </div>

      {renderList(targetItems, "right", rightSearch, setRightSearch, rightSelected)}
    </div>
  )
}

export { Transfer }
export type { TransferProps, TransferItem }
