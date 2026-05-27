import type { Metadata } from "next"
import Link from "next/link"

import { ArrowRight } from "lucide-react"

export const metadata: Metadata = { title: "Navigation Components" }

const components = [
  {
    name: "Dropdown Menu",
    href: "/docs/components/dropdown-menu",
    description: "Action menu triggered by a button",
  },
  {
    name: "Context Menu",
    href: "/docs/components/context-menu",
    description: "Right-click triggered action menu",
  },
  {
    name: "Breadcrumb",
    href: "/docs/components/breadcrumb",
    description: "Show the current page location hierarchy",
  },
  {
    name: "Pagination",
    href: "/docs/components/pagination",
    description: "Navigate between pages of content",
  },
  {
    name: "Carousel",
    href: "/docs/components/carousel",
    description: "Embla-powered swipeable slideshow",
  },
]

export default function NavigationCategoryPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Navigation</h1>
        <p className="text-lg text-muted-foreground">
          Components that help users move through your application.
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
