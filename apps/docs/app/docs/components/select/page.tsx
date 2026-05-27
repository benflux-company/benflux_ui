import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { SelectDemo } from "@/components/previews/select-demo"

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
          Displays a list of options for the user to pick from, triggered by a button.
        </p>
      </div>

      <ComponentPreview
        code={`import {
  Select, SelectContent, SelectItem,
  SelectTrigger, SelectValue,
} from "@benflux-ui/react"

<Select>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Select a fruit" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">Apple</SelectItem>
    <SelectItem value="banana">Banana</SelectItem>
    <SelectItem value="orange">Orange</SelectItem>
    <SelectItem value="mango">Mango</SelectItem>
    <SelectItem value="grape">Grape</SelectItem>
  </SelectContent>
</Select>`}
      >
        <SelectDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add select" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import {
  Select, SelectContent, SelectItem,
  SelectTrigger, SelectValue,
} from "@benflux-ui/react"

<Select onValueChange={(value) => console.log(value)}>
  <SelectTrigger>
    <SelectValue placeholder="Pick an option" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="option1">Option 1</SelectItem>
    <SelectItem value="option2">Option 2</SelectItem>
  </SelectContent>
</Select>`}
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
              description: "Controlled value of the select",
            },
            {
              name: "defaultValue",
              type: "string",
              default: "—",
              description: "Default value (uncontrolled)",
            },
            {
              name: "onValueChange",
              type: "(value: string) => void",
              default: "—",
              description: "Called when the selected value changes",
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
