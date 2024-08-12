/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { AboutContainer, AboutContent, DescriptionContainer } from './styles'

export function About() {
  return (
    <AboutContainer>
      <AboutContent>
        <h3>Meet the person behind the camera.</h3>

        <DescriptionContainer>
          <p>
            Even though I find myself more often either at the beach or on top
            of a mountain, I’m always looking for a new adventure to capture. My
            name is Toni Fischer, and four years ago, I embarked on a journey
            that would forever change my life. Traveling opened my eyes to the
            beauty of new destinations, the serenity of untouched landscapes,
            and the unique stories of people from all walks of life.
          </p>

          <p>
            Specializing in landscape, nature, and hotel photography, I strive
            to bring each scene to life through my lens. My work aims to evoke
            the same awe and wonder I feel when exploring a hidden beach or
            climbing to a mountain peak. With a creative approach to photography
            & videography, I create visual narratives that resonate with viewers
            and transport them to the very locations I explore.
          </p>

          <p>
            So far I’ve had the pleasure of working with renowned brands such as
            Roadsurfer and Futurismo Azores. Additionally, I was able to work
            with properties from the Luxury Collection and Small Luxury Hotels
            of the World, showcasing the allure of diverse destinations and
            experiences.
          </p>
        </DescriptionContainer>
      </AboutContent>

      <div>
        <Image
          src="/assets/about-image-travel.jpg"
          width={2500}
          height={3125}
          alt="About image"
        />
      </div>
    </AboutContainer>
  )
}
