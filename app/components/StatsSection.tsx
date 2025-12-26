import { Users, Award, Calendar, Baby } from 'lucide-react'

export default function StatsSection() {
  return (
    <section className="py-20 bg-primary-600 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-2">1000+</h3>
            <p className="text-xl text-white/90">Happy Patients</p>
          </div>
          
          <div>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4">
              <Baby className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-2">650+</h3>
            <p className="text-xl text-white/90">Successful Deliveries</p>
          </div>
          
          <div>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-2">500+</h3>
            <p className="text-xl text-white/90">Successful Treatments</p>
          </div>
          
          <div>
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-4">
              <Calendar className="w-10 h-10 text-white" />
            </div>
            <h3 className="text-4xl md:text-5xl font-bold mb-2">10+</h3>
            <p className="text-xl text-white/90">Years of Experience</p>
          </div>
        </div>
      </div>
    </section>
  )
}

