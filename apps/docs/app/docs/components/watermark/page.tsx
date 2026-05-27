import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"

import { Watermark } from "@benflux-ui/react"

export const metadata: Metadata = { title: "Watermark" }

export default function WatermarkPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Feedback
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Watermark</h1>
        <p className="text-lg text-muted-foreground">
          Add a canvas-rendered watermark over any content area, with full control over text,
          rotation, opacity, and spacing.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card p-2">
        <Watermark
          content="Benflux UI"
          gap={[80, 60]}
          rotate={-22}
          font={{ fontSize: 14, color: "rgba(0,0,0,0.12)" }}
        >
          <div className="flex h-48 items-center justify-center text-muted-foreground">
            Watermark is rendered over this area
          </div>
        </Watermark>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add watermark" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Watermark } from "@benflux-ui/react"

<Watermark
  content="Confidential"
  rotate={-22}
  gap={[80, 60]}
  font={{ fontSize: 14, color: "rgba(0,0,0,0.12)", fontWeight: "bold" }}
>
  <YourContent />
</Watermark>

// Multi-line text
<Watermark content={["Internal", "Do not share"]} gap={[100, 80]}>
  <YourContent />
</Watermark>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <div className="overflow-hidden rounded-lg border border-border">
          <table className="w-full text-sm">
            <thead className="border-b border-border bg-muted/40">
              <tr>
                {["Prop", "Type", "Default", "Description"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left font-medium text-muted-foreground">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {[
                ["content", "string | string[]", "—", "Watermark text (array for multi-line)"],
                ["rotate", "number", "-22", "Rotation angle in degrees"],
                ["gap", "[number, number]", "[100, 100]", "Horizontal and vertical spacing"],
                ["offset", "[number, number]", "—", "Position offset from top-left"],
                ["font", "object", "—", "Font options: size, color, weight, family, style"],
                ["image", "string", "—", "Image URL to use instead of text"],
                ["width / height", "number", "—", "Image dimensions when using image watermark"],
              ].map(([prop, type, def, desc]) => (
                <tr key={prop}>
                  <td className="px-4 py-3 font-mono text-xs text-primary">{prop}</td>
                  <td className="px-4 py-3 font-mono text-xs text-muted-foreground">{type}</td>
                  <td className="px-4 py-3 font-mono text-xs">{def}</td>
                  <td className="px-4 py-3 text-muted-foreground">{desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
