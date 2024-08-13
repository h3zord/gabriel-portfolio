'use client'

import styled from 'styled-components'

export const ImprintContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 6.5rem;
  gap: 2rem;
  padding: 7rem 15rem;

  & > h3 {
    font-size: ${(props) => props.theme.fontSizes.xlg};
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
`
