import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Valdez Eye Center',
  description: 'Your Clear Path to Eye Care Excellence!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='bg-white'>
      <body className={inter.className}>
        <Navbar />
        <div className='bg-white text-black'>{children}</div>
        <Footer />
      </body>
    </html>
  )
}
