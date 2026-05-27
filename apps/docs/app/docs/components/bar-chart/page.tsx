import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Bar Chart" }

const data = [
  { label: "Mon", a: 40, b: 25 },
  { label: "Tue", a: 65, b: 45 },
  { label: "Wed", a: 50, b: 60 },
  { label: "Thu", a: 80, b: 55 },
  { label: "Fri", a: 72, b: 70 },
  { label: "Sat", a: 90, b: 80 },
  { label: "Sun", a: 60, b: 40 },
]

export default function BarChartPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Charts
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Bar Chart</h1>
        <p className="text-lg text-muted-foreground">
          Compares values across categories using vertical bars. Built with Recharts.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <div className="mb-4 flex items-center justify-between">
          <p className="text-sm font-semibold">Weekly visitors</p>
          <div className="flex items-center gap-4 text-xs text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-sm bg-primary" />
              New
            </span>
            <span className="flex items-center gap-1.5">
              <span className="inline-block h-2 w-2 rounded-sm bg-primary/40" />
              Returning
            </span>
          </div>
        </div>
        <div className="flex h-32 items-end gap-2">
          {data.map((d) => (
            <div key={d.label} className="flex flex-1 flex-col items-center gap-1">
              <div className="flex w-full items-end gap-0.5">
                <div
                  className="flex-1 rounded-t-sm bg-primary/40"
                  style={{ height: `${d.b * 1.1}px` }}
                />
                <div
                  className="flex-1 rounded-t-sm bg-primary"
                  style={{ height: `${d.a * 1.1}px` }}
                />
              </div>
              <span className="text-[10px] text-muted-foreground">{d.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add chart" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { BarChart } from "@/components/ui/chart"

const data = [
  { day: "Mon", new: 40, returning: 25 },
  { day: "Tue", new: 65, returning: 45 },
]

<BarChart
  data={data}
  xKey="day"
  bars={[
    { dataKey: "new", name: "New", color: "var(--primary)" },
    { dataKey: "returning", name: "Returning", color: "var(--primary-40)" },
  ]}
  height={300}
/>`}
        />
      </div>
    </div>
  )
}
