import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services - Dr. Aparana Ghosh | Gynecologist Services in Chembur, Mumbai',
  description: 'Comprehensive gynecological services including laser hair reduction, cosmetic gynecology, HIFU for incontinence, HRT treatment, scar reduction, and general gynecology in Chembur, Mumbai. Book your appointment today.',
  keywords: 'gynecologist services Chembur, laser hair reduction Mumbai, cosmetic gynecology, HIFU treatment, HRT treatment Mumbai, women health services, gynecological treatments',
  openGraph: {
    title: 'Gynecologist Services - Dr. Aparana Ghosh Clinic, Chembur, Mumbai',
    description: 'Comprehensive gynecological services including laser hair reduction, cosmetic gynecology, HIFU, and more in Chembur, Mumbai.',
    type: 'website',
  },
}

const services = [
  // Primary Gynecology Services
  {
    id: 'general-gynecology',
    title: 'General Gynecology',
    description: 'Comprehensive gynecological consultations, routine check-ups, PCOD/PCOS treatment, and treatment for all women\'s health concerns.',
    keywords: 'gynecologist Chembur, women health clinic Mumbai, gynecology consultation',
    primary: true,
  },
  {
    id: 'hrt-treatment',
    title: 'HRT Treatment',
    description: 'Hormone Replacement Therapy for managing menopause symptoms, hormonal imbalances, and improving overall gynecological health.',
    keywords: 'HRT treatment Mumbai, hormone replacement therapy Chembur',
    primary: true,
  },
  {
    id: 'hifu-incontinence',
    title: 'HIFU for Urinary Incontinence',
    description: 'Non-invasive gynecological treatment for urinary incontinence using advanced HIFU technology. Effective solution without surgery.',
    keywords: 'HIFU urinary incontinence Mumbai, treatment for urine leakage Chembur',
    primary: true,
  },
  // Secondary Cosmetic Services
  {
    id: 'cosmetic-gynecology',
    title: 'Cosmetic Gynecology',
    description: 'Advanced cosmetic procedures to enhance feminine wellness, confidence, and aesthetic appearance.',
    keywords: 'cosmetic gynecology Mumbai, cosmetic gynecologist Chembur',
    primary: false,
  },
  {
    id: 'laser-hair-reduction',
    title: 'Laser Hair Reduction',
    description: 'Permanent hair removal using advanced laser technology. Safe, effective, and long-lasting results for smooth, hair-free skin.',
    keywords: 'laser hair reduction Mumbai, permanent hair removal Chembur',
    primary: false,
  },
  {
    id: 'scar-reduction',
    title: 'Scar & Stretch Mark Reduction',
    description: 'Advanced treatments to reduce scars and stretch marks using cutting-edge technology for smoother, more even skin.',
    keywords: 'scar reduction Mumbai, stretch mark treatment Chembur',
    primary: false,
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive <strong className="text-primary-600">gynecological care</strong> and advanced treatments</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          {/* Primary Gynecology Services */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-primary-600 rounded"></span>
              Primary Gynecology Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.filter(s => s.primary).map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="group bg-gradient-to-br from-primary-50 to-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border-2 border-primary-200"
                >
                  <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-6 group-hover:bg-primary-700 transition-colors">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div className="inline-block px-2 py-1 bg-primary-600 text-white text-xs font-medium rounded mb-3">Primary Service</div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="text-primary-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Additional Services */}
          <div>
            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <span className="w-1 h-8 bg-gray-400 rounded"></span>
              Additional Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.filter(s => !s.primary).map((service) => (
                <Link
                  key={service.id}
                  href={`/services/${service.id}`}
                  className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100"
                >
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-gray-200 transition-colors">
                    <Award className="w-8 h-8 text-gray-600" />
                  </div>
                  <div className="inline-block px-2 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded mb-3">Also Available</div>
                  <h2 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-primary-600 transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  <span className="text-primary-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

