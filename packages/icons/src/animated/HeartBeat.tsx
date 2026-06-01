import React from "react"

import type { BenfluxIconProps } from "./types"

export function HeartBeat({ size = 24, className, style, color = "#ef4444" }: BenfluxIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
    >
      <polyline
        points="1,12 5,12 7,7 9,17 11,9 13,15 15,12 23,12"
        stroke={color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="40"
        strokeDashoffset="40"
      >
        <animate
          attributeName="stroke-dashoffset"
          values="40;0;0;40"
          dur="1.8s"
          repeatCount="indefinite"
          keyTimes="0;0.45;0.7;1"
          calcMode="spline"
          keySplines="0.4 0 0.6 1;0 0 1 1;0.4 0 0.6 1"
        />
      </polyline>
    </svg>
  )
}
