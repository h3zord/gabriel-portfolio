'use client'

import styled from 'styled-components'

export const Embla = styled.div`
  overflow: hidden;
  position: relative;
`

export const EmblaViewport = styled.div``

export const EmblaContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 70vw;
  height: 85vh;

  @media (max-width: 1100px) {
    grid-auto-columns: 80vw;
  }

  @media (max-width: 900px) {
    grid-auto-columns: 85vw;
  }

  @media (max-width: 450px) {
    grid-auto-columns: 95vw;
    height: 80vh;
  }
`

export const EmblaSlide = styled.div`
  margin-right: 31vw;
  position: relative;

  & > img {
    object-fit: cover;
  }

  @media (max-width: 1100px) {
    margin-right: 21vw;
  }

  @media (max-width: 900px) {
    margin-right: 16vw;
  }

  @media (max-width: 450px) {
    margin-right: 6vw;
  }
`

export const CarouselButtons = styled.button<{ $direction: 'prev' | 'next' }>`
  position: absolute;
  top: 50%;
  left: ${(props) => props.$direction === 'prev' && '10px'};
  right: ${(props) => props.$direction === 'next' && '10px'};
  background-color: transparent;
  color: ${(props) => props.theme.colors.gray[400]};
  border: none;
  line-height: 0;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.gray[100]};
  }

  @media (max-width: 450px) {
    display: none;
  }
`
