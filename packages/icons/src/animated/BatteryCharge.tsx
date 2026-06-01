import React from "react"

import type { BenfluxIconProps } from "./types"

export function BatteryCharge({
  size = 24,
  className,
  style,
  color = "#22c55e",
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
      <rect x="2" y="7" width="18" height="10" rx="2" stroke={color} strokeWidth="1.8" />
      <path
        d="M20 10 L22 10 L22 14 L20 14"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect x="4" y="9" width="0" height="6" rx="1" fill={color}>
        <animate
          attributeName="width"
          values="0;12;0"
          dur="2s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.2 1;0.8 0 0.6 1"
        />
      </rect>
      <path
        d="M10 11.5 L8.5 13 L10.5 13 L9 14.5"
        stroke="white"
        strokeWidth="1.3"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          dur="2s"
          repeatCount="indefinite"
          keyTimes="0;0.25;0.7;1"
        />
      </path>
    </svg>
  )
}
