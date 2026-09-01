import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import StructuredData from './components/StructuredData'

export const metadata: Metadata = {
  metadataBase: new URL('https://www.bestgynecologistchembur.in'),
  title: {
    default: 'Dr. Aparna Ghosh - Best Gynaecologist in Chembur, Mumbai',
    template: '%s | Dr. Aparna Ghosh'
  },
  description: 'Expert gynaecologist (gynecologist) Dr. Aparna Ghosh (MBBS, MD) offers women\'s health care, laser hair reduction, cosmetic gynecology, and HIFU treatment in Chembur, Mumbai.',
  keywords: [
    'gynaecologist Chembur',
    'gynecologist Chembur',
    'best gynaecologist Mumbai',
    'best gynecologist Mumbai',
    'Dr. Aparna Ghosh',
    'women health clinic Chembur',
    'laser hair reduction Mumbai',
    'cosmetic gynecology Mumbai',
    'HIFU urinary incontinence treatment',
    'HRT treatment Mumbai',
    'obstetrician Chembur',
    'gynaecologist near me',
    'gynecologist near me',
    'women specialist chembur Mumbai',
    'pregnancy care Chembur',
    'maternal care Mumbai',
    'gynaecological surgery Mumbai',
    'gynecological surgery Mumbai',
    'safe abortions Mumbai',
    'safe abortion Chembur',
  ],
  other: {
    'keywords': 'gynaecologist Chembur, gynecologist Chembur, best gynaecologist Mumbai, best gynecologist Mumbai, Dr. Aparna Ghosh, women health clinic Chembur, laser hair reduction Mumbai, cosmetic gynecology Mumbai, HIFU urinary incontinence treatment, HRT treatment Mumbai, obstetrician Chembur, gynaecologist near me, gynecologist near me, women specialist chembur Mumbai, pregnancy care Chembur, maternal care Mumbai, gynaecological surgery Mumbai, gynecological surgery Mumbai'
  },
  authors: [{ name: 'Dr. Aparna Ghosh' }],
  creator: 'Dr. Aparna Ghosh',
  publisher: 'Dr. Aparna Ghosh Clinic',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.bestgynecologistchembur.in',
    siteName: 'Dr. Aparna Ghosh Clinic',
    title: 'Dr. Aparna Ghosh - Best Gynecologist in Chembur, Mumbai',
    description: 'Expert gynecologist Dr. Aparna Ghosh offers comprehensive women\'s health care, laser hair reduction, cosmetic gynecology, and more in Chembur, Mumbai.',
    images: [
      {
        url: '/images/dr-aparana-ghosh.jpg',
        width: 1200,
        height: 630,
        alt: 'Dr. Aparna Ghosh - Expert Gynecologist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dr. Aparna Ghosh - Best Gynecologist in Chembur, Mumbai',
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
    canonical: 'https://www.bestgynecologistchembur.in',
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

