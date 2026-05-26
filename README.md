# 🌌 Benflux UI

> **The next-generation UI library for React & Next.js** — beautiful, animated, accessible, and built for the future of the web.

[![npm version](https://img.shields.io/npm/v/@benflux-ui/react)](https://npmjs.com/package/@benflux-ui/react)
[![npm downloads](https://img.shields.io/npm/dm/@benflux-ui/react)](https://npmjs.com/package/@benflux-ui/react)
[![license](https://img.shields.io/github/license/benflux20/benflux-ui)](LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue)](https://typescriptlang.org)
[![Discord](https://img.shields.io/discord/your-server-id?logo=discord)](https://discord.gg/benflux-ui)

---

## ✨ Why Benflux UI?

- **200+ components** — from basic inputs to mind-blowing WOW effects
- **AI-native** — Chat UI, streaming renderers, AI prompt inputs
- **Cinematic animations** — Powered by Framer Motion with GPU-accelerated effects
- **Fully accessible** — WCAG AAA, Radix UI primitives, keyboard-first
- **Dark mode & themes** — Cyberpunk, Glass, Neon, AMOLED, Luxury modes
- **Developer experience** — Copy/paste or install via npm + CLI
- **Tree-shakeable** — Zero unused code in production
- **RSC compatible** — Works with Next.js App Router

---

## 🚀 Quick Start

### Via CLI (Recommended)

```bash
npx benflux-ui init
npx benflux-ui add button
npx benflux-ui add dashboard
```

### Via NPM

```bash
pnpm add @benflux-ui/react
# or
npm install @benflux-ui/react
# or
yarn add @benflux-ui/react
```

### Setup

```tsx
// app/layout.tsx
import { BenfluxProvider } from "@benflux-ui/react"
import "@benflux-ui/react/styles"

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <BenfluxProvider theme="dark">
          {children}
        </BenfluxProvider>
      </body>
    </html>
  )
}
```

---

## 🎨 Components

### Layout
`Container` `Grid` `Stack` `Flex` `Masonry` `BentoGrid` `Sidebar` `Dock` `SplitPanels` `ResizableLayout` `InfiniteCanvas`

### Inputs
`Button` `Input` `Textarea` `OTPInput` `FloatingInput` `SearchCommand` `Combobox` `MultiSelect` `Slider` `RangeSlider` `Switch` `Checkbox` `Radio` `ToggleGroup` `Rating` `ColorPicker` `DatePicker` `TimePicker` `RichTextEditor` `MarkdownEditor` `AIPromptInput`

### Navigation
`Navbar` `MegaMenu` `FloatingDock` `Breadcrumb` `Tabs` `CommandMenu` `SpotlightSearch` `Pagination` `Stepper` `ContextMenu` `HoverCard`

### Feedback
`Toast` `Modal` `Drawer` `Dialog` `Sheet` `Popover` `Tooltip` `Progress` `Skeleton` `CommandPalette`

### Data Display
`Table` `DataGrid` `VirtualizedTable` `Charts` `Timeline` `Kanban` `Calendar` `ActivityFeed` `TreeView` `FileExplorer` `JSONViewer` `CodeBlock` `TerminalEmulator`

### AI Components
`ChatUI` `AIMessage` `AIStreamingRenderer` `PromptBox` `AIMarkdown` `TokenStreaming` `AITypingAnimation` `AIAgentsDashboard`

### WOW Effects
`AuroraBackground` `AnimatedBeam` `ParticleSystem` `Meteors` `MagicCards` `SpotlightEffect` `GlowingBorder` `LiquidButton` `Card3D` `Glassmorphism` `MeshGradient` `AnimatedText` `ScrollReveal` `InfiniteMarquee` `MagneticButton` `HolographicCard` `MatrixRain` `InteractiveCursor` `MorphingComponents`

---

## 🎭 Themes

```tsx
import { BenfluxProvider } from "@benflux-ui/react"

// Available themes
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

## 🛠 CLI

```bash
# Initialize in your project
npx benflux-ui init

# Add components
npx benflux-ui add button
npx benflux-ui add card input badge avatar

# Add complex blocks
npx benflux-ui add dashboard
npx benflux-ui add auth-pages
npx benflux-ui add ai-chat

# Install themes
npx benflux-ui theme install cyberpunk
npx benflux-ui theme install glass

# List available components
npx benflux-ui list
```

---

## 📦 Packages

| Package | Version | Description |
|---------|---------|-------------|
| `@benflux-ui/react` | [![npm](https://img.shields.io/npm/v/@benflux-ui/react)](https://npmjs.com/package/@benflux-ui/react) | Core component library |
| `@benflux-ui/animations` | [![npm](https://img.shields.io/npm/v/@benflux-ui/animations)](https://npmjs.com/package/@benflux-ui/animations) | Animation presets & utilities |
| `@benflux-ui/themes` | [![npm](https://img.shields.io/npm/v/@benflux-ui/themes)](https://npmjs.com/package/@benflux-ui/themes) | Theme system & tokens |
| `@benflux-ui/hooks` | [![npm](https://img.shields.io/npm/v/@benflux-ui/hooks)](https://npmjs.com/package/@benflux-ui/hooks) | Custom React hooks |
| `@benflux-ui/icons` | [![npm](https://img.shields.io/npm/v/@benflux-ui/icons)](https://npmjs.com/package/@benflux-ui/icons) | Icon components |
| `benflux-ui` | [![npm](https://img.shields.io/npm/v/benflux-ui)](https://npmjs.com/package/benflux-ui) | CLI tool |

---

## 🌟 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

```bash
# Clone and setup
git clone https://github.com/benflux20/benflux-ui.git
cd benflux-ui
pnpm install
pnpm dev
```

---

## 📄 License

MIT © [Benflux](https://github.com/benflux20)

---

<p align="center">
  <strong>Built with ❤️ for the future of the web</strong><br>
  <a href="https://benflux-ui.dev">benflux-ui.dev</a> · <a href="https://discord.gg/benflux-ui">Discord</a> · <a href="https://twitter.com/benflux_ui">Twitter</a>
</p>
# benflux_ui
