"use client"

import * as React from "react"

import { AutoComplete } from "@benflux-ui/react"

const FRAMEWORKS = [
  { value: "React", description: "A JavaScript library for building UI" },
  { value: "Next.js", description: "The React Framework for Production" },
  { value: "Vue", description: "Progressive JavaScript Framework" },
  { value: "Nuxt", description: "The Intuitive Vue Framework" },
  { value: "Svelte", description: "Cybernetically enhanced web apps" },
  { value: "SvelteKit", description: "The fastest way to build Svelte apps" },
  { value: "Angular", description: "The modern web developer's platform" },
  { value: "Remix", description: "Build better websites" },
]

export function AutoCompleteDemo() {
  const [value, setValue] = React.useState("")

  return (
    <div className="w-72 space-y-4">
      <AutoComplete
        options={FRAMEWORKS}
        value={value}
        onChange={setValue}
        placeholder="Search a framework..."
        allowClear
      />
      {value && (
        <p className="text-sm text-muted-foreground">
          Selected: <span className="font-medium text-foreground">{value}</span>
        </p>
      )}
    </div>
  )
}
