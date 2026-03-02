import type { Metadata } from 'next'
import { Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-geist-mono',
})

export const metadata: Metadata = {
  title: 'Chaves — The AI dev tool that lives in your terminal',
  description:
    'Chaves watches your files, tracks your diffs, and proactively suggests what to work on next — without you asking. Like a rubber duck that actually talks back.',
  keywords: ['AI', 'developer tool', 'terminal', 'coding assistant', 'rubber duck debugging'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={geistMono.variable}>
      <body className="font-mono antialiased" style={{ backgroundColor: '#1d2021', color: '#ebdbb2' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
