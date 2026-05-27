"use client"

import * as React from "react"

import {
  Area,
  Bar,
  CartesianGrid,
  Cell,
  Legend,
  Line,
  Pie,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  AreaChart as RechartsAreaChart,
  BarChart as RechartsBarChart,
  LineChart as RechartsLineChart,
  PieChart as RechartsPieChart,
  RadarChart as RechartsRadarChart,
  ResponsiveContainer,
  Tooltip,
  type TooltipProps,
  XAxis,
  YAxis,
} from "recharts"

import { cn } from "@benflux-ui/utils"

// Chart container with consistent sizing
interface ChartContainerProps {
  children: React.ReactNode
  className?: string
  height?: number
}

export function ChartContainer({ children, className, height = 300 }: ChartContainerProps) {
  return (
    <div className={cn("w-full", className)}>
      <ResponsiveContainer width="100%" height={height}>
        {children as React.ReactElement}
      </ResponsiveContainer>
    </div>
  )
}

// Custom tooltip
export function ChartTooltip({
  active,
  payload,
  label,
  formatter,
}: TooltipProps<number, string> & { formatter?: (value: number) => string }) {
  if (!active || !payload?.length) return null
  return (
    <div className="border-border bg-background/95 rounded-xl border p-3 text-sm shadow-lg backdrop-blur-sm">
      {label && <p className="text-foreground mb-1.5 font-medium">{label}</p>}
      {payload.map((entry, i) => (
        <div key={i} className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: entry.color }} />
          <span className="text-muted-foreground">{entry.name}:</span>
          <span className="font-medium">
            {formatter ? formatter(entry.value as number) : entry.value}
          </span>
        </div>
      ))}
    </div>
  )
}

const CHART_COLORS = [
  "hsl(var(--primary))",
  "hsl(var(--chart-2, 217 91% 60%))",
  "hsl(var(--chart-3, 142 71% 45%))",
  "hsl(var(--chart-4, 38 92% 50%))",
  "hsl(var(--chart-5, 280 68% 60%))",
  "hsl(var(--chart-6, 340 75% 55%))",
]

// --- Line Chart ---
interface LineChartProps {
  data: Record<string, unknown>[]
  lines: { key: string; name?: string; color?: string; dashed?: boolean }[]
  xKey: string
  height?: number
  className?: string
  grid?: boolean
  legend?: boolean
  curved?: boolean
}

export function LineChart({
  data,
  lines,
  xKey,
  height = 300,
  className,
  grid = true,
  legend = true,
  curved = true,
}: LineChartProps) {
  return (
    <ChartContainer className={className} height={height}>
      <RechartsLineChart data={data}>
        {grid && <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />}
        <XAxis
          dataKey={xKey}
          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip content={<ChartTooltip />} />
        {legend && <Legend />}
        {lines.map((line, i) => (
          <Line
            key={line.key}
            type={curved ? "monotone" : "linear"}
            dataKey={line.key}
            name={line.name ?? line.key}
            stroke={line.color ?? CHART_COLORS[i % CHART_COLORS.length]}
            strokeWidth={2}
            strokeDasharray={line.dashed ? "4 4" : undefined}
            dot={false}
            activeDot={{ r: 4 }}
          />
        ))}
      </RechartsLineChart>
    </ChartContainer>
  )
}

// --- Bar Chart ---
interface BarChartProps {
  data: Record<string, unknown>[]
  bars: { key: string; name?: string; color?: string; radius?: number }[]
  xKey: string
  height?: number
  className?: string
  grid?: boolean
  legend?: boolean
  stacked?: boolean
  horizontal?: boolean
}

export function BarChart({
  data,
  bars,
  xKey,
  height = 300,
  className,
  grid = true,
  legend = true,
  stacked = false,
  horizontal = false,
}: BarChartProps) {
  return (
    <ChartContainer className={className} height={height}>
      <RechartsBarChart data={data} layout={horizontal ? "vertical" : "horizontal"}>
        {grid && <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />}
        {horizontal ? (
          <>
            <XAxis
              type="number"
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              type="category"
              dataKey={xKey}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
          </>
        ) : (
          <>
            <XAxis
              dataKey={xKey}
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
          </>
        )}
        <Tooltip content={<ChartTooltip />} />
        {legend && <Legend />}
        {bars.map((bar, i) => (
          <Bar
            key={bar.key}
            dataKey={bar.key}
            name={bar.name ?? bar.key}
            fill={bar.color ?? CHART_COLORS[i % CHART_COLORS.length]}
            radius={bar.radius ?? 4}
            stackId={stacked ? "stack" : undefined}
          />
        ))}
      </RechartsBarChart>
    </ChartContainer>
  )
}

// --- Area Chart ---
interface AreaChartProps {
  data: Record<string, unknown>[]
  areas: { key: string; name?: string; color?: string; gradient?: boolean }[]
  xKey: string
  height?: number
  className?: string
  grid?: boolean
  legend?: boolean
  stacked?: boolean
  curved?: boolean
}

export function AreaChart({
  data,
  areas,
  xKey,
  height = 300,
  className,
  grid = true,
  legend = true,
  stacked = false,
  curved = true,
}: AreaChartProps) {
  return (
    <ChartContainer className={className} height={height}>
      <RechartsAreaChart data={data}>
        <defs>
          {areas.map((area, i) => {
            const color = area.color ?? CHART_COLORS[i % CHART_COLORS.length]
            return (
              <linearGradient
                key={area.key}
                id={`gradient-${area.key}`}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop offset="5%" stopColor={color} stopOpacity={0.3} />
                <stop offset="95%" stopColor={color} stopOpacity={0} />
              </linearGradient>
            )
          })}
        </defs>
        {grid && <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />}
        <XAxis
          dataKey={xKey}
          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <YAxis
          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
          axisLine={false}
          tickLine={false}
        />
        <Tooltip content={<ChartTooltip />} />
        {legend && <Legend />}
        {areas.map((area, i) => {
          const color = area.color ?? CHART_COLORS[i % CHART_COLORS.length]
          return (
            <Area
              key={area.key}
              type={curved ? "monotone" : "linear"}
              dataKey={area.key}
              name={area.name ?? area.key}
              stroke={color}
              strokeWidth={2}
              fill={area.gradient !== false ? `url(#gradient-${area.key})` : color}
              fillOpacity={area.gradient !== false ? 1 : 0.1}
              stackId={stacked ? "stack" : undefined}
            />
          )
        })}
      </RechartsAreaChart>
    </ChartContainer>
  )
}

// --- Pie / Donut Chart ---
interface PieChartProps {
  data: { name: string; value: number; color?: string }[]
  height?: number
  className?: string
  legend?: boolean
  donut?: boolean
  label?: boolean
}

export function PieChart({
  data,
  height = 300,
  className,
  legend = true,
  donut = false,
  label = true,
}: PieChartProps) {
  const renderLabel = ({
    cx = 0,
    cy = 0,
    midAngle = 0,
    innerRadius = 0,
    outerRadius = 0,
    percent = 0,
  }: Record<string, number>) => {
    const RADIAN = Math.PI / 180
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5
    const x = cx + radius * Math.cos(-midAngle * RADIAN)
    const y = cy + radius * Math.sin(-midAngle * RADIAN)
    if (percent < 0.05) return null
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize={12}
        fontWeight={500}
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    )
  }

  return (
    <ChartContainer className={className} height={height}>
      <RechartsPieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={label ? renderLabel : undefined}
          innerRadius={donut ? "55%" : 0}
          outerRadius="75%"
          dataKey="value"
        >
          {data.map((entry, i) => (
            <Cell key={`cell-${i}`} fill={entry.color ?? CHART_COLORS[i % CHART_COLORS.length]} />
          ))}
        </Pie>
        <Tooltip content={<ChartTooltip />} />
        {legend && <Legend />}
      </RechartsPieChart>
    </ChartContainer>
  )
}

// --- Radar Chart ---
interface RadarChartProps {
  data: Record<string, unknown>[]
  radars: { key: string; name?: string; color?: string }[]
  angleKey: string
  height?: number
  className?: string
  legend?: boolean
  filled?: boolean
}

export function RadarChart({
  data,
  radars,
  angleKey,
  height = 300,
  className,
  legend = true,
  filled = true,
}: RadarChartProps) {
  return (
    <ChartContainer className={className} height={height}>
      <RechartsRadarChart data={data}>
        <PolarGrid stroke="hsl(var(--border))" />
        <PolarAngleAxis
          dataKey={angleKey}
          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
        />
        <PolarRadiusAxis
          tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 10 }}
          axisLine={false}
        />
        <Tooltip content={<ChartTooltip />} />
        {legend && <Legend />}
        {radars.map((radar, i) => {
          const color = radar.color ?? CHART_COLORS[i % CHART_COLORS.length]
          return (
            <Radar
              key={radar.key}
              name={radar.name ?? radar.key}
              dataKey={radar.key}
              stroke={color}
              fill={color}
              fillOpacity={filled ? 0.2 : 0}
            />
          )
        })}
      </RechartsRadarChart>
    </ChartContainer>
  )
}

export { CHART_COLORS }
