import React from "react"

import type { BenfluxIconProps } from "./types"

export function DatabasePulse({
  size = 24,
  className,
  style,
  color = "#6366f1",
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
      <ellipse cx="12" cy="5" rx="8" ry="2.5" stroke={color} strokeWidth="1.7" />
      <path d="M4 5 L4 12" stroke={color} strokeWidth="1.7" />
      <path d="M20 5 L20 12" stroke={color} strokeWidth="1.7" />
      <path d="M4 12 Q4 14.5 12 14.5 Q20 14.5 20 12" stroke={color} strokeWidth="1.7" fill="none" />
      <path d="M4 12 L4 19" stroke={color} strokeWidth="1.7" />
      <path d="M20 12 L20 19" stroke={color} strokeWidth="1.7" />
      <path d="M4 19 Q4 21.5 12 21.5 Q20 21.5 20 19" stroke={color} strokeWidth="1.7" fill="none" />
      <ellipse cx="12" cy="5" rx="8" ry="2.5" fill={color} opacity="0">
        <animate attributeName="opacity" values="0;0.2;0" dur="1.4s" repeatCount="indefinite" />
      </ellipse>
      <ellipse cx="12" cy="12" rx="8" ry="2.5" fill="none" stroke={color} strokeWidth="1.7">
        <animate
          attributeName="opacity"
          values="0.3;1;0.3"
          dur="1.4s"
          begin="0.2s"
          repeatCount="indefinite"
        />
      </ellipse>
      <line
        x1="7"
        y1="8.5"
        x2="10"
        y2="8.5"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
      <line
        x1="7"
        y1="15.5"
        x2="10"
        y2="15.5"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.5"
      />
    </svg>
  )
}
