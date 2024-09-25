'use client'

import styled from 'styled-components'

export const OurServicesContainer = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 3rem 2rem;
  gap: 4rem;
  background-color: ${(props) => props.theme.colors.white};

  & > h3 {
    font-size: ${(props) => props.theme.fontSizes.lg};
    color: ${(props) => props.theme.colors.white};
    font-weight: ${(props) => props.theme.weight.normal};
    color: ${(props) => props.theme.colors.black};
  }

  @media (max-width: 900px) {
    padding: 2rem 1rem;
    gap: 3rem;
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

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    row-gap: 2rem;

    & > div > h4 {
      margin-bottom: 0;
    }
  }
`
