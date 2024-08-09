'use client'

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
  }

  & > a > svg {
    width: 1.2rem;
    height: 1.2rem;
    margin-left: auto;
  }
`

export const NavContainer = styled.nav`
  display: flex;
  gap: 1rem;
`

export const NavLink = styled(Link)<{ $isCurrentRoute: boolean }>`
  color: ${(props) => props.theme.colors.gray[100]};
  padding: 0.1rem;
  text-decoration: none;
  font-family: ${(props) => props.theme.fonts.secondary};
  font-size: ${(props) => props.theme.fontSizes.sm};
  border-bottom: ${(props) =>
    props.$isCurrentRoute
      ? `1.5px solid ${props.theme.colors.gray[100]}`
      : 'none'};
`
