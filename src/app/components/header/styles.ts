'use client'

import Link from 'next/link'
import styled from 'styled-components'
import { motion } from 'framer-motion'

export const HeaderContainer = styled.header<{
  $headerTheme: 'dark' | 'white'
}>`
  position: absolute;
  z-index: 9999;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  max-width: 110rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2.5rem 4rem;

  color: ${(props) =>
    props.$headerTheme === 'dark'
      ? props.theme.colors.black
      : props.theme.colors.white};

  & > a {
    display: flex;
    font-size: ${(props) => props.theme.fontSizes.sm};

    &:nth-child(1) {
      cursor: pointer;
    }

    &:nth-child(3) > svg {
      margin-left: auto;
      cursor: pointer;
    }
  }

  @media (max-width: 834px) {
    padding: 2.5rem 3rem;

    & > a:nth-child(3) {
      display: none;
    }
  }
`

export const NavContainer = styled.nav`
  display: flex;
  gap: 2rem;
  color: inherit;

  @media (max-width: 834px) {
    display: none;
  }
`

export const NavLink = styled(Link)`
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

export const BurguerButton = styled.button<{
  $burguerButtonTheme: 'dark' | 'white'
}>`
  background: none;
  border: none;
  width: 3rem;
  height: 3rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  line-height: 0;
  gap: 0.25rem;

  & > span {
    width: 30px;
    height: 3px;
    background-color: ${(props) =>
      props.$burguerButtonTheme === 'dark'
        ? props.theme.colors.black
        : props.theme.colors.white};
  }

  & > svg {
    color: ${(props) => props.theme.colors.black};
  }

  @media (min-width: 835px) {
    display: none;
  }
`
