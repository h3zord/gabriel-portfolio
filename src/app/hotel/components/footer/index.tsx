import Link from 'next/link'
import { FooterContainer } from './styles'
import { FaInstagram } from 'react-icons/fa'

export function Footer() {
  return (
    <FooterContainer>
      <div>Gabriel Brustolin</div>

      <Link href="https://www.instagram.com/gabzieg/" target="_blank">
        <FaInstagram />
      </Link>

      <div>
        <Link href="/">Imprint</Link>
        <Link href="/">Privacy Policy</Link>
      </div>
    </FooterContainer>
  )
}
