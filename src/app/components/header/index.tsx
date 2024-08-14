'use client'

import Link from 'next/link'
import { HeaderContainer, NavContainer, NavLink, Underlined } from './styles'
import { FaInstagram } from 'react-icons/fa'
import { usePathname } from 'next/navigation'

export function Header() {
  const pathName = usePathname()

  const isImprintRoute = pathName === '/imprint'
  const isDataSecurityRoute = pathName === '/data-security'

  return (
    <HeaderContainer
      $headerTheme={isImprintRoute || isDataSecurityRoute ? 'dark' : undefined}
    >
      <Link href="/hotel">Gabriel Brustolin</Link>

      <NavContainer>
        <NavLink href="/hotel">
          Hotel Portfolio
          {pathName === '/hotel' && <Underlined layoutId="underline" />}
        </NavLink>
        <NavLink href="/travel">
          Travel Portfolio
          {pathName === '/travel' && <Underlined layoutId="underline" />}
        </NavLink>
      </NavContainer>

      <Link href="https://www.instagram.com/gabzieg/" target="_blank">
        <FaInstagram size={20} />
      </Link>
    </HeaderContainer>
  )
}
