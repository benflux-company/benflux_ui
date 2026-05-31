"use client"

import React from "react"

import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  Check,
  ChevronRight,
  Circle,
  Cpu,
  Database,
  Globe,
  Layout,
  Lock,
  Menu,
  MessageSquare,
  Search,
  Settings,
  Shield,
  Sparkles,
  Star,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react"

// ─── Nova: Dark SaaS — Linear / Vercel aesthetic ─────────────────────────────
export function NovaPreview() {
  const [activeTheme, setActiveTheme] = React.useState<"system" | "light" | "dark">("dark")
  const [loginOpen, setLoginOpen] = React.useState(false)
  const [signupOpen, setSignupOpen] = React.useState(false)

  const isDark = activeTheme === "dark" || activeTheme === "system"
  const bg = isDark ? "#07070d" : "#f8fafc"
  const text = isDark ? "white" : "#0f172a"

  return (
    <div
      className="relative min-h-[1400px] font-sans"
      style={{ fontFamily: "system-ui,sans-serif", background: bg, color: text }}
    >
      {/* Login Modal */}
      {loginOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setLoginOpen(false)}
        >
          <div
            className="w-full max-w-sm overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e0e17] p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600">
                <Zap className="h-3.5 w-3.5 text-white" />
              </div>
              <span className="font-bold text-white">Nova</span>
            </div>
            <h2 className="mb-1 text-xl font-bold text-white">Welcome back</h2>
            <p className="mb-6 text-sm text-white/40">Sign in to your Nova account</p>
            <div className="mb-4">
              <label className="mb-1.5 block text-xs font-medium text-white/50">Email</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30"
              />
            </div>
            <div className="mb-6">
              <div className="mb-1.5 flex items-center justify-between">
                <label className="text-xs font-medium text-white/50">Password</label>
                <button className="text-xs text-blue-400 hover:text-blue-300">
                  Forgot password?
                </button>
              </div>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30"
              />
            </div>
            <button className="mb-4 w-full rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-500">
              Sign in
            </button>
            <div className="mb-4 flex items-center gap-3">
              <div className="h-px flex-1 bg-white/[0.06]" />
              <span className="text-[11px] text-white/25">or continue with</span>
              <div className="h-px flex-1 bg-white/[0.06]" />
            </div>
            <div className="grid grid-cols-2 gap-2">
              {["GitHub", "Google"].map((p) => (
                <button
                  key={p}
                  className="rounded-xl border border-white/[0.08] bg-white/[0.03] py-2.5 text-xs font-medium text-white/60 hover:bg-white/[0.06]"
                >
                  {p}
                </button>
              ))}
            </div>
            <p className="mt-5 text-center text-xs text-white/30">
              No account?{" "}
              <button
                className="text-blue-400 hover:text-blue-300"
                onClick={() => {
                  setLoginOpen(false)
                  setSignupOpen(true)
                }}
              >
                Sign up free
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {signupOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setSignupOpen(false)}
        >
          <div
            className="w-full max-w-sm overflow-hidden rounded-2xl border border-white/[0.08] bg-[#0e0e17] p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-6 flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600">
                <Zap className="h-3.5 w-3.5 text-white" />
              </div>
              <span className="font-bold text-white">Nova</span>
            </div>
            <h2 className="mb-1 text-xl font-bold text-white">Create your account</h2>
            <p className="mb-6 text-sm text-white/40">Start shipping faster today — free forever</p>
            <div className="mb-4">
              <label className="mb-1.5 block text-xs font-medium text-white/50">Full name</label>
              <input
                type="text"
                placeholder="Jane Smith"
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30"
              />
            </div>
            <div className="mb-4">
              <label className="mb-1.5 block text-xs font-medium text-white/50">Work email</label>
              <input
                type="email"
                placeholder="you@company.com"
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30"
              />
            </div>
            <div className="mb-6">
              <label className="mb-1.5 block text-xs font-medium text-white/50">Password</label>
              <input
                type="password"
                placeholder="Min. 8 characters"
                className="w-full rounded-xl border border-white/[0.08] bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-white/20 outline-none focus:border-blue-500/50 focus:ring-1 focus:ring-blue-500/30"
              />
            </div>
            <button className="mb-4 w-full rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-500">
              Create account
            </button>
            <p className="text-center text-[11px] text-white/20">
              By signing up you agree to our{" "}
              <button className="text-white/40 hover:text-white/60">Terms</button> and{" "}
              <button className="text-white/40 hover:text-white/60">Privacy Policy</button>
            </p>
            <p className="mt-4 text-center text-xs text-white/30">
              Already have an account?{" "}
              <button
                className="text-blue-400 hover:text-blue-300"
                onClick={() => {
                  setSignupOpen(false)
                  setLoginOpen(true)
                }}
              >
                Sign in
              </button>
            </p>
          </div>
        </div>
      )}

      {/* Nav */}
      <nav
        className="sticky top-0 z-50 border-b border-white/[0.05] backdrop-blur-xl"
        style={{ background: isDark ? "rgba(7,7,13,0.9)" : "rgba(248,250,252,0.9)" }}
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-4">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600">
                <Zap className="h-3.5 w-3.5 text-white" />
              </div>
              <span className="text-sm font-bold tracking-tight" style={{ color: text }}>
                Nova
              </span>
            </div>
            <div className="hidden items-center gap-0.5 md:flex">
              {[
                { label: "Features", href: "#nova-features" },
                { label: "Pricing", href: "#nova-pricing" },
                { label: "Testimonials", href: "#nova-testimonials" },
                { label: "Docs", href: "#" },
                { label: "Blog", href: "#" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="rounded-md px-3 py-1.5 text-[13px] transition-colors hover:bg-white/[0.06]"
                  style={{ color: isDark ? "rgba(255,255,255,0.45)" : "rgba(15,23,42,0.55)" }}
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            {/* Theme toggle */}
            <div
              className="flex items-center rounded-lg border border-white/[0.08] p-0.5"
              style={{ background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.04)" }}
            >
              {(["System", "Light", "Dark"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTheme(t.toLowerCase() as "system" | "light" | "dark")}
                  className={`rounded-md px-2.5 py-1 text-[10px] font-medium transition-all ${activeTheme === t.toLowerCase() ? "bg-blue-600 text-white shadow-sm" : ""}`}
                  style={{
                    color:
                      activeTheme === t.toLowerCase()
                        ? "white"
                        : isDark
                          ? "rgba(255,255,255,0.35)"
                          : "rgba(15,23,42,0.45)",
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
            <button
              onClick={() => setLoginOpen(true)}
              className="px-3 py-1.5 text-[13px] transition-colors"
              style={{ color: isDark ? "rgba(255,255,255,0.4)" : "rgba(15,23,42,0.5)" }}
            >
              Log in
            </button>
            <button
              onClick={() => setSignupOpen(true)}
              className="rounded-lg bg-blue-600 px-4 py-1.5 text-[13px] font-semibold text-white hover:bg-blue-500"
            >
              Get started
            </button>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative flex flex-col items-center overflow-hidden px-8 pb-24 pt-28 text-center">
        <div
          className="pointer-events-none absolute left-1/2 top-0 h-[500px] w-[800px] -translate-x-1/2 rounded-full blur-[120px]"
          style={{ background: "rgba(37,99,235,0.07)" }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(100,116,139,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(100,116,139,0.4) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative z-10 max-w-3xl">
          <div
            className="mb-8 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs"
            style={{
              borderColor: "rgba(255,255,255,0.08)",
              background: isDark ? "rgba(255,255,255,0.04)" : "rgba(37,99,235,0.06)",
              color: isDark ? "rgba(255,255,255,0.5)" : "rgba(37,99,235,0.8)",
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full bg-blue-400"
              style={{ boxShadow: "0 0 6px 2px rgba(96,165,250,0.6)" }}
            />
            Nova 3.0 — Distributed edge runtime is live
            <ChevronRight className="h-3 w-3 opacity-40" />
          </div>
          <h1
            className="mb-6 text-[64px] font-extrabold leading-[1.04] tracking-[-2px]"
            style={{ color: text }}
          >
            Ship faster.
            <br />
            <span className="text-blue-500">Scale further.</span>
          </h1>
          <p
            className="mx-auto mb-10 max-w-lg text-[16px] leading-relaxed"
            style={{ color: isDark ? "rgba(255,255,255,0.35)" : "rgba(15,23,42,0.5)" }}
          >
            Nova is the unified platform for modern engineering teams — instant deployments,
            distributed infra, and deep observability. Zero configuration, infinite scale.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={() => setSignupOpen(true)}
              className="group flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500"
            >
              Start for free{" "}
              <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
            </button>
            <a
              href="#nova-features"
              className="flex items-center gap-2 rounded-xl border px-7 py-3 text-sm transition-colors"
              style={{
                borderColor: "rgba(255,255,255,0.08)",
                background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.03)",
                color: isDark ? "rgba(255,255,255,0.5)" : "rgba(15,23,42,0.5)",
              }}
            >
              View documentation
            </a>
          </div>
          <div className="mt-14 flex flex-col items-center gap-3">
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[
                  "bg-blue-400",
                  "bg-sky-400",
                  "bg-pink-400",
                  "bg-amber-400",
                  "bg-emerald-400",
                  "bg-rose-400",
                ].map((c, i) => (
                  <div
                    key={i}
                    className={`h-6 w-6 rounded-full border-2 ${c}`}
                    style={{ borderColor: bg }}
                  />
                ))}
              </div>
              <p
                className="text-xs"
                style={{ color: isDark ? "rgba(255,255,255,0.3)" : "rgba(15,23,42,0.4)" }}
              >
                Trusted by{" "}
                <span
                  className="font-semibold"
                  style={{ color: isDark ? "rgba(255,255,255,0.6)" : "rgba(15,23,42,0.7)" }}
                >
                  18,000+
                </span>{" "}
                engineering teams
              </p>
            </div>
            <div className="flex items-center gap-4">
              {["SOC 2 Type II", "GDPR", "ISO 27001"].map((b) => (
                <span
                  key={b}
                  className="flex items-center gap-1 text-[10px] font-medium"
                  style={{ color: isDark ? "rgba(255,255,255,0.25)" : "rgba(15,23,42,0.35)" }}
                >
                  <Check className="h-2.5 w-2.5 text-emerald-500" /> {b}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Dashboard Mockup */}
      <div className="mx-auto mb-24 max-w-5xl px-8">
        <div className="overflow-hidden rounded-2xl border border-white/[0.07] shadow-[0_32px_64px_-16px_rgba(0,0,0,0.7)]">
          <div className="flex items-center gap-2 border-b border-white/[0.05] bg-[#0e0e17] px-4 py-3">
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#ffbc2e]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div className="mx-3 flex flex-1 items-center gap-2 rounded-md bg-white/[0.04] px-3 py-1">
              <Lock className="h-2.5 w-2.5 text-emerald-400" />
              <span className="text-[10px] text-white/20">nova.io/dashboard</span>
            </div>
            <Bell className="h-3.5 w-3.5 text-white/20" />
            <Settings className="h-3.5 w-3.5 text-white/20" />
          </div>
          <div className="flex bg-[#0b0b12]">
            <div className="w-44 shrink-0 border-r border-white/[0.04] px-3 py-5">
              <div className="mb-4 flex items-center gap-2 px-2">
                <div className="h-5 w-5 rounded-md bg-blue-600" />
                <span className="text-xs font-bold text-white">Acme Corp</span>
                <ChevronRight className="ml-auto h-3 w-3 rotate-90 text-white/20" />
              </div>
              <div className="mb-1 px-2 text-[9px] font-semibold uppercase tracking-widest text-white/20">
                Overview
              </div>
              {[
                { icon: Layout, label: "Dashboard", active: true },
                { icon: Activity, label: "Analytics", active: false },
                { icon: Users, label: "Team", active: false },
                { icon: Database, label: "Storage", active: false },
                { icon: Globe, label: "Domains", active: false },
              ].map(({ icon: Icon, label, active }) => (
                <button
                  key={label}
                  className={`mb-0.5 flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-left text-[11px] ${active ? "bg-blue-600/15 font-medium text-blue-400" : "text-white/35 hover:bg-white/[0.03]"}`}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  {label}
                </button>
              ))}
              <div className="mb-1 mt-4 px-2 text-[9px] font-semibold uppercase tracking-widest text-white/20">
                Settings
              </div>
              {[
                { icon: Shield, label: "Security" },
                { icon: Settings, label: "Preferences" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="mb-0.5 flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-left text-[11px] text-white/35 hover:bg-white/[0.03]"
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  {label}
                </button>
              ))}
            </div>
            <div className="flex-1 p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-white">Overview</h3>
                  <p className="text-[11px] text-white/30">Last 30 days · All regions</p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="rounded-lg border border-white/[0.07] bg-white/[0.03] px-3 py-1.5 text-[10px] text-white/40 hover:bg-white/[0.06]">
                    30 days
                  </button>
                  <button className="rounded-lg bg-blue-600 px-3 py-1.5 text-[10px] font-semibold text-white hover:bg-blue-500">
                    New deploy
                  </button>
                </div>
              </div>
              <div className="mb-5 grid grid-cols-4 gap-3">
                {[
                  { label: "MRR", val: "$2.4M", delta: "+18%" },
                  { label: "Active users", val: "14.2K", delta: "+31%" },
                  { label: "Uptime", val: "99.99%", delta: "30d avg" },
                  { label: "P95 latency", val: "42ms", delta: "−6ms" },
                ].map(({ label, val, delta }) => (
                  <div
                    key={label}
                    className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-4"
                  >
                    <p className="mb-1 text-[10px] text-white/25">{label}</p>
                    <p className="text-xl font-bold text-white">{val}</p>
                    <p className="mt-1 text-[10px] font-medium text-emerald-400">{delta}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                <div className="col-span-2 rounded-xl border border-white/[0.05] bg-white/[0.02] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-[11px] font-medium text-white/60">Revenue trend</p>
                    <div className="flex gap-1">
                      {["1w", "1m", "3m", "1y"].map((t, i) => (
                        <button
                          key={t}
                          className={`rounded px-2 py-0.5 text-[9px] ${i === 1 ? "bg-blue-600/20 text-blue-400" : "text-white/25 hover:text-white/50"}`}
                        >
                          {t}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="flex h-28 items-end gap-1">
                    {[30, 45, 38, 60, 52, 70, 55, 80, 68, 85, 90, 78, 88, 75, 94, 82, 96].map(
                      (h, i) => (
                        <div
                          key={i}
                          className="flex-1 rounded-sm bg-blue-600"
                          style={{ height: `${h}%`, opacity: i === 16 ? 1 : 0.25 + i * 0.042 }}
                        />
                      ),
                    )}
                  </div>
                  <div className="mt-2 flex justify-between">
                    {["Jan", "Apr", "Jul", "Oct", "Dec"].map((m) => (
                      <span key={m} className="text-[9px] text-white/20">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-4">
                  <p className="mb-3 text-[11px] font-medium text-white/60">Recent activity</p>
                  <div className="space-y-3">
                    {[
                      { msg: "Deploy #482 succeeded", time: "2m ago", c: "bg-emerald-400" },
                      { msg: "New user signup", time: "8m ago", c: "bg-blue-400" },
                      { msg: "Alert resolved", time: "15m ago", c: "bg-sky-400" },
                      { msg: "Config updated", time: "1h ago", c: "bg-amber-400" },
                    ].map(({ msg, time, c }, i) => (
                      <div key={i} className="flex items-start gap-2">
                        <div className={`mt-1 h-1.5 w-1.5 shrink-0 rounded-full ${c}`} />
                        <div>
                          <p className="text-[10px] text-white/50">{msg}</p>
                          <p className="text-[9px] text-white/20">{time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logos */}
      <div className="mx-auto max-w-6xl px-8 pb-20">
        <p
          className="mb-8 text-center text-xs font-semibold uppercase tracking-widest"
          style={{ color: isDark ? "rgba(255,255,255,0.18)" : "rgba(15,23,42,0.3)" }}
        >
          Trusted by world-class teams
        </p>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {["Stripe", "Notion", "Linear", "Vercel", "Loom", "Figma", "Prisma", "Supabase"].map(
            (name) => (
              <div
                key={name}
                className="flex h-9 items-center rounded-xl border px-5"
                style={{
                  borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.08)",
                  background: isDark ? "rgba(255,255,255,0.02)" : "rgba(15,23,42,0.02)",
                }}
              >
                <span
                  className="text-sm font-bold tracking-tight"
                  style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(15,23,42,0.25)" }}
                >
                  {name}
                </span>
              </div>
            ),
          )}
        </div>
      </div>

      {/* Features */}
      <div
        id="nova-features"
        className="mx-auto max-w-6xl border-t px-8 py-24"
        style={{ borderColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.06)" }}
      >
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
          Platform
        </p>
        <h2
          className="mb-4 text-center text-[40px] font-extrabold tracking-tight"
          style={{ color: text }}
        >
          Everything your team needs
        </h2>
        <p
          className="mx-auto mb-16 max-w-xl text-center text-[15px] leading-relaxed"
          style={{ color: isDark ? "rgba(255,255,255,0.3)" : "rgba(15,23,42,0.45)" }}
        >
          From first commit to global scale — Nova handles the infrastructure so you can focus on
          what matters.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Zap,
              title: "Instant deploys",
              desc: "Push to production in under 10 seconds with zero-downtime rollouts across 40 global edge nodes.",
              accent: "border-blue-500/20 bg-blue-500/[0.04]",
              ic: "text-blue-400",
            },
            {
              icon: Shield,
              title: "Zero-trust security",
              desc: "End-to-end encryption, automatic TLS, audit logs, and SSO/SAML included on every plan.",
              accent: "border-sky-500/20 bg-sky-500/[0.04]",
              ic: "text-sky-400",
            },
            {
              icon: BarChart3,
              title: "Deep observability",
              desc: "Real-time metrics, distributed tracing, and custom dashboards for every service.",
              accent: "border-emerald-500/20 bg-emerald-500/[0.04]",
              ic: "text-emerald-400",
            },
            {
              icon: Globe,
              title: "Global edge network",
              desc: "Deploy to 40+ regions instantly. Automatic failover and intelligent traffic routing.",
              accent: "border-amber-500/20 bg-amber-500/[0.04]",
              ic: "text-amber-400",
            },
            {
              icon: Database,
              title: "Managed databases",
              desc: "Postgres, Redis, and object storage with automatic backups and point-in-time recovery.",
              accent: "border-rose-500/20 bg-rose-500/[0.04]",
              ic: "text-rose-400",
            },
            {
              icon: MessageSquare,
              title: "24/7 expert support",
              desc: "Dedicated Slack channel, SLA guarantees, and a team of engineers ready to help.",
              accent: "border-purple-500/20 bg-purple-500/[0.04]",
              ic: "text-purple-400",
            },
          ].map(({ icon: Icon, title, desc, accent, ic }) => (
            <div key={title} className={`rounded-2xl border ${accent} p-7`}>
              <div className="mb-5 inline-flex rounded-xl border border-white/[0.06] bg-white/[0.04] p-3">
                <Icon className={`h-5 w-5 ${ic}`} />
              </div>
              <h3 className="mb-2 font-semibold" style={{ color: text }}>
                {title}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: isDark ? "rgba(255,255,255,0.35)" : "rgba(15,23,42,0.5)" }}
              >
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div
        id="nova-testimonials"
        className="mx-auto max-w-6xl border-t px-8 py-24"
        style={{ borderColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.06)" }}
      >
        <h2
          className="mb-14 text-center text-3xl font-extrabold tracking-tight"
          style={{ color: text }}
        >
          Loved by engineering teams
        </h2>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              quote:
                "Nova cut our deploy time from 12 minutes to 8 seconds. The single biggest leverage point we found this year.",
              name: "Sarah Chen",
              role: "CTO at Meridian",
              avatar: "bg-blue-400",
            },
            {
              quote:
                "The observability tooling alone is worth it. We caught a P0 before it hit users because of Nova real-time tracing.",
              name: "Marcus Webb",
              role: "Lead Engineer at Forma",
              avatar: "bg-sky-400",
            },
            {
              quote:
                "We moved our entire infra to Nova in a weekend. Zero downtime, zero drama. Genuinely cannot believe how smooth it was.",
              name: "Priya Nair",
              role: "Platform Lead at Lune",
              avatar: "bg-pink-400",
            },
          ].map(({ quote, name, role, avatar }) => (
            <div
              key={name}
              className="rounded-2xl border p-7"
              style={{
                borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.06)",
                background: isDark ? "rgba(255,255,255,0.02)" : "rgba(15,23,42,0.02)",
              }}
            >
              <div className="mb-4 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p
                className="mb-6 text-sm leading-relaxed"
                style={{ color: isDark ? "rgba(255,255,255,0.5)" : "rgba(15,23,42,0.55)" }}
              >
                &ldquo;{quote}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div
                  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${avatar} text-[11px] font-bold text-white`}
                >
                  {name[0]}
                </div>
                <div>
                  <p className="text-xs font-semibold" style={{ color: text }}>
                    {name}
                  </p>
                  <p
                    className="text-[11px]"
                    style={{ color: isDark ? "rgba(255,255,255,0.3)" : "rgba(15,23,42,0.4)" }}
                  >
                    {role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div
        id="nova-pricing"
        className="mx-auto max-w-6xl border-t px-8 py-24"
        style={{ borderColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.06)" }}
      >
        <p className="mb-3 text-center text-xs font-bold uppercase tracking-[0.2em] text-blue-500">
          Pricing
        </p>
        <h2
          className="mb-3 text-center text-[40px] font-extrabold tracking-tight"
          style={{ color: text }}
        >
          Simple, predictable pricing
        </h2>
        <p
          className="mb-14 text-center text-[15px]"
          style={{ color: isDark ? "rgba(255,255,255,0.3)" : "rgba(15,23,42,0.45)" }}
        >
          No hidden fees. No surprises. Cancel any time.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              n: "Hobby",
              p: "Free",
              ps: "",
              sub: "Perfect for side projects",
              f: [
                "3 projects",
                "1 GB storage",
                "Community support",
                "Basic analytics",
                "100K req/mo",
              ],
              hl: false,
              cta: "Start free",
            },
            {
              n: "Pro",
              p: "$29",
              ps: "/mo",
              sub: "For growing teams",
              f: [
                "Unlimited projects",
                "50 GB storage",
                "Priority support",
                "Advanced analytics",
                "Custom domains",
                "10M req/mo",
              ],
              hl: true,
              cta: "Start 14-day trial",
            },
            {
              n: "Enterprise",
              p: "Custom",
              ps: "",
              sub: "For at-scale organizations",
              f: [
                "Everything in Pro",
                "99.99% uptime SLA",
                "Dedicated infrastructure",
                "SAML/SSO",
                "Custom contracts",
                "Unlimited req/mo",
              ],
              hl: false,
              cta: "Contact sales",
            },
          ].map(({ n, p, ps, sub, f, hl, cta }) => (
            <div
              key={n}
              className={`relative rounded-2xl border p-8 ${hl ? "border-blue-500/40 bg-blue-950/20" : ""}`}
              style={
                !hl
                  ? {
                      borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.06)",
                      background: isDark ? "rgba(255,255,255,0.02)" : "rgba(15,23,42,0.02)",
                    }
                  : {}
              }
            >
              {hl && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-blue-600 px-5 py-1 text-[10px] font-bold tracking-wide text-white">
                  MOST POPULAR
                </div>
              )}
              <p
                className="mb-0.5 text-xs font-bold uppercase tracking-wider"
                style={{ color: isDark ? "rgba(255,255,255,0.3)" : "rgba(15,23,42,0.35)" }}
              >
                {n}
              </p>
              <p
                className="mb-4 text-[11px]"
                style={{ color: isDark ? "rgba(255,255,255,0.25)" : "rgba(15,23,42,0.4)" }}
              >
                {sub}
              </p>
              <div className="mb-7 flex items-baseline gap-1">
                <span className="text-[42px] font-black leading-none" style={{ color: text }}>
                  {p}
                </span>
                <span
                  className="text-sm"
                  style={{ color: isDark ? "rgba(255,255,255,0.25)" : "rgba(15,23,42,0.35)" }}
                >
                  {ps}
                </span>
              </div>
              <ul className="mb-8 space-y-3">
                {f.map((x) => (
                  <li
                    key={x}
                    className="flex items-center gap-2.5 text-[13px]"
                    style={{ color: isDark ? "rgba(255,255,255,0.45)" : "rgba(15,23,42,0.55)" }}
                  >
                    <div className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-blue-600/20">
                      <Check className="h-2.5 w-2.5 text-blue-400" />
                    </div>
                    {x}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setSignupOpen(true)}
                className={`w-full rounded-xl py-3 text-sm font-semibold transition-all ${hl ? "bg-blue-600 text-white hover:bg-blue-500" : "border hover:bg-white/[0.04]"}`}
                style={
                  !hl
                    ? {
                        borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.1)",
                        color: isDark ? "rgba(255,255,255,0.5)" : "rgba(15,23,42,0.55)",
                      }
                    : {}
                }
              >
                {cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-6xl px-8 pb-24">
        <div className="relative overflow-hidden rounded-3xl border border-blue-500/20 bg-blue-950/20 p-16 text-center">
          <div className="pointer-events-none absolute left-1/2 top-0 h-[200px] w-[400px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[60px]" />
          <div className="relative z-10">
            <h2 className="mb-4 text-[40px] font-extrabold tracking-tight text-white">
              Ready to ship faster?
            </h2>
            <p className="mx-auto mb-8 max-w-md text-[15px] leading-relaxed text-white/35">
              Join 18,000+ teams already building on Nova. Set up in under 5 minutes.
            </p>
            <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
              <button
                onClick={() => setSignupOpen(true)}
                className="group flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500"
              >
                Get started free{" "}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
              <button
                onClick={() => setLoginOpen(true)}
                className="rounded-xl border border-white/[0.08] bg-white/[0.03] px-8 py-3.5 text-sm text-white/50 hover:border-white/[0.15] hover:text-white/70"
              >
                Talk to sales
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="border-t py-14"
        style={{ borderColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.06)" }}
      >
        <div className="mx-auto max-w-6xl px-8">
          <div className="mb-12 grid grid-cols-5 gap-8">
            <div className="col-span-2">
              <div className="mb-4 flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600">
                  <Zap className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="font-bold" style={{ color: text }}>
                  Nova
                </span>
              </div>
              <p
                className="mb-4 max-w-[220px] text-xs leading-relaxed"
                style={{ color: isDark ? "rgba(255,255,255,0.25)" : "rgba(15,23,42,0.4)" }}
              >
                The unified platform for modern engineering teams.
              </p>
              <div className="flex gap-2">
                {["X", "GH", "LI", "YT"].map((s) => (
                  <div
                    key={s}
                    className="flex h-7 w-7 items-center justify-center rounded-lg border text-[8px] font-bold"
                    style={{
                      borderColor: isDark ? "rgba(255,255,255,0.07)" : "rgba(15,23,42,0.08)",
                      color: isDark ? "rgba(255,255,255,0.3)" : "rgba(15,23,42,0.35)",
                      background: isDark ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.02)",
                    }}
                  >
                    {s}
                  </div>
                ))}
              </div>
            </div>
            {[
              { heading: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
              { heading: "Docs", links: ["Getting started", "API reference", "Guides", "Status"] },
              { heading: "Company", links: ["About", "Blog", "Careers", "Contact"] },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <p
                  className="mb-4 text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: isDark ? "rgba(255,255,255,0.25)" : "rgba(15,23,42,0.35)" }}
                >
                  {heading}
                </p>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l}>
                      <button
                        className="text-xs transition-colors"
                        style={{ color: isDark ? "rgba(255,255,255,0.35)" : "rgba(15,23,42,0.5)" }}
                      >
                        {l}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            className="flex items-center justify-between border-t pt-6"
            style={{ borderColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.06)" }}
          >
            <p
              className="text-[11px]"
              style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(15,23,42,0.35)" }}
            >
              © 2025 Nova, Inc. All rights reserved.
            </p>
            <div className="flex gap-4">
              {["Privacy", "Terms", "Security"].map((l) => (
                <button
                  key={l}
                  className="text-[11px] transition-colors"
                  style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(15,23,42,0.35)" }}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

// ─── Zenith: Studio Portfolio — Pentagram / BASE aesthetic ───────────────────
export function ZenithPreview() {
  const [loginOpen, setLoginOpen] = React.useState(false)
  const [signupOpen, setSignupOpen] = React.useState(false)
  const [projectOpen, setProjectOpen] = React.useState(false)

  const Modal = ({
    open,
    onClose,
    children,
  }: {
    open: boolean
    onClose: () => void
    children: React.ReactNode
  }) =>
    open ? (
      <div
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="relative mx-4 w-full max-w-sm overflow-hidden rounded-2xl bg-[#f8f6f1] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-xs text-[#1a1a1a]/30 transition-colors hover:text-[#1a1a1a]"
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    ) : null

  return (
    <div
      className="relative min-h-[1200px] bg-[#f8f6f1] font-sans text-[#1a1a1a]"
      style={{ fontFamily: "system-ui,sans-serif" }}
    >
      {/* Login Modal */}
      <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
        <div className="p-8">
          <h2 className="mb-1 text-xl font-black text-[#1a1a1a]">Welcome back</h2>
          <p className="mb-6 text-xs text-[#1a1a1a]/40">Sign in to your Zenith account</p>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-[#1a1a1a]/10 bg-white px-4 py-2.5 text-sm text-[#1a1a1a] outline-none placeholder:text-[#1a1a1a]/30 focus:border-[#1a1a1a]/30"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-[#1a1a1a]/10 bg-white px-4 py-2.5 text-sm text-[#1a1a1a] outline-none placeholder:text-[#1a1a1a]/30 focus:border-[#1a1a1a]/30"
            />
          </div>
          <button className="mt-4 w-full rounded-xl bg-[#1a1a1a] py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#2a2a2a]">
            Sign in
          </button>
          <p className="mt-4 text-center text-xs text-[#1a1a1a]/40">
            No account?{" "}
            <button
              className="font-semibold text-[#1a1a1a] underline"
              onClick={() => {
                setLoginOpen(false)
                setSignupOpen(true)
              }}
            >
              Sign up
            </button>
          </p>
        </div>
      </Modal>

      {/* Signup Modal */}
      <Modal open={signupOpen} onClose={() => setSignupOpen(false)}>
        <div className="p-8">
          <h2 className="mb-1 text-xl font-black text-[#1a1a1a]">Create account</h2>
          <p className="mb-6 text-xs text-[#1a1a1a]/40">Join the Zenith community</p>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Full name"
              className="w-full rounded-xl border border-[#1a1a1a]/10 bg-white px-4 py-2.5 text-sm text-[#1a1a1a] outline-none placeholder:text-[#1a1a1a]/30 focus:border-[#1a1a1a]/30"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-[#1a1a1a]/10 bg-white px-4 py-2.5 text-sm text-[#1a1a1a] outline-none placeholder:text-[#1a1a1a]/30 focus:border-[#1a1a1a]/30"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-[#1a1a1a]/10 bg-white px-4 py-2.5 text-sm text-[#1a1a1a] outline-none placeholder:text-[#1a1a1a]/30 focus:border-[#1a1a1a]/30"
            />
          </div>
          <button className="mt-4 w-full rounded-xl bg-[#1a1a1a] py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#2a2a2a]">
            Create account
          </button>
          <p className="mt-4 text-center text-xs text-[#1a1a1a]/40">
            Already have one?{" "}
            <button
              className="font-semibold text-[#1a1a1a] underline"
              onClick={() => {
                setSignupOpen(false)
                setLoginOpen(true)
              }}
            >
              Sign in
            </button>
          </p>
        </div>
      </Modal>

      {/* Project Modal */}
      <Modal open={projectOpen} onClose={() => setProjectOpen(false)}>
        <div className="p-8">
          <h2 className="mb-1 text-xl font-black text-[#1a1a1a]">Start a project</h2>
          <p className="mb-6 text-xs text-[#1a1a1a]/40">Tell us about your brand and goals</p>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Company name"
              className="w-full rounded-xl border border-[#1a1a1a]/10 bg-white px-4 py-2.5 text-sm text-[#1a1a1a] outline-none placeholder:text-[#1a1a1a]/30 focus:border-[#1a1a1a]/30"
            />
            <input
              type="email"
              placeholder="Your email"
              className="w-full rounded-xl border border-[#1a1a1a]/10 bg-white px-4 py-2.5 text-sm text-[#1a1a1a] outline-none placeholder:text-[#1a1a1a]/30 focus:border-[#1a1a1a]/30"
            />
            <textarea
              placeholder="Describe your project..."
              rows={3}
              className="w-full resize-none rounded-xl border border-[#1a1a1a]/10 bg-white px-4 py-2.5 text-sm text-[#1a1a1a] outline-none placeholder:text-[#1a1a1a]/30 focus:border-[#1a1a1a]/30"
            />
          </div>
          <button className="mt-4 w-full rounded-xl bg-[#1a1a1a] py-2.5 text-sm font-bold text-white transition-colors hover:bg-[#2a2a2a]">
            Send inquiry
          </button>
        </div>
      </Modal>

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-6 md:px-10 md:py-7">
        <span className="text-sm font-black uppercase tracking-[0.15em]">Zenith</span>
        <div className="hidden items-center gap-8 md:flex">
          {["Work", "Studio", "Services", "Journal"].map((l) => (
            <button
              key={l}
              className="text-xs font-medium tracking-wide text-[#1a1a1a]/50 transition-colors hover:text-[#1a1a1a]"
            >
              {l}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLoginOpen(true)}
            className="hidden px-3 py-1.5 text-xs text-[#1a1a1a]/40 transition-colors hover:text-[#1a1a1a] md:block"
          >
            Log in
          </button>
          <button
            onClick={() => setProjectOpen(true)}
            className="rounded-full border border-[#1a1a1a]/15 px-5 py-2 text-xs font-semibold text-[#1a1a1a] transition-colors hover:border-[#1a1a1a]/40"
          >
            Start a project
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="border-[#1a1a1a]/8 border-t px-6 pb-16 pt-14 md:px-10 md:pb-20 md:pt-16">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p className="mb-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#1a1a1a]/35">
              Independent creative studio — Est. 2016
            </p>
            <h1 className="text-[48px] font-black leading-[0.95] tracking-tight text-[#1a1a1a] md:text-[64px]">
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
            <button
              onClick={() => setProjectOpen(true)}
              className="group mt-6 flex w-fit items-center gap-2 text-sm font-semibold text-[#1a1a1a]"
            >
              View selected work
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="border-[#1a1a1a]/8 mt-16 grid grid-cols-2 gap-0 border-t md:grid-cols-4">
          {[
            ["140+", "Projects"],
            ["$2B+", "Client revenue"],
            ["9", "Awards"],
            ["3", "Offices"],
          ].map(([n, l]) => (
            <div key={l} className="border-[#1a1a1a]/8 border-r py-6 pr-6 last:border-r-0">
              <p className="text-3xl font-black tracking-tight">{n}</p>
              <p className="mt-1 text-xs font-medium uppercase tracking-wider text-[#1a1a1a]/35">
                {l}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio grid */}
      <div className="border-[#1a1a1a]/8 border-t px-6 py-14 md:px-10 md:py-16">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-xl font-bold">Selected work</h2>
          <button className="text-xs font-medium text-[#1a1a1a]/40 transition-colors hover:text-[#1a1a1a]">
            All projects →
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {[
            { label: "Brand system", client: "Meridian Capital", year: "2024", bg: "bg-[#1a1a1a]" },
            { label: "Campaign identity", client: "Lune Studio", year: "2024", bg: "bg-stone-200" },
            { label: "Digital product", client: "Arch Software", year: "2023", bg: "bg-amber-100" },
            { label: "Annual report", client: "Vega Capital", year: "2023", bg: "bg-slate-800" },
            { label: "Motion & film", client: "Pattern NYC", year: "2023", bg: "bg-rose-100" },
            { label: "Web experience", client: "Croft Ventures", year: "2024", bg: "bg-sky-100" },
          ].map(({ label, client, year, bg }) => (
            <div
              key={client}
              className={`group relative aspect-[4/3] overflow-hidden rounded-xl ${bg}`}
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
      <div className="border-[#1a1a1a]/8 border-t px-6 py-14 md:px-10 md:py-16">
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
              <button
                key={t}
                className="group flex w-full cursor-pointer items-center justify-between py-5 text-left"
              >
                <div className="flex items-center gap-6">
                  <span className="w-6 text-[10px] font-semibold text-[#1a1a1a]/25">0{i + 1}</span>
                  <div>
                    <p className="text-sm font-semibold">{t}</p>
                    <p className="text-xs text-[#1a1a1a]/40">{d}</p>
                  </div>
                </div>
                <ChevronRight className="h-4 w-4 text-[#1a1a1a]/20 transition-all group-hover:translate-x-0.5 group-hover:text-[#1a1a1a]/60" />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-6 mb-16 rounded-3xl bg-[#1a1a1a] p-12 text-center text-white md:mx-10 md:p-16">
        <p className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
          Get in touch
        </p>
        <h2 className="mb-6 text-3xl font-black tracking-tight md:text-4xl">
          Have a project in mind?
        </h2>
        <p className="mx-auto mb-10 max-w-sm text-sm text-white/40">
          We take on select engagements. Tell us about your brand and goals.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={() => setProjectOpen(true)}
            className="rounded-full bg-white px-10 py-3.5 text-sm font-bold text-[#1a1a1a] transition-colors hover:bg-white/90"
          >
            Start a project
          </button>
          <button
            onClick={() => setLoginOpen(true)}
            className="rounded-full border border-white/20 px-8 py-3.5 text-sm text-white/50 transition-colors hover:border-white/40 hover:text-white/80"
          >
            Client login
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Pulse: Bold Startup — Loom / Notion aesthetic ───────────────────────────
export function PulsePreview() {
  const [loginOpen, setLoginOpen] = React.useState(false)
  const [signupOpen, setSignupOpen] = React.useState(false)

  const Modal = ({
    open,
    onClose,
    children,
  }: {
    open: boolean
    onClose: () => void
    children: React.ReactNode
  }) =>
    open ? (
      <div
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="relative mx-4 w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-xs text-gray-300 transition-colors hover:text-gray-600"
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    ) : null

  return (
    <div
      className="relative min-h-[1200px] bg-white font-sans text-[#111]"
      style={{ fontFamily: "system-ui,sans-serif" }}
    >
      {/* Login Modal */}
      <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
        <div className="p-8">
          <h2 className="mb-1 text-xl font-black text-gray-900">Welcome back</h2>
          <p className="mb-6 text-xs text-gray-400">Sign in to your Pulse workspace</p>
          <div className="mb-3 grid grid-cols-2 gap-2">
            <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-100 py-2.5 text-xs font-semibold text-gray-600 transition-colors hover:bg-gray-50">
              <Globe className="h-3.5 w-3.5" /> Google
            </button>
            <button className="flex items-center justify-center gap-2 rounded-xl border border-gray-100 py-2.5 text-xs font-semibold text-gray-600 transition-colors hover:bg-gray-50">
              <Lock className="h-3.5 w-3.5" /> GitHub
            </button>
          </div>
          <div className="relative my-4 flex items-center">
            <div className="flex-1 border-t border-gray-100" />
            <span className="mx-3 text-[10px] text-gray-300">or</span>
            <div className="flex-1 border-t border-gray-100" />
          </div>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-300 focus:border-orange-200 focus:bg-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-300 focus:border-orange-200 focus:bg-white"
            />
          </div>
          <button
            className="mt-4 w-full rounded-xl py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-400/20"
            style={{ background: "linear-gradient(135deg,#ff6b35,#e85d04)" }}
          >
            Sign in
          </button>
          <p className="mt-4 text-center text-xs text-gray-400">
            No account?{" "}
            <button
              className="font-semibold text-orange-500"
              onClick={() => {
                setLoginOpen(false)
                setSignupOpen(true)
              }}
            >
              Sign up free
            </button>
          </p>
        </div>
      </Modal>

      {/* Signup Modal */}
      <Modal open={signupOpen} onClose={() => setSignupOpen(false)}>
        <div className="p-8">
          <h2 className="mb-1 text-xl font-black text-gray-900">Get started free</h2>
          <p className="mb-6 text-xs text-gray-400">14-day trial, no credit card required</p>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-300 focus:border-orange-200 focus:bg-white"
            />
            <input
              type="email"
              placeholder="Work email"
              className="w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-300 focus:border-orange-200 focus:bg-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-gray-100 bg-gray-50 px-4 py-2.5 text-sm text-gray-900 outline-none placeholder:text-gray-300 focus:border-orange-200 focus:bg-white"
            />
          </div>
          <button
            className="mt-4 w-full rounded-xl py-2.5 text-sm font-bold text-white shadow-lg shadow-orange-400/20"
            style={{ background: "linear-gradient(135deg,#ff6b35,#e85d04)" }}
          >
            Create free account
          </button>
          <p className="mt-4 text-center text-xs text-gray-400">
            Already have one?{" "}
            <button
              className="font-semibold text-orange-500"
              onClick={() => {
                setSignupOpen(false)
                setLoginOpen(true)
              }}
            >
              Sign in
            </button>
          </p>
        </div>
      </Modal>

      {/* Nav */}
      <nav className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-100 bg-white/90 px-6 py-4 backdrop-blur-sm md:px-10">
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
          <button
            onClick={() => setLoginOpen(true)}
            className="px-3 py-1.5 text-sm text-gray-500 transition-colors hover:text-gray-900"
          >
            Log in
          </button>
          <button
            onClick={() => setSignupOpen(true)}
            className="rounded-lg px-4 py-2 text-sm font-semibold text-white transition-all"
            style={{ background: "linear-gradient(135deg,#ff6b35,#e85d04)" }}
          >
            Get started free
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="px-6 pb-20 pt-20 md:px-10 md:pt-24">
        <div className="max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-orange-100 bg-orange-50 px-3.5 py-1.5 text-xs font-semibold text-orange-600">
            <Circle className="h-2 w-2 fill-orange-500 text-orange-500" />
            Now with AI-powered task prioritization
          </div>
          <h1 className="mb-6 text-[48px] font-black leading-[1.0] tracking-tight text-gray-900 md:text-[64px]">
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
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <button
              onClick={() => setSignupOpen(true)}
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
      <div className="mx-6 mb-20 overflow-hidden rounded-2xl border border-gray-100 shadow-xl shadow-gray-100 md:mx-10">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="flex gap-3 border-b border-gray-50 bg-gray-50/80 p-4 md:w-44 md:flex-col md:border-b-0 md:border-r">
            <p className="hidden text-[9px] font-semibold uppercase tracking-widest text-gray-300 md:block">
              My workspace
            </p>
            {["Inbox", "Today", "Projects", "Team", "Reports"].map((l, i) => (
              <div
                key={l}
                className={`flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] ${i === 1 ? "bg-orange-50 font-semibold text-orange-600" : "text-gray-400"}`}
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
      <div className="border-t border-gray-50 bg-gray-50/50 px-6 py-14 md:px-10 md:py-16">
        <p className="mb-8 text-center text-sm text-gray-400">
          Trusted by high-performance teams at
        </p>
        <div className="mb-14 flex flex-wrap items-center justify-center gap-6 md:gap-10">
          {["Linear", "Vercel", "Notion", "Figma", "Stripe"].map((n) => (
            <span
              key={n}
              className="rounded-lg border border-gray-100 bg-white px-3 py-1.5 text-xs font-bold tracking-tight text-gray-300"
            >
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

      {/* Pricing */}
      <div className="px-6 py-20 md:px-10">
        <h2 className="mb-2 text-center text-3xl font-black tracking-tight text-gray-900">
          Simple pricing
        </h2>
        <p className="mb-12 text-center text-sm text-gray-400">No surprises, no lock-in.</p>
        <div className="mx-auto grid max-w-3xl gap-4 md:grid-cols-3">
          {[
            {
              name: "Starter",
              price: "$0",
              desc: "For individuals and small teams.",
              cta: "Get started",
              hl: false,
            },
            {
              name: "Pro",
              price: "$12",
              desc: "For growing teams that need more.",
              cta: "Start free trial",
              hl: true,
            },
            {
              name: "Business",
              price: "$39",
              desc: "For scaling teams and orgs.",
              cta: "Contact sales",
              hl: false,
            },
          ].map(({ name, price, desc, cta, hl }) => (
            <div
              key={name}
              className={`rounded-2xl border p-6 ${hl ? "border-orange-200 bg-orange-50/50" : "border-gray-100 bg-white"}`}
            >
              <p className="mb-1 text-sm font-bold text-gray-900">{name}</p>
              <p className="mb-1 text-3xl font-black text-gray-900">
                {price}
                <span className="text-sm font-normal text-gray-400">/mo</span>
              </p>
              <p className="mb-5 text-xs text-gray-400">{desc}</p>
              <button
                onClick={() => setSignupOpen(true)}
                className={`w-full rounded-xl py-2.5 text-xs font-semibold transition-all ${hl ? "text-white shadow-sm shadow-orange-200" : "border border-gray-100 text-gray-600 hover:border-gray-200"}`}
                style={hl ? { background: "linear-gradient(135deg,#ff6b35,#e85d04)" } : {}}
              >
                {cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 py-20 text-center md:px-10">
        <h2 className="mb-4 text-4xl font-black tracking-tight text-gray-900 md:text-5xl">
          Ready to move faster?
        </h2>
        <p className="mb-10 text-lg text-gray-400">Join 80,000+ teams already using Pulse.</p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={() => setSignupOpen(true)}
            className="rounded-2xl px-12 py-4 text-base font-black text-white shadow-2xl shadow-orange-400/20 transition-all hover:shadow-orange-400/40"
            style={{ background: "linear-gradient(135deg,#ff6b35,#e85d04)" }}
          >
            Get started — it&apos;s free
          </button>
          <button
            onClick={() => setLoginOpen(true)}
            className="rounded-2xl border border-gray-200 px-8 py-4 text-base font-semibold text-gray-500 transition-colors hover:border-gray-300 hover:text-gray-700"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Orbit: Analytics SaaS — Mixpanel / PostHog aesthetic ────────────────────
export function OrbitPreview() {
  const [loginOpen, setLoginOpen] = React.useState(false)
  const [signupOpen, setSignupOpen] = React.useState(false)

  const Modal = ({
    open,
    onClose,
    children,
  }: {
    open: boolean
    onClose: () => void
    children: React.ReactNode
  }) =>
    open ? (
      <div
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="relative mx-4 w-full max-w-sm overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0d1220] shadow-2xl shadow-black/50"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-xs text-white/20 transition-colors hover:text-white/60"
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    ) : null

  return (
    <div
      className="relative min-h-[1200px] bg-[#0a0f1e] font-sans text-white"
      style={{ fontFamily: "system-ui,sans-serif" }}
    >
      {/* Login Modal */}
      <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
        <div className="p-8">
          <h2 className="mb-1 text-xl font-bold text-white">Sign in to Orbit</h2>
          <p className="mb-6 text-xs text-white/35">Your analytics, all in one place</p>
          <div className="mb-3 grid grid-cols-2 gap-2">
            <button className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] py-2.5 text-xs font-semibold text-white/50 transition-colors hover:border-white/[0.12] hover:text-white/70">
              <Globe className="h-3.5 w-3.5" /> Google
            </button>
            <button className="flex items-center justify-center gap-2 rounded-xl border border-white/[0.07] bg-white/[0.03] py-2.5 text-xs font-semibold text-white/50 transition-colors hover:border-white/[0.12] hover:text-white/70">
              <Lock className="h-3.5 w-3.5" /> GitHub
            </button>
          </div>
          <div className="relative my-4 flex items-center">
            <div className="flex-1 border-t border-white/[0.06]" />
            <span className="mx-3 text-[10px] text-white/20">or continue with email</span>
            <div className="flex-1 border-t border-white/[0.06]" />
          </div>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-sky-500/40"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-sky-500/40"
            />
          </div>
          <button className="mt-4 w-full rounded-xl bg-sky-500 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-400">
            Sign in
          </button>
          <p className="mt-4 text-center text-xs text-white/30">
            No account?{" "}
            <button
              className="text-sky-400 hover:text-sky-300"
              onClick={() => {
                setLoginOpen(false)
                setSignupOpen(true)
              }}
            >
              Start free trial
            </button>
          </p>
        </div>
      </Modal>

      {/* Signup Modal */}
      <Modal open={signupOpen} onClose={() => setSignupOpen(false)}>
        <div className="p-8">
          <h2 className="mb-1 text-xl font-bold text-white">Start your free trial</h2>
          <p className="mb-6 text-xs text-white/35">14 days free, no credit card required</p>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Full name"
              className="w-full rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-sky-500/40"
            />
            <input
              type="email"
              placeholder="Work email"
              className="w-full rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-sky-500/40"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-sky-500/40"
            />
          </div>
          <button className="mt-4 w-full rounded-xl bg-sky-500 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-400">
            Create free account
          </button>
          <p className="mt-4 text-center text-xs text-white/30">
            Already have an account?{" "}
            <button
              className="text-sky-400 hover:text-sky-300"
              onClick={() => {
                setSignupOpen(false)
                setLoginOpen(true)
              }}
            >
              Sign in
            </button>
          </p>
        </div>
      </Modal>

      {/* Nav */}
      <nav className="flex items-center justify-between border-b border-white/[0.05] px-6 py-4 md:px-10">
        <div className="flex items-center gap-6 md:gap-8">
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
          <button
            onClick={() => setLoginOpen(true)}
            className="px-3 py-1.5 text-xs text-white/35 transition-colors hover:text-white/60"
          >
            Sign in
          </button>
          <button
            onClick={() => setSignupOpen(true)}
            className="rounded-lg bg-sky-500 px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-sky-400"
          >
            Start free trial
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="px-6 pb-14 pt-20 text-center md:px-10 md:pb-16 md:pt-24">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-500/20 bg-sky-500/[0.08] px-3.5 py-1.5 text-xs text-sky-400">
          <Star className="h-3 w-3" />
          Rated #1 product analytics tool — G2 Winter 2024
        </div>
        <h1 className="mx-auto mb-6 max-w-3xl text-[40px] font-extrabold leading-[1.05] tracking-tight md:text-[52px]">
          Understand your users.
          <br />
          <span className="text-sky-400">Grow your product.</span>
        </h1>
        <p className="mx-auto mb-10 max-w-lg text-[15px] leading-relaxed text-white/40">
          Orbit auto-captures every user interaction and turns it into clarity. No SQL, no data team
          required — just answers.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={() => setSignupOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-sky-500 px-7 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 transition-colors hover:bg-sky-400"
          >
            Start free — 14 days <ArrowRight className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={() => setLoginOpen(true)}
            className="rounded-xl border border-white/[0.07] px-7 py-3 text-sm text-white/50 transition-all hover:border-white/15 hover:text-white/70"
          >
            View live demo
          </button>
        </div>
      </div>

      {/* Dashboard */}
      <div className="mx-6 mb-14 overflow-hidden rounded-2xl border border-white/[0.06] shadow-2xl shadow-black/50 md:mx-10">
        <div className="flex items-center gap-2 border-b border-white/[0.05] bg-[#0d1220] px-4 py-3">
          {["bg-[#ff5f57]", "bg-[#ffbc2e]", "bg-[#28c840]"].map((c, i) => (
            <div key={i} className={`h-2 w-2 rounded-full ${c}`} />
          ))}
          <span className="ml-2 text-[10px] text-white/20">Orbit — Analytics</span>
        </div>
        <div className="bg-[#0d1220] p-5">
          <div className="mb-4 flex flex-wrap items-center gap-2">
            {["Overview", "Funnels", "Retention", "Cohorts"].map((t, i) => (
              <button
                key={t}
                className={`rounded-md px-3 py-1 text-[10px] font-medium transition-colors ${i === 0 ? "bg-sky-500/15 text-sky-400" : "text-white/25 hover:text-white/50"}`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="grid gap-3 md:grid-cols-4">
            {[
              { label: "Active users", value: "48,291", change: "+12.4%" },
              { label: "Conversion", value: "3.87%", change: "+0.41%" },
              { label: "Avg. session", value: "4m 22s", change: "+8.1%" },
              { label: "Revenue", value: "$91,204", change: "+23.5%" },
            ].map(({ label, value, change }) => (
              <div
                key={label}
                className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-4"
              >
                <p className="mb-2 text-[10px] text-white/30">{label}</p>
                <p className="text-xl font-bold">{value}</p>
                <p className="mt-1 text-[10px] text-emerald-400">{change}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl border border-white/[0.05] bg-white/[0.02] p-4">
            <p className="mb-4 text-xs font-medium text-white/40">Active users — last 30 days</p>
            <div className="flex items-end gap-1" style={{ height: 64 }}>
              {[
                30, 45, 40, 55, 50, 65, 70, 60, 80, 75, 90, 85, 95, 88, 100, 92, 88, 95, 102, 98,
                110, 105, 115, 112, 118, 108, 122, 130, 125, 140,
              ].map((h, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-sky-500/60"
                  style={{ height: `${(h / 140) * 100}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Logos */}
      <div className="border-t border-white/[0.04] px-6 py-10 md:px-10">
        <p className="mb-8 text-center text-xs text-white/25">Trusted by data-driven teams at</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {["Stripe", "Notion", "Linear", "Vercel", "Loom", "Figma"].map((n) => (
            <div
              key={n}
              className="rounded-lg border border-white/[0.06] bg-white/[0.03] px-4 py-2 text-xs font-semibold text-white/30"
            >
              {n}
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="px-6 py-16 md:px-10">
        <h2 className="mb-2 text-center text-3xl font-extrabold tracking-tight">
          Analytics that actually answers questions
        </h2>
        <p className="mb-14 text-center text-sm text-white/35">
          Built for product teams, loved by engineers.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Activity,
              title: "Auto-capture events",
              desc: "No manual tracking. Orbit captures every click, page view, and interaction automatically.",
              c: "text-sky-400",
              b: "border-sky-500/10 bg-sky-500/[0.03]",
            },
            {
              icon: BarChart3,
              title: "Funnel analysis",
              desc: "See where users drop off and optimize your conversion at every step.",
              c: "text-emerald-400",
              b: "border-emerald-500/10 bg-emerald-500/[0.03]",
            },
            {
              icon: Users,
              title: "Cohort retention",
              desc: "Understand which features drive long-term retention and which drive churn.",
              c: "text-purple-400",
              b: "border-purple-500/10 bg-purple-500/[0.03]",
            },
          ].map(({ icon: Icon, title, desc, c, b }) => (
            <div key={title} className={`rounded-2xl border ${b} p-7`}>
              <div className="mb-4 inline-flex rounded-xl border border-white/[0.05] bg-white/[0.03] p-3">
                <Icon className={`h-5 w-5 ${c}`} />
              </div>
              <h3 className="mb-2 font-semibold text-white">{title}</h3>
              <p className="text-sm leading-relaxed text-white/35">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="px-6 pb-24 md:px-10">
        <div className="rounded-3xl border border-sky-500/20 bg-sky-500/[0.05] p-12 text-center md:p-16">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Start understanding your users
          </h2>
          <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed text-white/35">
            Join 5,000+ product teams who use Orbit to make better decisions.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={() => setSignupOpen(true)}
              className="flex items-center gap-2 rounded-xl bg-sky-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/20 hover:bg-sky-400"
            >
              Start free trial <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => setLoginOpen(true)}
              className="rounded-xl border border-white/[0.07] px-8 py-3.5 text-sm text-white/40 hover:border-white/15 hover:text-white/60"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

// ─── Lumina: Creative Agency — IDEO / Instrument aesthetic ───────────────────
export function LuminaPreview() {
  const [loginOpen, setLoginOpen] = React.useState(false)
  const [contactOpen, setContactOpen] = React.useState(false)
  const [menuOpen, setMenuOpen] = React.useState(false)

  const Modal = ({
    open,
    onClose,
    children,
  }: {
    open: boolean
    onClose: () => void
    children: React.ReactNode
  }) =>
    open ? (
      <div
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="relative mx-4 w-full max-w-sm overflow-hidden rounded-2xl border border-white/[0.07] bg-[#0c0c0c] shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-xs text-white/20 transition-colors hover:text-white/60"
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    ) : null

  return (
    <div
      className="relative min-h-[1200px] bg-[#0c0c0c] font-sans text-white"
      style={{ fontFamily: "system-ui,sans-serif" }}
    >
      {/* Login Modal */}
      <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
        <div className="p-8">
          <h2 className="mb-1 text-xl font-black text-white">Client portal</h2>
          <p className="mb-6 text-xs text-white/30">Access your project dashboard</p>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-white/[0.07] bg-white/[0.04] px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-amber-400/40"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-white/[0.07] bg-white/[0.04] px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-amber-400/40"
            />
          </div>
          <button className="mt-4 w-full rounded-xl bg-amber-400 py-2.5 text-sm font-black text-black transition-colors hover:bg-amber-300">
            Sign in
          </button>
          <p className="mt-4 text-center text-xs text-white/25">
            New client?{" "}
            <button
              className="font-semibold text-amber-400"
              onClick={() => {
                setLoginOpen(false)
                setContactOpen(true)
              }}
            >
              Start a project
            </button>
          </p>
        </div>
      </Modal>

      {/* Contact Modal */}
      <Modal open={contactOpen} onClose={() => setContactOpen(false)}>
        <div className="p-8">
          <h2 className="mb-1 text-xl font-black text-white">Let's work together</h2>
          <p className="mb-6 text-xs text-white/30">Tell us about your project</p>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-white/[0.07] bg-white/[0.04] px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-amber-400/40"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-white/[0.07] bg-white/[0.04] px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-amber-400/40"
            />
            <select className="w-full rounded-xl border border-white/[0.07] bg-white/[0.04] px-4 py-2.5 text-sm text-white/50 outline-none focus:border-amber-400/40">
              <option value="">Service needed</option>
              <option>Brand Identity</option>
              <option>Digital Design</option>
              <option>Motion & Film</option>
              <option>Development</option>
            </select>
            <textarea
              placeholder="Tell us about your vision..."
              rows={3}
              className="w-full resize-none rounded-xl border border-white/[0.07] bg-white/[0.04] px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-amber-400/40"
            />
          </div>
          <button className="mt-4 w-full rounded-xl bg-amber-400 py-2.5 text-sm font-black text-black transition-colors hover:bg-amber-300">
            Send inquiry
          </button>
        </div>
      </Modal>

      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-7 md:px-10 md:py-8">
        <span className="text-sm font-black uppercase tracking-[0.25em] text-white">Lumina</span>
        <div className="hidden items-center gap-8 md:flex">
          {["Work", "Studio", "Services", "Journal", "Contact"].map((l) => (
            <button
              key={l}
              className="text-xs font-medium tracking-wide text-white/30 transition-colors hover:text-white/70"
            >
              {l}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLoginOpen(true)}
            className="hidden text-xs text-white/25 transition-colors hover:text-white/60 md:block"
          >
            Log in
          </button>
          <button
            onClick={() => setContactOpen(true)}
            className="rounded-full border border-white/15 px-5 py-2 text-xs text-white/50 transition-all hover:border-white/30 hover:text-white/80"
          >
            Start a project
          </button>
          <button
            className="ml-1 flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/30 hover:border-white/20 hover:text-white/60 md:hidden"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className="h-4 w-4" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-white/[0.05] bg-[#0c0c0c] px-6 py-4 md:hidden">
          {["Work", "Studio", "Services", "Journal", "Contact"].map((l) => (
            <button
              key={l}
              className="block w-full py-2.5 text-left text-sm text-white/40 hover:text-white/80"
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </button>
          ))}
          <button
            onClick={() => {
              setMenuOpen(false)
              setLoginOpen(true)
            }}
            className="mt-2 block w-full py-2.5 text-left text-sm font-semibold text-amber-400"
          >
            Log in
          </button>
        </div>
      )}

      {/* Hero — oversized type */}
      <div className="overflow-hidden px-6 pb-20 pt-10 md:px-10 md:pb-24 md:pt-12">
        <div className="mb-10 flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/25">
            Creative studio — New York
          </p>
          <div className="h-px flex-1 bg-white/10" />
        </div>
        <h1 className="text-[56px] font-black leading-[0.88] tracking-tight md:text-[80px]">
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
        <div className="mt-10 flex flex-col items-start gap-6 md:mt-12 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xs text-sm leading-relaxed text-white/35">
            Strategic design studio. We partner with the world's most ambitious companies to create
            brands that endure.
          </p>
          <button
            onClick={() => setContactOpen(true)}
            className="group flex h-14 w-14 items-center justify-center rounded-full bg-amber-400 transition-colors hover:bg-amber-300 md:h-16 md:w-16"
          >
            <ArrowRight className="h-5 w-5 text-black transition-transform group-hover:translate-x-0.5 md:h-6 md:w-6" />
          </button>
        </div>
      </div>

      {/* Portfolio */}
      <div className="border-t border-white/[0.05] px-6 py-14 md:px-10 md:py-16">
        <div className="mb-8 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/25">
            Selected projects
          </p>
          <button className="text-xs text-white/25 transition-colors hover:text-white/60">
            All work →
          </button>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {[
            {
              title: "Meridian",
              cat: "Global banking rebrand",
              year: "2024",
              bg: "from-slate-800 to-slate-900",
            },
            {
              title: "Solstice",
              cat: "Tech startup identity",
              year: "2024",
              bg: "from-amber-900/40 to-orange-950",
            },
            {
              title: "Archetype",
              cat: "Fashion e-commerce platform",
              year: "2023",
              bg: "from-rose-950 to-slate-900",
            },
            {
              title: "Forma",
              cat: "B2B SaaS product design",
              year: "2023",
              bg: "from-sky-950 to-slate-900",
            },
          ].map(({ title, cat, year, bg }) => (
            <div
              key={title}
              className={`group relative h-48 overflow-hidden rounded-2xl bg-gradient-to-br ${bg} border border-white/[0.05]`}
            >
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
      <div className="border-t border-white/[0.05] px-6 py-12 md:px-10 md:py-14">
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
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
      <div className="border-t border-white/[0.05] px-6 py-16 md:px-10 md:py-20">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-4xl font-black tracking-tight text-white md:text-5xl">
              Next project?
            </h2>
            <p className="mt-3 max-w-sm text-sm text-white/35">
              We work with brands who are ready to think differently. Let's talk.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <button
              onClick={() => setContactOpen(true)}
              className="rounded-full bg-amber-400 px-8 py-3.5 text-sm font-black text-black transition-colors hover:bg-amber-300"
            >
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
  const [loginOpen, setLoginOpen] = React.useState(false)
  const [demoOpen, setDemoOpen] = React.useState(false)

  const Modal = ({
    open,
    onClose,
    children,
  }: {
    open: boolean
    onClose: () => void
    children: React.ReactNode
  }) =>
    open ? (
      <div
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="relative mx-4 w-full max-w-sm overflow-hidden rounded-2xl bg-white shadow-2xl"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-xs text-slate-300 transition-colors hover:text-slate-600"
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    ) : null

  return (
    <div
      className="relative min-h-[1200px] bg-white font-sans text-slate-900"
      style={{ fontFamily: "system-ui,sans-serif" }}
    >
      {/* Login Modal */}
      <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
        <div className="p-8">
          <div className="mb-6 flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-slate-900">
              <Globe className="h-4 w-4 text-white" />
            </div>
            <span className="text-sm font-bold tracking-tight text-slate-900">Apex Platform</span>
          </div>
          <h2 className="mb-1 text-xl font-bold text-slate-900">Sign in to your account</h2>
          <p className="mb-6 text-xs text-slate-400">
            Enterprise SSO available for your organization
          </p>
          <div className="mb-4 rounded-xl border border-blue-100 bg-blue-50 px-4 py-3">
            <button className="flex w-full items-center justify-center gap-2 text-sm font-semibold text-blue-700">
              <Lock className="h-4 w-4" /> Continue with SSO
            </button>
          </div>
          <div className="relative my-4 flex items-center">
            <div className="flex-1 border-t border-slate-100" />
            <span className="mx-3 text-[10px] text-slate-300">or sign in with email</span>
            <div className="flex-1 border-t border-slate-100" />
          </div>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Work email"
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-300 focus:border-slate-400"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-300 focus:border-slate-400"
            />
          </div>
          <button className="mt-4 w-full rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800">
            Sign in
          </button>
          <p className="mt-4 text-center text-xs text-slate-400">
            Need an account?{" "}
            <button
              className="font-semibold text-slate-700 underline"
              onClick={() => {
                setLoginOpen(false)
                setDemoOpen(true)
              }}
            >
              Request a demo
            </button>
          </p>
        </div>
      </Modal>

      {/* Demo Modal */}
      <Modal open={demoOpen} onClose={() => setDemoOpen(false)}>
        <div className="p-8">
          <h2 className="mb-1 text-xl font-bold text-slate-900">Request a demo</h2>
          <p className="mb-6 text-xs text-slate-400">Our team will reach out within 24 hours</p>
          <div className="space-y-3">
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                placeholder="First name"
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-300 focus:border-slate-400"
              />
              <input
                type="text"
                placeholder="Last name"
                className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-300 focus:border-slate-400"
              />
            </div>
            <input
              type="email"
              placeholder="Work email"
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-300 focus:border-slate-400"
            />
            <input
              type="text"
              placeholder="Company name"
              className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-900 outline-none placeholder:text-slate-300 focus:border-slate-400"
            />
            <select className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm text-slate-400 outline-none focus:border-slate-400">
              <option value="">Company size</option>
              <option>1–50</option>
              <option>51–250</option>
              <option>251–1000</option>
              <option>1000+</option>
            </select>
          </div>
          <button className="mt-4 w-full rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-slate-800">
            Request demo
          </button>
        </div>
      </Modal>

      {/* Nav */}
      <nav className="flex items-center justify-between border-b border-slate-100 px-6 py-4 md:px-10">
        <div className="flex items-center gap-6 md:gap-8">
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
          <button
            onClick={() => setLoginOpen(true)}
            className="px-3 py-1.5 text-xs text-slate-500 transition-colors hover:text-slate-900"
          >
            Sign in
          </button>
          <button
            onClick={() => setDemoOpen(true)}
            className="rounded-lg bg-slate-900 px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-slate-800"
          >
            Request demo
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="px-6 py-16 md:px-10 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue-700">
              <Lock className="h-3 w-3" />
              SOC2 Type II · ISO 27001 · HIPAA · GDPR
            </div>
            <h1 className="mb-6 text-[36px] font-extrabold leading-[1.08] tracking-tight text-slate-900 md:text-[48px]">
              Enterprise infrastructure
              <br />
              <span className="text-slate-400">built to scale with you.</span>
            </h1>
            <p className="mb-8 max-w-xl text-[15px] leading-relaxed text-slate-500">
              Apex gives Fortune 500 companies the security, compliance, and reliability they need —
              without sacrificing developer velocity.
            </p>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <button
                onClick={() => setDemoOpen(true)}
                className="flex items-center gap-2 rounded-xl bg-slate-900 px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-slate-900/10 transition-colors hover:bg-slate-800"
              >
                Request a demo <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => setLoginOpen(true)}
                className="rounded-xl border border-slate-200 px-7 py-3.5 text-sm text-slate-500 transition-colors hover:border-slate-300 hover:text-slate-700"
              >
                Sign in
              </button>
            </div>
          </div>
          {/* Dashboard mockup */}
          <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6 shadow-xl shadow-slate-100">
            <div className="mb-4 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-red-400" />
              <div className="h-2 w-2 rounded-full bg-yellow-400" />
              <div className="h-2 w-2 rounded-full bg-green-400" />
              <span className="ml-2 text-[10px] text-slate-400">Apex Platform</span>
            </div>
            <div className="grid grid-cols-2 gap-2 md:grid-cols-3">
              {[
                {
                  label: "Uptime",
                  value: "99.99%",
                  sub: "last 90 days",
                  color: "text-emerald-600",
                  bg: "bg-emerald-50 border-emerald-100",
                },
                {
                  label: "Latency",
                  value: "12ms",
                  sub: "p95 global",
                  color: "text-blue-600",
                  bg: "bg-blue-50 border-blue-100",
                },
                {
                  label: "Requests",
                  value: "2.4B",
                  sub: "this month",
                  color: "text-purple-600",
                  bg: "bg-purple-50 border-purple-100",
                },
              ].map(({ label, value, sub, color, bg }) => (
                <div key={label} className={`rounded-xl border ${bg} p-4`}>
                  <p className="text-[10px] text-slate-400">{label}</p>
                  <p className={`text-xl font-bold ${color}`}>{value}</p>
                  <p className="text-[10px] text-slate-400">{sub}</p>
                </div>
              ))}
            </div>
            <div className="mt-3 rounded-xl border border-slate-100 bg-white p-4">
              <p className="mb-3 text-[10px] font-medium text-slate-400">System health</p>
              {[
                { name: "API Gateway", status: "Operational", ok: true },
                { name: "Database clusters", status: "Operational", ok: true },
                { name: "CDN nodes", status: "Operational", ok: true },
              ].map(({ name, status, ok }) => (
                <div key={name} className="flex items-center justify-between py-1.5">
                  <span className="text-[11px] text-slate-600">{name}</span>
                  <span
                    className={`text-[10px] font-semibold ${ok ? "text-emerald-600" : "text-red-500"}`}
                  >
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Trust logos */}
      <div className="border-t border-slate-50 bg-slate-50/50 px-6 py-10 md:px-10">
        <p className="mb-8 text-center text-xs text-slate-400">Trusted by enterprises worldwide</p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          {["Stripe", "Goldman Sachs", "Shopify", "Salesforce", "Adobe", "Twilio"].map((n) => (
            <div
              key={n}
              className="rounded-lg border border-slate-100 bg-white px-4 py-2 text-xs font-semibold text-slate-300"
            >
              {n}
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div className="px-6 py-16 md:px-10">
        <h2 className="mb-2 text-center text-3xl font-extrabold tracking-tight text-slate-900">
          Enterprise-grade, out of the box
        </h2>
        <p className="mb-12 text-center text-sm text-slate-400">
          Everything your security and compliance teams need.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Shield,
              title: "Zero-trust security",
              desc: "End-to-end encryption, hardware security keys, and granular RBAC across every service.",
              c: "text-blue-600",
              b: "bg-blue-50 border-blue-100",
            },
            {
              icon: Lock,
              title: "Compliance ready",
              desc: "SOC2 Type II, ISO 27001, HIPAA, and GDPR compliance built in from day one.",
              c: "text-emerald-600",
              b: "bg-emerald-50 border-emerald-100",
            },
            {
              icon: Globe,
              title: "Global infrastructure",
              desc: "Deploy to 40+ regions with automated failover, geo-redundancy, and 99.99% SLA.",
              c: "text-purple-600",
              b: "bg-purple-50 border-purple-100",
            },
          ].map(({ icon: Icon, title, desc, c, b }) => (
            <div key={title} className={`rounded-2xl border ${b} p-7`}>
              <div className="mb-4 inline-flex rounded-xl border border-slate-100 bg-white p-3 shadow-sm">
                <Icon className={`h-5 w-5 ${c}`} />
              </div>
              <h3 className="mb-2 font-semibold text-slate-900">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-500">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-6 mb-16 rounded-3xl bg-slate-900 p-12 text-center text-white md:mx-10 md:p-16">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
          Ready for enterprise?
        </h2>
        <p className="mx-auto mb-8 max-w-md text-sm text-white/50">
          Join 2,000+ enterprises who trust Apex for mission-critical infrastructure.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={() => setDemoOpen(true)}
            className="flex items-center gap-2 rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100"
          >
            Request a demo <ArrowRight className="h-4 w-4" />
          </button>
          <button
            onClick={() => setLoginOpen(true)}
            className="rounded-xl border border-white/20 px-8 py-3.5 text-sm text-white/60 transition-colors hover:border-white/40 hover:text-white/80"
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  )
}

// ─── Aura: Product Launch — Apple / Teenage Engineering aesthetic ─────────────
export function AuraPreview() {
  const [loginOpen, setLoginOpen] = React.useState(false)
  const [preorderOpen, setPreorderOpen] = React.useState(false)

  const Modal = ({
    open,
    onClose,
    children,
  }: {
    open: boolean
    onClose: () => void
    children: React.ReactNode
  }) =>
    open ? (
      <div
        className="fixed inset-0 z-[200] flex items-center justify-center bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      >
        <div
          className="relative mx-4 w-full max-w-sm overflow-hidden rounded-2xl border border-purple-500/20 bg-[#0d0718] shadow-2xl shadow-purple-900/50"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-xs text-white/20 transition-colors hover:text-white/60"
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    ) : null

  return (
    <div
      className="relative min-h-[1200px] font-sans text-white"
      style={{ fontFamily: "system-ui,sans-serif", background: "#07030f" }}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute left-1/2 top-0 h-[500px] w-[600px] -translate-x-1/2 rounded-full bg-purple-600/15 blur-[120px]" />
        <div className="absolute -right-20 top-1/3 h-[300px] w-[300px] rounded-full bg-indigo-600/10 blur-[80px]" />
      </div>

      {/* Login Modal */}
      <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
        <div className="p-8">
          <h2 className="mb-1 text-xl font-bold text-white">Welcome back</h2>
          <p className="mb-6 text-xs text-white/35">Sign in to your Aura account</p>
          <div className="mb-3 grid grid-cols-2 gap-2">
            <button className="flex items-center justify-center gap-2 rounded-xl border border-purple-500/20 bg-purple-500/[0.06] py-2.5 text-xs font-semibold text-white/50 transition-colors hover:border-purple-500/30 hover:text-white/70">
              <Globe className="h-3.5 w-3.5" /> Google
            </button>
            <button className="flex items-center justify-center gap-2 rounded-xl border border-purple-500/20 bg-purple-500/[0.06] py-2.5 text-xs font-semibold text-white/50 transition-colors hover:border-purple-500/30 hover:text-white/70">
              <Lock className="h-3.5 w-3.5" /> GitHub
            </button>
          </div>
          <div className="relative my-4 flex items-center">
            <div className="flex-1 border-t border-white/[0.06]" />
            <span className="mx-3 text-[10px] text-white/20">or</span>
            <div className="flex-1 border-t border-white/[0.06]" />
          </div>
          <div className="space-y-3">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-purple-500/40"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-purple-500/40"
            />
          </div>
          <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-600/20 transition-opacity hover:opacity-90">
            Sign in
          </button>
          <p className="mt-4 text-center text-xs text-white/30">
            New here?{" "}
            <button
              className="text-purple-400 hover:text-purple-300"
              onClick={() => {
                setLoginOpen(false)
                setPreorderOpen(true)
              }}
            >
              Pre-order now
            </button>
          </p>
        </div>
      </Modal>

      {/* Pre-order Modal */}
      <Modal open={preorderOpen} onClose={() => setPreorderOpen(false)}>
        <div className="p-8">
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/[0.08] px-3 py-1 text-[10px] font-semibold text-purple-300">
            <Sparkles className="h-3 w-3" /> Early access — 40% off
          </div>
          <h2 className="mb-1 mt-3 text-xl font-bold text-white">Reserve your spot</h2>
          <p className="mb-6 text-xs text-white/35">Join 12,000+ on the waitlist</p>
          <div className="space-y-3">
            <input
              type="text"
              placeholder="Your name"
              className="w-full rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-purple-500/40"
            />
            <input
              type="email"
              placeholder="Email address"
              className="w-full rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-2.5 text-sm text-white outline-none placeholder:text-white/20 focus:border-purple-500/40"
            />
          </div>
          <button className="mt-4 w-full rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 py-2.5 text-sm font-semibold text-white shadow-lg shadow-purple-600/20 transition-opacity hover:opacity-90">
            Reserve my spot
          </button>
          <p className="mt-3 text-center text-[10px] text-white/25">
            No payment required to join waitlist
          </p>
        </div>
      </Modal>

      {/* Nav */}
      <nav className="relative z-10 flex items-center justify-between px-6 py-5 md:px-10 md:py-6">
        <div className="flex items-center gap-2">
          <div className="flex h-7 w-7 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          <span className="text-sm font-bold tracking-tight">Aura</span>
        </div>
        <div className="hidden items-center gap-1 md:flex">
          {["Features", "Pricing", "Reviews", "About"].map((l) => (
            <button
              key={l}
              className="rounded-lg px-3 py-1.5 text-xs text-white/35 transition-colors hover:text-white/60"
            >
              {l}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setLoginOpen(true)}
            className="px-3 py-1.5 text-xs text-white/35 transition-colors hover:text-white/60"
          >
            Sign in
          </button>
          <button
            onClick={() => setPreorderOpen(true)}
            className="rounded-lg bg-gradient-to-r from-purple-600 to-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-purple-600/20 transition-opacity hover:opacity-90"
          >
            Pre-order
          </button>
        </div>
      </nav>

      {/* Hero */}
      <div className="relative z-10 px-6 pb-20 pt-16 text-center md:px-10 md:pt-24">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-500/20 bg-purple-500/[0.08] px-4 py-2 text-xs font-semibold text-purple-300">
          <Sparkles className="h-3.5 w-3.5" />
          Early access now open — 40% founding discount
        </div>
        <h1 className="mx-auto mb-6 max-w-4xl text-[44px] font-extrabold leading-[1.05] tracking-tight md:text-[60px]">
          The creative tool you've
          <br />
          <span className="bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
            been waiting for.
          </span>
        </h1>
        <p className="mx-auto mb-10 max-w-lg text-[15px] leading-relaxed text-white/40">
          Aura transforms how teams create, collaborate, and ship beautiful products. Powered by AI,
          built for the way you work.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={() => setPreorderOpen(true)}
            className="group flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 px-8 py-4 text-sm font-bold text-white shadow-2xl shadow-purple-600/30 transition-opacity hover:opacity-90"
          >
            Reserve early access{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={() => setLoginOpen(true)}
            className="rounded-2xl border border-white/[0.08] px-8 py-4 text-sm text-white/40 transition-all hover:border-white/[0.15] hover:text-white/60"
          >
            Sign in
          </button>
        </div>
        <p className="mt-5 text-xs text-white/25">12,400+ on the waitlist · Ships Q2 2025</p>
      </div>

      {/* Product mockup */}
      <div className="relative z-10 mx-6 mb-16 overflow-hidden rounded-2xl border border-purple-500/15 bg-white/[0.02] shadow-2xl shadow-purple-900/30 backdrop-blur-sm md:mx-10">
        <div className="flex items-center gap-2 border-b border-white/[0.05] bg-white/[0.02] px-4 py-3">
          {["bg-[#ff5f57]", "bg-[#ffbc2e]", "bg-[#28c840]"].map((c, i) => (
            <div key={i} className={`h-2 w-2 rounded-full ${c}`} />
          ))}
          <span className="ml-2 text-[10px] text-white/20">Aura Studio</span>
        </div>
        <div className="grid md:grid-cols-[200px_1fr]">
          {/* Sidebar */}
          <div className="border-b border-white/[0.04] p-4 md:border-b-0 md:border-r">
            <p className="mb-3 text-[9px] font-semibold uppercase tracking-widest text-white/25">
              Workspace
            </p>
            {["Dashboard", "Projects", "Assets", "Templates", "Settings"].map((l, i) => (
              <div
                key={l}
                className={`mb-1 flex items-center gap-2 rounded-lg px-3 py-2 text-[11px] ${i === 1 ? "bg-purple-600/20 font-semibold text-purple-300" : "text-white/25 hover:text-white/50"}`}
              >
                <div
                  className={`h-1.5 w-1.5 rounded-full ${i === 1 ? "bg-purple-400" : "bg-white/10"}`}
                />
                {l}
              </div>
            ))}
          </div>
          {/* Main */}
          <div className="p-5">
            <div className="mb-4 flex items-center justify-between">
              <h3 className="text-sm font-bold text-white">Projects</h3>
              <button className="rounded-lg bg-purple-600/80 px-3 py-1.5 text-[10px] font-semibold text-white">
                + New project
              </button>
            </div>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
              {[
                {
                  name: "Brand refresh",
                  status: "In progress",
                  color: "from-violet-900/40 to-indigo-900/40",
                },
                {
                  name: "App redesign",
                  status: "Review",
                  color: "from-purple-900/40 to-pink-900/40",
                },
                { name: "Landing page", status: "Done", color: "from-indigo-900/40 to-sky-900/40" },
              ].map(({ name, status, color }) => (
                <div
                  key={name}
                  className={`group relative h-24 cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br ${color} border border-white/[0.05] p-4`}
                >
                  <div
                    className="absolute inset-0 opacity-[0.06]"
                    style={{
                      backgroundImage:
                        "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                      backgroundSize: "16px 16px",
                    }}
                  />
                  <p className="relative text-[11px] font-semibold text-white/80">{name}</p>
                  <span className="relative mt-1 inline-block rounded-full border border-white/10 bg-white/[0.06] px-2 py-0.5 text-[9px] text-white/40">
                    {status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div className="relative z-10 border-t border-white/[0.04] px-6 py-16 md:px-10">
        <h2 className="mb-2 text-center text-2xl font-bold tracking-tight md:text-3xl">
          Loved by creators
        </h2>
        <p className="mb-12 text-center text-sm text-white/35">Beta users are already in love</p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              q: "This is what Figma should have been in 2025. Everything is just faster.",
              name: "Mia Torres",
              role: "Product designer at Stripe",
            },
            {
              q: "The AI layer is magic. I went from concept to shipped in a single afternoon.",
              name: "James Park",
              role: "Founder, Lattice Studio",
            },
            {
              q: "Finally a tool that matches how my brain works. Aura is the creative OS.",
              name: "Ola Lindqvist",
              role: "Creative director, Forma",
            },
          ].map(({ q, name, role }) => (
            <div key={name} className="rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6">
              <div className="mb-4 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mb-5 text-sm leading-relaxed text-white/50">&ldquo;{q}&rdquo;</p>
              <div>
                <p className="text-xs font-semibold text-white">{name}</p>
                <p className="text-[11px] text-white/30">{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 px-6 pb-24 pt-8 text-center md:px-10">
        <div className="mx-auto max-w-2xl rounded-3xl border border-purple-500/20 bg-purple-600/[0.08] p-12 md:p-16">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl">
            Be first in line
          </h2>
          <p className="mx-auto mb-8 max-w-md text-sm text-white/40">
            Reserve your founding member spot today and lock in 40% off forever.
          </p>
          <button
            onClick={() => setPreorderOpen(true)}
            className="group inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-purple-600 to-indigo-600 px-10 py-4 text-sm font-bold text-white shadow-2xl shadow-purple-600/30 transition-opacity hover:opacity-90"
          >
            Reserve early access{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="mt-4 text-xs text-white/25">12,400+ people joined already</p>
        </div>
      </div>
    </div>
  )
}
