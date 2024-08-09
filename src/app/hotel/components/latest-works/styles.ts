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

  & > a > div {
    width: 512px;
    height: 705px;
  }

  & > a > div > img {
    object-fit: cover;
    width: 100%;
    height: 100%;
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
