export function CoreLayers() {
  return (
    <div className="bg-black min-h-screen text-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">Core Layers and Offerings</h2>
        
        <div className="relative max-w-3xl mx-auto">
          {/* Pyramid levels */}
          <div className="space-y-8">
            {/* Level 1 */}
            <div className="flex items-start gap-8 relative">
              <div className="w-16 h-16 flex items-center justify-center text-2xl font-bold border-2 border-[#96EA63] bg-black">
                1
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold mb-2">Technology Advisory</h3>
                <p className="text-[#96EA63]/80">Architectural solutions for novel AI & Web3 infrastructure</p>
              </div>
            </div>

            {/* Level 2 */}
            <div className="flex items-start gap-8 relative ml-8">
              <div className="w-16 h-16 flex items-center justify-center text-2xl font-bold border-2 border-[#96EA63] bg-black">
                2
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold mb-2">Middleware Layer</h3>
                <p className="text-[#96EA63]/80">AI orchestration, Web3 connectors, tokenized workflows</p>
              </div>
            </div>

            {/* Level 3 */}
            <div className="flex items-start gap-8 relative ml-16">
              <div className="w-16 h-16 flex items-center justify-center text-2xl font-bold border-2 border-[#96EA63] bg-black">
                3
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold mb-2">Foundational Layer</h3>
                <p className="text-[#96EA63]/80">Scalable blockchain infrastructure on Cosmos SDK</p>
              </div>
            </div>

            {/* Level 4 */}
            <div className="flex items-start gap-8 relative ml-24">
              <div className="w-16 h-16 flex items-center justify-center text-2xl font-bold border-2 border-[#96EA63] bg-black">
                4
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-xl font-bold mb-2">Subnets and Nodes</h3>
                <p className="text-[#96EA63]/80">Enhanced decentralization and scalability</p>
              </div>
            </div>

            {/* Pyramid lines */}
            <div className="absolute top-0 bottom-0 left-8 w-[1px] bg-[#96EA63]/30" />
            <div className="absolute top-0 bottom-0 left-16 w-[1px] bg-[#96EA63]/30" />
            <div className="absolute top-0 bottom-0 left-24 w-[1px] bg-[#96EA63]/30" />
          </div>
        </div>
      </div>
    </div>
  )
}

