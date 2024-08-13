'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import styled from 'styled-components'

export const HeaderContainer = styled.header<{ $headerTheme?: 'dark' }>`
  position: absolute;
  z-index: 9999;
  top: 0;
  width: 100vw;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 4rem;
  color: ${(props) =>
    props.$headerTheme === 'dark'
      ? props.theme.colors.black
      : props.theme.colors.gray[100]};

  & > a {
    all: unset;
    width: 10.5%;
    display: flex;
    font-size: ${(props) => props.theme.fontSizes.sm};

    &:nth-child(1) {
      cursor: pointer;
    }
  }

  & > a > svg {
    margin-left: auto;
    cursor: pointer;
  }
`

export const NavContainer = styled.nav`
  display: flex;
  gap: 2rem;
  color: inherit;
`

export const NavLink = styled(Link)`
  all: unset;
  position: relative;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: ${(props) => props.theme.fontSizes.sm};
  cursor: pointer;
`

export const Underlined = styled(motion.div)`
  width: 100%;
  border-top: 2px solid ${(props) => props.theme.colors.gray[100]};
  position: absolute;
  bottom: -5px;
`
