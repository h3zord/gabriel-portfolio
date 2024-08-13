import Link from 'next/link'
import { FooterContainer } from './styles'
import { FaInstagram } from 'react-icons/fa'

export function Footer() {
  return (
    <FooterContainer>
      <div>Gabriel Brustolin</div>

      <Link href="https://www.instagram.com/gabzieg/" target="_blank">
        <FaInstagram size={20} />
      </Link>

      <div>
        <Link href="/imprint">Imprint</Link>
        <Link href="/data-security">Privacy Policy</Link>
      </div>
    </FooterContainer>
  )
}
