import type { Metadata } from 'next'
import Link from 'next/link'
import { Play, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Treatment Videos - Dr. Aparna Ghosh | Patient Treatment Videos',
  description: 'Watch videos of treatments and procedures performed by Dr. Aparna Ghosh. See real patient treatment videos covering gynecology, cosmetic procedures, and women\'s health care.',
  keywords: 'gynecologist treatment videos, patient treatment videos Mumbai, gynecology procedure videos, Dr. Aparna Ghosh videos',
  other: {
    'keywords': 'gynecologist treatment videos, patient treatment videos Mumbai, gynecology procedure videos, Dr. Aparna Ghosh videos'
  },
  openGraph: {
    title: 'Treatment Videos - Dr. Aparna Ghosh',
    description: 'Watch real patient treatment videos from our clinic.',
    type: 'website',
  },
}

// Video data - Add your video URLs here
// Supports YouTube, Vimeo, or self-hosted videos
const treatmentVideos = [
  {
    id: 1,
    title: 'Treatment Video 1',
    description: 'Watch Dr. Aparna Ghosh perform treatment procedures with expert care and precision.',
    videoUrl: '/video/treatment_video/doctor_v5.mp4',
    videoType: 'self-hosted',
    category: 'Treatment',
    duration: '',
  },
  {
    id: 2,
    title: 'Treatment Video 2',
    description: 'Expert gynecological treatment performed by Dr. Aparna Ghosh showcasing advanced medical procedures.',
    videoUrl: '/video/treatment_video/doctor_v4.mp4',
    videoType: 'self-hosted',
    category: 'Treatment',
    duration: '',
  },
  {
    id: 3,
    title: 'Treatment Video 3',
    description: 'Watch Dr. Aparna Ghosh perform treatment procedures with expert care and precision.',
    thumbnail: '/images/videos/doctor_v1_frame20.jpg',
    videoUrl: '/video/treatment_video/doctor_v1.mp4',
    videoType: 'self-hosted',
    category: 'Treatment',
    duration: '',
  },
  {
    id: 4,
    title: 'Treatment Video 4',
    description: 'Expert gynecological treatment performed by Dr. Aparna Ghosh showcasing advanced medical procedures.',
    videoUrl: '/video/treatment_video/doctor_v2.mp4',
    videoType: 'self-hosted',
    category: 'Treatment',
    duration: '',
  },
  {
    id: 5,
    title: 'Treatment Video 5',
    description: 'Comprehensive treatment demonstration by Dr. Aparna Ghosh highlighting patient care and medical expertise.',
    videoUrl: '/video/treatment_video/doctor_v3.mp4',
    videoType: 'self-hosted',
    category: 'Treatment',
    duration: '',
  },
]

export default function VideosPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Treatment Videos</h1>
          <p className="text-xl text-gray-600">Watch real patient treatment videos and procedures</p>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-indigo-50 via-blue-50 to-cyan-50">
        <div className="container mx-auto px-4">
          {treatmentVideos.length === 0 || treatmentVideos.every(v => !v.videoUrl) ? (
            <div className="text-center py-20">
              <div className="bg-white rounded-2xl p-12 shadow-sm border border-gray-100 max-w-2xl mx-auto">
                <Play className="w-16 h-16 text-primary-400 mx-auto mb-6" />
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Videos Coming Soon</h2>
                <p className="text-gray-600 mb-8">
                  We&apos;re preparing treatment videos to showcase our procedures and patient care. 
                  Check back soon for educational and informative videos.
                </p>
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all font-medium"
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {treatmentVideos.map((video) => (
                <div key={video.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  {/* Video Thumbnail/Player */}
                  <div className="relative aspect-video bg-gray-100 overflow-hidden">
                    {video.videoUrl ? (
                      video.videoType === 'youtube' ? (
                        <iframe
                          src={video.videoUrl.replace('watch?v=', 'embed/').split('&')[0]}
                          title={video.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : video.videoType === 'vimeo' ? (
                        <iframe
                          src={`https://player.vimeo.com/video/${video.videoUrl.split('/').pop()}`}
                          title={video.title}
                          className="w-full h-full"
                          allow="autoplay; fullscreen; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <video
                          src={video.videoUrl}
                          controls
                          className="w-full h-full object-contain"
                          poster={video.thumbnail || undefined}
                          preload="metadata"
                        >
                          Your browser does not support the video tag.
                        </video>
                      )
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                        <div className="text-center p-6">
                          <Play className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                          <p className="text-gray-600 text-sm">Add video URL</p>
                        </div>
                      </div>
                    )}
                    {video.duration && video.videoUrl && (
                      <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-2 py-1 rounded">
                        {video.duration}
                      </div>
                    )}
                  </div>

                  {/* Video Info */}
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-semibold text-primary-600 bg-primary-100 px-2 py-1 rounded">
                        {video.category}
                      </span>
                    </div>
                    <h3 className="font-bold text-lg text-gray-900 mb-2">{video.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{video.description}</p>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Want to See More?</h2>
              <p className="text-gray-600 mb-6">
                Book a consultation to discuss your treatment options and see how we can help you.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link 
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white rounded-full hover:bg-primary-700 transition-all font-medium"
                >
                  Book Appointment
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link 
                  href="/services"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary-600 border-2 border-primary-600 rounded-full hover:bg-primary-50 transition-all font-medium"
                >
                  View Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

