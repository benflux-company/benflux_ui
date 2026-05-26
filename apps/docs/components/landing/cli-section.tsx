"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Terminal, Check } from "lucide-react"
import { Button, CodeBlock, Tabs, TabsList, TabsTrigger, TabsContent } from "@benflux-ui/react"

const cliCommands = [
  {
    label: "Init",
    command: "npx benflux-ui init",
    output: `  🌌 Benflux UI CLI v0.1.0

◆  Project detection
│  Framework: next
│  Package manager: pnpm
│  Tailwind: detected

◆  Creating components directory...
│  ✓  src/components/ui

◆  Creating benflux-ui.json config...
│  ✓  benflux-ui.json created

◆  Installing core dependencies...
│  ✓  @benflux-ui/react installed

◆  Benflux UI initialized!
   Next steps:
   npx benflux-ui add button
   npx benflux-ui list`,
  },
  {
    label: "Add",
    command: "npx benflux-ui add button card avatar",
    output: `  🌌 Benflux UI CLI v0.1.0

◆  Installing dependencies...
│  ✓  framer-motion, @radix-ui/react-slot

◆  Adding button...
│  ✓  Added button

◆  Adding card...
│  ✓  Added card

◆  Adding avatar...
│  ✓  Added avatar

◆  Components added!
   import { Button, Card, Avatar } from "@benflux-ui/react"`,
  },
  {
    label: "Theme",
    command: "npx benflux-ui theme install cyberpunk",
    output: `  🌌 Benflux UI CLI v0.1.0

◆  Theme cyberpunk installed!

   Usage:
   <BenfluxProvider theme="cyberpunk">`,
  },
]

export function CLISection() {
  const [active, setActive] = useState(0)

  return (
    <section className="py-24 px-4 bg-muted/20">
      <div className="max-w-5xl mx-auto space-y-16">
        <div className="text-center space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium">
              <Terminal className="h-4 w-4" />
              CLI Tool
            </div>
          </motion.div>
          <motion.h2
            className="text-4xl font-bold"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            One command to rule them all
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Auto-detects your framework, installs the right dependencies, and adds components exactly where you need them.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-[1fr,1.5fr] gap-8 items-start">
          {/* Features list */}
          <div className="space-y-4">
            {[
              "Detects Next.js, Vite, Remix, Astro",
              "Auto-installs dependencies",
              "Framework-aware component paths",
              "Supports pnpm, npm, yarn, bun",
              "Interactive component picker",
              "Theme management",
            ].map((feature) => (
              <motion.div
                key={feature}
                className="flex items-center gap-3 text-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="w-5 h-5 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                  <Check className="h-3 w-3 text-primary" />
                </div>
                <span className="text-muted-foreground">{feature}</span>
              </motion.div>
            ))}
          </div>

          {/* Terminal demo */}
          <div className="space-y-4">
            <div className="flex gap-2">
              {cliCommands.map((cmd, i) => (
                <Button
                  key={cmd.label}
                  variant={active === i ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setActive(i)}
                >
                  {cmd.label}
                </Button>
              ))}
            </div>
            <CodeBlock
              code={`$ ${cliCommands[active]!.command}\n\n${cliCommands[active]!.output}`}
              terminal
              showLineNumbers={false}
              copyable
              filename="terminal"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
