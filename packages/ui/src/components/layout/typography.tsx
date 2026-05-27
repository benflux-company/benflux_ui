import * as React from "react"

import { type VariantProps, cva } from "class-variance-authority"

import { cn } from "@benflux-ui/utils"

// ─── Heading ────────────────────────────────────────────────────────────────

const headingVariants = cva("font-bold tracking-tight text-foreground", {
  variants: {
    level: {
      1: "text-4xl",
      2: "text-3xl",
      3: "text-2xl",
      4: "text-xl",
      5: "text-lg",
      6: "text-base",
    },
  },
  defaultVariants: { level: 1 },
})

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>, VariantProps<typeof headingVariants> {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
}

function Heading({ className, level, as, children, ...props }: HeadingProps) {
  const Tag = as ?? (`h${level ?? 1}` as "h1" | "h2" | "h3" | "h4" | "h5" | "h6")
  return (
    <Tag className={cn(headingVariants({ level }), className)} {...props}>
      {children}
    </Tag>
  )
}

// ─── Text ───────────────────────────────────────────────────────────────────

const textVariants = cva("text-foreground", {
  variants: {
    variant: {
      default: "",
      secondary: "text-muted-foreground",
      success: "text-green-500",
      warning: "text-yellow-500",
      danger: "text-destructive",
      disabled: "text-muted-foreground opacity-50",
    },
    size: {
      xs: "text-xs",
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
      xl: "text-xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
  },
  defaultVariants: { variant: "default", size: "md", weight: "normal" },
})

interface TextProps
  extends React.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof textVariants> {
  as?: "span" | "p" | "label" | "div"
  italic?: boolean
  underline?: boolean
  strikethrough?: boolean
  code?: boolean
  copyable?: boolean
  ellipsis?: boolean
}

function Text({
  className,
  variant,
  size,
  weight,
  as: Tag = "span",
  italic,
  underline,
  strikethrough,
  code,
  copyable,
  ellipsis,
  children,
  ...props
}: TextProps) {
  const [copied, setCopied] = React.useState(false)

  const handleCopy = () => {
    const text = typeof children === "string" ? children : String(children)
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const content = code ? (
    <code className="rounded bg-muted px-1.5 py-0.5 font-mono text-sm">{children}</code>
  ) : (
    children
  )

  return (
    <Tag
      className={cn(
        textVariants({ variant, size, weight }),
        italic && "italic",
        underline && "underline underline-offset-2",
        strikethrough && "line-through",
        ellipsis && "block truncate",
        className,
      )}
      {...props}
    >
      {content}
      {copyable && (
        <button
          onClick={handleCopy}
          className="ml-1.5 inline-flex h-4 w-4 items-center justify-center rounded text-muted-foreground hover:text-foreground"
          title={copied ? "Copied!" : "Copy"}
        >
          {copied ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-3 w-3"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              className="h-3 w-3"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
        </button>
      )}
    </Tag>
  )
}

// ─── Paragraph ──────────────────────────────────────────────────────────────

interface ParagraphProps extends React.HTMLAttributes<HTMLParagraphElement> {
  size?: "sm" | "md" | "lg"
}

function Paragraph({ className, size = "md", children, ...props }: ParagraphProps) {
  return (
    <p
      className={cn(
        "leading-7 text-foreground",
        size === "sm" && "text-sm",
        size === "lg" && "text-lg",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  )
}

// ─── Link ───────────────────────────────────────────────────────────────────

interface TypographyLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

function TypographyLink({ className, children, ...props }: TypographyLinkProps) {
  return (
    <a
      className={cn(
        "text-primary underline underline-offset-2 transition-colors hover:text-primary/80",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  )
}

export { Heading, Text, Paragraph, TypographyLink }
export type { HeadingProps, TextProps, ParagraphProps }
