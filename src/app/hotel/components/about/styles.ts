'use client'

import styled from 'styled-components'

export const AboutContainer = styled.section`
  display: flex;
  padding: 3.5rem 2rem;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.white};
  gap: clamp(2rem, 10vw, 10rem);

  & > div:first-child {
    position: relative;
    height: 666.666px;
    width: 500px;
    min-width: 25rem;
  }

  & > div:first-child > img {
    object-fit: cover;
  }

  @media (max-width: 834px) {
    padding: 3rem 1.5rem;
    gap: 2rem;
  }

  @media (max-width: 750px) {
    flex-direction: column;
    padding: 2rem 1rem;

    & > div:first-child {
      width: 320px;
      height: 426.666px;
      min-width: auto;
    }
  }
`

export const AboutContent = styled.div`
  & > h3 {
    font-size: ${(props) => props.theme.fontSizes.lg};
    font-weight: ${(props) => props.theme.weight.normal};
  }

  & > h3 > div {
    width: 260px;
    border-top: 1px solid black;
    margin-top: 0.5rem;
  }

  @media (max-width: 750px) {
    & > h3 {
      text-align: center;
    }

    & > h3 > div {
      margin: 0 auto;
    }
  }
`

export const DescriptionContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 31rem;

  & > p {
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: ${(props) => props.theme.fontSizes.xsm};
    line-height: ${(props) => props.theme.lineHeight.sm};
  }

  @media (max-width: 750px) {
    max-width: 100vw;
  }
`
