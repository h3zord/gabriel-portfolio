import 'styled-components'
import { defaultTheme } from '@/app/styles/themes/default-theme'

type Theme = typeof defaultTheme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
