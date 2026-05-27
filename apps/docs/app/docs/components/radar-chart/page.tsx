import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"

export const metadata: Metadata = { title: "Radar Chart" }

const metrics = ["Speed", "Reliability", "Usability", "Security", "Performance", "Scalability"]
const values = [85, 70, 90, 75, 80, 65]
const n = metrics.length
const cx = 100,
  cy = 100,
  r = 70

function polarToXY(angle: number, radius: number) {
  const rad = (angle - 90) * (Math.PI / 180)
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) }
}

export default function RadarChartPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          Charts
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Radar Chart</h1>
        <p className="text-lg text-muted-foreground">
          Compares multiple variables across a common scale. Built with Recharts.
        </p>
      </div>

      <div className="flex items-center justify-center rounded-xl border border-border bg-card p-6">
        <div className="w-full max-w-xs">
          <p className="mb-4 text-center text-sm font-semibold">Product Score</p>
          <svg viewBox="0 0 200 200" className="w-full">
            {[0.2, 0.4, 0.6, 0.8, 1].map((level) => (
              <polygon
                key={level}
                points={metrics
                  .map((_, i) => {
                    const p = polarToXY(i * (360 / n), r * level)
                    return `${p.x},${p.y}`
                  })
                  .join(" ")}
                fill="none"
                stroke="hsl(var(--border))"
                strokeWidth="0.5"
              />
            ))}
            {metrics.map((_, i) => {
              const p = polarToXY(i * (360 / n), r)
              return (
                <line
                  key={i}
                  x1={cx}
                  y1={cy}
                  x2={p.x}
                  y2={p.y}
                  stroke="hsl(var(--border))"
                  strokeWidth="0.5"
                />
              )
            })}
            <polygon
              points={values
                .map((v, i) => {
                  const p = polarToXY(i * (360 / n), (v / 100) * r)
                  return `${p.x},${p.y}`
                })
                .join(" ")}
              fill="hsl(var(--primary))"
              fillOpacity="0.2"
              stroke="hsl(var(--primary))"
              strokeWidth="1.5"
            />
            {metrics.map((label, i) => {
              const p = polarToXY(i * (360 / n), r + 16)
              return (
                <text
                  key={label}
                  x={p.x}
                  y={p.y}
                  textAnchor="middle"
                  dominantBaseline="middle"
                  fontSize="8"
                  fill="hsl(var(--muted-foreground))"
                >
                  {label}
                </text>
              )
            })}
          </svg>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add chart" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import { RadarChart } from "@/components/ui/chart"

const data = [
  { metric: "Speed",       value: 85 },
  { metric: "Reliability", value: 70 },
  { metric: "Usability",   value: 90 },
]

<RadarChart data={data} dataKey="value" angleKey="metric" height={300} />`}
        />
      </div>
    </div>
  )
}
