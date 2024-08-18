import Image from 'next/image'
import { latestWorks } from '@/data'
import { Footer } from '@/app/components/footer'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { Metadata } from 'next'
import {
  LatestWorkButtonsContainer,
  LatestWorkDetailsContainer,
  LatestWorkDetailsCover,
  LatestWorkLink,
  LatestWorkPicturesContainer,
} from './styles'

interface GenerateMetadataProps {
  params: {
    id: string
  }
}

export function generateMetadata({ params }: GenerateMetadataProps): Metadata {
  const latestWork = latestWorks.find((work) => work.id === params.id)

  return {
    title: latestWork?.title,
  }
}

interface LatestWorkDetailsProps extends GenerateMetadataProps {}

export default function LatestWorkDetails({ params }: LatestWorkDetailsProps) {
  const latestWorkIndex = latestWorks.findIndex((work) => work.id === params.id)

  const findedLatestWork = latestWorks[latestWorkIndex]

  const showPrevLatestWork = latestWorkIndex > 0
  const showNextLatestWork =
    latestWorkIndex < latestWorks.length - 1 && latestWorkIndex > -1

  const prevLatestWork = latestWorks[latestWorkIndex - 1]
  const nextLatestWork = latestWorks[latestWorkIndex + 1]

  let styles = {}

  if (params.id === '1') {
    styles = {
      objectPosition: '50% 47%',
    }
  }

  if (params.id === '3') {
    styles = {
      objectPosition: '50% 80%',
    }
  }

  return (
    <LatestWorkDetailsContainer>
      <LatestWorkDetailsCover>
        <Image
          src={findedLatestWork?.mainPicture?.path ?? ''}
          width={findedLatestWork?.mainPicture?.width}
          height={findedLatestWork?.mainPicture?.height}
          alt="Latest work main picture"
          priority
          quality={100}
          style={styles}
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
