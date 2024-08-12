import { ContactModal } from '@/app/components/contact-modal'
import { ContactContainer, ContactContent } from './styles'
import { ContactButton } from '@/app/components/contact-button/styles'

interface ContactTheme {
  contactTheme: 'dark' | 'white'
}

export function Contact({ contactTheme }: ContactTheme) {
  return (
    <ContactContainer $contactTheme={contactTheme}>
      <ContactContent>
        <h3>Let’s get your ideas to life.</h3>

        <ContactModal>
          <ContactButton $buttonTheme={contactTheme}>Contact Me</ContactButton>
        </ContactModal>
      </ContactContent>
    </ContactContainer>
  )
}
