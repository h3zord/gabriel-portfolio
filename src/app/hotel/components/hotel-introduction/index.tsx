import Image from 'next/image'
import { HeroImageHotel } from './styles'

export function HotelIntroduction() {
  return (
    <HeroImageHotel>
      <Image
        src="/assets/hotel-introduction.jpeg"
        width={5568}
        height={4872}
        alt="Hotel introduction image"
        quality={100}
        priority
      />
    </HeroImageHotel>
  )
}
