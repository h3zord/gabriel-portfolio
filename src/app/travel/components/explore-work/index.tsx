'use client'

import Image from 'next/image'
import { exploreWork } from '@/data'
import { ExploreWorkContainer, ExploreWorkContent } from './styles'
import { ExploreWorkModal } from './explore-work-modal'

export function ExploreWork() {
  return (
    <ExploreWorkContainer>
      Explore my work
      <ExploreWorkContent>
        {exploreWork.map((photo) => (
          <ExploreWorkModal key={photo.id} photoId={photo.id}>
            <div>
              <Image
                src={photo.path}
                width={photo.width}
                height={photo.height}
                alt="Explore work image"
              />
            </div>
          </ExploreWorkModal>
        ))}
      </ExploreWorkContent>
    </ExploreWorkContainer>
  )
}
