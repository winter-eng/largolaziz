import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Abdusodiqov Abdulaziz | Professional Yetkazib beruvchi Haydovchi | Largo',
  description:
    "Professional yuk yetkazib berish xizmati. Avtomobil ehtiyot qismlari, mebel, maishiy tovarlar, paketlar va tijorat yuklarini ishonchli tashish. Largo bilan ishlaydi.",
  keywords: [
    'yetkazib berish',
    'yuk tashish',
    'haydovchi',
    'Largo',
    'Abdulaziz',
    'mebel yetkazish',
    'ehtiyot qismlar',
    'O\'zbekiston yetkazib berish',
    'yuk haydovchi',
  ],
  authors: [{ name: 'Abdusodiqov Abdulaziz' }],
  openGraph: {
    title: 'Abdusodiqov Abdulaziz | Professional Yetkazib beruvchi Haydovchi | Largo',
    description:
      "Professional yuk yetkazib berish xizmati. Avtomobil ehtiyot qismlari, mebel, maishiy tovarlar, paketlar va tijorat yuklarini ishonchli tashish.",
    type: 'website',
    locale: 'uz_UZ',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="uz" suppressHydrationWarning>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}
