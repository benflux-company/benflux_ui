import React from "react"

import type { BenfluxIconProps } from "./types"

export function WifiScan({ size = 24, className, style, color = "#06b6d4" }: BenfluxIconProps) {
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
        d="M2.5 8 Q12 1 21.5 8"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      >
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          dur="1.8s"
          repeatCount="indefinite"
          keyTimes="0;0.1;0.4;0.7"
        />
      </path>
      <path
        d="M5 11.5 Q12 6.5 19 11.5"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      >
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          dur="1.8s"
          begin="0.2s"
          repeatCount="indefinite"
          keyTimes="0;0.1;0.5;0.8"
        />
      </path>
      <path
        d="M8 15 Q12 12 16 15"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        fill="none"
      >
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          dur="1.8s"
          begin="0.4s"
          repeatCount="indefinite"
          keyTimes="0;0.1;0.6;0.9"
        />
      </path>
      <circle cx="12" cy="18.5" r="1.5" fill={color}>
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          dur="1.8s"
          begin="0.6s"
          repeatCount="indefinite"
          keyTimes="0;0.1;0.7;1"
        />
      </circle>
    </svg>
  )
}
