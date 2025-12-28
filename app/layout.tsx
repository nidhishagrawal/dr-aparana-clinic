import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StructuredData from './components/StructuredData'

export const metadata: Metadata = {
  metadataBase: new URL('https://draparana.com'), // Update with your actual domain
  title: {
    default: 'Dr. Aparana Ghosh - Best Gynecologist in Chembur, Mumbai | Expert Women\'s Health Care',
    template: '%s | Dr. Aparana Ghosh'
  },
  description: 'Expert gynecologist Dr. Aparana Ghosh (MBBS, MD) offers comprehensive women\'s health care, laser hair reduction, cosmetic gynecology, HIFU treatment, and more in Chembur, Mumbai. Book your appointment today.',
  keywords: [
    'gynecologist Chembur',
    'best gynecologist Mumbai',
    'Dr. Aparna Ghosh',
    'women health clinic Chembur',
    'laser hair reduction Mumbai',
    'cosmetic gynecology Mumbai',
    'HIFU urinary incontinence treatment',
    'HRT treatment Mumbai',
    'obstetrician Chembur',
    'gynecologist near me',
    'women specialist chemburMumbai',
    'pregnancy care Chembur',
    'maternal care Mumbai',
    'gynecological surgery Mumbai',
    'safe abortions Mumbai',
    'safe abortion Chembur',
  ],
  other: {
    'keywords': 'gynecologist Chembur, best gynecologist Mumbai, Dr. Aparana Ghosh, women health clinic Chembur, laser hair reduction Mumbai, cosmetic gynecology Mumbai, HIFU urinary incontinence treatment, HRT treatment Mumbai, obstetrician Chembur, gynecologist near me, women specialist chemburMumbai, pregnancy care Chembur, maternal care Mumbai, gynecological surgery Mumbai'
  },
  authors: [{ name: 'Dr. Aparana Ghosh' }],
  creator: 'Dr. Aparana Ghosh',
  publisher: 'Dr. Aparana Ghosh Clinic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://draparana.com', // Update with your actual domain
    siteName: 'Dr. Aparana Ghosh Clinic',
    title: 'Dr. Aparana Ghosh - Best Gynecologist in Chembur, Mumbai',
    description: 'Expert gynecologist Dr. Aparana Ghosh offers comprehensive women\'s health care, laser hair reduction, cosmetic gynecology, and more in Chembur, Mumbai.',
    images: [
      {
        url: '/images/dr-aparana-ghosh.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Aparana Ghosh - Expert Gynecologist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Aparana Ghosh - Best Gynecologist in Chembur, Mumbai',
    description: 'Expert gynecologist offering comprehensive women\'s health care in Chembur, Mumbai.',
    images: ['/images/dr-aparana-ghosh.jpg'],
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
  verification: {
    // Add your Google Search Console verification code here
    // After submitting to Google Search Console, paste the code below:
    // google: 'your-verification-code-from-search-console',
  },
  alternates: {
    canonical: 'https://draparana.com', // Update with your actual domain
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <StructuredData />
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

