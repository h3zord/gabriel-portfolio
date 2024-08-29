import { HotelIntroduction } from './components/hotel-introduction'
import { About } from './components/about'
import { LatestWorks } from './components/latest-works'
import { OurServices } from './components/places-worked'
import { Contact } from '../components/contact'
import { Footer } from '../components/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hotel',
}

export default function Hotel() {
  return (
    <>
      <HotelIntroduction />
      <About />
      <LatestWorks />
      <OurServices />
      <Contact contactTheme="gray" />
      <Footer />
    </>
  )
}
