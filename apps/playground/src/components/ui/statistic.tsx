"use client"

import * as React from "react"

import { animate, motion, useMotionValue, useTransform } from "framer-motion"
import { Minus, TrendingDown, TrendingUp } from "lucide-react"

import { cn } from "@benflux-ui/utils"

interface StatisticProps {
  title: string
  value: number | string
  prefix?: React.ReactNode
  suffix?: React.ReactNode
  precision?: number
  trend?: number
  trendLabel?: string
  icon?: React.ReactNode
  className?: string
  animate?: boolean
  loading?: boolean
  description?: string
}

export function Statistic({
  title,
  value,
  prefix,
  suffix,
  precision = 0,
  trend,
  trendLabel,
  icon,
  className,
  animate: shouldAnimate = true,
  loading = false,
  description,
}: StatisticProps) {
  const motionValue = useMotionValue(0)
  const rounded = useTransform(motionValue, (v) =>
    typeof value === "number" ? v.toFixed(precision) : value,
  )
  const [displayValue, setDisplayValue] = React.useState(typeof value === "number" ? "0" : value)

  React.useEffect(() => {
    if (typeof value !== "number" || !shouldAnimate) {
      setDisplayValue(typeof value === "number" ? value.toFixed(precision) : value)
      return
    }
    const controls = animate(motionValue, value, { duration: 1.2, ease: "easeOut" })
    const unsubscribe = rounded.on("change", (v) => setDisplayValue(String(v)))
    return () => {
      controls.stop()
      unsubscribe()
    }
  }, [value, shouldAnimate, precision, motionValue, rounded])

  const TrendIcon =
    trend === undefined ? null : trend > 0 ? TrendingUp : trend < 0 ? TrendingDown : Minus
  const trendColor =
    trend === undefined
      ? ""
      : trend > 0
        ? "text-green-500"
        : trend < 0
          ? "text-destructive"
          : "text-muted-foreground"

  if (loading) {
    return (
      <div className={cn("space-y-2", className)}>
        <div className="bg-muted h-4 w-24 animate-pulse rounded-md" />
        <div className="bg-muted h-8 w-32 animate-pulse rounded-md" />
        <div className="bg-muted h-3 w-16 animate-pulse rounded-md" />
      </div>
    )
  }

  return (
    <div className={cn("space-y-1", className)}>
      <p className="text-muted-foreground text-sm font-medium">{title}</p>
      <div className="flex items-end gap-2">
        {icon && <div className="text-primary mb-0.5">{icon}</div>}
        <p className="text-3xl font-bold tracking-tight">
          {prefix && <span className="mr-0.5 text-xl">{prefix}</span>}
          {displayValue}
          {suffix && <span className="ml-0.5 text-xl">{suffix}</span>}
        </p>
      </div>
      {(trend !== undefined || trendLabel) && (
        <div className={cn("flex items-center gap-1 text-xs font-medium", trendColor)}>
          {TrendIcon && <TrendIcon className="h-3 w-3" />}
          {trend !== undefined && <span>{Math.abs(trend)}%</span>}
          {trendLabel && <span className="text-muted-foreground">{trendLabel}</span>}
        </div>
      )}
      {description && <p className="text-muted-foreground text-xs">{description}</p>}
    </div>
  )
}

// StatisticCard — wraps Statistic in a card
interface StatisticCardProps extends StatisticProps {
  cardClassName?: string
}

export function StatisticCard({ cardClassName, ...props }: StatisticCardProps) {
  return (
    <div className={cn("border-border bg-card rounded-xl border p-5 shadow-sm", cardClassName)}>
      <Statistic {...props} />
    </div>
  )
}
