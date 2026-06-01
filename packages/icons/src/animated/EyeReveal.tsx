import React from "react"

import type { BenfluxIconProps } from "./types"

export function EyeReveal({ size = 24, className, style, color = "#a78bfa" }: BenfluxIconProps) {
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
        d="M2 12 Q12 4 22 12 Q12 20 2 12 Z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
        fill="none"
      >
        <animate
          attributeName="d"
          values="M2 12 Q12 12 22 12 Q12 12 2 12 Z;M2 12 Q12 4 22 12 Q12 20 2 12 Z;M2 12 Q12 4 22 12 Q12 20 2 12 Z;M2 12 Q12 12 22 12 Q12 12 2 12 Z"
          dur="3s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"
          keyTimes="0;0.25;0.75;1"
        />
      </path>
      <circle cx="12" cy="12" r="3.5" stroke={color} strokeWidth="1.5" fill="none">
        <animate
          attributeName="r"
          values="0;3.5;3.5;0"
          dur="3s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"
          keyTimes="0;0.25;0.75;1"
        />
      </circle>
      <circle cx="12" cy="12" r="1.5" fill={color}>
        <animate
          attributeName="r"
          values="0;1.5;1.5;0"
          dur="3s"
          repeatCount="indefinite"
          keyTimes="0;0.25;0.75;1"
        />
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          dur="3s"
          repeatCount="indefinite"
          keyTimes="0;0.25;0.75;1"
        />
      </circle>
    </svg>
  )
}
