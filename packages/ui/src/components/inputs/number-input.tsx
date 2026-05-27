import * as React from "react"

import { Minus, Plus } from "lucide-react"

import { cn } from "@benflux-ui/utils"

interface InputNumberProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "onChange" | "value" | "prefix"
> {
  value?: number
  onChange?: (value: number) => void
  min?: number
  max?: number
  step?: number
  precision?: number
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  formatter?: (value: number) => string
  parser?: (value: string) => number
  controls?: boolean
}

function InputNumber({
  className,
  value,
  onChange,
  min = -Infinity,
  max = Infinity,
  step = 1,
  precision,
  prefix,
  suffix,
  formatter,
  parser,
  controls = true,
  disabled,
  ...props
}: InputNumberProps) {
  const [internal, setInternal] = React.useState<number>(value ?? 0)
  const current = value !== undefined ? value : internal

  const clamp = (v: number) => {
    const clamped = Math.min(max, Math.max(min, v))
    if (precision !== undefined) return parseFloat(clamped.toFixed(precision))
    return clamped
  }

  const update = (v: number) => {
    const next = clamp(v)
    setInternal(next)
    onChange?.(next)
  }

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const raw = e.target.value.replace(/[^\d.-]/g, "")
    const parsed = parser ? parser(raw) : parseFloat(raw)
    if (!isNaN(parsed)) update(parsed)
  }

  const displayValue = formatter
    ? formatter(current)
    : precision !== undefined
      ? current.toFixed(precision)
      : String(current)

  return (
    <div
      className={cn(
        "flex h-9 w-full overflow-hidden rounded-md border border-input bg-background text-sm shadow-sm focus-within:ring-1 focus-within:ring-ring",
        disabled && "cursor-not-allowed opacity-50",
        className,
      )}
    >
      {controls && (
        <button
          type="button"
          onClick={() => update(current - step)}
          disabled={disabled || current <= min}
          className="flex h-full items-center justify-center border-r border-input px-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-40"
        >
          <Minus className="h-3 w-3" />
        </button>
      )}
      {prefix && <span className="flex items-center pl-3 text-muted-foreground">{prefix}</span>}
      <input
        type="text"
        inputMode="numeric"
        value={displayValue}
        onChange={handleInput}
        disabled={disabled}
        className="h-full min-w-0 flex-1 bg-transparent px-3 text-center outline-none disabled:cursor-not-allowed"
        {...props}
      />
      {suffix && <span className="flex items-center pr-3 text-muted-foreground">{suffix}</span>}
      {controls && (
        <button
          type="button"
          onClick={() => update(current + step)}
          disabled={disabled || current >= max}
          className="flex h-full items-center justify-center border-l border-input px-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground disabled:opacity-40"
        >
          <Plus className="h-3 w-3" />
        </button>
      )}
    </div>
  )
}

export { InputNumber }
export type { InputNumberProps }
