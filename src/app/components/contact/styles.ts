'use client'

import styled from 'styled-components'

export const ContactContainer = styled.section<{
  $contactTheme: 'dark' | 'white'
}>`
  height: 18rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.$contactTheme === 'dark'
      ? props.theme.colors.white
      : props.theme.colors.black};

  background-color: ${(props) =>
    props.$contactTheme === 'dark'
      ? props.theme.colors.black
      : props.theme.colors.gray[100]};
`

export const ContactContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.7rem;

  & > h3 {
    margin-top: 2.5rem;
    font-weight: ${(props) => props.theme.weight.normal};
    font-size: ${(props) => props.theme.fontSizes.xlg};
    text-align: center;
    width: 23rem;
  }
`
