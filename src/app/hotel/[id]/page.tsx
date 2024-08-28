import { latestWorks } from '@/data'
import { Metadata } from 'next'
import { LatestWorkImages } from './components/latest-work-images'

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
  return <LatestWorkImages id={params.id} />
}
