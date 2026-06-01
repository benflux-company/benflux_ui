import React from "react"

import type { BenfluxIconProps } from "./types"

export function PulseRings({ size = 24, className, style, color = "#6366f1" }: BenfluxIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
    >
      {[4, 7, 10].map((r, i) => (
        <circle key={r} cx="12" cy="12" r={r} stroke={color} strokeWidth="1.5" opacity="0">
          <animate
            attributeName="opacity"
            values="0.8;0"
            dur="1.6s"
            begin={`${i * 0.42}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values={`${r - 2};${r + 2.5}`}
            dur="1.6s"
            begin={`${i * 0.42}s`}
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1"
          />
        </circle>
      ))}
      <circle cx="12" cy="12" r="2.5" fill={color} />
    </svg>
  )
}
