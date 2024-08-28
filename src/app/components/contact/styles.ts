'use client'

import styled from 'styled-components'

export const ContactContainer = styled.section<{
  $contactTheme: 'dark' | 'white'
}>`
  padding: 2.5rem 2rem;
  display: flex;
  justify-content: center;
  color: ${(props) =>
    props.$contactTheme === 'dark'
      ? props.theme.colors.white
      : props.theme.colors.black};

  background-color: ${(props) =>
    props.$contactTheme === 'dark'
      ? props.theme.colors.black
      : props.theme.colors.white};

  @media (max-width: 768px) {
    padding: 1.5rem 1rem;
  }

  @media (max-width: 750px) {
    padding: 1rem 0.5rem;
  }
`

export const ContactContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  margin-top: 2rem;

  & > h3 {
    font-weight: ${(props) => props.theme.weight.normal};
    font-size: ${(props) => props.theme.fontSizes.lg};
    text-align: center;
    max-width: 23rem;
  }

  @media (max-width: 834px) {
    margin-top: 1.5rem;
    gap: 1rem;
  }
`
