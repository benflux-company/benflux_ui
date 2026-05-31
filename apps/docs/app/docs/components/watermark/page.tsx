import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

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

      <ComponentPreview
        className="block w-full"
        code={`import { Watermark } from "@benflux-ui/react"

<Watermark
  content="Benflux UI"
  gap={[80, 60]}
  rotate={-22}
  font={{ fontSize: 14, color: "rgba(0,0,0,0.12)" }}
>
  <div className="h-48 flex items-center justify-center text-muted-foreground">
    Watermark is rendered over this area
  </div>
</Watermark>

// Multi-line
<Watermark content={["Internal", "Do not share"]} gap={[100, 80]}>
  <YourContent />
</Watermark>`}
      >
        <div className="w-full rounded-xl border border-border bg-card p-2">
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
      </ComponentPreview>

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
        <PropsTable
          props={[
            {
              name: "content",
              type: "string | string[]",
              required: true,
              description: "Watermark text — array for multi-line",
            },
            {
              name: "rotate",
              type: "number",
              default: "-22",
              description: "Rotation angle in degrees",
            },
            {
              name: "gap",
              type: "[number, number]",
              default: "[100, 100]",
              description: "Horizontal and vertical spacing between watermarks",
            },
            {
              name: "offset",
              type: "[number, number]",
              default: "—",
              description: "Position offset from the top-left corner",
            },
            {
              name: "font",
              type: "{ fontSize?: number; color?: string; fontWeight?: string; fontFamily?: string }",
              default: "—",
              description: "Font options for the watermark text",
            },
            {
              name: "image",
              type: "string",
              default: "—",
              description: "Image URL to use instead of text",
            },
            {
              name: "width",
              type: "number",
              default: "—",
              description: "Image width when using image watermark",
            },
            {
              name: "height",
              type: "number",
              default: "—",
              description: "Image height when using image watermark",
            },
          ]}
        />
      </div>
    </div>
  )
}
