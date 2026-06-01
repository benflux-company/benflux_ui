import React from "react"

import type { BenfluxIconProps } from "./types"

export function ProgressArc({
  size = 24,
  className,
  style,
  color = "#f97316",
  trackColor = "#e2e8f0",
}: BenfluxIconProps) {
  const circumference = 2 * Math.PI * 9
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
    >
      <circle cx="12" cy="12" r="9" stroke={trackColor} strokeWidth="2" />
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference}
        transform="rotate(-90 12 12)"
      >
        <animate
          attributeName="stroke-dashoffset"
          values={`${circumference};0;${circumference}`}
          dur="2.2s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.2 1;0.4 0 0.2 1"
        />
      </circle>
    </svg>
  )
}
