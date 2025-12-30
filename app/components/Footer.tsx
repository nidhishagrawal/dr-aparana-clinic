import Link from 'next/link'
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* About */}
          <div>
            <h3 className="font-bold text-xl mb-4">Dr. Aparna Ghosh</h3>
            <p className="text-gray-400 text-sm mb-4">
              Expert gynecologist providing comprehensive women&apos;s health care and cosmetic gynecology services in Chembur, Mumbai.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/draparnaghosh445/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm whitespace-nowrap">
                  About Doctor
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/treatments" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Treatments
                </Link>
              </li>
              <li>
                <Link href="/testimonials" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/videos" className="text-gray-400 hover:text-white transition-colors text-sm whitespace-nowrap">
                  Videos
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Health Tips
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/services#gynecology" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Hysterectomy Specialist
                </Link>
              </li>
              <li>
                <Link href="/services#preventive-womens-health" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Pap Smear & Cervical Cancer Screening
                </Link>
              </li>
              <li>
                <Link href="/services#high-risk-pregnancy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Medical & Surgical Abortion Services
                </Link>
              </li>
              <li>
                <Link href="/services#high-risk-pregnancy" className="text-gray-400 hover:text-white transition-colors text-sm">
                  Antenatal Care for High-Risk Pregnancies
                </Link>
              </li>
              <li>
                <Link href="/services#cosmetic-gynecology" className="text-gray-400 hover:text-white transition-colors text-sm">
                  HIFU for Urinary Incontinence & Vaginal Tightening
                </Link>
              </li>
            </ul>
          </div>

          {/* Call For Appointment */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Call For Appointment</h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+919876543210" className="text-primary-400 hover:text-white transition-colors text-lg font-medium">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <div>
                  <a href="mailto:aparnagosh67@yahoo.co.in" className="text-gray-400 hover:text-white transition-colors text-sm">
                    aparnagosh67@yahoo.co.in
                  </a>
                </div>
              </li>
            </ul>
          </div>

          {/* Address 1 */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Address</h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
              <div className="text-gray-400 text-sm">
                <strong className="text-white">Main Clinic</strong><br />
                501, PURE GOLD CHS, NG ACHARYA MARG,<br />
                STATION ROAD, Chembur East,<br />
                Mumbai, Maharashtra 400071
              </div>
            </div>
          </div>

          {/* Address 2 */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Address 2</h4>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
              <div className="text-gray-400 text-sm">
                <strong className="text-white">Consultation Center</strong><br />
                Additional Location, Chembur,<br />
                Mumbai - 400071
              </div>
            </div>
            <div className="mt-4 flex items-start gap-3">
              <Clock className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
              <div className="text-gray-400 text-sm">
                Mon - Sat: 9:00 AM - 7:00 PM<br />
                Sunday: Closed
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 mt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Dr. Aparna Ghosh. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

