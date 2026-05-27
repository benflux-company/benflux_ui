import type { Metadata } from "next"
import Link from "next/link"

import { ArrowRight } from "lucide-react"

export const metadata: Metadata = { title: "Layout Components" }

const components = [
  {
    name: "Separator",
    href: "/docs/components/separator",
    description: "Visual or semantic divider between content sections",
  },
  {
    name: "Scroll Area",
    href: "/docs/components/scroll-area",
    description: "Custom cross-browser styled scrollbars",
  },
  {
    name: "Collapsible",
    href: "/docs/components/collapsible",
    description: "Interactive expand/collapse panel",
  },
  {
    name: "Resizable",
    href: "/docs/components/resizable",
    description: "Drag-to-resize panel groups",
  },
  {
    name: "Tag / Chip",
    href: "/docs/components/tag",
    description: "Removable tag labels and tag input",
  },
]

export default function LayoutCategoryPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Layout</h1>
        <p className="text-lg text-muted-foreground">
          Components for structuring and organizing page content.
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
