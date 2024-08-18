import Image from 'next/image'
import { HeroImageHotel } from './styles'

export function HotelIntroduction() {
  return (
    <HeroImageHotel>
      <Image
        src="/assets/hotel-introduction.jpeg"
        width={3072}
        height={2688}
        alt="Hotel introduction image"
        priority
      />
    </HeroImageHotel>
  )
}
