import { AuroraBackground } from "@benflux-ui/react"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { ComponentsShowcase } from "@/components/landing/components-showcase"
import { ThemesSection } from "@/components/landing/themes-section"
import { CLISection } from "@/components/landing/cli-section"
import { StatsSection } from "@/components/landing/stats-section"
import { CTASection } from "@/components/landing/cta-section"
import { Navbar } from "@/components/ui/navbar"
import { Footer } from "@/components/ui/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <AuroraBackground>
          <HeroSection />
        </AuroraBackground>
        <StatsSection />
        <FeaturesSection />
        <ComponentsShowcase />
        <ThemesSection />
        <CLISection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
