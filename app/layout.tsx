import type { Metadata } from 'next'
import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata: Metadata = {
  title: 'Dr. Aparana Ghosh - Best Gynecologist in Chembur, Mumbai | Cosmetic Gynecology & Women\'s Health',
  description: 'Expert gynecologist Dr. Aparana Ghosh offers laser hair reduction, cosmetic gynecology, HIFU for urinary incontinence, HRT treatment, and more in Chembur, Mumbai.',
  keywords: 'gynecologist Chembur, laser hair reduction Mumbai, cosmetic gynecology, HIFU urinary incontinence, HRT treatment, women health clinic Mumbai',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-sans">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

