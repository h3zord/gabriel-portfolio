'use client'

import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  background: rgba(0 0 0 / 0.9);
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
  width: 100vw;
  height: 100vh;
  color: white;
  padding: 4rem;
`

export const Close = styled(Dialog.Close)`
  position: absolute;
  top: 20px;
  right: 30px;
  border: none;
  background-color: transparent;
  color: ${(props) => props.theme.colors.gray[400]};
  line-height: 0;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.theme.colors.gray[100]};
  }
`
