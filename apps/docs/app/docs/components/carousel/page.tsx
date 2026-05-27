import type { Metadata } from "next"

import { CodeBlock } from "@/components/docs/code-block"
import { ChevronLeft, ChevronRight } from "lucide-react"

export const metadata: Metadata = { title: "Carousel" }

const slides = [
  { color: "from-primary/20 to-purple-500/20", label: "Slide 1" },
  { color: "from-blue-500/20 to-cyan-500/20", label: "Slide 2" },
  { color: "from-green-500/20 to-teal-500/20", label: "Slide 3" },
]

export default function CarouselPage() {
  return (
    <div className="space-y-10">
      <div className="space-y-3">
        <div className="inline-flex items-center rounded-full border border-border bg-muted/40 px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
          WOW Effects
        </div>
        <h1 className="text-4xl font-bold tracking-tight">Carousel</h1>
        <p className="text-lg text-muted-foreground">
          A carousel component with motion and swipe support. Built with Embla Carousel.
        </p>
      </div>

      <div className="flex flex-col items-center gap-4 rounded-xl border border-border bg-muted/20 p-10">
        <div className="relative w-full max-w-md overflow-hidden rounded-xl">
          <div className="flex gap-4">
            {slides.map((s) => (
              <div
                key={s.label}
                className={`h-36 w-full flex-none rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center border border-border`}
              >
                <span className="text-sm font-medium text-muted-foreground">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors hover:bg-accent">
            <ChevronLeft className="h-4 w-4" />
          </button>
          <div className="flex gap-1.5">
            {slides.map((_, i) => (
              <div
                key={i}
                className={`h-1.5 rounded-full transition-all ${i === 0 ? "w-6 bg-primary" : "w-1.5 bg-muted-foreground/30"}`}
              />
            ))}
          </div>
          <button className="flex h-8 w-8 items-center justify-center rounded-full border border-border transition-colors hover:bg-accent">
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Installation</h2>
        <CodeBlock code="npx benflux-ui add carousel" language="bash" />
      </div>

      <div className="space-y-3">
        <h2 className="text-xl font-semibold tracking-tight">Usage</h2>
        <CodeBlock
          code={`import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

<Carousel className="w-full max-w-sm">
  <CarouselContent>
    {items.map((item, i) => (
      <CarouselItem key={i}>
        <div className="p-1">
          <Card>
            <CardContent>{item}</CardContent>
          </Card>
        </div>
      </CarouselItem>
    ))}
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>`}
        />
      </div>
    </div>
  )
}
