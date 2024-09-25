'use client'

import styled from 'styled-components'

export const ContactContainer = styled.section<{
  $contactTheme: 'dark' | 'gray'
}>`
  padding: 3rem 2rem;
  display: flex;
  justify-content: center;
  color: ${(props) =>
    props.$contactTheme === 'dark'
      ? props.theme.colors.gray[100]
      : props.theme.colors.black};

  background-color: ${(props) =>
    props.$contactTheme === 'dark'
      ? props.theme.colors.black
      : props.theme.colors.gray[100]};

  @media (max-width: 900px) {
    padding: 2rem 1rem;
  }
`

export const ContactContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  margin-top: 1rem;

  & > h3 {
    font-weight: ${(props) => props.theme.weight.normal};
    font-size: ${(props) => props.theme.fontSizes.lg};
    text-align: center;
    max-width: 23rem;
  }
`
