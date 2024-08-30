'use client'

import styled from 'styled-components'

export const ImprintContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 6.5rem;
  gap: 2rem;
  padding: 5rem 10rem;

  & > h3 {
    font-size: ${(props) => props.theme.fontSizes.xlg};
  }

  @media (max-width: 834px) {
    padding: 3rem;
  }

  @media (max-width: 450px) {
    padding: 3rem 1.5rem;
    align-items: center;
  }
`

export const ImprintContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  max-width: 40vw;

  & > div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  & > div > p {
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: ${(props) => props.theme.fontSizes.xsm};
  }

  @media (max-width: 834px) {
    max-width: 100vw;
  }
`
