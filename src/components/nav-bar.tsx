import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function NavBar() {
  return (
    <nav className="border-b h-18 border-gray-800 bg-black/80 backdrop-blur-md fixed top-0 left-0 right-0 z-50">
      <div className="container flex h-16 items-center justify-between px-2">  {/* Reduced padding */}
        <div className="flex-1"></div>  {/* Added flex-1 to push logo and text to the right */}
        <Link href="/" className="flex items-center space-x-2">  {/* Removed ml-8 */}
          <Image src="/favicon.ico" alt="NodeBiz Logo" width={32} height={32} />
          <span className="font-bold text-lg">NodeBiz</span>  {/* Increased font size */}
        </Link>
        <div className="flex-1"></div> <div className="flex items-center space-x-4">
          <div className="hidden md:flex space-x-4">
            <Link href="#" className="text-sm text-gray-400 hover:text-white">Home</Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">Dashboard</Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">Features</Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">Contact</Link>
            <Link href="#" className="text-sm text-gray-400 hover:text-white">Documentation</Link>
          </div>
          <Button variant="default" className="bg-[#96EA63] hover:bg-green-600 text-sm">
            Connect Wallet
          </Button>
        </div>
      </div>
    </nav>
  )
}