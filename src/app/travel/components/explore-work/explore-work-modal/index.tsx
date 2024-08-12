import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode, useState } from 'react'
import { Close, Content, Overlay } from './styles'
import { IoClose } from 'react-icons/io5'
import { EmblaCarousel } from '../explore-work-carousel'

interface ContactModalProps {
  children: ReactNode
  photoId: string
}

export function ExploreWorkModal({ children, photoId }: ContactModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <Close>
            <IoClose size={30} />
          </Close>

          <EmblaCarousel photoId={photoId} />
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
