import React from "react"

import type { BenfluxIconProps } from "./types"

const BARS = [
  { x: 2, h: 4, delay: 0 },
  { x: 5.5, h: 10, delay: 0.1 },
  { x: 9, h: 16, delay: 0.2 },
  { x: 12.5, h: 20, delay: 0.15 },
  { x: 16, h: 16, delay: 0.25 },
  { x: 19.5, h: 10, delay: 0.05 },
]

export function SoundWave({ size = 24, className, style, color = "#ec4899" }: BenfluxIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
    >
      {BARS.map(({ x, h, delay }, i) => (
        <rect key={i} x={x} y={(24 - h) / 2} width="2.5" height={h} rx="1.25" fill={color}>
          <animate
            attributeName="height"
            values={`${h};${h * 0.3};${h};${h * 0.6};${h}`}
            dur="1.2s"
            begin={`${delay}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="y"
            values={`${(24 - h) / 2};${(24 - h * 0.3) / 2};${(24 - h) / 2};${(24 - h * 0.6) / 2};${(24 - h) / 2}`}
            dur="1.2s"
            begin={`${delay}s`}
            repeatCount="indefinite"
          />
        </rect>
      ))}
    </svg>
  )
}
