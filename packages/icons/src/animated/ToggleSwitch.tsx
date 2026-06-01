import React from "react"

import type { BenfluxIconProps } from "./types"

export function ToggleSwitch({ size = 24, className, style, color = "#22c55e" }: BenfluxIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
    >
      <rect x="2" y="7" width="20" height="10" rx="5" stroke={color} strokeWidth="1.8">
        <animate
          attributeName="stroke"
          values={`#94a3b8;${color};${color};#94a3b8`}
          dur="2s"
          repeatCount="indefinite"
          keyTimes="0;0.4;0.6;1"
        />
      </rect>
      <rect x="2" y="7" width="20" height="10" rx="5" fill="none">
        <animate
          attributeName="fill"
          values="transparent;transparent;rgba(34,197,94,0.15);rgba(34,197,94,0.15);transparent"
          dur="2s"
          repeatCount="indefinite"
          keyTimes="0;0.35;0.45;0.95;1"
        />
      </rect>
      <circle cy="12" r="4" fill="#94a3b8">
        <animate
          attributeName="cx"
          values="7;7;17;17;7"
          dur="2s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"
          keyTimes="0;0.3;0.5;0.7;1"
        />
        <animate
          attributeName="fill"
          values={`#94a3b8;#94a3b8;${color};${color};#94a3b8`}
          dur="2s"
          repeatCount="indefinite"
          keyTimes="0;0.3;0.5;0.7;1"
        />
      </circle>
    </svg>
  )
}
