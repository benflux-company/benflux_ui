import React from "react"

import type { BenfluxIconProps } from "./types"

export function TypingDots({ size = 24, className, style, color = "#6366f1" }: BenfluxIconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
    >
      {[6, 12, 18].map((x, i) => (
        <circle key={x} cx={x} cy="12" r="2.2" fill={color}>
          <animate
            attributeName="cy"
            values="12;7.5;12"
            dur="0.75s"
            begin={`${i * 0.16}s`}
            repeatCount="indefinite"
            calcMode="spline"
            keySplines="0.4 0 0.6 1;0.4 0 0.6 1"
          />
        </circle>
      ))}
    </svg>
  )
}
