import React from "react"

import type { BenfluxIconProps } from "./types"

export function FireAlert({ size = 24, className, style, color = "#f97316" }: BenfluxIconProps) {
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
        d="M12 2 C12 2 14 5 13 8 C16 6 17 3 17 3 C17 3 21 8 19 14 C18 17.5 15 20 12 20 C9 20 6 17.5 5 14 C3 8 7 3 7 3 C7 3 8 6 11 8 C10 5 12 2 12 2 Z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
        fill="none"
      >
        <animate
          attributeName="d"
          values="M12 2 C12 2 14 5 13 8 C16 6 17 3 17 3 C17 3 21 8 19 14 C18 17.5 15 20 12 20 C9 20 6 17.5 5 14 C3 8 7 3 7 3 C7 3 8 6 11 8 C10 5 12 2 12 2 Z;M12 2 C12 2 15 6 13.5 9 C17 7 17.5 3.5 17.5 3.5 C17.5 3.5 21.5 8.5 19.5 14.5 C18.5 18 15 20.5 12 20.5 C9 20.5 5.5 18 4.5 14.5 C2.5 8.5 6.5 3.5 6.5 3.5 C6.5 3.5 7.5 6.5 11 8.5 C9.5 5.5 12 2 12 2 Z;M12 2 C12 2 14 5 13 8 C16 6 17 3 17 3 C17 3 21 8 19 14 C18 17.5 15 20 12 20 C9 20 6 17.5 5 14 C3 8 7 3 7 3 C7 3 8 6 11 8 C10 5 12 2 12 2 Z"
          dur="0.8s"
          repeatCount="indefinite"
          calcMode="spline"
          keySplines="0.4 0 0.2 1;0.4 0 0.2 1"
        />
      </path>
      <path
        d="M12 12 C12 12 13 14 12 16 C13.5 15 14 13 14 13 C14 13 15.5 14.5 15 17 C14.5 18.5 13.5 19 12 19 C10.5 19 9.5 18.5 9 17 C8.5 14.5 10 13 10 13 C10 13 10.5 15 12 16 C11 14 12 12 12 12 Z"
        fill={color}
        opacity="0.7"
      >
        <animate attributeName="opacity" values="0.7;1;0.7" dur="0.6s" repeatCount="indefinite" />
      </path>
    </svg>
  )
}
