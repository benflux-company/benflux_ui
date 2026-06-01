import React from "react"

import type { BenfluxIconProps } from "./types"

export function GlitchX({ size = 24, className, style, color = "#ef4444" }: BenfluxIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
    >
      <line x1="5" y1="5" x2="19" y2="19" stroke={color} strokeWidth="2.2" strokeLinecap="round">
        <animate attributeName="x1" values="5;3;6;5" dur="0.18s" repeatCount="indefinite" />
        <animate attributeName="opacity" values="1;0.3;1" dur="0.14s" repeatCount="indefinite" />
      </line>
      <line x1="19" y1="5" x2="5" y2="19" stroke={color} strokeWidth="2.2" strokeLinecap="round">
        <animate attributeName="x2" values="5;7;4;5" dur="0.18s" repeatCount="indefinite" />
        <animate
          attributeName="opacity"
          values="1;0.3;1"
          dur="0.14s"
          begin="0.05s"
          repeatCount="indefinite"
        />
      </line>
      <rect x="3" y="9" width="18" height="2" fill={color} opacity="0">
        <animate attributeName="opacity" values="0;0.25;0;0" dur="0.4s" repeatCount="indefinite" />
        <animate attributeName="y" values="9;15;9;9" dur="0.4s" repeatCount="indefinite" />
      </rect>
    </svg>
  )
}
