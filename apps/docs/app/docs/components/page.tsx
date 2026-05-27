import type { Metadata } from "next"
import Link from "next/link"

import { ArrowRight } from "lucide-react"

export const metadata: Metadata = { title: "Components" }

const NEW = new Set([
  "Typography",
  "List",
  "Descriptions",
  "Menu",
  "Image",
  "Tree",
  "Transfer",
  "QR Code",
  "Input Number",
  "Segmented",
  "Time Picker",
  "Color Picker",
  "Upload",
  "Tour",
  "Watermark",
  "Float Button",
  "Result",
])

const categories = [
  {
    title: "Layout",
    description: "Structure and organize page content.",
    components: [
      {
        name: "Typography",
        href: "/docs/components/typography",
        description: "Heading, Text, Paragraph and Link components",
      },
      {
        name: "Card",
        href: "/docs/components/card",
        description: "Versatile content container with variants",
      },
      {
        name: "Badge",
        href: "/docs/components/badge",
        description: "Status indicators and labels",
      },
      {
        name: "Avatar",
        href: "/docs/components/avatar",
        description: "User profile images with fallback and groups",
      },
      {
        name: "List",
        href: "/docs/components/list",
        description: "Data-driven list with grid and bordered modes",
      },
      {
        name: "Descriptions",
        href: "/docs/components/descriptions",
        description: "Key-value data display for detail pages",
      },
      {
        name: "Separator",
        href: "/docs/components/separator",
        description: "Visual divider between content",
      },
      {
        name: "Scroll Area",
        href: "/docs/components/scroll-area",
        description: "Custom scrollbar for any container",
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
      {
        name: "Tag",
        href: "/docs/components/separator",
        description: "Compact label with input variant",
      },
    ],
  },
  {
    title: "Inputs",
    description: "Collect and validate user input.",
    components: [
      {
        name: "Button",
        href: "/docs/components/button",
        description: "Trigger actions with multiple variants",
      },
      {
        name: "Input",
        href: "/docs/components/input",
        description: "Text entry with multiple styles",
      },
      {
        name: "Input Number",
        href: "/docs/components/input-number",
        description: "Numeric input with +/- controls and precision",
      },
      { name: "Textarea", href: "/docs/components/input", description: "Multi-line text input" },
      { name: "Select", href: "/docs/components/select", description: "Dropdown option selector" },
      {
        name: "Combobox",
        href: "/docs/components/combobox",
        description: "Searchable select with multi-select",
      },
      {
        name: "Segmented",
        href: "/docs/components/segmented",
        description: "Sliding segmented control",
      },
      {
        name: "Checkbox",
        href: "/docs/components/form",
        description: "Checkable input with label",
      },
      {
        name: "Radio Group",
        href: "/docs/components/form",
        description: "Single-choice radio buttons",
      },
      { name: "Switch", href: "/docs/components/form", description: "Toggle between two states" },
      { name: "Slider", href: "/docs/components/form", description: "Range value picker" },
      { name: "Rating", href: "/docs/components/form", description: "Star rating input" },
      {
        name: "Color Picker",
        href: "/docs/components/color-picker",
        description: "Pick colors with swatches and hex input",
      },
      {
        name: "Time Picker",
        href: "/docs/components/time-picker",
        description: "Scroll-based time selection (12/24h)",
      },
      { name: "Calendar", href: "/docs/components/calendar", description: "Date picker calendar" },
      {
        name: "Date Picker",
        href: "/docs/components/date-picker",
        description: "Date and range selection",
      },
      {
        name: "Upload",
        href: "/docs/components/upload",
        description: "Drag-and-drop file upload with progress",
      },
      { name: "OTP Input", href: "/docs/components/form", description: "One-time password input" },
      { name: "Toggle", href: "/docs/components/form", description: "Two-state toggle button" },
      { name: "Form", href: "/docs/components/form", description: "React Hook Form integration" },
    ],
  },
  {
    title: "Navigation",
    description: "Help users move through your app.",
    components: [
      {
        name: "Menu",
        href: "/docs/components/menu",
        description: "Collapsible sidebar and horizontal nav",
      },
      {
        name: "Tabs",
        href: "/docs/components/navigation",
        description: "Switch between content panels",
      },
      {
        name: "Breadcrumb",
        href: "/docs/components/breadcrumb",
        description: "Show current page location",
      },
      {
        name: "Pagination",
        href: "/docs/components/pagination",
        description: "Navigate between pages",
      },
      {
        name: "Stepper",
        href: "/docs/components/navigation",
        description: "Multi-step progress indicator",
      },
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
        name: "Command",
        href: "/docs/components/navigation",
        description: "Searchable command palette",
      },
      { name: "Sheet", href: "/docs/components/navigation", description: "Side panel overlay" },
      {
        name: "Drawer",
        href: "/docs/components/drawer",
        description: "Bottom sheet drawer (vaul)",
      },
      {
        name: "Carousel",
        href: "/docs/components/carousel",
        description: "Embla-powered slideshow",
      },
      {
        name: "Hover Card",
        href: "/docs/components/navigation",
        description: "Rich preview on hover",
      },
      { name: "Popover", href: "/docs/components/popover", description: "Rich floating content" },
    ],
  },
  {
    title: "Data Display",
    description: "Display and visualize structured data.",
    components: [
      { name: "Table", href: "/docs/components/table", description: "HTML table primitives" },
      {
        name: "Data Table",
        href: "/docs/components/data-table",
        description: "Full-featured table with TanStack",
      },
      {
        name: "Image",
        href: "/docs/components/image",
        description: "Viewer with grid and fullscreen lightbox",
      },
      {
        name: "Tree",
        href: "/docs/components/tree",
        description: "Recursive tree with checkboxes and icons",
      },
      {
        name: "Transfer",
        href: "/docs/components/transfer",
        description: "Dual-list component picker",
      },
      {
        name: "QR Code",
        href: "/docs/components/qrcode",
        description: "Generate scannable QR codes",
      },
      {
        name: "Code Block",
        href: "/docs/components/navigation",
        description: "Syntax-highlighted code display",
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
        name: "Empty",
        href: "/docs/components/empty",
        description: "Placeholder for empty content",
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
    title: "Feedback",
    description: "Inform users about app state.",
    components: [
      {
        name: "Alert",
        href: "/docs/components/alert",
        description: "Contextual feedback messages",
      },
      { name: "Alert Dialog", href: "/docs/components/dialog", description: "Confirmation dialog" },
      { name: "Dialog", href: "/docs/components/dialog", description: "Modal overlay for actions" },
      {
        name: "Toast",
        href: "/docs/components/toast",
        description: "Temporary notification messages",
      },
      {
        name: "Skeleton",
        href: "/docs/components/feedback",
        description: "Loading placeholder shimmer",
      },
      { name: "Spinner", href: "/docs/components/feedback", description: "Loading indicator" },
      {
        name: "Progress",
        href: "/docs/components/progress",
        description: "Progress bars and indicators",
      },
      {
        name: "Accordion",
        href: "/docs/components/feedback",
        description: "Expandable FAQ sections",
      },
      {
        name: "Tooltip",
        href: "/docs/components/tooltip",
        description: "Hover-triggered info overlay",
      },
      {
        name: "Result",
        href: "/docs/components/result",
        description: "Success / error / 404 feedback pages",
      },
      { name: "Tour", href: "/docs/components/tour", description: "Step-by-step onboarding guide" },
      {
        name: "Watermark",
        href: "/docs/components/watermark",
        description: "Canvas-rendered watermark overlay",
      },
    ],
  },
  {
    title: "AI",
    description: "Ready-to-use AI interface components.",
    components: [
      {
        name: "Chat UI",
        href: "/docs/components/navigation",
        description: "Full chat interface with streaming support",
      },
    ],
  },
  {
    title: "WOW Effects",
    description: "Eye-catching animated components for landing pages.",
    components: [
      {
        name: "Float Button",
        href: "/docs/components/float-button",
        description: "Fixed action button with group and back-to-top",
      },
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
        name: "Magic Card",
        href: "/docs/components/navigation",
        description: "Mouse-tracking gradient card",
      },
      {
        name: "Bento Grid",
        href: "/docs/components/navigation",
        description: "Asymmetric feature grid",
      },
      {
        name: "Border Beam",
        href: "/docs/components/navigation",
        description: "Animated glowing border",
      },
      {
        name: "Animated Text",
        href: "/docs/components/navigation",
        description: "Text reveal and number counter",
      },
      {
        name: "Meteors",
        href: "/docs/components/navigation",
        description: "Falling meteor animation",
      },
    ],
  },
]

export default function ComponentsPage() {
  const total = categories.reduce((sum, c) => sum + c.components.length, 0)

  return (
    <div className="space-y-12">
      <div className="space-y-3">
        <h1 className="text-4xl font-bold tracking-tight">Components</h1>
        <p className="text-lg text-muted-foreground">
          {total}+ components organized by category. Click any component to view its documentation,
          live preview, and usage examples.
        </p>
      </div>

      {categories.map((cat) => (
        <div key={cat.title} className="space-y-4">
          <div className="flex items-baseline gap-3">
            <h2 className="text-xl font-semibold tracking-tight">{cat.title}</h2>
            <span className="text-sm text-muted-foreground">
              {cat.components.length} components
            </span>
          </div>
          <p className="text-sm text-muted-foreground">{cat.description}</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {cat.components.map((comp) => (
              <Link
                key={comp.name}
                href={comp.href}
                className="group flex items-center justify-between rounded-xl border border-border p-4 transition-all hover:border-primary/40 hover:bg-accent/20"
              >
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium">{comp.name}</p>
                    {NEW.has(comp.name) && (
                      <span className="shrink-0 rounded-full bg-primary/15 px-1.5 py-0.5 text-[10px] font-semibold leading-none text-primary">
                        New
                      </span>
                    )}
                  </div>
                  <p className="mt-0.5 truncate text-xs text-muted-foreground">
                    {comp.description}
                  </p>
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
