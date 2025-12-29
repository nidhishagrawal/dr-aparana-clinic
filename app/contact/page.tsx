import type { Metadata } from 'next'
import { Phone, Mail, MapPin, Clock, MessageCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Contact Dr. Aparana Ghosh - Gynecologist Clinic in Chembur, Mumbai',
  description: 'Contact Dr. Aparana Ghosh\'s clinic in Chembur, Mumbai. Book your appointment via phone (+91-9876543210) or WhatsApp. Find our location, clinic hours, and contact information.',
  keywords: 'contact gynecologist Chembur, book appointment Mumbai, gynecologist phone number, clinic address Chembur, gynecologist WhatsApp',
  other: {
    'keywords': 'contact gynecologist Chembur, book appointment Mumbai, gynecologist phone number, clinic address Chembur, gynecologist WhatsApp'
  },
  openGraph: {
    title: 'Contact Dr. Aparana Ghosh - Gynecologist Clinic in Chembur, Mumbai',
    description: 'Book your appointment with Dr. Aparana Ghosh. Contact us via phone or WhatsApp.',
    type: 'website',
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-xl text-gray-600">Get in touch to schedule your appointment</p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
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
                    <a href="tel:+919876543210" className="text-primary-600 hover:text-primary-700 text-lg">
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                    <a 
                      href="https://wa.me/919876543210"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary-600 hover:text-primary-700 text-lg"
                    >
                      +91 98765 43210
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Email</h3>
                    <a href="mailto:aparnagosh67@yahoo.co.in" className="text-primary-600 hover:text-primary-700 text-lg">
                      aparnagosh67@yahoo.co.in
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
                      Clinic Address, Chembur,<br />
                      Mumbai - 400071<br />
                      Maharashtra, India
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
                      Monday - Saturday: 9:00 AM - 7:00 PM<br />
                      Sunday: Closed
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap gap-4">
                <a 
                  href="tel:+919876543210"
                  className="flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all font-medium"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a 
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all font-medium"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Appointment
                </a>
              </div>
            </div>

            {/* Google Maps */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Find Us on Map</h2>
              <div className="rounded-2xl overflow-hidden shadow-lg h-[500px] bg-gray-200">
                {/* Google Maps Embed - Replace with actual embed code */}
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.1234567890!2d72.9123456!3d19.0567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDAzJzI0LjQiTiA3MsKwNTQnNDQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
                {/* 
                  To get your actual Google Maps embed:
                  1. Go to Google Maps
                  2. Search for your clinic address
                  3. Click "Share" → "Embed a map"
                  4. Copy the iframe code and replace the src above
                */}
              </div>
              <p className="text-sm text-gray-500 mt-4">
                📍 Update the Google Maps embed code above with your actual clinic location
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

