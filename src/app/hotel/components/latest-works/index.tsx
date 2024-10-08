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
            <div>
              <Image
                src={work.coverPicture.path}
                loader={imageKitLoader}
                alt="Latest work"
                fill
                placeholder="blur"
                blurDataURL={work.coverPicture.blurUrl}
                sizes="(max-width: 450px) 410px, (max-width: 900px) 625px, 1080px"
              />
            </div>

            <p>{work.title}</p>
          </Link>
        ))}
      </LatestWorksContent>
    </LatestWorksContainer>
  )
}
