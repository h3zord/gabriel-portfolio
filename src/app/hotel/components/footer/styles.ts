'use client'

import styled from 'styled-components'

export const FooterContainer = styled.footer`
  height: 11rem;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  & > div {
    width: 12%;
  }

  & > div {
    color: ${(props) => props.theme.colors.black};
    display: flex;
    font-size: ${(props) => props.theme.fontSizes.md};
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
  }

  & > a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
    display: flex;
    font-size: ${(props) => props.theme.fontSizes.sm};
  }

  & > a > svg {
    width: 1.1rem;
    height: 1.1rem;
  }

  & > div > a {
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: ${(props) => props.theme.fontSizes.xsm};
    color: ${(props) => props.theme.colors.black};
  }
`
