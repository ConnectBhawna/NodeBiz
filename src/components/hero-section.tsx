import { Button } from '@/components/ui/button'

export function HeroSection() {
  return (
    <div className="container mx-auto px-4 py-16 flex flex-col items-center justify-center pt-24 pb-35">
      <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-6 mt-24 text-center">
        Effortless Blockchain Node<br />
        Management with Unmatched<br />
        Reliability
      </h1>
      <p className="text-gray-400 md:text-xl max-w-[900px] text-center mb-12">
        Deploy secure, MEV-optimized nodes with one click. Experience institutional-grade hardware, 99.99% uptime, and unparalleled scalability.
      </p>
      <div className="flex justify-center gap-4">
        <Button className=" bg-[#96EA63] hover:bg-green-600">
          Deploy Your Node Now
        </Button>
        <Button variant="outline">
          Request a Demo
        </Button>
      </div>
    </div>
  )
}