import Link from 'next/link'
import { BookOpen, ArrowRight, Calendar } from 'lucide-react'

export default function PatientEducation() {
  const educationPosts = [
    {
      id: 1,
      title: 'Understanding Menopause: Symptoms and Management',
      excerpt: 'Learn about menopause symptoms and effective management strategies for a smoother transition.',
      date: '2024-01-15',
    },
    {
      id: 2,
      title: 'Benefits of Laser Hair Reduction',
      excerpt: 'Discover the advantages of laser hair reduction and what to expect during treatment.',
      date: '2024-01-10',
    },
    {
      id: 3,
      title: 'HIFU Treatment for Urinary Incontinence',
      excerpt: 'Non-invasive HIFU treatment offers effective solution for urinary incontinence without surgery.',
      date: '2024-01-05',
    },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
            <BookOpen className="w-8 h-8 text-primary-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Patient Education</h2>
          <p className="text-lg text-gray-600">Expert health tips and educational resources</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {educationPosts.map((post) => (
            <Link
              key={post.id}
              href={`/blog/${post.id}`}
              className="group bg-white p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100"
            >
              <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-primary-600 transition-colors">
                {post.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-gray-500">
                  <Calendar className="w-4 h-4" />
                  <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                </div>
                <span className="text-primary-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all font-medium"
          >
            View All Health Tips <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}

