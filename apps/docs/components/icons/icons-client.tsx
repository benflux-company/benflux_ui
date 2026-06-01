"use client"

import React, { useCallback, useEffect, useMemo, useRef, useState } from "react"

import { Check, Copy, Download, Search, Sparkles, X, Zap } from "lucide-react"

import {
  AIThink,
  BatteryCharge,
  CloudSync,
  CodeTyping,
  CursorClick,
  DNAHelix,
  DataFlow,
  DatabasePulse,
  EyeReveal,
  FireAlert,
  GlitchX,
  HeartBeat,
  LoaderRing,
  MorphStar,
  NotificationBell,
  ProgressArc,
  PulseRings,
  RocketLaunch,
  SearchPulse,
  ShieldScan,
  SignalWave,
  SoundWave,
  SpinnerDots,
  StarRating,
  SyncOrbit,
  ToggleSwitch,
  TypingDots,
  WifiScan,
} from "@benflux-ui/icons"

// ─── Types ──────────────────────────────────────────────────────────────────

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type LibIcon = {
  name: string
  component: React.ComponentType<any>
}

type AnimEntry = {
  name: string
  label: string
  desc: string
  color: string
  component: React.ComponentType<{ size?: number; color?: string }>
}

// ─── Animated Benflux icons ──────────────────────────────────────────────────

const ANIMATED_ICONS: AnimEntry[] = [
  {
    name: "LoaderRing",
    label: "Loader Ring",
    desc: "Gradient spinner ring",
    color: "#6366f1",
    component: LoaderRing,
  },
  {
    name: "PulseRings",
    label: "Pulse Rings",
    desc: "Expanding concentric rings",
    color: "#6366f1",
    component: PulseRings,
  },
  {
    name: "TypingDots",
    label: "Typing Dots",
    desc: "Three bouncing dots",
    color: "#6366f1",
    component: TypingDots,
  },
  {
    name: "SpinnerDots",
    label: "Spinner Dots",
    desc: "8-dot circular spinner",
    color: "#6366f1",
    component: SpinnerDots,
  },
  {
    name: "SyncOrbit",
    label: "Sync Orbit",
    desc: "Orbiting sync indicator",
    color: "#6366f1",
    component: SyncOrbit,
  },
  {
    name: "HeartBeat",
    label: "Heart Beat",
    desc: "ECG pulse line",
    color: "#ef4444",
    component: HeartBeat,
  },
  {
    name: "GlitchX",
    label: "Glitch X",
    desc: "Corrupted close icon",
    color: "#ef4444",
    component: GlitchX,
  },
  {
    name: "FireAlert",
    label: "Fire Alert",
    desc: "Living flame morphing",
    color: "#f97316",
    component: FireAlert,
  },
  {
    name: "ProgressArc",
    label: "Progress Arc",
    desc: "Self-drawing progress ring",
    color: "#f97316",
    component: ProgressArc,
  },
  {
    name: "SignalWave",
    label: "Signal Wave",
    desc: "WiFi-style expanding arcs",
    color: "#22c55e",
    component: SignalWave,
  },
  {
    name: "BatteryCharge",
    label: "Battery Charge",
    desc: "Charging level animation",
    color: "#22c55e",
    component: BatteryCharge,
  },
  {
    name: "ShieldScan",
    label: "Shield Scan",
    desc: "Scan beam + checkmark reveal",
    color: "#22c55e",
    component: ShieldScan,
  },
  {
    name: "ToggleSwitch",
    label: "Toggle Switch",
    desc: "On/off toggle animation",
    color: "#22c55e",
    component: ToggleSwitch,
  },
  {
    name: "DataFlow",
    label: "Data Flow",
    desc: "Dots streaming on a path",
    color: "#3b82f6",
    component: DataFlow,
  },
  {
    name: "CloudSync",
    label: "Cloud Sync",
    desc: "Cloud with spinning arrow",
    color: "#3b82f6",
    component: CloudSync,
  },
  {
    name: "WifiScan",
    label: "Wifi Scan",
    desc: "WiFi arcs in sequence",
    color: "#06b6d4",
    component: WifiScan,
  },
  {
    name: "DNAHelix",
    label: "DNA Helix",
    desc: "Double helix with rungs",
    color: "#06b6d4",
    component: DNAHelix,
  },
  {
    name: "AIThink",
    label: "AI Thinking",
    desc: "Neural network pulse",
    color: "#8b5cf6",
    component: AIThink,
  },
  {
    name: "RocketLaunch",
    label: "Rocket Launch",
    desc: "Hovering rocket with flame",
    color: "#8b5cf6",
    component: RocketLaunch,
  },
  {
    name: "DatabasePulse",
    label: "Database Pulse",
    desc: "Stacked DB rings pulsing",
    color: "#6366f1",
    component: DatabasePulse,
  },
  {
    name: "SearchPulse",
    label: "Search Pulse",
    desc: "Magnifier with sonar rings",
    color: "#6366f1",
    component: SearchPulse,
  },
  {
    name: "MorphStar",
    label: "Morph Star",
    desc: "Shape-shifting star → circle",
    color: "#f59e0b",
    component: MorphStar,
  },
  {
    name: "NotificationBell",
    label: "Notification Bell",
    desc: "Ring-shake + badge",
    color: "#f59e0b",
    component: NotificationBell,
  },
  {
    name: "StarRating",
    label: "Star Rating",
    desc: "5 stars lighting up",
    color: "#f59e0b",
    component: StarRating,
  },
  {
    name: "CursorClick",
    label: "Cursor Click",
    desc: "Cursor + ripple rings",
    color: "#f59e0b",
    component: CursorClick,
  },
  {
    name: "EyeReveal",
    label: "Eye Reveal",
    desc: "Eye opening/closing",
    color: "#a78bfa",
    component: EyeReveal,
  },
  {
    name: "SoundWave",
    label: "Sound Wave",
    desc: "Equalizer bars dancing",
    color: "#ec4899",
    component: SoundWave,
  },
  {
    name: "CodeTyping",
    label: "Code Typing",
    desc: "Blinking cursor in code block",
    color: "#10b981",
    component: CodeTyping,
  },
]

// ─── Library definitions (all loaded dynamically) ───────────────────────────

type LibDef = { key: string; label: string; pkg: string }

const ICON_LIBS: LibDef[] = [
  { key: "Lucide", label: "General", pkg: "lucide-react" },
  { key: "FA", label: "Font Awesome", pkg: "react-icons/fa6" },
  { key: "MD", label: "Material", pkg: "react-icons/md" },
  { key: "BI", label: "Bootstrap", pkg: "react-icons/bi" },
  { key: "RI", label: "Remix", pkg: "react-icons/ri" },
  { key: "HI", label: "Heroicons", pkg: "react-icons/hi2" },
  { key: "FI", label: "Feather", pkg: "react-icons/fi" },
  { key: "SI", label: "Simple Icons", pkg: "react-icons/si" },
  { key: "Anim", label: "Benflux", pkg: "@benflux-ui/icons" },
]

// All imports are dynamic so webpack never namespace-shakes them
const importLib = (key: string): Promise<Record<string, unknown>> => {
  switch (key) {
    case "Lucide":
      return import("lucide-react")
    case "FA":
      return import("react-icons/fa6")
    case "MD":
      return import("react-icons/md")
    case "BI":
      return import("react-icons/bi")
    case "RI":
      return import("react-icons/ri")
    case "HI":
      return import("react-icons/hi2")
    case "FI":
      return import("react-icons/fi")
    case "SI":
      return import("react-icons/si")
    default:
      return Promise.resolve({})
  }
}

const KNOWN_NON_ICONS = new Set(["createLucideIcon", "default"])

function modToIcons(mod: Record<string, unknown>): LibIcon[] {
  return Object.entries(mod)
    .filter(
      ([name, comp]) =>
        // lucide-react uses forwardRef → typeof is "object"; react-icons uses plain functions
        (typeof comp === "function" || (typeof comp === "object" && comp !== null)) &&
        /^[A-Z]/.test(name) &&
        !name.endsWith("Icon") &&
        !KNOWN_NON_ICONS.has(name),
    )
    .map(([name, comp]) => ({ name, component: comp as LibIcon["component"] }))
    .sort((a, b) => a.name.localeCompare(b.name))
}

// ─── Hooks ───────────────────────────────────────────────────────────────────

function useCopy() {
  const [copied, setCopied] = useState(false)
  const copy = useCallback(async (text: string) => {
    await navigator.clipboard.writeText(text)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [])
  return { copied, copy }
}

// ─── Panels ──────────────────────────────────────────────────────────────────

const SIZE_PRESETS = [16, 20, 24, 32, 40, 48]
const STROKE_PRESETS = [1, 1.5, 2, 2.5]
const COLOR_PRESETS = [
  "currentColor",
  "#6366f1",
  "#3b82f6",
  "#22c55e",
  "#ef4444",
  "#f97316",
  "#a855f7",
  "#ec4899",
]

function IconPanel({
  icon,
  libKey,
  onClose,
}: {
  icon: LibIcon
  libKey: string
  onClose: () => void
}) {
  const [size, setSize] = useState(32)
  const [color, setColor] = useState("currentColor")
  const [stroke, setStroke] = useState(2)
  const [tab, setTab] = useState<"react" | "svg">("react")
  const [svgCode, setSvgCode] = useState("")
  const wrapRef = useRef<HTMLDivElement>(null)
  const { copied, copy } = useCopy()
  const Icon = icon.component
  const lib = ICON_LIBS.find((l) => l.key === libKey)!
  const isLucide = libKey === "Lucide"

  const propsArr = [
    size !== 24 ? `size={${size}}` : "",
    color !== "currentColor" ? `color="${color}"` : "",
    isLucide && stroke !== 2 ? `strokeWidth={${stroke}}` : "",
  ].filter(Boolean)
  const importPkg = "@benflux-ui/icons"
  const reactCode = `import { ${icon.name} } from '${importPkg}'\n\n<${icon.name}${propsArr.length ? " " + propsArr.join(" ") : ""} />`

  useEffect(() => {
    const el = wrapRef.current?.querySelector("svg")
    if (el) setSvgCode(`<?xml version="1.0" encoding="UTF-8"?>\n${el.outerHTML}`)
  }, [size, color, stroke, icon])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  const downloadSvg = () => {
    const el = wrapRef.current?.querySelector("svg")
    if (!el) return
    const blob = new Blob([`<?xml version="1.0" encoding="UTF-8"?>\n${el.outerHTML}`], {
      type: "image/svg+xml",
    })
    const a = document.createElement("a")
    a.href = URL.createObjectURL(blob)
    a.download = `${icon.name}.svg`
    a.click()
  }

  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <div className="flex shrink-0 items-start justify-between px-5 py-4">
        <div>
          <p className="font-semibold leading-tight">{icon.name}</p>
          <p className="mt-0.5 text-[11px] text-muted-foreground">{lib.label}</p>
        </div>
        <button onClick={onClose} className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted">
          <X className="h-4 w-4" />
        </button>
      </div>

      <div
        ref={wrapRef}
        className="mx-4 mb-4 flex shrink-0 items-center justify-center rounded-2xl border border-border bg-muted/30 py-8"
      >
        <Icon
          size={size}
          color={color === "currentColor" ? undefined : color}
          {...(isLucide ? { strokeWidth: stroke } : {})}
        />
      </div>

      <div className="shrink-0 space-y-3.5 px-5">
        <div>
          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Taille — {size}px
          </p>
          <div className="flex gap-1">
            {SIZE_PRESETS.map((s) => (
              <button
                key={s}
                onClick={() => setSize(s)}
                className={`flex-1 rounded-lg border py-1 text-[10px] font-medium transition-all ${size === s ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-foreground/30"}`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>
        {isLucide && (
          <div>
            <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
              Trait — {stroke}
            </p>
            <div className="flex gap-1">
              {STROKE_PRESETS.map((s) => (
                <button
                  key={s}
                  onClick={() => setStroke(s)}
                  className={`flex-1 rounded-lg border py-1 text-[10px] font-medium transition-all ${stroke === s ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-foreground/30"}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        )}
        <div>
          <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
            Couleur
          </p>
          <div className="flex flex-wrap items-center gap-1.5">
            {COLOR_PRESETS.map((c) => (
              <button
                key={c}
                onClick={() => setColor(c)}
                title={c}
                className={`h-5 w-5 rounded-full border-2 transition-transform hover:scale-110 ${color === c ? "scale-110 border-foreground" : "border-transparent"}`}
                style={{
                  background:
                    c === "currentColor" ? "linear-gradient(135deg,#000 50%,#fff 50%)" : c,
                }}
              />
            ))}
            <input
              type="color"
              value={color === "currentColor" ? "#000000" : color}
              onChange={(e) => setColor(e.target.value)}
              className="h-5 w-5 cursor-pointer rounded-full border-0 p-0"
            />
          </div>
        </div>
      </div>

      <div className="mt-4 flex shrink-0 border-t border-border">
        {(["react", "svg"] as const).map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`flex-1 py-2 text-xs font-medium transition-colors ${tab === t ? "border-b-2 border-primary text-foreground" : "text-muted-foreground hover:text-foreground"}`}
          >
            {t === "react" ? "React" : "SVG"}
          </button>
        ))}
      </div>
      <div className="mx-4 mt-3 shrink-0">
        <pre className="overflow-x-auto rounded-xl bg-zinc-950 p-3 text-[11px] leading-relaxed text-zinc-300">
          {tab === "react" ? reactCode : svgCode || "…"}
        </pre>
      </div>
      <div className="flex gap-2 p-4">
        <button
          onClick={() => copy(tab === "react" ? reactCode : svgCode)}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-border py-2 text-xs font-medium hover:bg-muted"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-green-500" /> Copié !
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" /> Copier
            </>
          )}
        </button>
        <button
          onClick={downloadSvg}
          className="flex items-center gap-1.5 rounded-xl border border-border px-3 py-2 text-xs font-medium hover:bg-muted"
        >
          <Download className="h-3.5 w-3.5" /> SVG
        </button>
      </div>
    </div>
  )
}

function AnimPanel({ icon, onClose }: { icon: AnimEntry; onClose: () => void }) {
  const { copied, copy } = useCopy()
  const code = `import { ${icon.name} } from '@benflux-ui/icons'\n\n<${icon.name} />`
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [onClose])

  return (
    <div className="flex h-full flex-col overflow-y-auto">
      <div className="flex shrink-0 items-start justify-between px-5 py-4">
        <div>
          <div className="flex items-center gap-2">
            <p className="font-semibold">{icon.label}</p>
            <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-primary">
              Benflux
            </span>
          </div>
          <p className="mt-0.5 text-[11px] text-muted-foreground">{icon.desc}</p>
        </div>
        <button onClick={onClose} className="rounded-lg p-1.5 text-muted-foreground hover:bg-muted">
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="mx-4 mb-5 flex items-center justify-center rounded-2xl border border-border bg-muted/30 py-10">
        <icon.component size={48} color={icon.color} />
      </div>
      <div className="mx-4 mb-1">
        <p className="mb-1.5 text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
          Import
        </p>
        <pre className="overflow-x-auto rounded-xl bg-zinc-950 p-3 text-[11px] leading-relaxed text-zinc-300">
          {code}
        </pre>
      </div>
      <div className="flex gap-2 p-4">
        <button
          onClick={() => copy(code)}
          className="flex flex-1 items-center justify-center gap-1.5 rounded-xl border border-border py-2 text-xs font-medium hover:bg-muted"
        >
          {copied ? (
            <>
              <Check className="h-3.5 w-3.5 text-green-500" /> Copié !
            </>
          ) : (
            <>
              <Copy className="h-3.5 w-3.5" /> Copier l&apos;import
            </>
          )}
        </button>
      </div>
    </div>
  )
}

// ─── Loading skeleton ─────────────────────────────────────────────────────────

function GridLoader({ label }: { label: string }) {
  return (
    <div className="flex flex-col items-center py-24 text-center">
      <LoaderRing size={36} color="#6366f1" />
      <p className="mt-4 text-sm text-muted-foreground">Chargement de {label}…</p>
    </div>
  )
}

// ─── Main ────────────────────────────────────────────────────────────────────

export function IconsClient() {
  const [query, setQuery] = useState("")
  const [activeLib, setActiveLib] = useState("Lucide")
  const [icons, setIcons] = useState<LibIcon[]>([])
  const [loading, setLoading] = useState(true)
  const [iconCount, setIconCount] = useState<Record<string, number>>({})
  const [selectedIcon, setSelectedIcon] = useState<{ icon: LibIcon; libKey: string } | null>(null)
  const [selectedAnim, setSelectedAnim] = useState<AnimEntry | null>(null)
  const [pkgMgr, setPkgMgr] = useState<"npm" | "pnpm" | "yarn">("pnpm")
  const [installCopied, setInstallCopied] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const cacheRef = useRef<Record<string, LibIcon[]>>({})

  // Focus search with /
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "/" && document.activeElement !== inputRef.current) {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  // Load icons when lib changes
  useEffect(() => {
    if (activeLib === "Anim") {
      setIcons([])
      setLoading(false)
      return
    }
    if (cacheRef.current[activeLib]) {
      setIcons(cacheRef.current[activeLib])
      setLoading(false)
      return
    }
    setLoading(true)
    setIcons([])
    setSelectedIcon(null)
    setSelectedAnim(null)
    importLib(activeLib).then((mod) => {
      const result = modToIcons(mod)
      cacheRef.current[activeLib] = result
      setIcons(result)
      setIconCount((prev) => ({ ...prev, [activeLib]: result.length }))
      setLoading(false)
    })
  }, [activeLib])

  const q = query.toLowerCase().trim()

  const filtered = useMemo(() => {
    if (activeLib === "Anim") return []
    return icons.filter((icon) => !q || icon.name.toLowerCase().includes(q))
  }, [icons, q, activeLib])

  const filteredAnim = useMemo(() => {
    if (activeLib !== "Anim") return []
    return ANIMATED_ICONS.filter(
      (icon) => !q || icon.label.toLowerCase().includes(q) || icon.name.toLowerCase().includes(q),
    )
  }, [q, activeLib])

  // Also clear selection when switching tabs (so panel never shows wrong library)
  const prevLib = useRef(activeLib)
  useEffect(() => {
    if (prevLib.current !== activeLib) {
      setSelectedIcon(null)
      setSelectedAnim(null)
      prevLib.current = activeLib
    }
  }, [activeLib])

  const closePanel = useCallback(() => {
    setSelectedIcon(null)
    setSelectedAnim(null)
  }, [])
  const panelOpen = selectedIcon !== null || selectedAnim !== null

  const visibleCount = activeLib === "Anim" ? filteredAnim.length : filtered.length

  return (
    <div className="flex flex-1 flex-col">
      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-muted/40 to-background py-14">
        <div className="container mx-auto max-w-screen-xl px-4 text-center">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
            <Sparkles className="h-3 w-3" />
            15 000+ icônes · 9 bibliothèques · 1 package
          </div>
          <h1 className="mb-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Bibliothèque d&apos;icônes
          </h1>
          <p className="mx-auto mb-8 max-w-md text-sm text-muted-foreground">
            Cherche, personnalise et copie le code React en un clic — ou télécharge le SVG.
          </p>

          {/* Install card */}
          <div className="mx-auto mb-8 max-w-lg rounded-2xl border border-border bg-card/80 p-5 text-left shadow-sm backdrop-blur">
            {/* pkg manager row */}
            <div className="mb-3 flex items-center gap-1.5">
              {(["pnpm", "npm", "yarn"] as const).map((mgr) => (
                <button
                  key={mgr}
                  onClick={() => setPkgMgr(mgr)}
                  className={`rounded-md px-2.5 py-1 font-mono text-[11px] font-semibold transition-all ${pkgMgr === mgr ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80 hover:text-foreground"}`}
                >
                  {mgr}
                </button>
              ))}
            </div>
            {/* install command */}
            <div className="mb-4 flex items-center gap-2 rounded-xl border border-border/60 bg-muted/40 px-4 py-2.5">
              <span className="flex-1 font-mono text-[13px] text-foreground">
                {pkgMgr === "pnpm" && (
                  <>
                    <span className="text-muted-foreground">$</span>
                    {" pnpm add @benflux-ui/icons"}
                  </>
                )}
                {pkgMgr === "npm" && (
                  <>
                    <span className="text-muted-foreground">$</span>
                    {" npm install @benflux-ui/icons"}
                  </>
                )}
                {pkgMgr === "yarn" && (
                  <>
                    <span className="text-muted-foreground">$</span>
                    {" yarn add @benflux-ui/icons"}
                  </>
                )}
              </span>
              <button
                onClick={async () => {
                  const cmd =
                    pkgMgr === "pnpm"
                      ? "pnpm add @benflux-ui/icons"
                      : pkgMgr === "npm"
                        ? "npm install @benflux-ui/icons"
                        : "yarn add @benflux-ui/icons"
                  await navigator.clipboard.writeText(cmd)
                  setInstallCopied(true)
                  setTimeout(() => setInstallCopied(false), 1800)
                }}
                className="shrink-0 rounded-md p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                {installCopied ? (
                  <Check className="h-3.5 w-3.5 text-green-500" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
              </button>
            </div>
            {/* usage */}
            <div className="rounded-xl border border-border/60 bg-zinc-950 px-4 py-3 font-mono text-[12px] leading-relaxed">
              <span className="text-violet-400">import</span>
              <span className="text-zinc-300">{" { "}</span>
              <span className="text-amber-300">Home, Settings, LoaderRing</span>
              <span className="text-zinc-300">{" } "}</span>
              <span className="text-violet-400">from</span>
              <span className="text-zinc-300"> </span>
              <span className="text-emerald-400">&apos;@benflux-ui/icons&apos;</span>
            </div>
            <p className="mt-3 text-[11px] text-muted-foreground">
              3 280+ icônes général + {ANIMATED_ICONS.length} exclusifs{" "}
              <span className="font-semibold text-foreground">Benflux</span> animés, un seul import.
            </p>
          </div>

          {/* Search */}
          <div className="relative mx-auto max-w-lg">
            <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Chercher une icône…"
              className="w-full rounded-2xl border border-border bg-background py-3 pl-11 pr-12 text-sm shadow-sm outline-none transition-all focus:border-primary/50 focus:ring-2 focus:ring-primary/10"
            />
            {query ? (
              <button
                onClick={() => setQuery("")}
                className="absolute right-4 top-1/2 -translate-y-1/2 rounded p-0.5 text-muted-foreground hover:text-foreground"
              >
                <X className="h-4 w-4" />
              </button>
            ) : (
              <kbd className="absolute right-4 top-1/2 -translate-y-1/2 rounded border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground">
                /
              </kbd>
            )}
          </div>
          {query && (
            <p className="mt-2 text-xs text-muted-foreground">
              {visibleCount.toLocaleString()} résultat{visibleCount !== 1 ? "s" : ""}
            </p>
          )}
        </div>
      </section>

      {/* Content */}
      <div className="flex flex-1 overflow-hidden">
        <div className="flex flex-1 flex-col overflow-y-auto">
          {/* Library tabs — underline style */}
          <div className="sticky top-0 z-20 bg-background/95 backdrop-blur-sm">
            <div className="container mx-auto max-w-screen-xl px-4">
              <div className="scrollbar-none flex justify-center overflow-x-auto">
                {ICON_LIBS.filter((l) => l.key !== "Anim").map((lib) => (
                  <button
                    key={lib.key}
                    onClick={() => setActiveLib(lib.key)}
                    className={`group flex shrink-0 flex-col items-center gap-0 px-4 py-3 text-[12px] font-medium transition-colors ${activeLib === lib.key ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
                  >
                    <span className="flex items-baseline gap-1.5">
                      {lib.label}
                      {iconCount[lib.key] != null && (
                        <span className="text-[10px] tabular-nums text-muted-foreground">
                          {iconCount[lib.key].toLocaleString()}
                        </span>
                      )}
                    </span>
                    <span
                      className={`mt-2 h-0.5 w-full rounded-full transition-all ${activeLib === lib.key ? "bg-primary" : "bg-transparent group-hover:bg-border"}`}
                    />
                  </button>
                ))}
                {/* Benflux last */}
                <button
                  onClick={() => setActiveLib("Anim")}
                  className={`group flex shrink-0 flex-col items-center px-4 py-3 text-[12px] font-medium transition-colors ${activeLib === "Anim" ? "text-primary" : "text-muted-foreground hover:text-foreground"}`}
                >
                  <span className="flex items-center gap-1.5">
                    <Zap className="h-3 w-3" />
                    Benflux Animated
                    <span className="text-[10px] tabular-nums text-muted-foreground">
                      {ANIMATED_ICONS.length}
                    </span>
                  </span>
                  <span
                    className={`mt-2 h-0.5 w-full rounded-full transition-all ${activeLib === "Anim" ? "bg-primary" : "bg-transparent group-hover:bg-border"}`}
                  />
                </button>
              </div>
            </div>
            <div className="border-b border-border" />
          </div>

          {/* Grid */}
          <div className="container mx-auto max-w-screen-xl px-6 py-6">
            {loading && (
              <GridLoader label={ICON_LIBS.find((l) => l.key === activeLib)?.label ?? activeLib} />
            )}

            {/* Animated grid */}
            {!loading && activeLib === "Anim" && (
              <div>
                <div className="mb-4 flex items-center gap-2">
                  <h2 className="text-sm font-semibold">Benflux Animated</h2>
                  <span className="rounded-full bg-primary/10 px-2 py-0.5 text-[9px] font-bold uppercase tracking-wide text-primary">
                    Exclusif
                  </span>
                  <span className="text-xs text-muted-foreground">{filteredAnim.length}</span>
                </div>
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-5 md:grid-cols-7 lg:grid-cols-9 xl:grid-cols-11">
                  {filteredAnim.map((icon) => (
                    <button
                      key={icon.name}
                      onClick={() => {
                        setSelectedAnim(icon)
                        setSelectedIcon(null)
                      }}
                      className={`group flex flex-col items-center gap-2 rounded-2xl border p-3 transition-all duration-150 ${selectedAnim?.name === icon.name ? "border-primary/40 bg-primary/5 shadow-sm" : "border-border/40 bg-card hover:border-primary/20 hover:bg-primary/5 hover:shadow-sm"}`}
                    >
                      <div className="flex h-10 w-10 items-center justify-center">
                        <icon.component size={26} color={icon.color} />
                      </div>
                      <span className="w-full truncate text-center text-[10px] font-medium leading-tight text-muted-foreground group-hover:text-foreground">
                        {icon.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Regular icon grid */}
            {!loading &&
              activeLib !== "Anim" &&
              (filtered.length === 0 ? (
                <div className="py-32 text-center">
                  <Search className="mx-auto mb-3 h-10 w-10 text-muted-foreground/20" />
                  <p className="text-sm text-muted-foreground">Aucune icône trouvée</p>
                </div>
              ) : (
                <>
                  <p className="mb-4 text-center text-xs text-muted-foreground">
                    {filtered.length.toLocaleString()} icônes
                  </p>
                  <div className="2xl:grid-cols-14 grid grid-cols-4 gap-1.5 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12">
                    {filtered.map((entry) => {
                      const Icon = entry.component
                      const isSelected = selectedIcon?.icon.name === entry.name
                      return (
                        <button
                          key={entry.name}
                          onClick={() => {
                            setSelectedIcon({ icon: entry, libKey: activeLib })
                            setSelectedAnim(null)
                          }}
                          title={entry.name}
                          className={`group flex flex-col items-center gap-1.5 rounded-xl p-2.5 transition-all duration-100 ${isSelected ? "bg-primary/8 ring-1 ring-primary/30" : "hover:bg-muted/70"}`}
                        >
                          <div className="flex h-9 w-9 items-center justify-center">
                            <Icon
                              size={20}
                              className={`transition-colors ${isSelected ? "text-primary" : "text-foreground/60 group-hover:text-foreground"}`}
                            />
                          </div>
                          <span
                            className={`w-full truncate text-center text-[10px] leading-tight transition-colors ${isSelected ? "text-primary" : "text-muted-foreground group-hover:text-foreground"}`}
                          >
                            {entry.name}
                          </span>
                        </button>
                      )
                    })}
                  </div>
                </>
              ))}
          </div>
        </div>

        {/* Detail panel — slides in as overlay */}
        {panelOpen && (
          <div
            className="fixed inset-0 z-30 bg-black/40 backdrop-blur-[2px]"
            onClick={closePanel}
          />
        )}
        <div
          className={`fixed bottom-0 right-0 top-14 z-40 flex w-[360px] flex-col overflow-hidden border-l border-border bg-background shadow-2xl transition-transform duration-300 ease-in-out ${panelOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          {selectedIcon && (
            <IconPanel icon={selectedIcon.icon} libKey={selectedIcon.libKey} onClose={closePanel} />
          )}
          {selectedAnim && <AnimPanel icon={selectedAnim} onClose={closePanel} />}
        </div>
      </div>
    </div>
  )
}
