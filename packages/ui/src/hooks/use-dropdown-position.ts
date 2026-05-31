"use client"

import * as React from "react"

interface DropdownPos {
  top: number
  left: number
  width: number
  placement: "bottom" | "top"
}

export function useDropdownPosition(
  triggerRef: React.RefObject<HTMLElement | null>,
  open: boolean,
  offset = 4,
) {
  const [pos, setPos] = React.useState<DropdownPos>({
    top: 0,
    left: 0,
    width: 0,
    placement: "bottom",
  })

  React.useEffect(() => {
    if (!open || !triggerRef.current) return

    const update = () => {
      const el = triggerRef.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const viewportH = window.innerHeight
      const spaceBelow = viewportH - rect.bottom
      const placement: "bottom" | "top" =
        spaceBelow < 240 && rect.top > spaceBelow ? "top" : "bottom"

      setPos({
        top:
          placement === "bottom"
            ? rect.bottom + offset + window.scrollY
            : rect.top - offset + window.scrollY,
        left: rect.left + window.scrollX,
        width: rect.width,
        placement,
      })
    }

    update()
    window.addEventListener("scroll", update, { passive: true })
    window.addEventListener("resize", update, { passive: true })
    return () => {
      window.removeEventListener("scroll", update)
      window.removeEventListener("resize", update)
    }
  }, [open, triggerRef, offset])

  return pos
}
