import { ContactButton } from './contact-button/styles'
import { ContactModal } from './contact-modal'
import { ContactContainer, ContactContent } from './styles'

interface ContactTheme {
  contactTheme: 'dark' | 'gray'
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
