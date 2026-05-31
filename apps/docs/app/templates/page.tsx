import type { Metadata } from "next"
import Link from "next/link"

import { TemplatesClient } from "@/components/templates/templates-client"
import { Footer } from "@/components/ui/footer"
import { Navbar } from "@/components/ui/navbar"
import {
  ArrowRight,
  Code2,
  Download,
  FileCode2,
  Layers,
  Palette,
  Rocket,
  Sparkles,
  Star,
  Terminal,
  Zap,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Templates — Benflux UI",
  description:
    "7 professionally designed Next.js landing page templates. Free to download, ready to ship.",
}

export default function TemplatesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      {/* ─── Hero ──────────────────────────────────────────────────────────────── */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background via-background to-muted/30">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-[600px] w-[1000px] rounded-full bg-primary/5 blur-[140px]" />
        </div>

        <div className="container relative mx-auto max-w-screen-xl px-4 pb-20 pt-24 text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="h-3.5 w-3.5" />7 templates — free forever, no account required
          </div>

          {/* Headline */}
          <h1 className="mx-auto mb-6 max-w-4xl text-5xl font-extrabold tracking-tight md:text-6xl lg:text-7xl">
            Ship your next{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                landing page
              </span>
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10 Q75 2 150 8 Q225 14 298 6"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  className="text-primary/40"
                />
              </svg>
            </span>{" "}
            today
          </h1>

          {/* Sub */}
          <p className="mx-auto mb-10 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Professionally crafted templates built with{" "}
            <strong className="text-foreground">Next.js 15</strong>,{" "}
            <strong className="text-foreground">Tailwind CSS</strong> and{" "}
            <strong className="text-foreground">TypeScript</strong>. One click to download the full
            project — ready to customise and deploy in minutes.
          </p>

          {/* CTAs */}
          <div className="mb-16 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#templates"
              className="inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:opacity-90 hover:shadow-primary/30"
            >
              Browse templates <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-7 py-3 text-sm font-medium text-muted-foreground transition-all hover:border-foreground/30 hover:text-foreground"
            >
              <Code2 className="h-4 w-4" />
              View components
            </Link>
          </div>

          {/* Stats */}
          <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 md:grid-cols-4">
            {[
              { value: "7", label: "Templates", icon: Layers },
              { value: "100%", label: "Free & open", icon: Star },
              { value: "Next.js 15", label: "Framework", icon: Zap },
              { value: "TypeScript", label: "Type-safe", icon: FileCode2 },
            ].map(({ value, label, icon: Icon }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-1.5 rounded-2xl border border-border bg-card/50 px-4 py-5 backdrop-blur-sm"
              >
                <Icon className="mb-1 h-5 w-5 text-primary" />
                <span className="text-xl font-extrabold tracking-tight">{value}</span>
                <span className="text-xs text-muted-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Templates grid ────────────────────────────────────────────────────── */}
      <section id="templates" className="border-b border-border py-20">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Ready to ship
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Choose your template
            </h2>
            <p className="mx-auto max-w-xl text-muted-foreground">
              Click any template to preview it in full, explore the source code, or download the
              complete Next.js project as a ZIP file.
            </p>
          </div>
          <TemplatesClient />
        </div>
      </section>

      {/* ─── How it works ──────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-muted/20 py-20">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="mb-14 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Simple workflow
            </p>
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
              From browse to deployed in minutes
            </h2>
          </div>

          <div className="relative grid gap-8 md:grid-cols-3">
            {/* Connector line */}
            <div className="absolute left-1/2 top-10 hidden h-px w-2/3 -translate-x-1/2 border-t border-dashed border-border md:block" />

            {[
              {
                step: "01",
                icon: Layers,
                title: "Browse & filter",
                desc: "Explore 7 distinct landing page templates covering SaaS, agencies, startups, enterprise and product launches. Filter by category to find your match.",
              },
              {
                step: "02",
                icon: Code2,
                title: "Preview & inspect",
                desc: "Click any template to see a live full-page preview. Switch to the Code tab to inspect the source — every component, section and layout decision is visible.",
              },
              {
                step: "03",
                icon: Download,
                title: "Download & ship",
                desc: "Hit Download ZIP to get a complete, ready-to-run Next.js 15 project. Run npm install && npm run dev and your site is live in seconds.",
              },
            ].map(({ step, icon: Icon, title, desc }) => (
              <div key={step} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 mb-5 flex h-20 w-20 items-center justify-center rounded-2xl border border-primary/20 bg-background shadow-lg shadow-primary/5">
                  <Icon className="h-8 w-8 text-primary" />
                  <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                    {step}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Why our templates ─────────────────────────────────────────────────── */}
      <section className="border-b border-border py-20">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="grid items-center gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                Built right
              </p>
              <h2 className="mb-6 text-3xl font-bold tracking-tight md:text-4xl">
                Not just pretty — production ready
              </h2>
              <p className="mb-8 leading-relaxed text-muted-foreground">
                Every template is engineered with modern best practices. No duct tape, no magic
                hacks — just clean, maintainable code you can confidently build on top of.
              </p>
              <div className="space-y-4">
                {[
                  {
                    icon: Zap,
                    title: "Next.js 15 App Router",
                    desc: "Server components, metadata API, and the latest React 19 patterns.",
                  },
                  {
                    icon: Palette,
                    title: "Tailwind CSS utility-first",
                    desc: "Fully customisable with design tokens. Change your brand colour in one variable.",
                  },
                  {
                    icon: FileCode2,
                    title: "Strict TypeScript",
                    desc: "Every prop, every event, every component is fully typed for maximum IDE support.",
                  },
                  {
                    icon: Rocket,
                    title: "Vercel-optimised",
                    desc: "One-command deploy. Static pages, Image Optimization and Edge Runtime ready.",
                  },
                  {
                    icon: Terminal,
                    title: "Zero external dependencies",
                    desc: "Next.js + Tailwind + Lucide Icons. That's it. No bloat, no lock-in.",
                  },
                ].map(({ icon: Icon, title, desc }) => (
                  <div key={title} className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-4.5 w-4.5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{title}</p>
                      <p className="mt-0.5 text-sm text-muted-foreground">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Code snippet preview */}
            <div className="overflow-hidden rounded-2xl border border-border bg-zinc-950 shadow-2xl">
              <div className="flex items-center gap-1.5 border-b border-white/5 px-4 py-3">
                <div className="h-3 w-3 rounded-full bg-red-400/70" />
                <div className="h-3 w-3 rounded-full bg-yellow-400/70" />
                <div className="h-3 w-3 rounded-full bg-green-400/70" />
                <span className="ml-3 text-xs text-white/30">app/page.tsx — Nova template</span>
              </div>
              <pre
                className="overflow-x-auto p-6 text-[13px] leading-relaxed"
                style={{ fontFamily: "ui-monospace,monospace" }}
              >
                <code>
                  <span className="text-zinc-500">
                    {"// 🚀 Clean, structured, production-ready\n"}
                  </span>
                  <span className="text-violet-400">{"export default "}</span>
                  <span className="text-sky-400">{"function "}</span>
                  <span className="text-yellow-300">{"Page"}</span>
                  <span className="text-white">{"() {\n"}</span>
                  <span className="text-white">{"  return (\n"}</span>
                  <span className="text-white">{"    <main className="}</span>
                  <span className="text-green-400">{'"min-h-screen bg-[#05050f]"'}</span>
                  <span className="text-white">{">\n"}</span>
                  <span className="text-white">{"      <"}</span>
                  <span className="text-sky-400">{"Navbar"}</span>
                  <span className="text-white">{" />\n"}</span>
                  <span className="text-white">{"      <"}</span>
                  <span className="text-sky-400">{"Hero"}</span>
                  <span className="text-white">{" />\n"}</span>
                  <span className="text-white">{"      <"}</span>
                  <span className="text-sky-400">{"Features"}</span>
                  <span className="text-white">{" />\n"}</span>
                  <span className="text-white">{"      <"}</span>
                  <span className="text-sky-400">{"Pricing"}</span>
                  <span className="text-white">{" />\n"}</span>
                  <span className="text-white">{"      <"}</span>
                  <span className="text-sky-400">{"Footer"}</span>
                  <span className="text-white">{" />\n"}</span>
                  <span className="text-white">{"    </main>\n"}</span>
                  <span className="text-white">{"  )\n"}</span>
                  <span className="text-white">{"}"}</span>
                </code>
              </pre>
              <div className="border-t border-white/5 px-4 py-3">
                <div className="flex items-center gap-2">
                  <div className="h-2 w-2 rounded-full bg-green-400" />
                  <span className="text-xs text-white/30">Compiled · 0 errors · Ready to ship</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What's inside every ZIP ───────────────────────────────────────────── */}
      <section className="border-b border-border bg-muted/20 py-20">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="mb-14 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
              Complete project
            </p>
            <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
              Everything included in the ZIP
            </h2>
            <p className="mx-auto max-w-lg text-muted-foreground">
              Download one file and you have a complete, configured Next.js project — no scaffolding
              needed.
            </p>
          </div>

          <div className="mx-auto max-w-4xl">
            {/* File tree */}
            <div className="rounded-2xl border border-border bg-card p-8">
              <div className="mb-6 flex items-center gap-3">
                <Download className="h-5 w-5 text-primary" />
                <span className="font-semibold">nova-template.zip</span>
                <span className="ml-auto rounded-full bg-primary/10 px-3 py-0.5 text-xs font-medium text-primary">
                  ~12 KB
                </span>
              </div>
              <div
                className="space-y-1.5 font-mono text-sm"
                style={{ fontFamily: "ui-monospace,monospace" }}
              >
                {[
                  { indent: 0, name: "nova/", type: "folder", desc: "Root project folder" },
                  { indent: 1, name: "app/", type: "folder", desc: "" },
                  { indent: 2, name: "page.tsx", type: "file", desc: "Main landing page" },
                  { indent: 2, name: "layout.tsx", type: "file", desc: "Root layout + metadata" },
                  { indent: 2, name: "globals.css", type: "file", desc: "Tailwind base styles" },
                  { indent: 1, name: "package.json", type: "file", desc: "Dependencies" },
                  { indent: 1, name: "tailwind.config.ts", type: "file", desc: "Tailwind config" },
                  { indent: 1, name: "tsconfig.json", type: "file", desc: "TypeScript config" },
                  { indent: 1, name: "next.config.mjs", type: "file", desc: "Next.js config" },
                  { indent: 1, name: "README.md", type: "file", desc: "Setup instructions" },
                ].map(({ indent, name, type, desc }, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-2 rounded-lg px-3 py-1.5 hover:bg-muted/50"
                    style={{ paddingLeft: `${12 + indent * 20}px` }}
                  >
                    <span className={type === "folder" ? "text-yellow-500" : "text-blue-400"}>
                      {type === "folder" ? "📁" : "📄"}
                    </span>
                    <span
                      className={
                        type === "folder" ? "font-semibold text-foreground" : "text-foreground"
                      }
                    >
                      {name}
                    </span>
                    {desc && <span className="ml-auto text-xs text-muted-foreground">{desc}</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Tech stack ────────────────────────────────────────────────────────── */}
      <section className="border-b border-border py-20">
        <div className="container mx-auto max-w-screen-xl px-4 text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-primary">
            Powered by
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight">
            The best tools in the ecosystem
          </h2>
          <p className="mx-auto mb-14 max-w-lg text-muted-foreground">
            Each template is built on the same stack used by the world's fastest-growing startups.
          </p>

          <div className="mx-auto grid max-w-4xl grid-cols-2 gap-4 md:grid-cols-4">
            {[
              {
                name: "Next.js 15",
                desc: "React framework with App Router, server components and streaming",
                color: "border-white/10 bg-black text-white",
                icon: "▲",
              },
              {
                name: "Tailwind CSS",
                desc: "Utility-first CSS framework for rapid, consistent styling",
                color:
                  "border-sky-200 bg-sky-50 dark:border-sky-900 dark:bg-sky-950/30 text-sky-700 dark:text-sky-300",
                icon: "⛵",
              },
              {
                name: "TypeScript",
                desc: "Typed superset of JavaScript for safer, smarter code",
                color:
                  "border-blue-200 bg-blue-50 dark:border-blue-900 dark:bg-blue-950/30 text-blue-700 dark:text-blue-300",
                icon: "TS",
              },
              {
                name: "Lucide Icons",
                desc: "Beautiful, consistent open-source icon set with 1400+ icons",
                color:
                  "border-orange-200 bg-orange-50 dark:border-orange-900 dark:bg-orange-950/30 text-orange-700 dark:text-orange-300",
                icon: "◆",
              },
            ].map(({ name, desc, color, icon }) => (
              <div
                key={name}
                className={`rounded-2xl border p-6 text-left transition-all hover:scale-[1.02] ${color}`}
              >
                <div className="mb-3 text-2xl font-black">{icon}</div>
                <p className="mb-2 font-bold">{name}</p>
                <p className="text-xs leading-relaxed opacity-70">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── FAQ ───────────────────────────────────────────────────────────────── */}
      <section className="border-b border-border bg-muted/20 py-20">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="grid gap-16 lg:grid-cols-2">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-primary">
                FAQ
              </p>
              <h2 className="mb-4 text-3xl font-bold tracking-tight">Common questions</h2>
              <p className="text-muted-foreground">
                Everything you need to know about using our templates.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "Are these templates really free?",
                  a: "Yes, 100% free. No account required, no license fees, no attribution needed. Download and use them however you like — commercial projects included.",
                },
                {
                  q: "Do I need Benflux UI to use the templates?",
                  a: "No. The downloadable ZIP uses only Next.js, Tailwind CSS, and Lucide Icons. Benflux UI is optional — but you can easily add our components to extend any template.",
                },
                {
                  q: "How do I customise the design?",
                  a: "All styles are pure Tailwind utility classes. Change colours by editing class names, adjust spacing, fonts, and layout directly in the JSX — no configuration files to edit.",
                },
                {
                  q: "Can I deploy to Vercel right away?",
                  a: "Absolutely. Unzip, run npm install, push to GitHub, and import to Vercel. Your site is live in under 5 minutes — no environment variables or additional setup needed.",
                },
                {
                  q: "Will you add more templates?",
                  a: "Yes. New templates are added regularly. Follow us on GitHub or join our Discord to get notified when new templates drop.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="rounded-xl border border-border bg-background p-6">
                  <p className="mb-2 font-semibold">{q}</p>
                  <p className="text-sm leading-relaxed text-muted-foreground">{a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── Final CTA ─────────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="container mx-auto max-w-screen-xl px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-primary via-primary/90 to-primary/70 px-8 py-20 text-center text-primary-foreground shadow-2xl shadow-primary/20">
            {/* Background decoration */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
            </div>

            <div className="relative z-10">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-xs font-medium backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Free forever · No account needed
              </div>
              <h2 className="mx-auto mb-4 max-w-2xl text-4xl font-extrabold tracking-tight md:text-5xl">
                Ready to launch your next project?
              </h2>
              <p className="mx-auto mb-10 max-w-xl text-base opacity-80">
                Pick a template, download the ZIP, and have your site live before end of day. It
                really is that simple.
              </p>
              <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
                <a
                  href="#templates"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-primary shadow-lg transition-all hover:bg-white/90"
                >
                  Browse all templates <ArrowRight className="h-4 w-4" />
                </a>
                <Link
                  href="/docs/components"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-8 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/60"
                >
                  Explore components
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
