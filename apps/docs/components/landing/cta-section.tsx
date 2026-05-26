"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, Github } from "lucide-react"
import { Button, AuroraBackground, Meteors, BorderBeam } from "@benflux-ui/react"

export function CTASection() {
  return (
    <section className="py-24 px-4">
      <div className="max-w-3xl mx-auto">
        <motion.div
          className="relative overflow-hidden rounded-2xl p-12 text-center space-y-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: "radial-gradient(ellipse at center, hsl(var(--primary)/0.15), transparent 70%)",
            border: "1px solid hsl(var(--primary)/0.2)",
          }}
        >
          <BorderBeam size={300} duration={10} />
          <Meteors number={8} />

          <div className="space-y-4 relative z-10">
            <h2 className="text-4xl font-bold">
              Ready to build something extraordinary?
            </h2>
            <p className="text-muted-foreground text-lg">
              Start with one command. Ship in minutes. Wow your users.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 justify-center relative z-10">
            <Button size="xl" variant="gradient" rightIcon={<ArrowRight />} asChild>
              <Link href="/docs">Start Building</Link>
            </Button>
            <Button size="xl" variant="outline" leftIcon={<Github />} asChild>
              <a href="https://github.com/benflux20/benflux-ui" target="_blank" rel="noreferrer">
                Star on GitHub
              </a>
            </Button>
          </div>

          <div className="relative z-10">
            <code className="text-sm font-mono text-muted-foreground bg-muted/50 px-4 py-2 rounded-lg">
              npx benflux-ui init
            </code>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
