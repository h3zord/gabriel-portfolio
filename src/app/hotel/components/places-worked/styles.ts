'use client'

import styled from 'styled-components'

export const OurServicesContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
  padding: 3.5rem 2rem;
  background-color: ${(props) => props.theme.colors.white};

  & > h3 {
    font-size: ${(props) => props.theme.fontSizes.lg};
    color: ${(props) => props.theme.colors.white};
    font-weight: ${(props) => props.theme.weight.normal};
    color: ${(props) => props.theme.colors.black};
  }

  @media (max-width: 834px) {
    padding: 3rem 1.5rem;
    gap: 3rem;
  }

  @media (max-width: 750px) {
    padding: 2rem 1rem;
    gap: 2rem;
  }
`

export const OurServicesContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3rem;
  max-width: 110rem;

  & > div {
    max-width: 25rem;
  }

  & > div > h4 {
    font-size: ${(props) => props.theme.fontSizes.md};
    font-weight: ${(props) => props.theme.weight.normal};
    height: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-bottom: 1rem;
  }

  & > div > p {
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: ${(props) => props.theme.fontSizes.xsm};
    line-height: ${(props) => props.theme.lineHeight.sm};
    text-align: center;
  }

  @media (max-width: 768px) {
    column-gap: 1.5rem;
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    row-gap: 1.5rem;

    & > div > h4 {
      margin-bottom: 0;
    }
  }
`
