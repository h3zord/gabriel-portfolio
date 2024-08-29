'use client'

import Image from 'next/image'
import { HeroImageTravel } from './styles'
import { imageKitLoader } from '@/utils/image-kit'

export function TravelIntroduction() {
  return (
    <HeroImageTravel>
      <Image
        loader={imageKitLoader}
        src="travel-introduction-hero.jpg"
        fill
        alt="Travel introduction image"
        sizes="100vw"
        priority
        placeholder="blur"
        blurDataURL="data:image/webp;base64,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"
      />
    </HeroImageTravel>
  )
}
