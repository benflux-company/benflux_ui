import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Line Chart" }

const data = [30, 52, 41, 67, 55, 78, 90, 72, 85, 94, 88, 96]
const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
const max = Math.max(...data)

export default function LineChartPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Charts
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Line Chart</h1>
        <p className="text-lg text-muted-foreground">
          Displays data over time as a line. Built with Recharts.
        </p>
      </div>

      <div className="rounded-xl border border-border bg-card p-6">
        <p className="mb-4 text-sm font-semibold">Monthly Revenue</p>
        <div className="relative h-40">
          <svg
            viewBox={`0 0 ${(data.length - 1) * 40} 100`}
            className="h-full w-full overflow-visible"
          >
            <defs>
              <linearGradient id="lineGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
                <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d={`M ${data.map((v, i) => `${i * 40},${100 - (v / max) * 90}`).join(" L ")}`}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d={`M 0,100 L ${data.map((v, i) => `${i * 40},${100 - (v / max) * 90}`).join(" L ")} L ${(data.length - 1) * 40},100 Z`}
              fill="url(#lineGrad)"
            />
            {data.map((v, i) => (
              <circle
                key={i}
                cx={i * 40}
                cy={100 - (v / max) * 90}
                r="3"
                fill="hsl(var(--primary))"
              />
            ))}
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
          code={`import { LineChart } from "@/components/ui/chart"

const data = [
  { month: "Jan", revenue: 4000 },
  { month: "Feb", revenue: 5200 },
  { month: "Mar", revenue: 4100 },
  // ...
]

<LineChart
  data={data}
  xKey="month"
  lines={[{ dataKey: "revenue", name: "Revenue", color: "var(--primary)" }]}
  height={300}
/>`}
        />
      </div>
    </div>
  )
}
