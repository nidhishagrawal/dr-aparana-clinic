import { Eye, Target, Heart, Users } from 'lucide-react'

export default function VisionMission() {
  return (
    <section className="py-20 bg-gradient-to-br from-lime-50 via-emerald-50 to-teal-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Who We Are</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <Eye className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Vision</h3>
            <p className="text-gray-600">
              To provide quality healthcare and diagnostic services available, accessible & affordable to all women.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <Target className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Mission</h3>
            <p className="text-gray-600">
              To provide unsurpassed patient care & diagnosis with most advanced technology and highest standards of quality.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <Heart className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Values</h3>
            <p className="text-gray-600">
              Caring, Excellence, Transparency & Accountability, Ethics, Compassion & Integrity.
            </p>
          </div>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-100 rounded-full mb-4">
              <Users className="w-8 h-8 text-primary-600" />
            </div>
            <h3 className="text-xl font-bold mb-3 text-gray-900">Strength</h3>
            <p className="text-gray-600">
              Our integrated Team, Infrastructure, technology & Presence united by the same passion to care & serve.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

