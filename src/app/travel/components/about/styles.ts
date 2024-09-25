'use client'

import styled from 'styled-components'

export const AboutContainer = styled.section`
  display: flex;
  padding: 3.5rem 2rem;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.black};
  gap: clamp(2rem, 10vw, 10rem);

  & > div:last-child {
    min-width: 18rem;
    height: 666.666px;
    width: 500px;
    position: relative;
  }

  & > div:last-child > img {
    object-fit: cover;
  }

  @media (max-width: 950px) {
    gap: 2rem;
  }

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 2rem 1rem;
    gap: 3rem;

    & > div:last-child {
      width: 420px;
      height: 480px;
      min-width: auto;
    }
  }

  @media (max-width: 450px) {
    & > div:last-child {
      width: 320px;
      height: 426.666px;
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

  @media (max-width: 900px) {
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

  @media (max-width: 900px) {
    max-width: 100vw;
  }
`
