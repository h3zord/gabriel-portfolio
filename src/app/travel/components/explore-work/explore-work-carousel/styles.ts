'use client'

import styled from 'styled-components'

export const Embla = styled.div`
  overflow: hidden;
  position: relative;
`

export const EmblaViewport = styled.div``

export const EmblaContainer = styled.div`
  display: flex;
  height: 85vh;
`

export const EmblaSlide = styled.div`
  flex: 0 0 40%;
  min-width: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20%;
  margin-left: 20%;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
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
`
