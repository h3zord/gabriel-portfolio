import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { GrNext, GrPrevious } from 'react-icons/gr'
import { exploreWork } from '@/data'
import { imageKitLoader } from '@/utils/image-kit'
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
                loader={imageKitLoader}
                src={photo.path}
                fill
                alt="Explore work image"
                placeholder="blur"
                blurDataURL={photo.blurUrl}
                sizes="(max-width: 450px) 401px, (max-width: 900px) 621px, (max-width: 1100px) 649px, 1080px"
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
