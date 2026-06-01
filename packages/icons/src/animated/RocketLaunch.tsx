import React from "react"

import type { BenfluxIconProps } from "./types"

export function RocketLaunch({ size = 24, className, style, color = "#8b5cf6" }: BenfluxIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
    >
      <g>
        <animateTransform
          attributeName="transform"
          type="translate"
          values="0,0;0,-1;0,0"
          dur="0.8s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.2 1;0.4 0 0.2 1"
        />
        <path
          d="M12 2 C12 2 18 6 18 13 L15 16 L9 16 L6 13 C6 6 12 2 12 2 Z"
          stroke={color}
          strokeWidth="1.7"
          strokeLinejoin="round"
          fill="none"
        />
        <circle cx="12" cy="11" r="2" stroke={color} strokeWidth="1.5" />
        <path
          d="M9 16 L7.5 19 L9.5 18 L12 21 L14.5 18 L16.5 19 L15 16"
          stroke={color}
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        >
          <animate attributeName="opacity" values="0.4;1;0.4" dur="0.4s" repeatCount="indefinite" />
        </path>
      </g>
    </svg>
  )
}
