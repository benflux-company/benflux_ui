"use client"

import * as React from "react"
import { createRoot } from "react-dom/client"

import { AnimatePresence, motion } from "framer-motion"
import { AlertCircle, CheckCircle, Info, X, XCircle } from "lucide-react"

import { cn } from "@benflux-ui/utils"

export type NotificationType = "success" | "error" | "warning" | "info"
export type NotificationPlacement =
  | "topLeft"
  | "topRight"
  | "bottomLeft"
  | "bottomRight"
  | "top"
  | "bottom"

export interface NotificationConfig {
  message: React.ReactNode
  description?: React.ReactNode
  type?: NotificationType
  icon?: React.ReactNode
  key?: string
  duration?: number
  placement?: NotificationPlacement
  onClose?: () => void
  onClick?: () => void
  closeIcon?: React.ReactNode
  action?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

interface NotificationItem extends Required<
  Pick<NotificationConfig, "message" | "duration" | "placement">
> {
  id: string
  description?: React.ReactNode
  type?: NotificationType
  icon?: React.ReactNode
  onClose?: () => void
  onClick?: () => void
  closeIcon?: React.ReactNode
  action?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

const ICONS: Record<NotificationType, React.ReactNode> = {
  success: <CheckCircle className="h-5 w-5 text-green-500" />,
  error: <XCircle className="h-5 w-5 text-destructive" />,
  warning: <AlertCircle className="h-5 w-5 text-yellow-500" />,
  info: <Info className="h-5 w-5 text-blue-500" />,
}

const PLACEMENT_CLASSES: Record<NotificationPlacement, string> = {
  topRight: "top-4 right-4 items-end",
  topLeft: "top-4 left-4 items-start",
  bottomRight: "bottom-4 right-4 items-end",
  bottomLeft: "bottom-4 left-4 items-start",
  top: "top-4 left-1/2 -translate-x-1/2 items-center",
  bottom: "bottom-4 left-1/2 -translate-x-1/2 items-center",
}

// ─── Per-placement state ──────────────────────────────────

const placementState: Partial<
  Record<
    NotificationPlacement,
    {
      el: HTMLElement
      root: ReturnType<typeof createRoot>
      items: NotificationItem[]
      setItems: ((items: NotificationItem[]) => void) | null
    }
  >
> = {}

function PlacementContainer({ placement }: { placement: NotificationPlacement }) {
  const [items, setItems] = React.useState<NotificationItem[]>([])

  React.useEffect(() => {
    if (placementState[placement]) placementState[placement]!.setItems = setItems
    return () => {
      if (placementState[placement]) placementState[placement]!.setItems = null
    }
  }, [placement])

  const isBottom = placement.startsWith("bottom")

  return (
    <div
      className={cn(
        "pointer-events-none fixed z-[9998] flex flex-col gap-3",
        PLACEMENT_CLASSES[placement],
      )}
    >
      <AnimatePresence mode="popLayout">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{
              opacity: 0,
              x: placement.endsWith("Right") ? 40 : placement.endsWith("Left") ? -40 : 0,
              y: isBottom ? 20 : -20,
            }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className={cn(
              "pointer-events-auto w-80 max-w-sm rounded-xl border border-border bg-background shadow-xl",
              item.onClick && "cursor-pointer",
              item.className,
            )}
            style={item.style}
            onClick={item.onClick}
          >
            <div className="flex gap-3 p-4">
              {(item.icon ?? (item.type && ICONS[item.type])) && (
                <span className="mt-0.5 shrink-0">{item.icon ?? ICONS[item.type!]}</span>
              )}
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold leading-tight">{item.message}</p>
                {item.description && (
                  <p className="mt-1 text-sm text-muted-foreground">{item.description}</p>
                )}
                {item.action && <div className="mt-3">{item.action}</div>}
              </div>
              <button
                type="button"
                aria-label="Close"
                onClick={(e) => {
                  e.stopPropagation()
                  removeNotification(item.placement, item.id)
                  item.onClose?.()
                }}
                className="shrink-0 self-start rounded p-0.5 text-muted-foreground transition-colors hover:text-foreground"
              >
                {item.closeIcon ?? <X className="h-4 w-4" />}
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

function ensurePlacement(placement: NotificationPlacement) {
  if (placementState[placement]) return
  const el = document.createElement("div")
  el.id = `benflux-notification-${placement}`
  document.body.appendChild(el)
  const root = createRoot(el)
  placementState[placement] = { el, root, items: [], setItems: null }
  root.render(<PlacementContainer placement={placement} />)
}

function removeNotification(placement: NotificationPlacement, id: string) {
  const state = placementState[placement]
  if (!state) return
  state.items = state.items.filter((m) => m.id !== id)
  state.setItems?.(state.items)
}

function openNotification(config: NotificationConfig): () => void {
  if (typeof document === "undefined") return () => {}
  const placement: NotificationPlacement = config.placement ?? "topRight"
  ensurePlacement(placement)

  const state = placementState[placement]!
  const id = config.key ?? `notif-${Date.now()}-${Math.random()}`
  const item: NotificationItem = {
    id,
    message: config.message,
    description: config.description,
    type: config.type,
    icon: config.icon,
    duration: config.duration ?? 4.5,
    placement,
    onClose: config.onClose,
    onClick: config.onClick,
    closeIcon: config.closeIcon,
    action: config.action,
    className: config.className,
    style: config.style,
  }

  state.items = [...state.items.filter((m) => m.id !== id), item]
  state.setItems?.(state.items)

  let timer: ReturnType<typeof setTimeout> | null = null
  const close = () => {
    if (timer) clearTimeout(timer)
    removeNotification(placement, id)
    config.onClose?.()
  }

  if (item.duration !== 0) {
    timer = setTimeout(close, item.duration * 1000)
  }

  return close
}

// ─── Public API ───────────────────────────────────────────

export const notification = {
  open: (config: NotificationConfig) => openNotification(config),
  success: (config: Omit<NotificationConfig, "type">) =>
    openNotification({ ...config, type: "success" }),
  error: (config: Omit<NotificationConfig, "type">) =>
    openNotification({ ...config, type: "error" }),
  warning: (config: Omit<NotificationConfig, "type">) =>
    openNotification({ ...config, type: "warning" }),
  info: (config: Omit<NotificationConfig, "type">) => openNotification({ ...config, type: "info" }),
  destroy: (key?: string) => {
    for (const placement of Object.keys(placementState) as NotificationPlacement[]) {
      const state = placementState[placement]
      if (!state) continue
      state.items = key ? state.items.filter((m) => m.id !== key) : []
      state.setItems?.(state.items)
    }
  },
}
