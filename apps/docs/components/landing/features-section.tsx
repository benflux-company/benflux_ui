"use client"

import { motion } from "framer-motion"
import {
  Zap, Palette, Shield, Gauge, Code, Sparkles,
  Moon, Package, RefreshCw, Layout
} from "lucide-react"
import { SpotlightCard } from "@benflux-ui/react"

const features = [
  {
    icon: Sparkles,
    title: "WOW Effects",
    description: "Aurora backgrounds, particle systems, magnetic buttons, 3D cards — effects that make jaws drop.",
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-transparent",
  },
  {
    icon: Shield,
    title: "Fully Accessible",
    description: "WCAG AAA compliant. Radix UI primitives ensure keyboard navigation, ARIA, and screen reader support.",
    color: "text-green-400",
    gradient: "from-green-500/20 to-transparent",
  },
  {
    icon: Gauge,
    title: "Ultra Performant",
    description: "Tree-shakeable, SSR-compatible, RSC-ready. Lazy loading and minimal bundle impact built-in.",
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-transparent",
  },
  {
    icon: Palette,
    title: "8 Themes",
    description: "Light, Dark, AMOLED, Glass, Neon, Cyberpunk, Luxury, Minimal. Plus your custom themes.",
    color: "text-pink-400",
    gradient: "from-pink-500/20 to-transparent",
  },
  {
    icon: Code,
    title: "Copy/Paste or NPM",
    description: "Own your components by copying them, or install via npm. Same quality, your choice.",
    color: "text-cyan-400",
    gradient: "from-cyan-500/20 to-transparent",
  },
  {
    icon: Zap,
    title: "CLI Tool",
    description: "npx benflux-ui add button — detects your framework, installs deps, adds components.",
    color: "text-yellow-400",
    gradient: "from-yellow-500/20 to-transparent",
  },
  {
    icon: Moon,
    title: "Dark Mode Native",
    description: "All components designed for dark mode first. No afterthought light mode.",
    color: "text-indigo-400",
    gradient: "from-indigo-500/20 to-transparent",
  },
  {
    icon: Package,
    title: "Framer Motion",
    description: "GPU-accelerated animations, physics-based interactions, page transitions.",
    color: "text-orange-400",
    gradient: "from-orange-500/20 to-transparent",
  },
  {
    icon: Layout,
    title: "AI Components",
    description: "Chat UI, streaming renderer, AI typing animation, prompt input — built for AI apps.",
    color: "text-rose-400",
    gradient: "from-rose-500/20 to-transparent",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Everything you need, nothing you don't
          </motion.h2>
          <motion.p
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Built by developers for developers. Every decision optimized for DX and end-user experience.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <SpotlightCard className="h-full p-6 space-y-4">
                <div
                  className={`w-10 h-10 rounded-xl bg-gradient-to-br ${feature.gradient} border border-border flex items-center justify-center ${feature.color}`}
                >
                  <feature.icon className="h-5 w-5" />
                </div>
                <div className="space-y-1.5">
                  <h3 className="font-semibold text-foreground">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
