// Code content for each template's downloadable ZIP

const sharedLayout = `import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Template — Built with Benflux UI",
  description: "A beautiful landing page template built with Next.js and Tailwind CSS.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}`

const sharedGlobals = `@tailwind base;
@tailwind components;
@tailwind utilities;`

const sharedPackage = (name: string) => `{
  "name": "${name}-template",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start"
  },
  "dependencies": {
    "next": "^15.0.0",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "lucide-react": "^0.400.0"
  },
  "devDependencies": {
    "@types/node": "^20",
    "@types/react": "^19",
    "autoprefixer": "^10",
    "postcss": "^8",
    "tailwindcss": "^3",
    "typescript": "^5"
  }
}`

const sharedTailwind = `import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: { extend: {} },
  plugins: [],
}
export default config`

const sharedTsconfig = `{
  "compilerOptions": {
    "target": "ES2017",
    "lib": ["dom","dom.iterable","esnext"],
    "allowJs": true,
    "skipLibCheck": true,
    "strict": true,
    "noEmit": true,
    "esModuleInterop": true,
    "module": "esnext",
    "moduleResolution": "bundler",
    "resolveJsonModule": true,
    "isolatedModules": true,
    "jsx": "preserve",
    "incremental": true,
    "plugins": [{"name":"next"}],
    "paths": {"@/*":["./src/*"]}
  },
  "include": ["next-env.d.ts","**/*.ts","**/*.tsx",".next/types/**/*.ts"],
  "exclude": ["node_modules"]
}`

const sharedNextConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {}
export default nextConfig`

// ─── Nova ─────────────────────────────────────────────────────────────────────
const novaPage = `"use client"

import React from "react"

import {
  Activity,
  ArrowRight,
  BarChart3,
  Bell,
  Check,
  ChevronRight,
  Database,
  Globe,
  Layout,
  Lock,
  MessageSquare,
  Moon,
  Search,
  Settings,
  Shield,
  Sparkles,
  Star,
  Sun,
  Users,
  Zap,
} from "lucide-react"

export default function Page() {
  const [activeTheme, setActiveTheme] = React.useState<"system" | "light" | "dark">("dark")
  const [loginOpen, setLoginOpen] = React.useState(false)
  const [signupOpen, setSignupOpen] = React.useState(false)

  const isDark = activeTheme === "dark" || activeTheme === "system"
  const bg = isDark ? "#07070d" : "#f8fafc"
  const text = isDark ? "white" : "#0f172a"

  return (
    <div
      className="relative min-h-screen font-sans"
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
              borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)",
              background: isDark ? "#12121e" : "#fff",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLoginOpen(false)}
              className="absolute right-4 top-4 text-xs"
              style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(15,23,42,0.3)" }}
            >
              ✕
            </button>
            <div className="p-8">
              <h2 className="mb-1 text-xl font-bold" style={{ color: text }}>Welcome back</h2>
              <p className="mb-6 text-xs" style={{ color: isDark ? "rgba(255,255,255,0.35)" : "rgba(15,23,42,0.5)" }}>
                Sign in to your Nova account
              </p>
              <div className="mb-3 grid grid-cols-2 gap-2">
                {["Google", "GitHub"].map((s) => (
                  <button
                    key={s}
                    className="flex items-center justify-center gap-2 rounded-xl py-2.5 text-xs font-semibold border transition-colors"
                    style={{
                      borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)",
                      color: isDark ? "rgba(255,255,255,0.5)" : "rgba(15,23,42,0.55)",
                      background: isDark ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.02)",
                    }}
                  >
                    {s}
                  </button>
                ))}
              </div>
              <div className="relative my-4 flex items-center">
                <div className="flex-1 border-t" style={{ borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.06)" }} />
                <span className="mx-3 text-[10px]" style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(15,23,42,0.3)" }}>or</span>
                <div className="flex-1 border-t" style={{ borderColor: isDark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.06)" }} />
              </div>
              <div className="space-y-3">
                {["Email", "Password"].map((p) => (
                  <input
                    key={p}
                    type={p === "Password" ? "password" : "email"}
                    placeholder={p}
                    className="w-full rounded-xl border px-4 py-2.5 text-sm outline-none"
                    style={{
                      borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)",
                      background: isDark ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.03)",
                      color: text,
                    }}
                  />
                ))}
              </div>
              <button className="mt-4 w-full rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-500">
                Sign in
              </button>
              <p className="mt-4 text-center text-xs" style={{ color: isDark ? "rgba(255,255,255,0.3)" : "rgba(15,23,42,0.4)" }}>
                No account?{" "}
                <button
                  className="text-blue-400 hover:text-blue-300"
                  onClick={() => { setLoginOpen(false); setSignupOpen(true) }}
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
              borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)",
              background: isDark ? "#12121e" : "#fff",
            }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSignupOpen(false)}
              className="absolute right-4 top-4 text-xs"
              style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(15,23,42,0.3)" }}
            >
              ✕
            </button>
            <div className="p-8">
              <h2 className="mb-1 text-xl font-bold" style={{ color: text }}>Get started free</h2>
              <p className="mb-6 text-xs" style={{ color: isDark ? "rgba(255,255,255,0.35)" : "rgba(15,23,42,0.5)" }}>
                14-day trial, no credit card required
              </p>
              <div className="space-y-3">
                {["Your name", "Work email", "Password"].map((p) => (
                  <input
                    key={p}
                    type={p === "Password" ? "password" : p.includes("email") ? "email" : "text"}
                    placeholder={p}
                    className="w-full rounded-xl border px-4 py-2.5 text-sm outline-none"
                    style={{
                      borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)",
                      background: isDark ? "rgba(255,255,255,0.03)" : "rgba(15,23,42,0.03)",
                      color: text,
                    }}
                  />
                ))}
              </div>
              <button className="mt-4 w-full rounded-xl bg-blue-600 py-2.5 text-sm font-semibold text-white hover:bg-blue-500">
                Create account
              </button>
              <p className="mt-4 text-center text-xs" style={{ color: isDark ? "rgba(255,255,255,0.3)" : "rgba(15,23,42,0.4)" }}>
                Already have one?{" "}
                <button
                  className="text-blue-400 hover:text-blue-300"
                  onClick={() => { setSignupOpen(false); setLoginOpen(true) }}
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
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-8">
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600">
                <Zap className="h-4 w-4 text-white" />
              </div>
              <span className="text-sm font-bold" style={{ color: text }}>Nova</span>
            </div>
            <nav className="hidden items-center gap-1 md:flex">
              {[
                { label: "Features", href: "#nova-features" },
                { label: "Changelog", href: "#" },
                { label: "Docs", href: "#" },
                { label: "Pricing", href: "#nova-pricing" },
                { label: "Blog", href: "#" },
              ].map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="rounded-md px-2.5 py-1.5 text-sm transition-colors"
                  style={{ color: isDark ? "rgba(255,255,255,0.4)" : "rgba(15,23,42,0.5)" }}
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="hidden items-center gap-0.5 rounded-xl p-1 md:flex"
              style={{ background: isDark ? "rgba(255,255,255,0.05)" : "rgba(15,23,42,0.05)" }}
            >
              {(["system", "light", "dark"] as const).map((t) => (
                <button
                  key={t}
                  onClick={() => setActiveTheme(t)}
                  className="rounded-lg px-2.5 py-1 text-xs font-medium capitalize transition-all"
                  style={{
                    background: activeTheme === t
                      ? isDark ? "rgba(255,255,255,0.1)" : "rgba(15,23,42,0.08)"
                      : "transparent",
                    color: activeTheme === t ? text : isDark ? "rgba(255,255,255,0.3)" : "rgba(15,23,42,0.4)",
                  }}
                >
                  {t === "system" ? "System" : t === "light" ? <Sun className="h-3 w-3" /> : <Moon className="h-3 w-3" />}
                </button>
              ))}
            </div>
            <button
              onClick={() => setLoginOpen(true)}
              className="rounded-lg px-3 py-1.5 text-sm transition-colors"
              style={{ color: isDark ? "rgba(255,255,255,0.4)" : "rgba(15,23,42,0.5)" }}
            >
              Log in
            </button>
            <button
              onClick={() => setSignupOpen(true)}
              className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white hover:bg-blue-500"
            >
              Get started
            </button>
          </div>
        </div>
      </div>

      {/* Hero */}
      <div className="mx-auto max-w-6xl px-8 pb-20 pt-24 text-center">
        <div
          className="mb-6 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-xs"
          style={{
            borderColor: isDark ? "rgba(59,130,246,0.2)" : "rgba(37,99,235,0.15)",
            background: isDark ? "rgba(59,130,246,0.08)" : "rgba(37,99,235,0.04)",
            color: isDark ? "rgba(147,197,253,1)" : "rgba(37,99,235,1)",
          }}
        >
          <Sparkles className="h-3 w-3" /> Introducing Nova 3.0 — Built for scale
        </div>
        <h1
          className="mx-auto mb-6 max-w-4xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl"
          style={{ color: text }}
        >
          Ship faster.{" "}
          <span className="text-blue-500">Scale further.</span>
        </h1>
        <p
          className="mx-auto mb-10 max-w-xl text-lg leading-relaxed"
          style={{ color: isDark ? "rgba(255,255,255,0.4)" : "rgba(15,23,42,0.5)" }}
        >
          The unified developer platform that takes you from commit to production in seconds.
          Built for engineering teams that refuse to slow down.
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
            className="rounded-xl border px-8 py-3.5 text-sm transition-all"
            style={{
              borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)",
              color: isDark ? "rgba(255,255,255,0.4)" : "rgba(15,23,42,0.5)",
            }}
          >
            View demo
          </button>
        </div>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <div className="flex -space-x-2">
            {["bg-blue-400", "bg-sky-400", "bg-indigo-400", "bg-violet-400"].map((c, i) => (
              <div key={i} className={\`flex h-7 w-7 items-center justify-center rounded-full border-2 border-[#07070d] \${c} text-[9px] font-bold text-white\`} />
            ))}
          </div>
          <p className="text-xs" style={{ color: isDark ? "rgba(255,255,255,0.3)" : "rgba(15,23,42,0.4)" }}>
            Trusted by <span style={{ color: isDark ? "rgba(255,255,255,0.6)" : "rgba(15,23,42,0.7)" }} className="font-semibold">18,000+</span> engineering teams
          </p>
          <div className="flex items-center gap-4">
            {["SOC 2 Type II", "GDPR", "ISO 27001"].map((b) => (
              <span key={b} className="flex items-center gap-1 text-[10px]" style={{ color: isDark ? "rgba(255,255,255,0.25)" : "rgba(15,23,42,0.35)" }}>
                <Check className="h-2.5 w-2.5 text-emerald-500" /> {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Dashboard Mockup */}
      <div className="mx-auto mb-20 max-w-5xl px-8">
        <div
          className="overflow-hidden rounded-2xl border shadow-2xl"
          style={{ borderColor: isDark ? "rgba(255,255,255,0.07)" : "rgba(15,23,42,0.06)" }}
        >
          <div
            className="flex items-center gap-2 border-b px-4 py-3"
            style={{
              background: isDark ? "#0e0e17" : "#f1f5f9",
              borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(15,23,42,0.06)",
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
              <span className="text-[10px]" style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(15,23,42,0.3)" }}>nova.io/dashboard</span>
            </div>
          </div>
          <div className="flex flex-col" style={{ background: isDark ? "#0b0b12" : "#f8fafc" }}>
            <div className="flex md:flex-row flex-col">
              {/* Sidebar */}
              <div
                className="shrink-0 border-b px-3 py-4 md:w-44 md:border-b-0 md:border-r md:py-5"
                style={{ borderColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.05)" }}
              >
                <div className="mb-4 flex items-center gap-2 px-2">
                  <div className="h-5 w-5 rounded-md bg-blue-600" />
                  <span className="text-xs font-bold" style={{ color: text }}>Acme Corp</span>
                </div>
                {[
                  { label: "Dashboard", active: true },
                  { label: "Analytics", active: false },
                  { label: "Team", active: false },
                  { label: "Storage", active: false },
                  { label: "Domains", active: false },
                  { label: "Settings", active: false },
                ].map(({ label, active }) => (
                  <button
                    key={label}
                    className={\`mb-0.5 flex w-full items-center gap-2.5 rounded-md px-2 py-1.5 text-left text-[11px] \${active ? "bg-blue-600/15 font-medium text-blue-400" : ""}\`}
                    style={!active ? { color: isDark ? "rgba(255,255,255,0.35)" : "rgba(15,23,42,0.4)" } : {}}
                  >
                    {label}
                  </button>
                ))}
              </div>
              {/* Main */}
              <div className="flex-1 p-5">
                <div className="mb-5 flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold" style={{ color: text }}>Overview</h3>
                    <p className="text-[11px]" style={{ color: isDark ? "rgba(255,255,255,0.3)" : "rgba(15,23,42,0.4)" }}>Last 30 days · All regions</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="rounded-lg border px-3 py-1.5 text-[10px] transition-colors"
                      style={{
                        borderColor: isDark ? "rgba(255,255,255,0.07)" : "rgba(15,23,42,0.08)",
                        color: isDark ? "rgba(255,255,255,0.4)" : "rgba(15,23,42,0.5)",
                      }}
                    >
                      30 days
                    </button>
                    <button className="rounded-lg bg-blue-600 px-3 py-1.5 text-[10px] font-semibold text-white hover:bg-blue-500">
                      New deploy
                    </button>
                  </div>
                </div>
                <div className="mb-4 grid grid-cols-2 gap-3 md:grid-cols-4">
                  {[
                    { label: "MRR", val: "$2.4M", delta: "+18%" },
                    { label: "Active users", val: "14.2K", delta: "+31%" },
                    { label: "Uptime", val: "99.99%", delta: "30d avg" },
                    { label: "P95 latency", val: "42ms", delta: "−6ms" },
                  ].map(({ label, val, delta }) => (
                    <div
                      key={label}
                      className="rounded-xl border p-4"
                      style={{
                        borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(15,23,42,0.06)",
                        background: isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.8)",
                      }}
                    >
                      <p className="mb-1 text-[10px]" style={{ color: isDark ? "rgba(255,255,255,0.25)" : "rgba(15,23,42,0.4)" }}>{label}</p>
                      <p className="text-xl font-bold" style={{ color: text }}>{val}</p>
                      <p className="mt-1 text-[10px] font-medium text-emerald-400">{delta}</p>
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
                  <div
                    className="rounded-xl border p-4 md:col-span-2"
                    style={{
                      borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(15,23,42,0.06)",
                      background: isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.8)",
                    }}
                  >
                    <p className="mb-3 text-[11px] font-medium" style={{ color: isDark ? "rgba(255,255,255,0.6)" : "rgba(15,23,42,0.6)" }}>Revenue trend</p>
                    <div className="flex h-20 items-end gap-1">
                      {[30,45,38,60,52,70,55,80,68,85,90,78,88,75,94,82,96].map((h,i) => (
                        <div key={i} className="flex-1 rounded-sm bg-blue-600" style={{ height: \`\${h}%\`, opacity: 0.25 + i * 0.042 }} />
                      ))}
                    </div>
                  </div>
                  <div
                    className="rounded-xl border p-4"
                    style={{
                      borderColor: isDark ? "rgba(255,255,255,0.05)" : "rgba(15,23,42,0.06)",
                      background: isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.8)",
                    }}
                  >
                    <p className="mb-3 text-[11px] font-medium" style={{ color: isDark ? "rgba(255,255,255,0.6)" : "rgba(15,23,42,0.6)" }}>Recent activity</p>
                    <div className="space-y-2.5">
                      {[
                        { msg: "Deploy #482 succeeded", time: "2m ago", c: "bg-emerald-400" },
                        { msg: "New user signup", time: "8m ago", c: "bg-blue-400" },
                        { msg: "Alert resolved", time: "15m ago", c: "bg-sky-400" },
                        { msg: "Config updated", time: "1h ago", c: "bg-amber-400" },
                      ].map(({ msg, time, c }) => (
                        <div key={msg} className="flex items-start gap-2">
                          <div className={\`mt-1 h-1.5 w-1.5 shrink-0 rounded-full \${c}\`} />
                          <div>
                            <p className="text-[10px]" style={{ color: isDark ? "rgba(255,255,255,0.5)" : "rgba(15,23,42,0.6)" }}>{msg}</p>
                            <p className="text-[9px]" style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(15,23,42,0.35)" }}>{time}</p>
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
      </div>

      {/* Logos */}
      <div
        className="border-t py-12"
        style={{ borderColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.06)" }}
      >
        <p className="mb-8 text-center text-xs" style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(15,23,42,0.35)" }}>
          Trusted by world-class teams
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 px-8">
          {["Stripe", "Notion", "Linear", "Vercel", "Loom", "Figma", "Prisma", "Supabase"].map((n) => (
            <div
              key={n}
              className="rounded-lg border px-4 py-2 text-xs font-semibold"
              style={{
                borderColor: isDark ? "rgba(255,255,255,0.07)" : "rgba(15,23,42,0.08)",
                color: isDark ? "rgba(255,255,255,0.25)" : "rgba(15,23,42,0.35)",
                background: isDark ? "rgba(255,255,255,0.02)" : "rgba(15,23,42,0.02)",
              }}
            >
              {n}
            </div>
          ))}
        </div>
      </div>

      {/* Features */}
      <div
        id="nova-features"
        className="mx-auto max-w-6xl border-t px-8 py-24"
        style={{ borderColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.06)" }}
      >
        <div className="mb-14 text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-blue-500">Platform</p>
          <h2 className="text-4xl font-extrabold tracking-tight" style={{ color: text }}>
            Everything your team needs
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { icon: Zap, title: "Instant deployments", desc: "Push to deploy in under 10 seconds. Our global edge network handles the rest.", accent: "border-blue-500/20 bg-blue-500/[0.04]", ic: "text-blue-400" },
            { icon: Shield, title: "Enterprise security", desc: "SOC2 Type II certified. End-to-end encryption. Zero-trust networking by default.", accent: "border-emerald-500/20 bg-emerald-500/[0.04]", ic: "text-emerald-400" },
            { icon: BarChart3, title: "Real-time observability", desc: "Live metrics, traces, and logs. Know what's happening in your system right now.", accent: "border-purple-500/20 bg-purple-500/[0.04]", ic: "text-purple-400" },
          ].map(({ icon: Icon, title, desc, accent, ic }) => (
            <div key={title} className={\`rounded-2xl border \${accent} p-7\`}>
              <div className="mb-5 inline-flex rounded-xl border border-white/[0.06] bg-white/[0.04] p-3">
                <Icon className={\`h-5 w-5 \${ic}\`} />
              </div>
              <h3 className="mb-2 font-semibold" style={{ color: text }}>{title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: isDark ? "rgba(255,255,255,0.35)" : "rgba(15,23,42,0.5)" }}>{desc}</p>
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
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-extrabold tracking-tight" style={{ color: text }}>Simple pricing</h2>
          <p className="mt-3 text-sm" style={{ color: isDark ? "rgba(255,255,255,0.35)" : "rgba(15,23,42,0.5)" }}>
            No surprises. Scale as you grow.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { name: "Hobby", price: "Free", desc: "For personal projects", features: ["3 projects", "100GB bandwidth", "Community support"], cta: "Get started", hl: false },
            { name: "Pro", price: "$29/mo", desc: "For growing teams", features: ["Unlimited projects", "500GB bandwidth", "Priority support", "Advanced analytics"], cta: "Start free trial", hl: true },
            { name: "Enterprise", price: "Custom", desc: "For large organizations", features: ["Custom limits", "Dedicated infrastructure", "SLA guarantee", "SSO / SAML"], cta: "Contact sales", hl: false },
          ].map(({ name, price, desc, features, cta, hl }) => (
            <div
              key={name}
              className="rounded-2xl border p-8"
              style={{
                borderColor: hl ? "rgba(59,130,246,0.4)" : isDark ? "rgba(255,255,255,0.06)" : "rgba(15,23,42,0.06)",
                background: hl
                  ? isDark ? "rgba(59,130,246,0.07)" : "rgba(37,99,235,0.04)"
                  : isDark ? "rgba(255,255,255,0.02)" : "rgba(255,255,255,0.8)",
              }}
            >
              <p className="mb-1 text-sm font-semibold" style={{ color: isDark ? "rgba(255,255,255,0.6)" : "rgba(15,23,42,0.6)" }}>{name}</p>
              <p className="mb-2 text-3xl font-extrabold" style={{ color: text }}>{price}</p>
              <p className="mb-6 text-xs" style={{ color: isDark ? "rgba(255,255,255,0.3)" : "rgba(15,23,42,0.4)" }}>{desc}</p>
              <ul className="mb-7 space-y-2.5">
                {features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm" style={{ color: isDark ? "rgba(255,255,255,0.55)" : "rgba(15,23,42,0.65)" }}>
                    <Check className="h-3.5 w-3.5 text-blue-400 shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <button
                onClick={() => setSignupOpen(true)}
                className={\`w-full rounded-xl py-3 text-sm font-semibold transition-all \${hl ? "bg-blue-600 text-white hover:bg-blue-500" : "border"}\`}
                style={!hl ? { borderColor: isDark ? "rgba(255,255,255,0.08)" : "rgba(15,23,42,0.08)", color: isDark ? "rgba(255,255,255,0.5)" : "rgba(15,23,42,0.55)" } : {}}
              >
                {cta}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="mx-auto max-w-6xl px-8 pb-24">
        <div className="rounded-3xl border border-blue-500/20 bg-blue-950/20 p-12 text-center md:p-16">
          <h2 className="mb-4 text-4xl font-extrabold tracking-tight text-white">Ready to ship faster?</h2>
          <p className="mx-auto mb-8 max-w-md text-sm text-white/35">
            Join 18,000+ teams already building on Nova. Set up in under 5 minutes.
          </p>
          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <button
              onClick={() => setSignupOpen(true)}
              className="group flex items-center gap-2 rounded-xl bg-blue-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 hover:bg-blue-500"
            >
              Get started free <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => setLoginOpen(true)}
              className="rounded-xl border border-white/[0.08] px-8 py-3.5 text-sm text-white/50 hover:border-white/[0.15] hover:text-white/70"
            >
              Talk to sales
            </button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer
        className="border-t py-12"
        style={{ borderColor: isDark ? "rgba(255,255,255,0.04)" : "rgba(15,23,42,0.06)" }}
      >
        <div className="mx-auto max-w-6xl px-8">
          <div className="mb-10 grid grid-cols-2 gap-6 md:grid-cols-5 md:gap-8">
            <div className="col-span-2">
              <div className="mb-3 flex items-center gap-2.5">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-blue-600">
                  <Zap className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="font-bold" style={{ color: text }}>Nova</span>
              </div>
              <p className="mb-4 max-w-[220px] text-xs leading-relaxed" style={{ color: isDark ? "rgba(255,255,255,0.25)" : "rgba(15,23,42,0.4)" }}>
                The unified platform for modern engineering teams.
              </p>
            </div>
            {[
              { heading: "Product", links: ["Features", "Pricing", "Changelog", "Roadmap"] },
              { heading: "Docs", links: ["Getting started", "API reference", "Guides", "Status"] },
              { heading: "Company", links: ["About", "Blog", "Careers", "Contact"] },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <p className="mb-4 text-[10px] font-bold uppercase tracking-widest" style={{ color: isDark ? "rgba(255,255,255,0.25)" : "rgba(15,23,42,0.35)" }}>{heading}</p>
                <ul className="space-y-2.5">
                  {links.map((l) => (
                    <li key={l}>
                      <a href="#" className="text-xs transition-colors" style={{ color: isDark ? "rgba(255,255,255,0.35)" : "rgba(15,23,42,0.5)" }}>{l}</a>
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
            <p className="text-[11px]" style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(15,23,42,0.35)" }}>
              © 2025 Nova, Inc. All rights reserved.
            </p>
            <div className="flex gap-4">
              {["Privacy", "Terms", "Security"].map((l) => (
                <a key={l} href="#" className="text-[11px] transition-colors" style={{ color: isDark ? "rgba(255,255,255,0.2)" : "rgba(15,23,42,0.35)" }}>{l}</a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}`

// ─── Zenith ───────────────────────────────────────────────────────────────────
const zenithPage = `import { ArrowRight, ChevronRight } from "lucide-react"

export default function Page() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <nav className="flex items-center justify-between px-10 py-6 border-b border-stone-100">
        <span className="font-bold tracking-tighter">ZENITH STUDIO</span>
        <div className="hidden md:flex items-center gap-8 text-sm text-stone-500">
          <a href="#work">Work</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#journal">Journal</a>
        </div>
        <a href="#contact" className="bg-stone-900 text-white text-sm px-6 py-2.5 rounded-full">Let's talk</a>
      </nav>

      <section className="px-10 py-32">
        <div className="max-w-5xl">
          <p className="text-xs text-stone-400 tracking-widest uppercase mb-8">Design & Development Studio</p>
          <h1 className="text-6xl md:text-7xl font-black tracking-tight leading-none mb-12 text-stone-900">
            We craft digital<br />
            <span className="italic font-light text-stone-400">experiences</span><br />
            that matter.
          </h1>
          <div className="flex items-center gap-8">
            <a href="#work" className="flex items-center gap-2 bg-stone-900 text-white px-8 py-3.5 rounded-full font-semibold text-sm">
              View our work <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      <section className="px-10 py-12 border-y border-stone-100 grid grid-cols-2 md:grid-cols-4 gap-8">
        {[["150+","Projects delivered"],["8","Years of craft"],["40+","Happy clients"],["3","Design awards"]].map(([n,l]) => (
          <div key={l}>
            <p className="text-4xl font-extrabold text-stone-900 tracking-tight">{n}</p>
            <p className="text-sm text-stone-400 mt-2">{l}</p>
          </div>
        ))}
      </section>

      <section id="services" className="px-10 py-24">
        <h2 className="text-3xl font-bold mb-12">Our services</h2>
        <div className="divide-y divide-stone-100">
          {[
            ["01","Brand Identity","Strategy, visual identity, logo design, brand guidelines"],
            ["02","Web Design","UI/UX design, prototyping, design systems, Figma"],
            ["03","Development","Next.js, React, TypeScript, animations, CMS integration"],
            ["04","Motion Design","Brand films, product animations, social content"],
          ].map(([num,title,desc]) => (
            <div key={num} className="flex items-center justify-between py-8 group cursor-pointer">
              <div className="flex items-center gap-10">
                <span className="text-sm text-stone-300 w-8">{num}</span>
                <div>
                  <p className="font-semibold">{title}</p>
                  <p className="text-sm text-stone-400 mt-1">{desc}</p>
                </div>
              </div>
              <ChevronRight className="h-5 w-5 text-stone-300 group-hover:translate-x-1 transition-transform" />
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-10 mb-24 bg-stone-900 rounded-3xl p-16 md:p-24 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Ready to start a project?</h2>
        <p className="text-stone-400 mb-8">We'd love to hear about your vision.</p>
        <a href="mailto:hello@zenith.studio" className="inline-block bg-white text-stone-900 font-semibold px-10 py-4 rounded-full">
          Get in touch
        </a>
      </section>

      <footer className="border-t border-stone-100 px-10 py-8 text-center text-sm text-stone-400">
        © 2024 Zenith Studio. Built with Next.js & Tailwind CSS.
      </footer>
    </main>
  )
}`

// ─── Pulse ────────────────────────────────────────────────────────────────────
const pulsePage = `export default function Page() {
  return (
    <main className="min-h-screen">
      <div style={{ background: "#ff4500" }}>
        <nav className="flex items-center justify-between px-10 py-6">
          <span className="font-black text-white tracking-tighter">PULSE</span>
          <div className="hidden md:flex items-center gap-8 text-sm text-white/70">
            <a href="#product">Product</a><a href="#story">Story</a><a href="#pricing">Pricing</a>
          </div>
          <a href="#signup" className="bg-white text-[#ff4500] font-bold text-sm px-6 py-2.5 rounded-full">
            Sign up free
          </a>
        </nav>
        <section className="px-10 py-24 text-white">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-white/15 rounded-full px-4 py-1.5 text-sm font-medium mb-10">
              <span className="h-2 w-2 rounded-full bg-white" />
              Now in public beta
            </div>
            <h1 className="text-7xl md:text-8xl font-black leading-none tracking-tight mb-8">
              Move<br />10×<br />faster.
            </h1>
            <p className="text-white/70 text-lg max-w-md mb-10">
              The productivity platform that eliminates busywork and keeps your team in flow state.
            </p>
            <div className="flex gap-4">
              <a href="#trial" className="bg-white text-[#ff4500] font-black px-10 py-4 rounded-2xl">Start free trial</a>
              <a href="#demo" className="border-2 border-white/30 text-white font-semibold px-10 py-4 rounded-2xl">Watch demo</a>
            </div>
          </div>
        </section>
        <div style={{ background: "#cc3700" }} className="px-10 py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[["98%","User satisfaction"],["3.2M","Tasks completed"],["500+","Teams worldwide"],["4.9★","App Store"]].map(([n,l]) => (
            <div key={l}><p className="text-3xl font-black text-white">{n}</p><p className="text-sm text-white/60 mt-1">{l}</p></div>
          ))}
        </div>
      </div>

      <section className="bg-white px-10 py-24">
        <h2 className="text-4xl font-black text-gray-900 text-center mb-4">Everything in one place</h2>
        <p className="text-gray-500 text-center mb-16">Stop switching between 12 apps. Pulse does it all.</p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { title:"Smart Tasks", desc:"AI-powered prioritization that adapts to your work style", emoji:"✨" },
            { title:"Unified Inbox", desc:"One place for all messages, comments, and updates", emoji:"📬" },
            { title:"Time Tracking", desc:"Know exactly where your hours go. Block by block.", emoji:"⏱️" },
            { title:"Team Dashboards", desc:"Real-time visibility into what everyone's working on", emoji:"📊" },
          ].map(({ title, desc, emoji }) => (
            <div key={title} className="rounded-2xl bg-gray-50 p-8 border border-gray-100">
              <div className="text-3xl mb-4">{emoji}</div>
              <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-900 px-10 py-24 text-center text-white">
        <h2 className="text-5xl font-black mb-4">Start for free today.</h2>
        <p className="text-gray-400 mb-10">No credit card. No setup fees. Just results.</p>
        <a href="#start" className="inline-block bg-[#ff4500] text-white font-black px-12 py-5 rounded-2xl">
          Get Pulse free →
        </a>
      </section>

      <footer className="bg-gray-950 px-10 py-8 text-center text-sm text-gray-600">
        © 2024 Pulse. Built with Next.js & Tailwind CSS.
      </footer>
    </main>
  )
}`

// ─── Orbit ────────────────────────────────────────────────────────────────────
const orbitPage = `import { BarChart3, Check, Star } from "lucide-react"

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-900 text-white">
      <nav className="flex items-center justify-between px-10 py-5 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="h-6 w-6 rounded bg-sky-500 flex items-center justify-center">
            <BarChart3 className="h-4 w-4 text-white" />
          </div>
          <span className="font-bold">Orbit</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-400">
          <a href="#product">Product</a>
          <a href="#pricing">Pricing</a>
          <a href="#docs">Docs</a>
        </nav>
        <a href="#trial" className="bg-sky-500 text-white text-sm px-5 py-2 rounded-lg font-medium">
          Start free trial
        </a>
      </nav>

      <section className="px-10 py-28 text-center">
        <div className="inline-flex items-center gap-2 bg-sky-500/10 border border-sky-500/20 rounded-full px-4 py-1.5 text-sm text-sky-400 mb-8">
          <Star className="h-4 w-4" /> Rated #1 Analytics Platform 2024
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6">
          Analytics that<br />
          <span className="text-sky-400">actually make sense</span>
        </h1>
        <p className="text-slate-400 max-w-xl mx-auto mb-10">
          Orbit turns complex data into clear decisions. Connect any data source and get actionable insights in minutes.
        </p>
        <div className="flex items-center justify-center gap-4">
          <a href="#start" className="bg-sky-500 text-white px-8 py-3 rounded-lg font-semibold">
            Start free — no card needed
          </a>
          <a href="#demo" className="text-slate-400 px-8 py-3 rounded-lg border border-slate-700">
            Book a demo
          </a>
        </div>
      </section>

      <section className="px-10 py-16 border-t border-slate-800 text-center">
        <p className="text-sm text-slate-500 mb-6">Connects with your entire stack</p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {["Stripe","Postgres","Salesforce","Slack","BigQuery","Snowflake","Shopify","HubSpot"].map(n => (
            <div key={n} className="px-5 py-2 border border-slate-700 rounded-full text-sm text-slate-400">{n}</div>
          ))}
        </div>
      </section>

      <section id="pricing" className="px-10 py-24">
        <h2 className="text-4xl font-bold text-center mb-16">Transparent pricing</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {[
            { name:"Starter", price:"$0", f:["Up to 10K events/mo","2 team members","7-day history"] },
            { name:"Growth", price:"$79", f:["Up to 1M events/mo","10 team members","1-year history","Custom dashboards"], hl:true },
            { name:"Enterprise", price:"Custom", f:["Unlimited events","Unlimited seats","Custom SLA","HIPAA/SOC2"] },
          ].map(({ name, price, f, hl }) => (
            <div key={name} className={\`rounded-2xl p-8 border \${hl ? "border-sky-500/50 bg-sky-500/5" : "border-slate-700 bg-slate-800/30"}\`}>
              <p className="text-slate-400 mb-2">{name}</p>
              <p className="text-4xl font-extrabold mb-6">{price}<span className="text-sm font-normal text-slate-500">{price !== "Custom" && "/mo"}</span></p>
              <ul className="space-y-3 mb-8">
                {f.map(x => <li key={x} className="flex items-center gap-2 text-sm text-slate-400"><Check className="h-4 w-4 text-sky-400 shrink-0" />{x}</li>)}
              </ul>
              <a href="#" className={\`block text-center py-3 rounded-lg text-sm font-semibold \${hl ? "bg-sky-500 text-white" : "border border-slate-600 text-slate-300"}\`}>
                Get started
              </a>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-slate-800 px-10 py-8 text-center text-sm text-slate-600">
        © 2024 Orbit Analytics. Built with Next.js & Tailwind CSS.
      </footer>
    </main>
  )
}`

// ─── Lumina ───────────────────────────────────────────────────────────────────
const luminaPage = `import { ArrowRight } from "lucide-react"

export default function Page() {
  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <nav className="flex items-center justify-between px-10 py-8">
        <span className="font-black tracking-[0.2em] uppercase text-sm">Lumina</span>
        <a href="#contact" className="text-sm border border-zinc-700 text-zinc-400 px-5 py-2.5 rounded-full hover:border-zinc-500 transition-colors">
          Get in touch
        </a>
      </nav>

      <section className="px-10 pt-16 pb-28">
        <p className="text-xs text-zinc-500 tracking-widest uppercase mb-16">Creative direction — 2024</p>
        <h1 className="text-8xl md:text-9xl font-black leading-none tracking-tighter mb-2">
          We tell
        </h1>
        <h1 className="text-8xl md:text-9xl font-black leading-none tracking-tighter">
          <span className="text-transparent" style={{ WebkitTextStroke: "2px #fbbf24" }}>stories</span>
          <span> that</span>
        </h1>
        <h1 className="text-8xl md:text-9xl font-black leading-none tracking-tighter mb-16">
          move people.
        </h1>
        <div className="flex items-center justify-between">
          <p className="text-zinc-500 max-w-sm">
            Award-winning creative agency. Brand, Film, Digital. We make work that matters.
          </p>
          <a href="#work" className="flex items-center gap-4 group">
            <span className="h-14 w-14 rounded-full bg-amber-400 flex items-center justify-center group-hover:bg-amber-300 transition-colors">
              <ArrowRight className="h-6 w-6 text-zinc-950" />
            </span>
            <span className="text-sm text-zinc-400">Our work</span>
          </a>
        </div>
      </section>

      <section id="work" className="px-10 pb-24">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {[
            { label:"Brand Identity", client:"TechCorp", bg:"bg-amber-400/10 border-amber-400/20" },
            { label:"Film & Motion", client:"NovaCo", bg:"bg-zinc-800 border-zinc-700" },
            { label:"Digital Campaign", client:"Luna Brands", bg:"bg-violet-900/30 border-violet-700/30" },
            { label:"Web Experience", client:"Apex Finance", bg:"bg-emerald-900/20 border-emerald-700/20" },
            { label:"Packaging Design", client:"Artisan Co.", bg:"bg-rose-900/20 border-rose-700/20" },
            { label:"Visual Identity", client:"Strive AI", bg:"bg-sky-900/20 border-sky-700/20" },
          ].map(({ label, client, bg }) => (
            <div key={client} className={\`aspect-square rounded-2xl border \${bg} p-8 flex flex-col justify-between group cursor-pointer\`}>
              <div className="flex justify-between items-start">
                <span className="text-xs text-white/40 uppercase tracking-widest">{label}</span>
                <ArrowRight className="h-4 w-4 text-white/20 group-hover:text-white/60 transition-colors" />
              </div>
              <p className="font-semibold text-white/70">{client}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-10 py-16 border-t border-zinc-800">
        <div className="flex items-center justify-between">
          <h2 className="text-3xl font-bold">Award-winning work</h2>
          <div className="flex gap-10">
            {[["12×","Cannes Lions"],["8×","D&AD"],["20+","Awwwards"]].map(([n,l]) => (
              <div key={l} className="text-right">
                <p className="text-2xl font-black text-amber-400">{n}</p>
                <p className="text-xs text-zinc-500">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-800 px-10 py-8 text-center text-sm text-zinc-600">
        © 2024 Lumina Agency. Built with Next.js & Tailwind CSS.
      </footer>
    </main>
  )
}`

// ─── Apex ─────────────────────────────────────────────────────────────────────
const apexPage = `import { BarChart3, Check, Globe, Lock, Shield, Star, Zap } from "lucide-react"

export default function Page() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <nav className="flex items-center justify-between px-10 py-5 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded bg-slate-900 flex items-center justify-center">
            <Globe className="h-4 w-4 text-white" />
          </div>
          <span className="font-bold">Apex</span>
        </div>
        <nav className="hidden md:flex items-center gap-8 text-sm text-slate-500">
          <a href="#platform">Platform</a>
          <a href="#solutions">Solutions</a>
          <a href="#enterprise">Enterprise</a>
          <a href="#pricing">Pricing</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#signin" className="text-sm text-slate-600">Sign in</a>
          <a href="#demo" className="bg-slate-900 text-white text-sm px-6 py-2.5 rounded-lg font-medium">Request demo</a>
        </div>
      </nav>

      <section className="px-10 py-28 max-w-6xl">
        <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 text-sm text-blue-600 mb-10">
          <Lock className="h-4 w-4" /> SOC2 Type II · GDPR · HIPAA Compliant
        </div>
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight leading-tight mb-6">
          The enterprise platform<br />
          <span className="text-blue-600">your team can trust</span>
        </h1>
        <p className="text-slate-500 max-w-xl mb-10">
          Apex provides enterprise-grade infrastructure for mission-critical operations. 99.99% uptime, military-grade security, and 24/7 expert support.
        </p>
        <div className="flex gap-4">
          <a href="#demo" className="bg-blue-600 text-white px-8 py-3.5 rounded-lg font-semibold">Request a demo</a>
          <a href="#sales" className="border border-slate-200 text-slate-700 px-8 py-3.5 rounded-lg">Talk to sales</a>
        </div>
      </section>

      <section className="px-10 py-10 border-y border-slate-100 bg-slate-50/50">
        <p className="text-sm text-slate-400 text-center mb-6">Trusted by industry leaders</p>
        <div className="flex flex-wrap items-center justify-center gap-12">
          {["Fortune 500 Co.","Global Bank AG","HealthNet Inc.","LogiCorp","TechGroup"].map(n => (
            <span key={n} className="text-sm font-semibold text-slate-300 tracking-wide uppercase">{n}</span>
          ))}
        </div>
      </section>

      <section id="platform" className="px-10 py-24">
        <h2 className="text-4xl font-bold text-center mb-4">Built for enterprise at scale</h2>
        <p className="text-slate-500 text-center mb-16">Every feature enterprise teams need, none of the compromises.</p>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            { icon:Shield, title:"Zero-trust security", desc:"End-to-end encryption, SSO, SAML, and advanced audit logs." },
            { icon:Globe, title:"Global infrastructure", desc:"99.99% SLA with multi-region redundancy across 30+ data centers." },
            { icon:BarChart3, title:"Enterprise analytics", desc:"Real-time dashboards, custom reports, and data export." },
            { icon:Lock, title:"Compliance-ready", desc:"SOC2 II, HIPAA, GDPR, and ISO 27001 out of the box." },
            { icon:Zap, title:"Instant deployment", desc:"Deploy in under an hour with our enterprise onboarding team." },
            { icon:Star, title:"White-glove support", desc:"Dedicated CSM, 24/7 support, and 15-minute SLA response." },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex gap-4 p-6 rounded-xl border border-slate-100 hover:border-blue-100 hover:bg-blue-50/30 transition-all">
              <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center shrink-0">
                <Icon className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <h3 className="font-semibold mb-2">{title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-10 mb-24 bg-gradient-to-r from-slate-900 to-blue-900 rounded-3xl p-16 md:p-24 text-center text-white">
        <h2 className="text-4xl font-bold mb-4">Ready for enterprise scale?</h2>
        <p className="text-slate-400 mb-10">Join 500+ enterprise teams running on Apex.</p>
        <div className="flex items-center justify-center gap-4">
          <a href="#demo" className="bg-white text-slate-900 font-semibold px-10 py-4 rounded-lg">Request demo</a>
          <a href="#sales" className="border border-white/20 text-white px-10 py-4 rounded-lg">Contact sales</a>
        </div>
      </section>

      <footer className="border-t border-slate-100 px-10 py-8 text-center text-sm text-slate-400">
        © 2024 Apex Platform. Built with Next.js & Tailwind CSS.
      </footer>
    </main>
  )
}`

// ─── Aura ─────────────────────────────────────────────────────────────────────
const auraPage = `import { Star } from "lucide-react"

export default function Page() {
  return (
    <main className="min-h-screen" style={{ background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)" }}>
      <nav className="flex items-center justify-between px-10 py-7">
        <span className="font-black text-white tracking-tight">AURA</span>
        <div className="hidden md:flex items-center gap-8 text-sm text-white/50">
          <a href="#features">Features</a><a href="#gallery">Gallery</a><a href="#reviews">Reviews</a>
        </div>
        <a href="#preorder" className="text-sm bg-white/10 border border-white/20 text-white px-5 py-2.5 rounded-full">
          Pre-order
        </a>
      </nav>

      <section className="px-10 py-20 text-center relative">
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="h-96 w-96 rounded-full bg-purple-600/30 blur-[100px]" />
        </div>
        <div className="relative z-10">
          <p className="text-sm text-purple-300/70 uppercase tracking-widest mb-6">Introducing</p>
          <h1 className="text-8xl md:text-9xl font-black text-white tracking-tight mb-4">Aura Pro</h1>
          <p className="text-7xl font-black mb-10" style={{ WebkitTextFillColor: "transparent", WebkitTextStroke: "1px rgba(255,255,255,0.2)" }}>Collection</p>
          <p className="text-white/50 max-w-lg mx-auto mb-12">
            Designed for those who demand more. Precision-crafted with 48 hours battery, adaptive display, and AI-powered wellness.
          </p>
          <div className="flex items-center justify-center gap-4">
            <a href="#preorder" className="bg-white text-slate-900 font-bold px-12 py-4 rounded-full">
              Pre-order now · $299
            </a>
            <a href="#learn" className="text-white/60 px-10 py-4 rounded-full border border-white/15">
              Learn more
            </a>
          </div>
        </div>
      </section>

      <section id="features" className="px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            { bg:"bg-purple-900/30 border-purple-700/20", label:"Colors", value:"12 finishes" },
            { bg:"bg-indigo-900/30 border-indigo-700/20", label:"Battery", value:"48 hours" },
            { bg:"bg-blue-900/30 border-blue-700/20", label:"Display", value:"Always-on" },
          ].map(({ bg, label, value }) => (
            <div key={label} className={\`rounded-3xl border \${bg} p-12 text-center\`}>
              <p className="text-sm text-white/40 uppercase tracking-widest mb-3">{label}</p>
              <p className="text-3xl font-black text-white">{value}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="reviews" className="px-10 py-20">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Loved by reviewers</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[
            { q:"\\"Aura Pro is the best wearable I've ever worn. Period.\\"", by:"TechReview Global" },
            { q:"\\"The battery life alone makes this a must-buy.\\"", by:"Wearable Weekly" },
          ].map(({ q, by }) => (
            <div key={by} className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_,i) => <Star key={i} className="h-4 w-4 text-amber-400 fill-amber-400" />)}
              </div>
              <p className="text-white/70 italic mb-4">{q}</p>
              <p className="text-sm text-white/30 font-medium">{by}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-10 pb-24 text-center">
        <a href="#reserve" className="inline-block bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-bold px-16 py-5 rounded-full shadow-2xl shadow-purple-500/30">
          Reserve yours now →
        </a>
        <p className="text-white/30 text-sm mt-4">Ships worldwide · Free returns · 2-year warranty</p>
      </section>

      <footer className="border-t border-white/5 px-10 py-8 text-center text-sm text-white/20">
        © 2024 Aura. Built with Next.js & Tailwind CSS.
      </footer>
    </main>
  )
}`

export const TEMPLATE_CODE = {
  nova: {
    page: novaPage,
    layout: sharedLayout,
    globals: sharedGlobals,
    packageJson: sharedPackage("nova"),
    tailwind: sharedTailwind,
    tsconfig: sharedTsconfig,
    nextConfig: sharedNextConfig,
  },
  zenith: {
    page: zenithPage,
    layout: sharedLayout,
    globals: sharedGlobals,
    packageJson: sharedPackage("zenith"),
    tailwind: sharedTailwind,
    tsconfig: sharedTsconfig,
    nextConfig: sharedNextConfig,
  },
  pulse: {
    page: pulsePage,
    layout: sharedLayout,
    globals: sharedGlobals,
    packageJson: sharedPackage("pulse"),
    tailwind: sharedTailwind,
    tsconfig: sharedTsconfig,
    nextConfig: sharedNextConfig,
  },
  orbit: {
    page: orbitPage,
    layout: sharedLayout,
    globals: sharedGlobals,
    packageJson: sharedPackage("orbit"),
    tailwind: sharedTailwind,
    tsconfig: sharedTsconfig,
    nextConfig: sharedNextConfig,
  },
  lumina: {
    page: luminaPage,
    layout: sharedLayout,
    globals: sharedGlobals,
    packageJson: sharedPackage("lumina"),
    tailwind: sharedTailwind,
    tsconfig: sharedTsconfig,
    nextConfig: sharedNextConfig,
  },
  apex: {
    page: apexPage,
    layout: sharedLayout,
    globals: sharedGlobals,
    packageJson: sharedPackage("apex"),
    tailwind: sharedTailwind,
    tsconfig: sharedTsconfig,
    nextConfig: sharedNextConfig,
  },
  aura: {
    page: auraPage,
    layout: sharedLayout,
    globals: sharedGlobals,
    packageJson: sharedPackage("aura"),
    tailwind: sharedTailwind,
    tsconfig: sharedTsconfig,
    nextConfig: sharedNextConfig,
  },
} as const
