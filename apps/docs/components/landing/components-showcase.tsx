"use client"

import Link from "next/link"

import { motion } from "framer-motion"
import {
  ArrowRight,
  Bell,
  ChevronDown,
  File,
  Folder,
  FolderOpen,
  Search,
  Star,
  Zap,
} from "lucide-react"

const COMPONENTS_GRID = [
  {
    name: "Button",
    href: "/docs/components/button",
    preview: (
      <div className="flex flex-wrap items-center justify-center gap-2 p-6">
        <button className="inline-flex h-8 items-center justify-center rounded-md bg-primary px-4 text-xs font-medium text-primary-foreground">
          Primary
        </button>
        <button className="inline-flex h-8 items-center justify-center rounded-md border border-input bg-background px-4 text-xs font-medium">
          Outline
        </button>
        <button className="inline-flex h-8 items-center justify-center rounded-md px-4 text-xs font-medium text-muted-foreground hover:bg-accent">
          Ghost
        </button>
        <button className="inline-flex h-8 items-center justify-center rounded-md bg-destructive px-4 text-xs font-medium text-destructive-foreground">
          Destructive
        </button>
        <button className="inline-flex h-8 items-center justify-center gap-1.5 rounded-md bg-gradient-to-r from-primary to-purple-600 px-4 text-xs font-medium text-white">
          Gradient
        </button>
      </div>
    ),
  },
  {
    name: "Card",
    href: "/docs/components/card",
    preview: (
      <div className="flex items-center justify-center p-5">
        <div className="w-full space-y-2 rounded-xl border border-border bg-card p-4 shadow-sm">
          <div className="flex items-center gap-3">
            <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary/10">
              <Zap className="h-3.5 w-3.5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-semibold">Card component</p>
              <p className="text-[11px] text-muted-foreground">Header · Content · Footer</p>
            </div>
          </div>
          <p className="text-[11px] leading-relaxed text-muted-foreground">
            Versatile container with multiple variants.
          </p>
          <button className="inline-flex h-6 w-full items-center justify-center rounded-md bg-primary px-3 text-[11px] font-medium text-primary-foreground">
            Learn more
          </button>
        </div>
      </div>
    ),
  },
  {
    name: "Input",
    href: "/docs/components/input",
    preview: (
      <div className="flex flex-col justify-center gap-2.5 p-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground" />
          <input
            className="flex h-8 w-full rounded-md border border-input bg-transparent pl-8 pr-3 text-xs placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring"
            placeholder="Search components..."
            readOnly
          />
        </div>
        <input
          className="flex h-8 w-full rounded-md border border-input bg-transparent px-3 text-xs placeholder:text-muted-foreground"
          placeholder="Email address"
          readOnly
        />
        <input
          className="flex h-8 w-full rounded-md border-0 border-b-2 border-input bg-transparent px-1 text-xs placeholder:text-muted-foreground focus:outline-none"
          placeholder="Underline variant"
          readOnly
        />
      </div>
    ),
  },
  {
    name: "Badge",
    href: "/docs/components/badge",
    preview: (
      <div className="flex flex-wrap items-center justify-center gap-2 p-6">
        {[
          { label: "Default", cls: "bg-primary/10 text-primary border-primary/20" },
          {
            label: "Success",
            cls: "bg-green-500/10 text-green-700 dark:text-green-400 border-green-500/20",
          },
          {
            label: "Warning",
            cls: "bg-yellow-500/10 text-yellow-700 dark:text-yellow-400 border-yellow-500/20",
          },
          { label: "Error", cls: "bg-destructive/10 text-destructive border-destructive/20" },
          { label: "Outline", cls: "border-border text-foreground" },
          {
            label: "Gradient",
            cls: "bg-gradient-to-r from-primary/20 to-purple-500/20 text-primary border-primary/20",
          },
        ].map((b) => (
          <span
            key={b.label}
            className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[11px] font-semibold ${b.cls}`}
          >
            {b.label}
          </span>
        ))}
      </div>
    ),
  },
  {
    name: "Dialog",
    href: "/docs/components/dialog",
    preview: (
      <div className="flex items-center justify-center p-5">
        <div className="w-full space-y-3 rounded-xl border border-border bg-background p-4 shadow-lg">
          <div className="space-y-1">
            <p className="text-xs font-semibold">Confirm action</p>
            <p className="text-[11px] text-muted-foreground">
              This will permanently delete your account and cannot be undone.
            </p>
          </div>
          <div className="flex justify-end gap-2">
            <button className="h-6 rounded-md border border-input px-3 text-[11px] transition-colors hover:bg-accent">
              Cancel
            </button>
            <button className="h-6 rounded-md bg-destructive px-3 text-[11px] text-destructive-foreground">
              Delete
            </button>
          </div>
        </div>
      </div>
    ),
  },
  {
    name: "Select",
    href: "/docs/components/select",
    preview: (
      <div className="flex flex-col justify-center gap-2 p-6">
        <div className="flex h-8 w-full items-center justify-between rounded-md border border-input bg-transparent px-3 text-xs text-muted-foreground">
          <span>Select framework…</span>
          <ChevronDown className="h-3.5 w-3.5 opacity-50" />
        </div>
        <div className="rounded-md border border-border bg-popover p-1 shadow-md">
          {["Next.js", "Remix", "Astro", "Vite"].map((fw, i) => (
            <div
              key={fw}
              className={`flex cursor-pointer items-center gap-2 rounded-sm px-2 py-1 text-xs ${i === 0 ? "bg-accent" : "hover:bg-accent"}`}
            >
              {i === 0 && <div className="h-1.5 w-1.5 rounded-full bg-primary" />}
              {i !== 0 && <div className="h-1.5 w-1.5" />}
              {fw}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    name: "Avatar",
    href: "/docs/components/avatar",
    preview: (
      <div className="flex flex-col items-center justify-center gap-4 p-6">
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {[
              { initials: "JD", bg: "hsl(220 70% 50%)" },
              { initials: "AS", bg: "hsl(280 70% 50%)" },
              { initials: "BK", bg: "hsl(150 70% 40%)" },
              { initials: "MR", bg: "hsl(0 70% 50%)" },
            ].map(({ initials, bg }) => (
              <div
                key={initials}
                className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background text-[11px] font-medium text-white"
                style={{ background: bg }}
              >
                {initials}
              </div>
            ))}
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-background bg-muted text-[11px] font-medium text-muted-foreground">
              +5
            </div>
          </div>
          <div>
            <p className="text-xs font-medium">Team</p>
            <p className="text-[11px] text-muted-foreground">9 members</p>
          </div>
        </div>
        <div className="flex gap-2">
          {["SM", "MD", "LG"].map((size, i) => (
            <div
              key={size}
              className="flex items-center justify-center rounded-full border border-primary/20 bg-primary/10 font-medium text-primary"
              style={{ width: 24 + i * 10, height: 24 + i * 10, fontSize: 9 + i * 1 }}
            >
              {size}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    name: "Alert",
    href: "/docs/components/alert",
    preview: (
      <div className="flex flex-col justify-center gap-2 p-5">
        <div className="flex gap-2.5 rounded-lg border border-blue-500/30 bg-blue-500/10 p-2.5 text-blue-700 dark:text-blue-300">
          <Bell className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          <div>
            <p className="text-[11px] font-medium">New feature available</p>
            <p className="mt-0.5 text-[10px] opacity-75">Check out the new components.</p>
          </div>
        </div>
        <div className="flex gap-2.5 rounded-lg border border-green-500/30 bg-green-500/10 p-2.5 text-green-700 dark:text-green-400">
          <Star className="mt-0.5 h-3.5 w-3.5 shrink-0 fill-current" />
          <p className="text-[11px] font-medium">Deployment successful!</p>
        </div>
        <div className="flex gap-2.5 rounded-lg border border-yellow-500/30 bg-yellow-500/10 p-2.5 text-yellow-700 dark:text-yellow-400">
          <Zap className="mt-0.5 h-3.5 w-3.5 shrink-0" />
          <p className="text-[11px] font-medium">Approaching rate limit.</p>
        </div>
      </div>
    ),
  },
  {
    name: "Progress",
    href: "/docs/components/progress",
    preview: (
      <div className="flex flex-col justify-center gap-3.5 p-6">
        {[
          { label: "Storage", value: 68, color: "bg-primary" },
          { label: "Bandwidth", value: 40, color: "bg-blue-500" },
          { label: "CPU", value: 85, color: "bg-orange-500" },
          { label: "Memory", value: 55, color: "bg-purple-500" },
        ].map((p) => (
          <div key={p.label} className="space-y-1">
            <div className="flex justify-between text-[11px] text-muted-foreground">
              <span>{p.label}</span>
              <span>{p.value}%</span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full bg-muted">
              <div className={`h-full rounded-full ${p.color}`} style={{ width: `${p.value}%` }} />
            </div>
          </div>
        ))}
      </div>
    ),
  },
  {
    name: "Tree",
    href: "/docs/components/tree",
    preview: (
      <div className="flex flex-col justify-center gap-1 p-5 text-[11px]">
        {[
          {
            icon: <FolderOpen className="h-3 w-3 text-yellow-500" />,
            label: "src",
            depth: 0,
            open: true,
          },
          {
            icon: <Folder className="h-3 w-3 text-yellow-500" />,
            label: "components",
            depth: 1,
            open: false,
          },
          {
            icon: <File className="h-3 w-3 text-blue-400" />,
            label: "app.tsx",
            depth: 1,
            open: false,
          },
          {
            icon: <File className="h-3 w-3 text-blue-400" />,
            label: "index.ts",
            depth: 1,
            open: false,
          },
          {
            icon: <Folder className="h-3 w-3 text-yellow-500" />,
            label: "public",
            depth: 0,
            open: false,
          },
          {
            icon: <File className="h-3 w-3 text-muted-foreground" />,
            label: "package.json",
            depth: 0,
            open: false,
          },
        ].map((row, i) => (
          <div
            key={i}
            className="flex items-center gap-1.5"
            style={{ paddingLeft: row.depth * 16 }}
          >
            {row.icon}
            <span className={i === 0 ? "font-medium text-foreground" : "text-muted-foreground"}>
              {row.label}
            </span>
          </div>
        ))}
      </div>
    ),
  },
  {
    name: "Transfer",
    href: "/docs/components/transfer",
    preview: (
      <div className="flex items-center justify-center gap-2 p-4">
        <div className="w-[42%] space-y-1 rounded-lg border border-border bg-background p-2">
          <p className="mb-1.5 text-[10px] font-medium text-muted-foreground">Available</p>
          {["Button", "Card", "Input"].map((item) => (
            <div
              key={item}
              className="flex items-center gap-1.5 rounded-md px-1.5 py-1 text-[10px] hover:bg-accent"
            >
              <div className="h-2.5 w-2.5 rounded-sm border border-input" />
              {item}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-1">
          <div className="flex h-5 w-5 items-center justify-center rounded-md border border-border bg-background text-[10px]">
            ›
          </div>
          <div className="flex h-5 w-5 items-center justify-center rounded-md border border-border bg-background text-[10px]">
            ‹
          </div>
        </div>
        <div className="w-[42%] space-y-1 rounded-lg border border-border bg-background p-2">
          <p className="mb-1.5 text-[10px] font-medium text-muted-foreground">Selected</p>
          {["Badge", "Avatar"].map((item) => (
            <div
              key={item}
              className="flex items-center gap-1.5 rounded-md bg-primary/10 px-1.5 py-1 text-[10px] text-primary"
            >
              <div className="h-2.5 w-2.5 rounded-sm border border-primary bg-primary" />
              {item}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    name: "QR Code",
    href: "/docs/components/qrcode",
    preview: (
      <div className="flex items-center justify-center gap-5 p-5">
        <div className="rounded-lg border border-border p-2.5">
          <svg width="72" height="72" viewBox="0 0 21 21" className="text-foreground">
            <rect x="0" y="0" width="7" height="7" rx="1" fill="currentColor" opacity="0.9" />
            <rect x="14" y="0" width="7" height="7" rx="1" fill="currentColor" opacity="0.9" />
            <rect x="0" y="14" width="7" height="7" rx="1" fill="currentColor" opacity="0.9" />
            {[
              [2, 2],
              [15, 2],
              [2, 15],
              [9, 0],
              [9, 2],
              [9, 4],
              [0, 9],
              [2, 9],
              [4, 9],
              [12, 9],
              [14, 9],
              [16, 9],
              [18, 9],
              [9, 12],
              [11, 12],
              [13, 12],
              [9, 14],
              [11, 14],
              [9, 16],
              [11, 16],
              [13, 16],
              [15, 14],
              [17, 14],
              [15, 16],
              [17, 16],
              [19, 14],
              [19, 16],
            ].map(([cx, cy], i) => (
              <rect key={i} x={cx} y={cy} width="2" height="2" fill="currentColor" opacity="0.8" />
            ))}
            <rect x="2" y="2" width="3" height="3" rx="0.5" fill="currentColor" />
            <rect x="16" y="2" width="3" height="3" rx="0.5" fill="currentColor" />
            <rect x="2" y="16" width="3" height="3" rx="0.5" fill="currentColor" />
          </svg>
        </div>
        <div className="space-y-1 text-[10px] text-muted-foreground">
          <p className="font-medium text-foreground">Scan to open</p>
          <p>SVG or Canvas</p>
          <p>Error correction</p>
          <p>Embed image</p>
          <p>Active / Expired</p>
        </div>
      </div>
    ),
  },
]

export function ComponentsShowcase() {
  return (
    <section className="px-4 py-24">
      <div className="container mx-auto max-w-screen-xl">
        {/* Section header */}
        <div className="mb-12 space-y-3">
          <motion.p
            className="text-sm font-medium text-primary"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            Components
          </motion.p>
          <motion.h2
            className="text-3xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Explore the library
          </motion.h2>
          <motion.p
            className="max-w-xl text-muted-foreground"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Over 80 components ready to copy and paste into your apps. Accessible, customizable,
            open source.
          </motion.p>
        </div>

        {/* Grid — toutes les cartes font exactement la même hauteur */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {COMPONENTS_GRID.map((component, i) => (
            <motion.div
              key={component.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="h-full"
            >
              <Link
                href={component.href}
                className="group flex h-full flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:border-primary/40 hover:shadow-md"
              >
                {/* Zone de preview : hauteur fixe identique pour toutes les cartes */}
                <div className="flex h-[170px] items-center overflow-hidden border-b border-border bg-muted/30">
                  <div className="w-full">{component.preview}</div>
                </div>

                {/* Footer de la carte */}
                <div className="mt-auto flex items-center justify-between px-4 py-3">
                  <span className="text-sm font-medium">{component.name}</span>
                  <ArrowRight className="h-3.5 w-3.5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-foreground" />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* See all */}
        <motion.div
          className="mt-10 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <Link
            href="/docs/components"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Browse all 80+ components
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
