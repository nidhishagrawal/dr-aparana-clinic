import { Star, Quote } from 'lucide-react'

export const metadata = {
  title: 'Patient Testimonials - Dr. Aparana Ghosh | Reviews from Satisfied Patients',
  description: 'Read testimonials from patients who have received treatment from Dr. Aparana Ghosh. Real experiences and reviews from our clinic in Chembur, Mumbai.',
}

const testimonials = [
  {
    name: 'Priya Sharma',
    treatment: 'Laser Hair Reduction',
    rating: 5,
    text: 'Excellent experience with laser hair reduction. Dr. Aparana is very professional and the results are amazing. Highly recommended!',
  },
  {
    name: 'Anita Desai',
    treatment: 'Cosmetic Gynecology',
    rating: 5,
    text: 'Dr. Aparana provided exceptional care throughout my treatment. She is knowledgeable, compassionate, and the clinic is well-equipped.',
  },
  {
    name: 'Sunita Patel',
    treatment: 'HIFU Treatment',
    rating: 5,
    text: 'The HIFU treatment for incontinence has changed my life. Dr. Aparana explained everything clearly and the procedure was comfortable.',
  },
  {
    name: 'Meera Joshi',
    treatment: 'HRT Treatment',
    rating: 5,
    text: 'Dr. Aparana helped me manage my menopause symptoms effectively. Her approach is holistic and she takes time to understand patient concerns.',
  },
  {
    name: 'Rekha Nair',
    treatment: 'Scar Reduction',
    rating: 5,
    text: 'Amazing results with scar reduction treatment. The clinic is clean, staff is friendly, and Dr. Aparana is an expert in her field.',
  },
  {
    name: 'Kavita Rao',
    treatment: 'General Consultation',
    rating: 5,
    text: 'Best gynecologist in Chembur! Dr. Aparana is patient, listens carefully, and provides excellent medical advice. Very satisfied with the care.',
  },
]

export default function TestimonialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50">
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

