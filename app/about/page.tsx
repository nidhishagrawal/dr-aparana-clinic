import type { Metadata } from 'next'
import DoctorImage from '../components/DoctorImage'
import CaseStoryImage from '../components/CaseStoryImage'
import { Award, GraduationCap, Users, Heart, CheckCircle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Dr. Aparana Ghosh - Expert Gynecologist in Chembur, Mumbai',
  description: 'Learn about Dr. Aparana Ghosh (MBBS from RGMC 1998, MD from KEM Hospital 2002), a renowned gynecologist with 23 years of experience in gynecology and Obstetrics, specializing in cosmetic gynecology, laser treatments, HIFU, and comprehensive women\'s health care in Chembur, Mumbai.',
  keywords: 'Dr. Aparana Ghosh, gynecologist Chembur, MBBS MD gynecologist Mumbai, women health specialist, obstetrician Chembur, gynecologist qualifications',
  other: {
    'keywords': 'Dr. Aparana Ghosh, gynecologist Chembur, MBBS MD gynecologist Mumbai, women health specialist, obstetrician Chembur, gynecologist qualifications'
  },
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
          <p className="text-xl text-gray-600">
            Expert Gynecologist Surgeon & Obstetrician<br />
            Cosmetic Gynecologist
          </p>
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
                  alt="Dr. Aparana Ghosh - Expert Gynecologist Surgeon & Obstetrician, Cosmetic Gynecologist"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Dr. Aparana Ghosh</h2>
              <p className="text-lg font-semibold text-primary-600 mb-4">
                MBBS (RGMC, 1998) | MD - Obstetrics & Gynecology (KEM Hospital, 2002)<br />
                FMAS (Fellowship in Minimally Invasive Surgeries)<br />
                <span className="text-base text-gray-600 font-normal">23 Years of Experience</span>
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Dr. Aparana Ghosh (MBBS, MD - Obstetrics & Gynecology) is an experienced gynecologist in Chembur, Mumbai, with <strong className="text-primary-600">23 years of experience</strong> in the field of gynecology and Obstetrics. She takes care of all related health concerns at every stage for women.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Dr. Aparana Ghosh passed out MBBS from <strong className="text-primary-600">RGMC (Rajiv Gandhi Medical College)</strong> in <strong className="text-primary-600">1998</strong>. She completed her post-graduation (MD) from the prestigious <strong className="text-primary-600">KEM Hospital (King Edward Memorial Hospital)</strong> in <strong className="text-primary-600">2002</strong>, one of Mumbai&apos;s most renowned medical institutions.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                With over two decades of experience, Dr. Aparana Ghosh has worked in world-class hospitals and has extensive experience in treating patients with gynecological issues. She is extremely passionate about <strong className="text-primary-600">women&apos;s health and gynecology</strong>, and is an expert in treating all gynecological conditions including HRT, HIFU treatments, hormonal imbalances, PCOD/PCOS, and other complex gynaecological issues. She also offers cosmetic gynecology and laser treatments as additional services.
              </p>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                Dr. Aparana Ghosh has extensive expertise in dealing with <strong className="text-primary-600">high-risk pregnancy and deliveries</strong>, ensuring the best outcomes for both mother and baby. She is also an expert in <strong className="text-primary-600">hysterectomy</strong>, specializing in the removal of uterus with huge fibroids. Her notable achievement includes removing the largest fibroid weighing <strong className="text-primary-600">3.8 kg</strong> from a uterus at Surya Hospital, Chembur, demonstrating her exceptional surgical skills and expertise.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Dr. Aparana Ghosh is an expert in <strong className="text-primary-600">urinary incontinence treatment</strong> using advanced HIFU technology. HIFU (High-Intensity Focused Ultrasound) is used for vaginal tightening and incontinence treatment, providing non-invasive solutions for women&apos;s health issues. Additionally, HIFU technology is also used for tightening sagging skin of face, neck, underarms, and belly fat, offering comprehensive cosmetic and therapeutic treatments.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Throughout her career, Dr. Aparana Ghosh has worked as a gynaecologist at many reputed hospitals and clinics in Chembur, including Surya Hospital. She has counselled countless women on maintaining good health and staying active, making her one of the most trusted gynecologists in the area.
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
                  <p className="text-gray-600"><strong>MBBS</strong> - RGMC (Rajiv Gandhi Medical College), 1998</p>
                  <p className="text-gray-600"><strong>MD - Obstetrics & Gynecology</strong> - KEM Hospital (King Edward Memorial Hospital), 2002</p>
                  <p className="text-gray-600">FMAS (Fellowship in Minimally Invasive Surgeries)</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Specializations</h3>
                  <p className="text-gray-600">High-Risk Pregnancy & Deliveries, Hysterectomy (Large Fibroids), Urinary Incontinence Treatment, HIFU Procedures, Cosmetic Gynecology, Laser Treatments</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Years of Experience</h3>
                  <p className="text-gray-600"><strong>23 years</strong> of experience in gynecology and Obstetrics</p>
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

          {/* Notable Achievement - Case Study */}
          <div className="bg-gradient-to-br from-primary-50 to-white rounded-2xl p-8 mb-16 shadow-lg border-2 border-primary-200">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-600 text-white rounded-full mb-4">
                <Award className="w-5 h-5" />
                <span className="font-semibold">NOTABLE ACHIEVEMENT</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Case Story: A Myomectomy Procedure</h2>
              <p className="text-lg text-gray-600">Surya Hospitals, Chembur</p>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start mb-6">
                <div>
                  <p className="text-lg leading-relaxed mb-4">
                    Dr. Aparana Ghosh at Surya Hospitals, Chembur, performed a swift <strong className="text-primary-600">50-minute surgical procedure</strong> to remove a massive <strong className="text-primary-600">3.8 kg fibroid</strong>, which measured <strong className="text-primary-600">23 cm</strong>. This was the cause of a two-year history of abdominal distention and a palpable lump.
                  </p>
                  <p className="text-lg leading-relaxed">
                    On <strong>September 21, 2023</strong>, a skilled surgical team made a Pfannensteil incision. The mass, weighing <strong className="text-primary-600">3.780 kg</strong> and described as posterior multilobulated, was meticulously extracted. The procedure utilized a strategic injection of vasopressin to avoid opening the uterine cavity.
                  </p>
                </div>
                <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-lg border-2 border-primary-200">
                  <CaseStoryImage
                    src="/images/case-story-myomectomy.jpg"
                    alt="Dr. Aparana Ghosh with 3.8 kg fibroid removed at Surya Hospital, Chembur"
                  />
                </div>
              </div>
              
              <div className="bg-white rounded-xl p-6 border border-gray-200 my-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Procedure Details</h3>
                <p className="text-gray-700 leading-relaxed mb-3">
                  Post-procedure examination of the uterus, both tubes, and ovaries indicated normalcy. The procedure had <strong className="text-primary-600">minimal blood loss</strong> and stands as a testament to the expertise and dedication of the medical team at Surya Hospitals, Chembur.
                </p>
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <p className="text-sm text-gray-600"><strong>Surgeon:</strong> Dr. Aparana Ghosh Shinde</p>
                  <p className="text-sm text-gray-600"><strong>Hospital:</strong> Surya Hospitals, Chembur</p>
                  <p className="text-sm text-gray-600"><strong>Date:</strong> September 21, 2023</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                <div className="bg-primary-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">3.8 kg</div>
                  <div className="text-sm text-gray-600">Fibroid Weight</div>
                </div>
                <div className="bg-primary-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">23 cm</div>
                  <div className="text-sm text-gray-600">Fibroid Size</div>
                </div>
                <div className="bg-primary-50 rounded-lg p-4 text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">50 min</div>
                  <div className="text-sm text-gray-600">Procedure Time</div>
                </div>
              </div>
            </div>
          </div>

          {/* Areas of Expertise */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Areas of Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'High-Risk Pregnancy & Deliveries',
                'Hysterectomy (Including Large Fibroids)',
                'Urinary Incontinence Treatment',
                'HIFU for Vaginal Tightening',
                'HIFU for Skin Tightening (Face, Neck, Underarms, Belly)',
                'Laser Hair Reduction',
                'Cosmetic Gynecology',
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

