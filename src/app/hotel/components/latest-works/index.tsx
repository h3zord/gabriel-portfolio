import Image from 'next/image'
import { LatestWorksContainer, LatestWorksContent } from './styles'
import Link from 'next/link'

export function LatestWorks() {
  return (
    <LatestWorksContainer>
      <h3>Our Latest Work</h3>

      <LatestWorksContent>
        <Link href="/">
          <div>
            <Image
              src="/assets/latest-work-01.jpeg"
              width={1440}
              height={1800}
              alt="Latest work"
            />

            <p>Parklane, a luxury collection resort & spa</p>
          </div>
        </Link>

        <Link href="/">
          <div>
            <Image
              src="/assets/latest-work-02.jpg"
              width={2500}
              height={3125}
              alt="Latest work"
            />

            <p>Columbia Beach Resort, small luxury hotels</p>
          </div>
        </Link>

        <Link href="">
          <div>
            <Image
              src="/assets/latest-work-03.jpg"
              width={2500}
              height={1563}
              alt="Latest work"
            />

            <p>Santre Dolomythic Home</p>
          </div>
        </Link>
      </LatestWorksContent>
    </LatestWorksContainer>
  )
}
