import React from "react"

import type { BenfluxIconProps } from "./types"

export function DataFlow({
  size = 24,
  className,
  style,
  color = "#3b82f6",
  trackColor = "#e2e8f0",
}: BenfluxIconProps) {
  const path = "M3 12 Q8 5 12 12 Q16 19 21 12"
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
    >
      <path d={path} stroke={trackColor} strokeWidth="1.5" fill="none" strokeLinecap="round" />
      {[0, 0.33, 0.66].map((offset, i) => (
        <circle key={i} r="2" fill={color}>
          <animateMotion
            path={path}
            dur="1.4s"
            begin={`${offset * 1.4}s`}
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0;1;1;0"
            dur="1.4s"
            begin={`${offset * 1.4}s`}
            repeatCount="indefinite"
            keyTimes="0;0.1;0.85;1"
          />
        </circle>
      ))}
    </svg>
  )
}
