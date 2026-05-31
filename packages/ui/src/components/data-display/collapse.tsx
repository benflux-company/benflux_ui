"use client"

import * as React from "react"

import { AnimatePresence, motion } from "framer-motion"
import { ChevronDown, ChevronRight } from "lucide-react"

import { cn } from "@benflux-ui/utils"

export interface CollapseItem {
  key: string
  label: React.ReactNode
  children: React.ReactNode
  extra?: React.ReactNode
  showArrow?: boolean
  collapsible?: "header" | "icon" | "disabled"
  forceRender?: boolean
}

export interface CollapseProps {
  items: CollapseItem[]
  activeKey?: string | string[]
  defaultActiveKey?: string | string[]
  onChange?: (keys: string[]) => void
  accordion?: boolean
  bordered?: boolean
  size?: "small" | "middle" | "large"
  ghost?: boolean
  expandIcon?: (props: { isActive: boolean }) => React.ReactNode
  expandIconPosition?: "start" | "end"
  className?: string
  style?: React.CSSProperties
}

const SIZE_CLASSES = {
  small: { header: "py-2 px-3 text-sm", content: "px-3 pb-3 text-sm" },
  middle: { header: "py-3 px-4", content: "px-4 pb-4 text-sm" },
  large: { header: "py-4 px-5 text-base", content: "px-5 pb-5" },
}

export function Collapse({
  items,
  activeKey: controlledKey,
  defaultActiveKey = [],
  onChange,
  accordion = false,
  bordered = true,
  size = "middle",
  ghost = false,
  expandIcon,
  expandIconPosition = "start",
  className,
  style,
}: CollapseProps) {
  const normalize = (v?: string | string[]): string[] =>
    v === undefined ? [] : Array.isArray(v) ? v : [v]

  const [internalKeys, setInternalKeys] = React.useState<string[]>(() =>
    normalize(defaultActiveKey),
  )
  const isControlled = controlledKey !== undefined
  const activeKeys = isControlled ? normalize(controlledKey) : internalKeys

  const toggle = (key: string) => {
    let next: string[]
    if (activeKeys.includes(key)) {
      next = activeKeys.filter((k) => k !== key)
    } else {
      next = accordion ? [key] : [...activeKeys, key]
    }
    if (!isControlled) setInternalKeys(next)
    onChange?.(next)
  }

  const sizes = SIZE_CLASSES[size]

  const defaultExpandIcon = ({ isActive }: { isActive: boolean }) =>
    expandIconPosition === "end" ? (
      <ChevronDown
        className={cn(
          "h-4 w-4 text-muted-foreground transition-transform duration-200",
          isActive && "rotate-180",
        )}
      />
    ) : (
      <ChevronRight
        className={cn(
          "h-4 w-4 text-muted-foreground transition-transform duration-200",
          isActive && "rotate-90",
        )}
      />
    )

  const renderIcon = expandIcon ?? defaultExpandIcon

  return (
    <div
      className={cn(
        "w-full",
        !ghost && bordered && "divide-y divide-border rounded-md border border-border",
        !ghost && !bordered && "space-y-2",
        ghost && "space-y-1",
        className,
      )}
      style={style}
    >
      {items.map((item, idx) => {
        const isActive = activeKeys.includes(item.key)
        const disabled = item.collapsible === "disabled"
        const iconOnly = item.collapsible === "icon"

        return (
          <div
            key={item.key}
            className={cn(
              ghost
                ? "rounded-md border border-border"
                : bordered
                  ? ""
                  : "rounded-md border border-border",
            )}
          >
            {/* Header */}
            <div
              role="button"
              tabIndex={disabled ? -1 : 0}
              aria-expanded={isActive}
              aria-disabled={disabled}
              onClick={() => !disabled && !iconOnly && toggle(item.key)}
              onKeyDown={(e) => {
                if ((e.key === "Enter" || e.key === " ") && !disabled && !iconOnly) toggle(item.key)
              }}
              className={cn(
                "flex select-none items-center justify-between",
                sizes.header,
                !disabled && !iconOnly ? "cursor-pointer hover:bg-muted/40" : "",
                disabled ? "cursor-not-allowed opacity-50" : "",
                isActive && !ghost ? "bg-muted/30" : "",
                idx === 0 && !ghost && bordered ? "rounded-t-md" : "",
                !isActive && idx === items.length - 1 && !ghost && bordered ? "rounded-b-md" : "",
              )}
            >
              <div className="flex min-w-0 flex-1 items-center gap-2">
                {expandIconPosition === "start" && (
                  <span
                    onClick={(e) => {
                      if (iconOnly) {
                        e.stopPropagation()
                        toggle(item.key)
                      }
                    }}
                    className={iconOnly ? "cursor-pointer" : ""}
                  >
                    {item.showArrow !== false && renderIcon({ isActive })}
                  </span>
                )}
                <span className="flex-1 truncate font-medium">{item.label}</span>
              </div>
              <div className="flex shrink-0 items-center gap-2">
                {item.extra && <span>{item.extra}</span>}
                {expandIconPosition === "end" && item.showArrow !== false && (
                  <span
                    onClick={(e) => {
                      if (iconOnly) {
                        e.stopPropagation()
                        toggle(item.key)
                      }
                    }}
                  >
                    {renderIcon({ isActive })}
                  </span>
                )}
              </div>
            </div>

            {/* Content */}
            <AnimatePresence initial={false}>
              {(isActive || item.forceRender) && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  style={{ overflow: "hidden" }}
                  className={cn(!isActive && item.forceRender ? "hidden" : "")}
                >
                  <div
                    className={cn(sizes.content, "border-t border-border text-muted-foreground")}
                  >
                    {item.children}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )
      })}
    </div>
  )
}
