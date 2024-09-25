'use client'

import styled from 'styled-components'
import * as Dialog from '@radix-ui/react-dialog'
import Link from 'next/link'
import { motion } from 'framer-motion'

export const Overlay = styled(Dialog.Overlay)`
  background-color: ${(props) => props.theme.colors.white};
  position: fixed;
  inset: 0;
  display: grid;
  place-items: center;
  overflow-y: auto;
`
export const Content = styled(Dialog.Content)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${(props) => props.theme.colors.white};

  & > a:last-child {
    margin-top: auto;
    margin-bottom: 3rem;
  }
`

export const NavContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  margin-top: auto;
`

export const NavLink = styled(Link)`
  position: relative;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: ${(props) => props.theme.fontSizes.xlg};
  cursor: pointer;
`

export const Underlined = styled(motion.div)`
  width: 100%;
  border-top: 2px solid ${(props) => props.theme.colors.black};
  position: absolute;
  bottom: -5px;
`
