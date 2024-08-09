'use client'

import Link from 'next/link'
import { HeaderContainer, NavContainer, NavLink } from './styles'
import { FaInstagram } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathName = usePathname()

  return (
    <HeaderContainer>
      <Link href="/">Gabriel Brustolin</Link>

      <NavContainer>
        <NavLink href="/" $isCurrentRoute={pathName === '/'}>
          Hotel Portfolio
        </NavLink>
        <NavLink href="/travel" $isCurrentRoute={pathName === '/travel'}>
          Travel Portfolio
        </NavLink>
      </NavContainer>

      <Link href="https://www.instagram.com/gabzieg/" target="_blank">
        <FaInstagram />
      </Link>
    </HeaderContainer>
  )
}
