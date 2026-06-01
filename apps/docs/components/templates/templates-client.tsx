"use client"

import { useState } from "react"

import { Download, Eye, X } from "lucide-react"

import { TEMPLATE_CODE } from "./template-code"
import {
  ApexPreview,
  LuminaPreview,
  NovaPreview,
  OrbitPreview,
  PulsePreview,
  ZenithPreview,
} from "./template-previews"

const TEMPLATES = [
  {
    id: "nova",
    name: "Nova",
    tagline: "Dark SaaS",
    description:
      "Elegant dark landing for SaaS products. Gradient hero, feature grid, and 3-tier pricing.",
    tags: ["SaaS", "Dark"],
    Preview: NovaPreview,
  },
  {
    id: "zenith",
    name: "Zenith",
    tagline: "Studio Portfolio",
    description:
      "Ultra-clean minimal studio portfolio with bold typography and numbered service list.",
    tags: ["Agency", "Portfolio"],
    Preview: ZenithPreview,
  },
  {
    id: "pulse",
    name: "Pulse",
    tagline: "Bold Startup",
    description:
      "High-energy startup page with vibrant orange palette, stats strip, and feature cards.",
    tags: ["Startup"],
    Preview: PulsePreview,
  },
  {
    id: "orbit",
    name: "Orbit",
    tagline: "Analytics SaaS",
    description:
      "Data-focused landing with live dashboard mockup, integration logos, and pricing table.",
    tags: ["SaaS", "Analytics"],
    Preview: OrbitPreview,
  },
  {
    id: "lumina",
    name: "Lumina",
    tagline: "Creative Agency",
    description:
      "Award-winning agency aesthetic with oversized type, portfolio grid, and gold accents.",
    tags: ["Agency", "Creative"],
    Preview: LuminaPreview,
  },
  {
    id: "apex",
    name: "Apex",
    tagline: "Enterprise",
    description:
      "Trust-forward enterprise platform page with compliance badges, feature grid, and demo CTA.",
    tags: ["Enterprise"],
    Preview: ApexPreview,
  },
]

const ALL_TAGS = [
  "All",
  "SaaS",
  "Agency",
  "Portfolio",
  "Startup",
  "Enterprise",
  "Creative",
  "Analytics",
]

async function downloadZip(template: (typeof TEMPLATES)[number]) {
  const JSZip = (await import("jszip")).default
  const zip = new JSZip()
  const code = TEMPLATE_CODE[template.id as keyof typeof TEMPLATE_CODE]
  if (!code) return

  const root = zip.folder(template.id)!
  const app = root.folder("app")!
  app.file("page.tsx", code.page)
  app.file("layout.tsx", code.layout)
  app.file("globals.css", code.globals)
  root.file("package.json", code.packageJson)
  root.file("tailwind.config.ts", code.tailwind)
  root.file("tsconfig.json", code.tsconfig)
  root.file("next.config.mjs", code.nextConfig)
  root.file(
    "README.md",
    `# ${template.name} — Benflux UI Template\n\n${template.description}\n\n## Getting started\n\n\`\`\`bash\nnpm install\nnpm run dev\n\`\`\`\n`,
  )

  const blob = await zip.generateAsync({ type: "blob" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `${template.id}-template.zip`
  a.click()
  URL.revokeObjectURL(url)
}

export function TemplatesClient() {
  const [activeTag, setActiveTag] = useState("All")
  const [selected, setSelected] = useState<(typeof TEMPLATES)[number] | null>(null)
  const [downloading, setDownloading] = useState<string | null>(null)

  const filtered =
    activeTag === "All" ? TEMPLATES : TEMPLATES.filter((t) => t.tags.includes(activeTag))

  const handleDownload = async (t: (typeof TEMPLATES)[number]) => {
    setDownloading(t.id)
    await downloadZip(t)
    setDownloading(null)
  }

  return (
    <div>
      {/* Filter tabs */}
      <div className="mb-10 flex flex-wrap gap-2">
        {ALL_TAGS.map((tag) => (
          <button
            key={tag}
            onClick={() => setActiveTag(tag)}
            className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-all ${
              activeTag === tag
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-background text-muted-foreground hover:border-foreground/30 hover:text-foreground"
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((t) => (
          <div
            key={t.id}
            className="group overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-primary/40 hover:shadow-xl hover:shadow-primary/5"
          >
            {/* Browser frame + scaled preview */}
            <div
              className="relative overflow-hidden bg-zinc-100 dark:bg-zinc-900"
              style={{ height: 220 }}
            >
              {/* Browser chrome */}
              <div className="absolute inset-x-0 top-0 z-10 flex items-center gap-1.5 border-b border-black/10 bg-zinc-200/80 px-3 py-2 backdrop-blur-sm dark:border-white/5 dark:bg-zinc-800/80">
                <div className="h-2 w-2 rounded-full bg-red-400/80" />
                <div className="h-2 w-2 rounded-full bg-yellow-400/80" />
                <div className="h-2 w-2 rounded-full bg-green-400/80" />
                <div className="mx-2 flex-1 rounded bg-zinc-300/60 px-2 py-0.5 text-[9px] text-zinc-500 dark:bg-zinc-700/60">
                  {t.id}.vercel.app
                </div>
              </div>
              {/* Scaled template */}
              <div
                className="absolute bottom-0 left-0 right-0"
                style={{
                  top: 28,
                  transform: "scale(0.28)",
                  transformOrigin: "top left",
                  width: "357%",
                  height: "357%",
                }}
              >
                <t.Preview />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 top-7 flex items-center justify-center gap-2 bg-black/0 opacity-0 transition-all duration-200 group-hover:bg-black/40 group-hover:opacity-100">
                <button
                  onClick={() => setSelected(t)}
                  className="flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-zinc-900 shadow-lg backdrop-blur-sm transition-colors hover:bg-white"
                >
                  <Eye className="h-3.5 w-3.5" /> Preview
                </button>
                <button
                  onClick={() => handleDownload(t)}
                  disabled={downloading === t.id}
                  className="flex items-center gap-1.5 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-zinc-900 shadow-lg backdrop-blur-sm transition-colors hover:bg-white disabled:opacity-60"
                >
                  <Download className="h-3.5 w-3.5" /> {downloading === t.id ? "…" : "ZIP"}
                </button>
              </div>
            </div>

            {/* Card info */}
            <div className="p-5">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold">{t.name}</span>
                  <span className="rounded-full border border-border bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                    {t.tagline}
                  </span>
                </div>
                <p className="text-xs leading-relaxed text-muted-foreground">{t.description}</p>
                <div className="flex flex-wrap gap-1 pt-1">
                  {t.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-[10px] font-medium text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2 border-t border-border px-5 py-3">
              <button
                onClick={() => setSelected(t)}
                className="flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-border py-2 text-xs font-medium text-muted-foreground transition-colors hover:border-foreground/30 hover:text-foreground"
              >
                <Eye className="h-3.5 w-3.5" /> Preview
              </button>
              <button
                onClick={() => handleDownload(t)}
                disabled={downloading === t.id}
                className="flex items-center justify-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-60"
              >
                <Download className="h-3.5 w-3.5" />
                {downloading === t.id ? "…" : "Download ZIP"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Preview modal */}
      {selected && (
        <div className="fixed inset-0 z-[100] flex items-stretch bg-black/80 backdrop-blur-sm">
          <div className="flex flex-1 flex-col bg-background">
            {/* Modal header */}
            <div className="flex shrink-0 items-center justify-between border-b border-border px-6 py-3">
              <div className="flex items-center gap-3">
                <span className="font-bold">{selected.name}</span>
                <span className="rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs text-muted-foreground">
                  {selected.tagline}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleDownload(selected)}
                  disabled={downloading === selected.id}
                  className="flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground hover:opacity-90 disabled:opacity-60"
                >
                  <Download className="h-3.5 w-3.5" />
                  {downloading === selected.id ? "Generating…" : "Download ZIP"}
                </button>
                <button
                  onClick={() => setSelected(null)}
                  className="ml-1 rounded-lg p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Preview */}
            <div className="flex-1 overflow-auto">
              <selected.Preview />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
