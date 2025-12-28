import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Before & After Treatments - Dr. Aparana Ghosh | Treatment Results Gallery',
  description: 'View before and after photos of treatments performed by Dr. Aparana Ghosh. See real results from laser hair reduction, cosmetic gynecology, HIFU, and other procedures at our clinic in Chembur, Mumbai.',
  keywords: 'before after gynecology treatments, laser hair reduction results, cosmetic gynecology results Mumbai, treatment gallery Chembur',
  other: {
    'keywords': 'before after gynecology treatments, laser hair reduction results, cosmetic gynecology results Mumbai, treatment gallery Chembur'
  },
  openGraph: {
    title: 'Before & After Treatments - Dr. Aparana Ghosh',
    description: 'View real treatment results and before/after photos from our clinic.',
    type: 'website',
  },
}

export default function TreatmentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Before & After Treatments</h1>
          <p className="text-xl text-gray-600">Real results from our patients</p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Placeholder for before/after images */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="bg-gray-100 rounded-2xl overflow-hidden">
                <div className="aspect-video bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                  <span className="text-gray-500">Before & After Image {item}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-bold text-lg mb-2">Treatment Result {item}</h3>
                  <p className="text-gray-600 text-sm">Add actual before/after photos here</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-6">
              📸 Add your actual before/after treatment photos here. Ensure you have patient consent before publishing.
            </p>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all font-medium"
            >
              Book Your Consultation
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

