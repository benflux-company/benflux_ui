import type { Metadata, Viewport } from "next"
import { Inter } from "next/font/google"
import { BenfluxProvider } from "@benflux-ui/themes"
import { Toaster } from "@benflux-ui/react"
import "./globals.css"

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" })

export const metadata: Metadata = {
  title: {
    default: "Benflux UI — Revolutionary React Component Library",
    template: "%s | Benflux UI",
  },
  description:
    "200+ beautiful, animated, accessible UI components for React & Next.js. The next generation of UI libraries.",
  keywords: [
    "react",
    "nextjs",
    "ui library",
    "components",
    "tailwindcss",
    "framer motion",
    "design system",
    "dark mode",
    "animations",
    "accessible",
  ],
  authors: [{ name: "Benflux", url: "https://benflux-ui.dev" }],
  creator: "Benflux",
  openGraph: {
    title: "Benflux UI",
    description: "Revolutionary React component library for the future of the web",
    url: "https://benflux-ui.dev",
    siteName: "Benflux UI",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Benflux UI",
    description: "Revolutionary React component library",
    creator: "@benflux_ui",
  },
  robots: { index: true, follow: true },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a12" },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.variable}>
        <BenfluxProvider defaultTheme="dark" storageKey="nebula-docs-theme">
          {children}
          <Toaster position="bottom-right" />
        </BenfluxProvider>
      </body>
    </html>
  )
}
