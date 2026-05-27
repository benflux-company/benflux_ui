"use client"

import * as React from "react"

import { motion } from "framer-motion"
import { Check, Circle } from "lucide-react"

import { cn } from "@benflux-ui/utils"

export interface Step {
  id: string
  label: string
  description?: string
  icon?: React.ReactNode
  optional?: boolean
}

interface StepperProps {
  steps: Step[]
  currentStep: number
  orientation?: "horizontal" | "vertical"
  onStepClick?: (index: number) => void
  className?: string
}

export function Stepper({
  steps,
  currentStep,
  orientation = "horizontal",
  onStepClick,
  className,
}: StepperProps) {
  if (orientation === "vertical") {
    return (
      <div className={cn("flex flex-col", className)}>
        {steps.map((step, index) => {
          const status =
            index < currentStep ? "completed" : index === currentStep ? "current" : "upcoming"
          const isLast = index === steps.length - 1

          return (
            <div key={step.id} className="flex gap-4">
              <div className="flex flex-col items-center">
                <StepIcon
                  status={status}
                  index={index}
                  icon={step.icon}
                  onClick={() => onStepClick?.(index)}
                  clickable={!!onStepClick}
                />
                {!isLast && (
                  <div
                    className={cn(
                      "mt-1 min-h-[24px] w-0.5 flex-1",
                      status === "completed" ? "bg-primary" : "bg-border",
                    )}
                  />
                )}
              </div>
              <div className={cn("pb-6", isLast && "pb-0")}>
                <p
                  className={cn(
                    "text-sm font-medium",
                    status === "upcoming" && "text-muted-foreground",
                  )}
                >
                  {step.label}
                </p>
                {step.description && (
                  <p className="text-muted-foreground mt-0.5 text-xs">{step.description}</p>
                )}
              </div>
            </div>
          )
        })}
      </div>
    )
  }

  return (
    <div className={cn("flex items-center", className)}>
      {steps.map((step, index) => {
        const status =
          index < currentStep ? "completed" : index === currentStep ? "current" : "upcoming"
        const isLast = index === steps.length - 1

        return (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center gap-2">
              <StepIcon
                status={status}
                index={index}
                icon={step.icon}
                onClick={() => onStepClick?.(index)}
                clickable={!!onStepClick}
              />
              <div className="text-center">
                <p
                  className={cn(
                    "whitespace-nowrap text-xs font-medium",
                    status === "upcoming" && "text-muted-foreground",
                  )}
                >
                  {step.label}
                </p>
                {step.optional && <p className="text-muted-foreground text-[10px]">Optional</p>}
              </div>
            </div>
            {!isLast && (
              <div
                className={cn(
                  "mx-3 mb-5 h-0.5 flex-1",
                  status === "completed" ? "bg-primary" : "bg-border",
                )}
              />
            )}
          </React.Fragment>
        )
      })}
    </div>
  )
}

function StepIcon({
  status,
  index,
  icon,
  onClick,
  clickable,
}: {
  status: "completed" | "current" | "upcoming"
  index: number
  icon?: React.ReactNode
  onClick: () => void
  clickable: boolean
}) {
  return (
    <motion.button
      type="button"
      onClick={clickable ? onClick : undefined}
      className={cn(
        "flex h-8 w-8 items-center justify-center rounded-full border-2 text-sm font-medium transition-all",
        status === "completed" && "bg-primary border-primary text-primary-foreground",
        status === "current" && "border-primary bg-background text-primary shadow-glow-sm",
        status === "upcoming" && "border-border bg-background text-muted-foreground",
        clickable && "cursor-pointer",
      )}
      whileHover={clickable ? { scale: 1.05 } : undefined}
    >
      {status === "completed" ? (
        <Check className="h-4 w-4" />
      ) : (
        (icon ?? <span className="text-xs">{index + 1}</span>)
      )}
    </motion.button>
  )
}
