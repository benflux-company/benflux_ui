"use client"

import { useState } from "react"

import { Code, Eye } from "lucide-react"

import { CodeBlock } from "./code-block"

interface ComponentPreviewProps {
  children: React.ReactNode
  code: string
  className?: string
}

export function ComponentPreview({ children, code, className }: ComponentPreviewProps) {
  const [tab, setTab] = useState<"preview" | "code">("preview")

  return (
    <div className="overflow-hidden rounded-xl border border-border">
      <div className="flex border-b border-border bg-muted/30">
        <button
          onClick={() => setTab("preview")}
          className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors ${
            tab === "preview"
              ? "border-b-2 border-primary text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Eye className="h-3.5 w-3.5" />
          Preview
        </button>
        <button
          onClick={() => setTab("code")}
          className={`flex items-center gap-1.5 px-4 py-2 text-sm font-medium transition-colors ${
            tab === "code"
              ? "border-b-2 border-primary text-foreground"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          <Code className="h-3.5 w-3.5" />
          Code
        </button>
      </div>

      {tab === "preview" ? (
        <div
          className={`flex min-h-[200px] flex-wrap items-center justify-center gap-4 bg-background p-10 ${className ?? ""}`}
        >
          {children}
        </div>
      ) : (
        <CodeBlock code={code} />
      )}
    </div>
  )
}
