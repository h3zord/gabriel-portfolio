import { Contact } from '../components/contact'
import { Footer } from '../components/footer'
import { About } from './about'
import { ExploreWork } from './explore-work'
import { TravelIntroduction } from './travel-introduction'

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
