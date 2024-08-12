'use client'

import Link from 'next/link'
import { HeaderContainer, NavContainer, NavLink, Underlined } from './styles'
import { FaInstagram } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathName = usePathname()

  return (
    <HeaderContainer>
      <Link href="/">Gabriel Brustolin</Link>

      <NavContainer>
        <NavLink href="/">
          Hotel Portfolio
          {pathName === '/' && <Underlined layoutId="underline" />}
        </NavLink>
        <NavLink href="/travel">
          Travel Portfolio
          {pathName === '/travel' && <Underlined layoutId="underline" />}
        </NavLink>
      </NavContainer>

      <Link href="https://www.instagram.com/gabzieg/" target="_blank">
        <FaInstagram />
      </Link>
    </HeaderContainer>
  )
}
