'use client'

import Image from 'next/image'
import { HeroImageHotel } from './styles'
import { imageKitLoader } from '@/utils/image-kit'

export function HotelIntroduction() {
  return (
    <HeroImageHotel>
      <Image
        loader={imageKitLoader}
        src="hotel-introduction-hero.jpg"
        alt="Hotel introduction image"
        fill
        priority
        sizes="100vw"
      />
    </HeroImageHotel>
  )
}
