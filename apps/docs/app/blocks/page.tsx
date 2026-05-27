import type { Metadata } from "next"
import Link from "next/link"

import { Footer } from "@/components/ui/footer"
import { Navbar } from "@/components/ui/navbar"
import { Construction } from "lucide-react"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = { title: "Blocks" }

const comingSoon = [
  "Authentication — Sign in, Sign up, Forgot password",
  "Dashboard — Stats, Charts, Recent activity",
  "Settings — Profile, Notifications, Billing",
  "Landing — Hero, Features, CTA, Pricing",
  "E-commerce — Product grid, Cart, Checkout",
  "Blog — Article list, Single post, Author page",
]

export default function BlocksPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="container mx-auto max-w-screen-xl flex-1 px-4 py-24">
        <div className="mx-auto max-w-2xl space-y-8 text-center">
          <div className="flex justify-center">
            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-muted">
              <Construction className="h-7 w-7 text-muted-foreground" />
            </div>
          </div>
          <div className="space-y-3">
            <h1 className="text-4xl font-bold tracking-tight">Blocks</h1>
            <p className="text-lg text-muted-foreground">
              Pre-built, copy-paste sections built from Benflux UI components. Blocks are coming
              soon.
            </p>
          </div>

          <div className="space-y-3 rounded-xl border border-border bg-muted/20 p-6 text-left">
            <p className="text-sm font-semibold">Planned blocks</p>
            {comingSoon.map((item) => (
              <div key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                {item}
              </div>
            ))}
          </div>

          <Link
            href="/docs/components"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
          >
            Browse components in the meantime
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  )
}
