import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Marquee" }

const items = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind CSS",
  "Radix UI",
  "Framer Motion",
  "TanStack",
  "Recharts",
  "Zod",
  "React Hook Form",
]

export default function MarqueePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          WOW Effects
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Marquee</h1>
        <p className="text-lg text-muted-foreground">
          An infinite auto-scrolling ticker. Great for logos, testimonials, and feature lists.
        </p>
      </div>

      <div className="overflow-hidden rounded-xl border border-border bg-muted/20 p-6">
        <div
          className="flex animate-[marquee_20s_linear_infinite] gap-4"
          style={{ width: "max-content" }}
        >
          {[...items, ...items].map((item, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-sm font-medium"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add marquee" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Marquee } from "@/components/ui/marquee"

const logos = ["Next.js", "React", "TypeScript", "Tailwind"]

// Horizontal (default)
<Marquee>
  {logos.map((logo) => (
    <div key={logo} className="px-4 py-2 border rounded-full">{logo}</div>
  ))}
</Marquee>

// Reverse direction
<Marquee reverse>
  {logos.map((logo) => (
    <div key={logo} className="px-4 py-2 border rounded-full">{logo}</div>
  ))}
</Marquee>

// Vertical
<Marquee vertical className="h-48">
  {items}
</Marquee>`}
        />
      </div>
    </div>
  )
}
