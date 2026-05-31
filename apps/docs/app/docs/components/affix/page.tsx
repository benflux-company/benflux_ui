import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { AffixDemo } from "@/components/previews/affix-demo"

export const metadata: Metadata = { title: "Affix" }

export default function AffixPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Navigation
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Affix</h1>
        <p className="text-lg text-muted-foreground">
          Pins an element to a fixed position on the page once the user scrolls past a threshold.
          Useful for sticky toolbars, back-to-top buttons, or action bars.
        </p>
      </div>

      <ComponentPreview
        code={`import { Affix, Button } from "@benflux-ui/react"

<Affix offsetTop={80}>
  <Button>Sticky at 80px from top</Button>
</Affix>

<Affix offsetBottom={24}>
  <Button>Sticky at 24px from bottom</Button>
</Affix>`}
      >
        <AffixDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add affix" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Affix } from "@benflux-ui/react"

// Pin to top when scrolled 64px
<Affix offsetTop={64}>
  <div>I become sticky</div>
</Affix>

// React to affixed state changes
<Affix offsetTop={80} onChange={(affixed) => console.log(affixed)}>
  <Button>Toolbar</Button>
</Affix>

// Pin to bottom of viewport
<Affix offsetBottom={16}>
  <Button>Back to top</Button>
</Affix>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Custom scroll target</h2>
        <p className="text-sm text-muted-foreground">
          Use the <code className="rounded bg-muted px-1 py-0.5 text-xs">target</code> prop to
          observe a scrollable container instead of the window.
        </p>
        <CodeBlock
          code={`const containerRef = useRef<HTMLDivElement>(null)

<div ref={containerRef} className="h-64 overflow-y-auto">
  <Affix offsetTop={0} target={() => containerRef.current!}>
    <div>Sticky inside this container</div>
  </Affix>
  {/* long content */}
</div>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "offsetTop",
              type: "number",
              default: "0",
              description: "Pixels from top of viewport to trigger sticky mode",
            },
            {
              name: "offsetBottom",
              type: "number",
              default: "—",
              description:
                "Pixels from bottom of viewport to trigger sticky mode. Overrides offsetTop.",
            },
            {
              name: "target",
              type: "() => HTMLElement | Window",
              default: "window",
              description: "Scrollable container to observe",
            },
            {
              name: "onChange",
              type: "(affixed: boolean) => void",
              default: "—",
              description: "Called when the affix state changes",
            },
            {
              name: "zIndex",
              type: "number",
              default: "100",
              description: "z-index applied when element is affixed",
            },
            {
              name: "children",
              type: "ReactNode",
              required: true,
              description: "The element to affix",
            },
          ]}
        />
      </div>
    </div>
  )
}
