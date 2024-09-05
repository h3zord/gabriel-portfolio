'use client'

import Link from 'next/link'
import { FaInstagram } from 'react-icons/fa'
import { usePathname } from 'next/navigation'
import { BurguerMenuModal } from './burguer-menu-modal'
import { useState } from 'react'
import { IoClose } from 'react-icons/io5'
import {
  BurguerButton,
  HeaderContainer,
  NavContainer,
  NavLink,
  Underlined,
} from './styles'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const pathName = usePathname()

  function handleBurguerButton() {
    setIsOpen((prevState) => !prevState)
  }

  return (
    <HeaderContainer $headerTheme="white">
      <Link href="/hotel">Gabriel Brustolin</Link>

      <NavContainer>
        <NavLink href="/hotel">
          Hotel Portfolio
          {pathName.includes('/hotel') && <Underlined layoutId="underline" />}
        </NavLink>

        <NavLink href="/travel">
          Travel Portfolio
          {pathName.includes('/travel') && <Underlined layoutId="underline" />}
        </NavLink>
      </NavContainer>

      <Link href="https://www.instagram.com/gabzieg/" target="_blank">
        <FaInstagram size={20} />
      </Link>

      <BurguerMenuModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <BurguerButton
          onClick={handleBurguerButton}
          $burguerButtonTheme="white"
        >
          {isOpen ? (
            <IoClose size={34} />
          ) : (
            <>
              <span />
              <span />
              <span />
            </>
          )}
        </BurguerButton>
      </BurguerMenuModal>
    </HeaderContainer>
  )
}
