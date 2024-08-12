import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { exploreWork } from '@/data'
import Image from 'next/image'
import {
  CarouselButtons,
  Embla,
  EmblaContainer,
  EmblaSlide,
  EmblaViewport,
} from './styles'

interface EmblaCarouselProps {
  photoId: string
}

export function EmblaCarousel({ photoId }: EmblaCarouselProps) {
  const currentPhotoIndex = exploreWork.findIndex(
    (photo) => photo.id === photoId,
  )

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    startIndex: currentPhotoIndex > -1 ? currentPhotoIndex : 0,
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <Embla>
      <EmblaViewport ref={emblaRef}>
        <EmblaContainer>
          {exploreWork.map((photo) => (
            <EmblaSlide key={photo.id}>
              <Image
                src={photo.path}
                width={2500}
                height={3125}
                alt="Explore work image"
              />
            </EmblaSlide>
          ))}
        </EmblaContainer>
      </EmblaViewport>
      <CarouselButtons $direction="prev" onClick={scrollPrev}>
        <GrPrevious size={30} />
      </CarouselButtons>
      <CarouselButtons $direction="next" onClick={scrollNext}>
        <GrNext size={30} />
      </CarouselButtons>
    </Embla>
  )
}
