import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { Check, ChevronsUpDown } from "lucide-react"

export const metadata: Metadata = { title: "Combobox" }

export default function ComboboxPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Forms
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Combobox</h1>
        <p className="text-lg text-muted-foreground">
          An autocomplete input with a popover for selecting values. Supports single and
          multi-select.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-muted/20 p-10">
        <div className="w-full max-w-xs space-y-2">
          <button className="flex h-9 w-full items-center justify-between rounded-md border border-input bg-background px-3 text-sm">
            <span>Next.js</span>
            <ChevronsUpDown className="h-4 w-4 opacity-50" />
          </button>
          <div className="rounded-md border border-border bg-popover shadow-md">
            <div className="border-b border-border p-2">
              <input
                className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                placeholder="Search framework..."
                readOnly
              />
            </div>
            <div className="p-1">
              {["Next.js", "Remix", "Astro", "Vite", "Nuxt"].map((fw, i) => (
                <div
                  key={fw}
                  className={`flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1.5 text-sm ${fw === "Next.js" ? "bg-accent" : "hover:bg-accent"}`}
                >
                  <Check className={`h-4 w-4 ${fw === "Next.js" ? "opacity-100" : "opacity-0"}`} />
                  {fw}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add combobox" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Single select</h2>
        <CodeBlock
          code={`"use client"
import { useState } from "react"
import { Combobox } from "@/components/ui/combobox"

const frameworks = [
  { value: "next", label: "Next.js" },
  { value: "remix", label: "Remix" },
  { value: "astro", label: "Astro" },
]

export default function Example() {
  const [value, setValue] = useState("")
  return (
    <Combobox
      options={frameworks}
      value={value}
      onSelect={setValue}
      placeholder="Select framework..."
    />
  )
}`}
        />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Multi-select</h2>
        <CodeBlock
          code={`import { MultiCombobox } from "@/components/ui/combobox"

const [selected, setSelected] = useState<string[]>([])

<MultiCombobox
  options={frameworks}
  value={selected}
  onSelect={setSelected}
  placeholder="Select frameworks..."
/>`}
        />
      </div>
    </div>
  )
}
