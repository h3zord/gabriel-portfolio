'use client'

import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  background: rgba(0 0 0 / 0.85);
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
`
export const Content = styled(Dialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 42rem;
  padding: 2.5rem;
  background-color: ${(props) => props.theme.colors.white};

  @media (max-width: 900px) {
    width: 100vw;
    height: 100vh;
    padding: 2rem;
  }

  @media (max-width: 450px) {
    padding: 2.5rem 1rem;
  }
`

export const Close = styled(Dialog.Close)`
  position: absolute;
  top: 30px;
  right: 30px;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.gray[700]};
  line-height: 0;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.black};
  }

  @media (max-width: 450px) {
    top: 40px;
    right: 20px;
  }
`

export const Title = styled(Dialog.Title)`
  font-size: ${(props) => props.theme.fontSizes.lg};
  font-weight: ${(props) => props.theme.weight.normal};
`
