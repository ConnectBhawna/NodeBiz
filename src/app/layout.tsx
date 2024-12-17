import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'NodeBiz - Blockchain Node Management',
  description: 'Effortless Blockchain Node Management with Unmatched Reliability',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <div className="min-h-screen bg-black text-white">
          <div className="fixed top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#96EA63]/20 to-transparent pointer-events-none z-0" />
          {children}
        </div>
      </body>
    </html>
  )
}

