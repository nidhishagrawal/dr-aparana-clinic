import type { Metadata } from 'next'
import { Star, Quote } from 'lucide-react'
import BreadcrumbSchema from '../components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Patient Testimonials - Dr. Aparna Ghosh Clinic',
  description: 'Read real patient reviews of laser hair reduction, cosmetic gynecology, and other treatments at Dr. Aparna Ghosh\'s clinic in Chembur, Mumbai.',
  keywords: 'Dr. Aparna Ghosh reviews, gynecologist testimonials Chembur, patient reviews Mumbai, gynecologist feedback, clinic reviews Chembur',
  other: {
    'keywords': 'Dr. Aparna Ghosh reviews, gynecologist testimonials Chembur, patient reviews Mumbai, gynecologist feedback, clinic reviews Chembur'
  },
  alternates: {
    canonical: '/testimonials',
  },
  openGraph: {
    title: 'Patient Testimonials - Dr. Aparna Ghosh Clinic',
    description: 'Read real testimonials from satisfied patients of Dr. Aparna Ghosh.',
    type: 'website',
  },
}

const testimonials = [
  {
    name: 'Chetana Maske',
    treatment: 'Pregnancy & Skincare',
    rating: 5,
    text: 'Aparna Ghosh is an exceptional gynecologist and surgeon. From my pregnancy journey to my skincare journey, she has been the most result-oriented and supportive doctor I could ask for. During my delivery, even with three loops around my baby\'s neck, everything went smoothly without any complications, thanks to her expertise. She was patient, caring, and always available to address my queries and concerns throughout the process. I have also struggled with acne since my teenage years, which left me with severe breakouts and pits. Under her guidance and treatment, my skin has completely transformed—today it is clear, bright, and naturally glowing. I no longer feel the need to wear makeup as my skin looks healthy on its own. I am truly grateful to Dr. Aparna Ghosh for her constant support and for helping me through both my pregnancy and my skin concerns.',
  },
  {
    name: 'Saba Khan',
    treatment: 'Copper T Removal',
    rating: 5,
    text: 'I recently visited Dr. Aparna Ghosh for my mother\'s treatment, and I\'m truly grateful for her expertise and care ❤️💫 We were earlier told that the Copper T had gone too deep and would require surgical removal in Somaiya hospital and they have done so many test as well. Before going ahead, we decided to consult Dr. Aparna Ghosh at Sai Hospital. To our surprise and relief, she removed it safely and completely in just 2 minutes, without any surgery. My mother felt so comfortable and confident throughout the procedure. Dr. Aparna Ghosh is not only highly skilled but also extremely kind, patient, and understanding. She listens carefully and makes her patients feel at ease, which is so important. I feel truly thankful for her help, and I would highly recommend her to anyone facing any gynecological issues. She is an expert and truly a blessing for her patients! ❤️',
  },
  {
    name: 'Yasmeen',
    treatment: 'General Gynecology Care',
    rating: 5,
    text: 'I had a truly positive experience with Dr. Aparna Ghosh Shinde. She is not only highly knowledgeable and experienced in her field but also incredibly kind, patient, and attentive. From the very first consultation, she made me feel comfortable and heard, taking the time to explain everything in detail and answer all my questions with clarity and compassion. Her calm and reassuring nature, combined with her professionalism, gave me complete confidence throughout my treatment. Whether it was routine care or addressing specific concerns, Dr. Aparna handled everything with great care and precision. I would highly recommend her to anyone looking for a reliable and empathetic gynaecologist. Thank you, Dr. Aparna, for your excellent care and dedication! 🙏',
  },
  {
    name: 'Nasreen Syad',
    treatment: 'Weight Loss Treatment',
    rating: 5,
    text: 'Hii i ve been taking treatment for weight loss from Dr aparna.... since last 4 /5 months first time wen i went to consult abt the problem i was facing due to weight i though its impossible i was planning for surgery but Dr aparna explained me things so well Dat i made up my mind n did as she said n today everyone one is worried looking at me it\'s all bcoz of Dr aparna n my hardwork i was 95+ n before now i am 78 🧿 thx u so much Dr aparna for helping me n special thx 🙏for attending calls anytime even if ur busy u call back GOD bless u madam 🙏🙏🙏',
  },
  {
    name: 'Rekha Nair',
    treatment: 'Scar Reduction',
    rating: 5,
    text: 'Amazing results with scar reduction treatment. The clinic is clean, staff is friendly, and Dr. Aparna is an expert in her field.',
  },
  {
    name: 'Mrs Shetty',
    treatment: 'Hysterectomy - Cancerous Fibroid',
    rating: 5,
    text: 'My heartfelt thanks to Dr.Aparns Ghosh for the successful uterus removal surgery for a cancerous fibroid. Her skill, patience, and clear explanation made a very difficult time much easier. I truly appreciate the excellent medical care.',
  },
]

const reviewSchema = {
  '@context': 'https://schema.org',
  '@type': 'MedicalBusiness',
  '@id': 'https://www.bestgynecologistchembur.in',
  name: 'Dr. Aparna Ghosh Clinic',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: (
      testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length
    ).toFixed(1),
    reviewCount: testimonials.length,
  },
  review: testimonials.map((t) => ({
    '@type': 'Review',
    author: {
      '@type': 'Person',
      name: t.name,
    },
    reviewRating: {
      '@type': 'Rating',
      ratingValue: t.rating,
      bestRating: 5,
    },
    reviewBody: t.text,
  })),
}

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Testimonials', path: '/testimonials' }]} />
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Patient Testimonials</h1>
          <p className="text-xl text-gray-600">What our patients say about us</p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
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
        </div>
      </section>
    </div>
  )
}

