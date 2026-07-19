import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'NPC Protocol',
  description: 'Websites, AI automation, and marketing for growing businesses.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}