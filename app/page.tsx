import Link from 'next/link'
import DoctorImage from './components/DoctorImage'
import BabyGifImage from './components/BabyGifImage'
import StatsSection from './components/StatsSection'
import BookAppointment from './components/BookAppointment'
import VisionMission from './components/VisionMission'
import PatientEducation from './components/PatientEducation'
import { ArrowRight, Phone, MessageCircle, CheckCircle, Award, Users, Clock, Star, Quote, Baby } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-50 via-white to-primary-100 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
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
                <p className="text-lg text-gray-600">
                  FMAS (Fellowship in Minimally Invasive Surgeries)
                </p>
              </div>
              <p className="text-xl text-gray-600 mb-8">
                An experienced <strong className="text-primary-600">gynecologist</strong> in Chembur, Mumbai, taking care of all women&apos;s health concerns at every stage of life. Specializing in comprehensive gynecological care, with expertise in cosmetic procedures and advanced treatments.
              </p>
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
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-200 shadow-xl">
                <DoctorImage
                  src="/images/dr-aparana-ghosh.jpg"
                  alt="Dr. Aparana Ghosh - Expert Gynecologist in Chembur, Mumbai"
                  priority
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Specialized Services</h2>
            <p className="text-lg text-gray-600">Comprehensive <strong className="text-primary-600">gynecological care</strong> and advanced treatments</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Gynecology Services - Primary */}
            <Link href="/services/hrt-treatment" className="group bg-gradient-to-br from-primary-50 to-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border-2 border-primary-200">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-700 transition-colors">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="inline-block px-2 py-1 bg-primary-600 text-white text-xs font-medium rounded mb-2">Primary</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">HRT Treatment</h3>
              <p className="text-gray-600 mb-4">Hormone replacement therapy for managing menopause symptoms, hormonal imbalances, and improving overall gynecological health.</p>
              <span className="text-primary-600 font-medium flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link href="/services/hifu-incontinence" className="group bg-gradient-to-br from-primary-50 to-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border-2 border-primary-200">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-700 transition-colors">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="inline-block px-2 py-1 bg-primary-600 text-white text-xs font-medium rounded mb-2">Primary</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">HIFU for Urinary Incontinence</h3>
              <p className="text-gray-600 mb-4">Non-invasive gynecological treatment for urinary incontinence using advanced HIFU technology.</p>
              <span className="text-primary-600 font-medium flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link href="/services/general-gynecology" className="group bg-gradient-to-br from-primary-50 to-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border-2 border-primary-200">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary-700 transition-colors">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="inline-block px-2 py-1 bg-primary-600 text-white text-xs font-medium rounded mb-2">Primary</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">General Gynecology</h3>
              <p className="text-gray-600 mb-4">Comprehensive gynecological consultations, routine check-ups, and treatment for all women&apos;s health concerns.</p>
              <span className="text-primary-600 font-medium flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            {/* Cosmetic Services - Secondary */}
            <Link href="/services/cosmetic-gynecology" className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                <Award className="w-8 h-8 text-gray-600" />
              </div>
              <div className="inline-block px-2 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded mb-2">Also Available</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Cosmetic Gynecology</h3>
              <p className="text-gray-600 mb-4">Advanced cosmetic procedures to enhance feminine wellness and confidence.</p>
              <span className="text-primary-600 font-medium flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link href="/services/laser-hair-reduction" className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                <Award className="w-8 h-8 text-gray-600" />
              </div>
              <div className="inline-block px-2 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded mb-2">Also Available</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Laser Hair Reduction</h3>
              <p className="text-gray-600 mb-4">Permanent hair removal with advanced laser technology for smooth, hair-free skin.</p>
              <span className="text-primary-600 font-medium flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link href="/services/scar-reduction" className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                <Award className="w-8 h-8 text-gray-600" />
              </div>
              <div className="inline-block px-2 py-1 bg-gray-200 text-gray-700 text-xs font-medium rounded mb-2">Also Available</div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">Scar & Stretch Mark Reduction</h3>
              <p className="text-gray-600 mb-4">Advanced treatments to reduce scars and stretch marks for smoother skin.</p>
              <span className="text-primary-600 font-medium flex items-center gap-2">
                Learn More <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link href="/services" className="group bg-gradient-to-br from-primary-600 to-primary-700 p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all text-white">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4">
                <ArrowRight className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">View All Services</h3>
              <p className="text-white/90 mb-4">Explore our complete range of gynecological and cosmetic treatments.</p>
              <span className="text-white font-medium flex items-center gap-2">
                See All Services <ArrowRight className="w-4 h-4" />
              </span>
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
                Dr. Aparana Ghosh (MBBS, MD - Obstetrics & Gynecology) is an experienced gynecologist in Chembur, Mumbai, taking care of all related health concerns at every stage for women.
              </p>
              <p>
                She has done her Masters at prestigious medical institutions. She worked in world-class hospitals and has extensive experience in treating patients with gynecological issues.
              </p>
              <p>
                Extremely passionate about <strong className="text-primary-600">women&apos;s health and gynecology</strong>, an expert in treating all gynecological conditions including HRT, HIFU treatments, hormonal imbalances, and other complex gynaecological issues. She also offers cosmetic gynecology and laser treatments as additional services. She offers the latest and most cutting-edge treatments for various gynaecological conditions. She has also counselled women on maintaining good health and staying active considering their busy lifestyles.
              </p>
              <p>
                Dr. Aparana Ghosh has worked as a <strong className="text-primary-600">gynaecologist</strong> at many reputed hospitals and clinics in Chembur. As a result, she has acquired considerable knowledge and hands-on experience in treating and managing patients with gynaecological issues.
              </p>
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
            Book your consultation today and take the first step towards better health
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <a 
              href="tel:+919876543210"
              className="flex items-center gap-2 px-8 py-4 bg-white text-primary-600 rounded-full hover:bg-gray-100 transition-all font-medium"
            >
              <Phone className="w-5 h-5" />
              Call: +91 98765 43210
            </a>
            <a 
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-8 py-4 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all font-medium"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Appointment
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

