import { About } from './components/about'
import { Contact } from './components/contact'
import { Footer } from './components/footer'
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
      <Contact />
      <Footer />
    </>
  )
}
