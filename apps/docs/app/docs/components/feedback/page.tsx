import type { Metadata } from "next"
import Link from "next/link"

import { ArrowRight } from "lucide-react"

export const metadata: Metadata = { title: "Feedback Components" }

const components = [
  {
    name: "Toast",
    href: "/docs/components/toast",
    description: "Temporary notification messages via Sonner",
  },
  {
    name: "Tooltip",
    href: "/docs/components/tooltip",
    description: "Hover-triggered info overlay",
  },
  { name: "Popover", href: "/docs/components/popover", description: "Rich floating content panel" },
  { name: "Sheet", href: "/docs/components/sheet", description: "Side panel sliding overlay" },
  { name: "Drawer", href: "/docs/components/drawer", description: "Bottom sheet drawer via Vaul" },
  { name: "Dialog", href: "/docs/components/dialog", description: "Modal overlay for actions" },
  { name: "Alert", href: "/docs/components/alert", description: "Contextual feedback messages" },
]

export default function FeedbackCategoryPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Feedback</h1>
        <p className="text-lg text-muted-foreground">
          Components that inform users about application state and await their response.
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
