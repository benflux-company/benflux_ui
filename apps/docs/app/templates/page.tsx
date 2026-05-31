import type { Metadata } from "next"

import { TemplatesClient } from "@/components/templates/templates-client"
import { Footer } from "@/components/ui/footer"
import { Navbar } from "@/components/ui/navbar"
import { Layers } from "lucide-react"

export const metadata: Metadata = { title: "Templates — Benflux UI" }

export default function TemplatesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1">
        {/* Hero */}
        <div className="relative overflow-hidden border-b border-border bg-gradient-to-b from-background to-muted/20">
          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="h-[500px] w-[900px] rounded-full bg-primary/5 blur-[120px]" />
          </div>
          <div className="container relative mx-auto max-w-screen-xl px-4 py-20 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted/50 px-3 py-1 text-xs font-medium text-muted-foreground backdrop-blur-sm">
              <Layers className="h-3.5 w-3.5 text-primary" />7 free templates — ready to ship
            </div>
            <h1 className="mb-4 text-5xl font-extrabold tracking-tight md:text-6xl">
              Beautiful
              <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                {" "}
                templates{" "}
              </span>
              for Next.js
            </h1>
            <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground">
              Professionally designed landing pages built with Next.js and Tailwind CSS. One click
              to download the full project — free, forever.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                Next.js 15
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                Tailwind CSS
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                TypeScript
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                100% free
              </div>
            </div>
          </div>
        </div>

        {/* Templates grid */}
        <div className="container mx-auto max-w-screen-xl px-4 py-16">
          <TemplatesClient />
        </div>
      </main>

      <Footer />
    </div>
  )
}
