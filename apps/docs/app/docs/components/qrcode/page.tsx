"use client"

import { CodeBlock } from "@/components/docs/code-block"

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

      <div className="flex flex-wrap items-start gap-8 rounded-xl border border-border bg-card p-8">
        <QRCode value="https://benflux-corp.com" bordered />
        <QRCode value="https://benflux-corp.com" type="canvas" bordered size={150} level="H" />
        <QRCode value="https://benflux-corp.com" status="loading" bordered />
        <QRCode value="https://benflux-corp.com" status="expired" bordered onRefresh={() => {}} />
      </div>

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

// Loading / expired states
<QRCode value="https://example.com" status="loading" bordered />
<QRCode value="https://example.com" status="expired" onRefresh={refetch} bordered />`}
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
                ["value", "string", "—", "The text/URL to encode"],
                ["size", "number", "128", "Width and height in pixels"],
                ["level", '"L"|"M"|"Q"|"H"', '"M"', "Error correction level"],
                ["type", '"svg"|"canvas"', '"svg"', "Renderer type"],
                ["bgColor", "string", '"#ffffff"', "Background color"],
                ["fgColor", "string", '"#000000"', "Foreground color"],
                ["status", '"active"|"loading"|"expired"', '"active"', "Overlay state"],
                ["onRefresh", "() => void", "—", "Called when refresh is clicked (expired state)"],
                ["bordered", "boolean", "false", "Add border and padding around the QR code"],
                ["imageSettings", "object", "—", "Embed an image in the center"],
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
