'use client'

import styled from 'styled-components'

export const PlacesWorkedContainer = styled.section`
  height: 26.5rem;
  margin-top: 3.5rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/assets/places-worked.jpg');
  background-position: 51.00555599029658% 94.4118014751844%;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 3.5rem;

  & > h3 {
    font-size: ${(props) => props.theme.fontSizes.lg};
    color: ${(props) => props.theme.colors.white};
    font-weight: ${(props) => props.theme.weight.normal};
    color: ${(props) => props.theme.colors.gray[100]};
    margin-top: 5.8rem;
  }
`

export const PlacesWorkedContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 6rem;
  row-gap: 1.2rem;

  & > p {
    text-align: center;
    color: ${(props) => props.theme.colors.gray[100]};
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: ${(props) => props.theme.fontSizes.xsm};
  }
`
