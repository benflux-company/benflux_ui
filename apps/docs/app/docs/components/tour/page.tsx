"use client"

import * as React from "react"

import { CodeBlock } from "@/components/docs/code-block"

import { Button, Tour, type TourStep } from "@benflux-ui/react"

export default function TourPage() {
  const [open, setOpen] = React.useState(false)
  const ref1 = React.useRef<HTMLButtonElement>(null)
  const ref2 = React.useRef<HTMLDivElement>(null)

  const steps: TourStep[] = [
    {
      title: "Welcome to Benflux UI",
      description:
        "This is the Tour component — it guides users through key UI elements step by step.",
      target: () => ref1.current,
      placement: "bottom",
    },
    {
      title: "Usage Code",
      description: "Each step can highlight any DOM element with a customizable placement.",
      target: () => ref2.current,
      placement: "top",
    },
    {
      title: "Done!",
      description: "That's the end of the tour. You can dismiss it anytime by clicking outside.",
    },
  ]

  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Feedback
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Tour</h1>
        <p className="text-lg text-muted-foreground">
          Step-by-step onboarding guide that spotlights specific elements with a popover and mask
          overlay.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card p-8">
        <Button ref={ref1} onClick={() => setOpen(true)}>
          Start Tour
        </Button>
        <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
      </div>

      <div className="space-y-3" ref={ref2}>
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add tour" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Tour, type TourStep } from "@benflux-ui/react"

const buttonRef = useRef<HTMLButtonElement>(null)

const steps: TourStep[] = [
  {
    title: "Step 1",
    description: "Click this button to proceed.",
    target: () => buttonRef.current,
    placement: "bottom",  // "top" | "bottom" | "left" | "right" | "center"
  },
  {
    title: "Done",
    description: "You've completed the tour!",
  },
]

<Button ref={buttonRef}>Action</Button>
<Tour open={open} onClose={() => setOpen(false)} steps={steps} />`}
        />
      </div>
    </div>
  )
}
