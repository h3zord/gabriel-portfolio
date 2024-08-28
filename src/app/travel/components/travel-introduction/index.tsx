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
      />
    </HeroImageTravel>
  )
}
