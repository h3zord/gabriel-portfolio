'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const LatestWorkDetailsContainer = styled.main`
  width: 100vw;
  background-color: ${(props) => props.theme.colors.white};
`

export const LatestWorkDetailsCover = styled.div`
  height: 65vh;
  position: relative;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.7);
  }

  & > h3 {
    position: absolute;
    top: 40vh;
    left: 10vw;
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSizes.lg};
    font-weight: ${(props) => props.theme.weight.normal};
    max-width: 25rem;
  }

  @media (max-width: 768px) {
    & > h3 {
      font-size: ${(props) => props.theme.fontSizes.xxmd};
      left: 5vw;
    }
  }

  @media (max-width: 750px) {
    & > h3 {
      max-width: 85vw;
    }
  }
`

export const LatestWorkPicturesContainer = styled.section`
  padding: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (max-width: 768px) {
    padding: 1rem;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
  }
`
export const LatestWorkButtonsContainer = styled.div`
  display: flex;
  padding: 3.5rem 2rem;
  align-items: center;
  justify-content: space-between;
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.weight.normal};

  @media (max-width: 768px) {
    font-size: ${(props) => props.theme.fontSizes.xmd};
    padding: 3rem 1.5rem;
  }

  @media (max-width: 750px) {
    font-size: ${(props) => props.theme.fontSizes.md};
    padding: 2rem 1rem;
  }
`
export const LatestWorkLink = styled(Link)<{ $direction: 'prev' | 'next' }>`
  display: flex;
  margin: 0 0.25rem;
  align-items: center;
  max-width: 47.5%;
  gap: 0.5rem;
  cursor: pointer;
  align-items: center;
  color: ${(props) => props.theme.colors.gray[700]};
  text-align: ${(props) => (props.$direction === 'prev' ? 'start' : 'end')};
  margin-left: ${(props) => (props.$direction === 'next' ? 'auto' : 0)};

  &:hover {
    color: ${(props) => props.theme.colors.black};
  }

  @media (max-width: 768px) {
    & > svg {
      min-width: 24px;
    }
  }
`
