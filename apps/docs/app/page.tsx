import { CLISection } from "@/components/landing/cli-section"
import { ComponentsShowcase } from "@/components/landing/components-showcase"
import { CTASection } from "@/components/landing/cta-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { HeroSection } from "@/components/landing/hero-section"
import { OpenSourceSection } from "@/components/landing/open-source-section"
import { ThemesSection } from "@/components/landing/themes-section"
import { Footer } from "@/components/ui/footer"
import { Navbar } from "@/components/ui/navbar"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <HeroSection />
        <ComponentsShowcase />
        <FeaturesSection />
        <OpenSourceSection />
        <ThemesSection />
        <CLISection />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
