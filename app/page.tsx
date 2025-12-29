import type { Metadata } from 'next'
import Link from 'next/link'
import DoctorImage from './components/DoctorImage'
import BabyGifImage from './components/BabyGifImage'
import StatsSection from './components/StatsSection'
import BookAppointment from './components/BookAppointment'
import VisionMission from './components/VisionMission'
import PatientEducation from './components/PatientEducation'
import { ArrowRight, Phone, MessageCircle, CheckCircle, Award, Users, Clock, Star, Quote, Baby, Heart, Stethoscope, Sparkles, Scissors } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dr. Aparana Ghosh - Best Gynecologist in Chembur, Mumbai | Expert Women\'s Health Care',
  description: 'Expert gynecologist Dr. Aparana Ghosh (MBBS, MD) offers comprehensive women\'s health care, laser hair reduction, cosmetic gynecology, HIFU treatment, and maternal care in Chembur, Mumbai. Book your appointment today.',
  keywords: 'best gynecologist Chembur, gynecologist Mumbai, women health specialist, laser hair reduction, cosmetic gynecology, HIFU treatment, maternal care Mumbai',
  other: {
    'keywords': 'best gynecologist Chembur, gynecologist Mumbai, women health specialist, laser hair reduction, cosmetic gynecology, HIFU treatment, maternal care Mumbai'
  },
  openGraph: {
    title: 'Dr. Aparana Ghosh - Best Gynecologist in Chembur, Mumbai',
    description: 'Expert gynecologist offering comprehensive women\'s health care in Chembur, Mumbai.',
    type: 'website',
    images: ['/images/Aparna_Ghosh_Home_Page.jpeg'],
  },
}

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr] gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full mb-6">
                <Award className="w-4 h-4" />
                <span className="text-sm font-medium">Expert Gynecologist</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
                Dr. Aparana Ghosh
              </h1>
              <div className="mb-6">
                <p className="text-xl font-semibold text-primary-600 mb-2">
                  MBBS, MD - Obstetrics & Gynecology
                </p>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                An experienced <strong className="text-primary-600">gynecologist</strong> in Chembur, Mumbai, taking care of all women&apos;s health concerns at every stage of life. Specializing in comprehensive gynecological care, with expertise in cosmetic procedures and advanced treatments.
              </p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="tel:+919876543210"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all font-medium"
                >
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
                <a 
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all font-medium"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp
                </a>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 border-2 border-primary-600 text-primary-600 rounded-full hover:bg-primary-50 transition-all font-medium"
                >
                  Book Appointment <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </div>
            <div className="relative h-[500px] md:h-[600px] max-w-md mx-auto md:mx-0 rounded-2xl overflow-hidden border-0 bg-white">
              <DoctorImage
                src="/images/Aparna_Ghosh_Home_Page.jpeg"
                alt="Dr. Aparana Ghosh - Expert Gynecologist in Chembur, Mumbai"
                priority
                sizes="(max-width: 768px) 100vw, 400px"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-lg text-gray-600">Comprehensive care for all your women&apos;s health needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Award, title: 'Expert Care', desc: 'Experienced gynecologist with advanced qualifications' },
              { icon: CheckCircle, title: 'Premium Quality', desc: 'Handcrafted with finest materials' },
              { icon: Clock, title: 'Lifetime Warranty', desc: 'Protected against defects' },
              { icon: Users, title: 'Free Shipping', desc: 'On orders over ₹40,000' },
            ].map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Comprehensive gynecological and cosmetic services tailored to your needs</p>
          </div>
          
          <div className="max-w-7xl mx-auto space-y-16">
            {/* Gynecology */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-700">Gynecology</h3>
                  <p className="text-gray-600 text-sm">Expert gynecological care</p>
                </div>
              </div>
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
                    className="group relative p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-blue-500 hover:border-blue-600 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors pr-2">
                        {service.name}
                      </h4>
                      <ArrowRight className="w-5 h-5 text-blue-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </div>
                    <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-blue-600 transition-all duration-300 rounded-full"></div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Preventive & Women's Health */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-700">Preventive & Women&apos;s Health</h3>
                  <p className="text-gray-600 text-sm">Proactive health screening</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'Pap Smear & Cervical Cancer Screening', href: '/services' },
                  { name: 'HPV Vaccination', href: '/services' },
                  { name: 'Breast Health Examination', href: '/services' },
                ].map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="group relative p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-green-500 hover:border-green-600 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-green-600 transition-colors pr-2">
                        {service.name}
                      </h4>
                      <ArrowRight className="w-5 h-5 text-green-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </div>
                    <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-green-500 to-green-600 transition-all duration-300 rounded-full"></div>
                  </Link>
                ))}
              </div>
            </div>

            {/* High-Risk Pregnancy (Obstetrics) */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-pink-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Baby className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-700">High-Risk Pregnancy (Obstetrics)</h3>
                  <p className="text-gray-600 text-sm">Specialized maternal care</p>
                </div>
              </div>
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
                    className="group relative p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-pink-500 hover:border-pink-600 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-pink-600 transition-colors pr-2">
                        {service.name}
                      </h4>
                      <ArrowRight className="w-5 h-5 text-pink-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </div>
                    <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-pink-500 to-pink-600 transition-all duration-300 rounded-full"></div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Cosmetic Gynecology */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-700">Cosmetic Gynecology</h3>
                  <p className="text-gray-600 text-sm">Advanced aesthetic treatments</p>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { name: 'HIFU for Urinary Incontinence & Vaginal Tightening', href: '/services' },
                  { name: 'Vaginal Rejuvenation', href: '/services' },
                  { name: 'Scar & Stretch-Mark Reduction', href: '/services' },
                ].map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="group relative p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-purple-500 hover:border-purple-600 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-purple-600 transition-colors pr-2">
                        {service.name}
                      </h4>
                      <ArrowRight className="w-5 h-5 text-purple-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </div>
                    <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-purple-500 to-purple-600 transition-all duration-300 rounded-full"></div>
                  </Link>
                ))}
              </div>
            </div>

            {/* General Facial Aesthetics */}
            <div className="relative">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Scissors className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-bold text-primary-700">General Facial Aesthetics</h3>
                  <p className="text-gray-600 text-sm">Beauty and skincare solutions</p>
                </div>
              </div>
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
                    className="group relative p-6 bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border-l-4 border-orange-500 hover:border-orange-600 hover:-translate-y-1"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors pr-2">
                        {service.name}
                      </h4>
                      <ArrowRight className="w-5 h-5 text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                    </div>
                    <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-orange-500 to-orange-600 transition-all duration-300 rounded-full"></div>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link 
              href="/services"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full hover:from-primary-700 hover:to-primary-800 transition-all font-medium shadow-lg hover:shadow-xl"
            >
              View All Services <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Doctor Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">About Dr. Aparana Ghosh</h2>
            <div className="prose prose-lg max-w-none text-gray-600 space-y-4">
              <p>
                Dr. Aparana Ghosh is an experienced gynecologist in Chembur, Mumbai, with <strong className="text-primary-600">23 years of experience</strong> in gynecology and Obstetrics. She completed her MBBS from <strong className="text-primary-600">RGMC (Rajiv Gandhi Medical College)</strong> in <strong className="text-primary-600">1998</strong> and MD from the prestigious <strong className="text-primary-600">KEM Hospital</strong> in <strong className="text-primary-600">2002</strong>.
              </p>
              <p>
                With extensive experience in world-class hospitals, Dr. Aparana Ghosh specializes in treating all gynecological conditions including HRT, HIFU treatments, hormonal imbalances, and other complex issues. She is an expert in <strong className="text-primary-600">high-risk pregnancy and deliveries</strong>, <strong className="text-primary-600">hysterectomy</strong> (notably removing a <strong className="text-primary-600">3.8 kg fibroid</strong> at Surya Hospital), and <strong className="text-primary-600">urinary incontinence treatment</strong> using advanced HIFU technology.
              </p>
              <p>
                She also offers cosmetic gynecology, HIFU for vaginal tightening and skin tightening, and laser treatments. Throughout her career at reputed hospitals including Surya Hospital, Chembur, she has made her one of the most trusted gynecologists in the area.
              </p>
            </div>
            <div className="text-center mt-8">
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all font-medium"
              >
                Learn More About Dr. Aparana <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <StatsSection />

      {/* Vision Mission Values */}
      <VisionMission />

      {/* Baby Treatments Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <Baby className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Baby & Maternal Care</h2>
            <p className="text-lg text-gray-600">Comprehensive care for expecting mothers and newborns</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Baby Treatment GIF 1 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="relative aspect-video bg-gradient-to-br from-pink-100 to-purple-100 overflow-hidden">
                <BabyGifImage
                  src="/images/baby-treatment-1.gif"
                  alt="Maternal Care Treatment"
                  gradient="from-pink-200 to-purple-200"
                  placeholder="Baby Treatment GIF 1"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Maternal Care</h3>
                <p className="text-gray-600 text-sm">Complete care during pregnancy and delivery</p>
              </div>
            </div>

            {/* Baby Treatment GIF 2 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 overflow-hidden">
                <BabyGifImage
                  src="/images/baby-treatment-2.gif"
                  alt="Newborn Care Treatment"
                  gradient="from-blue-200 to-cyan-200"
                  placeholder="Baby Treatment GIF 2"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Newborn Care</h3>
                <p className="text-gray-600 text-sm">Expert care for your little one</p>
              </div>
            </div>

            {/* Baby Treatment GIF 3 */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="relative aspect-video bg-gradient-to-br from-yellow-100 to-orange-100 overflow-hidden">
                <BabyGifImage
                  src="/images/baby-treatment-3.gif"
                  alt="Postpartum Care Treatment"
                  gradient="from-yellow-200 to-orange-200"
                  placeholder="Baby Treatment GIF 3"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Postpartum Care</h3>
                <p className="text-gray-600 text-sm">Recovery and wellness after delivery</p>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all font-medium"
            >
              Book Consultation for Maternal Care <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Patient Testimonials Preview */}
      <section className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
            <p className="text-lg text-gray-600">Real experiences from our patients</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: 'Priya Sharma',
                treatment: 'Laser Hair Reduction',
                text: 'Excellent experience with laser hair reduction. Dr. Aparana is very professional and the results are amazing. Highly recommended!',
              },
              {
                name: 'Anita Desai',
                treatment: 'Cosmetic Gynecology',
                text: 'Dr. Aparana provided exceptional care throughout my treatment. She is knowledgeable, compassionate, and the clinic is well-equipped.',
              },
              {
                name: 'Sunita Patel',
                treatment: 'HIFU Treatment',
                text: 'The HIFU treatment for incontinence has changed my life. Dr. Aparana explained everything clearly and the procedure was comfortable.',
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary-200 mb-4" />
                <p className="text-gray-700 mb-6 leading-relaxed">&quot;{testimonial.text}&quot;</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.treatment}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/testimonials"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all font-medium"
            >
              View All Testimonials <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Patient Education */}
      <PatientEducation />

      {/* Book Appointment */}
      <BookAppointment />

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Schedule Your Appointment?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards better women&apos;s health. Contact us today to book your consultation.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="tel:+919876543210"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-gray-100 transition-all font-medium"
            >
              <Phone className="w-5 h-5" />
              Call Now
            </a>
            <a 
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all font-medium"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
            <Link 
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white text-white rounded-full hover:bg-white/10 transition-all font-medium"
            >
              Contact Us <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
