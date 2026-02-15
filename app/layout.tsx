
import type { Metadata } from 'next'
import { Inter as FontSans } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/shared/Navbar'
import Footer from '@/components/shared/Footer'
import { WhatsAppButton } from '@/components/shared/WhatsAppButton'
import { cn } from '@/lib/utils'

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const metadata: Metadata = {
  title: {
    template: '%s | Cabinet Médical Ubuntu',
    default: 'Cabinet Médical Ubuntu - Votre santé, notre priorité à Bamako',
  },
  description: 'Cabinet Médical Ubuntu à Bamako, Mali. Consultations 24h/24, médecine générale, échographie, laboratoire. Dr Safiatou Traoré et son équipe vous accueillent. Prenez rendez-vous : +223 75 12 25 25',
  keywords: ['cabinet médical Bamako', 'médecin Bamako', 'clinique Mali', 'urgences médicales Bamako', 'échographie Bamako', 'laboratoire médical Mali', 'Dr Safiatou Traoré', 'Doumanzana'],
  authors: [{ name: 'Cabinet Médical Ubuntu' }],
  creator: 'Cabinet Médical Ubuntu',
  publisher: 'Cabinet Médical Ubuntu',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: 'https://cabinet-ubuntu.com/',
    siteName: 'Cabinet Médical Ubuntu',
    title: 'Cabinet Médical Ubuntu - Soins de santé 24h/24 à Bamako',
    description: 'Cabinet médical moderne à Bamako. Médecine générale, échographie, laboratoire. Ouvert 24h/24 et 7j/7. Doumanzana, Rue 339, Porte 52.',
    images: [
      {
        url: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=630&fit=crop',
        width: 1200,
        height: 630,
        alt: 'Cabinet Médical Ubuntu - Équipements médicaux modernes',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cabinet Médical Ubuntu - Soins 24h/24 à Bamako',
    description: 'Cabinet médical moderne à Bamako. Ouvert 24h/24. Médecine générale, échographie, laboratoire.',
    images: ['https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&h=630&fit=crop'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Ubuntu Clinic" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
          <WhatsAppButton />
        </div>
      </body>
    </html>
  )
}
