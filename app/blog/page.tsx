import type { Metadata } from 'next'
import Link from 'next/link'
import { Calendar, ArrowRight } from 'lucide-react'
import BreadcrumbSchema from '../components/BreadcrumbSchema'

export const metadata: Metadata = {
  title: 'Health Tips & Blog - Dr. Aparna Ghosh | Women\'s Health Articles',
  description: 'Read health tips and articles about women\'s health, gynecology, menopause, laser treatments, and wellness from Dr. Aparna Ghosh\'s clinic in Chembur, Mumbai.',
  keywords: 'women health tips, gynecology blog, health articles Mumbai, women wellness tips, gynecologist health advice',
  other: {
    'keywords': 'women health tips, gynecology blog, health articles Mumbai, women wellness tips, gynecologist health advice'
  },
  openGraph: {
    title: 'Health Tips & Blog - Dr. Aparna Ghosh',
    description: 'Expert health tips and articles about women\'s health and wellness.',
    type: 'website',
  },
}

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Menopause: Symptoms and Management',
    excerpt: 'Learn about menopause symptoms and effective management strategies for a smoother transition.',
    date: '2024-01-15',
    category: 'Women\'s Health',
    image: '/images/blog/blog1.png',
  },
  {
    id: 2,
    title: 'Benefits of Laser Hair Reduction',
    excerpt: 'Discover the advantages of laser hair reduction and what to expect during treatment.',
    date: '2024-01-10',
    category: 'Cosmetic Treatments',
  },
  {
    id: 3,
    title: 'HIFU Treatment for Urinary Incontinence',
    excerpt: 'Non-invasive HIFU treatment offers effective solution for urinary incontinence without surgery.',
    date: '2024-01-05',
    category: 'Treatments',
  },
  {
    id: 4,
    title: 'Importance of Regular Gynecological Check-ups',
    excerpt: 'Regular check-ups are essential for maintaining women\'s health and early detection of issues.',
    date: '2023-12-28',
    category: 'Women\'s Health',
  },
  {
    id: 5,
    title: 'Common Cosmetic Gynecology Treatments',
    excerpt: 'Learn about cosmetic gynecology procedures and how they can improve quality of life.',
    date: '2023-12-20',
    category: 'Cosmetic Treatments',
  },
  {
    id: 6,
    title: 'Cosmetic Gynecology: Enhancing Feminine Wellness',
    excerpt: 'Learn about cosmetic gynecology procedures and how they can improve quality of life.',
    date: '2023-12-15',
    category: 'Cosmetic Treatments',
  },
]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
      <BreadcrumbSchema items={[{ name: 'Home', path: '/' }, { name: 'Blog', path: '/blog' }]} />
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Health Tips & Blog</h1>
          <p className="text-xl text-gray-600">Expert advice on women's health and wellness</p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100"
              >
                <div>
                  <div className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                    {post.category}
                  </div>
                  <h2 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                    </div>
                    <span className="text-primary-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                      Read More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

