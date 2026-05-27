"use client"

import * as React from "react"

import { type VariantProps, cva } from "class-variance-authority"
import { AnimatePresence, motion } from "framer-motion"
import { AlertCircle, AlertTriangle, CheckCircle2, Info, X } from "lucide-react"

import { cn } from "@benflux-ui/utils"

const alertVariants = cva(
  "relative w-full rounded-xl border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
  {
    variants: {
      variant: {
        default: "bg-background text-foreground border-border",
        info: "bg-blue-500/10 border-blue-500/30 text-blue-700 dark:text-blue-300 [&>svg]:text-blue-500",
        success:
          "bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-300 [&>svg]:text-green-500",
        warning:
          "bg-yellow-500/10 border-yellow-500/30 text-yellow-700 dark:text-yellow-300 [&>svg]:text-yellow-500",
        destructive:
          "bg-destructive/10 border-destructive/30 text-destructive [&>svg]:text-destructive",
      },
    },
    defaultVariants: { variant: "default" },
  },
)

const ALERT_ICONS = {
  default: Info,
  info: Info,
  success: CheckCircle2,
  warning: AlertTriangle,
  destructive: AlertCircle,
}

interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
  dismissible?: boolean
  onDismiss?: () => void
  icon?: React.ReactNode
}

function Alert({
  className,
  variant = "default",
  dismissible,
  onDismiss,
  icon,
  children,
  ...props
}: AlertProps) {
  const [visible, setVisible] = React.useState(true)
  const DefaultIcon = ALERT_ICONS[variant ?? "default"]

  const handleDismiss = () => {
    setVisible(false)
    onDismiss?.()
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div
            role="alert"
            className={cn(alertVariants({ variant }), "relative", className)}
            {...props}
          >
            {icon ?? <DefaultIcon className="h-4 w-4" />}
            <div className={cn(dismissible && "pr-8")}>{children}</div>
            {dismissible && (
              <button
                onClick={handleDismiss}
                className="absolute right-3 top-3 rounded-sm opacity-70 transition-opacity hover:opacity-100"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const AlertTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h5
      ref={ref}
      className={cn("mb-1 font-medium leading-none tracking-tight", className)}
      {...props}
    />
  ),
)
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("text-sm [&_p]:leading-relaxed", className)} {...props} />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }
