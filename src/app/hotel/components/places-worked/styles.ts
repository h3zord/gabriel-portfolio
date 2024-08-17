'use client'

import styled from 'styled-components'

export const PlacesWorkedContainer = styled.section`
  margin-top: 3.5rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.gray[100]};
  gap: 3rem;
  padding: 2.5rem 5rem;

  & > h3 {
    font-size: ${(props) => props.theme.fontSizes.lg};
    color: ${(props) => props.theme.colors.white};
    font-weight: ${(props) => props.theme.weight.normal};
    color: ${(props) => props.theme.colors.black};
  }
`

export const PlacesWorkedContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 3rem;

  & > div {
    max-width: 25rem;
  }

  & > div > h4 {
    font-size: ${(props) => props.theme.fontSizes.md};
    font-weight: ${(props) => props.theme.weight.normal};
    margin-bottom: 1rem;
  }

  & > div > p {
    color: ${(props) => props.theme.colors.black};
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: ${(props) => props.theme.fontSizes.xsm};
    line-height: ${(props) => props.theme.lineHeight.sm};
  }
`
