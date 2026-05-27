import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { PropsTable } from "@/components/docs/props-table"

export const metadata: Metadata = { title: "Button" }

export default function ButtonPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Primitive
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Button</h1>
        <p className="text-lg text-muted-foreground">
          Displays a button or a component that looks like a button. Supports multiple variants,
          sizes, and states.
        </p>
      </div>

      {/* Preview */}
      <div className="flex flex-wrap items-center justify-center gap-3 rounded-xl border border-border bg-muted/20 p-10">
        <button className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
          Default
        </button>
        <button className="inline-flex h-9 items-center justify-center rounded-md border border-input bg-background px-4 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground">
          Outline
        </button>
        <button className="inline-flex h-9 items-center justify-center rounded-md px-4 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-accent-foreground">
          Ghost
        </button>
        <button className="inline-flex h-9 items-center justify-center rounded-md bg-secondary px-4 text-sm font-medium text-secondary-foreground transition-colors hover:bg-secondary/80">
          Secondary
        </button>
        <button className="inline-flex h-9 items-center justify-center rounded-md bg-destructive px-4 text-sm font-medium text-destructive-foreground transition-colors hover:bg-destructive/90">
          Destructive
        </button>
        <button className="inline-flex h-9 items-center justify-center rounded-md bg-gradient-to-r from-primary to-purple-600 px-4 text-sm font-medium text-white transition-opacity hover:opacity-90">
          Gradient
        </button>
        <button className="inline-flex h-9 items-center justify-center rounded-md border border-border px-4 text-sm font-medium text-muted-foreground underline-offset-4 transition-colors hover:underline">
          Link
        </button>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add button" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Button } from "@/components/ui/button"

export default function Example() {
  return (
    <div className="flex gap-2">
      <Button>Default</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Delete</Button>
      <Button size="sm">Small</Button>
      <Button size="lg">Large</Button>
      <Button loading>Loading...</Button>
    </div>
  )
}`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Variants</h2>
        <div className="space-y-3">
          <CodeBlock
            code={`<Button variant="default">Default</Button>\n<Button variant="outline">Outline</Button>\n<Button variant="ghost">Ghost</Button>\n<Button variant="secondary">Secondary</Button>\n<Button variant="destructive">Destructive</Button>\n<Button variant="gradient">Gradient</Button>\n<Button variant="link">Link</Button>`}
          />
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Sizes</h2>
        <div className="flex flex-wrap items-center justify-center gap-3 rounded-xl border border-border bg-muted/20 p-8">
          <button className="inline-flex h-7 items-center justify-center rounded-md bg-primary px-3 text-xs font-medium text-primary-foreground">
            Small
          </button>
          <button className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground">
            Default
          </button>
          <button className="inline-flex h-11 items-center justify-center rounded-md bg-primary px-8 text-base font-medium text-primary-foreground">
            Large
          </button>
        </div>
        <CodeBlock
          code={`<Button size="sm">Small</Button>\n<Button size="default">Default</Button>\n<Button size="lg">Large</Button>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">With icons</h2>
        <CodeBlock
          code={`import { Mail, ArrowRight } from "lucide-react"

<Button leftIcon={<Mail />}>Email</Button>
<Button rightIcon={<ArrowRight />}>Continue</Button>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "variant",
              type: '"default" | "outline" | "ghost" | "secondary" | "destructive" | "gradient" | "link"',
              default: '"default"',
              description: "Visual style of the button",
            },
            {
              name: "size",
              type: '"sm" | "default" | "lg" | "icon"',
              default: '"default"',
              description: "Size of the button",
            },
            {
              name: "loading",
              type: "boolean",
              default: "false",
              description: "Shows a loading spinner and disables the button",
            },
            {
              name: "leftIcon",
              type: "ReactNode",
              default: "—",
              description: "Icon rendered before the button text",
            },
            {
              name: "rightIcon",
              type: "ReactNode",
              default: "—",
              description: "Icon rendered after the button text",
            },
            {
              name: "asChild",
              type: "boolean",
              default: "false",
              description: "Merges props onto child element (Radix Slot)",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disables the button",
            },
          ]}
        />
      </div>
    </div>
  )
}
