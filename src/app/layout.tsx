import type { Metadata } from 'next'
import { Providers } from '@/providers'
import { Aboreto, Roboto } from 'next/font/google'
import { Header } from './components/header'

const aboreto = Aboreto({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-aboreto',
})

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-roboto',
})

export const metadata: Metadata = {
  title: {
    template: '%s - Gabriel Brustolin',
    default: 'Gabriel Brustolin',
  },

  icons: '/icon.png',

  description:
    "Explore Gabriel Brustolin's portfolio, featuring stunning photographs of hotels and travels around the world, capturing the beauty of each destination.",

  keywords: [
    'hotel photography',
    'travel photography',
    'Gabriel Brustolin',
    'travel photos',
    'hotel photos',
    'world destinations',
  ],

  openGraph: {
    title: 'Gabriel Brustolin - Hotel and Travel Photography',
    description:
      'Discover the photographic work of Gabriel Brustolin, specializing in capturing the essence of hotels and travel destinations around the world.',
    url: 'https://gabriel-brustolin.vercel.app/',
    siteName: 'Gabriel Brustolin',
    locale: 'en_US',
    type: 'website',
  },

  twitter: {
    title: 'Gabriel Brustolin - Hotel and Travel Photography',
    description:
      'View the best hotel and travel photography around the world captured by Gabriel Brustolin.',
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
    <html lang="en">
      <body className={`${aboreto.variable} ${roboto.variable}`}>
        <Providers>
          <Header />

          {children}
        </Providers>
      </body>
    </html>
  )
}
