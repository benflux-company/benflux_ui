import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { AnchorDemo } from "@/components/previews/anchor-demo"

export const metadata: Metadata = { title: "Anchor" }

export default function AnchorPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Navigation
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Anchor</h1>
        <p className="text-lg text-muted-foreground">
          In-page navigation links that track the user's scroll position and highlight the active
          section. Perfect for long documentation pages or landing pages.
        </p>
      </div>

      <ComponentPreview
        code={`import { Anchor } from "@benflux-ui/react"

<Anchor
  affix={false}
  items={[
    { href: "#introduction", title: "Introduction" },
    {
      href: "#components",
      title: "Components",
      children: [
        { href: "#button", title: "Button" },
        { href: "#input", title: "Input" },
      ],
    },
    { href: "#api", title: "API Reference" },
    { href: "#changelog", title: "Changelog" },
  ]}
/>`}
      >
        <AnchorDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add anchor" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Sticky sidebar usage</h2>
        <CodeBlock
          code={`// Add IDs to your headings
<h2 id="installation">Installation</h2>
<h2 id="usage">Usage</h2>
<h2 id="api">API</h2>

// Anchor sticks to top:20 by default (affix=true)
<div className="flex gap-12">
  <main className="flex-1">
    {/* page content */}
  </main>
  <Anchor
    items={[
      { href: "#installation", title: "Installation" },
      { href: "#usage", title: "Usage" },
      { href: "#api", title: "API" },
    ]}
  />
</div>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Horizontal direction</h2>
        <CodeBlock
          code={`<Anchor
  direction="horizontal"
  items={[
    { href: "#overview", title: "Overview" },
    { href: "#features", title: "Features" },
    { href: "#pricing", title: "Pricing" },
  ]}
/>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "items",
              type: "AnchorLinkItem[]",
              required: true,
              description: "List of anchor link items (supports nested children)",
            },
            {
              name: "affix",
              type: "boolean",
              default: "true",
              description: "Whether to stick to the top when scrolling",
            },
            {
              name: "offsetTop",
              type: "number",
              default: "80",
              description: "Scroll offset for detecting the active section",
            },
            {
              name: "targetOffset",
              type: "number",
              default: "—",
              description: "Override the scroll detection threshold (defaults to offsetTop + 20)",
            },
            {
              name: "direction",
              type: '"vertical" | "horizontal"',
              default: '"vertical"',
              description: "Layout direction of the anchor links",
            },
            {
              name: "onChange",
              type: "(currentLink: string) => void",
              default: "—",
              description: "Called when the active link changes",
            },
          ]}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">AnchorLinkItem</h2>
        <CodeBlock
          language="tsx"
          code={`interface AnchorLinkItem {
  href: string         // Target ID, e.g. "#installation"
  title: ReactNode     // Link label
  children?: AnchorLinkItem[]  // Nested links
}`}
        />
      </div>
    </div>
  )
}
