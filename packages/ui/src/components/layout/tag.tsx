"use client"

import * as React from "react"

import { type VariantProps, cva } from "class-variance-authority"
import { X } from "lucide-react"

import { cn } from "@benflux-ui/utils"

const tagVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary/10 text-primary hover:bg-primary/20",
        secondary:
          "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        outline: "border-border text-foreground hover:bg-accent",
        success: "border-transparent bg-green-500/10 text-green-700 dark:text-green-400",
        warning: "border-transparent bg-yellow-500/10 text-yellow-700 dark:text-yellow-400",
        destructive: "border-transparent bg-destructive/10 text-destructive",
        info: "border-transparent bg-blue-500/10 text-blue-700 dark:text-blue-400",
      },
      size: {
        sm: "px-2 py-0 text-[10px]",
        default: "px-2.5 py-0.5 text-xs",
        lg: "px-3 py-1 text-sm",
      },
    },
    defaultVariants: { variant: "default", size: "default" },
  },
)

interface TagProps extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof tagVariants> {
  onRemove?: () => void
  icon?: React.ReactNode
}

export function Tag({ className, variant, size, onRemove, icon, children, ...props }: TagProps) {
  return (
    <span className={cn(tagVariants({ variant, size }), className)} {...props}>
      {icon && <span className="shrink-0">{icon}</span>}
      {children}
      {onRemove && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation()
            onRemove()
          }}
          className="rounded-full p-0.5 transition-colors hover:bg-black/10 dark:hover:bg-white/20"
        >
          <X className="h-2.5 w-2.5" />
          <span className="sr-only">Remove</span>
        </button>
      )}
    </span>
  )
}

// TagInput — handles list of tags with input
interface TagInputProps {
  value?: string[]
  onChange?: (tags: string[]) => void
  placeholder?: string
  maxTags?: number
  className?: string
  tagVariant?: VariantProps<typeof tagVariants>["variant"]
}

export function TagInput({
  value = [],
  onChange,
  placeholder = "Add tag...",
  maxTags,
  className,
  tagVariant = "default",
}: TagInputProps) {
  const [input, setInput] = React.useState("")
  const inputRef = React.useRef<HTMLInputElement>(null)

  const addTag = (tag: string) => {
    const trimmed = tag.trim()
    if (!trimmed || value.includes(trimmed) || (maxTags && value.length >= maxTags)) return
    onChange?.([...value, trimmed])
    setInput("")
  }

  const removeTag = (tag: string) => onChange?.(value.filter((t) => t !== tag))

  return (
    <div
      className={cn(
        "flex min-h-10 w-full flex-wrap gap-1.5 rounded-xl border border-input bg-background px-3 py-2",
        "focus-within:ring-2 focus-within:ring-ring",
        className,
      )}
      onClick={() => inputRef.current?.focus()}
    >
      {value.map((tag) => (
        <Tag key={tag} variant={tagVariant} onRemove={() => removeTag(tag)}>
          {tag}
        </Tag>
      ))}
      <input
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === ",") {
            e.preventDefault()
            addTag(input)
          }
          if (e.key === "Backspace" && !input && value.length > 0)
            removeTag(value[value.length - 1]!)
        }}
        placeholder={!value.length ? placeholder : ""}
        className="min-w-20 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
        disabled={Boolean(maxTags && value.length >= maxTags)}
      />
    </div>
  )
}
