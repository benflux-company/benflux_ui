"use client"

import { motion } from "framer-motion"
import { NumberCounter } from "@benflux-ui/react"

const stats = [
  { value: 200, suffix: "+", label: "Components" },
  { value: 8, suffix: "", label: "Themes" },
  { value: 100, suffix: "%", label: "TypeScript" },
  { value: 0, suffix: "ms", label: "Hydration" },
  { value: 50, suffix: "+", label: "Animations" },
  { value: 20, suffix: "+", label: "AI Components" },
]

export function StatsSection() {
  return (
    <section className="py-16 px-4 border-y border-border bg-muted/10">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="space-y-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <p className="text-3xl font-bold text-foreground">
                <NumberCounter to={stat.value} duration={1.5} />
                {stat.suffix}
              </p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
