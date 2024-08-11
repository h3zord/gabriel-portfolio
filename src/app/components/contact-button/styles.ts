'use client'

import styled from 'styled-components'

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

  &:disabled {
    cursor: not-allowed;
  }

  &:hover:not(:disabled) {
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
