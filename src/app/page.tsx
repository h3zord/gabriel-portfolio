import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export const metadata: Metadata = {
  title: 'Hotel',
}

export default function Home() {
  return redirect('/hotel')
}
