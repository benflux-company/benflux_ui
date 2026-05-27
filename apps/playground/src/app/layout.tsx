import type { Metadata } from "next"

import "./globals.css"

export const metadata: Metadata = {
  title: "Benflux UI — Demo",
  description: "Component playground for Benflux UI",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  )
}
