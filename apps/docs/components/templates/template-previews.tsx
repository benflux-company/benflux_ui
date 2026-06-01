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
            className="relative mx-4 w-full max-w-sm overflow-hidden rounded-2xl border shadow-2xl"
            style={{
              background: isDark ? "#0e0e17" : "#ffffff",
              borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLoginOpen(false)}
              className="absolute right-4 top-4 text-xs"
              style={{ color: isDark ? "rgba(255,255,255,0.25)" : "rgba(15,23,42,0.3)" }}
            >
              ✕
            </button>
            <div className="p-8">
              <div className="mb-6 flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600">
                  <Zap className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="font-bold" style={{ color: text }}>
                  Nova
                </span>
              </div>
              <h2 className="mb-1 text-xl font-bold" style={{ color: text }}>
                Welcome back
              </h2>
              <p
                className="mb-6 text-sm"
                style={{ color: isDark ? "rgba(255,255,255,0.4)" : "rgba(15,23,42,0.5)" }}
              >
                Sign in to your Nova account
              </p>
              <div className="mb-4">
                <label
                  className="mb-1.5 block text-xs font-medium"
                  style={{ color: isDark ? "rgba(255,255,255,0.5)" : "rgba(15,23,42,0.55)" }}
                >
                  Email
                </label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  className="w-full rounded-xl border px-4 py-2.5 text-sm outline-none"
                  style={{
                    borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.1)",
                    background: isDark ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.03)",
                    color: text,
                  }}
                />
              </div>
              <div className="mb-6">
                <div className="mb-1.5 flex items-center justify-between">
                  <label
                    className="text-xs font-medium"
                    style={{ color: isDark ? "rgba(255,255,255,0.5)" : "rgba(15,23,42,0.55)" }}
                  >
                    Password
                  </label>
                  <button className="text-xs text-blue-400 hover:text-blue-300">
                    Forgot password?
                  </button>
                </div>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full rounded-xl border px-4 py-2.5 text-sm outline-none"
                  style={{
                    borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.1)",
                    background: isDark ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.03)",
                    color: text,
                  }}
                />
              </div>
              <button className="mb-4 w-full rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-500">
                Sign in
              </button>
              <div className="mb-4 flex items-center gap-3">
                <div
                  className="h-px flex-1"
                  style={{ background: isDark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.06)" }}
                />
                <span
                  className="text-[11px]"
                  style={{ color: isDark ? "rgba(255,255,255,0.25)" : "rgba(15,23,42,0.35)" }}
                >
                  or continue with
                </span>
                <div
                  className="h-px flex-1"
                  style={{ background: isDark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.06)" }}
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                {["GitHub", "Google"].map((p) => (
                  <button
                    key={p}
                    className="rounded-xl border py-2.5 text-xs font-medium transition-colors"
                    style={{
                      borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.1)",
                      background: isDark ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.02)",
                      color: isDark ? "rgba(255,255,255,0.6)" : "rgba(15,23,42,0.6)",
                    }}
                  >
                    {p}
                  </button>
                ))}
              </div>
              <p
                className="mt-5 text-center text-xs"
                style={{ color: isDark ? "rgba(255,255,255,0.3)" : "rgba(15,23,42,0.4)" }}
              >
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
        </div>
      )}

      {/* Signup Modal */}
      {signupOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 backdrop-blur-sm"
          onClick={() => setSignupOpen(false)}
        >
          <div
            className="relative mx-4 w-full max-w-sm overflow-hidden rounded-2xl border shadow-2xl"
            style={{
              background: isDark ? "#0e0e17" : "#ffffff",
              borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSignupOpen(false)}
              className="absolute right-4 top-4 text-xs"
              style={{ color: isDark ? "rgba(255,255,255,0.25)" : "rgba(15,23,42,0.3)" }}
            >
              ✕
            </button>
            <div className="p-8">
              <div className="mb-6 flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600">
                  <Zap className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="font-bold" style={{ color: text }}>
                  Nova
                </span>
              </div>
              <h2 className="mb-1 text-xl font-bold" style={{ color: text }}>
                Create your account
              </h2>
              <p
                className="mb-6 text-sm"
                style={{ color: isDark ? "rgba(255,255,255,0.4)" : "rgba(15,23,42,0.5)" }}
              >
                Start shipping faster today — free forever
              </p>
              {[
                { label: "Full name", type: "text", ph: "Jane Smith" },
                { label: "Work email", type: "email", ph: "you@company.com" },
                { label: "Password", type: "password", ph: "Min. 8 characters" },
              ].map(({ label, type, ph }) => (
                <div key={label} className="mb-4">
                  <label
                    className="mb-1.5 block text-xs font-medium"
                    style={{ color: isDark ? "rgba(255,255,255,0.5)" : "rgba(15,23,42,0.55)" }}
                  >
                    {label}
                  </label>
                  <input
                    type={type}
                    placeholder={ph}
                    className="w-full rounded-xl border px-4 py-2.5 text-sm outline-none"
                    style={{
                      borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.1)",
                      background: isDark ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.03)",
                      color: text,
                    }}
                  />
                </div>
              ))}
              <button className="mb-4 w-full rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-500">
                Create account
              </button>
              <p
                className="text-center text-[11px]"
                style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(15,23,42,0.35)" }}
              >
                By signing up you agree to our{" "}
                <button className="text-blue-400 hover:text-blue-300">Terms</button> and{" "}
                <button className="text-blue-400 hover:text-blue-300">Privacy Policy</button>
              </p>
              <p
                className="mt-4 text-center text-xs"
                style={{ color: isDark ? "rgba(255,255,255,0.3)" : "rgba(15,23,42,0.4)" }}
              >
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
        </div>
      )}

      {/* Nav */}
      <div
        className="sticky top-0 z-50 border-b"
        style={{
          background: isDark ? "rgba(7,7,13,0.85)" : "rgba(248,250,252,0.85)",
          borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(15,23,42,0.06)",
          backdropFilter: "blur(12px)",
        }}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-bold" style={{ color: text }}>
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
              className="flex items-center rounded-lg p-0.5"
              style={{
                border: `1px solid ${isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)"}`,
                background: isDark ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.04)",
              }}
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
      </div>

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
        <div
          className="overflow-hidden rounded-2xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.4)]"
          style={{
            border: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(15,23,42,0.08)"}`,
          }}
        >
          <div
            className="flex items-center gap-2 px-4 py-3"
            style={{
              borderBottom: `1px solid ${isDark ? "rgba(255,255,255,0.05)" : "rgba(15,23,42,0.06)"}`,
              background: isDark ? "#0e0e17" : "#f1f5f9",
            }}
          >
            <div className="flex gap-1.5">
              <div className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#ffbc2e]" />
              <div className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <div
              className="mx-3 flex flex-1 items-center gap-2 rounded-md px-3 py-1"
              style={{ background: isDark ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.05)" }}
            >
              <Lock className="h-2.5 w-2.5 text-emerald-400" />
              <span
                className="text-[10px]"
                style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(15,23,42,0.35)" }}
              >
                nova.io/dashboard
              </span>
            </div>
            <Bell
              className="h-3.5 w-3.5"
              style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(15,23,42,0.3)" }}
            />
            <Settings
              className="h-3.5 w-3.5"
              style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(15,23,42,0.3)" }}
            />
          </div>
          <div
            className="flex flex-col md:flex-row"
            style={{ background: isDark ? "#0b0b12" : "#f8fafc" }}
          >
            <div
              className="shrink-0 border-b border-r-0 px-3 py-4 md:w-44 md:border-b-0 md:border-r md:py-5"
              style={{
                borderColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.07)",
              }}
            >
              <div className="mb-4 flex items-center gap-2 px-2">
                <div className="h-5 w-5 rounded-md bg-blue-600" />
                <span className="text-xs font-bold" style={{ color: text }}>
                  Acme Corp
                </span>
                <ChevronRight
                  className="ml-auto h-3 w-3 rotate-90"
                  style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(15,23,42,0.3)" }}
                />
              </div>
              <div
                className="mb-1 px-2 text-[9px] font-semibold uppercase tracking-widest"
                style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(15,23,42,0.3)" }}
              >
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
                  className={`mb-0.5 flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-left text-[11px] ${active ? "bg-blue-600/15 font-medium text-blue-400" : ""}`}
                  style={
                    !active
                      ? {
                          color: isDark ? "rgba(255,255,255,0.35)" : "rgba(15,23,42,0.45)",
                        }
                      : {}
                  }
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  {label}
                </button>
              ))}
              <div
                className="mb-1 mt-4 px-2 text-[9px] font-semibold uppercase tracking-widest"
                style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(15,23,42,0.3)" }}
              >
                Settings
              </div>
              {[
                { icon: Shield, label: "Security" },
                { icon: Settings, label: "Preferences" },
              ].map(({ icon: Icon, label }) => (
                <button
                  key={label}
                  className="mb-0.5 flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-left text-[11px]"
                  style={{ color: isDark ? "rgba(255,255,255,0.35)" : "rgba(15,23,42,0.45)" }}
                >
                  <Icon className="h-3.5 w-3.5 shrink-0" />
                  {label}
                </button>
              ))}
            </div>
            <div className="flex-1 p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h3 className="text-sm font-semibold" style={{ color: text }}>
                    Overview
                  </h3>
                  <p
                    className="text-[11px]"
                    style={{ color: isDark ? "rgba(255,255,255,0.3)" : "rgba(15,23,42,0.4)" }}
                  >
                    Last 30 days · All regions
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="rounded-lg px-3 py-1.5 text-[10px]"
                    style={{
                      border: `1px solid ${isDark ? "rgba(255,255,255,0.07)" : "rgba(15,23,42,0.08)"}`,
                      background: isDark ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.03)",
                      color: isDark ? "rgba(255,255,255,0.4)" : "rgba(15,23,42,0.45)",
                    }}
                  >
                    30 days
                  </button>
                  <button className="rounded-lg bg-blue-600 px-3 py-1.5 text-[10px] font-semibold text-white hover:bg-blue-500">
                    New deploy
                  </button>
                </div>
              </div>
              <div className="mb-5 grid grid-cols-2 gap-3 md:grid-cols-4">
                {[
                  { label: "MRR", val: "$2.4M", delta: "+18%" },
                  { label: "Active users", val: "14.2K", delta: "+31%" },
                  { label: "Uptime", val: "99.99%", delta: "30d avg" },
                  { label: "P95 latency", val: "42ms", delta: "−6ms" },
                ].map(({ label, val, delta }) => (
                  <div
                    key={label}
                    className="rounded-xl p-4"
                    style={{
                      border: `1px solid ${isDark ? "rgba(255,255,255,0.05)" : "rgba(15,23,42,0.07)"}`,
                      background: isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.8)",
                    }}
                  >
                    <p
                      className="mb-1 text-[10px]"
                      style={{ color: isDark ? "rgba(255,255,255,0.25)" : "rgba(15,23,42,0.4)" }}
                    >
                      {label}
                    </p>
                    <p className="text-xl font-bold" style={{ color: text }}>
                      {val}
                    </p>
                    <p className="mt-1 text-[10px] font-medium text-emerald-500">{delta}</p>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                <div
                  className="rounded-xl p-4 md:col-span-2"
                  style={{
                    border: `1px solid ${isDark ? "rgba(255,255,255,0.05)" : "rgba(15,23,42,0.07)"}`,
                    background: isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.8)",
                  }}
                >
                  <div className="mb-3 flex items-center justify-between">
                    <p
                      className="text-[11px] font-medium"
                      style={{ color: isDark ? "rgba(255,255,255,0.6)" : "rgba(15,23,42,0.55)" }}
                    >
                      Revenue trend
                    </p>
                    <div className="flex gap-1">
                      {["1w", "1m", "3m", "1y"].map((t, i) => (
                        <button
                          key={t}
                          className={`rounded px-2 py-0.5 text-[9px] ${i === 1 ? "bg-blue-600/20 text-blue-500" : ""}`}
                          style={
                            i !== 1
                              ? { color: isDark ? "rgba(255,255,255,0.25)" : "rgba(15,23,42,0.35)" }
                              : {}
                          }
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
                      <span
                        key={m}
                        className="text-[9px]"
                        style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(15,23,42,0.3)" }}
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className="rounded-xl p-4"
                  style={{
                    border: `1px solid ${isDark ? "rgba(255,255,255,0.05)" : "rgba(15,23,42,0.07)"}`,
                    background: isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.8)",
                  }}
                >
                  <p
                    className="mb-3 text-[11px] font-medium"
                    style={{ color: isDark ? "rgba(255,255,255,0.6)" : "rgba(15,23,42,0.55)" }}
                  >
                    Recent activity
                  </p>
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
                          <p
                            className="text-[10px]"
                            style={{
                              color: isDark ? "rgba(255,255,255,0.5)" : "rgba(15,23,42,0.55)",
                            }}
                          >
                            {msg}
                          </p>
                          <p
                            className="text-[9px]"
                            style={{
                              color: isDark ? "rgba(255,255,255,0.2)" : "rgba(15,23,42,0.35)",
                            }}
                          >
                            {time}
                          </p>
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
              <div
                className="mb-5 inline-flex rounded-xl p-3"
                style={{
                  border: `1px solid ${isDark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.07)"}`,
                  background: isDark ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.04)",
                }}
              >
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
              className="relative rounded-2xl border p-8"
              style={
                hl
                  ? {
                      borderColor: "rgba(59,130,246,0.4)",
                      background: isDark ? "rgba(59,130,246,0.07)" : "rgba(239,246,255,1)",
                    }
                  : {
                      borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.06)",
                      background: isDark ? "rgba(255,255,255,0.02)" : "rgba(15,23,42,0.02)",
                    }
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
        <div
          className="relative overflow-hidden rounded-3xl p-16 text-center"
          style={{
            border: `1px solid ${isDark ? "rgba(59,130,246,0.2)" : "rgba(59,130,246,0.25)"}`,
            background: isDark ? "rgba(59,130,246,0.07)" : "rgba(239,246,255,1)",
          }}
        >
          <div className="pointer-events-none absolute left-1/2 top-0 h-[200px] w-[400px] -translate-x-1/2 rounded-full bg-blue-600/10 blur-[60px]" />
          <div className="relative z-10">
            <h2 className="mb-4 text-[40px] font-extrabold tracking-tight" style={{ color: text }}>
              Ready to ship faster?
            </h2>
            <p
              className="mx-auto mb-8 max-w-md text-[15px] leading-relaxed"
              style={{ color: isDark ? "rgba(255,255,255,0.35)" : "rgba(15,23,42,0.5)" }}
            >
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
                className="rounded-xl border px-8 py-3.5 text-sm transition-colors"
                style={{
                  borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.12)",
                  background: isDark ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.03)",
                  color: isDark ? "rgba(255,255,255,0.5)" : "rgba(15,23,42,0.55)",
                }}
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
          <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-5 md:gap-8">
            <div className="col-span-2 md:col-span-2">
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
            className="flex flex-col gap-3 border-t pt-6 md:flex-row md:items-center md:justify-between"
            style={{ borderColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.06)" }}
          >
            <p
              className="text-[11px]"
              style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(15,23,42,0.35)" }}
            >
              © {new Date().getFullYear()} Nova, Inc. · Powered by{" "}
              <span className="font-semibold">Benflux UI</span>
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
  const [activeTheme, setActiveTheme] = React.useState<"system" | "light" | "dark">("light")
  const [loginOpen, setLoginOpen] = React.useState(false)
  const [projectOpen, setProjectOpen] = React.useState(false)

  const isDark = activeTheme === "dark"
  const bg = isDark ? "#111111" : "#f8f6f1"
  const text = isDark ? "#ffffff" : "#1a1a1a"
  const muted = isDark ? "rgba(255,255,255,0.4)" : "rgba(26,26,26,0.45)"
  const border = isDark ? "rgba(255,255,255,0.07)" : "rgba(26,26,26,0.08)"
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "#ffffff"

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
          className="relative mx-4 w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl"
          style={{ background: isDark ? "#1a1a1a" : "#f8f6f1", border: `1px solid ${border}` }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-xs"
            style={{ color: muted }}
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    ) : null

  return (
    <div
      className="relative min-h-[1400px] font-sans"
      style={{ fontFamily: "system-ui,sans-serif", background: bg, color: text }}
    >
      <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
        <div className="p-8">
          <h2 className="mb-1 text-xl font-black" style={{ color: text }}>
            Client portal
          </h2>
          <p className="mb-6 text-xs" style={{ color: muted }}>
            Access your project files & invoices
          </p>
          {[
            { label: "Email", type: "email", ph: "you@company.com" },
            { label: "Password", type: "password", ph: "••••••••" },
          ].map(({ label, type, ph }) => (
            <div key={label} className="mb-3">
              <label className="mb-1.5 block text-xs font-medium" style={{ color: muted }}>
                {label}
              </label>
              <input
                type={type}
                placeholder={ph}
                className="w-full rounded-xl px-4 py-2.5 text-sm outline-none"
                style={{
                  border: `1px solid ${border}`,
                  background: isDark ? "rgba(255,255,255,0.04)" : "rgba(26,26,26,0.03)",
                  color: text,
                }}
              />
            </div>
          ))}
          <button
            className="mt-2 w-full rounded-xl py-2.5 text-sm font-bold text-white transition-colors"
            style={{ background: text }}
          >
            Sign in
          </button>
          <p className="mt-4 text-center text-xs" style={{ color: muted }}>
            New client?{" "}
            <button
              className="font-semibold underline"
              style={{ color: text }}
              onClick={() => {
                setLoginOpen(false)
                setProjectOpen(true)
              }}
            >
              Start a project
            </button>
          </p>
        </div>
      </Modal>

      <Modal open={projectOpen} onClose={() => setProjectOpen(false)}>
        <div className="p-8">
          <h2 className="mb-1 text-xl font-black" style={{ color: text }}>
            Start a project
          </h2>
          <p className="mb-6 text-xs" style={{ color: muted }}>
            Tell us about your brand and goals
          </p>
          {[
            { label: "Company", type: "text", ph: "Acme Inc." },
            { label: "Email", type: "email", ph: "you@company.com" },
          ].map(({ label, type, ph }) => (
            <div key={label} className="mb-3">
              <label className="mb-1.5 block text-xs font-medium" style={{ color: muted }}>
                {label}
              </label>
              <input
                type={type}
                placeholder={ph}
                className="w-full rounded-xl px-4 py-2.5 text-sm outline-none"
                style={{
                  border: `1px solid ${border}`,
                  background: isDark ? "rgba(255,255,255,0.04)" : "rgba(26,26,26,0.03)",
                  color: text,
                }}
              />
            </div>
          ))}
          <div className="mb-4">
            <label className="mb-1.5 block text-xs font-medium" style={{ color: muted }}>
              About the project
            </label>
            <textarea
              rows={3}
              placeholder="Describe your vision..."
              className="w-full resize-none rounded-xl px-4 py-2.5 text-sm outline-none"
              style={{
                border: `1px solid ${border}`,
                background: isDark ? "rgba(255,255,255,0.04)" : "rgba(26,26,26,0.03)",
                color: text,
              }}
            />
          </div>
          <button
            className="w-full rounded-xl py-2.5 text-sm font-bold text-white"
            style={{ background: text }}
          >
            Send inquiry
          </button>
        </div>
      </Modal>

      {/* Nav */}
      <div
        className="sticky top-0 z-50"
        style={{
          background: isDark ? "rgba(17,17,17,0.9)" : "rgba(248,246,241,0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${border}`,
        }}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-8">
            <span
              className="text-sm font-black uppercase tracking-[0.15em]"
              style={{ color: text }}
            >
              Zenith
            </span>
            <nav className="hidden items-center gap-1 md:flex">
              {["Work", "Studio", "Services", "Journal"].map((l) => (
                <button
                  key={l}
                  className="rounded-md px-2.5 py-1.5 text-xs font-medium transition-colors"
                  style={{ color: muted }}
                >
                  {l}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="hidden items-center rounded-lg p-0.5 md:flex"
              style={{ background: isDark ? "rgba(255,255,255,0.06)" : "rgba(26,26,26,0.06)" }}
            >
              {(["System", "Light", "Dark"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTheme(t.toLowerCase() as "system" | "light" | "dark")}
                  className="rounded-md px-2.5 py-1 text-[10px] font-medium transition-all"
                  style={{
                    background:
                      activeTheme === t.toLowerCase()
                        ? isDark
                          ? "rgba(255,255,255,0.12)"
                          : "rgba(26,26,26,0.1)"
                        : "transparent",
                    color: activeTheme === t.toLowerCase() ? text : muted,
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
            <button
              onClick={() => setLoginOpen(true)}
              className="px-3 py-1.5 text-xs transition-colors"
              style={{ color: muted }}
            >
              Log in
            </button>
            <button
              onClick={() => setProjectOpen(true)}
              className="rounded-full border px-5 py-2 text-xs font-semibold transition-colors"
              style={{
                borderColor: isDark ? "rgba(255,255,255,0.15)" : "rgba(26,26,26,0.15)",
                color: text,
              }}
            >
              Start a project
            </button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div
        className="mx-auto max-w-6xl border-t px-4 pb-16 pt-14 md:px-8 md:pb-20 md:pt-16"
        style={{ borderColor: border }}
      >
        <div className="grid gap-8 lg:grid-cols-[1fr_auto]">
          <div>
            <p
              className="mb-8 text-[10px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: muted }}
            >
              Independent creative studio — Est. 2016
            </p>
            <h1
              className="text-[48px] font-black leading-[0.95] tracking-tight md:text-[64px]"
              style={{ color: text }}
            >
              We shape
              <br />
              <span
                className="font-light italic"
                style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(26,26,26,0.2)" }}
              >
                brands
              </span>
              <br />
              that endure.
            </h1>
          </div>
          <div className="flex max-w-xs flex-col justify-end">
            <p className="text-sm leading-relaxed" style={{ color: muted }}>
              Zenith is a multidisciplinary studio working at the intersection of brand, digital,
              and motion.
            </p>
            <button
              onClick={() => setProjectOpen(true)}
              className="group mt-6 flex w-fit items-center gap-2 text-sm font-semibold"
              style={{ color: text }}
            >
              View selected work{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
        <div
          className="mt-16 grid grid-cols-2 border-t md:grid-cols-4"
          style={{ borderColor: border }}
        >
          {[
            ["140+", "Projects"],
            ["$2B+", "Client revenue"],
            ["9", "Awards"],
            ["3", "Offices"],
          ].map(([n, l]) => (
            <div
              key={l}
              className="border-r py-6 pr-6 last:border-r-0"
              style={{ borderColor: border }}
            >
              <p className="text-3xl font-black tracking-tight" style={{ color: text }}>
                {n}
              </p>
              <p
                className="mt-1 text-xs font-medium uppercase tracking-wider"
                style={{ color: muted }}
              >
                {l}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Portfolio */}
      <div
        className="mx-auto max-w-6xl border-t px-4 py-14 md:px-8 md:py-16"
        style={{ borderColor: border }}
      >
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-xl font-bold" style={{ color: text }}>
            Selected work
          </h2>
          <button className="text-xs font-medium transition-colors" style={{ color: muted }}>
            All projects →
          </button>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
          {[
            {
              client: "Meridian Capital",
              label: "Brand system",
              year: "2024",
              bg: isDark ? "#222" : "#1a1a1a",
            },
            {
              client: "Lune Studio",
              label: "Campaign identity",
              year: "2024",
              bg: isDark ? "#2a2520" : "#e7e0d4",
            },
            {
              client: "Arch Software",
              label: "Digital product",
              year: "2023",
              bg: isDark ? "#25211a" : "#fef3c7",
            },
            {
              client: "Vega Capital",
              label: "Annual report",
              year: "2023",
              bg: isDark ? "#1a1f2a" : "#1e293b",
            },
            {
              client: "Pattern NYC",
              label: "Motion & film",
              year: "2023",
              bg: isDark ? "#2a1a1f" : "#ffe4e6",
            },
            {
              client: "Croft Ventures",
              label: "Web experience",
              year: "2024",
              bg: isDark ? "#1a2030" : "#e0f2fe",
            },
          ].map(({ client, label, year, bg: cardColor }) => (
            <div
              key={client}
              className="group relative aspect-[4/3] overflow-hidden rounded-xl"
              style={{ background: cardColor }}
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
            </div>
          ))}
        </div>
      </div>

      {/* Services */}
      <div
        className="mx-auto max-w-6xl border-t px-4 py-14 md:px-8 md:py-16"
        style={{ borderColor: border }}
      >
        <div className="grid gap-12 lg:grid-cols-2">
          <div>
            <h2 className="mb-2 text-3xl font-bold" style={{ color: text }}>
              What we do
            </h2>
            <p className="text-sm" style={{ color: muted }}>
              End-to-end creative services for brands at every stage.
            </p>
          </div>
          <div style={{ borderTop: `1px solid ${border}` }}>
            {[
              ["Brand Identity", "Strategy, visual identity, guidelines, naming"],
              ["Digital Design", "UX, web, product, prototyping"],
              ["Motion & Film", "Brand films, 3D, social content, animation"],
              ["Development", "Next.js, React, TypeScript, CMS, ecommerce"],
            ].map(([t, d], i) => (
              <button
                key={t}
                className="group flex w-full items-center justify-between py-5 text-left"
                style={{ borderBottom: `1px solid ${border}` }}
              >
                <div className="flex items-center gap-6">
                  <span className="w-6 text-[10px] font-semibold" style={{ color: muted }}>
                    0{i + 1}
                  </span>
                  <div>
                    <p className="text-sm font-semibold" style={{ color: text }}>
                      {t}
                    </p>
                    <p className="text-xs" style={{ color: muted }}>
                      {d}
                    </p>
                  </div>
                </div>
                <ChevronRight
                  className="h-4 w-4 transition-all group-hover:translate-x-0.5"
                  style={{ color: muted }}
                />
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-6xl px-4 pb-16 md:px-8">
        <div className="rounded-3xl p-12 text-center md:p-16" style={{ background: text }}>
          <p
            className="mb-2 text-[10px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: isDark ? "rgba(0,0,0,0.3)" : "rgba(255,255,255,0.3)" }}
          >
            Get in touch
          </p>
          <h2
            className="mb-6 text-3xl font-black tracking-tight md:text-4xl"
            style={{ color: isDark ? "#000" : "#fff" }}
          >
            Have a project in mind?
          </h2>
          <p
            className="mx-auto mb-10 max-w-sm text-sm"
            style={{ color: isDark ? "rgba(0,0,0,0.4)" : "rgba(255,255,255,0.5)" }}
          >
            We take on select engagements. Tell us about your brand and goals.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={() => setProjectOpen(true)}
              className="rounded-full px-10 py-3.5 text-sm font-bold transition-colors"
              style={{ background: isDark ? "#000" : "#fff", color: isDark ? "#fff" : "#1a1a1a" }}
            >
              Start a project
            </button>
            <button
              onClick={() => setLoginOpen(true)}
              className="rounded-full border px-8 py-3.5 text-sm transition-colors"
              style={{
                borderColor: isDark ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)",
                color: isDark ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.6)",
              }}
            >
              Client login
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-12" style={{ borderColor: border }}>
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            <div className="col-span-2 md:col-span-1">
              <span
                className="mb-3 block text-sm font-black uppercase tracking-[0.15em]"
                style={{ color: text }}
              >
                Zenith
              </span>
              <p className="mb-4 text-xs leading-relaxed" style={{ color: muted }}>
                Multidisciplinary creative studio. Est. 2016.
              </p>
              <p className="text-xs" style={{ color: muted }}>
                studio@zenith.co
              </p>
            </div>
            {[
              { heading: "Studio", links: ["About", "Team", "Awards", "Careers"] },
              {
                heading: "Work",
                links: ["Brand Identity", "Digital Design", "Motion", "Development"],
              },
              { heading: "Connect", links: ["Instagram", "LinkedIn", "Dribbble", "Journal"] },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <p
                  className="mb-4 text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: muted }}
                >
                  {heading}
                </p>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l}>
                      <button className="text-xs transition-colors" style={{ color: muted }}>
                        {l}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            className="flex flex-col gap-3 border-t pt-6 md:flex-row md:items-center md:justify-between"
            style={{ borderColor: border }}
          >
            <p className="text-[11px]" style={{ color: muted }}>
              © {new Date().getFullYear()} Zenith Studio. · Powered by{" "}
              <span className="font-semibold">Benflux UI</span>
            </p>
            <div className="flex gap-4">
              {["Privacy", "Terms"].map((l) => (
                <button key={l} className="text-[11px] transition-colors" style={{ color: muted }}>
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

// ─── Pulse: Bold Startup — Loom / Notion aesthetic ───────────────────────────
export function PulsePreview() {
  const [activeTheme, setActiveTheme] = React.useState<"system" | "light" | "dark">("light")
  const [loginOpen, setLoginOpen] = React.useState(false)
  const [signupOpen, setSignupOpen] = React.useState(false)

  const isDark = activeTheme === "dark"
  const bg = isDark ? "#0d0d0d" : "#ffffff"
  const text = isDark ? "#ffffff" : "#111111"
  const muted = isDark ? "rgba(255,255,255,0.4)" : "rgba(17,17,17,0.45)"
  const border = isDark ? "rgba(255,255,255,0.07)" : "rgba(17,17,17,0.08)"
  const cardBg = isDark ? "rgba(255,255,255,0.03)" : "#ffffff"
  const orange = "#ff6b35"

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
          className="relative mx-4 w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl"
          style={{ background: isDark ? "#1a1a1a" : "#ffffff", border: `1px solid ${border}` }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-xs"
            style={{ color: muted }}
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    ) : null

  return (
    <div
      className="relative min-h-[1400px] font-sans"
      style={{ fontFamily: "system-ui,sans-serif", background: bg, color: text }}
    >
      <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
        <div className="p-8">
          <h2 className="mb-1 text-xl font-black" style={{ color: text }}>
            Welcome back
          </h2>
          <p className="mb-6 text-xs" style={{ color: muted }}>
            Sign in to your Pulse workspace
          </p>
          <div className="mb-3 grid grid-cols-2 gap-2">
            {["Google", "GitHub"].map((s) => (
              <button
                key={s}
                className="flex items-center justify-center gap-2 rounded-xl border py-2.5 text-xs font-semibold transition-colors"
                style={{
                  borderColor: border,
                  color: muted,
                  background: isDark ? "rgba(255,255,255,0.03)" : "rgba(17,17,17,0.02)",
                }}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="relative my-4 flex items-center">
            <div className="flex-1 border-t" style={{ borderColor: border }} />
            <span className="mx-3 text-[10px]" style={{ color: muted }}>
              or
            </span>
            <div className="flex-1 border-t" style={{ borderColor: border }} />
          </div>
          {[
            { label: "Email", type: "email", ph: "you@company.com" },
            { label: "Password", type: "password", ph: "••••••••" },
          ].map(({ label, type, ph }) => (
            <div key={label} className="mb-3">
              <label className="mb-1.5 block text-xs font-medium" style={{ color: muted }}>
                {label}
              </label>
              <input
                type={type}
                placeholder={ph}
                className="w-full rounded-xl px-4 py-2.5 text-sm outline-none"
                style={{
                  border: `1px solid ${border}`,
                  background: isDark ? "rgba(255,255,255,0.04)" : "rgba(17,17,17,0.03)",
                  color: text,
                }}
              />
            </div>
          ))}
          <button
            className="mt-2 w-full rounded-xl py-2.5 text-sm font-bold text-white"
            style={{ background: orange }}
          >
            Sign in
          </button>
          <p className="mt-4 text-center text-xs" style={{ color: muted }}>
            No account?{" "}
            <button
              className="font-semibold"
              style={{ color: orange }}
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

      <Modal open={signupOpen} onClose={() => setSignupOpen(false)}>
        <div className="p-8">
          <h2 className="mb-1 text-xl font-black" style={{ color: text }}>
            Get started free
          </h2>
          <p className="mb-6 text-xs" style={{ color: muted }}>
            14-day trial, no credit card required
          </p>
          {[
            { label: "Your name", type: "text", ph: "Jane Smith" },
            { label: "Work email", type: "email", ph: "you@company.com" },
            { label: "Password", type: "password", ph: "Min. 8 characters" },
          ].map(({ label, type, ph }) => (
            <div key={label} className="mb-3">
              <label className="mb-1.5 block text-xs font-medium" style={{ color: muted }}>
                {label}
              </label>
              <input
                type={type}
                placeholder={ph}
                className="w-full rounded-xl px-4 py-2.5 text-sm outline-none"
                style={{
                  border: `1px solid ${border}`,
                  background: isDark ? "rgba(255,255,255,0.04)" : "rgba(17,17,17,0.03)",
                  color: text,
                }}
              />
            </div>
          ))}
          <button
            className="mt-2 w-full rounded-xl py-2.5 text-sm font-bold text-white"
            style={{ background: orange }}
          >
            Create account
          </button>
          <p className="mt-4 text-center text-xs" style={{ color: muted }}>
            Already have one?{" "}
            <button
              className="font-semibold"
              style={{ color: orange }}
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
      <div
        className="sticky top-0 z-10"
        style={{
          background: isDark ? "rgba(13,13,13,0.9)" : "rgba(255,255,255,0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${border}`,
        }}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div
                className="flex h-7 w-7 items-center justify-center rounded-lg"
                style={{ background: orange }}
              >
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-bold" style={{ color: text }}>
                Pulse
              </span>
            </div>
            <nav className="hidden items-center gap-1 md:flex">
              {["Product", "Customers", "Pricing", "Blog"].map((l) => (
                <button
                  key={l}
                  className="rounded-lg px-3 py-1.5 text-sm transition-colors"
                  style={{ color: muted }}
                >
                  {l}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="hidden items-center rounded-lg p-0.5 md:flex"
              style={{ background: isDark ? "rgba(255,255,255,0.06)" : "rgba(17,17,17,0.05)" }}
            >
              {(["System", "Light", "Dark"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTheme(t.toLowerCase() as "system" | "light" | "dark")}
                  className="rounded-md px-2.5 py-1 text-[10px] font-medium capitalize transition-all"
                  style={{
                    background:
                      activeTheme === t.toLowerCase()
                        ? isDark
                          ? "rgba(255,255,255,0.12)"
                          : "rgba(17,17,17,0.1)"
                        : "transparent",
                    color: activeTheme === t.toLowerCase() ? text : muted,
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
            <button
              onClick={() => setLoginOpen(true)}
              className="px-3 py-1.5 text-sm transition-colors"
              style={{ color: muted }}
            >
              Log in
            </button>
            <button
              onClick={() => setSignupOpen(true)}
              className="rounded-lg px-4 py-2 text-sm font-semibold text-white"
              style={{ background: orange }}
            >
              Get started free
            </button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="mx-auto max-w-6xl px-4 pb-20 pt-20 md:px-8 md:pt-24">
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold"
          style={{
            borderColor: "rgba(255,107,53,0.2)",
            background: "rgba(255,107,53,0.06)",
            color: orange,
          }}
        >
          <Circle className="h-2 w-2 fill-current" /> Now with AI-powered task prioritization
        </div>
        <h1
          className="mb-6 text-[48px] font-black leading-[1.0] tracking-tight md:text-[64px]"
          style={{ color: text }}
        >
          Do your best work.
          <br />
          <span
            style={{
              WebkitTextStroke: isDark ? "2px rgba(255,255,255,0.15)" : "2px #e5e7eb",
              color: "transparent",
            }}
          >
            Every single day.
          </span>
        </h1>
        <p className="mb-10 max-w-xl text-lg leading-relaxed" style={{ color: muted }}>
          Pulse keeps your team focused, aligned, and moving fast — without the meetings, the noise,
          or the bottlenecks.
        </p>
        <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <button
            onClick={() => setSignupOpen(true)}
            className="flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-bold text-white shadow-lg"
            style={{ background: orange, boxShadow: "0 8px 24px rgba(255,107,53,0.25)" }}
          >
            Start free — no card needed <ArrowRight className="h-4 w-4" />
          </button>
          <div className="flex items-center gap-2 text-sm" style={{ color: muted }}>
            <Check className="h-4 w-4 text-emerald-500" /> 14-day trial
          </div>
        </div>
      </div>

      {/* App mockup */}
      <div className="mx-auto mb-16 max-w-6xl px-4 md:px-8">
        <div
          className="overflow-hidden rounded-2xl shadow-xl"
          style={{ border: `1px solid ${border}` }}
        >
          <div className="flex flex-col md:flex-row">
            <div
              className="border-b p-4 md:w-44 md:border-b-0 md:border-r"
              style={{
                background: isDark ? "rgba(255,255,255,0.02)" : "#f9fafb",
                borderColor: border,
              }}
            >
              <p
                className="mb-3 text-[9px] font-semibold uppercase tracking-widest"
                style={{ color: muted }}
              >
                My workspace
              </p>
              {["Inbox", "Today", "Projects", "Team", "Reports"].map((l, i) => (
                <div
                  key={l}
                  className="mb-0.5 flex items-center gap-2 rounded-lg px-2 py-1.5 text-[11px]"
                  style={{
                    background: i === 1 ? "rgba(255,107,53,0.08)" : "transparent",
                    color: i === 1 ? orange : muted,
                    fontWeight: i === 1 ? 600 : 400,
                  }}
                >
                  <div
                    className="h-1.5 w-1.5 rounded-full"
                    style={{
                      background: i === 1 ? orange : isDark ? "rgba(255,255,255,0.1)" : "#e5e7eb",
                    }}
                  />
                  {l}
                </div>
              ))}
            </div>
            <div className="flex-1 p-5" style={{ background: cardBg }}>
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-bold" style={{ color: text }}>
                  Today — 4 tasks
                </h3>
                <button
                  className="rounded-lg px-3 py-1 text-[10px] font-semibold text-white"
                  style={{ background: orange }}
                >
                  Add task
                </button>
              </div>
              <div className="space-y-2">
                {[
                  { t: "Finalize Q3 investor deck", tag: "Finance", done: true },
                  { t: "Review product roadmap", tag: "Product", done: false },
                  { t: "Write release notes v2.1", tag: "Marketing", done: false },
                  { t: "Sync with design team", tag: "Design", done: false },
                ].map(({ t, tag, done }) => (
                  <div
                    key={t}
                    className="flex items-center gap-3 rounded-xl border px-4 py-3"
                    style={{
                      borderColor: done ? (isDark ? "rgba(255,255,255,0.04)" : "#f3f4f6") : border,
                      background: done ? (isDark ? "rgba(255,255,255,0.01)" : "#f9fafb") : cardBg,
                    }}
                  >
                    <div
                      className="flex h-4 w-4 shrink-0 items-center justify-center rounded-full border-2"
                      style={{
                        borderColor: done
                          ? "#34d399"
                          : isDark
                            ? "rgba(255,255,255,0.15)"
                            : "#e5e7eb",
                        background: done ? "#34d399" : "transparent",
                      }}
                    >
                      {done && <Check className="h-2.5 w-2.5 text-white" />}
                    </div>
                    <p
                      className="flex-1 text-xs font-medium"
                      style={{
                        color: done ? muted : text,
                        textDecoration: done ? "line-through" : "none",
                      }}
                    >
                      {t}
                    </p>
                    <span
                      className="rounded-full border px-2 py-0.5 text-[9px] font-semibold"
                      style={{ borderColor: border, color: muted }}
                    >
                      {tag}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logos */}
      <div className="border-t py-10" style={{ borderColor: border }}>
        <p className="mb-8 text-center text-sm" style={{ color: muted }}>
          Trusted by high-performance teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 px-4">
          {["Linear", "Vercel", "Notion", "Figma", "Stripe"].map((n) => (
            <div
              key={n}
              className="rounded-lg border px-4 py-2 text-xs font-bold"
              style={{
                borderColor: border,
                color: muted,
                background: isDark ? "rgba(255,255,255,0.02)" : "#f9fafb",
              }}
            >
              {n}
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div
        className="mx-auto max-w-6xl border-t px-4 py-16 md:px-8"
        style={{ borderColor: border }}
      >
        <div className="grid gap-4 md:grid-cols-3">
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
            <div
              key={name}
              className="rounded-2xl border p-6"
              style={{ borderColor: border, background: cardBg }}
            >
              <div className="mb-4 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mb-4 text-sm leading-relaxed" style={{ color: muted }}>
                &ldquo;{q}&rdquo;
              </p>
              <p className="text-xs font-bold" style={{ color: text }}>
                {name}
              </p>
              <p className="text-xs" style={{ color: muted }}>
                {role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pricing */}
      <div
        className="mx-auto max-w-6xl border-t px-4 py-16 md:px-8"
        style={{ borderColor: border }}
      >
        <h2 className="mb-2 text-center text-3xl font-black tracking-tight" style={{ color: text }}>
          Simple pricing
        </h2>
        <p className="mb-12 text-center text-sm" style={{ color: muted }}>
          No surprises. Cancel anytime.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              name: "Starter",
              price: "$0",
              desc: "For individuals & small teams.",
              cta: "Get started",
              hl: false,
            },
            {
              name: "Pro",
              price: "$12",
              desc: "For growing teams.",
              cta: "Start free trial",
              hl: true,
            },
            {
              name: "Business",
              price: "$39",
              desc: "For scaling organizations.",
              cta: "Contact sales",
              hl: false,
            },
          ].map(({ name, price, desc, cta, hl }) => (
            <div
              key={name}
              className="rounded-2xl border p-6"
              style={{
                borderColor: hl ? `${orange}40` : border,
                background: hl ? `rgba(255,107,53,0.04)` : cardBg,
              }}
            >
              <p className="mb-1 text-sm font-bold" style={{ color: text }}>
                {name}
              </p>
              <p className="mb-1 text-3xl font-black" style={{ color: text }}>
                {price}
                <span className="text-sm font-normal" style={{ color: muted }}>
                  /mo
                </span>
              </p>
              <p className="mb-5 text-xs" style={{ color: muted }}>
                {desc}
              </p>
              <button
                onClick={() => setSignupOpen(true)}
                className="w-full rounded-xl py-2.5 text-xs font-semibold transition-all"
                style={
                  hl
                    ? { background: orange, color: "#fff" }
                    : { border: `1px solid ${border}`, color: muted }
                }
              >
                {cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-6xl px-4 pb-20 text-center md:px-8">
        <h2 className="mb-4 text-4xl font-black tracking-tight md:text-5xl" style={{ color: text }}>
          Ready to move faster?
        </h2>
        <p className="mb-10 text-lg" style={{ color: muted }}>
          Join 80,000+ teams already using Pulse.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={() => setSignupOpen(true)}
            className="rounded-2xl px-12 py-4 text-base font-black text-white shadow-2xl"
            style={{ background: orange, boxShadow: "0 16px 48px rgba(255,107,53,0.2)" }}
          >
            Get started — it's free
          </button>
          <button
            onClick={() => setLoginOpen(true)}
            className="rounded-2xl border px-8 py-4 text-base font-semibold transition-colors"
            style={{ borderColor: border, color: muted }}
          >
            Sign in
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-12" style={{ borderColor: border }}>
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-5 md:gap-8">
            <div className="col-span-2">
              <div className="mb-3 flex items-center gap-2">
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-lg"
                  style={{ background: orange }}
                >
                  <Zap className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold" style={{ color: text }}>
                  Pulse
                </span>
              </div>
              <p className="mb-4 max-w-[220px] text-xs leading-relaxed" style={{ color: muted }}>
                The productivity platform for high-performance teams.
              </p>
            </div>
            {[
              { heading: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
              { heading: "Company", links: ["About", "Blog", "Careers", "Press"] },
              { heading: "Legal", links: ["Privacy", "Terms", "Security", "Cookies"] },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <p
                  className="mb-4 text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: muted }}
                >
                  {heading}
                </p>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l}>
                      <button className="text-xs" style={{ color: muted }}>
                        {l}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            className="flex flex-col gap-3 border-t pt-6 md:flex-row md:items-center md:justify-between"
            style={{ borderColor: border }}
          >
            <p className="text-[11px]" style={{ color: muted }}>
              © {new Date().getFullYear()} Pulse, Inc. · Powered by{" "}
              <span className="font-semibold">Benflux UI</span>
            </p>
            <div className="flex gap-4">
              {["Privacy", "Terms"].map((l) => (
                <button key={l} className="text-[11px]" style={{ color: muted }}>
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

// ─── Orbit: Analytics SaaS — Mixpanel / PostHog aesthetic ────────────────────
export function OrbitPreview() {
  const [activeTheme, setActiveTheme] = React.useState<"system" | "light" | "dark">("dark")
  const [loginOpen, setLoginOpen] = React.useState(false)
  const [signupOpen, setSignupOpen] = React.useState(false)

  const isDark = activeTheme === "dark" || activeTheme === "system"
  const bg = isDark ? "#0a0f1e" : "#f0f9ff"
  const text = isDark ? "#ffffff" : "#0f172a"
  const muted = isDark ? "rgba(255,255,255,0.35)" : "rgba(15,23,42,0.45)"
  const border = isDark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.08)"
  const cardBg = isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.8)"
  const sky = "#0ea5e9"

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
          className="relative mx-4 w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl"
          style={{ background: isDark ? "#0d1220" : "#ffffff", border: `1px solid ${border}` }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-xs"
            style={{ color: muted }}
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    ) : null

  return (
    <div
      className="relative min-h-[1400px] font-sans"
      style={{ fontFamily: "system-ui,sans-serif", background: bg, color: text }}
    >
      <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
        <div className="p-8">
          <h2 className="mb-1 text-xl font-bold" style={{ color: text }}>
            Sign in to Orbit
          </h2>
          <p className="mb-6 text-xs" style={{ color: muted }}>
            Your analytics, all in one place
          </p>
          <div className="mb-3 grid grid-cols-2 gap-2">
            {["Google", "GitHub"].map((s) => (
              <button
                key={s}
                className="flex items-center justify-center gap-2 rounded-xl border py-2.5 text-xs font-semibold"
                style={{
                  borderColor: border,
                  color: muted,
                  background: isDark ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.02)",
                }}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="relative my-4 flex items-center">
            <div className="flex-1 border-t" style={{ borderColor: border }} />
            <span className="mx-3 text-[10px]" style={{ color: muted }}>
              or
            </span>
            <div className="flex-1 border-t" style={{ borderColor: border }} />
          </div>
          {[
            { label: "Email", type: "email", ph: "you@company.com" },
            { label: "Password", type: "password", ph: "••••••••" },
          ].map(({ label, type, ph }) => (
            <div key={label} className="mb-3">
              <label className="mb-1.5 block text-xs font-medium" style={{ color: muted }}>
                {label}
              </label>
              <input
                type={type}
                placeholder={ph}
                className="w-full rounded-xl px-4 py-2.5 text-sm outline-none"
                style={{
                  border: `1px solid ${border}`,
                  background: isDark ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.02)",
                  color: text,
                }}
              />
            </div>
          ))}
          <button
            className="mt-2 w-full rounded-xl py-2.5 text-sm font-semibold text-white"
            style={{ background: sky }}
          >
            Sign in
          </button>
          <p className="mt-4 text-center text-xs" style={{ color: muted }}>
            No account?{" "}
            <button
              className="font-semibold"
              style={{ color: sky }}
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

      <Modal open={signupOpen} onClose={() => setSignupOpen(false)}>
        <div className="p-8">
          <h2 className="mb-1 text-xl font-bold" style={{ color: text }}>
            Start your free trial
          </h2>
          <p className="mb-6 text-xs" style={{ color: muted }}>
            14 days free, no credit card required
          </p>
          {[
            { label: "Full name", type: "text", ph: "Jane Smith" },
            { label: "Work email", type: "email", ph: "you@company.com" },
            { label: "Password", type: "password", ph: "Min. 8 characters" },
          ].map(({ label, type, ph }) => (
            <div key={label} className="mb-3">
              <label className="mb-1.5 block text-xs font-medium" style={{ color: muted }}>
                {label}
              </label>
              <input
                type={type}
                placeholder={ph}
                className="w-full rounded-xl px-4 py-2.5 text-sm outline-none"
                style={{
                  border: `1px solid ${border}`,
                  background: isDark ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.02)",
                  color: text,
                }}
              />
            </div>
          ))}
          <button
            className="mt-2 w-full rounded-xl py-2.5 text-sm font-semibold text-white"
            style={{ background: sky }}
          >
            Create free account
          </button>
          <p className="mt-4 text-center text-xs" style={{ color: muted }}>
            Already have one?{" "}
            <button
              className="font-semibold"
              style={{ color: sky }}
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
      <div
        className="sticky top-0 z-10"
        style={{
          background: isDark ? "rgba(10,15,30,0.9)" : "rgba(240,249,255,0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${border}`,
        }}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div
                className="flex h-6 w-6 items-center justify-center rounded-md"
                style={{ background: sky }}
              >
                <TrendingUp className="h-3.5 w-3.5 text-white" />
              </div>
              <span className="text-sm font-bold" style={{ color: text }}>
                Orbit
              </span>
            </div>
            <nav className="hidden items-center gap-1 md:flex">
              {["Product", "Integrations", "Customers", "Pricing", "Docs"].map((l) => (
                <button
                  key={l}
                  className="rounded-md px-3 py-1.5 text-xs transition-colors"
                  style={{ color: muted }}
                >
                  {l}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="hidden items-center rounded-lg p-0.5 md:flex"
              style={{ background: isDark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.05)" }}
            >
              {(["System", "Light", "Dark"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTheme(t.toLowerCase() as "system" | "light" | "dark")}
                  className="rounded-md px-2.5 py-1 text-[10px] font-medium capitalize transition-all"
                  style={{
                    background:
                      activeTheme === t.toLowerCase()
                        ? isDark
                          ? "rgba(255,255,255,0.1)"
                          : "rgba(15,23,42,0.08)"
                        : "transparent",
                    color: activeTheme === t.toLowerCase() ? text : muted,
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
            <button
              onClick={() => setLoginOpen(true)}
              className="px-3 py-1.5 text-xs transition-colors"
              style={{ color: muted }}
            >
              Sign in
            </button>
            <button
              onClick={() => setSignupOpen(true)}
              className="rounded-lg px-4 py-1.5 text-xs font-semibold text-white transition-colors"
              style={{ background: sky }}
            >
              Start free trial
            </button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="mx-auto max-w-6xl px-4 pb-14 pt-20 text-center md:px-8 md:pt-24">
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs"
          style={{
            borderColor: "rgba(14,165,233,0.2)",
            background: "rgba(14,165,233,0.06)",
            color: sky,
          }}
        >
          <Star className="h-3 w-3" /> Rated #1 product analytics tool — G2 Winter 2024
        </div>
        <h1
          className="mx-auto mb-6 max-w-3xl text-[40px] font-extrabold leading-[1.05] tracking-tight md:text-[52px]"
          style={{ color: text }}
        >
          Understand your users.
          <br />
          <span style={{ color: sky }}>Grow your product.</span>
        </h1>
        <p className="mx-auto mb-10 max-w-lg text-[15px] leading-relaxed" style={{ color: muted }}>
          Orbit auto-captures every user interaction and turns it into clarity. No SQL, no data team
          required — just answers.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={() => setSignupOpen(true)}
            className="flex items-center gap-2 rounded-xl px-7 py-3 text-sm font-semibold text-white shadow-lg"
            style={{ background: sky, boxShadow: "0 8px 24px rgba(14,165,233,0.25)" }}
          >
            Start free — 14 days <ArrowRight className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={() => setLoginOpen(true)}
            className="rounded-xl border px-7 py-3 text-sm transition-all"
            style={{ borderColor: border, color: muted }}
          >
            View live demo
          </button>
        </div>
      </div>

      {/* Dashboard */}
      <div className="mx-auto mb-14 max-w-6xl px-4 md:px-8">
        <div
          className="overflow-hidden rounded-2xl shadow-2xl"
          style={{ border: `1px solid ${border}` }}
        >
          <div
            className="flex items-center gap-2 border-b px-4 py-3"
            style={{ background: isDark ? "#0d1220" : "#e0f2fe", borderColor: border }}
          >
            {["bg-[#ff5f57]", "bg-[#ffbc2e]", "bg-[#28c840]"].map((c, i) => (
              <div key={i} className={`h-2 w-2 rounded-full ${c}`} />
            ))}
            <span className="ml-2 text-[10px]" style={{ color: muted }}>
              Orbit — Analytics
            </span>
          </div>
          <div className="p-5" style={{ background: isDark ? "#0d1220" : "#f0f9ff" }}>
            <div className="mb-4 flex flex-wrap items-center gap-2">
              {["Overview", "Funnels", "Retention", "Cohorts"].map((t, i) => (
                <button
                  key={t}
                  className="rounded-md px-3 py-1 text-[10px] font-medium transition-colors"
                  style={{
                    background:
                      i === 0
                        ? isDark
                          ? "rgba(14,165,233,0.15)"
                          : "rgba(14,165,233,0.1)"
                        : "transparent",
                    color: i === 0 ? sky : muted,
                  }}
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
                  className="rounded-xl border p-4"
                  style={{ borderColor: border, background: cardBg }}
                >
                  <p className="mb-2 text-[10px]" style={{ color: muted }}>
                    {label}
                  </p>
                  <p className="text-xl font-bold" style={{ color: text }}>
                    {value}
                  </p>
                  <p className="mt-1 text-[10px] text-emerald-400">{change}</p>
                </div>
              ))}
            </div>
            <div
              className="mt-3 rounded-xl border p-4"
              style={{ borderColor: border, background: cardBg }}
            >
              <p className="mb-4 text-xs font-medium" style={{ color: muted }}>
                Active users — last 30 days
              </p>
              <div className="flex items-end gap-1" style={{ height: 56 }}>
                {[
                  30, 45, 40, 55, 50, 65, 70, 60, 80, 75, 90, 85, 95, 88, 100, 92, 88, 95, 102, 98,
                  110, 105, 115, 112, 118, 108, 122, 130, 125, 140,
                ].map((h, i) => (
                  <div
                    key={i}
                    className="flex-1 rounded-sm"
                    style={{
                      height: `${(h / 140) * 100}%`,
                      background: sky,
                      opacity: 0.4 + (i / 30) * 0.6,
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Logos */}
      <div className="border-t py-10" style={{ borderColor: border }}>
        <p className="mb-8 text-center text-xs" style={{ color: muted }}>
          Trusted by data-driven teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 px-4">
          {["Stripe", "Notion", "Linear", "Vercel", "Loom", "Figma"].map((n) => (
            <div
              key={n}
              className="rounded-lg border px-4 py-2 text-xs font-semibold"
              style={{ borderColor: border, color: muted, background: cardBg }}
            >
              {n}
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div
        className="mx-auto max-w-6xl border-t px-4 py-16 md:px-8"
        style={{ borderColor: border }}
      >
        <h2
          className="mb-2 text-center text-3xl font-extrabold tracking-tight"
          style={{ color: text }}
        >
          Analytics that actually answers questions
        </h2>
        <p className="mb-12 text-center text-sm" style={{ color: muted }}>
          Built for product teams, loved by engineers.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Activity,
              title: "Auto-capture events",
              desc: "No manual tracking. Orbit captures every click and interaction automatically.",
              accent: sky,
            },
            {
              icon: BarChart3,
              title: "Funnel analysis",
              desc: "See where users drop off and optimize your conversion at every step.",
              accent: "#10b981",
            },
            {
              icon: Users,
              title: "Cohort retention",
              desc: "Understand which features drive long-term retention and which drive churn.",
              accent: "#a78bfa",
            },
          ].map(({ icon: Icon, title, desc, accent }) => (
            <div
              key={title}
              className="rounded-2xl border p-7"
              style={{ borderColor: border, background: cardBg }}
            >
              <div
                className="mb-4 inline-flex rounded-xl p-3"
                style={{
                  background: isDark ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.04)",
                  border: `1px solid ${border}`,
                }}
              >
                <Icon className="h-5 w-5" style={{ color: accent }} />
              </div>
              <h3 className="mb-2 font-semibold" style={{ color: text }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: muted }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-6xl px-4 pb-20 md:px-8">
        <div
          className="rounded-3xl border p-12 text-center md:p-16"
          style={{
            borderColor: "rgba(14,165,233,0.2)",
            background: isDark ? "rgba(14,165,233,0.05)" : "rgba(14,165,233,0.04)",
          }}
        >
          <h2
            className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl"
            style={{ color: text }}
          >
            Start understanding your users
          </h2>
          <p className="mx-auto mb-8 max-w-md text-sm leading-relaxed" style={{ color: muted }}>
            Join 5,000+ product teams who use Orbit to make better decisions.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={() => setSignupOpen(true)}
              className="flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold text-white shadow-lg"
              style={{ background: sky }}
            >
              Start free trial <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => setLoginOpen(true)}
              className="rounded-xl border px-8 py-3.5 text-sm transition-all"
              style={{ borderColor: border, color: muted }}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-12" style={{ borderColor: border }}>
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-5 md:gap-8">
            <div className="col-span-2">
              <div className="mb-3 flex items-center gap-2">
                <div
                  className="flex h-6 w-6 items-center justify-center rounded-md"
                  style={{ background: sky }}
                >
                  <TrendingUp className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="font-bold" style={{ color: text }}>
                  Orbit
                </span>
              </div>
              <p className="mb-4 max-w-[220px] text-xs leading-relaxed" style={{ color: muted }}>
                Product analytics for modern teams that ship fast.
              </p>
            </div>
            {[
              { heading: "Product", links: ["Features", "Pricing", "Integrations", "Changelog"] },
              { heading: "Company", links: ["About", "Blog", "Careers", "Press"] },
              { heading: "Legal", links: ["Privacy", "Terms", "Security", "GDPR"] },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <p
                  className="mb-4 text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: muted }}
                >
                  {heading}
                </p>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l}>
                      <button className="text-xs" style={{ color: muted }}>
                        {l}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            className="flex flex-col gap-3 border-t pt-6 md:flex-row md:items-center md:justify-between"
            style={{ borderColor: border }}
          >
            <p className="text-[11px]" style={{ color: muted }}>
              © {new Date().getFullYear()} Orbit Analytics, Inc. · Powered by{" "}
              <span className="font-semibold">Benflux UI</span>
            </p>
            <div className="flex gap-4">
              {["Privacy", "Terms"].map((l) => (
                <button key={l} className="text-[11px]" style={{ color: muted }}>
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

// ─── Lumina: Creative Agency — IDEO / Instrument aesthetic ───────────────────
export function LuminaPreview() {
  const [activeTheme, setActiveTheme] = React.useState<"system" | "light" | "dark">("dark")
  const [loginOpen, setLoginOpen] = React.useState(false)
  const [contactOpen, setContactOpen] = React.useState(false)

  const isDark = activeTheme === "dark" || activeTheme === "system"
  const bg = isDark ? "#0c0c0c" : "#faf5eb"
  const text = isDark ? "#ffffff" : "#111111"
  const muted = isDark ? "rgba(255,255,255,0.35)" : "rgba(17,17,17,0.4)"
  const border = isDark ? "rgba(255,255,255,0.06)" : "rgba(17,17,17,0.08)"
  const cardBg = isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.6)"
  const gold = "#f59e0b"

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
          className="relative mx-4 w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl"
          style={{ background: isDark ? "#161616" : "#faf5eb", border: `1px solid ${border}` }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-xs"
            style={{ color: muted }}
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    ) : null

  return (
    <div
      className="relative min-h-[1400px] font-sans"
      style={{ fontFamily: "system-ui,sans-serif", background: bg, color: text }}
    >
      <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
        <div className="p-8">
          <h2 className="mb-1 text-xl font-black" style={{ color: text }}>
            Client portal
          </h2>
          <p className="mb-6 text-xs" style={{ color: muted }}>
            Access your project dashboard
          </p>
          {[
            { label: "Email", type: "email", ph: "you@company.com" },
            { label: "Password", type: "password", ph: "••••••••" },
          ].map(({ label, type, ph }) => (
            <div key={label} className="mb-3">
              <label className="mb-1.5 block text-xs font-medium" style={{ color: muted }}>
                {label}
              </label>
              <input
                type={type}
                placeholder={ph}
                className="w-full rounded-xl px-4 py-2.5 text-sm outline-none"
                style={{
                  border: `1px solid ${border}`,
                  background: isDark ? "rgba(255,255,255,0.04)" : "rgba(17,17,17,0.03)",
                  color: text,
                }}
              />
            </div>
          ))}
          <button
            className="mt-2 w-full rounded-xl py-2.5 text-sm font-black text-black"
            style={{ background: gold }}
          >
            Sign in
          </button>
          <p className="mt-4 text-center text-xs" style={{ color: muted }}>
            New client?{" "}
            <button
              className="font-semibold"
              style={{ color: gold }}
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

      <Modal open={contactOpen} onClose={() => setContactOpen(false)}>
        <div className="p-8">
          <h2 className="mb-1 text-xl font-black" style={{ color: text }}>
            Let's work together
          </h2>
          <p className="mb-6 text-xs" style={{ color: muted }}>
            Tell us about your project
          </p>
          {[
            { label: "Name", type: "text", ph: "Jane Smith" },
            { label: "Email", type: "email", ph: "you@company.com" },
          ].map(({ label, type, ph }) => (
            <div key={label} className="mb-3">
              <label className="mb-1.5 block text-xs font-medium" style={{ color: muted }}>
                {label}
              </label>
              <input
                type={type}
                placeholder={ph}
                className="w-full rounded-xl px-4 py-2.5 text-sm outline-none"
                style={{
                  border: `1px solid ${border}`,
                  background: isDark ? "rgba(255,255,255,0.04)" : "rgba(17,17,17,0.03)",
                  color: text,
                }}
              />
            </div>
          ))}
          <div className="mb-4">
            <label className="mb-1.5 block text-xs font-medium" style={{ color: muted }}>
              Your vision
            </label>
            <textarea
              rows={3}
              placeholder="Describe your brand challenge..."
              className="w-full resize-none rounded-xl px-4 py-2.5 text-sm outline-none"
              style={{
                border: `1px solid ${border}`,
                background: isDark ? "rgba(255,255,255,0.04)" : "rgba(17,17,17,0.03)",
                color: text,
              }}
            />
          </div>
          <button
            className="w-full rounded-xl py-2.5 text-sm font-black text-black"
            style={{ background: gold }}
          >
            Send inquiry
          </button>
        </div>
      </Modal>

      {/* Nav */}
      <div
        className="sticky top-0 z-10"
        style={{
          background: isDark ? "rgba(12,12,12,0.9)" : "rgba(250,245,235,0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${border}`,
        }}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-8">
            <span
              className="text-sm font-black uppercase tracking-[0.25em]"
              style={{ color: text }}
            >
              Lumina
            </span>
            <nav className="hidden items-center gap-6 md:flex">
              {["Work", "Studio", "Services", "Journal"].map((l) => (
                <button
                  key={l}
                  className="text-xs font-medium tracking-wide transition-colors"
                  style={{ color: muted }}
                >
                  {l}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="hidden items-center rounded-lg p-0.5 md:flex"
              style={{ background: isDark ? "rgba(255,255,255,0.06)" : "rgba(17,17,17,0.06)" }}
            >
              {(["System", "Light", "Dark"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTheme(t.toLowerCase() as "system" | "light" | "dark")}
                  className="rounded-md px-2.5 py-1 text-[10px] font-medium capitalize transition-all"
                  style={{
                    background:
                      activeTheme === t.toLowerCase()
                        ? isDark
                          ? "rgba(255,255,255,0.1)"
                          : "rgba(17,17,17,0.1)"
                        : "transparent",
                    color: activeTheme === t.toLowerCase() ? text : muted,
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
            <button
              onClick={() => setLoginOpen(true)}
              className="px-3 py-1.5 text-xs transition-colors"
              style={{ color: muted }}
            >
              Log in
            </button>
            <button
              onClick={() => setContactOpen(true)}
              className="rounded-full border px-5 py-2 text-xs transition-all"
              style={{
                borderColor: isDark ? "rgba(255,255,255,0.15)" : "rgba(17,17,17,0.15)",
                color: text,
              }}
            >
              Start a project
            </button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="mx-auto max-w-6xl overflow-hidden px-4 pb-20 pt-12 md:px-8 md:pb-24 md:pt-14">
        <div className="mb-10 flex items-center gap-4">
          <div className="h-px flex-1" style={{ background: border }} />
          <p
            className="text-[10px] font-semibold uppercase tracking-[0.25em]"
            style={{ color: muted }}
          >
            Creative studio — New York
          </p>
          <div className="h-px flex-1" style={{ background: border }} />
        </div>
        <h1
          className="text-[56px] font-black leading-[0.88] tracking-tight md:text-[80px]"
          style={{ color: text }}
        >
          We make
          <br />
          <span
            className="font-extralight italic"
            style={{
              WebkitTextStroke: isDark ? "1.5px rgba(255,255,255,0.2)" : "1.5px rgba(17,17,17,0.2)",
              color: "transparent",
            }}
          >
            brands
          </span>
          <span style={{ color: text }}> feel</span>
          <br />
          <span
            style={{
              background: "linear-gradient(90deg,#f59e0b,#fb923c)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            inevitable.
          </span>
        </h1>
        <div className="mt-10 flex flex-col items-start gap-6 md:mt-12 md:flex-row md:items-end md:justify-between">
          <p className="max-w-xs text-sm leading-relaxed" style={{ color: muted }}>
            Strategic design studio. We partner with the world's most ambitious companies to create
            brands that endure.
          </p>
          <button
            onClick={() => setContactOpen(true)}
            className="group flex h-14 w-14 shrink-0 items-center justify-center rounded-full transition-colors"
            style={{ background: gold }}
          >
            <ArrowRight className="h-5 w-5 text-black transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Portfolio */}
      <div
        className="mx-auto max-w-6xl border-t px-4 py-14 md:px-8 md:py-16"
        style={{ borderColor: border }}
      >
        <div className="mb-8 flex items-center justify-between">
          <p className="text-xs font-semibold uppercase tracking-widest" style={{ color: muted }}>
            Selected projects
          </p>
          <button className="text-xs transition-colors" style={{ color: muted }}>
            All work →
          </button>
        </div>
        <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
          {[
            {
              title: "Meridian",
              cat: "Global banking rebrand",
              year: "2024",
              gfrom: isDark ? "#1a1a2e" : "#dde1ff",
              gto: isDark ? "#16213e" : "#c5ceff",
            },
            {
              title: "Solstice",
              cat: "Tech startup identity",
              year: "2024",
              gfrom: isDark ? "#2a1a00" : "#fef3c7",
              gto: isDark ? "#1a1000" : "#fde68a",
            },
            {
              title: "Archetype",
              cat: "Fashion e-commerce",
              year: "2023",
              gfrom: isDark ? "#2a0a0f" : "#ffe4e6",
              gto: isDark ? "#1a0508" : "#fecdd3",
            },
            {
              title: "Forma",
              cat: "B2B SaaS product design",
              year: "2023",
              gfrom: isDark ? "#0a1a2a" : "#e0f2fe",
              gto: isDark ? "#050f18" : "#bae6fd",
            },
          ].map(({ title, cat, year, gfrom, gto }) => (
            <div
              key={title}
              className="group relative h-48 overflow-hidden rounded-2xl"
              style={{
                background: `linear-gradient(135deg, ${gfrom}, ${gto})`,
                border: `1px solid ${border}`,
              }}
            >
              <div className="absolute inset-0 flex flex-col justify-between p-6">
                <span
                  className="text-[9px] font-semibold uppercase tracking-widest"
                  style={{ color: muted }}
                >
                  {year}
                </span>
                <div>
                  <p className="text-xl font-black tracking-tight" style={{ color: text }}>
                    {title}
                  </p>
                  <p className="text-[10px]" style={{ color: muted }}>
                    {cat}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Awards */}
      <div
        className="mx-auto max-w-6xl border-t px-4 py-12 md:px-8 md:py-14"
        style={{ borderColor: border }}
      >
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {[
            { n: "14×", l: "Cannes Lions", sub: "Gold & Silver" },
            { n: "9×", l: "D&AD Pencil", sub: "Wood to Black" },
            { n: "30+", l: "Awwwards", sub: "SOTD & SOTY" },
            { n: "5×", l: "Clio Awards", sub: "Grand Prix" },
          ].map(({ n, l, sub }) => (
            <div key={l}>
              <p className="text-3xl font-black" style={{ color: gold }}>
                {n}
              </p>
              <p className="mt-1 text-sm font-semibold" style={{ color: text }}>
                {l}
              </p>
              <p className="text-[10px]" style={{ color: muted }}>
                {sub}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div
        className="mx-auto max-w-6xl border-t px-4 py-16 md:px-8 md:py-20"
        style={{ borderColor: border }}
      >
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-4xl font-black tracking-tight md:text-5xl" style={{ color: text }}>
              Next project?
            </h2>
            <p className="mt-3 max-w-sm text-sm" style={{ color: muted }}>
              We work with brands who are ready to think differently. Let's talk.
            </p>
          </div>
          <div className="flex flex-col items-start gap-3 md:items-end">
            <button
              onClick={() => setContactOpen(true)}
              className="rounded-full px-8 py-3.5 text-sm font-black text-black transition-colors"
              style={{ background: gold }}
            >
              Start a conversation
            </button>
            <p className="text-xs" style={{ color: muted }}>
              studio@lumina.co · +1 212 000 0000
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-12" style={{ borderColor: border }}>
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
            <div className="col-span-2 md:col-span-1">
              <span
                className="mb-3 block text-sm font-black uppercase tracking-[0.25em]"
                style={{ color: text }}
              >
                Lumina
              </span>
              <p className="mb-4 text-xs leading-relaxed" style={{ color: muted }}>
                Strategic design studio. New York · London · Tokyo.
              </p>
              <p className="text-xs" style={{ color: gold }}>
                studio@lumina.co
              </p>
            </div>
            {[
              { heading: "Studio", links: ["About", "Team", "Process", "Careers"] },
              { heading: "Work", links: ["Brand", "Digital", "Motion", "Development"] },
              { heading: "Connect", links: ["Instagram", "Behance", "LinkedIn", "Journal"] },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <p
                  className="mb-4 text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: muted }}
                >
                  {heading}
                </p>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l}>
                      <button className="text-xs" style={{ color: muted }}>
                        {l}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            className="flex flex-col gap-3 border-t pt-6 md:flex-row md:items-center md:justify-between"
            style={{ borderColor: border }}
          >
            <p className="text-[11px]" style={{ color: muted }}>
              © {new Date().getFullYear()} Lumina Studio. · Powered by{" "}
              <span className="font-semibold">Benflux UI</span>
            </p>
            <div className="flex gap-4">
              {["Privacy", "Terms"].map((l) => (
                <button key={l} className="text-[11px]" style={{ color: muted }}>
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

// ─── Apex: Enterprise — Palantir / Stripe aesthetic ──────────────────────────
export function ApexPreview() {
  const [activeTheme, setActiveTheme] = React.useState<"system" | "light" | "dark">("light")
  const [loginOpen, setLoginOpen] = React.useState(false)
  const [demoOpen, setDemoOpen] = React.useState(false)

  const isDark = activeTheme === "dark"
  const bg = isDark ? "#09090f" : "#ffffff"
  const text = isDark ? "#ffffff" : "#0f172a"
  const muted = isDark ? "rgba(255,255,255,0.35)" : "rgba(15,23,42,0.45)"
  const border = isDark ? "rgba(255,255,255,0.07)" : "rgba(15,23,42,0.08)"
  const cardBg = isDark ? "rgba(255,255,255,0.02)" : "#f8fafc"
  const accent = isDark ? "#60a5fa" : "#1d4ed8"

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
          className="relative mx-4 w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl"
          style={{ background: isDark ? "#12121f" : "#ffffff", border: `1px solid ${border}` }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-xs"
            style={{ color: muted }}
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    ) : null

  return (
    <div
      className="relative min-h-[1400px] font-sans"
      style={{ fontFamily: "system-ui,sans-serif", background: bg, color: text }}
    >
      <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
        <div className="p-8">
          <div className="mb-6 flex items-center gap-2">
            <div
              className="flex h-7 w-7 items-center justify-center rounded-lg"
              style={{ background: text }}
            >
              <Globe className="h-4 w-4" style={{ color: bg }} />
            </div>
            <span className="text-sm font-bold" style={{ color: text }}>
              Apex Platform
            </span>
          </div>
          <h2 className="mb-1 text-xl font-bold" style={{ color: text }}>
            Sign in to your account
          </h2>
          <p className="mb-6 text-xs" style={{ color: muted }}>
            Enterprise SSO available for your organization
          </p>
          <div
            className="mb-4 rounded-xl border p-3 text-center"
            style={{
              borderColor: isDark ? "rgba(96,165,250,0.2)" : "rgba(29,78,216,0.15)",
              background: isDark ? "rgba(96,165,250,0.06)" : "rgba(29,78,216,0.04)",
            }}
          >
            <button
              className="flex w-full items-center justify-center gap-2 text-sm font-semibold"
              style={{ color: accent }}
            >
              <Lock className="h-4 w-4" /> Continue with SSO
            </button>
          </div>
          <div className="relative my-4 flex items-center">
            <div className="flex-1 border-t" style={{ borderColor: border }} />
            <span className="mx-3 text-[10px]" style={{ color: muted }}>
              or sign in with email
            </span>
            <div className="flex-1 border-t" style={{ borderColor: border }} />
          </div>
          {[
            { label: "Work email", type: "email", ph: "you@company.com" },
            { label: "Password", type: "password", ph: "••••••••" },
          ].map(({ label, type, ph }) => (
            <div key={label} className="mb-3">
              <label className="mb-1.5 block text-xs font-medium" style={{ color: muted }}>
                {label}
              </label>
              <input
                type={type}
                placeholder={ph}
                className="w-full rounded-xl px-4 py-2.5 text-sm outline-none"
                style={{
                  border: `1px solid ${border}`,
                  background: isDark ? "rgba(255,255,255,0.03)" : "#f8fafc",
                  color: text,
                }}
              />
            </div>
          ))}
          <button
            className="mt-2 w-full rounded-xl py-2.5 text-sm font-semibold transition-colors"
            style={{ background: text, color: bg }}
          >
            Sign in
          </button>
          <p className="mt-4 text-center text-xs" style={{ color: muted }}>
            Need an account?{" "}
            <button
              className="font-semibold underline"
              style={{ color: text }}
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

      <Modal open={demoOpen} onClose={() => setDemoOpen(false)}>
        <div className="p-8">
          <h2 className="mb-1 text-xl font-bold" style={{ color: text }}>
            Request a demo
          </h2>
          <p className="mb-6 text-xs" style={{ color: muted }}>
            Our team will reach out within 24 hours
          </p>
          <div className="mb-3 grid grid-cols-2 gap-2">
            {[
              { label: "First name", ph: "Jane" },
              { label: "Last name", ph: "Smith" },
            ].map(({ label, ph }) => (
              <div key={label}>
                <label className="mb-1.5 block text-xs font-medium" style={{ color: muted }}>
                  {label}
                </label>
                <input
                  type="text"
                  placeholder={ph}
                  className="w-full rounded-xl px-3 py-2.5 text-sm outline-none"
                  style={{
                    border: `1px solid ${border}`,
                    background: isDark ? "rgba(255,255,255,0.03)" : "#f8fafc",
                    color: text,
                  }}
                />
              </div>
            ))}
          </div>
          {[
            { label: "Work email", type: "email", ph: "you@company.com" },
            { label: "Company", type: "text", ph: "Acme Corp" },
          ].map(({ label, type, ph }) => (
            <div key={label} className="mb-3">
              <label className="mb-1.5 block text-xs font-medium" style={{ color: muted }}>
                {label}
              </label>
              <input
                type={type}
                placeholder={ph}
                className="w-full rounded-xl px-4 py-2.5 text-sm outline-none"
                style={{
                  border: `1px solid ${border}`,
                  background: isDark ? "rgba(255,255,255,0.03)" : "#f8fafc",
                  color: text,
                }}
              />
            </div>
          ))}
          <button
            className="mt-2 w-full rounded-xl py-2.5 text-sm font-semibold"
            style={{ background: text, color: bg }}
          >
            Request demo
          </button>
        </div>
      </Modal>

      {/* Nav */}
      <div
        className="sticky top-0 z-10"
        style={{
          background: isDark ? "rgba(9,9,15,0.9)" : "rgba(255,255,255,0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${border}`,
        }}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div
                className="flex h-7 w-7 items-center justify-center rounded-lg"
                style={{ background: text }}
              >
                <Globe className="h-4 w-4" style={{ color: bg }} />
              </div>
              <span className="text-sm font-bold tracking-tight" style={{ color: text }}>
                Apex
              </span>
            </div>
            <nav className="hidden items-center gap-1 md:flex">
              {["Platform", "Solutions", "Enterprise", "Security", "Pricing"].map((l) => (
                <button
                  key={l}
                  className="rounded-md px-3 py-1.5 text-xs transition-colors"
                  style={{ color: muted }}
                >
                  {l}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="hidden items-center rounded-lg p-0.5 md:flex"
              style={{ background: isDark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.05)" }}
            >
              {(["System", "Light", "Dark"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTheme(t.toLowerCase() as "system" | "light" | "dark")}
                  className="rounded-md px-2.5 py-1 text-[10px] font-medium capitalize transition-all"
                  style={{
                    background:
                      activeTheme === t.toLowerCase()
                        ? isDark
                          ? "rgba(255,255,255,0.1)"
                          : "rgba(15,23,42,0.08)"
                        : "transparent",
                    color: activeTheme === t.toLowerCase() ? text : muted,
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
            <button
              onClick={() => setLoginOpen(true)}
              className="px-3 py-1.5 text-xs transition-colors"
              style={{ color: muted }}
            >
              Sign in
            </button>
            <button
              onClick={() => setDemoOpen(true)}
              className="rounded-lg px-5 py-2 text-xs font-semibold transition-colors"
              style={{ background: text, color: bg }}
            >
              Request demo
            </button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-8 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <div
              className="mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs font-semibold"
              style={{
                borderColor: isDark ? "rgba(96,165,250,0.2)" : "rgba(29,78,216,0.15)",
                background: isDark ? "rgba(96,165,250,0.06)" : "rgba(29,78,216,0.04)",
                color: accent,
              }}
            >
              <Lock className="h-3 w-3" /> SOC2 Type II · ISO 27001 · HIPAA · GDPR
            </div>
            <h1
              className="mb-6 text-[36px] font-extrabold leading-[1.08] tracking-tight md:text-[48px]"
              style={{ color: text }}
            >
              Enterprise infrastructure
              <br />
              <span style={{ color: muted }}>built to scale with you.</span>
            </h1>
            <p className="mb-8 max-w-xl text-[15px] leading-relaxed" style={{ color: muted }}>
              Apex gives Fortune 500 companies the security, compliance, and reliability they need —
              without sacrificing developer velocity.
            </p>
            <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center">
              <button
                onClick={() => setDemoOpen(true)}
                className="flex items-center gap-2 rounded-xl px-7 py-3.5 text-sm font-semibold shadow-lg"
                style={{ background: text, color: bg }}
              >
                Request a demo <ArrowRight className="h-4 w-4" />
              </button>
              <button
                onClick={() => setLoginOpen(true)}
                className="rounded-xl border px-7 py-3.5 text-sm transition-colors"
                style={{ borderColor: border, color: muted }}
              >
                Sign in
              </button>
            </div>
          </div>
          <div
            className="rounded-2xl border p-6 shadow-xl"
            style={{ border: `1px solid ${border}`, background: cardBg }}
          >
            <div className="mb-4 flex items-center gap-2">
              {["bg-red-400", "bg-yellow-400", "bg-green-400"].map((c, i) => (
                <div key={i} className={`h-2 w-2 rounded-full ${c}`} />
              ))}
              <span className="ml-2 text-[10px]" style={{ color: muted }}>
                Apex Platform
              </span>
            </div>
            <div className="mb-3 grid grid-cols-3 gap-2">
              {[
                { label: "Uptime", value: "99.99%", sub: "last 90 days", c: "#10b981" },
                { label: "Latency", value: "12ms", sub: "p95 global", c: accent },
                { label: "Requests", value: "2.4B", sub: "this month", c: "#a78bfa" },
              ].map(({ label, value, sub, c }) => (
                <div
                  key={label}
                  className="rounded-xl border p-3"
                  style={{
                    borderColor: border,
                    background: isDark ? "rgba(255,255,255,0.02)" : "#fff",
                  }}
                >
                  <p className="text-[10px]" style={{ color: muted }}>
                    {label}
                  </p>
                  <p className="text-lg font-bold" style={{ color: c }}>
                    {value}
                  </p>
                  <p className="text-[9px]" style={{ color: muted }}>
                    {sub}
                  </p>
                </div>
              ))}
            </div>
            <div
              className="rounded-xl border p-4"
              style={{
                borderColor: border,
                background: isDark ? "rgba(255,255,255,0.02)" : "#fff",
              }}
            >
              <p className="mb-3 text-[10px] font-medium" style={{ color: muted }}>
                System health
              </p>
              {["API Gateway", "Database clusters", "CDN nodes"].map((name) => (
                <div key={name} className="flex items-center justify-between py-1.5">
                  <span className="text-[11px]" style={{ color: text }}>
                    {name}
                  </span>
                  <span className="text-[10px] font-semibold text-emerald-500">Operational</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Logos */}
      <div className="border-t py-10" style={{ borderColor: border }}>
        <p className="mb-8 text-center text-xs" style={{ color: muted }}>
          Trusted by enterprises worldwide
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 px-4">
          {["Stripe", "Goldman Sachs", "Shopify", "Salesforce", "Adobe", "Twilio"].map((n) => (
            <div
              key={n}
              className="rounded-lg border px-4 py-2 text-xs font-semibold"
              style={{ borderColor: border, color: muted, background: cardBg }}
            >
              {n}
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div
        className="mx-auto max-w-6xl border-t px-4 py-16 md:px-8"
        style={{ borderColor: border }}
      >
        <h2
          className="mb-2 text-center text-3xl font-extrabold tracking-tight"
          style={{ color: text }}
        >
          Enterprise-grade, out of the box
        </h2>
        <p className="mb-12 text-center text-sm" style={{ color: muted }}>
          Everything your security and compliance teams need.
        </p>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            {
              icon: Shield,
              title: "Zero-trust security",
              desc: "End-to-end encryption, hardware security keys, and granular RBAC across every service.",
              c: accent,
            },
            {
              icon: Lock,
              title: "Compliance ready",
              desc: "SOC2 Type II, ISO 27001, HIPAA, and GDPR compliance built in from day one.",
              c: "#10b981",
            },
            {
              icon: Globe,
              title: "Global infrastructure",
              desc: "Deploy to 40+ regions with automated failover, geo-redundancy, and 99.99% SLA.",
              c: "#a78bfa",
            },
          ].map(({ icon: Icon, title, desc, c }) => (
            <div
              key={title}
              className="rounded-2xl border p-7"
              style={{ borderColor: border, background: cardBg }}
            >
              <div
                className="mb-4 inline-flex rounded-xl p-3 shadow-sm"
                style={{
                  border: `1px solid ${border}`,
                  background: isDark ? "rgba(255,255,255,0.04)" : "#fff",
                }}
              >
                <Icon className="h-5 w-5" style={{ color: c }} />
              </div>
              <h3 className="mb-2 font-semibold" style={{ color: text }}>
                {title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: muted }}>
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-6xl px-4 pb-20 md:px-8">
        <div className="rounded-3xl p-12 text-center md:p-16" style={{ background: text }}>
          <h2
            className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl"
            style={{ color: bg }}
          >
            Ready for enterprise?
          </h2>
          <p
            className="mx-auto mb-8 max-w-md text-sm"
            style={{ color: isDark ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.5)" }}
          >
            Join 2,000+ enterprises who trust Apex for mission-critical infrastructure.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={() => setDemoOpen(true)}
              className="flex items-center gap-2 rounded-xl px-8 py-3.5 text-sm font-semibold shadow-lg transition-colors"
              style={{ background: bg, color: text }}
            >
              Request a demo <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={() => setLoginOpen(true)}
              className="rounded-xl border px-8 py-3.5 text-sm transition-colors"
              style={{
                borderColor: isDark ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.2)",
                color: isDark ? "rgba(0,0,0,0.5)" : "rgba(255,255,255,0.6)",
              }}
            >
              Sign in
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-12" style={{ borderColor: border }}>
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-5 md:gap-8">
            <div className="col-span-2">
              <div className="mb-3 flex items-center gap-2">
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-lg"
                  style={{ background: text }}
                >
                  <Globe className="h-4 w-4" style={{ color: bg }} />
                </div>
                <span className="font-bold" style={{ color: text }}>
                  Apex
                </span>
              </div>
              <p className="mb-4 max-w-[220px] text-xs leading-relaxed" style={{ color: muted }}>
                Enterprise infrastructure for modern teams.
              </p>
            </div>
            {[
              {
                heading: "Platform",
                links: ["Security", "Compliance", "Infrastructure", "Analytics"],
              },
              { heading: "Company", links: ["About", "Blog", "Careers", "Contact"] },
              { heading: "Legal", links: ["Privacy", "Terms", "Security Policy", "SLA"] },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <p
                  className="mb-4 text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: muted }}
                >
                  {heading}
                </p>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l}>
                      <button className="text-xs" style={{ color: muted }}>
                        {l}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            className="flex flex-col gap-3 border-t pt-6 md:flex-row md:items-center md:justify-between"
            style={{ borderColor: border }}
          >
            <p className="text-[11px]" style={{ color: muted }}>
              © {new Date().getFullYear()} Apex Technologies, Inc. · Powered by{" "}
              <span className="font-semibold">Benflux UI</span>
            </p>
            <div className="flex gap-4">
              {["Privacy", "Terms", "Security"].map((l) => (
                <button key={l} className="text-[11px]" style={{ color: muted }}>
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

// ─── Aura: Product Launch — Apple / Teenage Engineering aesthetic ─────────────
export function AuraPreview() {
  const [activeTheme, setActiveTheme] = React.useState<"system" | "light" | "dark">("dark")
  const [loginOpen, setLoginOpen] = React.useState(false)
  const [preorderOpen, setPreorderOpen] = React.useState(false)

  const isDark = activeTheme === "dark" || activeTheme === "system"
  const bg = isDark ? "#07030f" : "#faf5ff"
  const text = isDark ? "#ffffff" : "#1e0a3c"
  const muted = isDark ? "rgba(255,255,255,0.35)" : "rgba(30,10,60,0.45)"
  const border = isDark ? "rgba(255,255,255,0.07)" : "rgba(124,58,237,0.1)"
  const cardBg = isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.7)"
  const purple = isDark ? "#a78bfa" : "#7c3aed"

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
          className="relative mx-4 w-full max-w-sm overflow-hidden rounded-2xl shadow-2xl"
          style={{ background: isDark ? "#0d0718" : "#faf5ff", border: `1px solid ${border}` }}
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-xs"
            style={{ color: muted }}
          >
            ✕
          </button>
          {children}
        </div>
      </div>
    ) : null

  return (
    <div
      className="relative min-h-[1400px] font-sans"
      style={{ fontFamily: "system-ui,sans-serif", background: bg, color: text }}
    >
      {isDark && (
        <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
          <div
            className="absolute left-1/2 top-0 h-[500px] w-[600px] -translate-x-1/2 rounded-full opacity-60"
            style={{ background: "radial-gradient(ellipse,rgba(124,58,237,0.2),transparent 70%)" }}
          />
        </div>
      )}

      <Modal open={loginOpen} onClose={() => setLoginOpen(false)}>
        <div className="p-8">
          <h2 className="mb-1 text-xl font-bold" style={{ color: text }}>
            Welcome back
          </h2>
          <p className="mb-6 text-xs" style={{ color: muted }}>
            Sign in to your Aura account
          </p>
          <div className="mb-3 grid grid-cols-2 gap-2">
            {["Google", "GitHub"].map((s) => (
              <button
                key={s}
                className="flex items-center justify-center gap-2 rounded-xl border py-2.5 text-xs font-semibold"
                style={{
                  borderColor: border,
                  color: muted,
                  background: isDark ? "rgba(255,255,255,0.03)" : "rgba(124,58,237,0.04)",
                }}
              >
                {s}
              </button>
            ))}
          </div>
          <div className="relative my-4 flex items-center">
            <div className="flex-1 border-t" style={{ borderColor: border }} />
            <span className="mx-3 text-[10px]" style={{ color: muted }}>
              or
            </span>
            <div className="flex-1 border-t" style={{ borderColor: border }} />
          </div>
          {[
            { label: "Email", type: "email", ph: "you@company.com" },
            { label: "Password", type: "password", ph: "••••••••" },
          ].map(({ label, type, ph }) => (
            <div key={label} className="mb-3">
              <label className="mb-1.5 block text-xs font-medium" style={{ color: muted }}>
                {label}
              </label>
              <input
                type={type}
                placeholder={ph}
                className="w-full rounded-xl px-4 py-2.5 text-sm outline-none"
                style={{
                  border: `1px solid ${border}`,
                  background: isDark ? "rgba(255,255,255,0.03)" : "rgba(124,58,237,0.03)",
                  color: text,
                }}
              />
            </div>
          ))}
          <button
            className="mt-2 w-full rounded-xl py-2.5 text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}
          >
            Sign in
          </button>
          <p className="mt-4 text-center text-xs" style={{ color: muted }}>
            New here?{" "}
            <button
              className="font-semibold"
              style={{ color: purple }}
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

      <Modal open={preorderOpen} onClose={() => setPreorderOpen(false)}>
        <div className="p-8">
          <div
            className="mb-2 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[10px] font-semibold"
            style={{
              borderColor: border,
              background: isDark ? "rgba(124,58,237,0.1)" : "rgba(124,58,237,0.08)",
              color: purple,
            }}
          >
            <Sparkles className="h-3 w-3" /> Early access — 40% off
          </div>
          <h2 className="mb-1 mt-3 text-xl font-bold" style={{ color: text }}>
            Reserve your spot
          </h2>
          <p className="mb-6 text-xs" style={{ color: muted }}>
            Join 12,000+ on the waitlist
          </p>
          {[
            { label: "Your name", type: "text", ph: "Jane Smith" },
            { label: "Email address", type: "email", ph: "you@company.com" },
          ].map(({ label, type, ph }) => (
            <div key={label} className="mb-3">
              <label className="mb-1.5 block text-xs font-medium" style={{ color: muted }}>
                {label}
              </label>
              <input
                type={type}
                placeholder={ph}
                className="w-full rounded-xl px-4 py-2.5 text-sm outline-none"
                style={{
                  border: `1px solid ${border}`,
                  background: isDark ? "rgba(255,255,255,0.03)" : "rgba(124,58,237,0.03)",
                  color: text,
                }}
              />
            </div>
          ))}
          <button
            className="mt-2 w-full rounded-xl py-2.5 text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}
          >
            Reserve my spot
          </button>
          <p className="mt-3 text-center text-[10px]" style={{ color: muted }}>
            No payment required to join waitlist
          </p>
        </div>
      </Modal>

      {/* Nav */}
      <div
        className="relative sticky top-0 z-10"
        style={{
          background: isDark ? "rgba(7,3,15,0.9)" : "rgba(250,245,255,0.9)",
          backdropFilter: "blur(12px)",
          borderBottom: `1px solid ${border}`,
        }}
      >
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 md:px-8">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <div
                className="flex h-7 w-7 items-center justify-center rounded-xl"
                style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}
              >
                <Sparkles className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-bold" style={{ color: text }}>
                Aura
              </span>
            </div>
            <nav className="hidden items-center gap-1 md:flex">
              {["Features", "Pricing", "Reviews", "About"].map((l) => (
                <button
                  key={l}
                  className="rounded-lg px-3 py-1.5 text-xs transition-colors"
                  style={{ color: muted }}
                >
                  {l}
                </button>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="hidden items-center rounded-lg p-0.5 md:flex"
              style={{ background: isDark ? "rgba(255,255,255,0.06)" : "rgba(124,58,237,0.06)" }}
            >
              {(["System", "Light", "Dark"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTheme(t.toLowerCase() as "system" | "light" | "dark")}
                  className="rounded-md px-2.5 py-1 text-[10px] font-medium capitalize transition-all"
                  style={{
                    background:
                      activeTheme === t.toLowerCase()
                        ? isDark
                          ? "rgba(255,255,255,0.1)"
                          : "rgba(124,58,237,0.12)"
                        : "transparent",
                    color: activeTheme === t.toLowerCase() ? text : muted,
                  }}
                >
                  {t}
                </button>
              ))}
            </div>
            <button
              onClick={() => setLoginOpen(true)}
              className="px-3 py-1.5 text-xs transition-colors"
              style={{ color: muted }}
            >
              Sign in
            </button>
            <button
              onClick={() => setPreorderOpen(true)}
              className="rounded-lg px-4 py-2 text-xs font-semibold text-white shadow-lg"
              style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}
            >
              Pre-order
            </button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-20 pt-16 text-center md:px-8 md:pt-24">
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold"
          style={{
            borderColor: border,
            background: isDark ? "rgba(124,58,237,0.1)" : "rgba(124,58,237,0.06)",
            color: purple,
          }}
        >
          <Sparkles className="h-3.5 w-3.5" /> Early access now open — 40% founding discount
        </div>
        <h1
          className="mx-auto mb-6 max-w-4xl text-[44px] font-extrabold leading-[1.05] tracking-tight md:text-[60px]"
          style={{ color: text }}
        >
          The creative tool you've
          <br />
          <span
            style={{
              background: "linear-gradient(135deg,#a78bfa,#818cf8)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            been waiting for.
          </span>
        </h1>
        <p className="mx-auto mb-10 max-w-lg text-[15px] leading-relaxed" style={{ color: muted }}>
          Aura transforms how teams create, collaborate, and ship beautiful products. Powered by AI,
          built for the way you work.
        </p>
        <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <button
            onClick={() => setPreorderOpen(true)}
            className="group flex items-center gap-2 rounded-2xl px-8 py-4 text-sm font-bold text-white shadow-2xl"
            style={{
              background: "linear-gradient(135deg,#7c3aed,#4f46e5)",
              boxShadow: "0 16px 48px rgba(124,58,237,0.3)",
            }}
          >
            Reserve early access{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={() => setLoginOpen(true)}
            className="rounded-2xl border px-8 py-4 text-sm transition-all"
            style={{ borderColor: border, color: muted }}
          >
            Sign in
          </button>
        </div>
        <p className="mt-5 text-xs" style={{ color: muted }}>
          12,400+ on the waitlist · Ships Q2 2025
        </p>
      </div>

      {/* Product mockup */}
      <div className="relative z-10 mx-auto mb-14 max-w-6xl px-4 md:px-8">
        <div
          className="overflow-hidden rounded-2xl shadow-2xl"
          style={{ border: `1px solid ${border}` }}
        >
          <div
            className="flex items-center gap-2 border-b px-4 py-3"
            style={{ background: isDark ? "rgba(13,7,24,0.8)" : "#f3e8ff", borderColor: border }}
          >
            {["bg-[#ff5f57]", "bg-[#ffbc2e]", "bg-[#28c840]"].map((c, i) => (
              <div key={i} className={`h-2 w-2 rounded-full ${c}`} />
            ))}
            <span className="ml-2 text-[10px]" style={{ color: muted }}>
              Aura Studio
            </span>
          </div>
          <div
            className="flex flex-col md:flex-row"
            style={{ background: isDark ? "rgba(13,7,24,0.6)" : "rgba(250,245,255,0.8)" }}
          >
            <div
              className="border-b p-4 md:w-48 md:border-b-0 md:border-r"
              style={{ borderColor: border }}
            >
              <p
                className="mb-3 text-[9px] font-semibold uppercase tracking-widest"
                style={{ color: muted }}
              >
                Workspace
              </p>
              {["Dashboard", "Projects", "Assets", "Templates", "Settings"].map((l, i) => (
                <div
                  key={l}
                  className="mb-1 flex items-center gap-2 rounded-lg px-3 py-2 text-[11px]"
                  style={{
                    background:
                      i === 1
                        ? isDark
                          ? "rgba(124,58,237,0.2)"
                          : "rgba(124,58,237,0.1)"
                        : "transparent",
                    color: i === 1 ? purple : muted,
                    fontWeight: i === 1 ? 600 : 400,
                  }}
                >
                  <div
                    className="h-1.5 w-1.5 rounded-full"
                    style={{ background: i === 1 ? purple : "transparent" }}
                  />
                  {l}
                </div>
              ))}
            </div>
            <div className="flex-1 p-5">
              <div className="mb-4 flex items-center justify-between">
                <h3 className="text-sm font-bold" style={{ color: text }}>
                  Projects
                </h3>
                <button
                  className="rounded-lg px-3 py-1.5 text-[10px] font-semibold text-white"
                  style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}
                >
                  + New project
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
                {[
                  {
                    name: "Brand refresh",
                    status: "In progress",
                    gfrom: isDark ? "rgba(109,40,217,0.3)" : "rgba(196,181,253,0.6)",
                    gto: isDark ? "rgba(67,56,202,0.3)" : "rgba(165,180,252,0.6)",
                  },
                  {
                    name: "App redesign",
                    status: "Review",
                    gfrom: isDark ? "rgba(126,34,206,0.3)" : "rgba(233,213,255,0.8)",
                    gto: isDark ? "rgba(157,23,77,0.2)" : "rgba(251,207,232,0.8)",
                  },
                  {
                    name: "Landing page",
                    status: "Done",
                    gfrom: isDark ? "rgba(29,78,216,0.3)" : "rgba(191,219,254,0.8)",
                    gto: isDark ? "rgba(3,105,161,0.3)" : "rgba(186,230,253,0.8)",
                  },
                ].map(({ name, status, gfrom, gto }) => (
                  <div
                    key={name}
                    className="group relative h-24 cursor-pointer overflow-hidden rounded-xl border"
                    style={{
                      background: `linear-gradient(135deg, ${gfrom}, ${gto})`,
                      borderColor: border,
                    }}
                  >
                    <div className="absolute inset-0 flex flex-col justify-between p-4">
                      <p className="text-[11px] font-semibold" style={{ color: text }}>
                        {name}
                      </p>
                      <span
                        className="inline-block rounded-full border px-2 py-0.5 text-[9px]"
                        style={{ borderColor: border, color: muted }}
                      >
                        {status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews */}
      <div
        className="relative z-10 mx-auto max-w-6xl border-t px-4 py-16 md:px-8"
        style={{ borderColor: border }}
      >
        <h2
          className="mb-2 text-center text-2xl font-bold tracking-tight md:text-3xl"
          style={{ color: text }}
        >
          Loved by creators
        </h2>
        <p className="mb-12 text-center text-sm" style={{ color: muted }}>
          Beta users are already in love
        </p>
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
            <div
              key={name}
              className="rounded-2xl border p-6"
              style={{ borderColor: border, background: cardBg }}
            >
              <div className="mb-4 flex gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="mb-5 text-sm leading-relaxed" style={{ color: muted }}>
                &ldquo;{q}&rdquo;
              </p>
              <p className="text-xs font-semibold" style={{ color: text }}>
                {name}
              </p>
              <p className="text-[11px]" style={{ color: muted }}>
                {role}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="relative z-10 mx-auto max-w-6xl px-4 pb-20 md:px-8">
        <div
          className="rounded-3xl border p-12 text-center md:p-16"
          style={{
            borderColor: isDark ? "rgba(124,58,237,0.2)" : "rgba(124,58,237,0.15)",
            background: isDark ? "rgba(124,58,237,0.08)" : "rgba(124,58,237,0.04)",
          }}
        >
          <h2
            className="mb-4 text-3xl font-extrabold tracking-tight md:text-4xl"
            style={{ color: text }}
          >
            Be first in line
          </h2>
          <p className="mx-auto mb-8 max-w-md text-sm" style={{ color: muted }}>
            Reserve your founding member spot today and lock in 40% off forever.
          </p>
          <button
            onClick={() => setPreorderOpen(true)}
            className="group inline-flex items-center gap-2 rounded-2xl px-10 py-4 text-sm font-bold text-white shadow-2xl"
            style={{
              background: "linear-gradient(135deg,#7c3aed,#4f46e5)",
              boxShadow: "0 16px 48px rgba(124,58,237,0.3)",
            }}
          >
            Reserve early access{" "}
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </button>
          <p className="mt-4 text-xs" style={{ color: muted }}>
            12,400+ people joined already
          </p>
        </div>
      </div>

      {/* Footer */}
      <footer className="relative z-10 border-t py-12" style={{ borderColor: border }}>
        <div className="mx-auto max-w-6xl px-4 md:px-8">
          <div className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-5 md:gap-8">
            <div className="col-span-2">
              <div className="mb-3 flex items-center gap-2">
                <div
                  className="flex h-7 w-7 items-center justify-center rounded-xl"
                  style={{ background: "linear-gradient(135deg,#7c3aed,#4f46e5)" }}
                >
                  <Sparkles className="h-4 w-4 text-white" />
                </div>
                <span className="font-bold" style={{ color: text }}>
                  Aura
                </span>
              </div>
              <p className="mb-4 max-w-[220px] text-xs leading-relaxed" style={{ color: muted }}>
                The creative OS for modern design teams.
              </p>
            </div>
            {[
              { heading: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
              { heading: "Company", links: ["About", "Blog", "Careers", "Press"] },
              { heading: "Legal", links: ["Privacy", "Terms", "Security", "Cookies"] },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <p
                  className="mb-4 text-[10px] font-bold uppercase tracking-widest"
                  style={{ color: muted }}
                >
                  {heading}
                </p>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l}>
                      <button className="text-xs" style={{ color: muted }}>
                        {l}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            className="flex flex-col gap-3 border-t pt-6 md:flex-row md:items-center md:justify-between"
            style={{ borderColor: border }}
          >
            <p className="text-[11px]" style={{ color: muted }}>
              © {new Date().getFullYear()} Aura, Inc. · Powered by{" "}
              <span className="font-semibold">Benflux UI</span>
            </p>
            <div className="flex gap-4">
              {["Privacy", "Terms"].map((l) => (
                <button key={l} className="text-[11px]" style={{ color: muted }}>
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
