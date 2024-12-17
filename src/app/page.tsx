import { NavBar } from '@/components/nav-bar'
import { HeroSection } from '@/components/hero-section'
import { FeaturesGrid } from '@/components/features-grid'
import { DemoSection } from '@/components/demo-section'
import { TrustedBy } from '@/components/trusted-by'
import { ExploreFeatures } from '@/components/explore-features'
import { ContactForm } from '@/components/contact-form'

export default function Home() {
  return (
    <main className="relative">
      <NavBar />
      <HeroSection />
      <FeaturesGrid />
      <DemoSection />
      <TrustedBy />
      <ExploreFeatures />
      <ContactForm />
    </main>
  )
}

