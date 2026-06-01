import React from "react"

import type { BenfluxIconProps } from "./types"

export function NotificationBell({
  size = 24,
  className,
  style,
  color = "#f59e0b",
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
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 12 6;8 12 6;-8 12 6;6 12 6;-6 12 6;0 12 6"
          dur="1.2s"
          begin="0s;ring.end+1.5s"
          repeatCount="1"
          id="ring"
          calcMode="spline"
          keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1"
        />
        <path
          d="M6 10 C6 6.69 8.69 4 12 4 C15.31 4 18 6.69 18 10 L18 16 L20 18 L4 18 L6 16 Z"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M10 18 Q10 20 12 20 Q14 20 14 18"
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
        />
      </g>
      <circle cx="17" cy="4" r="2.5" fill="#ef4444">
        <animate
          attributeName="r"
          values="2.5;3.2;2.5"
          dur="1.2s"
          begin="0s;ring.end+1.5s"
          repeatCount="1"
        />
        <animate
          attributeName="opacity"
          values="1;0.6;1"
          dur="1.2s"
          begin="0s;ring.end+1.5s"
          repeatCount="1"
        />
      </circle>
    </svg>
  )
}
