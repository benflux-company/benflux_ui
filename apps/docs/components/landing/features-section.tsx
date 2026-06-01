"use client"

import { motion } from "framer-motion"
import {
  Accessibility,
  Code2,
  ImageIcon,
  LayoutTemplate,
  Palette,
  Puzzle,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react"

const features = [
  {
    icon: Puzzle,
    title: "Radix UI primitives",
    description:
      "Every interactive component is built on top of Radix UI for rock-solid accessibility.",
  },
  {
    icon: Palette,
    title: "Tailwind CSS",
    description:
      "Utility-first styling with full support for dark mode, custom themes, and arbitrary values.",
  },
  {
    icon: Sparkles,
    title: "Framer Motion",
    description:
      "GPU-accelerated animations and physics-based interactions — smooth on every device.",
  },
  {
    icon: ImageIcon,
    title: "15 000+ Icons",
    description:
      "Lucide, Font Awesome, Material, Bootstrap, Remix + 28 exclusive Benflux animated icons in one package.",
  },
  {
    icon: LayoutTemplate,
    title: "Templates",
    description:
      "Ready-to-use page templates — dashboards, landing pages, auth flows. Copy and ship instantly.",
  },
  {
    icon: Code2,
    title: "Copy / Paste",
    description:
      "Not a component library dependency. Own your components — copy source into your project.",
  },
  {
    icon: Terminal,
    title: "CLI",
    description:
      "npx benflux-ui add button — auto-detects your framework and installs exactly what you need.",
  },
  {
    icon: Zap,
    title: "TypeScript first",
    description: "Every component and hook ships with full TypeScript definitions and inference.",
  },
  {
    icon: Accessibility,
    title: "WCAG accessible",
    description:
      "Keyboard navigation, ARIA attributes, and screen reader support built-in and tested.",
  },
  {
    icon: Palette,
    title: "8 themes",
    description:
      "Light, Dark, AMOLED, Glass, Neon, Cyberpunk, Luxury, Minimal — switch live at runtime.",
  },
]

export function FeaturesSection() {
  return (
    <section className="border-t border-border bg-muted/20 px-4 py-24">
      <div className="container mx-auto max-w-screen-xl">
        {/* Header */}
        <div className="mb-16 space-y-3 text-center">
          <motion.h2
            className="text-3xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Everything you need
          </motion.h2>
          <motion.p
            className="mx-auto max-w-lg text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Built with the best tools. Designed for the best developer experience.
          </motion.p>
        </div>

        {/* Feature grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              className="space-y-2"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background">
                <feature.icon className="h-4 w-4 text-muted-foreground" />
              </div>
              <h3 className="text-sm font-semibold">{feature.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
