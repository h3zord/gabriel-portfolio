import { z } from 'zod'
import { ContactButton } from '../contact-button/styles'
import { ContactFormContainer, ErrorContainer } from './styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Dispatch, SetStateAction } from 'react'

const contactFormSchema = z.object({
  firstName: z
    .string()
    .min(3, { message: 'Please provide a valid first name.' }),
  lastName: z.string().min(3, { message: 'Please provide a valid last name.' }),
  email: z.string().email({ message: 'Please provide a valid email.' }),
  subject: z.string().min(3, { message: 'Plase provide a valid subject.' }),
  message: z.string().min(3, { message: 'Please provide a valid message.' }),
})

type ContactFormSchema = z.infer<typeof contactFormSchema>

interface ContactFormProps {
  setOpen: Dispatch<SetStateAction<boolean>>
}

export function ContactForm({ setOpen }: ContactFormProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting, errors },
  } = useForm<ContactFormSchema>({
    resolver: zodResolver(contactFormSchema),
  })

  async function ContactFormSubmit(data: ContactFormSchema) {
    try {
      await fetch('https://formspree.io/f/movawnzd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      reset()

      setOpen(false)
    } catch (error) {
      console.error('Error sending email:', error)
    }
  }

  return (
    <ContactFormContainer onSubmit={handleSubmit(ContactFormSubmit)}>
      <div>
        <p>
          Name
          <span>(required)</span>
          {(errors.firstName || !errors.lastName) && (
            <ErrorContainer>
              {errors.firstName?.message || errors.lastName?.message}
            </ErrorContainer>
          )}
        </p>

        <div>
          <label htmlFor="first-name">
            First Name
            <input id="first-name" {...register('firstName')} />
          </label>

          <label htmlFor="last-name">
            Last Name
            <input id="last-name" {...register('lastName')} />
          </label>
        </div>
      </div>

      <div>
        <p>
          Email
          <span>(required)</span>
          {errors.email && (
            <ErrorContainer>{errors.email.message}</ErrorContainer>
          )}
        </p>

        <input type="email" {...register('email')} />
      </div>

      <div>
        <p>
          Subject
          <span>(required)</span>
          {errors.subject && (
            <ErrorContainer>{errors.subject.message}</ErrorContainer>
          )}
        </p>

        <input {...register('subject')} />
      </div>

      <div>
        <p>
          Message
          <span>(required)</span>
          {errors.message && (
            <ErrorContainer>{errors.message.message}</ErrorContainer>
          )}
        </p>

        <textarea rows={5} {...register('message')} />
      </div>

      <ContactButton type="submit" $buttonTheme="white" disabled={isSubmitting}>
        {isSubmitting ? 'Submitting...' : 'Send'}
      </ContactButton>
    </ContactFormContainer>
  )
}
