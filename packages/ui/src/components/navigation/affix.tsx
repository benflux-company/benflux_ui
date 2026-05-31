"use client"

import * as React from "react"

import { cn } from "@benflux-ui/utils"

export interface AffixProps {
  offsetTop?: number
  offsetBottom?: number
  target?: () => HTMLElement | Window
  onChange?: (affixed: boolean) => void
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  zIndex?: number
}

export function Affix({
  offsetTop = 0,
  offsetBottom,
  target,
  onChange,
  children,
  className,
  style,
  zIndex = 100,
}: AffixProps) {
  const [affixed, setAffixed] = React.useState(false)
  const [affixStyle, setAffixStyle] = React.useState<React.CSSProperties>({})
  const [placeholderStyle, setPlaceholderStyle] = React.useState<React.CSSProperties>({})
  const containerRef = React.useRef<HTMLDivElement>(null)
  const affixedRef = React.useRef(false)

  React.useEffect(() => {
    const getTarget = (): HTMLElement | Window => (target ? target() : window)
    const targetEl = getTarget()

    const handleScroll = () => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const isWindow = targetEl === window

      let shouldAffix = false
      let newAffixStyle: React.CSSProperties = {}

      if (offsetBottom !== undefined) {
        const viewportH = isWindow ? window.innerHeight : (targetEl as HTMLElement).clientHeight
        shouldAffix = viewportH - rect.bottom >= offsetBottom
        if (shouldAffix) {
          newAffixStyle = { position: "fixed", bottom: offsetBottom, width: rect.width, zIndex }
        }
      } else {
        shouldAffix = rect.top <= offsetTop
        if (shouldAffix) {
          newAffixStyle = { position: "fixed", top: offsetTop, width: rect.width, zIndex }
        }
      }

      if (shouldAffix !== affixedRef.current) {
        affixedRef.current = shouldAffix
        setAffixed(shouldAffix)
        onChange?.(shouldAffix)
      }

      if (shouldAffix) {
        setPlaceholderStyle({ width: rect.width, height: rect.height, display: "block" })
        setAffixStyle(newAffixStyle)
      } else {
        setPlaceholderStyle({})
        setAffixStyle({})
      }
    }

    targetEl.addEventListener("scroll", handleScroll, { passive: true })
    window.addEventListener("resize", handleScroll, { passive: true })
    handleScroll()

    return () => {
      targetEl.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [offsetTop, offsetBottom, target, onChange, zIndex])

  return (
    <div ref={containerRef} style={style} className={className}>
      {affixed && <div style={placeholderStyle} aria-hidden="true" />}
      <div style={affixStyle} className={cn(affixed && "benflux-affix")}>
        {children}
      </div>
    </div>
  )
}
