import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Before & After Treatments - Dr. Aparna Ghosh | Treatment Results Gallery',
  description: 'View before and after photos of treatments performed by Dr. Aparna Ghosh. See real results from laser hair reduction, cosmetic gynecology, HIFU, and other procedures at our clinic in Chembur, Mumbai.',
  keywords: 'before after gynecology treatments, laser hair reduction results, cosmetic gynecology results Mumbai, treatment gallery Chembur',
  other: {
    'keywords': 'before after gynecology treatments, laser hair reduction results, cosmetic gynecology results Mumbai, treatment gallery Chembur'
  },
  openGraph: {
    title: 'Before & After Treatments - Dr. Aparna Ghosh',
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
            {/* Baby Delivery */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative aspect-video bg-white">
                <Image
                  src="/images/treatments/treatment1.png"
                  alt="Baby Delivery - Before & After"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized={process.env.NODE_ENV === 'development'}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Baby Delivery</h3>
                <p className="text-gray-600 text-sm">Real treatment results</p>
              </div>
            </div>

            {/* Fibroid 3.8 kg Removal */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative w-full bg-white flex items-center justify-center py-4 px-4">
                <div className="relative w-full max-w-full flex justify-center">
                  <Image
                    src="/images/treatments/treatment2.png"
                    alt="Fibroid 3.8 kg Removal - Before & After"
                    width={800}
                    height={600}
                    className="object-contain w-auto h-auto max-w-full"
                    style={{ maxWidth: '100%', height: 'auto' }}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized={process.env.NODE_ENV === 'development'}
                  />
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Fibroid 3.8 kg Removal</h3>
                <p className="text-gray-600 text-sm">Real treatment results</p>
              </div>
            </div>

            {/* Treatment Result 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative aspect-video bg-white">
                <Image
                  src="/images/treatments/treatment3.png"
                  alt="Skin Tightening with HIFU - Before & After Treatment Results"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized={process.env.NODE_ENV === 'development'}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Skin Tightening with HIFU</h3>
                <p className="text-gray-600 text-sm">Real treatment results</p>
              </div>
            </div>

            {/* Treatment Result 4 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative aspect-video bg-white">
                <Image
                  src="/images/treatments/treatment4.png"
                  alt="Laser Skin Mole Removal - Before & After"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized={process.env.NODE_ENV === 'development'}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Laser Skin Mole Removal</h3>
                <p className="text-gray-600 text-sm">Real treatment results</p>
              </div>
            </div>
            
            {/* Treatment Result 5 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative aspect-video bg-white">
                <Image
                  src="/images/treatments/beforeandafter_treatment5.png"
                  alt="GLUTATHIONE + CARBON PEEL FACIAL - Before & After Treatment Results"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized={process.env.NODE_ENV === 'development'}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">GLUTATHIONE + CARBON PEEL FACIAL</h3>
                <p className="text-gray-600 text-sm">Glutathione brightens from within while the Carbon Peel Facial cleanses, tightens, and restores instant glow.</p>
              </div>
            </div>
            
            {/* Treatment Result 6 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative aspect-video bg-white">
                <Image
                  src="/images/treatments/beforeandafter_treatment6.png"
                  alt="Laser Scar Reduction - Before & After Treatment Results"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized={process.env.NODE_ENV === 'development'}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Laser Scar Reduction</h3>
                <p className="text-gray-600 text-sm">Laser scar reduction helps fade acne scars and smoothen skin safely and affectively</p>
              </div>
            </div>
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

