import * as React from "react"

import { QRCodeCanvas, QRCodeSVG } from "qrcode.react"

import { cn } from "@benflux-ui/utils"

interface QRCodeProps {
  value: string
  size?: number
  level?: "L" | "M" | "Q" | "H"
  bgColor?: string
  fgColor?: string
  includeMargin?: boolean
  imageSettings?: {
    src: string
    height?: number
    width?: number
    excavate?: boolean
  }
  type?: "svg" | "canvas"
  status?: "active" | "loading" | "expired"
  onRefresh?: () => void
  bordered?: boolean
  className?: string
}

function QRCode({
  value,
  size = 128,
  level = "M",
  bgColor = "#ffffff",
  fgColor = "#000000",
  includeMargin = false,
  imageSettings,
  type = "svg",
  status = "active",
  onRefresh,
  bordered = false,
  className,
}: QRCodeProps) {
  const qrProps = { value, size, level, bgColor, fgColor, includeMargin, imageSettings }

  return (
    <div
      className={cn(
        "relative inline-flex items-center justify-center",
        bordered && "rounded-lg border border-border p-3",
        className,
      )}
    >
      {type === "svg" ? <QRCodeSVG {...qrProps} /> : <QRCodeCanvas {...qrProps} />}

      {status !== "active" && (
        <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg bg-background/80 backdrop-blur-sm">
          {status === "loading" ? (
            <div className="h-8 w-8 animate-spin rounded-full border-2 border-primary border-t-transparent" />
          ) : (
            <div className="flex flex-col items-center gap-3">
              <p className="text-sm text-muted-foreground">QR code expired</p>
              {onRefresh && (
                <button
                  onClick={onRefresh}
                  className="rounded-md bg-primary px-3 py-1.5 text-xs text-primary-foreground hover:bg-primary/90"
                >
                  Refresh
                </button>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

export { QRCode }
export type { QRCodeProps }
