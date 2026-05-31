"use client"

import Link from "next/link"

import { motion } from "framer-motion"
import { ArrowRight, Github } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle grid background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)
          `,
          backgroundSize: "4rem 4rem",
          maskImage: "radial-gradient(ellipse 80% 50% at 50% 0%, black 70%, transparent 110%)",
        }}
      />

      <div className="container mx-auto max-w-screen-2xl px-4">
        <div className="flex flex-col items-center space-y-8 pb-20 pt-24 text-center">
          {/* Announcement badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <Link
              href="/changelog"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-4 py-1.5 text-xs text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            >
              <span className="inline-flex h-1.5 w-1.5 rounded-full bg-primary" />
              Introducing Charts, DataTable & 20+ new components
              <ArrowRight className="h-3 w-3" />
            </Link>
          </motion.div>

          {/* Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="max-w-4xl space-y-4"
          >
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Build your component library.
              <br />
              <span className="text-muted-foreground">Ship faster.</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground">
              Beautifully designed components built with Radix UI and Tailwind CSS. Copy, paste,
              customize. Open source. Free forever.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.25 }}
            className="flex flex-wrap items-center justify-center gap-3"
          >
            <Link
              href="/docs"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Get Started
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link
              href="/docs/components"
              className="inline-flex h-10 items-center justify-center gap-2 rounded-md border border-border bg-background px-6 text-sm font-medium text-foreground transition-colors hover:bg-accent"
            >
              Browse Components
            </Link>
          </motion.div>

          {/* Install command */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="flex items-center gap-2 rounded-lg border border-border bg-muted/50 px-4 py-2 font-mono text-sm text-muted-foreground"
          >
            <span className="text-muted-foreground/60">$</span>
            <span>npx benflux-ui init</span>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex items-center gap-6 text-sm text-muted-foreground"
          >
            <div className="flex items-center gap-1.5">
              <div className="flex -space-x-2">
                {["A", "B", "C", "D"].map((l) => (
                  <div
                    key={l}
                    className="flex h-6 w-6 items-center justify-center rounded-full border-2 border-background bg-muted text-[10px] font-medium"
                  >
                    {l}
                  </div>
                ))}
              </div>
              <span>Trusted by developers</span>
            </div>
            <div className="h-4 w-px bg-border" />
            <a
              href="https://github.com/benflux-company/benflux_ui"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
              target="_blank"
              rel="noreferrer"
            >
              <Github className="h-3.5 w-3.5" />
              <span>Open source on GitHub</span>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
