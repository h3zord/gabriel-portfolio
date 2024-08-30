'use client'

import Image from 'next/image'
import { latestWorks } from '@/data'
import { imageKitLoader } from '@/utils/image-kit'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { Footer } from '@/app/components/footer'
import {
  LatestWorkButtonsContainer,
  LatestWorkDetailsContainer,
  LatestWorkDetailsCover,
  LatestWorkLink,
  LatestWorkPicturesContainer,
} from './styles'

interface LatestWorkImagesProps {
  id: string
}

export function LatestWorkImages({ id }: LatestWorkImagesProps) {
  const latestWorkIndex = latestWorks.findIndex((work) => work.id === id)

  const findedLatestWork = latestWorks[latestWorkIndex]

  const showPrevLatestWork = latestWorkIndex > 0
  const showNextLatestWork =
    latestWorkIndex < latestWorks.length - 1 && latestWorkIndex > -1

  const prevLatestWork = latestWorks[latestWorkIndex - 1]
  const nextLatestWork = latestWorks[latestWorkIndex + 1]

  let styles = {}

  if (id === '1') {
    styles = {
      objectPosition: '50% 47%',
    }
  }

  if (id === '3') {
    styles = {
      objectPosition: '50% 80%',
    }
  }

  return (
    <LatestWorkDetailsContainer>
      <LatestWorkDetailsCover>
        <Image
          loader={imageKitLoader}
          src={findedLatestWork?.mainPicture?.path ?? ''}
          alt="Latest work main picture"
          style={styles}
          fill
          priority
          sizes="100vw"
          placeholder="blur"
          blurDataURL={findedLatestWork.mainPicture.blurUrl}
        />

        <h3>{findedLatestWork?.title}</h3>
      </LatestWorkDetailsCover>

      <LatestWorkPicturesContainer>
        {findedLatestWork?.pictureList?.map((picture) => (
          <div key={picture.path}>
            <Image
              loader={imageKitLoader}
              src={picture.path}
              fill
              alt="Latest work pictures"
              placeholder="blur"
              blurDataURL={picture.blurUrl}
              sizes="(max-width: 450px) 205px, (max-width: 834px) 385px, 1080px"
            />
          </div>
        ))}
      </LatestWorkPicturesContainer>

      <LatestWorkButtonsContainer>
        {showPrevLatestWork && (
          <LatestWorkLink href={prevLatestWork.id} $direction="prev">
            <GrPrevious size={30} />
            {prevLatestWork.title}
          </LatestWorkLink>
        )}

        {showNextLatestWork && (
          <LatestWorkLink href={nextLatestWork.id} $direction="next">
            {nextLatestWork.title}
            <GrNext size={30} />
          </LatestWorkLink>
        )}
      </LatestWorkButtonsContainer>

      <Footer />
    </LatestWorkDetailsContainer>
  )
}
