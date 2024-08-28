'use client'

import styled from 'styled-components'

export const AboutContainer = styled.section`
  display: flex;
  padding: 3.5rem 2rem;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.black};
  gap: clamp(2rem, 5vw, 10rem);

  & > div:last-child {
    min-width: 22rem;
    height: 667px;
    width: 500px;
    position: relative;
  }

  & > div:last-child > img {
    object-fit: cover;
  }

  @media (max-width: 834px) {
    padding: 3rem 1.5rem;
    gap: 2rem;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    padding: 2rem 1rem;

    & > div:last-child {
      max-width: 350px;
      max-height: 466px;
    }
  }
`

export const AboutContent = styled.div`
  & > h3 {
    font-size: ${(props) => props.theme.fontSizes.xlg};
    font-weight: ${(props) => props.theme.weight.normal};
    color: ${(props) => props.theme.colors.white};
    max-width: 31rem;
  }

  @media (max-width: 750px) {
    & > h3 {
      text-align: center;
      margin: 0 auto;
    }
  }
`

export const DescriptionContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 38rem;

  & > p {
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: ${(props) => props.theme.fontSizes.xsm};
    line-height: ${(props) => props.theme.lineHeight.sm};
    color: ${(props) => props.theme.colors.gray[100]};
  }

  @media (max-width: 750px) {
    max-width: 100vw;
  }
`
