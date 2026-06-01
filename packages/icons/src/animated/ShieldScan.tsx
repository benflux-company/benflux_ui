import React from "react"

import type { BenfluxIconProps } from "./types"

export function ShieldScan({ size = 24, className, style, color = "#10b981" }: BenfluxIconProps) {
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
        d="M12 2 L20 5.5 L20 12 C20 16.5 16.5 20.5 12 22 C7.5 20.5 4 16.5 4 12 L4 5.5 Z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
      />
      <line
        x1="4"
        y1="9"
        x2="20"
        y2="9"
        stroke={color}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0"
      >
        <animate attributeName="y1" values="6;18;6" dur="2s" repeatCount="indefinite" />
        <animate attributeName="y2" values="6;18;6" dur="2s" repeatCount="indefinite" />
        <animate
          attributeName="opacity"
          values="0;0.7;0.7;0"
          dur="2s"
          repeatCount="indefinite"
          keyTimes="0;0.1;0.9;1"
        />
      </line>
      <path
        d="M9 12 L11 14 L15 10"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        opacity="0"
      >
        <animate
          attributeName="opacity"
          values="0;0;1;1"
          dur="2s"
          repeatCount="indefinite"
          keyTimes="0;0.7;0.85;1"
        />
      </path>
    </svg>
  )
}
