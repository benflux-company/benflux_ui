"use client"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

import { QRCode } from "@benflux-ui/react"

export default function QRCodePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Data Display
        </div>
        <h1 className="text-4xl font-bold tracking-tight">QR Code</h1>
        <p className="text-lg text-muted-foreground">
          Generate scannable QR codes from any string value, with optional embedded image and status
          states.
        </p>
      </div>

      <ComponentPreview
        className="flex-wrap items-start gap-6"
        code={`import { QRCode } from "@benflux-ui/react"

// Basic SVG
<QRCode value="https://benflux-corp.com" bordered />

// Canvas renderer, high error correction, custom size
<QRCode value="https://benflux-corp.com" type="canvas" bordered size={150} level="H" />

// Loading state
<QRCode value="https://benflux-corp.com" status="loading" bordered />

// Expired state with refresh handler
<QRCode value="https://benflux-corp.com" status="expired" bordered onRefresh={refetch} />`}
      >
        <QRCode value="https://benflux-corp.com" bordered />
        <QRCode value="https://benflux-corp.com" type="canvas" bordered size={150} level="H" />
        <QRCode value="https://benflux-corp.com" status="loading" bordered />
        <QRCode value="https://benflux-corp.com" status="expired" bordered onRefresh={() => {}} />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add qrcode" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { QRCode } from "@benflux-ui/react"

// Basic
<QRCode value="https://example.com" bordered />

// Canvas renderer with high error correction
<QRCode value="https://example.com" type="canvas" level="H" size={200} />

// With embedded logo
<QRCode
  value="https://example.com"
  imageSettings={{ src: "/logo.png", width: 32, height: 32, excavate: true }}
  bordered
/>

// Status states
<QRCode value="https://example.com" status="loading" bordered />
<QRCode value="https://example.com" status="expired" onRefresh={refetch} bordered />`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "value",
              type: "string",
              required: true,
              description: "The text or URL to encode",
            },
            {
              name: "size",
              type: "number",
              default: "128",
              description: "Width and height in pixels",
            },
            {
              name: "level",
              type: '"L" | "M" | "Q" | "H"',
              default: '"M"',
              description: "Error correction level",
            },
            {
              name: "type",
              type: '"svg" | "canvas"',
              default: '"svg"',
              description: "Renderer type",
            },
            {
              name: "bgColor",
              type: "string",
              default: '"#ffffff"',
              description: "Background color",
            },
            {
              name: "fgColor",
              type: "string",
              default: '"#000000"',
              description: "Foreground color",
            },
            {
              name: "status",
              type: '"active" | "loading" | "expired"',
              default: '"active"',
              description: "Overlay status state",
            },
            {
              name: "onRefresh",
              type: "() => void",
              default: "—",
              description: "Called when refresh is clicked in expired state",
            },
            {
              name: "bordered",
              type: "boolean",
              default: "false",
              description: "Add border and padding around the QR code",
            },
            {
              name: "imageSettings",
              type: "object",
              default: "—",
              description: "Embed an image in the center of the QR code",
            },
          ]}
        />
      </div>
    </div>
  )
}
