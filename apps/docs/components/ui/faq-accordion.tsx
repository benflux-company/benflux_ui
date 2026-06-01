"use client"

import { useState } from "react"

import { ChevronDown } from "lucide-react"

const FAQS = [
  {
    q: "Are these templates really free?",
    a: "Yes, 100% free. No account required, no license fees, no attribution needed. Download and use them however you like — commercial projects included.",
  },
  {
    q: "Do I need Benflux UI to use the templates?",
    a: "No. The downloadable ZIP uses only Next.js, Tailwind CSS, and Lucide Icons. Benflux UI is optional — but you can easily add our components to extend any template.",
  },
  {
    q: "How do I customise the design?",
    a: "All styles are pure Tailwind utility classes. Change colours by editing class names, adjust spacing, fonts, and layout directly in the JSX — no configuration files to edit.",
  },
  {
    q: "Can I deploy to Vercel right away?",
    a: "Absolutely. Unzip, run npm install, push to GitHub, and import to Vercel. Your site is live in under 5 minutes — no environment variables or additional setup needed.",
  },
  {
    q: "Will you add more templates?",
    a: "Yes. New templates are added regularly. Follow us on GitHub or join our Discord to get notified when new templates drop.",
  },
]

export function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <div className="divide-y divide-border">
      {FAQS.map(({ q, a }, i) => (
        <div key={q}>
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold transition-colors hover:text-foreground/80"
            aria-expanded={open === i}
          >
            <span>{q}</span>
            <ChevronDown
              className={`h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200 ${open === i ? "rotate-180" : ""}`}
            />
          </button>
          <div
            className={`grid transition-all duration-200 ease-in-out ${open === i ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
          >
            <div className="overflow-hidden">
              <p className="pb-5 text-sm leading-relaxed text-muted-foreground">{a}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
