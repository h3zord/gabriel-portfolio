'use client'

import * as Dialog from '@radix-ui/react-dialog'
import { ReactNode, useState } from 'react'
import { Close, Content, Overlay, Title } from './styles'
import { IoClose } from 'react-icons/io5'
import { ContactForm } from '../contact-form'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'

interface ContactModalProps {
  children: ReactNode
}

export function ContactModal({ children }: ContactModalProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content>
          <Close>
            <IoClose size={20} />
          </Close>

          <Title>Contact Me</Title>

          <VisuallyHidden asChild>
            <Dialog.Description>Fill the fields</Dialog.Description>
          </VisuallyHidden>

          <ContactForm setOpen={setOpen} />
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
