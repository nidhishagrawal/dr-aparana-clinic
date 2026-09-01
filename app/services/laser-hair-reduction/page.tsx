import type { Metadata } from 'next'
import { CheckCircle, Clock, Award } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Laser Hair Reduction in Chembur, Mumbai | Dr. Aparna Ghosh',
  description: 'Permanent laser hair reduction in Chembur, Mumbai. Safe, effective, long-lasting results by Dr. Aparna Ghosh. Book your consultation today.',
  keywords: 'laser hair reduction Chembur, laser hair removal Mumbai, permanent hair removal, laser treatment Chembur, hair reduction clinic Mumbai',
  other: {
    'keywords': 'laser hair reduction Chembur, laser hair removal Mumbai, permanent hair removal, laser treatment Chembur, hair reduction clinic Mumbai'
  },
  alternates: {
    canonical: '/services/laser-hair-reduction',
  },
  openGraph: {
    title: 'Laser Hair Reduction - Dr. Aparna Ghosh Clinic, Chembur',
    description: 'Safe and effective laser hair reduction treatment in Chembur, Mumbai.',
    type: 'website',
  },
}

export default function LaserHairReductionPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Laser Hair Reduction</h1>
          <p className="text-xl text-gray-600">Permanent hair removal with advanced laser technology</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">What is Laser Hair Reduction?</h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Laser hair reduction is a safe and effective method for permanent hair removal using advanced laser technology. The treatment targets hair follicles with concentrated light energy, preventing future hair growth while leaving surrounding skin unaffected.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Benefits of Laser Hair Reduction</h2>
            <ul className="space-y-4 mb-8">
              {[
                'Permanent hair reduction after multiple sessions',
                'Suitable for all skin types',
                'Minimal discomfort and downtime',
                'Precise targeting of hair follicles',
                'Long-lasting smooth skin',
                'Cost-effective in the long run'
              ].map((benefit, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 text-lg">{benefit}</span>
                </li>
              ))}
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mb-6 mt-12">Treatment Process</h2>
            <div className="space-y-6 mb-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-bold">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Consultation</h3>
                  <p className="text-gray-600">Initial assessment to determine suitability and create personalized treatment plan</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-bold">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Treatment Sessions</h3>
                  <p className="text-gray-600">Multiple sessions spaced 4-6 weeks apart for optimal results</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-600 font-bold">3</span>
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">Results</h3>
                  <p className="text-gray-600">Visible reduction after first few sessions, permanent results after completion</p>
                </div>
              </div>
            </div>

            <div className="bg-primary-50 rounded-xl p-8 mt-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Why Choose Us?</h2>
              <ul className="space-y-3">
                {[
                  'Advanced laser technology for best results',
                  'Experienced and certified professionals',
                  'Personalized treatment plans',
                  'Safe and FDA-approved equipment',
                  'Comfortable clinic environment'
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12 p-8 bg-gray-50 rounded-xl">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Book Your Consultation</h2>
              <p className="text-gray-600 mb-6">Ready to start your journey to smooth, hair-free skin? Schedule a consultation today.</p>
              <div className="flex flex-wrap gap-4">
                <a 
                  href="tel:+919326579679"
                  className="px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all font-medium"
                >
                  Call: +91 98765 43210
                </a>
                <a 
                  href="https://wa.me/919326579679"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-green-600 text-white rounded-full hover:bg-green-700 transition-all font-medium"
                >
                  WhatsApp Appointment
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

