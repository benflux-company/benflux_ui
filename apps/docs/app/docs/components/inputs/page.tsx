import type { Metadata } from "next"
import Link from "next/link"

import { ArrowRight } from "lucide-react"

export const metadata: Metadata = { title: "Input Components" }

const components = [
  {
    name: "Button",
    href: "/docs/components/button",
    description: "Trigger actions with multiple variants",
  },
  {
    name: "Input",
    href: "/docs/components/input",
    description: "Text entry with icons and variants",
  },
  { name: "Select", href: "/docs/components/select", description: "Dropdown option selector" },
  { name: "Calendar", href: "/docs/components/calendar", description: "Date picker calendar view" },
  {
    name: "Date Picker",
    href: "/docs/components/date-picker",
    description: "Single and range date selection",
  },
  {
    name: "Combobox",
    href: "/docs/components/combobox",
    description: "Searchable select with multi-select",
  },
  { name: "Form", href: "/docs/components/form", description: "React Hook Form + Zod integration" },
]

export default function InputsCategoryPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Inputs</h1>
        <p className="text-lg text-muted-foreground">
          Components for collecting and validating user input.
        </p>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {components.map((c) => (
          <Link
            key={c.name}
            href={c.href}
            className="group flex items-center justify-between rounded-xl border border-border p-5 transition-all hover:border-primary/40 hover:bg-accent/20"
          >
            <div>
              <p className="text-sm font-semibold">{c.name}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{c.description}</p>
            </div>
            <ArrowRight className="ml-3 h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-foreground" />
          </Link>
        ))}
      </div>
    </div>
  )
}
