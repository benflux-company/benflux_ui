"use client"

import { useState } from "react"

import { Check, Copy } from "lucide-react"

interface CodeBlockProps {
  code: string
  language?: string
  filename?: string
}

export function CodeBlock({ code, language = "tsx", filename }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="relative overflow-hidden rounded-xl border border-border bg-zinc-950">
      {filename && (
        <div className="flex items-center justify-between border-b border-zinc-800 px-4 py-2.5">
          <span className="font-mono text-xs text-zinc-500">{filename}</span>
          <button
            onClick={copy}
            className="rounded p-1 text-zinc-500 transition-colors hover:text-zinc-300"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-green-400" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
        </div>
      )}
      <div className="relative">
        {!filename && (
          <button
            onClick={copy}
            className="absolute right-3 top-3 z-10 rounded-md p-1.5 text-zinc-500 transition-colors hover:bg-zinc-800 hover:text-zinc-300"
          >
            {copied ? (
              <Check className="h-3.5 w-3.5 text-green-400" />
            ) : (
              <Copy className="h-3.5 w-3.5" />
            )}
          </button>
        )}
        <pre className="overflow-x-auto p-4 font-mono text-sm leading-relaxed text-zinc-300">
          <code>{code}</code>
        </pre>
      </div>
    </div>
  )
}

export function InlineCode({ children }: { children: React.ReactNode }) {
  return (
    <code className="rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-xs text-foreground">
      {children}
    </code>
  )
}
