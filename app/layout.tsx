import type { Metadata } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import Cursor from '@/app/components/ui/Cursor'
import ScrollProgress from '@/app/components/ui/ScrollProgress'
import './globals.css'

const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: 'Muhammad Asad Haye | Full-Stack Architect',
  description: 'AI-driven solutions for digital transformation',
  openGraph: {
    images: ['/og-image.jpg'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-black antialiased">
        <Cursor />
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}