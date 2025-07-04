import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Analiza Wyborów Prezydenckich 2025 | Anomalie Statystyczne',
  description: 'Interaktywna wizualizacja anomalii statystycznych w drugiej turze wyborów prezydenckich w Polsce 2025',
  keywords: 'wybory 2025, Polska, analiza statystyczna, MAD, anomalie wyborcze',
  authors: [{ name: 'Krzysztof Kontek' }],
  openGraph: {
    title: 'Analiza Wyborów Prezydenckich 2025',
    description: 'Czy anomalie statystyczne mogły wpłynąć na wynik wyborów?',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pl" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}