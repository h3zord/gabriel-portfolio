import Image from 'next/image'
import Link from 'next/link'
import { LatestWorksContainer, LatestWorksContent } from './styles'
import { lastestWork } from '@/data'

export function LatestWorks() {
  return (
    <LatestWorksContainer>
      <h3>Our Latest Work</h3>

      <LatestWorksContent>
        {lastestWork.map((work) => (
          <Link href={`/hotel/${work.id}`} key={work.id}>
            <div>
              <Image
                src={work.coverPicture.path}
                width={work.coverPicture.width}
                height={work.coverPicture.height}
                alt="Latest work"
              />

              <p>{work.title}</p>
            </div>
          </Link>
        ))}
      </LatestWorksContent>
    </LatestWorksContainer>
  )
}
