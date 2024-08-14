import { Metadata } from 'next'
import { Contact } from '../components/contact'
import { Footer } from '../components/footer'
import { About } from './components/about'
import { ExploreWork } from './components/explore-work'
import { TravelIntroduction } from './components/travel-introduction'

export const metadata: Metadata = {
  title: 'Travel',
}

export default function Travel() {
  return (
    <>
      <TravelIntroduction />
      <About />
      <ExploreWork />
      <Contact contactTheme="dark" />
      <Footer />
    </>
  )
}
