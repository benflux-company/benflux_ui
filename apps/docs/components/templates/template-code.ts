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
const novaPage = `import { ArrowRight, BarChart3, Check, Shield, Sparkles, Zap } from "lucide-react"

const features = [
  { icon: Zap, title: "Lightning Fast", desc: "Deploy in seconds with our global edge network across 35 regions." },
  { icon: Shield, title: "Enterprise Security", desc: "SOC2 Type II, GDPR compliant. Zero-knowledge encryption." },
  { icon: BarChart3, title: "Real-time Analytics", desc: "Monitor every request, latency, and error in a beautiful dashboard." },
]

const pricing = [
  { name: "Starter", price: "$0", period: "/mo", features: ["5 projects", "10GB bandwidth", "Community support"] },
  { name: "Pro", price: "$29", period: "/mo", features: ["Unlimited projects", "500GB bandwidth", "Priority support", "Analytics"], highlight: true },
  { name: "Enterprise", price: "Custom", period: "", features: ["Custom limits", "Dedicated infra", "SLA guarantee", "SSO/SAML"] },
]

export default function Page() {
  return (
    <main className="min-h-screen bg-[#05050f] text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-5 border-b border-white/5">
        <div className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
            <Zap className="h-4 w-4 text-white" />
          </div>
          <span className="font-bold tracking-tight">Nova</span>
        </div>
        <nav className="hidden md:flex items-center gap-7 text-sm text-white/50">
          <a href="#features">Features</a>
          <a href="#pricing">Pricing</a>
          <a href="#docs">Docs</a>
        </nav>
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm text-white/60 hover:text-white">Sign in</a>
          <a href="#" className="text-sm bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-5 py-2 rounded-full font-medium">
            Get started →
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative flex flex-col items-center text-center px-8 pt-32 pb-20">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-[500px] w-[700px] bg-violet-600/20 blur-[140px] rounded-full pointer-events-none" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-1.5 text-sm text-violet-300 mb-10">
            <Sparkles className="h-4 w-4" /> Introducing Nova 2.0 — Now with AI
          </div>
          <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight leading-tight mb-6 bg-gradient-to-b from-white to-white/50 bg-clip-text text-transparent">
            Build faster.<br />Ship with confidence.
          </h1>
          <p className="text-lg text-white/40 mb-10">
            The developer platform that scales from zero to millions.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#" className="bg-gradient-to-r from-violet-600 to-indigo-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-violet-500/25">
              Start for free
            </a>
            <a href="#" className="text-white/60 px-8 py-3 rounded-full border border-white/10 flex items-center gap-2">
              View demo <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="px-10 py-24">
        <div className="text-center mb-16">
          <p className="text-xs text-violet-400 font-semibold uppercase tracking-widest mb-3">Everything you need</p>
          <h2 className="text-4xl font-bold">Built for modern teams</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-white/5 bg-white/[0.03] p-8 hover:border-violet-500/30 transition-all">
              <div className="h-10 w-10 rounded-xl bg-violet-500/10 flex items-center justify-center mb-5">
                <Icon className="h-5 w-5 text-violet-400" />
              </div>
              <h3 className="font-semibold mb-3">{title}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="px-10 py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Simple pricing</h2>
          <p className="text-white/40">No surprises. Cancel anytime.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricing.map(({ name, price, period, features, highlight }) => (
            <div key={name} className={\`rounded-2xl p-8 border \${highlight ? "border-violet-500/50 bg-violet-500/10" : "border-white/5 bg-white/[0.02]"}\`}>
              <p className="text-sm text-white/50 mb-2">{name}</p>
              <div className="flex items-baseline gap-1 mb-6">
                <span className="text-4xl font-extrabold">{price}</span>
                <span className="text-sm text-white/30">{period}</span>
              </div>
              <ul className="space-y-3 mb-8">
                {features.map(f => (
                  <li key={f} className="flex items-center gap-3 text-sm text-white/60">
                    <Check className="h-4 w-4 text-violet-400 shrink-0" />{f}
                  </li>
                ))}
              </ul>
              <button className={\`w-full py-3 rounded-xl font-medium transition-all \${highlight ? "bg-gradient-to-r from-violet-600 to-indigo-600 text-white" : "border border-white/10 text-white/60 hover:border-white/20"}\`}>
                {highlight ? "Get started" : "Choose plan"}
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-10 py-8 text-center text-sm text-white/20">
        © 2024 Nova. Built with Next.js & Tailwind CSS.
      </footer>
    </main>
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
