import React from "react"

import type { BenfluxIconProps } from "./types"

export function SignalWave({ size = 24, className, style, color = "#22c55e" }: BenfluxIconProps) {
  const arcs = [
    { d: "M 8.5 15.5 A 4 4 0 0 1 15.5 15.5", delay: "0.3s" },
    { d: "M 5.5 12.5 A 8 8 0 0 1 18.5 12.5", delay: "0.15s" },
    { d: "M 2.5 9.5 A 12 12 0 0 1 21.5 9.5", delay: "0s" },
  ]
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
    >
      <circle cx="12" cy="19" r="1.5" fill={color} />
      {arcs.map(({ d, delay }, i) => (
        <path
          key={i}
          d={d}
          stroke={color}
          strokeWidth="1.8"
          strokeLinecap="round"
          fill="none"
          opacity="0"
        >
          <animate
            attributeName="opacity"
            values="0;1;0"
            dur="1.5s"
            begin={delay}
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
          />
        </path>
      ))}
    </svg>
  )
}
