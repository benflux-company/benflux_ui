import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Pie Chart" }

const segments = [
  { label: "Direct", value: 35, color: "hsl(var(--primary))" },
  { label: "Organic", value: 25, color: "#6366f1" },
  { label: "Referral", value: 20, color: "#22c55e" },
  { label: "Social", value: 12, color: "#f59e0b" },
  { label: "Other", value: 8, color: "#94a3b8" },
]
const total = segments.reduce((s, d) => s + d.value, 0)

export default function PieChartPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Charts
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Pie Chart</h1>
        <p className="text-lg text-muted-foreground">
          Displays part-to-whole relationships using a circular chart. Built with Recharts.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <p className="mb-4 text-sm font-semibold">Traffic Sources</p>
        <div className="flex flex-col items-center gap-8 sm:flex-row">
          <div className="relative h-36 w-36 shrink-0">
            <svg viewBox="0 0 36 36" className="h-full w-full -rotate-90">
              {(() => {
                let offset = 0
                return segments.map((seg) => {
                  const pct = (seg.value / total) * 100
                  const el = (
                    <circle
                      key={seg.label}
                      cx="18"
                      cy="18"
                      r="15.9"
                      fill="transparent"
                      stroke={seg.color}
                      strokeWidth="5"
                      strokeDasharray={`${pct} ${100 - pct}`}
                      strokeDashoffset={-offset}
                    />
                  )
                  offset += pct
                  return el
                })
              })()}
            </svg>
          </div>
          <div className="flex-1 space-y-2">
            {segments.map((seg) => (
              <div key={seg.label} className="flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full" style={{ background: seg.color }} />
                  <span className="text-muted-foreground">{seg.label}</span>
                </div>
                <span className="font-medium">{seg.value}%</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add chart" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { PieChart } from "@/components/ui/chart"

const data = [
  { name: "Direct",  value: 35 },
  { name: "Organic", value: 25 },
  { name: "Social",  value: 20 },
]

<PieChart data={data} nameKey="name" dataKey="value" height={300} />`}
        />
      </div>
    </div>
  )
}
