'use client'

import Image from 'next/image'
import { AboutContainer, AboutContent, DescriptionContainer } from './styles'
import { imageKitLoader } from '@/utils/image-kit'

export function About() {
  return (
    <AboutContainer>
      <div>
        <Image
          loader={imageKitLoader}
          src="about-image-hotel.jpg"
          alt="About image"
          fill
          placeholder="blur"
          blurDataURL="data:image/webp;base64,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"
          sizes="(max-width: 450px) 320px, (max-width: 900px) 420px, 500px"
        />
      </div>

      <AboutContent>
        <h3>
          What we do.
          <div />
        </h3>

        <DescriptionContainer>
          <p>
            We understand that in the competitive hospitality market, a strong
            online presence is essential to stand out. Our content is designed
            to showcase the best your hotel has to offer, from luxurious
            amenities to personalized service.
          </p>

          <p>
            Our mission is to transform your hotel’s online presence with
            high-quality visual content, allowing you to focus on what you do
            best: delighting your guests. We capture the essence and uniqueness
            of each space, from the elegant lobby to the charming details of the
            rooms. We want to ensure that each image conveys the unique
            atmosphere of your hotel, attracting and engaging future guests.
          </p>

          <p>
            Together, we can elevate your brand visibility, highlighting your
            hotel as the preferred choice for discerning travelers seeking
            quality and sophistication.
          </p>
        </DescriptionContainer>
      </AboutContent>
    </AboutContainer>
  )
}
