"use client"

import { useEffect, useState } from "react"
import { cn } from "@benflux-ui/utils"

interface MeteorsProps {
  number?: number
  className?: string
}

export function Meteors({ number = 20, className }: MeteorsProps) {
  const [meteorStyles, setMeteorStyles] = useState<Array<React.CSSProperties>>([])

  useEffect(() => {
    const styles = Array.from({ length: number }, () => ({
      top: Math.random() * 100 + "%",
      left: Math.random() * 100 + "%",
      animationDelay: Math.random() * 1 + 0.2 + "s",
      animationDuration: Math.random() * 8 + 2 + "s",
    }))
    setMeteorStyles(styles)
  }, [number])

  return (
    <>
      {meteorStyles.map((style, idx) => (
        <span
          key={idx}
          className={cn(
            "pointer-events-none absolute left-1/2 top-1/2",
            "h-0.5 w-[100px]",
            "rotate-[215deg]",
            "animate-meteor",
            "rounded-[9999px]",
            "bg-gradient-to-r from-primary to-transparent",
            "shadow-[0_0_0_1px_#ffffff10]",
            "before:absolute before:top-1/2 before:h-1 before:w-1",
            "before:-translate-y-1/2 before:rounded-full",
            "before:bg-primary before:content-['']",
            className,
          )}
          style={{
            ...style,
            "--duration": style.animationDuration?.toString().replace("s", ""),
            "--delay": style.animationDelay?.toString().replace("s", ""),
          } as React.CSSProperties}
        />
      ))}
    </>
  )
}
