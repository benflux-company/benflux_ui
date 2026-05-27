"use client"

import Link from "next/link"

import { motion } from "framer-motion"
import { ArrowRight, Github, Star } from "lucide-react"

type Token = { text: string; cls: string }

const CODE_TOKENS: Token[][] = [
  [
    { text: "import", cls: "text-purple-400" },
    { text: " { ", cls: "text-zinc-300" },
    { text: "Button", cls: "text-blue-400" },
    { text: " } ", cls: "text-zinc-300" },
    { text: "from", cls: "text-purple-400" },
    { text: ' "@benflux-ui/react"', cls: "text-green-400" },
  ],
  [],
  [
    { text: "export", cls: "text-purple-400" },
    { text: " ", cls: "text-zinc-300" },
    { text: "default", cls: "text-purple-400" },
    { text: " function ", cls: "text-zinc-300" },
    { text: "App", cls: "text-blue-400" },
    { text: "() {", cls: "text-zinc-300" },
  ],
  [
    { text: "  ", cls: "text-zinc-300" },
    { text: "return", cls: "text-purple-400" },
    { text: " (", cls: "text-zinc-300" },
  ],
  [
    { text: "    ", cls: "text-zinc-300" },
    { text: "<Button", cls: "text-yellow-300" },
    { text: " ", cls: "text-zinc-300" },
    { text: "variant", cls: "text-cyan-400" },
    { text: "=", cls: "text-zinc-300" },
    { text: '"glow"', cls: "text-green-400" },
    { text: " ", cls: "text-zinc-300" },
    { text: "size", cls: "text-cyan-400" },
    { text: "=", cls: "text-zinc-300" },
    { text: '"lg"', cls: "text-green-400" },
    { text: ">", cls: "text-yellow-300" },
  ],
  [{ text: "      Get started", cls: "text-zinc-300" }],
  [
    { text: "    ", cls: "text-zinc-300" },
    { text: "</Button>", cls: "text-yellow-300" },
  ],
  [{ text: "  )", cls: "text-zinc-300" }],
  [{ text: "}", cls: "text-zinc-300" }],
]

function CodeLine({ tokens, index }: { tokens: Token[]; index: number }) {
  return (
    <motion.div
      className="flex gap-4 leading-6"
      initial={{ opacity: 0, x: -8 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.03 }}
    >
      <span className="w-6 shrink-0 select-none text-right text-sm text-muted-foreground/30">
        {index + 1}
      </span>
      <span className="whitespace-pre font-mono text-sm">
        {tokens.length > 0
          ? tokens.map((t, i) => (
              <span key={i} className={t.cls}>
                {t.text}
              </span>
            ))
          : " "}
      </span>
    </motion.div>
  )
}

export function OpenSourceSection() {
  return (
    <section className="px-4 py-24">
      <div className="container mx-auto max-w-screen-xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left: text */}
          <div className="space-y-6">
            <motion.div
              className="space-y-3"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm font-medium text-primary">Open Source</p>
              <h2 className="text-3xl font-bold tracking-tight">
                Free and open source.
                <br />
                <span className="text-muted-foreground">Forever.</span>
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                All components are open source and free to use in your projects. License is MIT. You
                own the code — no subscription, no vendor lock-in.
              </p>
            </motion.div>

            <motion.div
              className="space-y-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.15 }}
            >
              {[
                "Copy components into your project",
                "Customize to match your design",
                "No runtime dependency required",
                "TypeScript types included",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <div className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-muted-foreground">{item}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <a
                href="https://github.com/benflux-company/benflux_ui"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-9 items-center gap-2 rounded-md border border-border bg-background px-4 text-sm font-medium transition-colors hover:bg-accent"
              >
                <Github className="h-4 w-4" />
                Star on GitHub
                <Star className="h-3 w-3" />
              </a>
              <Link
                href="/docs"
                className="inline-flex h-9 items-center gap-2 rounded-md px-4 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Read the docs
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          </div>

          {/* Right: code block */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <div className="overflow-hidden rounded-xl border border-border bg-zinc-950 shadow-2xl">
              {/* window chrome */}
              <div className="flex items-center gap-1.5 border-b border-zinc-800 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-500/70" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/70" />
                <div className="h-3 w-3 rounded-full bg-green-500/70" />
                <span className="ml-3 font-mono text-xs text-zinc-500">app/page.tsx</span>
              </div>
              <div className="space-y-0.5 p-5">
                {CODE_TOKENS.map((tokens, i) => (
                  <CodeLine key={i} tokens={tokens} index={i} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
