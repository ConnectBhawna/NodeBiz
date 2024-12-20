import { NavBar } from '@/components/nav-bar'
import { HeroSection } from '@/components/hero-section'
import { FeaturesGrid } from '@/components/features-grid'
import { DemoSection } from '@/components/demo-section'
import { TrustedBy } from '@/components/trusted-by'
import ExploreFeatures  from '@/components/explore-features'
import { ContactForm } from '@/components/contact-form'
import FeatureSection from '@/components/feature-section'
import BuildersSection from '@/components/builders-section'
import IndustrySection from '@/components/industry-section'
import { CoreLayers } from '@/components/core-layers'

export default function Home() {
  return (
    <main className="relative">
      <br />
      <br />
      <NavBar />
      <HeroSection />
      <br />
      <br />
      <br />
      <FeatureSection />
      <br />
      <br />
      <br />
      <BuildersSection />
      <br />
      <br />
      <br />
      <IndustrySection />
      <br />
      <br />
      <br />
      <CoreLayers />
      <ExploreFeatures />
      <DemoSection />
      <ContactForm />
    </main>
  )
}

