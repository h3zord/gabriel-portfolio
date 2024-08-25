'use client'

import styled from 'styled-components'

export const LatestWorksContainer = styled.section`
  padding: 3.5rem 2rem;
  background-color: ${(props) => props.theme.colors.white};

  & > h3 {
    font-size: ${(props) => props.theme.fontSizes.lg};
    font-weight: ${(props) => props.theme.weight.normal};
    text-align: center;
  }

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }

  @media (max-width: 750px) {
    padding: 2rem 1rem;
  }
`

export const LatestWorksContent = styled.div`
  margin-top: 4rem;
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

  a:hover {
    & > img {
      opacity: 0.7;
      transition: opacity 0.2s;
    }
  }

  @media (max-width: 768px) {
    gap: 1rem;
    margin-top: 3rem;

    & > a > img {
      max-height: 25rem;
    }

    & > a > p {
      margin-top: 0.5rem;
    }
  }

  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    margin-top: 2rem;
    gap: 2rem;

    & > a > img {
      max-height: 30rem;
    }
  }
`
