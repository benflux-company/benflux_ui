"use client"

import { cn } from "@benflux-ui/utils"

interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  pauseOnHover?: boolean
  reverse?: boolean
  repeat?: number
  vertical?: boolean
  speed?: "slow" | "normal" | "fast"
}

export function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  children,
  vertical = false,
  repeat = 4,
  speed = "normal",
  ...props
}: MarqueeProps) {
  const duration = { slow: "60s", normal: "40s", fast: "20s" }[speed]

  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2",
        "[--duration:40s]",
        "[--gap:1rem]",
        vertical ? "flex-col" : "flex-row",
        className,
      )}
      style={{ "--duration": duration } as React.CSSProperties}
    >
      {Array.from({ length: repeat }).map((_, i) => (
        <div
          key={i}
          className={cn("flex shrink-0 justify-around gap-[--gap]", {
            "animate-marquee flex-row": !vertical,
            "animate-marquee-vertical flex-col": vertical,
            "group-hover:[animation-play-state:paused]": pauseOnHover,
            "[animation-direction:reverse]": reverse,
          })}
          style={{
            animation: vertical
              ? `marquee-vertical var(--duration) linear infinite`
              : `marquee var(--duration) linear infinite`,
            animationDirection: reverse ? "reverse" : "normal",
          }}
        >
          {children}
        </div>
      ))}
    </div>
  )
}
