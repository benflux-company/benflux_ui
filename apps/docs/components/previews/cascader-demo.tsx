"use client"

import * as React from "react"

import { Cascader } from "@benflux-ui/react"

const OPTIONS = [
  {
    value: "frontend",
    label: "Frontend",
    children: [
      {
        value: "react",
        label: "React",
        children: [
          { value: "nextjs", label: "Next.js" },
          { value: "remix", label: "Remix" },
        ],
      },
      {
        value: "vue",
        label: "Vue",
        children: [
          { value: "nuxt", label: "Nuxt" },
          { value: "quasar", label: "Quasar" },
        ],
      },
    ],
  },
  {
    value: "backend",
    label: "Backend",
    children: [
      { value: "nodejs", label: "Node.js" },
      { value: "python", label: "Python" },
      { value: "go", label: "Go" },
    ],
  },
  {
    value: "mobile",
    label: "Mobile",
    children: [
      { value: "rn", label: "React Native" },
      { value: "flutter", label: "Flutter" },
    ],
  },
]

export function CascaderDemo() {
  const [value, setValue] = React.useState<string[]>([])

  return (
    <div className="w-72 space-y-4">
      <Cascader
        options={OPTIONS}
        value={value}
        onChange={(v) => setValue(v)}
        placeholder="Select tech stack..."
        allowClear
      />
      {value.length > 0 && (
        <p className="text-sm text-muted-foreground">
          Path: <span className="font-medium text-foreground">{value.join(" › ")}</span>
        </p>
      )}
    </div>
  )
}
