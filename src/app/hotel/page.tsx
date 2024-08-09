import { About } from './components/about'
import { HotelIntroduction } from './components/hotel-introduction'
import { LatestWorks } from './components/latest-works'
import { PlacesWorked } from './components/places-worked'

export default function Hotel() {
  return (
    <>
      <HotelIntroduction />
      <About />
      <LatestWorks />
      <PlacesWorked />
    </>
  )
}
