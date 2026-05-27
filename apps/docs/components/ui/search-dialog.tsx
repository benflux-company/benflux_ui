"use client"

import { useEffect, useState } from "react"

import { useRouter } from "next/navigation"

import {
  BarChart2,
  BookOpen,
  Box,
  FileText,
  Layers,
  Layout,
  MessageSquare,
  Navigation,
  Palette,
  Sparkles,
  Terminal,
  Zap,
} from "lucide-react"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@benflux-ui/react"

const searchGroups = [
  {
    heading: "Getting Started",
    icon: BookOpen,
    items: [
      { label: "Introduction", href: "/docs", description: "Overview of Benflux UI" },
      { label: "Installation", href: "/docs/installation", description: "Install and configure" },
      { label: "Theming", href: "/docs/theming", description: "Customize themes" },
      { label: "CLI", href: "/docs/cli", description: "Use the Benflux CLI" },
      { label: "Changelog", href: "/changelog", description: "What's new" },
    ],
  },
  {
    heading: "Inputs",
    icon: Layout,
    items: [
      { label: "Button", href: "/docs/components/button", description: "Trigger actions" },
      { label: "Input", href: "/docs/components/input", description: "Text input field" },
      { label: "Select", href: "/docs/components/select", description: "Dropdown selection" },
      { label: "Combobox", href: "/docs/components/combobox", description: "Searchable select" },
      { label: "Calendar", href: "/docs/components/calendar", description: "Date picker" },
      { label: "Date Picker", href: "/docs/components/date-picker", description: "Date selection" },
      { label: "Form", href: "/docs/components/form", description: "Form with validation" },
      { label: "All Inputs", href: "/docs/components/inputs", description: "All input components" },
    ],
  },
  {
    heading: "Layout",
    icon: Layers,
    items: [
      { label: "Card", href: "/docs/components/card", description: "Content container" },
      { label: "Badge", href: "/docs/components/badge", description: "Status indicator" },
      { label: "Avatar", href: "/docs/components/avatar", description: "User avatar" },
      { label: "Separator", href: "/docs/components/separator", description: "Visual divider" },
      {
        label: "Scroll Area",
        href: "/docs/components/scroll-area",
        description: "Custom scrollbar",
      },
      {
        label: "Collapsible",
        href: "/docs/components/collapsible",
        description: "Expandable content",
      },
      { label: "Resizable", href: "/docs/components/resizable", description: "Resizable panels" },
      {
        label: "All Layout",
        href: "/docs/components/layout",
        description: "All layout components",
      },
    ],
  },
  {
    heading: "Navigation",
    icon: Navigation,
    items: [
      { label: "Breadcrumb", href: "/docs/components/breadcrumb", description: "Page hierarchy" },
      { label: "Pagination", href: "/docs/components/pagination", description: "Page navigation" },
      { label: "Tabs", href: "/docs/components/navigation", description: "Tabbed interface" },
      { label: "Tooltip", href: "/docs/components/tooltip", description: "Hover tooltip" },
      { label: "Popover", href: "/docs/components/popover", description: "Floating content" },
      {
        label: "Dropdown Menu",
        href: "/docs/components/dropdown-menu",
        description: "Context menu",
      },
      { label: "Dialog", href: "/docs/components/dialog", description: "Modal dialog" },
      { label: "Drawer", href: "/docs/components/drawer", description: "Slide-in panel" },
      { label: "Sheet", href: "/docs/components/sheet", description: "Side sheet" },
      { label: "Carousel", href: "/docs/components/carousel", description: "Slideshow" },
    ],
  },
  {
    heading: "Feedback",
    icon: MessageSquare,
    items: [
      { label: "Alert", href: "/docs/components/alert", description: "Status messages" },
      { label: "Toast", href: "/docs/components/toast", description: "Notifications" },
      { label: "Progress", href: "/docs/components/progress", description: "Progress bar" },
      {
        label: "All Feedback",
        href: "/docs/components/feedback",
        description: "All feedback components",
      },
    ],
  },
  {
    heading: "Data Display",
    icon: Box,
    items: [
      { label: "Data Table", href: "/docs/components/data-table", description: "Sortable table" },
      { label: "Table", href: "/docs/components/table", description: "HTML table" },
      { label: "Timeline", href: "/docs/components/timeline", description: "Chronological list" },
      { label: "Statistic", href: "/docs/components/statistic", description: "Metric display" },
      { label: "Empty", href: "/docs/components/empty", description: "Empty state" },
    ],
  },
  {
    heading: "Charts",
    icon: BarChart2,
    items: [
      { label: "Line Chart", href: "/docs/components/line-chart", description: "Line graph" },
      { label: "Bar Chart", href: "/docs/components/bar-chart", description: "Bar graph" },
      { label: "Area Chart", href: "/docs/components/area-chart", description: "Area graph" },
      { label: "Pie Chart", href: "/docs/components/pie-chart", description: "Pie graph" },
      { label: "Radar Chart", href: "/docs/components/radar-chart", description: "Radar graph" },
      { label: "All Charts", href: "/docs/components/charts", description: "All chart components" },
    ],
  },
  {
    heading: "WOW Effects",
    icon: Sparkles,
    items: [
      {
        label: "Aurora Background",
        href: "/docs/components/aurora",
        description: "Animated gradient background",
      },
      { label: "Animated Beam", href: "/docs/components/beam", description: "Beam animation" },
      { label: "Marquee", href: "/docs/components/marquee", description: "Scrolling banner" },
      { label: "Spotlight", href: "/docs/components/spotlight", description: "Spotlight effect" },
      {
        label: "Particle System",
        href: "/docs/components/particles",
        description: "Particle animation",
      },
    ],
  },
  {
    heading: "Pages",
    icon: FileText,
    items: [
      { label: "Themes", href: "/themes", description: "Browse all themes" },
      { label: "Blocks", href: "/blocks", description: "Pre-built sections" },
      { label: "Showcase", href: "/showcase", description: "Community examples" },
    ],
  },
]

interface SearchDialogProps {
  open: boolean
  onOpenChange: (open: boolean) => void
}

export function SearchDialog({ open, onOpenChange }: SearchDialogProps) {
  const router = useRouter()

  const navigate = (href: string) => {
    onOpenChange(false)
    router.push(href)
  }

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search docs…" />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        {searchGroups.map((group, i) => (
          <div key={group.heading}>
            {i > 0 && <CommandSeparator />}
            <CommandGroup heading={group.heading}>
              {group.items.map((item) => (
                <CommandItem
                  key={item.href}
                  value={`${item.label} ${item.description}`}
                  onSelect={() => navigate(item.href)}
                  className="flex items-center gap-2"
                >
                  <group.icon className="h-4 w-4 shrink-0 text-muted-foreground" />
                  <div className="flex flex-col">
                    <span>{item.label}</span>
                    <span className="text-xs text-muted-foreground">{item.description}</span>
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </div>
        ))}
      </CommandList>
    </CommandDialog>
  )
}
