import React from "react"

import type { BenfluxIconProps } from "./types"

export function MorphStar({ size = 24, className, style, color = "#f59e0b" }: BenfluxIconProps) {
  const star5 =
    "M12 2 L13.8 8.2 L20.1 8.2 L15 12.1 L16.9 18.3 L12 14.5 L7.1 18.3 L9 12.1 L3.9 8.2 L10.2 8.2 Z"
  const star6 =
    "M12 2 L13.3 8 L19 6 L15.5 11 L21 12 L15.5 13 L19 18 L13.3 16 L12 22 L10.7 16 L5 18 L8.5 13 L3 12 L8.5 11 L5 6 L10.7 8 Z"
  const circle = "M12 2 A10 10 0 0 1 22 12 A10 10 0 0 1 12 22 A10 10 0 0 1 2 12 A10 10 0 0 1 12 2 Z"
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={style}
    >
      <path fill={color} d={star5}>
        <animate
          attributeName="d"
          values={`${star5};${star6};${circle};${star6};${star5}`}
          dur="2.4s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1;0.4 0 0.2 1"
        />
        <animate
          attributeName="opacity"
          values="0.9;1;0.8;1;0.9"
          dur="2.4s"
          repeatCount="indefinite"
        />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 12 12;36 12 12;0 12 12;-36 12 12;0 12 12"
          dur="2.4s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  )
}
