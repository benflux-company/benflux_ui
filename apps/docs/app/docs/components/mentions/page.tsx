import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { MentionsDemo } from "@/components/previews/mentions-demo"

export const metadata: Metadata = { title: "Mentions" }

export default function MentionsPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Data Entry
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Mentions</h1>
        <p className="text-lg text-muted-foreground">
          A textarea that detects trigger characters like{" "}
          <code className="rounded bg-muted px-1 py-0.5 text-sm">@</code> and shows a filtered
          dropdown of suggestions. Keyboard-navigable and fully accessible.
        </p>
      </div>

      <ComponentPreview
        code={`"use client"
import { useState } from "react"
import { Mentions } from "@benflux-ui/react"

const USERS = [
  { value: "alice", label: "Alice Martin", description: "Designer" },
  { value: "bob", label: "Bob Chen", description: "Engineer" },
  { value: "carol", label: "Carol Davis", description: "PM" },
]

export function Demo() {
  const [value, setValue] = useState("")

  return (
    <Mentions
      value={value}
      onChange={setValue}
      options={USERS}
      placeholder="Type @ to mention someone..."
      rows={4}
    />
  )
}`}
      >
        <MentionsDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add mentions" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Multiple prefixes</h2>
        <CodeBlock
          code={`// Trigger @ for users, # for issues
<Mentions
  prefix={["@", "#"]}
  options={[
    { value: "alice", label: "Alice Martin" },
    { value: "42", label: "#42 — Fix login bug" },
  ]}
  placeholder="Use @ for users, # for issues..."
/>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Custom filter</h2>
        <CodeBlock
          code={`<Mentions
  options={users}
  filterOption={(input, option) =>
    option.label?.toLowerCase().startsWith(input.toLowerCase()) ?? false
  }
/>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "options",
              type: "MentionOption[]",
              required: true,
              description: "List of mentionable items",
            },
            {
              name: "value",
              type: "string",
              default: "—",
              description: "Controlled textarea value",
            },
            {
              name: "defaultValue",
              type: "string",
              default: '""',
              description: "Initial value (uncontrolled)",
            },
            {
              name: "onChange",
              type: "(value: string) => void",
              default: "—",
              description: "Called on every change",
            },
            {
              name: "onSelect",
              type: "(option: MentionOption, prefix: string) => void",
              default: "—",
              description: "Called when a suggestion is selected",
            },
            {
              name: "prefix",
              type: "string | string[]",
              default: '"@"',
              description: "Trigger character(s)",
            },
            {
              name: "split",
              type: "string",
              default: '" "',
              description: "Character appended after the mention",
            },
            {
              name: "placeholder",
              type: "string",
              default: "—",
              description: "Textarea placeholder",
            },
            { name: "rows", type: "number", default: "4", description: "Number of visible rows" },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disable the textarea",
            },
            {
              name: "filterOption",
              type: "boolean | ((input, option) => boolean)",
              default: "true",
              description: "Client-side filtering",
            },
            {
              name: "notFoundContent",
              type: "ReactNode",
              default: '"No matches"',
              description: "Shown when no options match",
            },
          ]}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">MentionOption</h2>
        <CodeBlock
          language="tsx"
          code={`interface MentionOption {
  value: string        // Inserted into the textarea
  label?: string       // Display name in the dropdown
  avatar?: string      // Avatar image URL
  description?: string // Subtitle shown below the label
}`}
        />
      </div>
    </div>
  )
}
