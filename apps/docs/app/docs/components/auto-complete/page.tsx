import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ComponentPreview } from "@/components/docs/component-preview"
import { PropsTable } from "@/components/docs/props-table"
import { AutoCompleteDemo } from "@/components/previews/auto-complete-demo"

export const metadata: Metadata = { title: "AutoComplete" }

export default function AutoCompletePage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Data Entry
        </div>
        <h1 className="text-4xl font-bold tracking-tight">AutoComplete</h1>
        <p className="text-lg text-muted-foreground">
          An input field with a filterable suggestion dropdown. Supports keyboard navigation, custom
          filtering, and async data loading.
        </p>
      </div>

      <ComponentPreview
        code={`"use client"
import { useState } from "react"
import { AutoComplete } from "@benflux-ui/react"

const FRAMEWORKS = ["React", "Next.js", "Vue", "Nuxt", "Svelte", "Angular"]

export function Demo() {
  const [value, setValue] = useState("")

  return (
    <AutoComplete
      options={FRAMEWORKS}
      value={value}
      onChange={setValue}
      placeholder="Search a framework..."
      allowClear
    />
  )
}`}
      >
        <AutoCompleteDemo />
      </ComponentPreview>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add auto-complete" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Rich option objects</h2>
        <CodeBlock
          code={`<AutoComplete
  options={[
    { value: "react", label: "React", description: "A JavaScript library for building UI" },
    { value: "vue", label: "Vue", description: "Progressive JavaScript Framework" },
    { value: "svelte", label: "Svelte", disabled: true },
  ]}
  placeholder="Select framework"
/>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Custom filter</h2>
        <CodeBlock
          code={`// Filter only from the beginning of each option
<AutoComplete
  options={options}
  filterOption={(input, option) =>
    option.value.toLowerCase().startsWith(input.toLowerCase())
  }
/>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Async loading</h2>
        <CodeBlock
          code={`"use client"
const [options, setOptions] = useState([])
const [loading, setLoading] = useState(false)

const handleSearch = async (text: string) => {
  setLoading(true)
  const results = await fetchSuggestions(text)
  setOptions(results)
  setLoading(false)
}

<AutoComplete
  options={options}
  onSearch={handleSearch}
  loading={loading}
  filterOption={false}  // disable client-side filter
/>`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Props</h2>
        <PropsTable
          props={[
            {
              name: "options",
              type: "AutoCompleteOption[] | string[]",
              required: true,
              description: "List of suggestions. Strings are converted automatically.",
            },
            { name: "value", type: "string", default: "—", description: "Controlled input value" },
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
              description: "Called when the input value changes",
            },
            {
              name: "onSelect",
              type: "(value: string) => void",
              default: "—",
              description: "Called when the user selects an option",
            },
            {
              name: "onSearch",
              type: "(value: string) => void",
              default: "—",
              description: "Called on every keystroke. Use for async loading.",
            },
            {
              name: "placeholder",
              type: "string",
              default: '"Search..."',
              description: "Input placeholder",
            },
            {
              name: "allowClear",
              type: "boolean",
              default: "false",
              description: "Show a clear button when the input is not empty",
            },
            {
              name: "filterOption",
              type: "boolean | ((input, option) => boolean)",
              default: "true",
              description: "Client-side filter function. Pass false to disable.",
            },
            {
              name: "loading",
              type: "boolean",
              default: "false",
              description: "Shows a loading indicator in the dropdown",
            },
            {
              name: "disabled",
              type: "boolean",
              default: "false",
              description: "Disables the input",
            },
            {
              name: "notFoundContent",
              type: "ReactNode",
              default: '"No matches"',
              description: "Shown when no options match the search",
            },
          ]}
        />
      </div>
    </div>
  )
}
