"use client"

import * as React from "react"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

import { Button, Tour, type TourStep } from "@benflux-ui/react"

function TourDemo() {
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
      title: "Highlight any element",
      description: "Each step can spotlight any DOM element with a customizable placement.",
      target: () => ref2.current,
      placement: "top",
    },
    {
      title: "Done!",
      description: "That's the end of the tour. Click outside or press Esc to dismiss anytime.",
    },
  ]

  return (
    <div className="flex flex-col items-start gap-4">
      <Button ref={ref1} onClick={() => setOpen(true)}>
        Start Tour
      </Button>
      <div
        ref={ref2}
        className="rounded-md border border-dashed border-border px-4 py-2 text-sm text-muted-foreground"
      >
        Step 2 target element
      </div>
      <Tour open={open} onClose={() => setOpen(false)} steps={steps} />
    </div>
  )
}

export default function TourPage() {
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

      <ComponentPreview
        className="flex-col items-start gap-4"
        code={`import { Tour, type TourStep } from "@benflux-ui/react"

const buttonRef = useRef<HTMLButtonElement>(null)
const [open, setOpen] = useState(false)

const steps: TourStep[] = [
  {
    title: "Step 1",
    description: "Click this button to get started.",
    target: () => buttonRef.current,
    placement: "bottom",
  },
  {
    title: "Done!",
    description: "You've completed the tour!",
  },
]

<Button ref={buttonRef} onClick={() => setOpen(true)}>Start Tour</Button>
<Tour open={open} onClose={() => setOpen(false)} steps={steps} />`}
      >
        <TourDemo />
      </ComponentPreview>

      <div className="space-y-3">
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

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — Tour</h2>
        <PropsTable
          props={[
            {
              name: "open",
              type: "boolean",
              required: true,
              description: "Controls visibility of the tour",
            },
            {
              name: "onClose",
              type: "() => void",
              required: true,
              description: "Called when the tour is dismissed",
            },
            {
              name: "steps",
              type: "TourStep[]",
              required: true,
              description: "Array of step definitions",
            },
            {
              name: "current",
              type: "number",
              default: "0",
              description: "Controlled current step index",
            },
            {
              name: "onChange",
              type: "(current: number) => void",
              default: "—",
              description: "Called when the step changes",
            },
          ]}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — TourStep</h2>
        <PropsTable
          props={[
            {
              name: "title",
              type: "ReactNode",
              required: true,
              description: "Step title",
            },
            {
              name: "description",
              type: "ReactNode",
              default: "—",
              description: "Step body text",
            },
            {
              name: "target",
              type: "() => Element | null",
              default: "—",
              description: "Ref getter pointing to the element to highlight",
            },
            {
              name: "placement",
              type: '"top" | "bottom" | "left" | "right" | "center"',
              default: '"bottom"',
              description: "Popover placement relative to the target",
            },
          ]}
        />
      </div>
    </div>
  )
}
