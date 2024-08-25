import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-aboreto);
  }

  html {
    -webkit-font-smoothing: antialiased;
  }

  body {
    overflow-x: hidden;
  }

  a {
    all: unset;
  }
`
