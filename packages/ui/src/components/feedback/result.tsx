import * as React from "react"

import { AlertCircle, AlertTriangle, CheckCircle2, Info, Lock, Server, XCircle } from "lucide-react"

import { cn } from "@benflux-ui/utils"

type ResultStatus = "success" | "error" | "warning" | "info" | "404" | "403" | "500"

interface ResultProps {
  status?: ResultStatus
  title?: React.ReactNode
  subTitle?: React.ReactNode
  icon?: React.ReactNode
  extra?: React.ReactNode
  className?: string
}

const statusConfig: Record<
  ResultStatus,
  { icon: React.ReactNode; color: string; defaultTitle: string }
> = {
  success: {
    icon: <CheckCircle2 className="h-16 w-16" />,
    color: "text-green-500",
    defaultTitle: "Successfully Done",
  },
  error: {
    icon: <XCircle className="h-16 w-16" />,
    color: "text-destructive",
    defaultTitle: "Submission Failed",
  },
  warning: {
    icon: <AlertTriangle className="h-16 w-16" />,
    color: "text-yellow-500",
    defaultTitle: "There are some problems",
  },
  info: {
    icon: <Info className="h-16 w-16" />,
    color: "text-primary",
    defaultTitle: "Your operation has been executed",
  },
  "404": {
    icon: <AlertCircle className="h-16 w-16" />,
    color: "text-muted-foreground",
    defaultTitle: "404",
  },
  "403": {
    icon: <Lock className="h-16 w-16" />,
    color: "text-muted-foreground",
    defaultTitle: "403",
  },
  "500": {
    icon: <Server className="h-16 w-16" />,
    color: "text-muted-foreground",
    defaultTitle: "500",
  },
}

function Result({ status = "info", title, subTitle, icon, extra, className }: ResultProps) {
  const config = statusConfig[status]

  return (
    <div className={cn("flex flex-col items-center justify-center py-16 text-center", className)}>
      <div className={cn("mb-6", config.color)}>{icon ?? config.icon}</div>
      <h3 className="mb-2 text-2xl font-bold text-foreground">{title ?? config.defaultTitle}</h3>
      {subTitle && <p className="mb-8 max-w-md text-muted-foreground">{subTitle}</p>}
      {extra && <div className="flex flex-wrap items-center justify-center gap-3">{extra}</div>}
    </div>
  )
}

export { Result }
export type { ResultProps, ResultStatus }
