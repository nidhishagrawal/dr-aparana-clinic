'use client'

import Image from 'next/image'
import { useState } from 'react'

interface DoctorImageProps {
  src: string
  alt: string
  priority?: boolean
  sizes?: string
  className?: string
}

export default function DoctorImage({ src, alt, priority = false, sizes, className = 'object-cover' }: DoctorImageProps) {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-200 to-primary-300">
        <span className="text-gray-600 text-lg text-center px-4">
          Add doctor photo:<br />
          /public/images/dr-aparana-ghosh.jpg
        </span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={className}
      priority={priority}
      sizes={sizes}
      onError={() => setImageError(true)}
      unoptimized={process.env.NODE_ENV === 'development'}
      style={{ border: 'none', outline: 'none' }}
    />
  )
}

