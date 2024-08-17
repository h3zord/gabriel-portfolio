import Image from 'next/image'
import { HeroImageTravel } from './styles'

export function TravelIntroduction() {
  return (
    <HeroImageTravel>
      <Image
        src="/assets/travel-introduction.jpeg"
        width={6000}
        height={4000}
        alt="Travel introduction image"
        quality={100}
        priority
      />
    </HeroImageTravel>
  )
}
