import { ContactButton, ContactContainer, ContactContent } from './styles'

export function Contact() {
  return (
    <ContactContainer>
      <ContactContent>
        <h3>Lets get your ideas to life.</h3>

        <ContactButton $buttonTheme="white">Contact Me</ContactButton>
      </ContactContent>
    </ContactContainer>
  )
}
