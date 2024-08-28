'use client'

import styled from 'styled-components'

export const LatestWorksContainer = styled.section`
  padding: 3.5rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};
  gap: 4rem;

  & > h3 {
    font-size: ${(props) => props.theme.fontSizes.lg};
    font-weight: ${(props) => props.theme.weight.normal};
    text-align: center;
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

export const LatestWorksContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 110rem;
  gap: 2rem;

  & > a {
    cursor: pointer;
  }

  & > a > img {
    width: 100%;
    max-height: 43rem;
    object-fit: cover;
  }

  & > a > p {
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.fontSizes.md};
    margin-top: 1rem;
  }

  & > a:hover {
    & > img {
      opacity: 0.7;
      transition: opacity 0.2s;
    }
  }

  @media (max-width: 834px) {
    gap: 1rem;

    & > a > img {
      max-height: 23rem;
    }

    & > a > p {
      margin-top: 0.5rem;
    }
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    gap: 2rem;

    & > a > img {
      max-height: 35rem;
    }
  }

  @media (max-width: 414px) {
    & > a > img {
      max-height: 30rem;
    }
  }
`
