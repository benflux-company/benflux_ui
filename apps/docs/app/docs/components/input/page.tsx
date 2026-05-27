import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { PropsTable } from "@/components/docs/props-table"
import { Eye, Mail, Search } from "lucide-react"

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
          Displays a form input field with multiple variants and states.
        </p>
      </div>

      <div className="mx-auto flex max-w-sm flex-col items-center gap-4 rounded-xl border border-border bg-muted/20 p-10">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input
            className="flex h-9 w-full rounded-md border border-input bg-transparent pl-9 pr-3 text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder="Search..."
            readOnly
          />
        </div>
        <input
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm placeholder:text-muted-foreground"
          placeholder="Email address"
          readOnly
        />
        <input
          className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm placeholder:text-muted-foreground"
          placeholder="Password"
          type="password"
          readOnly
        />
        <input
          className="flex h-9 w-full rounded-md border-0 border-b-2 border-input bg-transparent px-1 text-sm placeholder:text-muted-foreground focus:outline-none"
          placeholder="Underline variant"
          readOnly
        />
        <input
          className="flex h-9 w-full rounded-md border border-destructive/50 bg-transparent px-3 text-sm placeholder:text-muted-foreground"
          placeholder="Error state"
          readOnly
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add input" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Example() {
  return (
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      <Input id="email" type="email" placeholder="you@example.com" />
    </div>
  )
}`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">With icons</h2>
        <CodeBlock
          code={`import { Search } from "lucide-react"

<Input leftIcon={<Search />} placeholder="Search..." />
<Input rightIcon={<Eye />} type="password" placeholder="Password" />`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "variant",
              type: '"default" | "underline" | "ghost"',
              default: '"default"',
              description: "Visual style of the input",
            },
            {
              name: "error",
              type: "boolean | string",
              default: "false",
              description: "Shows error styling and optional message",
            },
            {
              name: "leftIcon",
              type: "ReactNode",
              default: "—",
              description: "Icon displayed inside the left side",
            },
            {
              name: "rightIcon",
              type: "ReactNode",
              default: "—",
              description: "Icon displayed inside the right side",
            },
            {
              name: "type",
              type: "string",
              default: '"text"',
              description: "HTML input type attribute",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disables the input",
            },
          ]}
        />
      </div>
    </div>
  )
}
