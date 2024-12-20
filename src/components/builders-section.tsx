export default function BuildersSection() {
  return (
    <section className="w-full bg-black/95 px-4 py-12 md:py-16">
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-12 text-center text-5xl font-bold text-[#7CFF6B]">
          For Builders Across Industries
        </h2>
        
        <div className="grid gap-6 md:grid-cols-3">
          {/* Web3 Developers Card */}
          <div className="rounded-xl bg-gradient-to-b from-gray-900/50 to-gray-900/30 p-6 backdrop-blur-sm border border-gray-800">
            <h3 className="mb-4 text-xl font-semibold text-[#7CFF6B]">
              Web3 Developers
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Integrate AI into dApps effortlessly. Access modular SDKs to power blockchain solutions with intelligence.
            </p>
          </div>

          {/* AI Enthusiasts Card */}
          <div className="rounded-xl bg-gradient-to-b from-gray-900/50 to-gray-900/30 p-6 backdrop-blur-sm border border-gray-800">
            <h3 className="mb-4 text-xl font-semibold text-[#7CFF6B]">
              AI Enthusiasts
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Deploy decentralized AI workflows without boundaries. Monetize models, datasets, datasets or compute securely.
            </p>
          </div>

          {/* Data Providers Card */}
          <div className="rounded-xl bg-gradient-to-b from-gray-900/50 to-gray-900/30 p-6 backdrop-blur-sm border border-gray-800">
            <h3 className="mb-4 text-xl font-semibold text-[#7CFF6B]">
              Data Providers
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Monetize datasets on decentralized marketplaces. Retain control, set rules, regulations and unlock value effortlessly.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

