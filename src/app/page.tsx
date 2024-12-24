import { NavBar } from '@/components/nav-bar'
import { HeroSection } from '@/components/hero-section'
import { DemoSection } from '@/components/demo-section'
import ExploreFeatures  from '@/components/explore-features'
import { ContactForm } from '@/components/contact-form'
import FeatureSection from '@/components/feature-section'
import BuildersSection from '@/components/builders-section'
import IndustrySection from '@/components/industry-section'
import { CoreLayers } from '@/components/core-layers'

export default function Home() {
  return (
    <main className="relative">
    <div className="space-y-14"> {/* or whatever spacing you prefer */}
      <NavBar />
      <HeroSection />
      <FeatureSection />
      <BuildersSection />
      <IndustrySection />
      <CoreLayers />
      <ExploreFeatures />
      <DemoSection />
      <ContactForm />
    </div>
  </main>
  )
}

