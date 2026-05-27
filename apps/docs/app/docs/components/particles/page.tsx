import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Particle System" }

// Deterministic values — no Math.random() in server components (causes hydration mismatch)
const PARTICLES = [
  { left: 8, top: 14, opacity: 0.7, delay: 0.2, duration: 3.1 },
  { left: 23, top: 72, opacity: 0.5, delay: 1.4, duration: 4.2 },
  { left: 41, top: 31, opacity: 0.9, delay: 0.8, duration: 2.8 },
  { left: 57, top: 85, opacity: 0.4, delay: 2.1, duration: 5.0 },
  { left: 76, top: 20, opacity: 0.6, delay: 0.5, duration: 3.7 },
  { left: 90, top: 60, opacity: 0.8, delay: 1.9, duration: 2.5 },
  { left: 15, top: 48, opacity: 0.5, delay: 2.8, duration: 4.5 },
  { left: 34, top: 90, opacity: 0.7, delay: 0.3, duration: 3.3 },
  { left: 62, top: 10, opacity: 0.4, delay: 1.7, duration: 5.2 },
  { left: 84, top: 45, opacity: 0.9, delay: 2.4, duration: 2.9 },
  { left: 5, top: 65, opacity: 0.6, delay: 0.6, duration: 4.1 },
  { left: 50, top: 55, opacity: 0.5, delay: 1.1, duration: 3.6 },
  { left: 72, top: 78, opacity: 0.7, delay: 2.6, duration: 2.7 },
  { left: 28, top: 22, opacity: 0.4, delay: 0.9, duration: 4.8 },
  { left: 95, top: 35, opacity: 0.8, delay: 1.5, duration: 3.4 },
  { left: 18, top: 95, opacity: 0.6, delay: 2.2, duration: 5.1 },
  { left: 46, top: 42, opacity: 0.5, delay: 0.7, duration: 2.6 },
  { left: 68, top: 8, opacity: 0.9, delay: 1.8, duration: 4.3 },
  { left: 82, top: 68, opacity: 0.4, delay: 2.9, duration: 3.8 },
  { left: 12, top: 38, opacity: 0.7, delay: 0.4, duration: 4.9 },
  { left: 38, top: 62, opacity: 0.5, delay: 1.3, duration: 3.2 },
  { left: 55, top: 18, opacity: 0.8, delay: 2.5, duration: 2.4 },
  { left: 78, top: 92, opacity: 0.6, delay: 0.1, duration: 5.3 },
  { left: 92, top: 25, opacity: 0.4, delay: 1.6, duration: 3.9 },
  { left: 3, top: 80, opacity: 0.9, delay: 2.3, duration: 4.6 },
  { left: 30, top: 5, opacity: 0.5, delay: 0.8, duration: 3.0 },
  { left: 65, top: 52, opacity: 0.7, delay: 2.7, duration: 4.4 },
  { left: 88, top: 15, opacity: 0.6, delay: 1.2, duration: 2.3 },
  { left: 44, top: 75, opacity: 0.4, delay: 1.0, duration: 5.5 },
  { left: 20, top: 30, opacity: 0.8, delay: 2.0, duration: 3.5 },
]

export default function ParticlesPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          WOW Effects
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Particle System</h1>
        <p className="text-lg text-muted-foreground">
          An interactive canvas-based particle field. Particles react to mouse movement.
        </p>
      </div>

      <div className="relative flex h-48 items-center justify-center overflow-hidden rounded-xl border border-border bg-zinc-950">
        {PARTICLES.map((p, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-primary/60"
            style={{
              left: `${p.left}%`,
              top: `${p.top}%`,
              opacity: p.opacity,
              animationDelay: `${p.delay}s`,
              animationDuration: `${p.duration}s`,
            }}
          />
        ))}
        <p className="relative z-10 text-sm text-zinc-400">Interactive particle field</p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add particles" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Particles } from "@/components/ui/particles"

// Basic usage
<div className="relative h-screen bg-black">
  <Particles />
  <div className="relative z-10">Your content</div>
</div>

// Custom configuration
<Particles
  count={100}
  color="hsl(var(--primary))"
  speed={0.5}
  interactive   // particles react to mouse
  connect       // draw lines between nearby particles
  className="absolute inset-0"
/>`}
        />
      </div>
    </div>
  )
}
