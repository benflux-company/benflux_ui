import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { ArrowRight, Mail, Star, Trash2 } from "lucide-react"

import { Button } from "@benflux-ui/react"

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

      <ComponentPreview
        code={`import { Button } from "@benflux-ui/react"

<Button>Default</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="gradient">Gradient</Button>
<Button variant="glow">Glow</Button>
<Button variant="link">Link</Button>`}
      >
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="gradient">Gradient</Button>
        <Button variant="glow">Glow</Button>
        <Button variant="link">Link</Button>
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add button" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Button } from "@benflux-ui/react"

export default function Example() {
  return <Button>Click me</Button>
}`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Sizes</h2>
        <ComponentPreview
          code={`<Button size="xs">Extra Small</Button>
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="xl">Extra Large</Button>`}
        >
          <Button size="xs">Extra Small</Button>
          <Button size="sm">Small</Button>
          <Button size="default">Default</Button>
          <Button size="lg">Large</Button>
          <Button size="xl">Extra Large</Button>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">With Icons</h2>
        <ComponentPreview
          code={`import { Mail, ArrowRight, Trash2, Star } from "lucide-react"

<Button leftIcon={<Mail />}>Email</Button>
<Button rightIcon={<ArrowRight />}>Continue</Button>
<Button variant="destructive" leftIcon={<Trash2 />}>Delete</Button>
<Button variant="outline" leftIcon={<Star />}>Favorite</Button>`}
        >
          <Button leftIcon={<Mail />}>Email</Button>
          <Button rightIcon={<ArrowRight />}>Continue</Button>
          <Button variant="destructive" leftIcon={<Trash2 />}>
            Delete
          </Button>
          <Button variant="outline" leftIcon={<Star />}>
            Favorite
          </Button>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Loading State</h2>
        <ComponentPreview
          code={`<Button loading>Saving...</Button>
<Button loading variant="outline">Processing</Button>`}
        >
          <Button loading>Saving...</Button>
          <Button loading variant="outline">
            Processing
          </Button>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Disabled</h2>
        <ComponentPreview
          code={`<Button disabled>Disabled</Button>
<Button disabled variant="outline">Disabled</Button>`}
        >
          <Button disabled>Disabled</Button>
          <Button disabled variant="outline">
            Disabled
          </Button>
        </ComponentPreview>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "variant",
              type: '"default" | "outline" | "ghost" | "secondary" | "destructive" | "gradient" | "glow" | "glass" | "link"',
              default: '"default"',
              description: "Visual style of the button",
            },
            {
              name: "size",
              type: '"xs" | "sm" | "default" | "lg" | "xl" | "icon" | "icon-sm" | "icon-lg"',
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
              name: "animate",
              type: "boolean",
              default: "true",
              description: "Enables tap animation via framer-motion",
            },
          ]}
        />
      </div>
    </div>
  )
}
