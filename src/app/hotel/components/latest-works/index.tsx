'use client'

import Image from 'next/image'
import Link from 'next/link'
import { LatestWorksContainer, LatestWorksContent } from './styles'
import { latestWorks } from '@/data'
import { imageKitLoader } from '@/utils/image-kit'

export function LatestWorks() {
  return (
    <LatestWorksContainer>
      <h3>Our Latest Work</h3>

      <LatestWorksContent>
        {latestWorks.map((work) => (
          <Link href={`/hotel/${work.id}`} key={work.id}>
            <Image
              src={work.coverPicture.path}
              loader={imageKitLoader}
              alt="Latest work"
              width={523}
              height={688}
              // sizes="(max-width: 414px) 382px, (max-width: 750px) 640px, (max-width: 834px) 251px"
            />

            <p>{work.title}</p>
          </Link>
        ))}
      </LatestWorksContent>
    </LatestWorksContainer>
  )
}
