import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Portfolio | Noorul Hussain Shaik',
  description: 'Experienced Software Developer with 5+ years of expertise in Angular, Java, Python, React, and cloud solutions. Passionate about delivering high-quality, scalable web applications.',
  keywords: 'portfolio, software developer, angular, java, python, react, aws, azure, microservices, full-stack',
  authors: [{ name: 'Noorul Hussain Shaik' }],
  openGraph: {
    title: 'Portfolio | Noorul Hussain Shaik',
    description: 'Experienced Software Developer with 5+ years of expertise in Angular, Java, Python, React, and cloud solutions.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="dark">
        <body className={`${inter.className} bg-custom-dark-bg text-custom-navy-text`}>
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
