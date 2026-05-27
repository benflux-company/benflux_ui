# @benflux-ui/react

**Beautiful, animated, accessible UI components for React & Next.js.**

[![npm version](https://img.shields.io/npm/v/@benflux-ui/react?style=flat-square)](https://npmjs.com/package/@benflux-ui/react)
[![npm downloads](https://img.shields.io/npm/dm/@benflux-ui/react?style=flat-square)](https://npmjs.com/package/@benflux-ui/react)
[![license](https://img.shields.io/npm/l/@benflux-ui/react?style=flat-square)](https://github.com/benflux-company/benflux_ui/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-ready-blue?style=flat-square)](https://typescriptlang.org)

63+ production-ready components built on Radix UI, styled with Tailwind CSS, and animated with Framer Motion. Fully compatible with Next.js App Router.

---

## Installation

```bash
npm install @benflux-ui/react
# or
pnpm add @benflux-ui/react
# or
yarn add @benflux-ui/react
```

---

## Setup

Add the provider and styles to your root layout:

```tsx
// app/layout.tsx
import { BenfluxProvider } from "@benflux-ui/react"
import "@benflux-ui/react/styles"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <BenfluxProvider theme="dark">{children}</BenfluxProvider>
      </body>
    </html>
  )
}
```

Configure Tailwind CSS to include the component styles:

```js
// tailwind.config.js
export default {
  content: ["./app/**/*.{ts,tsx}", "./node_modules/@benflux-ui/react/dist/**/*.{js,mjs}"],
}
```

---

## Usage

```tsx
import { Badge, Button, Card, CardContent, CardHeader, CardTitle } from "@benflux-ui/react"

export default function Example() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hello Benflux UI</CardTitle>
      </CardHeader>
      <CardContent className="flex gap-2">
        <Button>Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="gradient">Gradient</Button>
        <Badge variant="success">New</Badge>
      </CardContent>
    </Card>
  )
}
```

---

## Components

### Inputs

`Button` `Input` `Textarea` `Label` `Checkbox` `Switch` `RadioGroup` `Slider` `Rating` `Toggle` `ToggleGroup` `OTPInput` `Select` `Combobox` `DatePicker` `Calendar`

### Layout

`Card` `Badge` `Avatar` `AvatarGroup` `Separator` `ScrollArea` `Collapsible` `ResizablePanel` `Tag` `TagInput`

### Navigation

`Tabs` `Tooltip` `Popover` `HoverCard` `DropdownMenu` `ContextMenu` `Command` `Breadcrumb` `Pagination` `Sheet` `Drawer` `Carousel` `Stepper`

### Feedback

`Dialog` `AlertDialog` `Toast` `Progress` `Skeleton` `Accordion` `Alert` `Spinner`

### Data Display

`DataTable` `Table` `Charts` (Line, Bar, Area, Pie, Radar) `Timeline` `Statistic` `Empty` `CodeBlock`

### WOW Effects

`AuroraBackground` `AnimatedBeam` `MagicCard` `Meteors` `SpotlightCard` `Marquee` `ParticleSystem` `BentoGrid` `BorderBeam` `AnimatedText` `NumberCounter`

### AI

`ChatUI`

---

## Themes

8 built-in themes:

```tsx
<BenfluxProvider theme="light" />
<BenfluxProvider theme="dark" />
<BenfluxProvider theme="amoled" />
<BenfluxProvider theme="glass" />
<BenfluxProvider theme="neon" />
<BenfluxProvider theme="cyberpunk" />
<BenfluxProvider theme="luxury" />
<BenfluxProvider theme="minimal" />
```

---

## TypeScript

Fully typed. All components ship with complete TypeScript definitions.

```tsx
import type { ButtonProps } from "@benflux-ui/react"

function MyButton({ variant, size, ...props }: ButtonProps) {
  return <Button variant={variant} size={size} {...props} />
}
```

---

## Requirements

- React 18+
- Tailwind CSS 3+
- Next.js 13+ (App Router supported)

---

## Links

- [GitHub](https://github.com/benflux-company/benflux_ui)
- [npm](https://npmjs.com/package/@benflux-ui/react)

## License

MIT
