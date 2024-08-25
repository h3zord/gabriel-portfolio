import Image from 'next/image'
import { AboutContainer, AboutContent, DescriptionContainer } from './styles'

export function About() {
  return (
    <AboutContainer>
      <AboutContent>
        <h3>Meet the person behind the camera.</h3>

        <DescriptionContainer>
          <p>
            I have lived in the countryside my entire life, always seeking new
            adventures to connect with the world around me. My name is Gabriel
            Brustolin, and this year I made a decision that will change my life
            forever: to embark on a journey of travel that has opened my eyes to
            the vastness and beauty of our planet. Each trip gives me the
            opportunity to experience the tranquility of the landscapes and to
            learn about the culture of a place through its people, which
            inspires me to continue exploring and discovering new horizons.
          </p>

          <p>
            Our travel portfolio is dedicated to creating high-quality visual
            content, including photos and videos that capture the essence of
            each destination. I specialize in stunning landscapes, lush nature,
            and the welcoming atmosphere of unique hotels and accommodations. My
            goal is to convey, through my lens, the same enchantment and wonder
            that I feel when exploring a hidden beach or climbing a mountain
            peak. With a creative and authentic approach, I create visual
            narratives that resonate with audiences and transport each viewer to
            the places I visit.
          </p>

          <p>
            Each project is a new opportunity to show the world the beauty that
            exists out there and inspire others to embark on their own
            adventures. Join me on this journey and let my photos and videos
            bring a little of that magic to your social media, awakening in
            everyone the desire to explore the unknown.
          </p>
        </DescriptionContainer>
      </AboutContent>

      <div>
        <Image
          src="/assets/about-image-travel.jpeg"
          width={1536}
          height={2048}
          alt="About image"
        />
      </div>
    </AboutContainer>
  )
}
