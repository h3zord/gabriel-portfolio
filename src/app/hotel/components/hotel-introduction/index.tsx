import Image from 'next/image'
import { HeroImageHotel } from './styles'

export function HotelIntroduction() {
  return (
    <HeroImageHotel>
      <Image
        src="/assets/hotel-introduction.jpg"
        width={2500}
        height={1563}
        alt="Hotel introduction image"
        priority
      />
    </HeroImageHotel>
  )
}
