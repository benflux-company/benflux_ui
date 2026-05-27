"use client"

import Link from "next/link"

import { motion } from "framer-motion"
import { ArrowRight, Github } from "lucide-react"

export function CTASection() {
  return (
    <section className="border-t border-border px-4 py-24">
      <div className="container mx-auto max-w-screen-xl">
        <motion.div
          className="mx-auto max-w-2xl space-y-6 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold tracking-tight">Ready to start building?</h2>
          <p className="text-lg text-muted-foreground">
            Join thousands of developers building beautiful products with Benflux UI. Free, open
            source, and ready for production.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/docs"
              className="inline-flex h-10 items-center gap-2 rounded-md bg-foreground px-6 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
            >
              Get Started
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <a
              href="https://github.com/benflux-company/benflux_ui"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-md border border-border px-6 text-sm font-medium transition-colors hover:bg-accent"
            >
              <Github className="h-4 w-4" />
              View on GitHub
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
