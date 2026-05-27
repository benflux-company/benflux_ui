import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { Activity, DollarSign, ShoppingCart, TrendingDown, TrendingUp, Users } from "lucide-react"

export const metadata: Metadata = { title: "Statistic" }

const stats = [
  { label: "Total Revenue", value: "$45,231", trend: "+20.1%", up: true, icon: DollarSign },
  { label: "Active Users", value: "2,350", trend: "+15.3%", up: true, icon: Users },
  { label: "New Orders", value: "1,247", trend: "-4.2%", up: false, icon: ShoppingCart },
  { label: "Uptime", value: "99.9%", trend: "+0.1%", up: true, icon: Activity },
]

export default function StatisticPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Data Display
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Statistic</h1>
        <p className="text-lg text-muted-foreground">
          Displays key metrics with animated number counters and trend indicators.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {stats.map((s) => (
          <div key={s.label} className="space-y-3 rounded-xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-muted-foreground">{s.label}</span>
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/10">
                <s.icon className="h-4 w-4 text-primary" />
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-2xl font-bold tracking-tight">{s.value}</p>
              <div
                className={`flex items-center gap-1 text-xs font-medium ${s.up ? "text-green-600 dark:text-green-400" : "text-destructive"}`}
              >
                {s.up ? <TrendingUp className="h-3 w-3" /> : <TrendingDown className="h-3 w-3" />}
                {s.trend} from last month
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add statistic" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { Statistic, StatisticCard } from "@/components/ui/statistic"
import { DollarSign } from "lucide-react"

// Simple statistic
<Statistic
  label="Total Revenue"
  value={45231}
  prefix="$"
  trend={{ value: 20.1, direction: "up", label: "from last month" }}
/>

// Card variant
<StatisticCard
  label="Active Users"
  value={2350}
  icon={<Users />}
  trend={{ value: 15.3, direction: "up" }}
/>`}
        />
      </div>
    </div>
  )
}
