import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"

import { Input, Label } from "@benflux-ui/react"

export const metadata: Metadata = { title: "Input" }

export default function InputPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Primitive
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Input</h1>
        <p className="text-lg text-muted-foreground">
          Displays a form input field or a component that looks like an input field.
        </p>
      </div>

      <ComponentPreview
        code={`import { Input } from "@benflux-ui/react"

<Input placeholder="Default input" />
<Input placeholder="Outlined" variant="outline" />
<Input placeholder="Filled" variant="filled" />
<Input placeholder="Ghost" variant="ghost" />`}
        className="w-full max-w-sm flex-col items-stretch"
      >
        <div className="flex w-full max-w-sm flex-col gap-3">
          <Input placeholder="Default input" />
          <Input placeholder="Filled" variant="filled" />
          <Input placeholder="Ghost" variant="ghost" />
          <Input placeholder="Underline" variant="underline" />
        </div>
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add input" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Input } from "@benflux-ui/react"

<Input placeholder="Enter your email" type="email" />`}
        />
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">With Label</h2>
        <ComponentPreview
          code={`import { Input, Label } from "@benflux-ui/react"

<div className="space-y-1.5">
  <Label htmlFor="email">Email</Label>
  <Input id="email" type="email" placeholder="you@example.com" />
</div>`}
        >
          <div className="w-full max-w-sm space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" placeholder="you@example.com" />
          </div>
        </ComponentPreview>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold tracking-tight">Disabled</h2>
        <ComponentPreview code={`<Input disabled placeholder="Disabled input" />`}>
          <Input disabled placeholder="Disabled input" className="max-w-sm" />
        </ComponentPreview>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "variant",
              type: '"default" | "filled" | "ghost" | "underline"',
              default: '"default"',
              description: "Visual style of the input",
            },
            {
              name: "inputSize",
              type: '"sm" | "default" | "lg"',
              default: '"default"',
              description: "Size of the input",
            },
            {
              name: "error",
              type: "boolean",
              default: "false",
              description: "Shows error state styling",
            },
            {
              name: "success",
              type: "boolean",
              default: "false",
              description: "Shows success state styling",
            },
          ]}
        />
      </div>
    </div>
  )
}
