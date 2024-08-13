'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const LatestWorkDetailsContainer = styled.main`
  width: 100vw;
  background-color: ${(props) => props.theme.colors.gray[100]};
`

export const LatestWorkDetailsCover = styled.div`
  height: 65vh;
  position: relative;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: 50% 75.2094011751469%;
    filter: brightness(0.7);
  }

  h3 {
    position: absolute;
    top: 38vh;
    left: 15vw;
    color: ${(props) => props.theme.colors.white};
    font-size: ${(props) => props.theme.fontSizes.lg};
    font-weight: ${(props) => props.theme.weight.normal};
    width: 27vw;
  }
`

export const LatestWorkPicturesContainer = styled.section`
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  & > div {
    width: 100%;
    height: 100%;
  }

  & > div > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`
export const LatestWorkButtonsContainer = styled.div`
  margin-top: 2rem;
  margin: 3rem;
  display: flex;
  align-items: center;
`
export const LatestWorkLink = styled(Link)<{ $direction: 'prev' | 'next' }>`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: ${(props) =>
    props.$direction === 'prev' ? 'flex-start' : 'flex-end'};
  margin-left: ${(props) => (props.$direction === 'next' ? 'auto' : 0)};
  margin-right: ${(props) => (props.$direction === 'prev' ? 'auto' : 0)};
  text-align: ${(props) => (props.$direction === 'prev' ? 'start' : 'end')};
  max-width: 45%;
  gap: 1rem;
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.weight.normal};
  cursor: pointer;
  color: ${(props) => props.theme.colors.gray[700]};

  &:hover {
    color: ${(props) => props.theme.colors.black};
  }
`
