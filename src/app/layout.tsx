import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Pedagogische Wijsheden - Inspiratie voor Leraren',
  description: 'Een interactieve app met 50 inspirerende quotes en reflectievragen voor leraren',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="nl">
      <body className="bg-gray-100 min-h-screen" suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}