"use client"

import Link from "next/link"

import {
  ApexPreview,
  LuminaPreview,
  NovaPreview,
  OrbitPreview,
  PulsePreview,
  ZenithPreview,
} from "@/components/templates/template-previews"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

const TEMPLATES = [
  { id: "nova", name: "Nova", tagline: "Dark SaaS", Preview: NovaPreview },
  { id: "zenith", name: "Zenith", tagline: "Studio Portfolio", Preview: ZenithPreview },
  { id: "pulse", name: "Pulse", tagline: "Bold Startup", Preview: PulsePreview },
  { id: "orbit", name: "Orbit", tagline: "Analytics SaaS", Preview: OrbitPreview },
  { id: "lumina", name: "Lumina", tagline: "Creative Agency", Preview: LuminaPreview },
  { id: "apex", name: "Apex", tagline: "Enterprise", Preview: ApexPreview },
]

export function TemplatesSection() {
  return (
    <section className="border-t border-border px-4 py-24">
      <div className="container mx-auto max-w-screen-xl">
        {/* Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div className="space-y-2">
            <motion.p
              className="text-xs font-semibold uppercase tracking-widest text-primary"
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Templates
            </motion.p>
            <motion.h2
              className="text-3xl font-bold tracking-tight"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
            >
              Ship your next page today
            </motion.h2>
            <motion.p
              className="max-w-md text-muted-foreground"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              6 professionally crafted templates. Free to download, ready to deploy.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <Link
              href="/templates"
              className="inline-flex shrink-0 items-center gap-1.5 rounded-md border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted"
            >
              View all templates
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </motion.div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TEMPLATES.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                href="/templates"
                className="group block overflow-hidden rounded-2xl border border-border bg-card transition-all duration-200 hover:border-primary/30 hover:shadow-md"
              >
                {/* Preview */}
                <div className="relative h-44 w-full overflow-hidden bg-muted">
                  <div
                    className="pointer-events-none absolute inset-0 origin-top-left scale-[0.28]"
                    style={{ width: "357%", height: "357%" }}
                  >
                    <t.Preview />
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/0 transition-all group-hover:bg-black/20">
                    <span className="translate-y-2 rounded-full bg-background/90 px-4 py-1.5 text-xs font-medium opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                      Preview →
                    </span>
                  </div>
                </div>
                {/* Meta */}
                <div className="flex items-center justify-between px-4 py-3">
                  <div>
                    <p className="text-sm font-semibold">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.tagline}</p>
                  </div>
                  <span className="rounded-md border border-border bg-muted px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                    Free
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
