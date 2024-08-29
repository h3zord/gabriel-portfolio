'use client'

import styled from 'styled-components'

export const LatestWorksContainer = styled.section`
  padding: 3.5rem 2rem;
  background-color: ${(props) => props.theme.colors.gray[100]};

  & > h3 {
    font-size: ${(props) => props.theme.fontSizes.lg};
    font-weight: ${(props) => props.theme.weight.normal};
    text-align: center;
  }

  @media (max-width: 834px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 750px) {
    padding: 3rem;
  }

  @media (max-width: 450px) {
    padding: 2rem 1rem;
  }
`

export const LatestWorksContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 110rem;
  gap: 2rem;
  margin: 4rem auto 0;

  & > a {
    cursor: pointer;
  }

  & > a > div {
    aspect-ratio: 3/4;
    position: relative;
  }

  & > a > div > img {
    object-fit: cover;
  }

  & > a > p {
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.fontSizes.md};
    margin-top: 1rem;
  }

  @media (min-width: 834px) {
    & > a:hover {
      & > div > img {
        opacity: 0.7;
        transition: opacity 0.2s;
      }
    }
  }

  @media (max-width: 834px) {
    margin-top: 3rem;
    gap: 1rem;

    & > a > p {
      margin-top: 0.5rem;
    }
  }

  @media (max-width: 750px) {
    margin-top: 2rem;
    grid-template-columns: 1fr;
    gap: 2rem;
  }
`
