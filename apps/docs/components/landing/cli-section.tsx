"use client"

import { useState } from "react"

import { motion } from "framer-motion"
import { Check, Copy, Terminal } from "lucide-react"

const steps = [
  {
    step: "01",
    title: "Run the CLI",
    code: "npx benflux-ui init",
    description:
      "Auto-detects Next.js, Vite, Remix, or Astro. Sets up config and installs dependencies.",
  },
  {
    step: "02",
    title: "Add components",
    code: "npx benflux-ui add button card input",
    description: "Copies component source into your project. You own the code.",
  },
  {
    step: "03",
    title: "Import and use",
    code: `import { Button } from "@/components/ui/button"`,
    description: "Components live in your codebase. Customize freely.",
  },
]

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }
  return (
    <button
      onClick={copy}
      className="rounded p-1 text-zinc-500 transition-colors hover:text-zinc-300"
    >
      {copied ? <Check className="h-3.5 w-3.5 text-green-400" /> : <Copy className="h-3.5 w-3.5" />}
    </button>
  )
}

const TERMINAL_OUTPUT = `  ✓ Detected: Next.js + pnpm

  Creating config...
  ✓ benflux-ui.json

  Installing @benflux-ui/react...
  ✓ Dependencies installed

  ─────────────────────────────
  ✓ Benflux UI initialized

  Next: npx benflux-ui add button`

export function CLISection() {
  return (
    <section className="border-t border-border bg-muted/20 px-4 py-24">
      <div className="container mx-auto max-w-screen-xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: steps */}
          <div className="space-y-8">
            <div className="space-y-3">
              <motion.p
                className="text-sm font-medium text-primary"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
              >
                Installation
              </motion.p>
              <motion.h2
                className="text-3xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                Up and running
                <br />
                in 60 seconds.
              </motion.h2>
            </div>

            <div className="space-y-8">
              {steps.map((s, i) => (
                <motion.div
                  key={s.step}
                  className="flex gap-5"
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="flex flex-col items-center gap-2">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-border bg-background text-xs font-bold text-muted-foreground">
                      {s.step}
                    </div>
                    {i < steps.length - 1 && <div className="min-h-8 w-px flex-1 bg-border" />}
                  </div>
                  <div className="space-y-2 pb-8">
                    <p className="text-sm font-semibold">{s.title}</p>
                    <div className="flex items-center gap-2 rounded-md border border-border bg-muted/50 px-3 py-2 font-mono text-xs text-foreground">
                      <Terminal className="h-3 w-3 shrink-0 text-muted-foreground" />
                      <span className="flex-1">{s.code}</span>
                      <CopyButton text={s.code} />
                    </div>
                    <p className="text-sm text-muted-foreground">{s.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right: terminal output */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="sticky top-20 overflow-hidden rounded-xl border border-border bg-zinc-950 shadow-2xl">
              {/* window chrome */}
              <div className="flex items-center gap-1.5 border-b border-zinc-800 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/70" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <div className="h-3 w-3 rounded-full bg-green-500/70" />
                <span className="ml-2 font-mono text-xs text-zinc-500">terminal</span>
              </div>
              <div className="space-y-1 p-5 font-mono text-sm">
                <div className="flex items-center gap-2 text-zinc-300">
                  <span className="text-green-400">❯</span>
                  <span>npx benflux-ui init</span>
                </div>
                <div className="space-y-1 pt-2">
                  {TERMINAL_OUTPUT.split("\n").map((line, i) => (
                    <motion.p
                      key={i}
                      className={`text-xs ${line.includes("✓") ? "text-green-400" : "text-zinc-400"}`}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 + i * 0.05 }}
                    >
                      {line || " "}
                    </motion.p>
                  ))}
                </div>
                <motion.div
                  className="flex items-center gap-2 pt-3 text-zinc-300"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2 }}
                >
                  <span className="text-green-400">❯</span>
                  <span className="animate-pulse">█</span>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
