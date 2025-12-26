import type { Metadata } from 'next'
import DoctorImage from '../components/DoctorImage'
import { Award, GraduationCap, Users, Heart, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Dr. Aparana Ghosh - Expert Gynecologist in Chembur, Mumbai',
  description: 'Learn about Dr. Aparana Ghosh (MBBS, MD - Obstetrics & Gynecology), a renowned gynecologist with FMAS fellowship specializing in cosmetic gynecology, laser treatments, HIFU, and comprehensive women\'s health care in Chembur, Mumbai.',
  keywords: 'Dr. Aparana Ghosh, gynecologist Chembur, MBBS MD gynecologist Mumbai, women health specialist, obstetrician Chembur, gynecologist qualifications',
  openGraph: {
    title: 'About Dr. Aparana Ghosh - Expert Gynecologist in Chembur, Mumbai',
    description: 'Learn about Dr. Aparana Ghosh, a renowned gynecologist specializing in comprehensive women\'s health care in Chembur, Mumbai.',
    type: 'profile',
    images: ['/images/dr-aparana-ghosh.jpg'],
  },
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
      {/* Hero */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">About Dr. Aparana Ghosh</h1>
          <p className="text-xl text-gray-600">Expert Gynecologist & Cosmetic Surgeon</p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="relative">
              <div className="relative aspect-square rounded-2xl overflow-hidden bg-gray-200 shadow-xl">
                <DoctorImage
                  src="/images/dr-aparana-ghosh.jpg"
                  alt="Dr. Aparana Ghosh - Expert Gynecologist & Cosmetic Surgeon"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dr. Aparana Ghosh</h2>
              <p className="text-lg font-semibold text-primary-600 mb-4">
                MBBS, MD - Obstetrics & Gynecology<br />
                FMAS (Fellowship in Minimally Invasive Surgeries)
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Dr. Aparana Ghosh (MBBS, MD - Obstetrics & Gynecology) is an experienced gynecologist in Chembur, Mumbai, taking care of all related health concerns at every stage for women.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                She has done her Masters at prestigious medical institutions. She worked in world-class hospitals such as renowned medical centers and has extensive experience in treating patients with gynecological issues.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Extremely passionate about <strong className="text-primary-600">women&apos;s health and gynecology</strong>, an expert in treating all gynecological conditions including HRT, HIFU treatments, hormonal imbalances, PCOD/PCOS, and other complex gynaecological issues. She also offers cosmetic gynecology and laser treatments as additional services. She offers the latest and most cutting-edge treatments for various gynaecological conditions.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dr. Aparana Ghosh has worked as a gynaecologist at many reputed hospitals and clinics in Chembur. As a result, she has acquired considerable knowledge and hands-on experience in treating and managing patients with gynaecological issues.
              </p>
            </div>
          </div>

          {/* Qualifications */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 mb-16 shadow-sm border border-white/50">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Qualifications & Experience</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <GraduationCap className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Medical Education</h3>
                  <p className="text-gray-600">MBBS, MD (Obstetrics & Gynecology) from prestigious medical institutions</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Specializations</h3>
                  <p className="text-gray-600">Cosmetic Gynecology, Laser Treatments, Advanced Gynecological Procedures</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Years of Experience</h3>
                  <p className="text-gray-600">Extensive experience in treating thousands of patients with excellent outcomes</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Heart className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Patient Care Philosophy</h3>
                  <p className="text-gray-600">Compassionate, personalized care with focus on patient comfort and satisfaction</p>
                </div>
              </div>
            </div>
          </div>

          {/* Areas of Expertise */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Areas of Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Laser Hair Reduction',
                'Cosmetic Gynecology',
                'HIFU for Urinary Incontinence',
                'Hormone Replacement Therapy (HRT)',
                'Scar & Stretch Mark Reduction',
                'General Gynecology',
                'Menopause Management',
                'Women\'s Health Consultations'
              ].map((expertise, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0" />
                  <span className="text-gray-700">{expertise}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

