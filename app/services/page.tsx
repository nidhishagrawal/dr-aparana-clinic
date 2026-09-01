import type { Metadata } from 'next'
import Link from 'next/link'
import BreadcrumbSchema from '../components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Gynecologist Services in Chembur - Dr. Aparna Ghosh',
  description: 'Gynecological services including laser hair reduction, cosmetic gynecology, HIFU, HRT, and scar reduction in Chembur, Mumbai. Book your appointment today.',
  keywords: 'gynecologist services Chembur, laser hair reduction Mumbai, cosmetic gynecology, HIFU treatment, HRT treatment Mumbai, women health services, gynecological treatments',
  other: {
    'keywords': 'gynecologist services Chembur, laser hair reduction Mumbai, cosmetic gynecology, HIFU treatment, HRT treatment Mumbai, women health services, gynecological treatments'
  },
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Gynecologist Services - Dr. Aparna Ghosh Clinic, Chembur, Mumbai',
    description: 'Comprehensive gynecological services including laser hair reduction, cosmetic gynecology, HIFU, and more in Chembur, Mumbai.',
    type: 'website',
  },
}

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Services', path: '/services' }]} />
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Our Services</h1>
          <p className="text-xl text-gray-600">Comprehensive gynecological and cosmetic services</p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-12">
            {/* Gynecology */}
            <div id="gynecology">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-700 mb-6">Gynecology</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Hysterectomy Specialist', description: 'Expert surgical removal of uterus for various gynecological conditions with minimal complications.' },
                  { name: 'Fibroid & Ovarian Cyst Surgery', description: 'Advanced surgical techniques for removal of fibroids and ovarian cysts with precision and care.' },
                  { name: 'Laparoscopic Gynec Surgery', description: 'Minimally invasive laparoscopic procedures for faster recovery and reduced scarring.' },
                  { name: 'Infertility & PCOS Management', description: 'Comprehensive treatment plans for infertility and Polycystic Ovary Syndrome management.' },
                  { name: 'Menstrual & Hormonal Disorders', description: 'Expert diagnosis and treatment of menstrual irregularities and hormonal imbalances.' },
                  { name: 'Safe Abortion', description: 'Safe and confidential abortion services with compassionate care, professional medical support, and complete privacy. We provide both medical and surgical abortion options tailored to individual needs with expert guidance throughout the process.' },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="group p-5 bg-blue-50 rounded-xl shadow-sm hover:shadow-lg transition-all border border-blue-100 hover:border-blue-200"
                  >
                    <h4 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700 transition-colors mb-3">
                      {service.name}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Preventive & Women's Health */}
            <div id="preventive-womens-health">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-700 mb-6">Preventive & Women&apos;s Health</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Pap Smear & Cervical Cancer Screening', description: 'Regular screening tests for early detection and prevention of cervical cancer.' },
                  { name: 'HPV Vaccination', description: 'Vaccination against Human Papillomavirus to prevent cervical cancer and related conditions.' },
                  { name: 'Breast Health Examination', description: 'Comprehensive breast examinations and screenings for early detection of breast health issues.' },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="group p-5 bg-blue-50 rounded-xl shadow-sm hover:shadow-lg transition-all border border-blue-100 hover:border-blue-200"
                  >
                    <h4 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700 transition-colors mb-3">
                      {service.name}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* High-Risk Pregnancy (Obstetrics) */}
            <div id="high-risk-pregnancy">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-700 mb-6">High-Risk Pregnancy (Obstetrics)</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { name: 'Antenatal Care for High-Risk Pregnancies', description: 'Specialized care and monitoring for high-risk pregnancies to ensure safe delivery.' },
                  { name: 'Normal Vaginal Delivery', description: 'Expert support and care for natural vaginal deliveries with minimal intervention.' },
                  { name: 'Cesarean Section (C-Section)', description: 'Safe and professional cesarean delivery when medically necessary or preferred.' },
                  { name: 'Medical & Surgical Abortion Services', description: 'Safe and confidential abortion services with compassionate care and support.' },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="group p-5 bg-blue-50 rounded-xl shadow-sm hover:shadow-lg transition-all border border-blue-100 hover:border-blue-200"
                  >
                    <h4 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700 transition-colors mb-3">
                      {service.name}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Cosmetic Gynecology */}
            <div id="cosmetic-gynecology">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-700 mb-6">Cosmetic Gynecology</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'HIFU for Urinary Incontinence & Vaginal Tightening', description: 'Non-invasive HIFU treatment for urinary incontinence and vaginal tightening with no downtime.' },
                  { name: 'Vaginal Rejuvenation', description: 'Advanced procedures to restore vaginal health, tone, and function for improved quality of life.' },
                  { name: 'Scar & Stretch-Mark Reduction', description: 'Effective treatments to reduce the appearance of scars and stretch marks.' },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="group p-5 bg-blue-50 rounded-xl shadow-sm hover:shadow-lg transition-all border border-blue-100 hover:border-blue-200"
                  >
                    <h4 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700 transition-colors mb-3">
                      {service.name}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* General Facial Aesthetics */}
            <div id="general-facial-aesthetics">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-700 mb-6">General Facial Aesthetics</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Acne Treatment', description: 'Effective treatments for acne and acne scars to achieve clear, healthy skin.' },
                  { name: 'Carbon Peel (Laser Facial)', description: 'Deep cleansing facial treatment using carbon and laser technology for radiant skin.' },
                  { name: 'Microneedling & PRP (Platelet-Rich Plasma)', description: 'Advanced skin rejuvenation using microneedling combined with PRP for natural collagen production.' },
                  { name: 'Hyperpigmentation Treatment', description: 'Targeted treatments to reduce dark spots and uneven skin tone.' },
                  { name: 'OxyGeneo Facial', description: 'Revolutionary facial treatment that exfoliates, infuses, and oxygenates the skin.' },
                  { name: 'Laser Skin-Tag Removal', description: 'Quick and painless removal of skin tags using advanced laser technology.' },
                  { name: 'HIFU Skin Tightening', description: 'Non-invasive HIFU treatment for facial and body skin tightening without surgery.' },
                ].map((service, index) => (
                  <div
                    key={index}
                    className="group p-5 bg-blue-50 rounded-xl shadow-sm hover:shadow-lg transition-all border border-blue-100 hover:border-blue-200"
                  >
                    <h4 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700 transition-colors mb-3">
                      {service.name}
                    </h4>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Us Section */}
            <div>
              <div className="group p-5 bg-blue-50 rounded-xl shadow-sm hover:shadow-lg transition-all border border-blue-100 hover:border-blue-200">
                <h4 className="text-lg font-semibold text-blue-900 group-hover:text-blue-700 transition-colors mb-3">
                  Need More Information?
                </h4>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Contact us to learn more about our services or schedule a consultation with Dr. Aparna Ghosh.
                </p>
                <Link
                  href="/contact"
                  className="inline-block text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors"
                >
                  Contact Us →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

