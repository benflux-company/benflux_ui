"use client"

import * as React from "react"
import { Copy, Check, Terminal } from "lucide-react"
import { motion } from "framer-motion"
import { cn } from "@benflux-ui/utils"

interface CodeBlockProps extends React.HTMLAttributes<HTMLDivElement> {
  code: string
  language?: string
  filename?: string
  showLineNumbers?: boolean
  highlightLines?: number[]
  copyable?: boolean
  terminal?: boolean
}

export function CodeBlock({
  code,
  language = "typescript",
  filename,
  showLineNumbers = true,
  highlightLines = [],
  copyable = true,
  terminal = false,
  className,
  ...props
}: CodeBlockProps) {
  const [copied, setCopied] = React.useState(false)

  const copy = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const lines = code.split("\n")

  return (
    <div
      className={cn(
        "group relative rounded-xl overflow-hidden border border-border bg-zinc-950 text-zinc-100",
        "shadow-lg",
        className,
      )}
      {...props}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          {terminal ? (
            <Terminal className="h-3.5 w-3.5 text-zinc-400" />
          ) : (
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/70" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/70" />
              <div className="w-3 h-3 rounded-full bg-green-500/70" />
            </div>
          )}
          {filename && (
            <span className="text-xs text-zinc-400 font-mono ml-2">{filename}</span>
          )}
          {!filename && language && (
            <span className="text-xs text-zinc-500 font-mono ml-2">{language}</span>
          )}
        </div>

        {copyable && (
          <motion.button
            onClick={copy}
            className="flex items-center gap-1.5 text-xs text-zinc-400 hover:text-zinc-100 transition-colors px-2 py-1 rounded"
            whileTap={{ scale: 0.95 }}
            title="Copy code"
          >
            {copied ? (
              <>
                <Check className="h-3.5 w-3.5 text-green-400" />
                <span className="text-green-400">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="h-3.5 w-3.5" />
                <span>Copy</span>
              </>
            )}
          </motion.button>
        )}
      </div>

      {/* Code */}
      <div className="overflow-x-auto">
        <pre className="p-4 text-sm leading-relaxed font-mono">
          {lines.map((line, i) => (
            <div
              key={i}
              className={cn(
                "flex gap-4",
                highlightLines.includes(i + 1) && "bg-primary/10 border-l-2 border-primary -mx-4 px-4",
              )}
            >
              {showLineNumbers && (
                <span className="select-none text-zinc-600 min-w-[1.5rem] text-right shrink-0">
                  {i + 1}
                </span>
              )}
              <span
                className={cn(
                  terminal && line.startsWith("$") && "text-green-400",
                  terminal && !line.startsWith("$") && "text-zinc-300",
                )}
              >
                {line}
              </span>
            </div>
          ))}
        </pre>
      </div>
    </div>
  )
}
