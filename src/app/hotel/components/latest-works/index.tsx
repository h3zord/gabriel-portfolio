import Image from 'next/image'
import Link from 'next/link'
import { LatestWorksContainer, LatestWorksContent } from './styles'
import { latestWorks } from '@/data'

export function LatestWorks() {
  return (
    <LatestWorksContainer>
      <h3>Our Latest Work</h3>

      <LatestWorksContent>
        {latestWorks.map((work) => (
          <Link href={`/hotel/${work.id}`} key={work.id}>
            <Image
              src={work.coverPicture.path}
              width={work.coverPicture.width}
              height={work.coverPicture.height}
              alt="Latest work"
            />

            <p>{work.title}</p>
          </Link>
        ))}
      </LatestWorksContent>
    </LatestWorksContainer>
  )
}
