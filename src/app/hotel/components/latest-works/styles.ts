'use client'

import styled from 'styled-components'

export const LatestWorksContainer = styled.section`
  padding: 3rem 2rem;
  background-color: ${(props) => props.theme.colors.gray[100]};

  & > h3 {
    font-size: ${(props) => props.theme.fontSizes.lg};
    font-weight: ${(props) => props.theme.weight.normal};
    text-align: center;
  }

  @media (max-width: 900px) {
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
    margin: 0 auto;
    aspect-ratio: 3/4;
    max-height: 90vh;
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

  @media (min-width: 901px) {
    & > a:hover {
      & > div > img {
        opacity: 0.7;
        transition: opacity 0.2s;
      }
    }
  }

  @media (max-width: 900px) {
    margin: 3rem auto 0;
    grid-template-columns: 1fr;

    & > a p {
      text-align: center;
    }
  }
`
