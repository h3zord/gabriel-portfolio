'use client'

import Image from 'next/image'
import { exploreWork } from '@/data'
import { ExploreWorkContainer, ExploreWorkContent } from './styles'
import { ExploreWorkModal } from './explore-work-modal'
import { imageKitLoader } from '@/utils/image-kit'

export function ExploreWork() {
  return (
    <ExploreWorkContainer>
      Explore my work
      <ExploreWorkContent>
        {exploreWork.map((photo) => (
          <ExploreWorkModal key={photo.id} photoId={photo.id}>
            <div>
              <Image
                loader={imageKitLoader}
                src={photo.path}
                fill
                alt="Explore work image"
                placeholder="blur"
                blurDataURL={photo.blurUrl}
                sizes="(max-width: 450px) 200px, (max-width: 900px) 420px, 1080px"
              />
            </div>
          </ExploreWorkModal>
        ))}
      </ExploreWorkContent>
    </ExploreWorkContainer>
  )
}
