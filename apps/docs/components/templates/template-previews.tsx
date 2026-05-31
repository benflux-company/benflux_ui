"use client"

import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  Circle,
  Globe,
  Lock,
  Menu,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Zap,
} from "lucide-react"

// ─── Nova: Dark SaaS — Linear / Vercel aesthetic ─────────────────────────────
export function NovaPreview() {
  return (
    <div
      className="min-h-[1000px] bg-[#080810] font-sans text-white"
      style={{ fontFamily: "system-ui,sans-serif" }}
    >
      {/* Nav */}
      <nav className="flex items-center justify-between border-b border-white/[0.06] px-10 py-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-violet-500 to-indigo-600" />
            <span className="text-sm font-semibold tracking-tight text-white">Nova</span>
          </div>
          <div className="hidden items-center gap-1 md:flex">
            {["Features", "Changelog", "Docs", "Pricing"].map((l) => (
              <button
                key={l}
                className="rounded-md px-3 py-1.5 text-xs text-white/40 transition-colors hover:text-white/80"
              >
                {l}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-xs text-white/40 transition-colors hover:text-white/70">
            Log in
          </button>
          <button className="rounded-lg bg-white px-4 py-1.5 text-xs font-semibold text-[#080810] transition-colors hover:bg-white/90">
            Sign up
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative flex flex-col items-center overflow-hidden px-8 pb-20 pt-28 text-center">
        <div className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/15 blur-[100px]" />
        <div className="pointer-events-none absolute left-1/2 top-0 h-[300px] w-[400px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[60px]" />
        <div className="relative z-10 max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.04] px-3.5 py-1.5 text-xs text-white/60 backdrop-blur-sm">
            <Sparkles className="h-3 w-3 text-violet-400" />
            Announcing Nova 3.0 — Fully distributed
            <ChevronRight className="h-3 w-3 text-white/30" />
          </div>
          <h1 className="mb-6 bg-gradient-to-b from-white via-white to-white/40 bg-clip-text text-[56px] font-extrabold leading-[1.05] tracking-tight text-transparent">
            The platform built
            <br />
            for the next decade
          </h1>
          <p className="mx-auto mb-10 max-w-md text-[15px] leading-relaxed text-white/40">
            Nova gives your team the infrastructure, tooling, and observability to ship with
            confidence — from zero to global in minutes.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button className="flex items-center gap-2 rounded-xl bg-gradient-to-b from-violet-500 to-violet-700 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/30 transition-all hover:shadow-violet-500/50">
              Start building free <ArrowRight className="h-3.5 w-3.5" />
            </button>
            <button className="rounded-xl border border-white/[0.08] bg-white/[0.04] px-6 py-2.5 text-sm text-white/60 backdrop-blur-sm transition-all hover:border-white/20 hover:text-white/80">
              View documentation
            </button>
          </div>
          {/* Trusted by */}
          <div className="mt-14 flex items-center justify-center gap-2">
            <div className="flex -space-x-1.5">
              {["bg-violet-400", "bg-sky-400", "bg-pink-400", "bg-amber-400", "bg-emerald-400"].map(
                (c, i) => (
                  <div
                    key={i}
                    className={`h-5 w-5 rounded-full border-[1.5px] border-[#080810] ${c}`}
                  />
                ),
              )}
            </div>
            <p className="text-xs text-white/30">
              Trusted by <span className="text-white/60">12,000+ teams</span> worldwide
            </p>
          </div>
        </div>
      </div>

      {/* UI Mockup */}
      <div className="mx-10 mb-20 overflow-hidden rounded-2xl border border-white/[0.06] bg-[#0d0d1a] shadow-2xl shadow-black/60">
        <div className="flex items-center gap-1.5 border-b border-white/[0.04] px-4 py-3">
          {["bg-[#ff5f57]", "bg-[#ffbc2e]", "bg-[#28c840]"].map((c, i) => (
            <div key={i} className={`h-2.5 w-2.5 rounded-full ${c}`} />
          ))}
          <div className="mx-3 flex-1 rounded-md bg-white/[0.04] px-3 py-1 text-[10px] text-white/20">
            nova.io/dashboard
          </div>
        </div>
        <div className="grid grid-cols-4 gap-px bg-white/[0.03]">
          {[
            ["$2.4M", "MRR", "↑ 18%"],
            ["14.2K", "Active users", "↑ 31%"],
            ["99.99%", "Uptime", "24h avg"],
            ["42ms", "P95 latency", "↓ 6ms"],
          ].map(([v, l, d], i) => (
            <div key={i} className="bg-[#0d0d1a] p-5">
              <p className="mb-1 text-[10px] uppercase tracking-wider text-white/25">{l}</p>
              <p className="text-2xl font-bold text-white">{v}</p>
              <p className="mt-1 text-[10px] font-medium text-emerald-400">{d}</p>
            </div>
          ))}
        </div>
        <div className="p-5">
          <div className="flex h-20 items-end gap-1">
            {[40, 55, 45, 70, 60, 80, 65, 90, 75, 88, 95, 85, 92, 78, 96].map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-violet-700 to-violet-500"
                style={{ height: `${h}%`, opacity: i === 14 ? 1 : 0.4 + i * 0.04 }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="border-t border-white/[0.04] px-10 py-20">
        <p className="mb-3 text-center text-xs font-semibold uppercase tracking-widest text-violet-500">
          Platform
        </p>
        <h2 className="mb-14 text-center text-3xl font-bold text-white">
          Built for how modern teams work
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Zap,
              title: "Instant deploys",
              desc: "Push to production in under 10 seconds with zero-downtime rollouts across 40 global edge nodes.",
              col: "border-violet-500/20 bg-violet-500/5",
            },
            {
              icon: Shield,
              title: "Zero-trust security",
              desc: "End-to-end encryption, automatic TLS, audit logs, and SSO/SAML out of the box.",
              col: "border-sky-500/20 bg-sky-500/5",
            },
            {
              icon: BarChart3,
              title: "Deep observability",
              desc: "Real-time metrics, distributed tracing, and custom dashboards for every service.",
              col: "border-emerald-500/20 bg-emerald-500/5",
            },
          ].map(({ icon: Icon, title, desc, col }) => (
            <div key={title} className={`rounded-2xl border ${col} p-7`}>
              <div className="mb-5 inline-flex rounded-xl border border-white/[0.06] bg-white/[0.04] p-3">
                <Icon className="h-5 w-5 text-white/70" />
              </div>
              <h3 className="mb-2 font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-white/35">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="border-t border-white/[0.04] px-10 py-20">
        <h2 className="mb-2 text-center text-3xl font-bold text-white">Predictable pricing</h2>
        <p className="mb-14 text-center text-sm text-white/30">
          No hidden fees. Scale without surprises.
        </p>
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
          {[
            {
              n: "Hobby",
              p: "Free",
              ps: "",
              f: ["3 projects", "1GB storage", "Community support", "Basic analytics"],
              hl: false,
            },
            {
              n: "Pro",
              p: "$24",
              ps: "/mo",
              f: [
                "Unlimited projects",
                "50GB storage",
                "Priority support",
                "Advanced analytics",
                "Custom domains",
              ],
              hl: true,
            },
            {
              n: "Enterprise",
              p: "Custom",
              ps: "",
              f: [
                "Everything in Pro",
                "99.99% SLA",
                "Dedicated infra",
                "SAML/SSO",
                "Custom contracts",
              ],
              hl: false,
            },
          ].map(({ n, p, ps, f, hl }) => (
            <div
              key={n}
              className={`relative rounded-2xl border p-7 ${hl ? "border-violet-500/40 bg-gradient-to-b from-violet-900/30 to-transparent" : "border-white/[0.06] bg-white/[0.02]"}`}
            >
              {hl && (
                <div className="absolute -top-px left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-violet-500 to-indigo-500 px-4 py-0.5 text-[10px] font-bold text-white">
                  MOST POPULAR
                </div>
              )}
              <p className="mb-1 text-xs font-medium uppercase tracking-wider text-white/30">{n}</p>
              <div className="mb-6 flex items-baseline gap-1">
                <span className="text-4xl font-black text-white">{p}</span>
                <span className="text-sm text-white/25">{ps}</span>
              </div>
              <ul className="mb-7 space-y-2.5">
                {f.map((x) => (
                  <li key={x} className="flex items-center gap-2.5 text-xs text-white/50">
                    <Check className="h-3.5 w-3.5 shrink-0 text-violet-400" />
                    {x}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full rounded-xl py-2.5 text-sm font-semibold transition-all ${hl ? "bg-gradient-to-b from-violet-500 to-violet-700 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40" : "border border-white/[0.08] text-white/50 hover:border-white/20 hover:text-white/70"}`}
              >
                Get started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Zenith: Studio Portfolio — Pentagram / BASE aesthetic ───────────────────
export function ZenithPreview() {
  return (
    <div
      className="min-h-[1000px] bg-[#f8f6f1] font-sans text-[#1a1a1a]"
      style={{ fontFamily: "system-ui,sans-serif" }}
    >
      {/* Nav */}
      <nav className="flex items-center justify-between px-10 py-7">
        <span className="text-sm font-black uppercase tracking-[0.15em]">Zenith</span>
        <div className="hidden items-center gap-8 md:flex">
          {["Work", "Studio", "Services", "Journal", "Contact"].map((l) => (
            <button
              key={l}
              className="text-xs font-medium tracking-wide text-[#1a1a1a]/50 transition-colors hover:text-[#1a1a1a]"
            >
              {l}
            </button>
          ))}
        </div>
        <button className="rounded-full border border-[#1a1a1a]/15 px-5 py-2 text-xs font-semibold text-[#1a1a1a] transition-colors hover:border-[#1a1a1a]/40">
          Start a project
        </button>
      </nav>

      {/* Hero */}
      <div className="border-[#1a1a1a]/8 border-t px-10 pb-20 pt-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35">
              Independent creative studio — Est. 2016
            </p>
            <h1 className="text-[64px] font-black leading-[0.95] tracking-tight text-[#1a1a1a]">
              We shape
              <br />
              <span className="font-light italic text-[#1a1a1a]/30">brands</span>
              <br />
              that endure.
            </h1>
          </div>
          <div className="flex max-w-xs flex-col justify-end">
            <p className="text-sm leading-relaxed text-[#1a1a1a]/50">
              Zenith is a multidisciplinary studio working at the intersection of brand, digital,
              and motion. We partner with ambitious companies to create work that lasts.
            </p>
            <button className="group mt-6 flex w-fit items-center gap-2 text-sm font-semibold text-[#1a1a1a]">
              View selected work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="border-[#1a1a1a]/8 mt-16 grid grid-cols-4 gap-0 border-t">
          {[
            ["140+", "Projects"],
            ["$2B+", "Client revenue"],
            ["9", "Awards"],
            ["3", "Offices"],
          ].map(([n, l]) => (
            <div
              key={l}
              className="border-[#1a1a1a]/8 border-r py-6 pr-6 first:pt-6 last:border-r-0"
            >
              <p className="text-3xl font-black tracking-tight">{n}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[#1a1a1a]/35">
                {l}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio grid */}
      <div className="border-[#1a1a1a]/8 border-t px-10 py-16">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-xl font-bold">Selected work</h2>
          <button className="text-xs font-medium text-[#1a1a1a]/40 transition-colors hover:text-[#1a1a1a]">
            All projects →
          </button>
        </div>
        <div className="grid grid-cols-3 gap-3">
          {[
            {
              label: "Brand system",
              client: "Meridian Capital",
              year: "2024",
              bg: "bg-[#1a1a1a]",
              aspect: "aspect-[4/3]",
            },
            {
              label: "Campaign identity",
              client: "Lune Studio",
              year: "2024",
              bg: "bg-stone-200",
              aspect: "aspect-[4/3]",
            },
            {
              label: "Digital product",
              client: "Arch Software",
              year: "2023",
              bg: "bg-amber-100",
              aspect: "aspect-[4/3]",
            },
            {
              label: "Annual report",
              client: "Vega Capital",
              year: "2023",
              bg: "bg-slate-800",
              aspect: "aspect-[4/3]",
            },
            {
              label: "Motion & film",
              client: "Pattern NYC",
              year: "2023",
              bg: "bg-rose-100",
              aspect: "aspect-[4/3]",
            },
            {
              label: "Web experience",
              client: "Croft Ventures",
              year: "2024",
              bg: "bg-sky-100",
              aspect: "aspect-[4/3]",
            },
          ].map(({ label, client, year, bg, aspect }) => (
            <div
              key={client}
              className={`${aspect} group relative overflow-hidden rounded-xl ${bg}`}
            >
              <div className="absolute inset-0 flex flex-col justify-between bg-black/40 p-4 opacity-0 transition-all duration-200 group-hover:opacity-100">
                <span className="text-[9px] font-semibold uppercase tracking-widest text-white/60">
                  {year}
                </span>
                <div>
                  <p className="text-xs font-semibold text-white">{client}</p>
                  <p className="text-[9px] text-white/60">{label}</p>
                </div>
              </div>
              <div className="absolute bottom-3 left-3 opacity-100 transition-all group-hover:opacity-0">
                <p className="text-[9px] font-medium uppercase tracking-wider text-white/40 mix-blend-difference">
                  {client}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div className="border-[#1a1a1a]/8 border-t px-10 py-16">
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-2 text-3xl font-bold">What we do</h2>
            <p className="text-sm text-[#1a1a1a]/40">
              End-to-end creative services for brands at every stage.
            </p>
          </div>
          <div className="divide-[#1a1a1a]/8 divide-y">
            {[
              ["Brand Identity", "Strategy, visual identity, guidelines, naming"],
              ["Digital Design", "UX design, web, product, prototyping"],
              ["Motion & Film", "Brand films, 3D, social content, animation"],
              ["Development", "Next.js, React, TypeScript, CMS, ecommerce"],
            ].map(([t, d], i) => (
              <div key={t} className="group flex cursor-pointer items-center justify-between py-5">
                <div className="flex items-center gap-6">
                  <span className="w-6 text-[10px] font-semibold text-[#1a1a1a]/25">0{i + 1}</span>
                  <div>
                    <p className="text-sm font-semibold">{t}</p>
                    <p className="text-xs text-[#1a1a1a]/40">{d}</p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-[#1a1a1a]/20 transition-all group-hover:translate-x-0.5 group-hover:text-[#1a1a1a]/60" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-10 mb-16 rounded-3xl bg-[#1a1a1a] p-16 text-center text-white">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
          Get in touch
        </p>
        <h2 className="mb-6 text-4xl font-black tracking-tight">Have a project in mind?</h2>
        <p className="mx-auto mb-10 max-w-sm text-sm text-white/40">
          We take on select engagements. Tell us about your brand and goals.
        </p>
        <button className="rounded-full bg-white px-10 py-3.5 text-sm font-bold text-[#1a1a1a] transition-colors hover:bg-white/90">
          hello@zenith.studio
        </button>
      </div>
    </div>
  )
}

// ─── Pulse: Bold Startup — Loom / Notion aesthetic ───────────────────────────
export function PulsePreview() {
  return (
    <div
      className="min-h-[1000px] bg-white font-sans text-[#111]"
      style={{ fontFamily: "system-ui,sans-serif" }}
    >
      {/* Nav */}
      <nav className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white/90 px-10 py-4 backdrop-blur-sm">
        <div className="flex items-center gap-2">
          <div
            className="flex h-7 w-7 items-center justify-center rounded-lg"
            style={{ background: "linear-gradient(135deg,#ff6b35,#f7c59f)" }}
          >
            <Zap className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-bold">Pulse</span>
        </div>
        <div className="hidden items-center gap-1 md:flex">
          {["Product", "Customers", "Pricing", "Blog"].map((l) => (
            <button
              key={l}
              className="rounded-lg px-3 py-1.5 text-sm text-gray-500 transition-colors hover:bg-gray-50 hover:text-gray-900"
            >
              {l}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-sm text-gray-500 transition-colors hover:text-gray-900">
            Log in
          </button>
          <button
            className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all"
            style={{ background: "linear-gradient(135deg,#ff6b35,#e85d04)" }}
          >
            Get started free
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="px-10 pb-20 pt-24">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-3.5 py-1.5 text-xs font-semibold text-orange-600">
            <Circle className="h-2 w-2 fill-orange-500 text-orange-500" />
            Now with AI-powered task prioritization
          </div>
          <h1 className="mb-6 text-[64px] font-black leading-[1.0] tracking-tight text-gray-900">
            Do your best work.
            <br />
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #e5e7eb" }}>
              Every single day.
            </span>
          </h1>
          <p className="mb-10 max-w-xl text-lg leading-relaxed text-gray-500">
            Pulse keeps your team focused, aligned, and moving fast — without the meetings, the
            noise, or the bottlenecks.
          </p>
          <div className="flex items-center gap-4">
            <button
              className="flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-orange-400/30 transition-all hover:shadow-orange-400/50"
              style={{ background: "linear-gradient(135deg,#ff6b35,#e85d04)" }}
            >
              Start free — no card needed <ArrowRight className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <Check className="h-4 w-4 text-emerald-500" /> 14-day trial
            </div>
          </div>
        </div>
      </div>

      {/* App UI mockup */}
      <div className="mx-10 mb-20 overflow-hidden rounded-2xl border border-gray-100 shadow-xl shadow-gray-100">
        <div className="flex">
          {/* Sidebar */}
          <div className="w-44 border-r border-gray-50 bg-gray-50/80 p-4">
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-widest text-gray-300">
              My workspace
            </p>
            {["Inbox", "Today", "Projects", "Team", "Reports"].map((l, i) => (
              <div
                key={l}
                className={`mb-0.5 flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] ${i === 1 ? "bg-orange-50 font-semibold text-orange-600" : "text-gray-400"}`}
              >
                <div
                  className={`h-1.5 w-1.5 rounded-full ${i === 1 ? "bg-orange-500" : "bg-gray-200"}`}
                />
                {l}
              </div>
            ))}
          </div>
          {/* Main */}
          <div className="flex-1 p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-bold text-gray-900">Today — 4 tasks</h3>
              <button className="rounded-lg bg-orange-500 px-3 py-1 text-[10px] font-semibold text-white">
                Add task
              </button>
            </div>
            <div className="space-y-2">
              {[
                { t: "Finalize Q3 investor deck", tag: "Finance", done: true },
                { t: "Review product roadmap with team", tag: "Product", done: false },
                { t: "Write release notes for v2.1", tag: "Marketing", done: false },
                { t: "Sync with design on onboarding flow", tag: "Design", done: false },
              ].map(({ t, tag, done }) => (
                <div
                  key={t}
                  className={`flex items-center gap-3 rounded-xl border px-4 py-3 ${done ? "border-gray-50 bg-gray-50/60" : "border-gray-100 bg-white"}`}
                >
                  <div
                    className={`flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2 ${done ? "border-emerald-400 bg-emerald-400" : "border-gray-200"}`}
                  >
                    {done && <Check className="h-2.5 w-2.5 text-white" />}
                  </div>
                  <p
                    className={`flex-1 text-xs font-medium ${done ? "text-gray-300 line-through" : "text-gray-700"}`}
                  >
                    {t}
                  </p>
                  <span className="rounded-full border border-gray-100 bg-gray-50 px-2 py-0.5 text-[9px] font-semibold text-gray-300">
                    {tag}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Social proof */}
      <div className="border-t border-gray-50 bg-gray-50/50 px-10 py-16">
        <div className="mb-12 text-center">
          <p className="text-sm text-gray-400">Trusted by high-performance teams at</p>
        </div>
        <div className="mb-14 flex items-center justify-center gap-10">
          {["Linear", "Vercel", "Notion", "Figma", "Stripe"].map((n) => (
            <span key={n} className="text-sm font-bold tracking-tight text-gray-200">
              {n}
            </span>
          ))}
        </div>
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
          {[
            {
              q: "Our team went from 60% to 94% on-time delivery in 8 weeks.",
              name: "Sarah Chen",
              role: "VP Engineering, Scale AI",
            },
            {
              q: "Pulse replaced 4 tools we were using. Simpler and faster.",
              name: "Marc Dupont",
              role: "CEO, Meridian",
            },
            {
              q: "The AI prioritization is genuinely scary good.",
              name: "Aisha Williams",
              role: "Product Lead, Linear",
            },
          ].map(({ q, name, role }) => (
            <div key={name} className="rounded-2xl border border-gray-100 bg-white p-6">
              <div className="mb-4 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mb-4 text-sm font-medium leading-relaxed text-gray-600">
                &ldquo;{q}&rdquo;
              </p>
              <div>
                <p className="text-xs font-bold text-gray-900">{name}</p>
                <p className="text-xs text-gray-400">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-10 py-24 text-center">
        <h2 className="mb-4 text-5xl font-black tracking-tight text-gray-900">
          Ready to move faster?
        </h2>
        <p className="mb-10 text-lg text-gray-400">Join 80,000+ teams already using Pulse.</p>
        <button
          className="rounded-2xl px-12 py-4 text-base font-black text-white shadow-2xl shadow-orange-400/20 transition-all hover:shadow-orange-400/40"
          style={{ background: "linear-gradient(135deg,#ff6b35,#e85d04)" }}
        >
          Get started — it&apos;s free
        </button>
      </div>
    </div>
  )
}

// ─── Orbit: Analytics SaaS — Mixpanel / PostHog aesthetic ────────────────────
export function OrbitPreview() {
  return (
    <div
      className="min-h-[1000px] bg-[#0a0f1e] font-sans text-white"
      style={{ fontFamily: "system-ui,sans-serif" }}
    >
      {/* Nav */}
      <nav className="flex items-center justify-between border-b border-white/[0.05] px-10 py-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-sky-500">
              <TrendingUp className="h-3.5 w-3.5 text-white" />
            </div>
            <span className="text-sm font-bold text-white">Orbit</span>
          </div>
          <div className="hidden items-center gap-1 md:flex">
            {["Product", "Integrations", "Customers", "Pricing", "Docs"].map((l) => (
              <button
                key={l}
                className="rounded-md px-3 py-1.5 text-xs text-white/35 transition-colors hover:text-white/70"
              >
                {l}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-xs text-white/35 transition-colors hover:text-white/60">
            Sign in
          </button>
          <button className="rounded-lg bg-sky-500 px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-sky-400">
            Start free trial
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="px-10 pb-16 pt-24 text-center">
        <div className="bg-sky-500/8 mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/20 px-3.5 py-1.5 text-xs text-sky-400">
          <Star className="h-3 w-3" />
          Rated #1 product analytics tool — G2 Winter 2024
        </div>
        <h1 className="mx-auto mb-6 max-w-3xl text-[52px] font-extrabold leading-[1.05] tracking-tight">
          Understand your users.
          <br />
          <span className="text-sky-400">Grow your product.</span>
        </h1>
        <p className="mx-auto mb-10 max-w-lg text-[15px] leading-relaxed text-white/40">
          Orbit auto-captures every user interaction and turns it into clarity. No SQL, no data team
          required — just answers.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button className="flex items-center gap-2 rounded-xl bg-sky-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-colors hover:bg-sky-400">
            Start free — 14 days <ArrowRight className="h-3.5 w-3.5" />
          </button>
          <button className="rounded-xl border border-white/[0.07] px-7 py-3 text-sm text-white/50 transition-all hover:border-white/15 hover:text-white/70">
            View live demo
          </button>
        </div>
      </div>

      {/* Dashboard */}
      <div className="mx-10 mb-16 overflow-hidden rounded-2xl border border-white/[0.06] shadow-2xl shadow-black/50">
        <div className="flex items-center gap-2 border-b border-white/[0.05] bg-[#0d1220] px-4 py-3">
          {["bg-[#ff5f57]", "bg-[#ffbc2e]", "bg-[#28c840]"].map((c, i) => (
            <div key={i} className={`h-2 w-2 rounded-full ${c}`} />
          ))}
          <span className="ml-2 text-[10px] text-white/20">Orbit — Analytics</span>
        </div>
        <div className="bg-[#0d1220] p-5">
          <div className="mb-4 flex items-center gap-2">
            {["Overview", "Funnels", "Retention", "Cohorts"].map((t, i) => (
              <button
                key={t}
                className={`rounded-md px-3 py-1 text-[10px] font-medium transition-colors ${i === 0 ? "bg-sky-500/15 text-sky-400" : "text-white/25 hover:text-white/50"}`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="mb-4 grid grid-cols-3 gap-3">
            {[
              ["24,831", "Active users", "↑ 12%"],
              ["68.4%", "Retention D7", "↑ 3.1%"],
              ["$0.82", "Revenue/user", "↑ 8%"],
            ].map(([v, l, d]) => (
              <div key={l} className="rounded-xl border border-white/[0.05] bg-white/[0.03] p-4">
                <p className="mb-1 text-[9px] uppercase tracking-wider text-white/25">{l}</p>
                <p className="text-xl font-bold text-white">{v}</p>
                <p className="mt-1 text-[9px] font-semibold text-emerald-400">{d} vs last month</p>
              </div>
            ))}
          </div>
          {/* Chart */}
          <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-[10px] font-semibold text-white/50">
                Daily active users — last 30 days
              </p>
              <div className="flex items-center gap-1">
                <div className="h-2 w-2 rounded-full bg-sky-500" />
                <p className="text-[9px] text-white/25">DAU</p>
              </div>
            </div>
            <div className="flex h-24 items-end gap-0.5">
              {[
                42, 55, 49, 70, 62, 78, 68, 88, 74, 82, 91, 85, 79, 93, 87, 95, 90, 88, 96, 92, 98,
                94, 89, 97, 93, 99, 95, 92, 97, 100,
              ].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-t-sm transition-all"
                  style={{
                    height: `${h}%`,
                    background: i === 29 ? "#38bdf8" : `rgba(56,189,248,${0.15 + i * 0.01})`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Integrations */}
      <div className="border-t border-white/[0.04] px-10 py-14">
        <p className="mb-6 text-center text-xs font-medium text-white/25">
          Connects with your entire stack
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {[
            "Stripe",
            "Segment",
            "Snowflake",
            "BigQuery",
            "HubSpot",
            "Salesforce",
            "Slack",
            "Intercom",
            "Shopify",
            "dbt",
          ].map((n) => (
            <div
              key={n}
              className="rounded-full border border-white/[0.06] bg-white/[0.03] px-4 py-1.5 text-xs text-white/35"
            >
              {n}
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="border-t border-white/[0.04] px-10 py-20">
        <h2 className="mb-14 text-center text-3xl font-bold">
          Analytics that actually drive decisions
        </h2>
        <div className="grid gap-px overflow-hidden rounded-2xl bg-white/[0.04] md:grid-cols-2">
          {[
            {
              icon: BarChart3,
              title: "Auto-capture every event",
              desc: "No manual tracking. Orbit instruments your app automatically and captures clicks, pageviews, and conversions from day one.",
            },
            {
              icon: TrendingUp,
              title: "Funnel analysis",
              desc: "Instantly see where users drop off in any flow. Drag and drop to build funnels, then drill down into individual sessions.",
            },
            {
              icon: Globe,
              title: "Retention cohorts",
              desc: "Understand which features drive long-term retention. Automatically segment users by behaviour and compare cohorts.",
            },
            {
              icon: Zap,
              title: "AI-powered insights",
              desc: "Orbit proactively surfaces anomalies, suggests optimisations, and writes summaries — so you spend less time in dashboards.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-[#0a0f1e] p-8">
              <div className="mb-4 inline-flex rounded-xl border border-sky-500/15 bg-sky-500/10 p-3">
                <Icon className="h-5 w-5 text-sky-400" />
              </div>
              <h3 className="mb-2 font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-white/35">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Lumina: Creative Agency — IDEO / Instrument aesthetic ───────────────────
export function LuminaPreview() {
  return (
    <div
      className="min-h-[1000px] bg-[#0c0c0c] font-sans text-white"
      style={{ fontFamily: "system-ui,sans-serif" }}
    >
      {/* Nav */}
      <nav className="flex items-center justify-between px-10 py-8">
        <span className="text-sm font-black uppercase tracking-[0.25em] text-white">Lumina</span>
        <button className="rounded-full border border-white/15 px-5 py-2 text-xs text-white/50 transition-all hover:border-white/30 hover:text-white/80">
          <Menu className="h-3.5 w-3.5" />
        </button>
      </nav>

      {/* Hero — oversized type */}
      <div className="overflow-hidden px-10 pb-24 pt-12">
        <div className="mb-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/25">
            Creative studio — New York
          </p>
          <div className="h-px flex-1 bg-white/10" />
        </div>
        <h1 className="text-[80px] font-black leading-[0.88] tracking-tight">
          <span className="text-white">We make</span>
          <br />
          <span
            className="font-extralight italic"
            style={{ WebkitTextStroke: "1.5px rgba(255,255,255,0.25)", color: "transparent" }}
          >
            brands
          </span>
          <span className="text-white"> feel</span>
          <br />
          <span className="bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            inevitable.
          </span>
        </h1>
        <div className="mt-12 flex items-end justify-between">
          <p className="max-w-xs text-sm leading-relaxed text-white/35">
            Strategic design studio. We partner with the world's most ambitious companies to create
            brands that endure.
          </p>
          <button className="group flex h-16 w-16 items-center justify-center rounded-full bg-amber-400 transition-colors hover:bg-amber-300">
            <ArrowRight className="h-6 w-6 text-black transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Reel / portfolio */}
      <div className="border-t border-white/[0.05] px-10 py-16">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/25">
            Selected projects
          </p>
          <button className="text-xs text-white/25 transition-colors hover:text-white/60">
            All work →
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3">
          {[
            {
              title: "Meridian",
              cat: "Global banking rebrand",
              year: "2024",
              bg: "from-slate-800 to-slate-900",
              w: "col-span-1",
              h: "h-56",
            },
            {
              title: "Solstice",
              cat: "Tech startup identity",
              year: "2024",
              bg: "from-amber-900/40 to-orange-950",
              w: "col-span-1",
              h: "h-56",
            },
            {
              title: "Archetype",
              cat: "Fashion e-commerce platform",
              year: "2023",
              bg: "from-rose-950 to-slate-900",
              w: "col-span-2",
              h: "h-44",
            },
          ].map(({ title, cat, year, bg, w, h }) => (
            <div
              key={title}
              className={`${w} ${h} group relative overflow-hidden rounded-2xl bg-gradient-to-br ${bg} border border-white/[0.05]`}
            >
              {/* Grid pattern */}
              <div
                className="absolute inset-0 opacity-[0.07]"
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(255,255,255,.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.15) 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] font-semibold uppercase tracking-widest text-white/30">
                    {year}
                  </span>
                  <ArrowRight className="h-4 w-4 text-white/0 transition-all group-hover:text-white/60" />
                </div>
                <div>
                  <p className="text-xl font-black tracking-tight text-white">{title}</p>
                  <p className="text-[10px] text-white/30">{cat}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Awards */}
      <div className="border-t border-white/[0.05] px-10 py-14">
        <div className="grid grid-cols-4 gap-6">
          {[
            { n: "14×", l: "Cannes Lions", sub: "Gold & Silver" },
            { n: "9×", l: "D&AD Pencil", sub: "Wood to Black" },
            { n: "30+", l: "Awwwards", sub: "SOTD & SOTY" },
            { n: "5×", l: "Clio Awards", sub: "Grand Prix" },
          ].map(({ n, l, sub }) => (
            <div key={l}>
              <p className="text-3xl font-black text-amber-400">{n}</p>
              <p className="mt-1 text-sm font-semibold text-white/70">{l}</p>
              <p className="text-[10px] text-white/25">{sub}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="border-t border-white/[0.05] px-10 py-20">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-5xl font-black tracking-tight text-white">Next project?</h2>
            <p className="mt-3 max-w-sm text-sm text-white/35">
              We work with brands who are ready to think differently. Let's talk.
            </p>
          </div>
          <div className="flex flex-col items-end gap-3">
            <button className="rounded-full bg-amber-400 px-8 py-3.5 text-sm font-black text-black transition-colors hover:bg-amber-300">
              Start a conversation
            </button>
            <p className="text-xs text-white/20">studio@lumina.co · +1 212 000 0000</p>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Apex: Enterprise — Palantir / Stripe aesthetic ──────────────────────────
export function ApexPreview() {
  return (
    <div
      className="min-h-[1000px] bg-white font-sans text-slate-900"
      style={{ fontFamily: "system-ui,sans-serif" }}
    >
      {/* Nav */}
      <nav className="flex items-center justify-between border-b border-slate-100 px-10 py-4">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900">
              <Globe className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-bold tracking-tight">Apex</span>
          </div>
          <div className="hidden items-center gap-1 md:flex">
            {["Platform", "Solutions", "Enterprise", "Security", "Pricing"].map((l) => (
              <button
                key={l}
                className="rounded-md px-3 py-1.5 text-xs text-slate-500 transition-colors hover:bg-slate-50 hover:text-slate-900"
              >
                {l}
              </button>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-xs text-slate-500 transition-colors hover:text-slate-900">
            Sign in
          </button>
          <button className="rounded-lg bg-slate-900 px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800">
            Request demo
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="px-10 py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700">
              <Lock className="h-3 w-3" />
              SOC2 Type II · ISO 27001 · HIPAA · GDPR
            </div>
            <h1 className="mb-6 text-[52px] font-extrabold leading-[1.05] tracking-tight text-slate-900">
              Infrastructure your
              <br />
              enterprise can{" "}
              <span className="relative">
                trust.
                <div className="absolute -bottom-1 left-0 h-1 w-full rounded-full bg-blue-600/30" />
              </span>
            </h1>
            <p className="mb-8 max-w-xl text-[15px] leading-relaxed text-slate-500">
              Apex gives mission-critical teams the security, reliability, and control they need —
              backed by a 99.99% SLA and 24/7 expert support.
            </p>
            <div className="flex items-center gap-3">
              <button className="rounded-xl bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/20 transition-all hover:bg-blue-700 hover:shadow-blue-500/30">
                Request a demo
              </button>
              <button className="rounded-xl border border-slate-200 px-7 py-3 text-sm text-slate-600 transition-all hover:border-slate-300 hover:text-slate-900">
                Talk to sales
              </button>
            </div>
          </div>

          {/* Trust block */}
          <div className="space-y-3">
            {[
              {
                label: "System uptime (last 365 days)",
                value: "99.99%",
                sub: "Zero critical incidents",
                color: "bg-emerald-50 border-emerald-100",
                text: "text-emerald-700",
              },
              {
                label: "Security certifications",
                value: "12",
                sub: "SOC2, ISO27001, HIPAA, GDPR + 8 more",
                color: "bg-blue-50 border-blue-100",
                text: "text-blue-700",
              },
              {
                label: "Dedicated support SLA",
                value: "15 min",
                sub: "Guaranteed response for P0 incidents",
                color: "bg-violet-50 border-violet-100",
                text: "text-violet-700",
              },
            ].map(({ label, value, sub, color, text }) => (
              <div
                key={label}
                className={`flex items-center gap-5 rounded-2xl border ${color} p-5`}
              >
                <div className={`text-3xl font-black ${text}`}>{value}</div>
                <div>
                  <p className="text-sm font-semibold text-slate-900">{label}</p>
                  <p className="text-xs text-slate-500">{sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Clients */}
      <div className="border-y border-slate-50 bg-slate-50/60 px-10 py-10">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-slate-300">
          Trusted by industry leaders
        </p>
        <div className="flex items-center justify-center gap-12">
          {[
            "Goldman Sachs",
            "Johnson & Johnson",
            "Lockheed Martin",
            "Siemens AG",
            "CVS Health",
          ].map((n) => (
            <span key={n} className="text-xs font-black uppercase tracking-wide text-slate-200">
              {n}
            </span>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="px-10 py-20">
        <div className="mb-14 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Built for the most demanding environments
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-400">
            Every capability you need, none of the compromises enterprise teams have come to expect.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Shield,
              title: "Zero-trust architecture",
              desc: "End-to-end encryption, network segmentation, and least-privilege access enforced at every layer.",
              accent: "bg-blue-600",
            },
            {
              icon: Globe,
              title: "Multi-region redundancy",
              desc: "Active-active deployment across 35 global data centres. Automatic failover in under 30 seconds.",
              accent: "bg-emerald-600",
            },
            {
              icon: Lock,
              title: "Complete audit trail",
              desc: "Immutable logs for every API call, data access, and configuration change. Fully exportable.",
              accent: "bg-violet-600",
            },
            {
              icon: BarChart3,
              title: "Real-time monitoring",
              desc: "360° visibility into performance, errors, and security events. Custom alerting and on-call routing.",
              accent: "bg-orange-500",
            },
            {
              icon: Zap,
              title: "Enterprise SSO & SCIM",
              desc: "SAML 2.0, OIDC, SCIM provisioning, and role mapping with your existing IdP.",
              accent: "bg-sky-600",
            },
            {
              icon: Star,
              title: "Dedicated success team",
              desc: "A named CSM, solutions architect, and senior support engineer — available 24/7.",
              accent: "bg-rose-500",
            },
          ].map(({ icon: Icon, title, desc, accent }) => (
            <div
              key={title}
              className="group rounded-2xl border border-slate-100 p-7 transition-all hover:border-blue-100 hover:bg-blue-50/30"
            >
              <div
                className={`mb-5 inline-flex h-10 w-10 items-center justify-center rounded-xl ${accent}`}
              >
                <Icon className="h-5 w-5 text-white" />
              </div>
              <h3 className="mb-2 font-semibold text-slate-900">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-10 mb-20 overflow-hidden rounded-3xl bg-gradient-to-r from-slate-900 to-blue-950 p-16 text-center text-white shadow-2xl">
        <h2 className="mb-4 text-4xl font-bold tracking-tight">
          Ready to secure your infrastructure?
        </h2>
        <p className="mx-auto mb-10 max-w-lg text-slate-400">
          Join 600+ enterprise teams who chose Apex. Average deployment: 72 hours.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button className="rounded-xl bg-white px-8 py-3.5 text-sm font-bold text-slate-900 transition-colors hover:bg-slate-50">
            Request a demo
          </button>
          <button className="rounded-xl border border-white/15 px-8 py-3.5 text-sm text-white/70 transition-all hover:border-white/30 hover:text-white">
            Talk to sales →
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Aura: Product Launch — Apple / Teenage Engineering aesthetic ─────────────
export function AuraPreview() {
  return (
    <div
      className="min-h-[1000px] font-sans text-white"
      style={{
        fontFamily: "system-ui,sans-serif",
        background: "linear-gradient(160deg, #080414 0%, #100828 40%, #0d0520 100%)",
      }}
    >
      {/* Nav */}
      <nav className="flex items-center justify-between px-10 py-7">
        <span className="text-sm font-black uppercase tracking-[0.2em] text-white/80">Aura</span>
        <div className="hidden items-center gap-7 text-xs text-white/35 md:flex">
          {["Features", "Gallery", "Compare", "Reviews"].map((l) => (
            <button key={l} className="transition-colors hover:text-white/60">
              {l}
            </button>
          ))}
        </div>
        <button className="rounded-full border border-white/15 bg-white/5 px-5 py-2 text-xs font-semibold text-white/60 backdrop-blur-sm transition-all hover:border-white/30 hover:text-white/80">
          Pre-order
        </button>
      </nav>

      {/* Hero */}
      <div className="relative overflow-hidden px-10 pb-20 pt-16 text-center">
        {/* Glows */}
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-96 w-96 -translate-x-1/2 rounded-full blur-[120px]"
          style={{
            background: "radial-gradient(circle, rgba(139,92,246,0.25) 0%, transparent 70%)",
          }}
        />
        <div
          className="pointer-events-none absolute left-1/3 top-1/3 h-64 w-64 rounded-full blur-[80px]"
          style={{
            background: "radial-gradient(circle, rgba(59,130,246,0.12) 0%, transparent 70%)",
          }}
        />

        <div className="relative z-10">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-violet-400/60">
            Introducing
          </p>
          <h1 className="mb-3 text-[84px] font-black leading-[0.9] tracking-tight text-white">
            Aura Pro
          </h1>
          <p className="mb-6 text-4xl font-extralight uppercase tracking-[0.2em] text-white/20">
            Collection
          </p>
          <p className="mx-auto mb-10 max-w-md text-[15px] leading-relaxed text-white/40">
            Precision-engineered for the discerning few. 48-hour battery, Always-On Retina display,
            and adaptive health intelligence.
          </p>
          <div className="flex items-center justify-center gap-4">
            <button className="rounded-full bg-white px-10 py-3.5 text-sm font-bold text-violet-900 shadow-2xl shadow-violet-500/20 transition-all hover:bg-white/95">
              Pre-order · from $299
            </button>
            <button className="border-white/12 rounded-full border bg-white/5 px-8 py-3.5 text-sm text-white/50 backdrop-blur-sm transition-all hover:border-white/25 hover:text-white/70">
              Learn more
            </button>
          </div>
        </div>
      </div>

      {/* Specs grid */}
      <div className="mx-10 mb-16 grid grid-cols-3 gap-px overflow-hidden rounded-2xl border border-white/[0.05] bg-white/[0.03]">
        {[
          { v: "48h", l: "Battery life", sub: "Industry-leading" },
          { v: "2.1mm", l: "Ultra-thin display", sub: "Sapphire crystal" },
          { v: "12", l: "Premium finishes", sub: "From titanium to gold" },
          { v: "IP68", l: "Water resistance", sub: "50m depth rated" },
          { v: "AI", l: "Health intelligence", sub: "ECG, SpO2, sleep" },
          { v: "5yr", l: "Warranty", sub: "Worldwide coverage" },
        ].map(({ v, l, sub }) => (
          <div key={l} className="bg-white/[0.03] px-6 py-8 text-center">
            <p className="text-3xl font-black text-white">{v}</p>
            <p className="mt-1 text-xs font-semibold text-white/50">{l}</p>
            <p className="text-[10px] text-white/20">{sub}</p>
          </div>
        ))}
      </div>

      {/* Reviews */}
      <div className="px-10 pb-16">
        <p className="mb-8 text-center text-xs font-semibold uppercase tracking-widest text-white/20">
          Press coverage
        </p>
        <div className="grid gap-4 md:grid-cols-2">
          {[
            {
              q: "Aura Pro is, without question, the finest wearable ever made. A benchmark for the entire industry.",
              pub: "The Verge",
              score: "9.8/10",
            },
            {
              q: "I wore it for 30 days. My previous watch is now gathering dust.",
              pub: "Wired Magazine",
              score: "Essential pick",
            },
          ].map(({ q, pub, score }) => (
            <div
              key={pub}
              className="rounded-2xl border border-white/[0.07] bg-white/[0.03] p-7 backdrop-blur-sm"
            >
              <div className="mb-1 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mb-5 mt-4 text-sm font-light italic leading-relaxed text-white/60">
                &ldquo;{q}&rdquo;
              </p>
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold text-white/80">{pub}</p>
                <span className="rounded-full border border-amber-400/30 bg-amber-400/10 px-3 py-0.5 text-xs font-semibold text-amber-400">
                  {score}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="border-t border-white/[0.05] px-10 py-20 text-center">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-white/20">
          Limited availability
        </p>
        <h2 className="mb-4 text-5xl font-black tracking-tight text-white">Reserve yours now.</h2>
        <p className="mb-10 text-sm text-white/30">
          Ships Q1 2025. First 1,000 orders receive engraving + premium case.
        </p>
        <button
          className="py-4.5 rounded-full px-14 text-base font-bold text-white shadow-2xl transition-all hover:shadow-violet-500/30"
          style={{
            background: "linear-gradient(135deg,#7c3aed,#4f46e5)",
            paddingTop: "14px",
            paddingBottom: "14px",
          }}
        >
          Pre-order Aura Pro →
        </button>
        <p className="mt-5 text-xs text-white/20">
          Free express shipping · 60-day returns · 5-year global warranty
        </p>
      </div>
    </div>
  )
}
