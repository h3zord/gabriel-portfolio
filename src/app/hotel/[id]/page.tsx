import Image from 'next/image'
import { latestWorks } from '@/data'
import { Footer } from '@/app/components/footer'
import { GrNext, GrPrevious } from 'react-icons/gr'
import {
  LatestWorkButtonsContainer,
  LatestWorkDetailsContainer,
  LatestWorkDetailsCover,
  LatestWorkLink,
  LatestWorkPicturesContainer,
} from './styles'

interface LatestWorkDetailsProps {
  params: {
    id: string
  }
}

export default function LatestWorkDetails({ params }: LatestWorkDetailsProps) {
  // const latestWorks = api

  const latestWorkIndex = latestWorks.findIndex((work) => work.id === params.id)

  const findedLatestWork = latestWorks[latestWorkIndex]

  const showPrevLatestWork = latestWorkIndex > 0
  const showNextLatestWork =
    latestWorkIndex < latestWorks.length - 1 && latestWorkIndex > -1

  const prevLatestWork = latestWorks[latestWorkIndex - 1]
  const nextLatestWork = latestWorks[latestWorkIndex + 1]

  return (
    <LatestWorkDetailsContainer>
      <LatestWorkDetailsCover>
        <Image
          src={findedLatestWork?.mainPicture?.path ?? ''}
          width={findedLatestWork?.mainPicture?.width}
          height={findedLatestWork?.mainPicture?.height}
          alt="Latest work main picture"
          priority
        />

        <h3>{findedLatestWork?.title}</h3>
      </LatestWorkDetailsCover>

      <LatestWorkPicturesContainer>
        {findedLatestWork?.pictureList?.map((picture) => (
          <div key={picture.path}>
            <Image
              src={picture.path}
              width={picture.width}
              height={picture.height}
              alt="Latest work pictures"
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
