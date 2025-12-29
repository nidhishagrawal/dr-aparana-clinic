import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Calendar, ArrowLeft } from 'lucide-react'
import { notFound } from 'next/navigation'

const blogPosts = [
  {
    id: 1,
    title: 'Understanding Menopause: Symptoms & Management',
    excerpt: 'Learn about menopause symptoms and effective management strategies for a smoother transition.',
    date: '2024-01-15',
    category: 'Women\'s Health',
    content: `
      <p>Menopause is a natural biological milestone in a woman's life that signifies the end of menstrual cycles and reproductive ability. Although it is a normal process, the hormonal changes associated with menopause can cause a wide range of physical, emotional, and metabolic symptoms. Early understanding and medical guidance can help women manage menopause comfortably and maintain long-term health.</p>

      <h2>What Is Menopause?</h2>
      <p>Menopause is clinically diagnosed when a woman has not had a menstrual period for 12 consecutive months, without any other medical cause. It typically occurs between the ages of 45 and 55, though some women may experience it earlier or later.</p>
      <p>Menopause occurs due to a gradual decline in ovarian function, leading to reduced production of estrogen and progesterone—hormones essential for menstrual regulation and overall health.</p>

      <h2 id="stages">Stages of Menopause</h2>
      
      <h3>Perimenopause</h3>
      <p>The transitional phase before menopause, characterized by fluctuating hormone levels. Women may experience irregular periods, hot flashes, mood changes, and sleep disturbances.</p>

      <h3>Menopause</h3>
      <p>Defined by the permanent cessation of menstruation. Fertility ends, and hormone levels stabilize at a lower baseline.</p>

      <h3>Postmenopause</h3>
      <p>The phase following menopause, during which symptoms may reduce but long-term health risks related to estrogen deficiency become more prominent.</p>

      <h2 id="symptoms">Common Menopause Symptoms</h2>
      <p>Menopause symptoms vary in severity and duration among women.</p>

      <h3>Physical Symptoms</h3>
      <ul>
        <li>Hot flashes and night sweats</li>
        <li>Irregular or absent menstrual periods</li>
        <li>Vaginal dryness and discomfort</li>
        <li>Weight gain and slowed metabolism</li>
        <li>Joint and muscle pain</li>
        <li>Reduced libido</li>
      </ul>

      <h3>Emotional and Cognitive Symptoms</h3>
      <ul>
        <li>Mood swings and irritability</li>
        <li>Anxiety or depressive symptoms</li>
        <li>Sleep disturbances</li>
        <li>Difficulty concentrating or memory issues</li>
      </ul>

      <h2 id="health-risks">Health Risks After Menopause</h2>
      <p>Low estrogen levels after menopause may increase the risk of:</p>
      <ul>
        <li>Osteoporosis and bone fractures</li>
        <li>Urinary and vaginal health issues</li>
        <li>Metabolic disorders such as diabetes</li>
      </ul>
      
      <h3>Heart disease</h3>
      <p>Regular health screening and preventive care are essential during this phase.</p>

      <h2 id="management">Effective Menopause Management Option</h2>
      <p>Menopause management should be individualized based on symptoms, age, medical history, and personal preferences.</p>

      <h3>Lifestyle Management</h3>
      <ul>
        <li>Balanced diet rich in calcium, vitamin D, protein, and fiber</li>
        <li>Regular physical activity, including weight-bearing exercises</li>
        <li>Adequate sleep and stress management</li>
        <li>Avoidance of smoking and excessive alcohol</li>
      </ul>

      <h3>Medical Treatment Options</h3>
      <p>Depending on clinical evaluation, treatment may include:</p>
      <ul>
        <li>Hormone therapy (when medically indicated)</li>
        <li>Non-hormonal medications for hot flashes and mood symptoms</li>
        <li>Vaginal treatments for dryness and discomfort</li>
        <li>Bone density evaluation and osteoporosis prevention</li>
      </ul>
      <p>All treatments should be prescribed and monitored by a qualified gynecologist.</p>

      <h2>When to See a Gynecologist for Menopause</h2>
      <h3>Consult a doctor if:</h3>
      <ul>
        <li>Menopause symptoms affect daily life or work</li>
        <li>There is heavy or unexpected vaginal bleeding</li>
        <li>Emotional symptoms persist or worsen</li>
        <li>You need personalized menopause treatment planning</li>
      </ul>
      <p>Early consultation ensures better symptom control and long-term health protection.</p>

      <h2>Life After Menopause</h2>
      <p>Menopause is not the end of health or vitality. With proper medical care, lifestyle adjustments, and regular follow-ups, women can enjoy an active, healthy, and fulfilling life after menopause.</p>

      <h2>Expert Menopause Care at Our Clinic</h2>
      <p>At our clinic, we offer comprehensive menopause evaluation and personalized treatment plans, focusing on symptom relief, bone health, heart health, and overall well-being. Our goal is to support women through every stage of menopause with evidence-based care.</p>

      <h2>Conclusion</h2>
      <p>Understanding menopause empowers women to take control of their health. With expert gynecological care and timely intervention, menopause can be managed effectively and comfortably.</p>
    `,
  },
  {
    id: 2,
    title: 'Benefits of Laser Hair Reduction',
    excerpt: 'Discover the advantages of laser hair reduction and what to expect during treatment.',
    date: '2024-01-10',
    category: 'Cosmetic Treatments',
    content: `
      <p>Laser hair reduction is a popular cosmetic procedure that uses concentrated light to remove unwanted hair. It's an effective long-term solution for hair removal.</p>
      
      <h2>Key Benefits</h2>
      <ul>
        <li>Long-lasting results</li>
        <li>Precision targeting</li>
        <li>Speed and efficiency</li>
        <li>Reduced ingrown hairs</li>
      </ul>
      
      <p>Contact our clinic to learn more about laser hair reduction treatments.</p>
    `,
  },
  {
    id: 3,
    title: 'HIFU Treatment for Urinary Incontinence',
    excerpt: 'Non-invasive HIFU treatment offers effective solution for urinary incontinence without surgery.',
    date: '2024-01-05',
    category: 'Treatments',
    content: `
      <p>HIFU (High-Intensity Focused Ultrasound) is a non-invasive treatment option for urinary incontinence.</p>
      
      <h2>How It Works</h2>
      <p>HIFU uses focused ultrasound energy to stimulate tissue regeneration and improve muscle tone.</p>
      
      <p>Schedule a consultation to discuss if HIFU treatment is right for you.</p>
    `,
  },
  {
    id: 4,
    title: 'Importance of Regular Gynecological Check-ups',
    excerpt: 'Regular check-ups are essential for maintaining women\'s health and early detection of issues.',
    date: '2023-12-28',
    category: 'Women\'s Health',
    content: `
      <p>Regular gynecological check-ups are crucial for maintaining women's health throughout all stages of life.</p>
      
      <h2>Why Regular Check-ups Matter</h2>
      <p>Early detection and prevention are key to maintaining optimal health.</p>
      
      <p>Book your appointment with Dr. Aparna Ghosh today.</p>
    `,
  },
  {
    id: 5,
    title: 'Hormone Replacement Therapy: What You Need to Know',
    excerpt: 'Comprehensive guide to HRT treatment, benefits, and considerations for women.',
    date: '2023-12-20',
    category: 'Treatments',
    content: `
      <p>Hormone Replacement Therapy (HRT) can help manage menopause symptoms effectively.</p>
      
      <h2>Understanding HRT</h2>
      <p>HRT involves taking medications containing hormones that your body no longer produces after menopause.</p>
      
      <p>Consult with Dr. Aparna Ghosh to discuss HRT options.</p>
    `,
  },
  {
    id: 6,
    title: 'Cosmetic Gynecology: Enhancing Feminine Wellness',
    excerpt: 'Learn about cosmetic gynecology procedures and how they can improve quality of life.',
    date: '2023-12-15',
    category: 'Cosmetic Treatments',
    content: `
      <p>Cosmetic gynecology offers various procedures to enhance feminine wellness and confidence.</p>
      
      <h2>Available Procedures</h2>
      <p>Our clinic offers a range of cosmetic gynecology treatments.</p>
      
      <p>Contact us to learn more about our cosmetic gynecology services.</p>
    `,
  },
]

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const post = blogPosts.find(p => p.id === parseInt(id))
  
  if (!post) {
    return {
      title: 'Blog Post Not Found',
    }
  }

  return {
    title: `${post.title} - Dr. Aparna Ghosh Blog`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const post = blogPosts.find(p => p.id === parseInt(id))

  if (!post) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-pink-50">
      {/* Header */}
      <header className="border-b border-pink-200 bg-gradient-to-b from-pink-50 to-pink-100">
        <div className="w-full px-4 py-7">
          <div className="flex items-center justify-between gap-4 flex-wrap">
            <Link href="/" className="flex items-center gap-2.5 font-bold tracking-wide">
              <div className="w-8 h-8 rounded-[10px] bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600 font-extrabold">
                DA
              </div>
              <div>
                <div>Dr. Aparna Ghosh</div>
                <div className="text-xs text-gray-600">Women's Health & Gynecology</div>
              </div>
            </Link>
            <nav className="flex items-center gap-3.5">
              <Link href="/services" className="text-gray-600 font-semibold text-sm hover:text-gray-900">Services</Link>
              <Link href="/about" className="text-gray-600 font-semibold text-sm hover:text-gray-900">About</Link>
              <Link href="/contact" className="text-gray-600 font-semibold text-sm hover:text-gray-900">Contact</Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="border-b border-pink-200 bg-gradient-to-b from-pink-50 to-pink-100">
        <div className="w-full px-4 py-6">
          <div className="mb-6 text-sm text-gray-600">
            <Link 
              href="/blog"
              className="hover:text-blue-600 transition-colors"
            >
              Blog
            </Link>
            <span className="text-gray-400 mx-2">/</span>
            <span>{post.title}</span>
          </div>
          <h1 className="text-[2.1rem] leading-[1.2] tracking-[-0.3px] mb-2.5 font-bold text-gray-900">
            {post.title}
          </h1>
          <p className="text-gray-600 text-[1.05rem] max-w-[70ch] mb-0 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-2.5 flex-wrap mt-3.5 text-gray-600 text-sm">
            <div className="border border-pink-200 bg-pink-100 px-2.5 py-1.5 rounded-full text-xs font-medium text-gray-700">
              {post.category}
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="py-5.5 pb-9">
        <div className="w-full px-4">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-4.5 items-start max-w-[1400px] mx-auto">
            {/* Article */}
            <article className="bg-pink-50 border border-pink-200 rounded-[14px] shadow-[0_10px_25px_rgba(2,6,23,.06)] p-5.5">
              {('image' in post && typeof post.image === 'string' && post.image) && (
                <div className="w-full bg-pink-50 rounded-2xl overflow-hidden mb-6">
                  <div className="relative w-full h-auto">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={1200}
                      height={1600}
                      className="w-full h-auto object-contain"
                      sizes="(max-width: 920px) 100vw, 680px"
                      priority
                    />
                  </div>
                </div>
              )}
              
              {post.content && (
                <div 
                  className="prose prose-lg max-w-none
                    prose-p:text-gray-700 prose-p:mb-4 prose-p:leading-[1.65] prose-p:text-base
                    prose-ul:text-gray-700 prose-ul:my-3 prose-ul:ml-4.5 prose-ul:pl-0 prose-ul:list-disc
                    prose-li:my-2 prose-li:leading-[1.65] prose-li:pl-0
                    prose-strong:text-gray-900 prose-strong:font-bold
                    [&_h2]:text-[1.6rem] [&_h2]:mt-8 [&_h2]:mb-4 [&_h2]:leading-tight [&_h2]:font-extrabold [&_h2]:text-gray-900 [&_h2]:bg-pink-50 [&_h2]:px-4 [&_h2]:py-3 [&_h2]:rounded-lg [&_h2]:border-l-4 [&_h2]:border-blue-600 [&_h2]:tracking-tight
                    [&_h2:first-child]:mt-0
                    [&_h3]:text-[1.25rem] [&_h3]:mt-6 [&_h3]:mb-3 [&_h3]:font-bold [&_h3]:text-gray-800"
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              )}

              {/* CTA Section */}
              <div className="mt-4.5 bg-blue-50 border border-blue-200 rounded-[14px] p-4 flex gap-3 items-start">
                <div className="flex-1">
                  <strong className="text-gray-900 block mb-2.5 text-base">Need Expert Menopause Care?</strong>
                  <p className="text-gray-600 text-sm mb-0 leading-relaxed">Consult with Dr. Aparna Ghosh for personalized menopause management and treatment options.</p>
                  <Link 
                    href="/contact"
                    className="inline-block mt-2.5 bg-blue-600 text-white px-3.5 py-2.5 rounded-xl font-bold hover:brightness-95 transition-all text-sm"
                  >
                    Book Consultation
                  </Link>
                </div>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:sticky lg:top-3.5 space-y-3.5">
              <div className="bg-pink-50 border border-pink-200 rounded-[14px] shadow-[0_10px_25px_rgba(2,6,23,.06)] p-4">
                <h3 className="text-[1.05rem] font-semibold mb-2.5 text-gray-900 m-0">Table of Contents</h3>
                <nav className="space-y-1.5">
                  <a href="#what-is-menopause" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">What Is Menopause?</a>
                  <a href="#stages" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Stages of Menopause</a>
                  <a href="#symptoms" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Common Symptoms</a>
                  <a href="#health-risks" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Health Risks</a>
                  <a href="#management" className="block py-1.5 text-gray-600 font-semibold text-sm hover:text-gray-900 transition-colors">Management Options</a>
                </nav>
              </div>
              <div className="bg-pink-50 border border-pink-200 rounded-[14px] shadow-[0_10px_25px_rgba(2,6,23,.06)] p-4">
                <h3 className="text-[1.05rem] font-semibold mb-2.5 text-gray-900 m-0">Quick Contact</h3>
                <p className="text-sm text-gray-600 mb-0 leading-relaxed">Schedule your consultation today for expert menopause care.</p>
                <Link 
                  href="/contact"
                  className="inline-block mt-2.5 text-blue-600 font-semibold text-sm hover:underline transition-all"
                >
                  Contact Us →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-pink-200 bg-pink-50">
        <div className="w-full px-4 py-6">
          <div className="flex gap-4 items-start justify-between flex-wrap">
            <div>
              <p className="text-sm text-gray-600 mb-1.5">&copy; {new Date().getFullYear()} Dr. Aparna Ghosh. All rights reserved.</p>
              <p className="text-sm text-gray-600 mb-0">Expert gynecologist in Chembur, Mumbai</p>
            </div>
            <div className="text-sm text-gray-600">
              <p className="mb-1.5">Phone: <a href="tel:+919876543210" className="text-blue-600 hover:underline">+91-9876543210</a></p>
              <p className="mb-0">Email: <a href="mailto:aparnagosh67@yahoo.co.in" className="text-blue-600 hover:underline">aparnagosh67@yahoo.co.in</a></p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

