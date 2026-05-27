"use client"

import * as React from "react"

import { cn } from "@benflux-ui/utils"

interface WatermarkProps {
  content?: string | string[]
  image?: string
  width?: number
  height?: number
  rotate?: number
  zIndex?: number
  gap?: [number, number]
  offset?: [number, number]
  font?: {
    color?: string
    fontSize?: number
    fontWeight?: "normal" | "light" | "weight" | number
    fontFamily?: string
    fontStyle?: "none" | "normal" | "italic" | "oblique"
  }
  children?: React.ReactNode
  className?: string
}

function Watermark({
  content = "Watermark",
  image,
  width = 120,
  height = 64,
  rotate = -22,
  zIndex = 9,
  gap = [100, 100],
  offset,
  font = {},
  children,
  className,
}: WatermarkProps) {
  const [dataUrl, setDataUrl] = React.useState("")
  const {
    color = "rgba(0,0,0,0.12)",
    fontSize = 14,
    fontWeight = "normal",
    fontFamily = "sans-serif",
    fontStyle = "normal",
  } = font

  React.useEffect(() => {
    const canvas = document.createElement("canvas")
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const devicePixelRatio = window.devicePixelRatio || 1
    const canvasWidth = (width + gap[0]) * devicePixelRatio
    const canvasHeight = (height + gap[1]) * devicePixelRatio

    canvas.width = canvasWidth
    canvas.height = canvasHeight
    canvas.style.width = `${width + gap[0]}px`
    canvas.style.height = `${height + gap[1]}px`

    ctx.scale(devicePixelRatio, devicePixelRatio)
    ctx.translate((width + gap[0]) / 2, (height + gap[1]) / 2)
    ctx.rotate((rotate * Math.PI) / 180)

    if (image) {
      const img = new Image()
      img.crossOrigin = "anonymous"
      img.onload = () => {
        ctx.drawImage(img, -width / 2, -height / 2, width, height)
        setDataUrl(canvas.toDataURL())
      }
      img.src = image
    } else {
      ctx.font = `${fontStyle} ${fontWeight} ${fontSize}px ${fontFamily}`
      ctx.fillStyle = color
      ctx.textAlign = "center"
      ctx.textBaseline = "middle"

      const lines = Array.isArray(content) ? content : [content]
      const lineHeight = fontSize * 1.5
      const totalHeight = lines.length * lineHeight
      lines.forEach((line, i) => {
        ctx.fillText(line, 0, -totalHeight / 2 + i * lineHeight + lineHeight / 2)
      })
      setDataUrl(canvas.toDataURL())
    }
  }, [
    content,
    image,
    width,
    height,
    rotate,
    gap,
    color,
    fontSize,
    fontWeight,
    fontFamily,
    fontStyle,
  ])

  const offsetStyle = offset ? { backgroundPosition: `${offset[0]}px ${offset[1]}px` } : {}

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {children}
      {dataUrl && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            zIndex,
            backgroundImage: `url(${dataUrl})`,
            backgroundRepeat: "repeat",
            ...offsetStyle,
          }}
        />
      )}
    </div>
  )
}

export { Watermark }
export type { WatermarkProps }
