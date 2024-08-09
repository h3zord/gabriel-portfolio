import Image from 'next/image'
import { LatestWorksContainer, LatestWorksContent } from './styles'
import Link from 'next/link'

export function LatestWorks() {
  return (
    <LatestWorksContainer>
      <h3>Our Latest Work</h3>

      <LatestWorksContent>
        <Link href="/">
          <Image
            src="/assets/latest-work-01.jpeg"
            width={512}
            height={705}
            alt="Latest work"
            quality={100}
          />

          <p>Parklane, a luxury collection resort & spa</p>
        </Link>

        <Link href="/">
          <Image
            src="/assets/latest-work-02.jpg"
            width={512}
            height={705}
            alt="Latest work"
            quality={100}
          />

          <p>Columbia Beach Resort, small luxury hotels</p>
        </Link>

        <Link href="">
          <Image
            src="/assets/latest-work-03.jpg"
            width={512}
            height={705}
            alt="Latest work"
            quality={100}
          />

          <p>Santre Dolomythic Home</p>
        </Link>
      </LatestWorksContent>
    </LatestWorksContainer>
  )
}
