'use client'

import styled from 'styled-components'

export const ExploreWorkContainer = styled.section`
  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.xlg};
  background-color: ${(props) => props.theme.colors.black};
  text-align: center;
`

export const ExploreWorkContent = styled.div`
  padding: 4rem 2.5rem 0;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  gap: 1.2rem;

  & > div {
    width: 100%;
    height: 100%;
  }

  & > div > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    cursor: zoom-in;
  }
`
