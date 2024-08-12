'use client'

import styled from 'styled-components'

export const AboutContainer = styled.section`
  display: flex;
  padding: 3.5rem 0;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme.colors.black};
  gap: 4rem;

  & > div:last-child {
    width: 544px;
    height: 658px;
  }

  & > div:last-child > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`

export const AboutContent = styled.div`
  & > h3 {
    font-size: ${(props) => props.theme.fontSizes.xlg};
    font-weight: ${(props) => props.theme.weight.normal};
    color: ${(props) => props.theme.colors.white};
    width: 31rem;
  }
`

export const DescriptionContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 38rem;

  & > p {
    font-family: ${(props) => props.theme.fonts.secondary};
    font-size: ${(props) => props.theme.fontSizes.xsm};
    line-height: ${(props) => props.theme.lineHeight.sm};
    color: ${(props) => props.theme.colors.gray[100]};
  }
`
