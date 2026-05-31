"use client"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { MessageCircle, Phone, Share2 } from "lucide-react"

export default function FloatButtonPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          WOW Effects
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Float Button</h1>
        <p className="text-lg text-muted-foreground">
          Fixed-position action button with tooltip, badge, group expansion, and a back-to-top
          variant.
        </p>
      </div>

      <ComponentPreview
        className="flex-wrap items-end gap-6"
        code={`import { FloatButton, FloatButtonBackTop, FloatButtonGroup } from "@benflux-ui/react"
import { MessageCircle, Phone, Share2 } from "lucide-react"

// Single button with badge + tooltip
<FloatButton
  icon={<MessageCircle />}
  tooltip="Chat with us"
  badge={3}
  position={{ bottom: 24, right: 24 }}
  onClick={openChat}
/>

// Square shape
<FloatButton shape="square" icon={<Share2 />} />

// Back to top (shows after 200px scroll)
<FloatButtonBackTop />

// Expandable group
<FloatButtonGroup position={{ bottom: 24, right: 24 }}>
  <FloatButton icon={<Phone />} tooltip="Call" size="sm" />
  <FloatButton icon={<MessageCircle />} tooltip="Chat" size="sm" />
  <FloatButton icon={<Share2 />} tooltip="Share" size="sm" />
</FloatButtonGroup>`}
      >
        {/* Simulated float buttons — they're normally fixed-position on screen */}
        <div className="flex flex-wrap items-end gap-6">
          <div className="relative">
            <button className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105">
              <MessageCircle className="h-5 w-5" />
            </button>
            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-destructive px-1 text-[10px] font-medium text-white">
              3
            </span>
          </div>
          <button className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105">
            <Share2 className="h-5 w-5" />
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-105">
            <Phone className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs text-primary">
            ↑ Back to top
          </div>
        </div>
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add float-button" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { FloatButton, FloatButtonBackTop, FloatButtonGroup } from "@benflux-ui/react"
import { MessageCircle } from "lucide-react"

// Basic
<FloatButton
  icon={<MessageCircle />}
  tooltip="Chat with us"
  badge={3}
  position={{ bottom: 24, right: 24 }}
  onClick={openChat}
/>

// Square shape, custom size
<FloatButton shape="square" size="lg" icon={<Share2 />} />

// Back to top (shows after 200px scroll)
<FloatButtonBackTop />

// Expandable group
<FloatButtonGroup position={{ bottom: 24, right: 24 }}>
  <FloatButton icon={<Phone />} tooltip="Call" size="sm" />
  <FloatButton icon={<MessageCircle />} tooltip="Chat" size="sm" />
  <FloatButton icon={<Share2 />} tooltip="Share" size="sm" />
</FloatButtonGroup>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — FloatButton</h2>
        <PropsTable
          props={[
            {
              name: "icon",
              type: "ReactNode",
              required: true,
              description: "Icon displayed inside the button",
            },
            {
              name: "tooltip",
              type: "string",
              default: "—",
              description: "Tooltip text shown on hover",
            },
            {
              name: "badge",
              type: "number | string",
              default: "—",
              description: "Badge value displayed on the top-right corner",
            },
            {
              name: "shape",
              type: '"circle" | "square"',
              default: '"circle"',
              description: "Button shape",
            },
            {
              name: "size",
              type: '"sm" | "default" | "lg"',
              default: '"default"',
              description: "Button size",
            },
            {
              name: "position",
              type: "{ top?: number; bottom?: number; left?: number; right?: number }",
              default: "—",
              description: "Fixed position offsets (px)",
            },
            {
              name: "onClick",
              type: "() => void",
              default: "—",
              description: "Click handler",
            },
          ]}
        />
      </div>
    </div>
  )
}
