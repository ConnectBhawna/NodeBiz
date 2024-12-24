export default function IndustrySection() {
    return (
      <section className="w-full bg-black/95 px-4 py-12 md:py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-5xl font-bold text-[#7CFF6B]">
          Industry Solutions
          </h2>
          
          <div className="grid gap-6 md:grid-cols-3">
            {/* Web3 Developers Card */}
            <div className="rounded-xl bg-gradient-to-b from-gray-900/50 to-gray-900/30 p-6 backdrop-blur-sm border border-gray-800">
              <h3 className="mb-4 text-xl font-semibold text-[#7CFF6B]">
              Open Source World
              </h3>
              <p className="text-gray-300 leading-relaxed">
              Solve real-world problems with open-source AI + Web3 tools. Prototype and validate PMF without large 
in-house teams.
                </p>
            </div>
  
            {/* AI Enthusiasts Card */}
            <div className="rounded-xl bg-gradient-to-b from-gray-900/50 to-gray-900/30 p-6 backdrop-blur-sm border border-gray-800">
              <h3 className="mb-4 text-xl font-semibold text-[#7CFF6B]">
              Enterprises
              </h3>
              <p className="text-gray-300 leading-relaxed">
              Blend traditional infrastructure with decentralized technologies. Reduce costs and future-proof operations with blockchain-backed architectures.
              </p>
            </div>
  
            {/* Data Providers Card */}
            <div className="rounded-xl bg-gradient-to-b from-gray-900/50 to-gray-900/30 p-6 backdrop-blur-sm border border-gray-800">
              <h3 className="mb-4 text-xl font-semibold text-[#7CFF6B]">
              Cloud Architects
              </h3>
              <p className="text-gray-300 leading-relaxed">
              Manage and build subnets and nodes for robust blockchain scalability.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  