import Link from 'next/link'; 
import { Button } from '@/components/ui/button'
import CoreLayers from './core-layers';

export function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center pt-24 pb-35" id="home">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 mt-24 text-center">
      AI + WEB3 INNOVATION
      </h1>
      <p className="text-gray-400 md:text-xl max-w-[900px] text-center mb-12">
      Your Gateway to Custom AI & Blockchain Infra. Leverage decentralized AI and blockchain tools to build powerful, tailor-made solutions. Var Labs provides the infrastructure,<br />
      you bring the vision.
      </p>
      <div className="flex justify-center gap-4">
          <a>
            <Link href="#core_layer">
              <Button className="bg-[#96EA63] hover:bg-green-600">
              Explore Features
              </Button>
            </Link>
          </a>
          {/* Added Get Started button 
          <Button variant="outline">
            Get Started
          </Button>
          */}
        </div>
    </div>
  )
}