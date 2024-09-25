'use client'

import Image from 'next/image'
import { AboutContainer, AboutContent, DescriptionContainer } from './styles'
import { imageKitLoader } from '@/utils/image-kit'

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
          loader={imageKitLoader}
          src="about-image-travel.jpg"
          alt="About image"
          fill
          placeholder="blur"
          blurDataURL="data:image/webp;base64,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"
          sizes="(max-width: 450px) 320px, (max-width: 900px) 420px, 500px"
        />
      </div>
    </AboutContainer>
  )
}
