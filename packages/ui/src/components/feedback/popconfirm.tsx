"use client"

import * as React from "react"

import { AlertCircle } from "lucide-react"

import { cn } from "@benflux-ui/utils"

import { Button } from "../inputs/button"
import { Popover, PopoverContent, PopoverTrigger } from "../navigation/popover"

export interface PopconfirmProps {
  title: React.ReactNode
  description?: React.ReactNode
  onConfirm?: (e?: React.MouseEvent) => void | Promise<void>
  onCancel?: (e?: React.MouseEvent) => void
  okText?: React.ReactNode
  cancelText?: React.ReactNode
  okType?: "default" | "primary" | "danger" | "ghost"
  okButtonProps?: React.ComponentPropsWithoutRef<typeof Button>
  cancelButtonProps?: React.ComponentPropsWithoutRef<typeof Button>
  disabled?: boolean
  icon?: React.ReactNode
  placement?:
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "topLeft"
    | "topRight"
    | "bottomLeft"
    | "bottomRight"
  showCancel?: boolean
  children: React.ReactNode
  open?: boolean
  defaultOpen?: boolean
  onOpenChange?: (open: boolean) => void
  className?: string
}

const PLACEMENT_MAP: Record<string, "top" | "bottom" | "left" | "right"> = {
  top: "top",
  topLeft: "top",
  topRight: "top",
  bottom: "bottom",
  bottomLeft: "bottom",
  bottomRight: "bottom",
  left: "left",
  right: "right",
}

export function Popconfirm({
  title,
  description,
  onConfirm,
  onCancel,
  okText = "OK",
  cancelText = "Cancel",
  okType = "primary",
  okButtonProps,
  cancelButtonProps,
  disabled = false,
  icon,
  placement = "top",
  showCancel = true,
  children,
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  className,
}: PopconfirmProps) {
  const [internalOpen, setInternalOpen] = React.useState(defaultOpen)
  const [loading, setLoading] = React.useState(false)
  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : internalOpen

  const setOpen = (v: boolean) => {
    if (!isControlled) setInternalOpen(v)
    onOpenChange?.(v)
  }

  const handleCancel = (e: React.MouseEvent) => {
    setOpen(false)
    onCancel?.(e)
  }

  const handleConfirm = async (e: React.MouseEvent) => {
    if (onConfirm) {
      const result = onConfirm(e)
      if (result instanceof Promise) {
        setLoading(true)
        try {
          await result
        } finally {
          setLoading(false)
        }
      }
    }
    setOpen(false)
  }

  const okVariant =
    okType === "danger"
      ? "destructive"
      : okType === "primary"
        ? "default"
        : okType === "ghost"
          ? "ghost"
          : "outline"

  return (
    <Popover open={disabled ? false : open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>{children}</PopoverTrigger>
      <PopoverContent
        side={PLACEMENT_MAP[placement] ?? "top"}
        className={cn("w-72", className)}
        sideOffset={8}
      >
        <div className="space-y-3">
          <div className="flex items-start gap-2.5">
            <span className="mt-0.5 shrink-0 text-yellow-500">
              {icon ?? <AlertCircle className="h-4 w-4" />}
            </span>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold leading-snug">{title}</p>
              {description && <p className="mt-1 text-xs text-muted-foreground">{description}</p>}
            </div>
          </div>
          <div className="flex justify-end gap-2">
            {showCancel && (
              <Button size="sm" variant="outline" onClick={handleCancel} {...cancelButtonProps}>
                {cancelText}
              </Button>
            )}
            <Button
              size="sm"
              variant={okVariant}
              onClick={handleConfirm}
              loading={loading}
              {...okButtonProps}
            >
              {okText}
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  )
}
