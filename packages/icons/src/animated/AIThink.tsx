import React from "react"

import type { BenfluxIconProps } from "./types"

const NODES = [
  { cx: 8, cy: 8 },
  { cx: 12, cy: 6 },
  { cx: 16, cy: 8 },
  { cx: 8, cy: 13 },
  { cx: 16, cy: 13 },
]
const EDGES: [number, number, number, number][] = [
  [8, 8, 12, 6],
  [12, 6, 16, 8],
  [8, 8, 8, 13],
  [16, 8, 16, 13],
  [8, 13, 16, 13],
]

export function AIThink({ size = 24, className, style, color = "#8b5cf6" }: BenfluxIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
    >
      <circle
        cx="12"
        cy="10.5"
        r="7.5"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="47"
        strokeDashoffset="0"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="0;-47;0"
          dur="3s"
          repeatCount="indefinite"
        />
      </circle>
      {EDGES.map(([x1, y1, x2, y2], i) => (
        <line
          key={i}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          stroke={color}
          strokeWidth="0.9"
          opacity="0.3"
        >
          <animate
            attributeName="opacity"
            values="0.15;0.6;0.15"
            dur="1.6s"
            begin={`${i * 0.22}s`}
            repeatCount="indefinite"
          />
        </line>
      ))}
      {NODES.map(({ cx, cy }, i) => (
        <circle key={i} cx={cx} cy={cy} r="1.6" fill={color}>
          <animate
            attributeName="opacity"
            values="0.4;1;0.4"
            dur="1.6s"
            begin={`${i * 0.28}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="r"
            values="1.6;2.2;1.6"
            dur="1.6s"
            begin={`${i * 0.28}s`}
            repeatCount="indefinite"
          />
        </circle>
      ))}
      <rect x="9" y="18.5" width="6" height="2.5" rx="1.25" fill={color} opacity="0.3" />
      <line x1="12" y1="18" x2="12" y2="18.5" stroke={color} strokeWidth="1.5" />
    </svg>
  )
}
