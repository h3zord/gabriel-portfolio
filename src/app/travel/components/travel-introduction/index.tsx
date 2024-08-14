import Image from 'next/image'
import { HeroImageTravel } from './styles'

export function TravelIntroduction() {
  return (
    <HeroImageTravel>
      <Image
        src="/assets/travel-introduction.webp"
        width={2500}
        height={1563}
        alt="Travel introduction image"
        priority
      />
    </HeroImageTravel>
  )
}
