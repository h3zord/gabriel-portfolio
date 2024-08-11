'use client'

import styled from 'styled-components'

export const ContactContainer = styled.section`
  height: 16rem;
  background-color: ${(props) => props.theme.colors.gray[100]};
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ContactContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1.7rem;

  & > h3 {
    margin-top: 1.5rem;
    font-size: ${(props) => props.theme.fontSizes.lg};
    font-weight: ${(props) => props.theme.weight.normal};
    width: 17rem;
    text-align: center;
  }
`
