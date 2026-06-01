import React from "react"

import type { BenfluxIconProps } from "./types"

export function CodeTyping({ size = 24, className, style, color = "#10b981" }: BenfluxIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
    >
      <rect x="2" y="3" width="20" height="16" rx="2" stroke={color} strokeWidth="1.7" />
      <path
        d="M7 8 L4.5 10.5 L7 13"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 8 L19.5 10.5 L17 13"
        stroke={color}
        strokeWidth="1.7"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line x1="11" y1="7" x2="13" y2="14" stroke={color} strokeWidth="1.5" strokeLinecap="round" />
      <rect x="4" y="21" width="4" height="1.5" rx="0.75" fill={color} opacity="0.4" />
      <rect x="10" y="21" width="10" height="1.5" rx="0.75" fill={color} opacity="0.4" />
      <rect x="6" y="10" width="2" height="2" rx="0.5" fill={color} opacity="0">
        <animate
          attributeName="opacity"
          values="0;1;1;0"
          dur="1s"
          repeatCount="indefinite"
          keyTimes="0;0.1;0.8;1"
        />
        <animate
          attributeName="x"
          values="6;9;12;14"
          dur="1s"
          repeatCount="indefinite"
          calcMode="discrete"
          keyTimes="0;0.33;0.66;1"
        />
      </rect>
    </svg>
  )
}
