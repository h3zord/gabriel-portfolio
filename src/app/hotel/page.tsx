import { About } from './components/about'
import { HotelIntroduction } from './components/hotel-introduction'
import { LatestWorks } from './components/latest-works'

export default function Hotel() {
  return (
    <>
      <HotelIntroduction />
      <About />
      <LatestWorks />
    </>
  )
}
