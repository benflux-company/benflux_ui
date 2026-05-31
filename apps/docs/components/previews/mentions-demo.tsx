"use client"

import * as React from "react"

import { Mentions } from "@benflux-ui/react"

const USERS = [
  { value: "alice", label: "Alice Martin", description: "Designer" },
  { value: "bob", label: "Bob Chen", description: "Engineer" },
  { value: "carol", label: "Carol Davis", description: "Product Manager" },
  { value: "dan", label: "Dan Wilson", description: "DevOps" },
  { value: "eve", label: "Eve Johnson", description: "QA Engineer" },
]

export function MentionsDemo() {
  const [value, setValue] = React.useState("")

  return (
    <div className="w-96 space-y-3">
      <Mentions
        value={value}
        onChange={setValue}
        options={USERS}
        placeholder="Type @ to mention someone..."
        rows={3}
      />
      <p className="text-xs text-muted-foreground">
        Type{" "}
        <kbd className="rounded border border-border bg-muted px-1 py-0.5 font-mono text-xs">@</kbd>{" "}
        followed by a name to trigger autocomplete.
      </p>
    </div>
  )
}
