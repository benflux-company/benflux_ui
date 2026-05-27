"use client"

import * as React from "react"

import { cn } from "@benflux-ui/utils"

interface ColorPickerProps {
  value?: string
  defaultValue?: string
  onChange?: (color: string) => void
  presets?: string[]
  showInput?: boolean
  disabled?: boolean
  size?: "sm" | "md" | "lg"
  className?: string
}

const DEFAULT_PRESETS = [
  "#ef4444",
  "#f97316",
  "#eab308",
  "#22c55e",
  "#06b6d4",
  "#3b82f6",
  "#8b5cf6",
  "#ec4899",
  "#6b7280",
  "#000000",
  "#ffffff",
  "#f8fafc",
]

function ColorPicker({
  value,
  defaultValue = "#3b82f6",
  onChange,
  presets = DEFAULT_PRESETS,
  showInput = true,
  disabled = false,
  size = "md",
  className,
}: ColorPickerProps) {
  const [open, setOpen] = React.useState(false)
  const [internal, setInternal] = React.useState(defaultValue)
  const current = value ?? internal

  const update = (color: string) => {
    setInternal(color)
    onChange?.(color)
  }

  const sizeClass = { sm: "h-6 w-6", md: "h-8 w-8", lg: "h-10 w-10" }[size]

  return (
    <div className={cn("relative inline-flex items-center gap-2", className)}>
      <button
        disabled={disabled}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "rounded-md border border-input shadow-sm transition-all hover:scale-105 disabled:opacity-50",
          sizeClass,
          open && "ring-2 ring-ring ring-offset-1",
        )}
        style={{ backgroundColor: current }}
      />

      {showInput && (
        <input
          type="text"
          value={current}
          onChange={(e) => {
            const v = e.target.value
            if (/^#[0-9a-fA-F]{0,6}$/.test(v)) update(v)
          }}
          disabled={disabled}
          className="h-8 w-24 rounded-md border border-input bg-background px-2 font-mono text-xs outline-none focus:ring-1 focus:ring-ring disabled:opacity-50"
        />
      )}

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-full z-50 mt-1 w-56 space-y-3 rounded-lg border border-border bg-popover p-3 shadow-lg">
            {/* Native color input */}
            <div className="flex items-center gap-2">
              <label className="flex-1 text-xs text-muted-foreground">Pick color</label>
              <input
                type="color"
                value={current}
                onChange={(e) => update(e.target.value)}
                className="h-8 w-12 cursor-pointer rounded border border-input bg-transparent"
              />
            </div>

            {/* Presets */}
            {presets.length > 0 && (
              <div>
                <p className="mb-2 text-xs text-muted-foreground">Presets</p>
                <div className="grid grid-cols-6 gap-1.5">
                  {presets.map((color) => (
                    <button
                      key={color}
                      onClick={() => update(color)}
                      className={cn(
                        "h-6 w-6 rounded-md border transition-transform hover:scale-110",
                        current === color
                          ? "border-primary ring-1 ring-primary ring-offset-1"
                          : "border-border",
                      )}
                      style={{ backgroundColor: color }}
                      title={color}
                    />
                  ))}
                </div>
              </div>
            )}

            {/* Hex input */}
            <div className="flex items-center gap-1.5">
              <span className="text-xs text-muted-foreground">Hex</span>
              <input
                type="text"
                value={current}
                onChange={(e) => {
                  const v = e.target.value
                  if (/^#[0-9a-fA-F]{0,6}$/.test(v)) update(v)
                }}
                className="h-7 flex-1 rounded border border-input bg-background px-2 font-mono text-xs outline-none focus:ring-1 focus:ring-ring"
              />
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export { ColorPicker }
export type { ColorPickerProps }
