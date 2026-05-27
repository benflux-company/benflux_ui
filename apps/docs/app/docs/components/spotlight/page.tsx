import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Spotlight" }

export default function SpotlightPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          WOW Effects
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Spotlight</h1>
        <p className="text-lg text-muted-foreground">
          A spotlight effect that follows the mouse cursor, illuminating content underneath.
        </p>
      </div>

      <div className="group relative flex h-48 cursor-none items-center justify-center overflow-hidden rounded-xl border border-border bg-zinc-950">
        <div
          className="bg-gradient-radial-at-center absolute inset-0 from-primary/20 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle 150px at 50% 50%, hsl(var(--primary) / 0.15), transparent)",
          }}
        />
        <p className="relative z-10 select-none text-sm text-zinc-400">Move your mouse here</p>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add spotlight" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Spotlight } from "@/components/ui/spotlight"

<div className="relative overflow-hidden rounded-xl bg-zinc-950 h-96">
  <Spotlight fill="hsl(var(--primary))" />
  <div className="relative z-10 text-white p-8">
    <h1 className="text-4xl font-bold">Hello World</h1>
  </div>
</div>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <div className="overflow-x-auto rounded-xl border border-border">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-muted/40">
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Prop</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Type</th>
                <th className="px-4 py-3 text-left font-medium text-muted-foreground">Default</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">fill</td>
                <td className="px-4 py-3 font-mono text-xs text-blue-400">string</td>
                <td className="px-4 py-3 text-xs text-muted-foreground">"white"</td>
              </tr>
              <tr className="border-b border-border">
                <td className="px-4 py-3 font-mono text-xs">size</td>
                <td className="px-4 py-3 font-mono text-xs text-blue-400">number</td>
                <td className="px-4 py-3 text-xs text-muted-foreground">200</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs">opacity</td>
                <td className="px-4 py-3 font-mono text-xs text-blue-400">number</td>
                <td className="px-4 py-3 text-xs text-muted-foreground">0.15</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
