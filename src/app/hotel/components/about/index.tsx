/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import { AboutContainer, AboutContent, DescriptionContainer } from './styles'

export function About() {
  return (
    <AboutContainer>
      <div>
        <Image
          src="/assets/about-image-hotel.jpeg"
          width={2500}
          height={3126}
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
            In today’s competitive hospitality market, high-end hotels need more
            than just luxury to stand out—they need captivating visuals that
            tell their unique story and resonate across social media.
          </p>

          <p>
            As a specialized duo in hotel photography and videography, we
            understand the intricacies of capturing the essence of luxury
            properties. Our tailored approach ensures that each shot highlights
            the elegance and exclusivity of your hotel, creating a visual
            narrative that captivates your audience.
          </p>

          <p>
            We provide top-tier, social-first content that enhances your brand's
            online presence, while you can focus on delighting your guests.
          </p>

          <p>
            Our content will not only showcase your property’s unique features
            but will also align with current marketing trends, ensuring maximum
            impact.
          </p>
        </DescriptionContainer>
      </AboutContent>
    </AboutContainer>
  )
}
