'use client'

import styled from 'styled-components'

export const FooterContainer = styled.footer`
  padding: 4.5rem 2rem;
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
  }

  & > a {
    line-height: 0;
    cursor: pointer;
  }

  & > div > a {
    cursor: pointer;
    font-family: ${(props) => props.theme.fonts.secondary};
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.fontSizes.xsm};
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: underline;
  }

  @media (max-width: 834px) {
    padding: 3.5rem 1.5rem;
  }

  @media (max-width: 750px) {
    padding: 2rem 1rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    & > a {
      order: 3;
      margin-top: 0.5rem;
    }
  }
`
