import { ContactModal } from '@/app/components/contact-modal'
import { ContactContainer, ContactContent } from './styles'
import { ContactButton } from '@/app/components/contact-button/styles'

export function Contact() {
  return (
    <ContactContainer>
      <ContactContent>
        <h3>Lets get your ideas to life.</h3>

        <ContactModal>
          <ContactButton $buttonTheme="white">Contact Me</ContactButton>
        </ContactModal>
      </ContactContent>
    </ContactContainer>
  )
}
