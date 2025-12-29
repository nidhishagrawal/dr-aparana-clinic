'use client'

import Image from 'next/image'
import { useState } from 'react'

interface CaseStoryImageProps {
  src: string
  alt: string
}

export default function CaseStoryImage({ src, alt }: CaseStoryImageProps) {
  const [imageError, setImageError] = useState(false)

  if (imageError) {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary-100 to-primary-200 rounded-xl">
        <span className="text-gray-600 text-center px-4 text-sm">
          Add case story image:<br />
          /public/images/case-story-myomectomy.jpg
        </span>
      </div>
    )
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill
      className="object-contain rounded-xl"
      sizes="(max-width: 768px) 100vw, 50vw"
      unoptimized
      onError={() => setImageError(true)}
    />
  )
}

