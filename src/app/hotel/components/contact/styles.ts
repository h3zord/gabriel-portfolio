'use client'

import styled from 'styled-components'

export const ContactContainer = styled.section`
  height: 16rem;
  background-color: ${(props) => props.theme.colors.gray[100]};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContactContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.7rem;

  & > h3 {
    margin-top: 1.5rem;
    font-size: ${(props) => props.theme.fontSizes.lg};
    font-weight: ${(props) => props.theme.weight.normal};
    width: 17rem;
    text-align: center;
  }
`
export const ContactButton = styled.button<{ $buttonTheme: 'dark' | 'white' }>`
  background-color: transparent;
  padding: 0.9rem;
  cursor: pointer;
  letter-spacing: ${(props) => props.theme.letterSpacing.md};
  border-radius: 99999px;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-weight: ${(props) => props.theme.weight.bold};
  transition: background-color 0.2s;

  border: ${(props) =>
    props.$buttonTheme === 'dark'
      ? `1px solid ${props.theme.colors.white}`
      : `1px solid ${props.theme.colors.black}`};

  color: ${(props) =>
    props.$buttonTheme === 'dark'
      ? props.theme.colors.white
      : props.theme.colors.black};

  &:hover {
    background-color: ${(props) =>
      props.$buttonTheme === 'dark'
        ? props.theme.colors.white
        : props.theme.colors.black};

    color: ${(props) =>
      props.$buttonTheme === 'dark'
        ? props.theme.colors.black
        : props.theme.colors.white};
  }
`
