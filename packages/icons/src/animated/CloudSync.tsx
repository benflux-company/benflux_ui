import React from "react"

import type { BenfluxIconProps } from "./types"

export function CloudSync({ size = 24, className, style, color = "#3b82f6" }: BenfluxIconProps) {
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
        d="M6.5 17A4.5 4.5 0 0 1 4.5 9A6 6 0 0 1 16 6.5A4.5 4.5 0 0 1 19.5 15"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        fill="none"
      >
        <animate
          attributeName="stroke-dasharray"
          values="0 40;40 0"
          dur="1.6s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="stroke-dashoffset"
          values="0;-40"
          dur="1.6s"
          repeatCount="indefinite"
        />
      </path>
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 12 17;360 12 17"
          dur="1.2s"
          repeatCount="indefinite"
        />
        <path
          d="M9 17 L12 14 L15 17"
          stroke={color}
          strokeWidth="1.7"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path d="M12 14 L12 20" stroke={color} strokeWidth="1.7" strokeLinecap="round" />
      </g>
    </svg>
  )
}
