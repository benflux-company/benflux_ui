import React from "react"

import type { BenfluxIconProps } from "./types"

const STARS = [3, 8.5, 14, 19.5, 25]

export function StarRating({ size = 24, className, style, color = "#f59e0b" }: BenfluxIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 28 24"
      fill="none"
      className={className}
      style={style}
    >
      {STARS.map((cx, i) => (
        <path
          key={i}
          d={`M${cx} 4 L${cx + 1.3} 8 L${cx + 4.5} 8 L${cx + 2} 10.2 L${cx + 2.8} 14 L${cx} 11.5 L${cx - 2.8} 14 L${cx - 2} 10.2 L${cx - 4.5} 8 L${cx - 1.3} 8 Z`}
          fill={color}
          opacity="0.2"
        >
          <animate
            attributeName="opacity"
            values="0.2;1;1;0.2"
            dur={`${0.6 * 5}s`}
            begin={`${i * 0.18}s`}
            repeatCount="indefinite"
            keyTimes={`0;${(i * 0.18 + 0.15) / 3};${(i * 0.18 + 0.5) / 3};1`}
          />
        </path>
      ))}
    </svg>
  )
}
