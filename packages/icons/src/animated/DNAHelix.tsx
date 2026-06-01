import React from "react"

import type { BenfluxIconProps } from "./types"

export function DNAHelix({
  size = 24,
  className,
  style,
  color = "#06b6d4",
  trackColor = "#e2e8f0",
}: BenfluxIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
    >
      <path
        d="M7 2 Q12 6 17 10 Q12 14 7 18 Q12 22 17 22"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M17 2 Q12 6 7 10 Q12 14 17 18 Q12 22 7 22"
        stroke={trackColor}
        strokeWidth="1.7"
        strokeLinecap="round"
        fill="none"
      />
      {[5, 9, 13, 17].map((y, i) => (
        <line
          key={i}
          x1="8"
          y1={y}
          x2="16"
          y2={y}
          stroke={color}
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.5"
        >
          <animate
            attributeName="opacity"
            values="0.2;0.8;0.2"
            dur="1.4s"
            begin={`${i * 0.2}s`}
            repeatCount="indefinite"
          />
        </line>
      ))}
    </svg>
  )
}
