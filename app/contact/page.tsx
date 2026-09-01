import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'
import BreadcrumbSchema from '../components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Contact Dr. Aparna Ghosh - Chembur, Mumbai',
  description: 'Contact Dr. Aparna Ghosh\'s clinic in Chembur, Mumbai. Book your appointment by phone or WhatsApp. Find our location, hours, and contact details.',
  keywords: 'contact gynecologist Chembur, book appointment Mumbai, gynecologist phone number, clinic address Chembur, gynecologist WhatsApp',
  other: {
    'keywords': 'contact gynecologist Chembur, book appointment Mumbai, gynecologist phone number, clinic address Chembur, gynecologist WhatsApp'
  },
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    title: 'Contact Dr. Aparna Ghosh - Gynecologist Clinic in Chembur, Mumbai',
    description: 'Book your appointment with Dr. Aparna Ghosh. Contact us via phone or WhatsApp.',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }]} />
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Get in touch to schedule your appointment</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Get In Touch</h2>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Phone</h3>
                    <div className="space-y-2">
                      <a href="tel:+919326579679" className="block text-primary-600 hover:text-primary-700 text-lg">
                        +91 93265 79679
                      </a>
                      <a href="tel:+919224222600" className="block text-primary-600 hover:text-primary-700 text-lg">
                        +91 92242 22600
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                    <div className="space-y-2">
                      <a 
                        href="https://wa.me/919326579679"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-primary-600 hover:text-primary-700 text-lg"
                      >
                        +91 93265 79679
                      </a>
                      <a 
                        href="https://wa.me/919224222600"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block text-primary-600 hover:text-primary-700 text-lg"
                      >
                        +91 92242 22600
                      </a>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a href="mailto:aparnaghosh67@yahoo.co.in" className="text-primary-600 hover:text-primary-700 text-lg">
                      aparnaghosh67@yahoo.co.in
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Address</h3>
                    <p className="text-gray-600 text-lg">
                      501, PURE GOLD CHS, NG ACHARYA MARG,<br />
                      STATION ROAD, Chembur East,<br />
                      Mumbai, Maharashtra 400071
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Clinic Hours</h3>
                    <p className="text-gray-600 text-lg">
                      Mon - Sat: 9:00 AM - 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="tel:+919326579679"
                  className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all font-medium"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a 
                  href="https://wa.me/919326579679"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all font-medium"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us on Map</h2>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[500px] bg-gray-200">
                <iframe
                  src="https://www.google.com/maps?q=19.0621,72.9008&hl=en&z=15&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                  title="Dr. Aparna Ghosh Clinic Location"
                ></iframe>
              </div>
              <p className="text-sm text-gray-500 mt-4">
                📍 501, PURE GOLD CHS, NG ACHARYA MARG, STATION ROAD, Chembur East, Mumbai, Maharashtra 400071
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

