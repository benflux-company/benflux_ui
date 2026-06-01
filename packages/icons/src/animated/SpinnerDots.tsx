import React from "react"

import type { BenfluxIconProps } from "./types"

const DOTS = Array.from({ length: 8 }, (_, i) => {
  const angle = (i / 8) * Math.PI * 2
  return { cx: 12 + 8 * Math.cos(angle), cy: 12 + 8 * Math.sin(angle), delay: i * 0.1 }
})

export function SpinnerDots({ size = 24, className, style, color = "#6366f1" }: BenfluxIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
    >
      {DOTS.map(({ cx, cy, delay }, i) => (
        <circle key={i} cx={cx} cy={cy} r="1.6" fill={color}>
          <animate
            attributeName="opacity"
            values="1;0.15;1"
            dur="0.8s"
            begin={`${delay}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="1.6;0.9;1.6"
            dur="0.8s"
            begin={`${delay}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  )
}
