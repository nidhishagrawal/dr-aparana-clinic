import type { Metadata } from 'next'
import Link from 'next/link'
import DoctorImage from './components/DoctorImage'
import BabyGifImage from './components/BabyGifImage'
import StatsSection from './components/StatsSection'
import BookAppointment from './components/BookAppointment'
import VisionMission from './components/VisionMission'
import PatientEducation from './components/PatientEducation'
import { ArrowRight, Phone, MessageCircle, CheckCircle, Award, Users, Clock, Star, Quote, Baby, Heart, Stethoscope, Sparkles, Scissors, GraduationCap } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Dr. Aparna Ghosh - Best Gynecologist in Chembur, Mumbai | Expert Women\'s Health Care',
  description: 'Expert gynecologist Dr. Aparna Ghosh (MBBS, MD) offers comprehensive women\'s health care, laser hair reduction, cosmetic gynecology, HIFU treatment, and maternal care in Chembur, Mumbai. Book your appointment today.',
  keywords: 'best gynecologist Chembur, gynecologist Mumbai, women health specialist, laser hair reduction, cosmetic gynecology, HIFU treatment, maternal care Mumbai',
  other: {
    'keywords': 'best gynecologist Chembur, gynecologist Mumbai, women health specialist, laser hair reduction, cosmetic gynecology, HIFU treatment, maternal care Mumbai'
  },
  openGraph: {
    title: 'Dr. Aparna Ghosh - Best Gynecologist in Chembur, Mumbai',
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
                Dr. Aparna Ghosh
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
                alt="Dr. Aparna Ghosh - Expert Gynecologist in Chembur, Mumbai"
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
      <section className="py-16 bg-gradient-to-br from-pink-50 via-rose-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">Our Services</h2>
            <p className="text-base text-gray-600 max-w-2xl mx-auto">Comprehensive gynecological and cosmetic services</p>
          </div>
          
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Gynecology */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary-700">Gynecology</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-4">
                {[
                  { name: 'Hysterectomy Specialist', href: '/services', color: 'blue' },
                  { name: 'Fibroid & Ovarian Cyst Surgery', href: '/services', color: 'blue' },
                  { name: 'Laparoscopic Gynec Surgery', href: '/services', color: 'blue' },
                  { name: 'Infertility & PCOS Management', href: '/services', color: 'blue' },
                  { name: 'Menstrual & Hormonal Disorders', href: '/services', color: 'blue' },
                  { name: 'Uterus Removal (Hysterectomy)', href: '/services', color: 'blue' },
                ].map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="group p-3 bg-blue-50 rounded-lg hover:bg-blue-100 transition-all border border-blue-100 hover:border-blue-300"
                  >
                    <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-700 transition-colors leading-tight">
                      {service.name}
                    </h4>
                  </Link>
                ))}
              </div>
              <div className="flex justify-end mt-4">
                <Link 
                  href="/services#gynecology"
                  className="flex items-center gap-2 px-4 py-2 bg-blue-50 hover:bg-blue-100 text-blue-700 rounded-lg transition-all group"
                >
                  <span className="text-sm font-medium">View More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Preventive & Women's Health */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-xl flex items-center justify-center shadow-md">
                  <Heart className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary-700">Preventive & Women&apos;s Health</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                {[
                  { name: 'Pap Smear & Cervical Cancer Screening', href: '/services' },
                  { name: 'HPV Vaccination', href: '/services' },
                  { name: 'Breast Health Examination', href: '/services' },
                ].map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="group p-3 bg-green-50 rounded-lg hover:bg-green-100 transition-all border border-green-100 hover:border-green-300"
                  >
                    <h4 className="text-sm font-medium text-gray-800 group-hover:text-green-700 transition-colors">
                      {service.name}
                    </h4>
                  </Link>
                ))}
              </div>
              <div className="flex justify-end mt-4">
                <Link 
                  href="/services#preventive-womens-health"
                  className="flex items-center gap-2 px-4 py-2 bg-green-50 hover:bg-green-100 text-green-700 rounded-lg transition-all group"
                >
                  <span className="text-sm font-medium">View More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* High-Risk Pregnancy (Obstetrics) */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl flex items-center justify-center shadow-md">
                  <Baby className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary-700">High-Risk Pregnancy (Obstetrics)</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
                {[
                  { name: 'Antenatal Care for High-Risk Pregnancies', href: '/services' },
                  { name: 'Normal Vaginal Delivery', href: '/services' },
                  { name: 'Cesarean Section (C-Section)', href: '/services' },
                  { name: 'Medical & Surgical Abortion Services', href: '/services' },
                ].map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="group p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-all border border-pink-100 hover:border-pink-300"
                  >
                    <h4 className="text-sm font-medium text-gray-800 group-hover:text-pink-700 transition-colors leading-tight">
                      {service.name}
                    </h4>
                  </Link>
                ))}
              </div>
              <div className="flex justify-end mt-4">
                <Link 
                  href="/services#high-risk-pregnancy"
                  className="flex items-center gap-2 px-4 py-2 bg-pink-50 hover:bg-pink-100 text-pink-700 rounded-lg transition-all group"
                >
                  <span className="text-sm font-medium">View More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Cosmetic Gynecology */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center shadow-md">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary-700">Cosmetic Gynecology</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4">
                {[
                  { name: 'HIFU for Urinary Incontinence & Vaginal Tightening', href: '/services' },
                  { name: 'Vaginal Rejuvenation', href: '/services' },
                  { name: 'Scar & Stretch-Mark Reduction', href: '/services' },
                ].map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="group p-3 bg-purple-50 rounded-lg hover:bg-purple-100 transition-all border border-purple-100 hover:border-purple-300"
                  >
                    <h4 className="text-sm font-medium text-gray-800 group-hover:text-purple-700 transition-colors">
                      {service.name}
                    </h4>
                  </Link>
                ))}
              </div>
              <div className="flex justify-end mt-4">
                <Link 
                  href="/services#cosmetic-gynecology"
                  className="flex items-center gap-2 px-4 py-2 bg-purple-50 hover:bg-purple-100 text-purple-700 rounded-lg transition-all group"
                >
                  <span className="text-sm font-medium">View More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* General Facial Aesthetics */}
            <div className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-3 mb-5">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md">
                  <Scissors className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-primary-700">General Facial Aesthetics</h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mb-4">
                {[
                  { name: 'Acne Treatment', href: '/services' },
                  { name: 'Carbon Peel (Laser Facial)', href: '/services' },
                  { name: 'Microneedling & PRP', href: '/services' },
                  { name: 'Hyperpigmentation Treatment', href: '/services' },
                  { name: 'OxyGeneo Facial', href: '/services' },
                  { name: 'Laser Skin-Tag Removal', href: '/services' },
                  { name: 'HIFU Skin Tightening', href: '/services' },
                ].map((service, index) => (
                  <Link
                    key={index}
                    href={service.href}
                    className="group p-3 bg-orange-50 rounded-lg hover:bg-orange-100 transition-all border border-orange-100 hover:border-orange-300"
                  >
                    <h4 className="text-sm font-medium text-gray-800 group-hover:text-orange-700 transition-colors leading-tight">
                      {service.name}
                    </h4>
                  </Link>
                ))}
              </div>
              <div className="flex justify-end mt-4">
                <Link 
                  href="/services#general-facial-aesthetics"
                  className="flex items-center gap-2 px-4 py-2 bg-orange-50 hover:bg-orange-100 text-orange-700 rounded-lg transition-all group"
                >
                  <span className="text-sm font-medium">View More</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-10">
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
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About Dr. Aparna Ghosh</h2>
              <p className="text-lg text-gray-600">Expert Gynecologist & Obstetrician</p>
            </div>
            
            {/* Key Highlights */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl p-6 text-white shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">23+</div>
                    <div className="text-sm text-blue-100">Years Experience</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-green-500 to-green-600 rounded-2xl p-6 text-white shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Users className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">MBBS</div>
                    <div className="text-sm text-green-100">MD Qualified</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                    <Stethoscope className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold">Expert</div>
                    <div className="text-sm text-purple-100">Surgeon</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Left Column - Education */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 sticky top-8 h-full flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-8 flex items-center gap-2">
                    <GraduationCap className="w-6 h-6 text-primary-600" />
                    Education
                  </h3>
                  <div className="space-y-6 flex-grow">
                    <div className="border-l-4 border-blue-500 pl-5 py-2">
                      <div className="font-semibold text-gray-900 text-base mb-1">MBBS</div>
                      <div className="text-sm text-gray-600">RGMC, 1998</div>
                    </div>
                    <div className="border-l-4 border-green-500 pl-5 py-2">
                      <div className="font-semibold text-gray-900 text-base mb-1">MD - Obstetrics & Gynecology</div>
                      <div className="text-sm text-gray-600">KEM Hospital, 2002</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Column - About */}
              <div className="lg:col-span-2">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="space-y-5 text-gray-700">
                    <p className="text-base leading-relaxed">
                      Dr. Aparna Ghosh is an experienced gynecologist in Chembur, Mumbai, with <span className="text-primary-600 font-semibold">23 years of experience</span> in gynecology and Obstetrics. She completed her MBBS from <span className="text-primary-600 font-semibold">RGMC (Rajiv Gandhi Medical College)</span> in <span className="text-primary-600 font-semibold">1998</span> and MD from the prestigious <span className="text-primary-600 font-semibold">KEM Hospital</span> in <span className="text-primary-600 font-semibold">2002</span>.
                    </p>
                    
                    <div className="bg-gradient-to-r from-primary-50 to-blue-50 rounded-xl p-5 border-l-4 border-primary-500">
                      <p className="text-base text-gray-700 leading-relaxed">
                        With extensive experience in world-class hospitals, Dr. Aparna Ghosh specializes in treating all gynecological conditions including HRT, HIFU treatments, hormonal imbalances, and other complex issues. She is an expert in <span className="text-primary-600 font-semibold">high-risk pregnancy and deliveries</span>, <span className="text-primary-600 font-semibold">hysterectomy</span> (notably removing a <span className="text-primary-600 font-semibold">3.8 kg fibroid</span> at Surya Hospital), and <span className="text-primary-600 font-semibold">urinary incontinence treatment</span> using advanced HIFU technology.
                      </p>
                    </div>
                    
                    <p className="text-base text-gray-700 leading-relaxed">
                      She also offers cosmetic gynecology, HIFU for vaginal tightening and skin tightening, and laser treatments. Throughout her career at reputed hospitals including Surya Hospital, Chembur, she has made her one of the most trusted gynecologists in the area.
                    </p>
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-full text-xs font-medium">High-Risk Pregnancy</span>
                      <span className="px-3 py-1.5 bg-green-50 text-green-700 rounded-full text-xs font-medium">Hysterectomy</span>
                      <span className="px-3 py-1.5 bg-purple-50 text-purple-700 rounded-full text-xs font-medium">HIFU Treatment</span>
                      <span className="px-3 py-1.5 bg-pink-50 text-pink-700 rounded-full text-xs font-medium">Cosmetic Gynecology</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-10">
              <Link 
                href="/about"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-full hover:from-primary-700 hover:to-primary-800 transition-all font-medium shadow-lg hover:shadow-xl"
              >
                Learn More About Dr. Aparna <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <StatsSection />

      {/* Vision Mission Values */}
      <VisionMission />

      {/* Pregnancy & Maternal Care Section */}
      <section className="py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <Baby className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Pregnancy & Maternal Care</h2>
            <p className="text-lg text-gray-600">Comprehensive care for expecting mothers throughout pregnancy</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Maternal Care Image */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="relative aspect-video bg-gradient-to-br from-pink-100 to-purple-100 overflow-hidden">
                <BabyGifImage
                  src="/images/Maternal_Care.png"
                  alt="Maternal Care Treatment"
                  gradient="from-pink-200 to-purple-200"
                  placeholder="Maternal Care"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Maternal Care</h3>
                <p className="text-gray-600 text-sm">Complete care during pregnancy and delivery</p>
              </div>
            </div>

            {/* Prenatal Care Image */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="relative aspect-video bg-gradient-to-br from-blue-100 to-cyan-100 overflow-hidden">
                <BabyGifImage
                  src="/images/prenatal_care.png"
                  alt="Prenatal Care Treatment"
                  gradient="from-blue-200 to-cyan-200"
                  placeholder="Prenatal Care"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">Prenatal Care</h3>
                <p className="text-gray-600 text-sm">Comprehensive monitoring and care during pregnancy</p>
              </div>
            </div>

            {/* Postpartum Care Image */}
            <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="relative aspect-video bg-gradient-to-br from-yellow-100 to-orange-100 overflow-hidden">
                <BabyGifImage
                  src="/images/postpartum_care.png"
                  alt="Postpartum Care Treatment"
                  gradient="from-yellow-200 to-orange-200"
                  placeholder="Postpartum Care"
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
            {/* Video Testimonial 1 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="relative aspect-video bg-gray-900">
                <video
                  src="/video/customer_review.mp4"
                  controls
                  className="w-full h-full object-contain"
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary-200 mb-4" />
                <p className="text-gray-700 mb-4 leading-relaxed">Watch our patient share their experience</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-gray-900">Victoria Merchant</p>
                </div>
              </div>
            </div>

            {/* Video Testimonial 2 */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="relative aspect-video bg-gray-900">
                <video
                  src="/video/review2.mp4"
                  controls
                  className="w-full h-full object-contain"
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary-200 mb-4" />
                <p className="text-gray-700 mb-4 leading-relaxed">Watch our patient share their experience</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-gray-900">Patient Review</p>
                </div>
              </div>
            </div>

            {/* Video Testimonial 3 - Priya Sharma */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="relative aspect-video bg-gray-900">
                <video
                  src="/video/customer_review.mp4"
                  controls
                  className="w-full h-full object-contain"
                  playsInline
                >
                  Your browser does not support the video tag.
                </video>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="w-8 h-8 text-primary-200 mb-4" />
                <p className="text-gray-700 mb-4 leading-relaxed">Watch our patient share their experience</p>
                <div className="border-t border-gray-100 pt-4">
                  <p className="font-bold text-gray-900">Priya Sharma</p>
                  <p className="text-sm text-gray-600">Laser Hair Reduction</p>
                </div>
              </div>
            </div>

            {/* Text Testimonials */}
            {[
              {
                name: 'Anita Desai',
                treatment: 'Cosmetic Gynecology',
                text: 'Dr. Aparna provided exceptional care throughout my treatment. She is knowledgeable, compassionate, and the clinic is well-equipped.',
              },
              {
                name: 'Sunita Patel',
                treatment: 'HIFU Treatment',
                text: 'The HIFU treatment for incontinence has changed my life. Dr. Aparna explained everything clearly and the procedure was comfortable.',
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
