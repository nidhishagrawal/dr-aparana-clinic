import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services - Dr. Aparna Ghosh | Gynecologist Services in Chembur, Mumbai',
  description: 'Comprehensive gynecological services including laser hair reduction, cosmetic gynecology, HIFU for incontinence, HRT treatment, scar reduction, and general gynecology in Chembur, Mumbai. Book your appointment today.',
  keywords: 'gynecologist services Chembur, laser hair reduction Mumbai, cosmetic gynecology, HIFU treatment, HRT treatment Mumbai, women health services, gynecological treatments',
  other: {
    'keywords': 'gynecologist services Chembur, laser hair reduction Mumbai, cosmetic gynecology, HIFU treatment, HRT treatment Mumbai, women health services, gynecological treatments'
  },
  openGraph: {
    title: 'Gynecologist Services - Dr. Aparna Ghosh Clinic, Chembur, Mumbai',
    description: 'Comprehensive gynecological services including laser hair reduction, cosmetic gynecology, HIFU, and more in Chembur, Mumbai.',
    type: 'website',
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive gynecological and cosmetic services</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Gynecology */}
            <div id="gynecology">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-700 mb-6">Gynecology</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Hysterectomy Specialist', href: '/services' },
                  { name: 'Fibroid & Ovarian Cyst Surgery', href: '/services' },
                  { name: 'Laparoscopic Gynec Surgery', href: '/services' },
                  { name: 'Infertility & PCOS Management', href: '/services' },
                  { name: 'Menstrual & Hormonal Disorders', href: '/services' },
                  { name: 'Uterus Removal (Hysterectomy)', href: '/services' },
                ].map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="group p-5 bg-blue-50 rounded-xl shadow-sm hover:shadow-lg transition-all border border-blue-100 hover:border-blue-200"
                  >
                    <h4 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700 transition-colors mb-2">
                      {service.name}
                    </h4>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Preventive & Women's Health */}
            <div id="preventive-womens-health">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-700 mb-6">Preventive & Women&apos;s Health</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Pap Smear & Cervical Cancer Screening', href: '/services' },
                  { name: 'HPV Vaccination', href: '/services' },
                  { name: 'Breast Health Examination', href: '/services' },
                ].map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="group p-5 bg-blue-50 rounded-xl shadow-sm hover:shadow-lg transition-all border border-blue-100 hover:border-blue-200"
                  >
                    <h4 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700 transition-colors mb-2">
                      {service.name}
                    </h4>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* High-Risk Pregnancy (Obstetrics) */}
            <div id="high-risk-pregnancy">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-700 mb-6">High-Risk Pregnancy (Obstetrics)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: 'Antenatal Care for High-Risk Pregnancies', href: '/services' },
                  { name: 'Normal Vaginal Delivery', href: '/services' },
                  { name: 'Cesarean Section (C-Section)', href: '/services' },
                  { name: 'Medical & Surgical Abortion Services', href: '/services' },
                ].map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="group p-5 bg-blue-50 rounded-xl shadow-sm hover:shadow-lg transition-all border border-blue-100 hover:border-blue-200"
                  >
                    <h4 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700 transition-colors mb-2">
                      {service.name}
                    </h4>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Cosmetic Gynecology */}
            <div id="cosmetic-gynecology">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-700 mb-6">Cosmetic Gynecology</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'HIFU for Urinary Incontinence & Vaginal Tightening', href: '/services' },
                  { name: 'Vaginal Rejuvenation', href: '/services' },
                  { name: 'Scar & Stretch-Mark Reduction', href: '/services' },
                ].map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="group p-5 bg-blue-50 rounded-xl shadow-sm hover:shadow-lg transition-all border border-blue-100 hover:border-blue-200"
                  >
                    <h4 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700 transition-colors mb-2">
                      {service.name}
                    </h4>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>

            {/* General Facial Aesthetics */}
            <div id="general-facial-aesthetics">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-700 mb-6">General Facial Aesthetics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Acne Treatment', href: '/services' },
                  { name: 'Carbon Peel (Laser Facial)', href: '/services' },
                  { name: 'Microneedling & PRP (Platelet-Rich Plasma)', href: '/services' },
                  { name: 'Hyperpigmentation Treatment', href: '/services' },
                  { name: 'OxyGeneo Facial', href: '/services' },
                  { name: 'Laser Skin-Tag Removal', href: '/services' },
                  { name: 'HIFU Skin Tightening', href: '/services' },
                ].map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="group p-5 bg-blue-50 rounded-xl shadow-sm hover:shadow-lg transition-all border border-blue-100 hover:border-blue-200"
                  >
                    <h4 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700 transition-colors mb-2">
                      {service.name}
                    </h4>
                    <span className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 group-hover:gap-3 transition-all">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

