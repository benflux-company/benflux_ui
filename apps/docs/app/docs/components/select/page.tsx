import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { PropsTable } from "@/components/docs/props-table"
import { Check, ChevronDown } from "lucide-react"

export const metadata: Metadata = { title: "Select" }

export default function SelectPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Primitive
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Select</h1>
        <p className="text-lg text-muted-foreground">
          Displays a list of options for the user to pick from — triggered by a button.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-muted/20 p-10">
        <div className="w-full max-w-xs">
          <div className="flex h-9 w-full cursor-default items-center justify-between rounded-md border border-input bg-transparent px-3 text-sm text-muted-foreground">
            <span>Select a framework…</span>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </div>
        </div>
        <div className="w-full max-w-xs overflow-hidden rounded-md border border-border bg-popover shadow-md">
          {[
            { label: "Next.js", active: true },
            { label: "Remix", active: false },
            { label: "Astro", active: false },
            { label: "Vite", active: false },
          ].map((item) => (
            <div
              key={item.label}
              className={`flex cursor-pointer items-center gap-2 px-3 py-2 text-sm ${item.active ? "bg-accent font-medium" : "hover:bg-accent"}`}
            >
              <Check className={`h-4 w-4 ${item.active ? "opacity-100" : "opacity-0"}`} />
              {item.label}
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add select" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
  SelectLabel,
} from "@/components/ui/select"

export default function Example() {
  return (
    <Select>
      <SelectTrigger className="w-[200px]">
        <SelectValue placeholder="Select framework" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Frameworks</SelectLabel>
          <SelectItem value="next">Next.js</SelectItem>
          <SelectItem value="remix">Remix</SelectItem>
          <SelectItem value="astro">Astro</SelectItem>
          <SelectItem value="vite">Vite</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props — Select</h2>
        <PropsTable
          props={[
            {
              name: "value",
              type: "string",
              default: "—",
              description: "Controlled selected value",
            },
            {
              name: "onValueChange",
              type: "(value: string) => void",
              default: "—",
              description: "Callback when value changes",
            },
            {
              name: "defaultValue",
              type: "string",
              default: "—",
              description: "Initial value (uncontrolled)",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disables the select",
            },
          ]}
        />
      </div>
    </div>
  )
}
