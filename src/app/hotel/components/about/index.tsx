import Image from 'next/image'
import { AboutContainer, AboutContent, DescriptionContainer } from './styles'

export function About() {
  return (
    <AboutContainer>
      <div>
        <Image
          src="/assets/about-image-hotel.jpeg"
          width={1536}
          height={2048}
          alt="About image"
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
