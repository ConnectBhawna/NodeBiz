import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function DemoSection() {
  return (
    <div className="container px-4 md:px-6 py-10 pl-40 ml-32">
      <div className="rounded-xl border border-gray-800 p-8 text-center backdrop-blur-sm">
        <h2 className="text-2xl font-bold mb-4">
        Join the Future of AI and Web3
        </h2>
        <p className="text-gray-400 mb-6">
        NodeBiz is where the future of AI and Web3 converges. Build, innovate, and grow in a decentralized, equitable ecosystem designed for limitless possibilities.
        </p>
        <Button className="bg-[#96EA63] hover:bg-green-600">
        Start your Journey <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

