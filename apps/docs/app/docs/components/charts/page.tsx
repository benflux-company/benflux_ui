import type { Metadata } from "next"
import Link from "next/link"

import { ArrowRight } from "lucide-react"

export const metadata: Metadata = { title: "Charts" }

const components = [
  {
    name: "Line Chart",
    href: "/docs/components/line-chart",
    description: "Trend visualization over time",
  },
  {
    name: "Bar Chart",
    href: "/docs/components/bar-chart",
    description: "Compare values across categories",
  },
  {
    name: "Area Chart",
    href: "/docs/components/area-chart",
    description: "Filled area for trend visualization",
  },
  {
    name: "Pie Chart",
    href: "/docs/components/pie-chart",
    description: "Part-to-whole ratio visualization",
  },
  {
    name: "Radar Chart",
    href: "/docs/components/radar-chart",
    description: "Multi-variable comparison spider chart",
  },
]

export default function ChartsCategoryPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Charts</h1>
        <p className="text-lg text-muted-foreground">
          Beautifully designed chart components built on Recharts. All charts support theme CSS
          variables and responsive sizing.
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
