"use client"

import { motion } from "framer-motion"
import { ArrowRight, Github, Star, Terminal } from "lucide-react"
import Link from "next/link"
import { Button, Badge, AnimatedText, Meteors, BorderBeam } from "@benflux-ui/react"

export function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center py-24 px-4 overflow-hidden">
      <Meteors number={15} />

      <div className="relative z-10 text-center max-w-5xl mx-auto space-y-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center"
        >
          <Badge variant="glow" size="lg" dot>
            <Star className="h-3 w-3 fill-current" />
            New: WOW Effects & AI Components
          </Badge>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight">
            <span className="text-foreground">The UI library</span>
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary via-purple-400 to-cyan-400">
              from the future
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            200+ beautiful, animated, accessible components for React & Next.js.
            Built with Tailwind CSS, Framer Motion, and Radix UI.
          </p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button size="xl" variant="gradient" rightIcon={<ArrowRight />} asChild>
            <Link href="/docs">Get Started</Link>
          </Button>
          <Button size="xl" variant="glass" leftIcon={<Github />} asChild>
            <a href="https://github.com/benflux20/benflux-ui" target="_blank" rel="noreferrer">
              GitHub
            </a>
          </Button>
        </motion.div>

        {/* Install command */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center"
        >
          <div className="relative flex items-center gap-3 bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-xl px-5 py-3 text-sm font-mono">
            <BorderBeam size={150} duration={8} />
            <Terminal className="h-4 w-4 text-primary shrink-0" />
            <span className="text-zinc-400">$</span>
            <span className="text-zinc-100">npx benflux-ui init</span>
          </div>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-wrap justify-center gap-8 text-center"
        >
          {[
            { value: "200+", label: "Components" },
            { value: "8", label: "Themes" },
            { value: "100%", label: "TypeScript" },
            { value: "WCAG AAA", label: "Accessible" },
          ].map((stat) => (
            <div key={stat.label} className="space-y-1">
              <p className="text-2xl font-bold text-foreground">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
