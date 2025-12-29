'use client'

import Image from 'next/image'
import { useState } from 'react'

interface BabyGifImageProps {
  src: string
  alt: string
  gradient: string
  placeholder: string
}

export default function BabyGifImage({ src, alt, gradient, placeholder }: BabyGifImageProps) {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return (
      <div className={`absolute inset-0 flex items-center justify-center bg-gradient-to-br ${gradient}`}>
        <span className="text-gray-600">{placeholder}</span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-cover object-top group-hover:scale-105 transition-transform duration-300"
      unoptimized
      onError={() => setImageError(true)}
    />
  )
}

