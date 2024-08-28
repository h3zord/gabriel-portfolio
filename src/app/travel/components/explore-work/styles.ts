'use client'

import styled from 'styled-components'

export const ExploreWorkContainer = styled.section`
  padding: 3.5rem 2rem 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.xlg};
  background-color: ${(props) => props.theme.colors.black};
  text-align: center;
  gap: 4rem;

  @media (max-width: 834px) {
    padding: 3rem 1.5rem 0;
    gap: 3rem;
  }

  @media (max-width: 750px) {
    padding: 2rem 1rem 0;
    gap: 2rem;
  }
`

export const ExploreWorkContent = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 1.2rem;
  max-width: 110rem;

  & > img {
    width: 100%;
    max-height: 32rem;
    object-fit: cover;
    cursor: zoom-in;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 834px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 414px) {
    gap: 0.5rem;

    & > img {
      max-height: 20rem;
    }
  }
`
