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
            <Image
              loader={imageKitLoader}
              src={photo.path}
              width={384}
              height={512}
              alt="Explore work image"
            />
          </ExploreWorkModal>
        ))}
      </ExploreWorkContent>
    </ExploreWorkContainer>
  )
}
