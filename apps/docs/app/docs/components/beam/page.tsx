import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Animated Beam" }

export default function BeamPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          WOW Effects
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Animated Beam</h1>
        <p className="text-lg text-muted-foreground">
          An animated beam of light that travels along an SVG path between two elements. Perfect for
          visualizing data flows.
        </p>
      </div>

      <div className="flex items-center justify-center rounded-xl border border-border bg-muted/20 p-10">
        <div className="relative h-32 w-full max-w-xs">
          <div className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-xl border border-border bg-card text-lg shadow">
            ⚡
          </div>
          <div className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-xl border border-border bg-card text-lg shadow">
            🎯
          </div>
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 300 120">
            <defs>
              <linearGradient id="beam" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="transparent" />
                <stop offset="50%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
            <path
              d="M 60,60 C 120,60 180,60 240,60"
              stroke="hsl(var(--border))"
              strokeWidth="1.5"
              fill="none"
            />
            <path
              d="M 60,60 C 120,60 180,60 240,60"
              stroke="url(#beam)"
              strokeWidth="2"
              fill="none"
              className="animate-pulse"
            />
          </svg>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add beam" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { AnimatedBeam } from "@/components/ui/beam"
import { useRef } from "react"

export default function Example() {
  const containerRef = useRef<HTMLDivElement>(null)
  const fromRef = useRef<HTMLDivElement>(null)
  const toRef = useRef<HTMLDivElement>(null)

  return (
    <div ref={containerRef} className="relative">
      <div ref={fromRef}>Source</div>
      <div ref={toRef}>Target</div>
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={fromRef}
        toRef={toRef}
        curvature={50}
        duration={3}
      />
    </div>
  )
}`}
        />
      </div>
    </div>
  )
}
