'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import styled from 'styled-components'

export const HeaderContainer = styled.header`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: ${(props) => props.theme.colors.gray[100]};
  padding: 0 4rem;

  & > a {
    text-decoration: none;
    color: ${(props) => props.theme.colors.gray[100]};
    width: 12%;
    display: flex;
    font-size: ${(props) => props.theme.fontSizes.sm};
  }

  & > a > svg {
    width: 1.1rem;
    height: 1.1rem;
    margin-left: auto;
  }
`

export const NavContainer = styled.nav`
  display: flex;
  gap: 2rem;
`

export const NavLink = styled(Link)`
  position: relative;
  color: ${(props) => props.theme.colors.gray[100]};
  padding: 0.1rem;
  text-decoration: none;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: ${(props) => props.theme.fontSizes.sm};
`
export const Underlined = styled(motion.div)`
  width: 100%;
  border-top: 2px solid ${(props) => props.theme.colors.gray[100]};
  position: absolute;
  bottom: -5px;
`
