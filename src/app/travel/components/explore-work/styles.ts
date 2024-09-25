'use client'

import styled from 'styled-components'

export const ExploreWorkContainer = styled.section`
  padding: 3rem 2rem 0;
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.xlg};
  background-color: ${(props) => props.theme.colors.black};
  text-align: center;

  @media (max-width: 900px) {
    padding: 2rem 1rem 0;
  }
`

export const ExploreWorkContent = styled.div`
  margin: 4rem auto 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
  max-width: 110rem;

  & > div {
    aspect-ratio: 3/4;
    position: relative;
  }

  & > div > img {
    object-fit: cover;
    cursor: zoom-in;
  }

  @media (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
    margin: 3rem auto 0;
  }

  @media (max-width: 450px) {
    gap: 0.5rem;
  }
`
