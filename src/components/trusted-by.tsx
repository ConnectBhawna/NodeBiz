import Image from 'next/image'

const logos = [
  { name: 'Logo 1', src: '/placeholder.svg' },
  { name: 'Logo 2', src: '/placeholder.svg' },
  { name: 'Logo 3', src: '/placeholder.svg' },
  { name: 'Logo 4', src: '/placeholder.svg' },
  { name: 'Logo 5', src: '/placeholder.svg' },
  { name: 'Logo 6', src: '/placeholder.svg' },
]

export function TrustedBy() {
  return (
    <section className="py-12 bg-black/30 ml-32 justify-center">
      <div className="container px-4 md:px-6">
        <h2 className="text-2xl font-bold text-center mb-8">Trusted by the world leaders</h2>
        <div className="flex flex-wrap justify-center items-center gap-8">
          {logos.map((logo, index) => (
            <div key={index} className="w-24 h-12 relative">
              <Image
                src={logo.src}
                alt={logo.name}
                fill
                className="object-contain filter invert"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

