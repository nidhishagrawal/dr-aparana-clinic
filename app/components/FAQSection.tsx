'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'What are Dr. Aparna Ghosh\'s clinic hours?',
    answer: 'The clinic is open Monday to Saturday, from 9:00 AM to 6:00 PM. Call or WhatsApp ahead to confirm availability and book a slot.',
  },
  {
    question: 'What conditions does Dr. Aparna Ghosh treat?',
    answer: 'Dr. Aparna Ghosh treats the full range of gynecological and obstetric conditions, including high-risk pregnancy and deliveries, hysterectomy and fibroid removal, PCOS/PCOD and hormonal disorders, urinary incontinence (HIFU), and cosmetic gynecology procedures like vaginal tightening, HRT, and laser hair reduction.',
  },
  {
    question: 'Do you offer non-surgical cosmetic gynecology treatments?',
    answer: 'Yes. The clinic offers non-surgical HIFU treatment for urinary incontinence and vaginal tightening, laser skin tightening, scar and stretch-mark reduction, and other cosmetic gynecology procedures that don\'t require surgery.',
  },
  {
    question: 'Is Dr. Aparna Ghosh experienced with high-risk pregnancies?',
    answer: 'Yes, with 23 years of experience in obstetrics, Dr. Aparna Ghosh has managed numerous high-risk pregnancies, including complex deliveries, and provides comprehensive antenatal, delivery, and postpartum care.',
  },
  {
    question: 'How do I book an appointment?',
    answer: 'You can book an appointment by calling or messaging on WhatsApp at +91 93265 79679, or by filling out the contact form on the Contact page.',
  },
  {
    question: 'Where is the clinic located?',
    answer: '501, Pure Gold CHS, NG Acharya Marg, Station Road, Chembur East, Mumbai, Maharashtra 400071 — see the Contact page for map directions.',
  },
]

export const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-gray-600">Common questions about our clinic and treatments</p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index
            return (
              <div
                key={index}
                className="bg-gray-50 rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="font-semibold text-gray-900">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-primary-600 flex-shrink-0 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed">{faq.answer}</div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
