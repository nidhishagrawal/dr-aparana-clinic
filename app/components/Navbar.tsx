'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Phone, MessageCircle } from 'lucide-react'

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 gap-4">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">DA</span>
            </div>
            <div>
              <h1 className="font-bold text-xl text-gray-900">Dr. Aparna Ghosh</h1>
              <p className="text-xs text-gray-600">Expert Gynaecologist & Obstetrician</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden xl:flex items-center space-x-5 text-sm">
            <Link href="/" className="text-gray-700 hover:text-primary-600 transition-colors font-medium whitespace-nowrap">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary-600 transition-colors font-medium whitespace-nowrap">
              About Doctor
            </Link>
            <Link href="/services" className="text-gray-700 hover:text-primary-600 transition-colors font-medium whitespace-nowrap">
              Services
            </Link>
            <Link href="/treatments" className="text-gray-700 hover:text-primary-600 transition-colors font-medium whitespace-nowrap">
              Treatments
            </Link>
            <Link href="/testimonials" className="text-gray-700 hover:text-primary-600 transition-colors font-medium whitespace-nowrap">
              Testimonials
            </Link>
            <Link href="/videos" className="text-gray-700 hover:text-primary-600 transition-colors font-medium whitespace-nowrap">
              Videos
            </Link>
            <Link href="/blog" className="text-gray-700 hover:text-primary-600 transition-colors font-medium whitespace-nowrap">
              Health Tips
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-primary-600 transition-colors font-medium whitespace-nowrap">
              Contact
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden xl:flex items-center gap-2 text-sm flex-shrink-0">
            <a
              href="tel:+919326579679"
              className="flex items-center gap-2 px-3.5 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all font-medium whitespace-nowrap"
            >
              <Phone className="w-4 h-4" />
              Call Now
            </a>
            <a
              href="https://wa.me/919326579679"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3.5 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all font-medium whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="xl:hidden p-2 text-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="xl:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link 
                href="/" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/about" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Doctor
              </Link>
              <Link 
                href="/services" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/treatments" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Treatments
              </Link>
              <Link 
                href="/testimonials" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Testimonials
              </Link>
              <Link 
                href="/videos" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Videos
              </Link>
              <Link 
                href="/blog" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Health Tips
              </Link>
              <Link 
                href="/contact" 
                className="text-gray-700 hover:text-primary-600 transition-colors font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="flex gap-3 pt-4 border-t border-gray-200">
                <a 
                  href="tel:+919326579679"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a 
                  href="https://wa.me/919326579679"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all font-medium"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

