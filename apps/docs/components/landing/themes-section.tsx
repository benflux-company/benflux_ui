"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button, Badge, Card, CardContent, CardHeader, CardTitle } from "@benflux-ui/react"
import { useTheme } from "@benflux-ui/themes"
import type { ThemeName } from "@benflux-ui/themes"

const themes: { name: ThemeName; label: string; description: string; preview: string }[] = [
  {
    name: "dark",
    label: "Dark",
    description: "Clean dark mode",
    preview: "bg-zinc-900",
  },
  {
    name: "light",
    label: "Light",
    description: "Pure light mode",
    preview: "bg-white border",
  },
  {
    name: "amoled",
    label: "AMOLED",
    description: "Pure black",
    preview: "bg-black",
  },
  {
    name: "glass",
    label: "Glass",
    description: "Glassmorphism",
    preview: "bg-gradient-to-br from-blue-900/50 to-purple-900/50 backdrop-blur",
  },
  {
    name: "neon",
    label: "Neon",
    description: "Bright neon glow",
    preview: "bg-black border-green-500",
  },
  {
    name: "cyberpunk",
    label: "Cyberpunk",
    description: "Futuristic yellow+pink",
    preview: "bg-zinc-950 border-pink-500",
  },
  {
    name: "luxury",
    label: "Luxury",
    description: "Gold & dark",
    preview: "bg-zinc-900 border-yellow-500",
  },
  {
    name: "minimal",
    label: "Minimal",
    description: "Ultra clean",
    preview: "bg-gray-50 border",
  },
]

export function ThemesSection() {
  const { theme, setTheme } = useTheme()
  const [preview, setPreview] = useState<ThemeName | null>(null)

  return (
    <section className="py-24 px-4">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            8 beautiful themes
          </motion.h2>
          <motion.p
            className="text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Switch themes live. Click to preview, apply globally in one line.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {themes.map((t, i) => (
            <motion.button
              key={t.name}
              className={`relative p-4 rounded-xl border text-left transition-all ${
                theme === t.name
                  ? "border-primary ring-2 ring-primary/30"
                  : "border-border hover:border-primary/40"
              }`}
              onClick={() => setTheme(t.name)}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <div className={`w-full h-12 rounded-lg mb-3 ${t.preview}`} />
              <div>
                <p className="text-sm font-medium text-foreground">{t.label}</p>
                <p className="text-xs text-muted-foreground">{t.description}</p>
              </div>
              {theme === t.name && (
                <Badge variant="glow" size="sm" className="absolute top-2 right-2">
                  Active
                </Badge>
              )}
            </motion.button>
          ))}
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Current theme:{" "}
            <code className="text-primary font-mono bg-primary/10 px-1.5 py-0.5 rounded text-xs">
              {theme}
            </code>
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            Apply with: <code className="font-mono">{`<BenfluxProvider theme="${theme}">`}</code>
          </p>
        </div>
      </div>
    </section>
  )
}
