import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function DemoSection() {
  return (
    <div className="container px-4 md:px-6 py-10 pl-40 ml-32">
      <div className="rounded-xl border border-gray-800 p-8 text-center backdrop-blur-sm">
        <h2 className="text-2xl font-bold mb-4">
          A step-by-step visual or interactive demo of the deployment process.
        </h2>
        <p className="text-gray-400 mb-6">
          Join us on the journey to the decentralized future.
        </p>
        <Button className="bg-[#96EA63] hover:bg-green-600">
          Join Beta <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

