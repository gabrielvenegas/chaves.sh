import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Chaves — The AI dev tool that lives in your terminal',
  description:
    'Chaves watches your files, tracks your diffs, relays terminal activity, and proactively suggests the next step directly from your terminal.',
  keywords: ['AI', 'developer tool', 'terminal', 'coding assistant', 'tmux', 'OpenRouter'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="font-mono antialiased" style={{ backgroundColor: '#1d2021', color: '#ebdbb2' }}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
