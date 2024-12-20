export default function FeatureSection() {
  return (
    <div className="bg-black h-[400px] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-[#86E768] text-4xl md:text-5xl font-bold text-center mb-8">
          Decentralized. Collaborative. Composable
        </h1>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-black border-2 border-[#86E768] rounded-xl p-6">
            <h2 className="text-[#86E768] text-2xl font-bold mb-4">
              Decentralized
            </h2>
            <p className="text-white/90 text-sm leading-relaxed">
              Distribute AI and blockchain power across global participants. Break free from centralizaton, ensuring resilience at every layer.
            </p>
          </div>

          <div className="bg-black border-2 border-[#86E768] rounded-xl p-6">
            <h2 className="text-[#86E768] text-2xl font-bold mb-4">
              Collaborative
            </h2>
            <p className="text-white/90 text-sm leading-relaxed">
              Foster incentive-aligned cooperation with trust-minimized frameworks. Build smarter, faster, and together.
            </p>
          </div>

          <div className="bg-black border-2 border-[#86E768] rounded-xl p-6">
            <h2 className="text-[#86E768] text-2xl font-bold mb-4">
              Universal Composability
            </h2>
            <p className="text-white/90 text-sm leading-relaxed">
              Seamlessly integrate AI, Web3, and blockchain primitives across layers with cutting-edge SDKs and modular architecture.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

