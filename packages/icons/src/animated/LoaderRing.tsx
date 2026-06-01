import React from "react"

import type { BenfluxIconProps } from "./types"

export function LoaderRing({
  size = 24,
  className,
  style,
  color = "#6366f1",
  trackColor = "#e2e8f0",
}: BenfluxIconProps) {
  const id = React.useId().replace(/:/g, "")
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
      aria-label="Loading"
    >
      <circle cx="12" cy="12" r="9" stroke={trackColor} strokeWidth="2" />
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke={`url(#lg-${id})`}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray="20 37"
      >
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 12 12"
          to="360 12 12"
          dur="0.85s"
          repeatCount="indefinite"
        />
      </circle>
      <defs>
        <linearGradient id={`lg-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={color} />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  )
}
