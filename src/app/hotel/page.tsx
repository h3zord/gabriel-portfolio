import { HotelIntroduction } from './components/hotel-introduction'
import { About } from './components/about'
import { LatestWorks } from './components/latest-works'
import { PlacesWorked } from './components/places-worked'
import { Contact } from '../components/contact'
import { Footer } from '../components/footer'

export default function Hotel() {
  return (
    <>
      <HotelIntroduction />
      <About />
      <LatestWorks />
      <PlacesWorked />
      <Contact contactTheme="white" />
      <Footer />
    </>
  )
}
