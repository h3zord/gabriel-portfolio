'use client'

import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'
import { Dispatch, ReactNode, SetStateAction } from 'react'
import { Content, NavContainer, NavLink, Overlay, Underlined } from './styles'
import { VisuallyHidden } from '@radix-ui/react-visually-hidden'
import { usePathname } from 'next/navigation'
import { FaInstagram } from 'react-icons/fa'

interface ContactModalProps {
  children: ReactNode
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}

export function BurguerMenuModal({
  children,
  isOpen,
  setIsOpen,
}: ContactModalProps) {
  const pathName = usePathname()

  function handleNavContainer() {
    setIsOpen(false)
  }

  return (
    <Dialog.Root modal={false} open={isOpen} onOpenChange={setIsOpen}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Overlay />

        <Content onInteractOutside={(ev) => ev.preventDefault()}>
          <VisuallyHidden asChild>
            <Dialog.Title>Burguer Menu</Dialog.Title>
          </VisuallyHidden>

          <VisuallyHidden asChild>
            <Dialog.Description>Select the section</Dialog.Description>
          </VisuallyHidden>

          <NavContainer onClick={handleNavContainer}>
            <NavLink href="/hotel">
              Hotel Portfolio
              {pathName.includes('/hotel') && (
                <Underlined layoutId="underline" />
              )}
            </NavLink>

            <NavLink href="/travel">
              Travel Portfolio
              {pathName.includes('/travel') && (
                <Underlined layoutId="underline" />
              )}
            </NavLink>
          </NavContainer>

          <Link href="https://www.instagram.com/gabzieg/" target="_blank">
            <FaInstagram size={28} />
          </Link>
        </Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
