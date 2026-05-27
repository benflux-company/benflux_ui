"use client"

import * as React from "react"

import { Clock } from "lucide-react"

import { cn } from "@benflux-ui/utils"

interface TimeValue {
  hour: number
  minute: number
  second?: number
  period?: "AM" | "PM"
}

interface TimePickerProps {
  value?: TimeValue
  onChange?: (value: TimeValue) => void
  showSecond?: boolean
  use12Hours?: boolean
  placeholder?: string
  disabled?: boolean
  className?: string
  minuteStep?: number
  secondStep?: number
}

function pad(n: number) {
  return String(n).padStart(2, "0")
}

function ScrollColumn({
  values,
  selected,
  onSelect,
}: {
  values: number[]
  selected: number
  onSelect: (v: number) => void
}) {
  const ref = React.useRef<HTMLDivElement>(null)

  React.useEffect(() => {
    const el = ref.current?.querySelector(`[data-selected="true"]`) as HTMLElement
    el?.scrollIntoView({ block: "center", behavior: "smooth" })
  }, [selected])

  return (
    <div
      ref={ref}
      className="scrollbar-none flex h-48 snap-y snap-mandatory flex-col items-center overflow-y-auto"
    >
      {values.map((v) => (
        <button
          key={v}
          data-selected={v === selected}
          onClick={() => onSelect(v)}
          className={cn(
            "flex h-8 w-10 shrink-0 snap-center items-center justify-center rounded text-sm transition-colors",
            v === selected
              ? "bg-primary font-medium text-primary-foreground"
              : "text-muted-foreground hover:bg-accent hover:text-foreground",
          )}
        >
          {pad(v)}
        </button>
      ))}
    </div>
  )
}

function TimePicker({
  value,
  onChange,
  showSecond = false,
  use12Hours = false,
  placeholder = "Select time",
  disabled = false,
  className,
  minuteStep = 1,
  secondStep = 1,
}: TimePickerProps) {
  const [open, setOpen] = React.useState(false)
  const [internal, setInternal] = React.useState<TimeValue>({
    hour: 12,
    minute: 0,
    second: 0,
    period: "AM",
  })
  const current = value ?? internal

  const hours = use12Hours
    ? Array.from({ length: 12 }, (_, i) => i + 1)
    : Array.from({ length: 24 }, (_, i) => i)
  const minutes = Array.from({ length: Math.ceil(60 / minuteStep) }, (_, i) => i * minuteStep)
  const seconds = Array.from({ length: Math.ceil(60 / secondStep) }, (_, i) => i * secondStep)

  const update = (patch: Partial<TimeValue>) => {
    const next = { ...current, ...patch }
    setInternal(next)
    onChange?.(next)
  }

  const displayTime =
    value || internal
      ? `${pad(use12Hours && displayTime.hour > 12 ? displayTime.hour - 12 : current.hour)}:${pad(current.minute)}${showSecond ? `:${pad(current.second ?? 0)}` : ""}${use12Hours ? ` ${current.period ?? "AM"}` : ""}`
      : placeholder

  const formatDisplay = () => {
    const h = use12Hours
      ? current.hour > 12
        ? current.hour - 12
        : current.hour || 12
      : current.hour
    return `${pad(h)}:${pad(current.minute)}${showSecond ? `:${pad(current.second ?? 0)}` : ""}${use12Hours ? ` ${current.period ?? "AM"}` : ""}`
  }

  return (
    <div className={cn("relative inline-block", className)}>
      <button
        disabled={disabled}
        onClick={() => setOpen((v) => !v)}
        className={cn(
          "flex h-9 items-center gap-2 rounded-md border border-input bg-background px-3 text-sm shadow-sm transition-colors hover:bg-accent disabled:opacity-50",
          open && "ring-1 ring-ring",
        )}
      >
        <Clock className="h-4 w-4 text-muted-foreground" />
        <span className={cn(!value && !internal ? "text-muted-foreground" : "text-foreground")}>
          {formatDisplay()}
        </span>
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute left-0 top-full z-50 mt-1 rounded-lg border border-border bg-popover shadow-lg">
            <div className="flex divide-x divide-border">
              <div className="flex flex-col">
                <div className="border-b border-border px-3 py-1.5 text-center text-xs font-medium text-muted-foreground">
                  HH
                </div>
                <ScrollColumn
                  values={hours}
                  selected={current.hour}
                  onSelect={(h) => update({ hour: h })}
                />
              </div>
              <div className="flex flex-col">
                <div className="border-b border-border px-3 py-1.5 text-center text-xs font-medium text-muted-foreground">
                  MM
                </div>
                <ScrollColumn
                  values={minutes}
                  selected={current.minute}
                  onSelect={(m) => update({ minute: m })}
                />
              </div>
              {showSecond && (
                <div className="flex flex-col">
                  <div className="border-b border-border px-3 py-1.5 text-center text-xs font-medium text-muted-foreground">
                    SS
                  </div>
                  <ScrollColumn
                    values={seconds}
                    selected={current.second ?? 0}
                    onSelect={(s) => update({ second: s })}
                  />
                </div>
              )}
              {use12Hours && (
                <div className="flex flex-col">
                  <div className="border-b border-border px-3 py-1.5 text-center text-xs font-medium text-muted-foreground">
                    AM/PM
                  </div>
                  <div className="flex flex-col items-center gap-1 p-2">
                    {(["AM", "PM"] as const).map((p) => (
                      <button
                        key={p}
                        onClick={() => update({ period: p })}
                        className={cn(
                          "w-12 rounded px-2 py-1.5 text-sm transition-colors",
                          current.period === p
                            ? "bg-primary text-primary-foreground"
                            : "text-muted-foreground hover:bg-accent",
                        )}
                      >
                        {p}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="flex justify-end gap-2 border-t border-border p-2">
              <button
                onClick={() => setOpen(false)}
                className="rounded px-3 py-1 text-xs text-muted-foreground hover:bg-accent"
              >
                Cancel
              </button>
              <button
                onClick={() => setOpen(false)}
                className="rounded bg-primary px-3 py-1 text-xs text-primary-foreground"
              >
                OK
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export { TimePicker }
export type { TimePickerProps, TimeValue }
