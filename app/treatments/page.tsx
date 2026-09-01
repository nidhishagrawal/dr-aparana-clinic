import type { Metadata } from 'next'
import Image from 'next/image'
import BreadcrumbSchema from '../components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Before & After Treatments - Dr. Aparna Ghosh',
  description: 'See real before and after results from laser hair reduction, cosmetic gynecology, and HIFU procedures at Dr. Aparna Ghosh\'s clinic in Chembur, Mumbai.',
  keywords: 'before after gynaecology treatments, before after gynecology treatments, laser hair reduction results, cosmetic gynecology results Mumbai, treatment gallery Chembur',
  other: {
    'keywords': 'before after gynaecology treatments, before after gynecology treatments, laser hair reduction results, cosmetic gynecology results Mumbai, treatment gallery Chembur'
  },
  alternates: {
    canonical: '/treatments',
  },
  openGraph: {
    title: 'Before & After Treatments - Dr. Aparna Ghosh',
    description: 'View real treatment results and before/after photos from our clinic.',
    type: 'website',
  },
}

export default function TreatmentsPage() {
  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Treatments', path: '/treatments' }]} />
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Before & After Treatments</h1>
          <p className="text-xl text-gray-600">Real results from our patients</p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Baby Delivery */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative aspect-video bg-white">
                <Image
                  src="/images/treatments/treatment1.png"
                  alt="Baby delivery treatment result by Dr. Aparna Ghosh"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized={process.env.NODE_ENV === 'development'}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Baby Delivery</h3>
                <p className="text-gray-600 text-sm">A safe, successful delivery under Dr. Aparna Ghosh's care</p>
              </div>
            </div>

            {/* Fibroid 3.8 kg Removal */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative w-full bg-white flex items-center justify-center py-4 px-4">
                <div className="relative w-full max-w-full flex justify-center">
                  <Image
                    src="/images/treatments/treatment2.png"
                    alt="3.8 kg fibroid removal treatment result by Dr. Aparna Ghosh"
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
                <p className="text-gray-600 text-sm">A 3.8 kg fibroid successfully removed via myomectomy</p>
              </div>
            </div>

            {/* Treatment Result 3 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative aspect-video bg-white">
                <Image
                  src="/images/treatments/treatment3.png"
                  alt="Skin tightening with HIFU treatment result by Dr. Aparna Ghosh"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized={process.env.NODE_ENV === 'development'}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Skin Tightening with HIFU</h3>
                <p className="text-gray-600 text-sm">Non-surgical HIFU treatment for firmer, tighter skin</p>
              </div>
            </div>

            {/* Treatment Result 4 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative aspect-video bg-white">
                <Image
                  src="/images/treatments/treatment4.png"
                  alt="Laser skin mole removal treatment result by Dr. Aparna Ghosh"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  unoptimized={process.env.NODE_ENV === 'development'}
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg mb-2">Laser Skin Mole Removal</h3>
                <p className="text-gray-600 text-sm">Precise, scar-free mole removal using laser treatment</p>
              </div>
            </div>
            
            {/* Treatment Result 5 */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <div className="relative aspect-video bg-white">
                <Image
                  src="/images/treatments/beforeandafter_treatment5.png"
                  alt="Glutathione and carbon peel facial before and after result"
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
                  alt="Laser scar reduction before and after result"
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
              Want to see if these treatments are right for you? Book a consultation to discuss your options.
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

