"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@benflux-ui/utils"

interface NavItem {
  href: string
  label: string
  isNew?: boolean
}

const nav: { title: string; items: NavItem[] }[] = [
  {
    title: "Getting Started",
    items: [
      { href: "/docs", label: "Introduction" },
      { href: "/docs/installation", label: "Installation" },
      { href: "/docs/theming", label: "Theming" },
      { href: "/docs/cli", label: "CLI" },
      { href: "/changelog", label: "Changelog" },
    ],
  },
  {
    title: "Components",
    items: [{ href: "/docs/components", label: "Overview" }],
  },
  {
    title: "Primitives",
    items: [
      { href: "/docs/components/button", label: "Button" },
      { href: "/docs/components/badge", label: "Badge" },
      { href: "/docs/components/avatar", label: "Avatar" },
      { href: "/docs/components/card", label: "Card" },
      { href: "/docs/components/input", label: "Input" },
      { href: "/docs/components/select", label: "Select" },
      { href: "/docs/components/alert", label: "Alert" },
      { href: "/docs/components/dialog", label: "Dialog" },
      { href: "/docs/components/progress", label: "Progress" },
      { href: "/docs/components/result", label: "Result", isNew: true },
    ],
  },
  {
    title: "Typography",
    items: [{ href: "/docs/components/typography", label: "Typography", isNew: true }],
  },
  {
    title: "Layout",
    items: [
      { href: "/docs/components/separator", label: "Separator" },
      { href: "/docs/components/scroll-area", label: "Scroll Area" },
      { href: "/docs/components/collapsible", label: "Collapsible" },
      { href: "/docs/components/resizable", label: "Resizable" },
      { href: "/docs/components/list", label: "List", isNew: true },
      { href: "/docs/components/descriptions", label: "Descriptions", isNew: true },
    ],
  },
  {
    title: "Navigation",
    items: [
      { href: "/docs/components/dropdown-menu", label: "Dropdown Menu" },
      { href: "/docs/components/context-menu", label: "Context Menu" },
      { href: "/docs/components/breadcrumb", label: "Breadcrumb" },
      { href: "/docs/components/pagination", label: "Pagination" },
      { href: "/docs/components/menu", label: "Menu", isNew: true },
    ],
  },
  {
    title: "Data Display",
    items: [
      { href: "/docs/components/table", label: "Table" },
      { href: "/docs/components/data-table", label: "Data Table" },
      { href: "/docs/components/timeline", label: "Timeline" },
      { href: "/docs/components/statistic", label: "Statistic" },
      { href: "/docs/components/empty", label: "Empty State" },
      { href: "/docs/components/image", label: "Image", isNew: true },
      { href: "/docs/components/tree", label: "Tree", isNew: true },
      { href: "/docs/components/transfer", label: "Transfer", isNew: true },
      { href: "/docs/components/qrcode", label: "QR Code", isNew: true },
    ],
  },
  {
    title: "Forms",
    items: [
      { href: "/docs/components/form", label: "Form" },
      { href: "/docs/components/calendar", label: "Calendar" },
      { href: "/docs/components/date-picker", label: "Date Picker" },
      { href: "/docs/components/combobox", label: "Combobox" },
      { href: "/docs/components/input-number", label: "Input Number", isNew: true },
      { href: "/docs/components/segmented", label: "Segmented", isNew: true },
      { href: "/docs/components/time-picker", label: "Time Picker", isNew: true },
      { href: "/docs/components/color-picker", label: "Color Picker", isNew: true },
      { href: "/docs/components/upload", label: "Upload", isNew: true },
    ],
  },
  {
    title: "Feedback",
    items: [
      { href: "/docs/components/toast", label: "Toast" },
      { href: "/docs/components/tooltip", label: "Tooltip" },
      { href: "/docs/components/popover", label: "Popover" },
      { href: "/docs/components/sheet", label: "Sheet" },
      { href: "/docs/components/drawer", label: "Drawer" },
      { href: "/docs/components/tour", label: "Tour", isNew: true },
      { href: "/docs/components/watermark", label: "Watermark", isNew: true },
    ],
  },
  {
    title: "AI",
    items: [{ href: "/docs/components/chat-ui", label: "Chat UI", isNew: true }],
  },
  {
    title: "Charts",
    items: [
      { href: "/docs/components/line-chart", label: "Line Chart" },
      { href: "/docs/components/bar-chart", label: "Bar Chart" },
      { href: "/docs/components/area-chart", label: "Area Chart" },
      { href: "/docs/components/pie-chart", label: "Pie Chart" },
      { href: "/docs/components/radar-chart", label: "Radar Chart" },
    ],
  },
  {
    title: "WOW Effects",
    items: [
      { href: "/docs/components/aurora", label: "Aurora Background" },
      { href: "/docs/components/beam", label: "Animated Beam" },
      { href: "/docs/components/marquee", label: "Marquee" },
      { href: "/docs/components/spotlight", label: "Spotlight" },
      { href: "/docs/components/particles", label: "Particle System" },
      { href: "/docs/components/carousel", label: "Carousel" },
      { href: "/docs/components/float-button", label: "Float Button", isNew: true },
    ],
  },
]

export function DocsSidebar() {
  const path = usePathname()

  return (
    <aside className="hidden w-56 shrink-0 lg:block">
      <div className="sticky top-20 max-h-[calc(100vh-5rem)] space-y-6 overflow-y-auto pb-10 pr-2">
        {nav.map((section) => (
          <div key={section.title}>
            <p className="mb-1.5 px-2.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
              {section.title}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "flex items-center justify-between rounded-md px-2.5 py-1.5 text-sm transition-colors",
                      path === item.href
                        ? "bg-accent font-medium text-foreground"
                        : "text-muted-foreground hover:bg-accent/50 hover:text-foreground",
                    )}
                  >
                    {item.label}
                    {item.isNew && (
                      <span className="ml-2 rounded-full bg-primary/15 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wide text-primary">
                        New
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </aside>
  )
}
