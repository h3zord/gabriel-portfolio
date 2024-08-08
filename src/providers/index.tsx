'use client'

import StyledComponentsRegistry from '@/lib/registry'
import { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '@/app/styles/global-styles'
import { defaultTheme } from '@/app/styles/themes/default-theme'

export const Providers = ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  return (
    <StyledComponentsRegistry>
      <GlobalStyles />
      <ThemeProvider theme={defaultTheme}>{children}</ThemeProvider>
    </StyledComponentsRegistry>
  )
}
