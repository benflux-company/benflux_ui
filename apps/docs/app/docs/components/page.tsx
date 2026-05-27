import type { Metadata } from "next"
import Link from "next/link"

import { ArrowRight } from "lucide-react"

export const metadata: Metadata = { title: "Components" }

const categories = [
  {
    title: "Primitives",
    description: "Core building blocks for your UI.",
    components: [
      {
        name: "Button",
        href: "/docs/components/button",
        description: "Trigger actions with multiple variants",
      },
      {
        name: "Badge",
        href: "/docs/components/badge",
        description: "Status indicators and labels",
      },
      {
        name: "Avatar",
        href: "/docs/components/avatar",
        description: "User profile images and initials",
      },
      { name: "Card", href: "/docs/components/card", description: "Versatile content container" },
      {
        name: "Input",
        href: "/docs/components/input",
        description: "Text entry with multiple styles",
      },
      { name: "Select", href: "/docs/components/select", description: "Dropdown option selector" },
      {
        name: "Alert",
        href: "/docs/components/alert",
        description: "Contextual feedback messages",
      },
      { name: "Dialog", href: "/docs/components/dialog", description: "Modal overlay for actions" },
      {
        name: "Progress",
        href: "/docs/components/progress",
        description: "Progress bars and indicators",
      },
    ],
  },
  {
    title: "Layout",
    description: "Structure and organize page content.",
    components: [
      {
        name: "Separator",
        href: "/docs/components/separator",
        description: "Visual divider between content",
      },
      {
        name: "Scroll Area",
        href: "/docs/components/scroll-area",
        description: "Custom scrollbars",
      },
      {
        name: "Collapsible",
        href: "/docs/components/collapsible",
        description: "Expandable content sections",
      },
      {
        name: "Resizable",
        href: "/docs/components/resizable",
        description: "Drag-to-resize panel groups",
      },
    ],
  },
  {
    title: "Navigation",
    description: "Help users move through your app.",
    components: [
      {
        name: "Dropdown Menu",
        href: "/docs/components/dropdown-menu",
        description: "Action menu triggered by button",
      },
      {
        name: "Context Menu",
        href: "/docs/components/context-menu",
        description: "Right-click action menu",
      },
      {
        name: "Breadcrumb",
        href: "/docs/components/breadcrumb",
        description: "Show current page location",
      },
      {
        name: "Pagination",
        href: "/docs/components/pagination",
        description: "Navigate between pages of content",
      },
    ],
  },
  {
    title: "Data Display",
    description: "Display and organize structured data.",
    components: [
      { name: "Table", href: "/docs/components/table", description: "HTML table primitives" },
      {
        name: "Data Table",
        href: "/docs/components/data-table",
        description: "Full-featured table with TanStack",
      },
      {
        name: "Timeline",
        href: "/docs/components/timeline",
        description: "Vertical event sequence",
      },
      {
        name: "Statistic",
        href: "/docs/components/statistic",
        description: "Animated metric display",
      },
      {
        name: "Empty State",
        href: "/docs/components/empty",
        description: "Placeholder for empty content",
      },
    ],
  },
  {
    title: "Forms",
    description: "Collect and validate user input.",
    components: [
      { name: "Form", href: "/docs/components/form", description: "React Hook Form integration" },
      { name: "Calendar", href: "/docs/components/calendar", description: "Date picker calendar" },
      {
        name: "Date Picker",
        href: "/docs/components/date-picker",
        description: "Date and range selection",
      },
      {
        name: "Combobox",
        href: "/docs/components/combobox",
        description: "Searchable select with multi-select",
      },
    ],
  },
  {
    title: "Feedback",
    description: "Inform users about app state.",
    components: [
      {
        name: "Toast",
        href: "/docs/components/toast",
        description: "Temporary notification messages",
      },
      {
        name: "Tooltip",
        href: "/docs/components/tooltip",
        description: "Hover-triggered info overlay",
      },
      { name: "Popover", href: "/docs/components/popover", description: "Rich floating content" },
      { name: "Sheet", href: "/docs/components/sheet", description: "Side panel overlay" },
      {
        name: "Drawer",
        href: "/docs/components/drawer",
        description: "Bottom sheet drawer (vaul)",
      },
    ],
  },
  {
    title: "Charts",
    description: "Visualize data beautifully with Recharts.",
    components: [
      {
        name: "Line Chart",
        href: "/docs/components/line-chart",
        description: "Trend visualization",
      },
      {
        name: "Bar Chart",
        href: "/docs/components/bar-chart",
        description: "Comparison visualization",
      },
      {
        name: "Area Chart",
        href: "/docs/components/area-chart",
        description: "Filled area trends",
      },
      {
        name: "Pie Chart",
        href: "/docs/components/pie-chart",
        description: "Part-to-whole ratios",
      },
      {
        name: "Radar Chart",
        href: "/docs/components/radar-chart",
        description: "Multi-variable comparison",
      },
    ],
  },
  {
    title: "WOW Effects",
    description: "Eye-catching animated effects.",
    components: [
      {
        name: "Aurora Background",
        href: "/docs/components/aurora",
        description: "Animated gradient aurora",
      },
      {
        name: "Animated Beam",
        href: "/docs/components/beam",
        description: "Connection beam animation",
      },
      {
        name: "Marquee",
        href: "/docs/components/marquee",
        description: "Infinite scrolling ticker",
      },
      {
        name: "Spotlight",
        href: "/docs/components/spotlight",
        description: "Mouse-following spotlight",
      },
      {
        name: "Particle System",
        href: "/docs/components/particles",
        description: "Interactive particle field",
      },
      {
        name: "Carousel",
        href: "/docs/components/carousel",
        description: "Embla-powered slideshow",
      },
    ],
  },
]

export default function ComponentsPage() {
  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Components</h1>
        <p className="text-lg text-muted-foreground">
          60+ components organized by category. Click any component to view its documentation, live
          preview, and usage examples.
        </p>
      </div>

      {categories.map((cat) => (
        <div key={cat.title} className="space-y-4">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold tracking-tight">{cat.title}</h2>
            <p className="text-sm text-muted-foreground">{cat.description}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {cat.components.map((comp) => (
              <Link
                key={comp.name}
                href={comp.href}
                className="group flex items-center justify-between rounded-xl border border-border p-4 transition-all hover:border-primary/40 hover:bg-accent/20"
              >
                <div>
                  <p className="text-sm font-medium">{comp.name}</p>
                  <p className="mt-0.5 text-xs text-muted-foreground">{comp.description}</p>
                </div>
                <ArrowRight className="ml-2 h-3.5 w-3.5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:text-foreground" />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
