import type { Metadata } from 'next'
import { Inter, Fredoka } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { HeaderController } from '@/components/header-controller'
import { Footer } from '@/components/footer'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

const fredoka = Fredoka({ 
  subsets: ["latin"],
  variable: '--font-fredoka'
});

export const metadata: Metadata = {
  title: 'My Language Plug | Learn Languages with Expert Tutors',
  description: 'Connect with vetted language tutors for personalized 1-on-1 lessons. Learn any language affordably with native speakers on your schedule.',
  keywords: ['language learning', 'online tutoring', 'language tutors', 'learn languages', 'native speakers'],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${fredoka.variable} font-sans antialiased`}>
        <HeaderController />
        <main>
          {children}
        </main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
