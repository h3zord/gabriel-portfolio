'use client'

import styled from 'styled-components'

export const FooterContainer = styled.footer`
  height: 11rem;
  background-color: ${(props) => props.theme.colors.white};
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  & > div {
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.fontSizes.md};
    display: flex;
    gap: 0.5rem;
    align-items: center;
    justify-content: center;
    width: 12%;
  }

  a {
    font-family: ${(props) => props.theme.fonts.secondary};
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.fontSizes.xsm};
    line-height: 0;
  }
`
