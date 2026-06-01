import React from "react"

import type { BenfluxIconProps } from "./types"

export function SyncOrbit({
  size = 24,
  className,
  style,
  color = "#6366f1",
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
      <circle cx="12" cy="12" r="7" stroke={trackColor} strokeWidth="1.5" strokeDasharray="3 3" />
      <circle cx="12" cy="12" r="2.5" fill={color} opacity="0.25" />
      <circle cx="12" cy="12" r="1.5" fill={color} />
      <circle cx="12" cy="5" r="2.2" fill={color}>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 12 12"
          to="360 12 12"
          dur="1.1s"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  )
}
