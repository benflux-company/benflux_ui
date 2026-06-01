import React from "react"

import type { BenfluxIconProps } from "./types"

export function CursorClick({ size = 24, className, style, color = "#f59e0b" }: BenfluxIconProps) {
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
        d="M5 3 L5 18 L9 14.5 L12.5 21 L14.5 20 L11 13.5 L16 13.5 Z"
        stroke={color}
        strokeWidth="1.7"
        strokeLinejoin="round"
        fill="none"
      >
        <animate
          attributeName="transform"
          type="translate"
          values="0,0;0.5,0.5;0,0"
          dur="0.8s"
          begin="click.end+1s"
          repeatCount="1"
          id="move"
          additive="sum"
        />
      </path>
      <circle cx="16" cy="8" r="0" fill="none" stroke={color} strokeWidth="1.5" opacity="0.7">
        <animate
          attributeName="r"
          values="0;5;8"
          dur="0.6s"
          begin="move.end"
          repeatCount="1"
          id="click"
        />
        <animate
          attributeName="opacity"
          values="0.7;0.4;0"
          dur="0.6s"
          begin="move.end"
          repeatCount="1"
        />
      </circle>
      <circle cx="16" cy="8" r="0" fill="none" stroke={color} strokeWidth="1" opacity="0.5">
        <animate
          attributeName="r"
          values="0;3;6"
          dur="0.6s"
          begin="move.end+0.1s"
          repeatCount="1"
        />
        <animate
          attributeName="opacity"
          values="0.5;0.3;0"
          dur="0.6s"
          begin="move.end+0.1s"
          repeatCount="1"
        />
      </circle>
    </svg>
  )
}
