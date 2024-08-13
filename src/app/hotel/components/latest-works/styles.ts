'use client'

import styled from 'styled-components'

export const LatestWorksContainer = styled.section`
  padding: 3.5rem 3rem;
  background-color: ${(props) => props.theme.colors.white};

  & > h3 {
    font-size: ${(props) => props.theme.fontSizes.lg};
    font-weight: ${(props) => props.theme.weight.normal};
    text-align: center;
  }
`

export const LatestWorksContent = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 2rem;

  a {
    all: unset;
    cursor: pointer;
  }

  & > a > div {
    width: 100%;
    height: 100%;
  }

  & > a > div > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  & > a > div > p {
    color: ${(props) => props.theme.colors.black};
    font-size: ${(props) => props.theme.fontSizes.md};
    margin-top: 1rem;
  }

  a:hover {
    img {
      opacity: 0.7;
      transition: opacity 0.2s;
    }
  }
`
