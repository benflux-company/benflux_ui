import React from "react"

import type { BenfluxIconProps } from "./types"

export function SearchPulse({ size = 24, className, style, color = "#6366f1" }: BenfluxIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
    >
      <circle cx="10.5" cy="10.5" r="6.5" stroke={color} strokeWidth="1.8" />
      <circle cx="10.5" cy="10.5" r="6.5" fill="none" stroke={color} strokeWidth="1.5" opacity="0">
        <animate attributeName="r" values="6.5;11;6.5" dur="1.6s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="0.5;0;0.5" dur="1.6s" repeatCount="indefinite" />
      </circle>
      <line
        x1="15.5"
        y1="15.5"
        x2="21"
        y2="21"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      >
        <animate attributeName="x1" values="15.5;16;15.5" dur="1.6s" repeatCount="indefinite" />
        <animate attributeName="y1" values="15.5;16;15.5" dur="1.6s" repeatCount="indefinite" />
      </line>
    </svg>
  )
}
