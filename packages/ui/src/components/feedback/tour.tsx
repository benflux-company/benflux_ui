"use client"

import * as React from "react"
import { createPortal } from "react-dom"

import { X } from "lucide-react"

import { cn } from "@benflux-ui/utils"

export interface TourStep {
  title: React.ReactNode
  description?: React.ReactNode
  target?: () => HTMLElement | null
  placement?: "top" | "bottom" | "left" | "right" | "center"
  cover?: React.ReactNode
}

interface TourProps {
  steps: TourStep[]
  open?: boolean
  current?: number
  defaultCurrent?: number
  onChange?: (current: number) => void
  onClose?: () => void
  onFinish?: () => void
  mask?: boolean
  className?: string
}

function Tour({
  steps,
  open = false,
  current: externalCurrent,
  defaultCurrent = 0,
  onChange,
  onClose,
  onFinish,
  mask = true,
}: TourProps) {
  const [internalCurrent, setInternalCurrent] = React.useState(defaultCurrent)
  const current = externalCurrent ?? internalCurrent
  const step = steps[current]

  const [popoverStyle, setPopoverStyle] = React.useState<React.CSSProperties>({})
  const [highlightStyle, setHighlightStyle] = React.useState<React.CSSProperties>({})
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  React.useEffect(() => {
    if (!open || !step) return

    const el = step.target?.()
    if (!el) {
      // Center placement
      setPopoverStyle({
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      })
      setHighlightStyle({})
      return
    }

    const rect = el.getBoundingClientRect()
    const pad = 8
    setHighlightStyle({
      position: "fixed",
      top: rect.top - pad,
      left: rect.left - pad,
      width: rect.width + pad * 2,
      height: rect.height + pad * 2,
      borderRadius: 8,
    })

    const placement = step.placement ?? "bottom"
    const popoverWidth = 300
    let top = 0,
      left = 0

    switch (placement) {
      case "bottom":
        top = rect.bottom + 12
        left = rect.left + rect.width / 2 - popoverWidth / 2
        break
      case "top":
        top = rect.top - 12 - 200
        left = rect.left + rect.width / 2 - popoverWidth / 2
        break
      case "right":
        top = rect.top + rect.height / 2 - 100
        left = rect.right + 12
        break
      case "left":
        top = rect.top + rect.height / 2 - 100
        left = rect.left - popoverWidth - 12
        break
      default:
        top = rect.bottom + 12
        left = rect.left + rect.width / 2 - popoverWidth / 2
    }

    setPopoverStyle({
      position: "fixed",
      top: Math.max(8, Math.min(top, window.innerHeight - 220)),
      left: Math.max(8, Math.min(left, window.innerWidth - popoverWidth - 8)),
      width: popoverWidth,
    })
  }, [open, current, step])

  const go = (i: number) => {
    setInternalCurrent(i)
    onChange?.(i)
  }

  const close = () => {
    onClose?.()
  }
  const finish = () => {
    onFinish?.()
    close()
  }

  if (!open || !step || !mounted) return null

  return createPortal(
    <>
      {/* Mask */}
      {mask && (
        <div
          className="fixed inset-0 z-[200] bg-black/50"
          style={{
            WebkitMaskImage: highlightStyle.width
              ? `radial-gradient(ellipse ${Number(highlightStyle.width) + 4}px ${Number(highlightStyle.height) + 4}px at ${Number(highlightStyle.left) + Number(highlightStyle.width) / 2}px ${Number(highlightStyle.top) + Number(highlightStyle.height) / 2}px, transparent 100%, black 100%)`
              : undefined,
          }}
        />
      )}

      {/* Highlight ring */}
      {highlightStyle.width && (
        <div
          className="pointer-events-none fixed z-[201] rounded-lg border-2 border-primary shadow-[0_0_0_4px_rgba(var(--primary)/0.2)]"
          style={highlightStyle}
        />
      )}

      {/* Popover */}
      <div
        className="z-[202] rounded-xl border border-border bg-popover shadow-xl"
        style={popoverStyle}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-4 pb-2 pt-4">
          <h4 className="font-semibold text-foreground">{step.title}</h4>
          <button
            onClick={close}
            className="rounded p-1 text-muted-foreground hover:bg-accent hover:text-foreground"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {step.cover && <div className="overflow-hidden px-4">{step.cover}</div>}

        {step.description && (
          <p className="px-4 pb-3 text-sm text-muted-foreground">{step.description}</p>
        )}

        {/* Footer */}
        <div className="flex items-center justify-between border-t border-border px-4 py-3">
          <span className="text-xs text-muted-foreground">
            {current + 1} / {steps.length}
          </span>
          <div className="flex gap-2">
            {current > 0 && (
              <button
                onClick={() => go(current - 1)}
                className="rounded-md border border-border px-3 py-1.5 text-xs text-foreground hover:bg-accent"
              >
                Previous
              </button>
            )}
            {current < steps.length - 1 ? (
              <button
                onClick={() => go(current + 1)}
                className="rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground hover:bg-primary/90"
              >
                Next
              </button>
            ) : (
              <button
                onClick={finish}
                className="rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground hover:bg-primary/90"
              >
                Finish
              </button>
            )}
          </div>
        </div>
      </div>
    </>,
    document.body,
  )
}

export { Tour }
export type { TourProps }
