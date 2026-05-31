"use client"

import * as React from "react"
import { createRoot } from "react-dom/client"

import { AnimatePresence, motion } from "framer-motion"
import { AlertCircle, CheckCircle, Info, Loader2, X, XCircle } from "lucide-react"

import { cn } from "@benflux-ui/utils"

export type MessageType = "success" | "error" | "warning" | "info" | "loading"

export interface MessageConfig {
  content: React.ReactNode
  duration?: number
  icon?: React.ReactNode
  key?: string
  onClose?: () => void
  className?: string
  style?: React.CSSProperties
}

interface MessageItem extends MessageConfig {
  id: string
  type: MessageType
}

// ─── Icons ────────────────────────────────────────────────

const ICONS: Record<MessageType, React.ReactNode> = {
  success: <CheckCircle className="h-4 w-4 text-green-500" />,
  error: <XCircle className="h-4 w-4 text-destructive" />,
  warning: <AlertCircle className="h-4 w-4 text-yellow-500" />,
  info: <Info className="h-4 w-4 text-blue-500" />,
  loading: <Loader2 className="h-4 w-4 animate-spin text-primary" />,
}

// ─── MessageContainer ─────────────────────────────────────

let containerEl: HTMLElement | null = null
let containerRoot: ReturnType<typeof createRoot> | null = null
let messages: MessageItem[] = []
let setState: ((msgs: MessageItem[]) => void) | null = null

function MessageContainer() {
  const [items, setItems] = React.useState<MessageItem[]>([])

  React.useEffect(() => {
    setState = setItems
    return () => {
      setState = null
    }
  }, [])

  return (
    <div className="pointer-events-none fixed left-1/2 top-4 z-[9999] flex -translate-x-1/2 flex-col items-center gap-2">
      <AnimatePresence mode="popLayout">
        {items.map((item) => (
          <motion.div
            key={item.id}
            layout
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className={cn(
              "pointer-events-auto flex items-center gap-2.5 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium shadow-lg",
              item.className,
            )}
            style={item.style}
          >
            {item.icon ?? ICONS[item.type]}
            <span>{item.content}</span>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  )
}

function ensureContainer() {
  if (containerEl) return
  containerEl = document.createElement("div")
  containerEl.id = "benflux-message-container"
  document.body.appendChild(containerEl)
  containerRoot = createRoot(containerEl)
  containerRoot.render(<MessageContainer />)
}

function addMessage(
  type: MessageType,
  config: MessageConfig | React.ReactNode,
  duration?: number,
): () => void {
  if (typeof document === "undefined") return () => {}
  ensureContainer()

  const cfg: MessageConfig =
    typeof config === "object" && config !== null && "content" in (config as MessageConfig)
      ? (config as MessageConfig)
      : { content: config as React.ReactNode, duration }

  const id = cfg.key ?? `msg-${Date.now()}-${Math.random()}`
  const item: MessageItem = { id, type, duration: cfg.duration ?? 3, ...cfg }

  messages = [...messages.filter((m) => m.id !== id), item]
  setState?.(messages)

  let timer: ReturnType<typeof setTimeout> | null = null
  const close = () => {
    if (timer) clearTimeout(timer)
    messages = messages.filter((m) => m.id !== id)
    setState?.(messages)
    item.onClose?.()
  }

  if (item.duration !== 0) {
    timer = setTimeout(close, (item.duration ?? 3) * 1000)
  }

  return close
}

// ─── Public API ───────────────────────────────────────────

export const message = {
  success: (content: React.ReactNode | MessageConfig, duration?: number) =>
    addMessage("success", content, duration),
  error: (content: React.ReactNode | MessageConfig, duration?: number) =>
    addMessage("error", content, duration),
  warning: (content: React.ReactNode | MessageConfig, duration?: number) =>
    addMessage("warning", content, duration),
  info: (content: React.ReactNode | MessageConfig, duration?: number) =>
    addMessage("info", content, duration),
  loading: (content: React.ReactNode | MessageConfig, duration?: number) =>
    addMessage("loading", content, duration),
  destroy: () => {
    messages = []
    setState?.([])
  },
}

// ─── Component version (for SSR-safe mounting inline) ─────

export interface MessageProviderProps {
  children?: React.ReactNode
}

export function MessageProvider({ children }: MessageProviderProps) {
  const [items, setItems] = React.useState<MessageItem[]>([])

  React.useEffect(() => {
    setState = setItems
    return () => {
      if (setState === setItems) setState = null
    }
  }, [])

  return (
    <>
      {children}
      <div className="pointer-events-none fixed left-1/2 top-4 z-[9999] flex -translate-x-1/2 flex-col items-center gap-2">
        <AnimatePresence mode="popLayout">
          {items.map((item) => (
            <motion.div
              key={item.id}
              layout
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className={cn(
                "pointer-events-auto flex items-center gap-2.5 rounded-lg border border-border bg-background px-4 py-2.5 text-sm font-medium shadow-lg",
                item.className,
              )}
              style={item.style}
            >
              {item.icon ?? ICONS[item.type]}
              <span>{item.content}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </>
  )
}
