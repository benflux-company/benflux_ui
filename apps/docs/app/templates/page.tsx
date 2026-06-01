import type { Metadata } from "next"
import Link from "next/link"

import { TemplatesClient } from "@/components/templates/templates-client"
import { FAQAccordion } from "@/components/ui/faq-accordion"
import { Footer } from "@/components/ui/footer"
import { Navbar } from "@/components/ui/navbar"
import {
  ArrowRight,
  Code2,
  Download,
  File,
  FileCode2,
  Folder,
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
            <Sparkles className="h-3.5 w-3.5" />6 templates — free forever, no account required
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
                    {type === "folder" ? (
                      <Folder className="h-4 w-4 shrink-0 text-amber-500" />
                    ) : (
                      <File className="h-4 w-4 shrink-0 text-blue-400" />
                    )}
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
            {/* Next.js — official Simple Icons path */}
            <div className="rounded-2xl border border-zinc-800 bg-zinc-950 p-6 text-left text-white transition-all hover:scale-[1.02]">
              <svg viewBox="0 0 24 24" className="mb-3 h-8 w-8" fill="white" aria-label="Next.js">
                <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
              </svg>
              <p className="mb-1.5 font-bold">Next.js 15</p>
              <p className="text-xs leading-relaxed text-white/50">
                React framework with App Router, server components and streaming
              </p>
            </div>

            {/* Tailwind CSS — official Simple Icons path, brand color #06B6D4 */}
            <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6 text-left transition-all hover:scale-[1.02] dark:border-cyan-900 dark:bg-cyan-950/30">
              <svg
                viewBox="0 0 24 24"
                className="mb-3 h-8 w-8"
                fill="#06B6D4"
                aria-label="Tailwind CSS"
              >
                <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zM6.001 12c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C7.666 17.818 9.027 19.2 12.001 19.2c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" />
              </svg>
              <p className="mb-1.5 font-bold text-cyan-900 dark:text-cyan-100">Tailwind CSS</p>
              <p className="text-xs leading-relaxed text-cyan-800/60 dark:text-cyan-200/50">
                Utility-first CSS framework for rapid, consistent styling
              </p>
            </div>

            {/* TypeScript — official Simple Icons path, brand color #3178C6 */}
            <div className="rounded-2xl border border-blue-200 bg-white p-6 text-left transition-all hover:scale-[1.02] dark:border-blue-900 dark:bg-blue-950/20">
              <svg
                viewBox="0 0 24 24"
                className="mb-3 h-8 w-8"
                fill="#3178C6"
                aria-label="TypeScript"
              >
                <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
              </svg>
              <p className="mb-1.5 font-bold text-blue-900 dark:text-blue-100">TypeScript</p>
              <p className="text-xs leading-relaxed text-blue-800/60 dark:text-blue-200/50">
                Typed superset of JavaScript for safer, smarter code
              </p>
            </div>

            {/* Lucide Icons — official Simple Icons path, brand color #F56565 */}
            <div className="rounded-2xl border border-red-200 bg-red-50 p-6 text-left transition-all hover:scale-[1.02] dark:border-red-900 dark:bg-red-950/20">
              <svg
                viewBox="0 0 24 24"
                className="mb-3 h-8 w-8"
                fill="#F56565"
                aria-label="Lucide Icons"
              >
                <path d="M18.483 1.123a1.09 1.09 0 0 0-.752.362 1.09 1.09 0 0 0 .088 1.54 11.956 11.956 0 0 1 4 8.946 7.62 7.62 0 0 1-7.637 7.636 7.62 7.62 0 0 1-7.637-7.636 3.255 3.255 0 0 1 3.273-3.273c1.82 0 3.273 1.45 3.273 3.273a1.09 1.09 0 0 0 1.09 1.09 1.09 1.09 0 0 0 1.092-1.09c0-3-2.455-5.455-5.455-5.455s-5.454 2.455-5.454 5.455c0 5.408 4.408 9.818 9.818 9.818 5.41 0 9.818-4.41 9.818-9.818A14.16 14.16 0 0 0 19.272 1.4a1.09 1.09 0 0 0-.789-.277ZM9.818 2.15C4.408 2.151 0 6.561 0 11.97a14.16 14.16 0 0 0 4.8 10.637 1.09 1.09 0 0 0 1.54-.096 1.09 1.09 0 0 0-.095-1.54 11.957 11.957 0 0 1-4.063-9 7.62 7.62 0 0 1 7.636-7.637 7.62 7.62 0 0 1 7.637 7.636 3.256 3.256 0 0 1-3.273 3.273 3.256 3.256 0 0 1-3.273-3.273 1.09 1.09 0 0 0-1.09-1.09 1.09 1.09 0 0 0-1.092 1.09c0 3 2.455 5.455 5.455 5.455s5.454-2.455 5.454-5.455c0-5.408-4.408-9.818-9.818-9.818z" />
              </svg>
              <p className="mb-1.5 font-bold text-red-900 dark:text-red-100">Lucide Icons</p>
              <p className="text-xs leading-relaxed text-red-800/60 dark:text-red-200/50">
                Beautiful, consistent open-source icon set with 1400+ icons
              </p>
            </div>
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

            <FAQAccordion />
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
