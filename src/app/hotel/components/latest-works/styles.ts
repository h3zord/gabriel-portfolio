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
  align-items: center;
  justify-content: space-between;
  display: flex;

  & > a {
    text-decoration: none;
  }

  a > img {
    object-fit: cover;
  }

  a > p {
    text-decoration: none;
    color: ${(props) => props.theme.colors.black};
    margin-top: 1rem;
    font-size: ${(props) => props.theme.fontSizes.md};
  }

  a:hover {
    img {
      opacity: 0.7;
      transition: opacity 0.2s;
    }
  }
`
