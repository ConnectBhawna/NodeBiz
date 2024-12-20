import { Card, CardContent } from "@/components/ui/card"

export default function Page() {
  return (
    <div className="h-[600px] bg-black p-6">
      <div className="max-w-5xl mx-auto rounded-2xl bg-[#3B5C2D] p-8">
        <h1 className="text-4xl font-bold text-white text-center mb-8">
          Explore NodeBiz Ecosystem
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          <Card className="bg-[#1A1A1A] border-0">
            <CardContent className="p-6">
              <h2 className="text-[#90FF66] text-xl font-semibold mb-4">
                Custom Solutions
              </h2>
              <p className="text-white text-lg leading-relaxed">
                Tailored products and platforms for AI + Web3 collaboration, custom chains, and AI infrastructure.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-[#1A1A1A] border-0">
            <CardContent className="p-6">
              <h2 className="text-[#90FF66] text-xl font-semibold mb-4">
                SDKs for Developers
              </h2>
              <p className="text-white text-lg leading-relaxed">
                Accelerate innovation with modular tools and seamless integration frameworks.
              </p>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-[#1A1A1A] border-0">
          <CardContent className="p-6">
            <h2 className="text-[#90FF66] text-xl font-semibold mb-4">
              Smart Contracts
            </h2>
            <p className="text-white text-lg leading-relaxed">
              Automate governance, collaboration, and compensation across decentralized networks in Solidity and Rust.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

