"use client"

import {
  ArrowRight,
  BarChart3,
  Check,
  ChevronRight,
  Globe,
  Lock,
  Menu,
  Shield,
  Sparkles,
  Star,
  Zap,
} from "lucide-react"

// ─── Nova: Dark SaaS ─────────────────────────────────────────────────────────
export function NovaPreview() {
  return (
    <div
      className="min-h-[900px] bg-[#05050f] font-sans text-white"
      style={{ fontFamily: "system-ui,sans-serif" }}
    >
      {/* Nav */}
      <nav className="flex items-center justify-between border-b border-white/5 px-10 py-5">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600">
            <Zap className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-bold tracking-tight">Nova</span>
        </div>
        <div className="hidden items-center gap-7 text-xs text-white/50 md:flex">
          <span>Features</span>
          <span>Pricing</span>
          <span>Docs</span>
          <span>Blog</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-xs text-white/60 transition-colors hover:text-white">
            Sign in
          </button>
          <button className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-4 py-1.5 text-xs font-medium text-white">
            Get started →
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative flex flex-col items-center overflow-hidden px-8 pb-16 pt-24 text-center">
        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="relative z-10">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-3 py-1 text-xs text-violet-300">
            <Sparkles className="h-3 w-3" /> Introducing Nova 2.0 — Now with AI
          </div>
          <h1 className="mb-6 bg-gradient-to-b from-white to-white/50 bg-clip-text text-5xl font-extrabold leading-tight tracking-tight text-transparent md:text-6xl">
            Build faster.
            <br />
            Ship with confidence.
          </h1>
          <p className="mx-auto mb-10 max-w-md text-base text-white/40">
            The developer platform that scales from zero to millions. Automate your workflow and
            deploy anywhere.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/25 transition-all hover:shadow-violet-500/40">
              Start for free
            </button>
            <button className="flex items-center gap-2 rounded-full border border-white/10 px-7 py-2.5 text-sm text-white/60 transition-all hover:border-white/20">
              View demo <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
          {/* Social proof */}
          <div className="mt-10 flex items-center justify-center gap-2">
            <div className="flex -space-x-2">
              {["bg-violet-400", "bg-indigo-400", "bg-pink-400", "bg-sky-400"].map((c, i) => (
                <div key={i} className={`h-6 w-6 rounded-full border-2 border-[#05050f] ${c}`} />
              ))}
            </div>
            <p className="text-xs text-white/40">
              Trusted by <span className="font-medium text-white/70">50,000+</span> developers
            </p>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="px-10 py-16">
        <div className="mb-12 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-violet-400">
            Everything you need
          </p>
          <h2 className="text-3xl font-bold text-white">Built for modern teams</h2>
        </div>
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
          {[
            {
              icon: Zap,
              title: "Lightning Fast",
              desc: "Deploy in seconds with our global edge network across 35 regions.",
            },
            {
              icon: Shield,
              title: "Enterprise Security",
              desc: "SOC2 Type II, GDPR compliant. Zero-knowledge encryption.",
            },
            {
              icon: BarChart3,
              title: "Real-time Analytics",
              desc: "Monitor every request, latency, and error in a beautiful dashboard.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="rounded-2xl border border-white/5 bg-white/[0.03] p-6 transition-all hover:border-violet-500/30"
            >
              <div className="mb-4 flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10">
                <Icon className="h-4.5 w-4.5 text-violet-400" />
              </div>
              <h3 className="mb-2 text-sm font-semibold text-white">{title}</h3>
              <p className="text-xs leading-relaxed text-white/40">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="border-t border-white/5 px-10 py-16">
        <div className="mb-12 text-center">
          <h2 className="mb-3 text-3xl font-bold text-white">Simple pricing</h2>
          <p className="text-sm text-white/40">No surprises. Cancel anytime.</p>
        </div>
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
          {[
            {
              name: "Starter",
              price: "$0",
              period: "/mo",
              features: ["5 projects", "10GB bandwidth", "Community support"],
              highlighted: false,
            },
            {
              name: "Pro",
              price: "$29",
              period: "/mo",
              features: ["Unlimited projects", "500GB bandwidth", "Priority support", "Analytics"],
              highlighted: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              period: "",
              features: ["Custom limits", "Dedicated infra", "SLA guarantee", "SSO/SAML"],
              highlighted: false,
            },
          ].map(({ name, price, period, features, highlighted }) => (
            <div
              key={name}
              className={`rounded-2xl border p-6 ${highlighted ? "border-violet-500/50 bg-violet-500/10" : "border-white/5 bg-white/[0.02]"}`}
            >
              <p className="mb-1 text-xs text-white/50">{name}</p>
              <div className="mb-5 flex items-baseline gap-1">
                <span className="text-3xl font-extrabold text-white">{price}</span>
                <span className="text-xs text-white/30">{period}</span>
              </div>
              <ul className="mb-6 space-y-2">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-white/60">
                    <Check className="h-3.5 w-3.5 shrink-0 text-violet-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <button
                className={`w-full rounded-xl py-2 text-sm font-medium transition-all ${highlighted ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white shadow-lg shadow-violet-500/25" : "border border-white/10 text-white/60 hover:border-white/20"}`}
              >
                {highlighted ? "Get started" : "Choose plan"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ─── Zenith: Minimal Portfolio ────────────────────────────────────────────────
export function ZenithPreview() {
  return (
    <div
      className="min-h-[900px] bg-stone-50 font-sans text-stone-900"
      style={{ fontFamily: "system-ui,sans-serif" }}
    >
      {/* Nav */}
      <nav className="flex items-center justify-between border-b border-stone-100 px-10 py-6">
        <span className="text-sm font-bold tracking-tighter">ZENITH STUDIO</span>
        <div className="hidden items-center gap-8 text-xs text-stone-500 md:flex">
          <span>Work</span>
          <span>About</span>
          <span>Services</span>
          <span>Journal</span>
        </div>
        <button className="rounded-full bg-stone-900 px-5 py-2 text-xs text-white">
          Let's talk
        </button>
      </nav>

      {/* Hero */}
      <div className="px-10 py-24">
        <div className="max-w-5xl">
          <p className="mb-6 text-xs uppercase tracking-widest text-stone-400">
            Design & Development Studio
          </p>
          <h1 className="mb-8 text-5xl font-black leading-none tracking-tight text-stone-900 md:text-6xl">
            We craft digital
            <br />
            <span className="font-light italic text-stone-400">experiences</span>
            <br />
            that matter.
          </h1>
          <div className="mt-12 flex items-center gap-8">
            <button className="flex items-center gap-2 rounded-full bg-stone-900 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-stone-800">
              View our work <ArrowRight className="h-4 w-4" />
            </button>
            <span className="text-xs text-stone-400">Scroll to explore ↓</span>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-8 border-y border-stone-100 px-10 py-12">
        {[
          ["150+", "Projects delivered"],
          ["8", "Years of craft"],
          ["40+", "Happy clients"],
          ["3", "Design awards"],
        ].map(([n, l]) => (
          <div key={l}>
            <p className="text-3xl font-extrabold tracking-tight text-stone-900">{n}</p>
            <p className="mt-1 text-xs text-stone-400">{l}</p>
          </div>
        ))}
      </div>

      {/* Services */}
      <div className="px-10 py-20">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <p className="mb-2 text-xs uppercase tracking-widest text-stone-400">What we do</p>
            <h2 className="text-3xl font-bold">Our services</h2>
          </div>
          <button className="text-xs text-stone-400 transition-colors hover:text-stone-900">
            See all →
          </button>
        </div>
        <div className="divide-y divide-stone-100">
          {[
            ["01", "Brand Identity", "Strategy, visual identity, logo design, brand guidelines"],
            ["02", "Web Design", "UI/UX design, prototyping, design systems, Figma"],
            ["03", "Development", "Next.js, React, TypeScript, animations, CMS integration"],
            ["04", "Motion Design", "Brand films, product animations, social content"],
          ].map(([num, title, desc]) => (
            <div key={num} className="group flex cursor-pointer items-center justify-between py-6">
              <div className="flex items-center gap-8">
                <span className="w-6 text-xs text-stone-300">{num}</span>
                <div>
                  <p className="text-sm font-semibold transition-colors group-hover:text-stone-600">
                    {title}
                  </p>
                  <p className="mt-0.5 text-xs text-stone-400">{desc}</p>
                </div>
              </div>
              <ChevronRight className="h-4 w-4 text-stone-300 transition-all group-hover:translate-x-1 group-hover:text-stone-600" />
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-10 mb-20 rounded-3xl bg-stone-900 p-16 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">Ready to start a project?</h2>
        <p className="mb-8 text-sm text-stone-400">We'd love to hear about your vision.</p>
        <button className="rounded-full bg-white px-8 py-3 text-sm font-semibold text-stone-900 transition-colors hover:bg-stone-100">
          Get in touch
        </button>
      </div>
    </div>
  )
}

// ─── Pulse: Bold Startup ──────────────────────────────────────────────────────
export function PulsePreview() {
  return (
    <div
      className="min-h-[900px] font-sans"
      style={{ fontFamily: "system-ui,sans-serif", background: "#ff4500" }}
    >
      {/* Nav */}
      <nav className="flex items-center justify-between px-10 py-5">
        <span className="text-sm font-black tracking-tighter text-white">PULSE</span>
        <div className="hidden items-center gap-7 text-xs text-white/70 md:flex">
          <span>Product</span>
          <span>Story</span>
          <span>Pricing</span>
        </div>
        <button className="rounded-full bg-white px-5 py-2 text-xs font-bold text-[#ff4500]">
          Sign up free
        </button>
      </nav>

      {/* Hero */}
      <div className="px-10 py-20 text-white">
        <div className="max-w-3xl">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-medium backdrop-blur-sm">
            <span className="h-2 w-2 animate-pulse rounded-full bg-white" />
            Now in public beta
          </div>
          <h1 className="mb-8 text-6xl font-black leading-none tracking-tight md:text-7xl">
            Move
            <br />
            10×
            <br />
            faster.
          </h1>
          <p className="mb-10 max-w-sm text-base text-white/70">
            The productivity platform that eliminates busywork and keeps your team in flow state.
          </p>
          <div className="flex gap-3">
            <button className="rounded-2xl bg-white px-8 py-3 text-sm font-black text-[#ff4500] transition-colors hover:bg-orange-50">
              Start free trial
            </button>
            <button className="rounded-2xl border-2 border-white/30 px-8 py-3 text-sm font-semibold text-white transition-colors hover:border-white/60">
              Watch demo
            </button>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="grid grid-cols-4 gap-4 bg-[#cc3700] px-10 py-8">
        {[
          ["98%", "User satisfaction"],
          ["3.2M", "Tasks completed"],
          ["500+", "Teams worldwide"],
          ["4.9★", "App Store rating"],
        ].map(([n, l]) => (
          <div key={l}>
            <p className="text-2xl font-black text-white">{n}</p>
            <p className="mt-0.5 text-xs text-white/60">{l}</p>
          </div>
        ))}
      </div>

      {/* Features */}
      <div className="bg-white px-10 py-20">
        <div className="mb-14 text-center">
          <h2 className="mb-3 text-4xl font-black text-gray-900">Everything in one place</h2>
          <p className="text-sm text-gray-500">
            Stop switching between 12 apps. Pulse does it all.
          </p>
        </div>
        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {[
            {
              title: "Smart Tasks",
              desc: "AI-powered prioritization that adapts to your work style",
              emoji: "✨",
            },
            {
              title: "Unified Inbox",
              desc: "One place for all messages, comments, and updates",
              emoji: "📬",
            },
            {
              title: "Time Tracking",
              desc: "Know exactly where your hours go. Block by block.",
              emoji: "⏱️",
            },
            {
              title: "Team Dashboards",
              desc: "Real-time visibility into what everyone's working on",
              emoji: "📊",
            },
          ].map(({ title, desc, emoji }) => (
            <div
              key={title}
              className="rounded-2xl border border-gray-100 bg-gray-50 p-6 transition-colors hover:border-orange-200"
            >
              <div className="mb-3 text-2xl">{emoji}</div>
              <h3 className="mb-2 text-sm font-bold text-gray-900">{title}</h3>
              <p className="text-xs leading-relaxed text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="bg-gray-900 px-10 py-20 text-center text-white">
        <h2 className="mb-4 text-4xl font-black">Start for free today.</h2>
        <p className="mb-8 text-sm text-gray-400">No credit card. No setup fees. Just results.</p>
        <button className="rounded-2xl bg-[#ff4500] px-10 py-4 text-sm font-black text-white transition-colors hover:bg-[#e63e00]">
          Get Pulse free →
        </button>
      </div>
    </div>
  )
}

// ─── Orbit: Analytics SaaS ───────────────────────────────────────────────────
export function OrbitPreview() {
  return (
    <div
      className="min-h-[900px] bg-slate-900 font-sans text-white"
      style={{ fontFamily: "system-ui,sans-serif" }}
    >
      {/* Nav */}
      <nav className="flex items-center justify-between border-b border-slate-800 px-10 py-5">
        <div className="flex items-center gap-2">
          <div className="flex h-6 w-6 items-center justify-center rounded bg-sky-500">
            <BarChart3 className="h-3.5 w-3.5 text-white" />
          </div>
          <span className="text-sm font-bold">Orbit</span>
        </div>
        <div className="hidden items-center gap-6 text-xs text-slate-400 md:flex">
          <span>Product</span>
          <span>Integrations</span>
          <span>Enterprise</span>
          <span>Pricing</span>
          <span>Docs</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-xs text-slate-400">Log in</button>
          <button className="rounded-lg bg-sky-500 px-4 py-1.5 text-xs font-medium text-white transition-colors hover:bg-sky-400">
            Start free trial
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="px-10 py-20 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/10 px-3 py-1 text-xs text-sky-400">
          <Star className="h-3 w-3" /> Rated #1 Analytics Platform 2024
        </div>
        <h1 className="mb-6 text-5xl font-extrabold tracking-tight">
          Analytics that
          <br />
          <span className="text-sky-400">actually make sense</span>
        </h1>
        <p className="mx-auto mb-10 max-w-lg text-sm text-slate-400">
          Orbit turns complex data into clear decisions. Connect any data source and get actionable
          insights in minutes, not months.
        </p>
        <div className="flex items-center justify-center gap-3">
          <button className="rounded-lg bg-sky-500 px-7 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-400">
            Start free — no card needed
          </button>
          <button className="rounded-lg border border-slate-700 px-7 py-2.5 text-sm text-slate-400 transition-colors hover:border-slate-600">
            Book a demo
          </button>
        </div>
      </div>

      {/* Mock dashboard */}
      <div className="mx-10 mb-16 overflow-hidden rounded-2xl border border-slate-700/50 bg-slate-800/50 p-4">
        <div className="mb-4 flex items-center gap-1.5">
          <div className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-yellow-400/70" />
          <div className="h-2.5 w-2.5 rounded-full bg-green-400/70" />
          <div className="mx-4 flex h-4 flex-1 items-center rounded bg-slate-700 px-2 text-[9px] text-slate-500">
            app.orbit.io/dashboard
          </div>
        </div>
        <div className="mb-4 grid grid-cols-4 gap-3">
          {[
            ["$124K", "Revenue", "↑ 12%", "text-emerald-400"],
            ["8.2K", "Users", "↑ 34%", "text-emerald-400"],
            ["94ms", "Latency", "↓ 8ms", "text-emerald-400"],
            ["2.1%", "Churn", "↓ 0.3%", "text-emerald-400"],
          ].map(([v, l, d, c]) => (
            <div key={l} className="rounded-xl bg-slate-900 p-3">
              <p className="text-xs text-slate-500">{l}</p>
              <p className="text-lg font-bold text-white">{v}</p>
              <p className={`text-[10px] ${c}`}>{d} this month</p>
            </div>
          ))}
        </div>
        <div className="flex h-28 items-end gap-1 rounded-xl bg-slate-900 p-4">
          {[35, 50, 40, 70, 55, 85, 60, 90, 72, 88, 95, 80].map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-sky-500/70 transition-all hover:bg-sky-400"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
      </div>

      {/* Integrations */}
      <div className="border-t border-slate-800 px-10 py-12 text-center">
        <p className="mb-6 text-xs text-slate-500">Connects with your entire stack</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {[
            "Stripe",
            "Postgres",
            "Salesforce",
            "Slack",
            "BigQuery",
            "Snowflake",
            "Shopify",
            "HubSpot",
          ].map((n) => (
            <div
              key={n}
              className="rounded-full border border-slate-700 px-4 py-2 text-xs text-slate-400"
            >
              {n}
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div className="px-10 py-16">
        <h2 className="mb-12 text-center text-3xl font-bold">Transparent pricing</h2>
        <div className="mx-auto grid max-w-4xl gap-4 md:grid-cols-3">
          {[
            {
              name: "Starter",
              price: "$0",
              f: ["Up to 10K events/mo", "2 team members", "7-day history"],
            },
            {
              name: "Growth",
              price: "$79",
              f: ["Up to 1M events/mo", "10 team members", "1-year history", "Custom dashboards"],
              highlight: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              f: ["Unlimited events", "Unlimited seats", "Custom SLA", "HIPAA/SOC2"],
            },
          ].map(({ name, price, f, highlight }) => (
            <div
              key={name}
              className={`rounded-2xl border p-6 ${highlight ? "border-sky-500/50 bg-sky-500/5" : "border-slate-700 bg-slate-800/30"}`}
            >
              <p className="mb-1 text-xs text-slate-400">{name}</p>
              <p className="mb-5 text-3xl font-extrabold text-white">
                {price}
                <span className="text-sm font-normal text-slate-500">
                  {price !== "Custom" && "/mo"}
                </span>
              </p>
              <ul className="space-y-2">
                {f.map((x) => (
                  <li key={x} className="flex items-center gap-2 text-xs text-slate-400">
                    <Check className="h-3 w-3 shrink-0 text-sky-400" />
                    {x}
                  </li>
                ))}
              </ul>
              <button
                className={`mt-6 w-full rounded-lg py-2 text-xs font-semibold ${highlight ? "bg-sky-500 text-white hover:bg-sky-400" : "border border-slate-600 text-slate-300 hover:border-slate-400"} transition-colors`}
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

// ─── Lumina: Creative Agency ──────────────────────────────────────────────────
export function LuminaPreview() {
  return (
    <div
      className="min-h-[900px] bg-zinc-950 font-sans text-white"
      style={{ fontFamily: "system-ui,sans-serif" }}
    >
      {/* Nav */}
      <nav className="flex items-center justify-between px-10 py-7">
        <span className="text-sm font-black uppercase tracking-[0.2em] text-zinc-100">Lumina</span>
        <button className="rounded-full border border-zinc-700 px-4 py-2 text-xs text-zinc-400 transition-colors hover:border-zinc-500">
          <Menu className="h-3.5 w-3.5" />
        </button>
      </nav>

      {/* Hero */}
      <div className="px-10 pb-24 pt-12">
        <div className="max-w-5xl">
          <p className="mb-12 text-xs uppercase tracking-widest text-zinc-500">
            Creative direction — 2024
          </p>
          <h1 className="mb-4 text-7xl font-black leading-none tracking-tighter text-zinc-100 md:text-8xl">
            We tell
          </h1>
          <h1 className="text-7xl font-black leading-none tracking-tighter md:text-8xl">
            <span className="text-transparent" style={{ WebkitTextStroke: "2px #fbbf24" }}>
              stories
            </span>
            <span className="text-zinc-100"> that</span>
          </h1>
          <h1 className="mb-12 text-7xl font-black leading-none tracking-tighter text-zinc-100 md:text-8xl">
            move people.
          </h1>
          <div className="flex items-center justify-between">
            <p className="max-w-xs text-sm text-zinc-500">
              Award-winning creative agency. Brand, Film, Digital. We make work that matters.
            </p>
            <button className="group flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-400 transition-colors group-hover:bg-amber-300">
                <ArrowRight className="h-5 w-5 text-zinc-950" />
              </span>
              <span className="text-xs text-zinc-400">Our work</span>
            </button>
          </div>
        </div>
      </div>

      {/* Portfolio grid */}
      <div className="px-10 pb-20">
        <div className="grid grid-cols-3 gap-3">
          {[
            {
              label: "Brand Identity",
              client: "TechCorp",
              bg: "bg-amber-400/10 border-amber-400/20",
            },
            { label: "Film & Motion", client: "NovaCo", bg: "bg-zinc-800/80 border-zinc-700" },
            {
              label: "Digital Campaign",
              client: "Luna Brands",
              bg: "bg-violet-900/30 border-violet-700/30",
            },
            {
              label: "Web Experience",
              client: "Apex Finance",
              bg: "bg-emerald-900/20 border-emerald-700/20",
            },
            {
              label: "Packaging Design",
              client: "Artisan Co.",
              bg: "bg-rose-900/20 border-rose-700/20",
            },
            {
              label: "Visual Identity",
              client: "Strive AI",
              bg: "bg-sky-900/20 border-sky-700/20",
            },
          ].map(({ label, client, bg }) => (
            <div
              key={client}
              className={`aspect-[4/3] rounded-2xl border ${bg} flex flex-col justify-between p-5`}
            >
              <div className="flex items-start justify-between">
                <span className="text-[10px] uppercase tracking-widest text-white/40">{label}</span>
                <ArrowRight className="h-3 w-3 text-white/20" />
              </div>
              <p className="text-sm font-semibold text-white/70">{client}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Awards */}
      <div className="border-t border-zinc-800 px-10 py-12">
        <div className="flex items-center justify-between">
          <div>
            <p className="mb-2 text-xs uppercase tracking-widest text-zinc-500">Recognition</p>
            <h2 className="text-2xl font-bold">Award-winning work</h2>
          </div>
          <div className="flex gap-6">
            {[
              ["12×", "Cannes Lions"],
              ["8×", "D&AD"],
              ["20+", "Awwwards"],
            ].map(([n, l]) => (
              <div key={l} className="text-right">
                <p className="text-xl font-black text-amber-400">{n}</p>
                <p className="text-[10px] text-zinc-500">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Apex: Enterprise ────────────────────────────────────────────────────────
export function ApexPreview() {
  return (
    <div
      className="min-h-[900px] bg-white font-sans text-slate-900"
      style={{ fontFamily: "system-ui,sans-serif" }}
    >
      {/* Nav */}
      <nav className="flex items-center justify-between border-b border-slate-100 px-10 py-5">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded bg-slate-900">
            <Globe className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-bold tracking-tight">Apex</span>
        </div>
        <div className="hidden items-center gap-7 text-xs text-slate-500 md:flex">
          <span>Platform</span>
          <span>Solutions</span>
          <span>Enterprise</span>
          <span>Resources</span>
          <span>Pricing</span>
        </div>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-xs text-slate-600">Sign in</button>
          <button className="rounded-lg bg-slate-900 px-5 py-2 text-xs font-medium text-white">
            Request demo
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="max-w-5xl px-10 py-24">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3 py-1 text-xs text-blue-600">
          <Lock className="h-3 w-3" /> SOC2 Type II · GDPR · HIPAA Compliant
        </div>
        <h1 className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-slate-900">
          The enterprise platform
          <br />
          <span className="text-blue-600">your team can trust</span>
        </h1>
        <p className="mb-10 max-w-xl text-sm text-slate-500">
          Apex provides enterprise-grade infrastructure for mission-critical operations. 99.99%
          uptime, military-grade security, and 24/7 expert support.
        </p>
        <div className="flex gap-3">
          <button className="rounded-lg bg-blue-600 px-7 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700">
            Request a demo
          </button>
          <button className="rounded-lg border border-slate-200 px-7 py-2.5 text-sm text-slate-700 transition-colors hover:border-slate-300">
            Talk to sales
          </button>
        </div>
      </div>

      {/* Logos */}
      <div className="border-y border-slate-100 bg-slate-50/50 px-10 py-10">
        <p className="mb-6 text-center text-xs text-slate-400">Trusted by industry leaders</p>
        <div className="flex items-center justify-center gap-10">
          {["Fortune 500 Co.", "Global Bank AG", "HealthNet Inc.", "LogiCorp", "TechGroup"].map(
            (n) => (
              <span
                key={n}
                className="text-xs font-semibold uppercase tracking-wide text-slate-300"
              >
                {n}
              </span>
            ),
          )}
        </div>
      </div>

      {/* Features */}
      <div className="px-10 py-20">
        <div className="mb-14 text-center">
          <h2 className="mb-3 text-3xl font-bold">Built for enterprise at scale</h2>
          <p className="text-sm text-slate-500">
            Every feature enterprise teams need, none of the compromises.
          </p>
        </div>
        <div className="mx-auto grid max-w-5xl gap-6 md:grid-cols-3">
          {[
            {
              icon: Shield,
              title: "Zero-trust security",
              desc: "End-to-end encryption, SSO, SAML, and advanced audit logs.",
            },
            {
              icon: Globe,
              title: "Global infrastructure",
              desc: "99.99% SLA with multi-region redundancy across 30+ data centers.",
            },
            {
              icon: BarChart3,
              title: "Enterprise analytics",
              desc: "Real-time dashboards, custom reports, and data export.",
            },
            {
              icon: Lock,
              title: "Compliance-ready",
              desc: "SOC2 II, HIPAA, GDPR, and ISO 27001 out of the box.",
            },
            {
              icon: Zap,
              title: "Instant deployment",
              desc: "Deploy in under an hour with our enterprise onboarding team.",
            },
            {
              icon: Star,
              title: "White-glove support",
              desc: "Dedicated CSM, 24/7 support, and 15-minute SLA response.",
            },
          ].map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group flex gap-4 rounded-xl border border-slate-100 p-5 transition-all hover:border-blue-100 hover:bg-blue-50/30"
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-50 transition-colors group-hover:bg-blue-100">
                <Icon className="h-4 w-4 text-blue-600" />
              </div>
              <div>
                <h3 className="mb-1 text-sm font-semibold text-slate-900">{title}</h3>
                <p className="text-xs leading-relaxed text-slate-500">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-10 mb-20 rounded-3xl bg-gradient-to-r from-slate-900 to-blue-900 p-16 text-center text-white">
        <h2 className="mb-4 text-3xl font-bold">Ready for enterprise scale?</h2>
        <p className="mb-8 text-sm text-slate-400">Join 500+ enterprise teams running on Apex.</p>
        <div className="flex items-center justify-center gap-3">
          <button className="rounded-lg bg-white px-8 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-50">
            Request demo
          </button>
          <button className="rounded-lg border border-white/20 px-8 py-3 text-sm text-white transition-colors hover:border-white/40">
            Contact sales
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Aura: Product Launch ─────────────────────────────────────────────────────
export function AuraPreview() {
  return (
    <div
      className="min-h-[900px] font-sans"
      style={{
        fontFamily: "system-ui,sans-serif",
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
      }}
    >
      {/* Nav */}
      <nav className="flex items-center justify-between px-10 py-6">
        <span className="text-sm font-black tracking-tight text-white">AURA</span>
        <div className="hidden items-center gap-6 text-xs text-white/50 md:flex">
          <span>Features</span>
          <span>Gallery</span>
          <span>Reviews</span>
        </div>
        <button className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs text-white backdrop-blur-sm transition-colors hover:bg-white/20">
          Pre-order
        </button>
      </nav>

      {/* Hero */}
      <div className="relative px-10 py-16 text-center">
        <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
          <div className="h-72 w-72 rounded-full bg-purple-600/30 blur-[80px]" />
        </div>
        <div className="relative z-10">
          <p className="mb-4 text-xs uppercase tracking-widest text-purple-300/70">Introducing</p>
          <h1 className="mb-2 text-7xl font-black tracking-tight text-white">Aura Pro</h1>
          <p
            className="mb-8 text-7xl font-black"
            style={{
              WebkitTextFillColor: "transparent",
              WebkitTextStroke: "1px rgba(255,255,255,0.3)",
            }}
          >
            Collection
          </p>
          <p className="mx-auto mb-10 max-w-md text-sm text-white/50">
            Designed for those who demand more. Precision-crafted with 48 hours battery, adaptive
            display, and AI-powered wellness features.
          </p>
          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button className="rounded-full bg-white px-10 py-3 text-sm font-bold text-slate-900 transition-colors hover:bg-gray-100">
              Pre-order now · $299
            </button>
            <button className="rounded-full border border-white/15 px-8 py-3 text-sm text-white/60 transition-colors hover:border-white/30">
              Learn more
            </button>
          </div>
        </div>
      </div>

      {/* Product showcase */}
      <div className="px-10 py-12">
        <div className="mx-auto grid max-w-4xl grid-cols-3 gap-4">
          {[
            { bg: "bg-purple-900/30 border-purple-700/20", label: "Colors", value: "12 finishes" },
            { bg: "bg-indigo-900/30 border-indigo-700/20", label: "Battery", value: "48 hours" },
            { bg: "bg-blue-900/30 border-blue-700/20", label: "Display", value: "Always-on" },
          ].map(({ bg, label, value }) => (
            <div key={label} className={`rounded-3xl border ${bg} p-8 text-center`}>
              <p className="mb-2 text-xs uppercase tracking-widest text-white/40">{label}</p>
              <p className="text-2xl font-black text-white">{value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="px-10 py-16">
        <h2 className="mb-10 text-center text-2xl font-bold text-white">Loved by reviewers</h2>
        <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-2">
          {[
            {
              q: '"Aura Pro is the best wearable I\'ve ever worn. Period."',
              by: "TechReview Global",
            },
            { q: '"The battery life alone makes this a must-buy."', by: "Wearable Weekly" },
          ].map(({ q, by }) => (
            <div key={by} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="mb-3 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mb-3 text-sm italic text-white/70">{q}</p>
              <p className="text-xs font-medium text-white/30">{by}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="px-10 pb-20 text-center">
        <button className="rounded-full bg-gradient-to-r from-purple-500 to-indigo-500 px-12 py-4 text-sm font-bold text-white shadow-2xl shadow-purple-500/30 transition-all hover:shadow-purple-500/50">
          Reserve yours now →
        </button>
        <p className="mt-4 text-xs text-white/30">
          Ships worldwide · Free returns · 2-year warranty
        </p>
      </div>
    </div>
  )
}
