"use client"

import * as React from "react"

import { Collapse } from "@benflux-ui/react"
import { Badge } from "@benflux-ui/react"

const ITEMS = [
  {
    key: "1",
    label: "What is Benflux UI?",
    children: (
      <p>
        Benflux UI is a modern React component library built with Tailwind CSS and Framer Motion. It
        provides 80+ accessible, animated components for building beautiful interfaces.
      </p>
    ),
  },
  {
    key: "2",
    label: "How is it different from shadcn/ui?",
    extra: (
      <Badge variant="secondary" className="text-xs">
        Popular
      </Badge>
    ),
    children: (
      <p>
        Benflux UI extends the shadcn approach with richer animations via Framer Motion, additional
        components like Cascader, Mentions, and Splitter, and a built-in theming system.
      </p>
    ),
  },
  {
    key: "3",
    label: "Is it accessible?",
    children: (
      <p>
        Yes. All interactive components follow WAI-ARIA patterns and are built on top of Radix UI
        primitives.
      </p>
    ),
  },
  {
    key: "4",
    label: "Disabled panel",
    collapsible: "disabled" as const,
    children: <p>This panel cannot be expanded.</p>,
  },
]

export function CollapseDemo() {
  return (
    <div className="w-full max-w-xl space-y-8">
      <div className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground">Default (multiple open)</p>
        <Collapse items={ITEMS} defaultActiveKey={["1"]} />
      </div>
      <div className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground">
          Accordion mode (one open at a time)
        </p>
        <Collapse items={ITEMS.slice(0, 3)} accordion defaultActiveKey={["1"]} />
      </div>
      <div className="space-y-2">
        <p className="text-xs font-medium text-muted-foreground">Ghost variant (no outer border)</p>
        <Collapse items={ITEMS.slice(0, 3)} ghost />
      </div>
    </div>
  )
}
