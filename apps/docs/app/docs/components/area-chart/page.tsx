import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Area Chart" }

const data = [20, 35, 28, 50, 42, 60, 55, 72, 65, 80, 75, 90]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const max = Math.max(...data)

export default function AreaChartPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Charts
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Area Chart</h1>
        <p className="text-lg text-muted-foreground">
          Displays data trends with a filled area beneath the line. Built with Recharts.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <p className="mb-4 text-sm font-semibold">Monthly Active Users</p>
        <div className="relative h-36">
          <svg
            viewBox={`0 0 ${(data.length - 1) * 40} 100`}
            className="h-full w-full overflow-visible"
          >
            <defs>
              <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.4" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <path
              d={`M 0,100 L ${data.map((v, i) => `${i * 40},${100 - (v / max) * 88}`).join(" L ")} L ${(data.length - 1) * 40},100 Z`}
              fill="url(#areaGrad)"
            />
            <path
              d={data
                .map((v, i) => `${i === 0 ? "M" : "L"} ${i * 40},${100 - (v / max) * 88}`)
                .join(" ")}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <div className="mt-2 flex justify-between">
          {months.map((m) => (
            <span key={m} className="text-[10px] text-muted-foreground">
              {m}
            </span>
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
          code={`import { AreaChart } from "@/components/ui/chart"

<AreaChart
  data={data}
  xKey="month"
  areas={[{ dataKey: "users", name: "Users", color: "var(--primary)" }]}
  height={300}
/>`}
        />
      </div>
    </div>
  )
}
