import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string
      foreground: string
      primary: string
      secondary: string
    }
    spacing: {
      'x-small': string
      small: string
      medium: string
      large: string
      'x-large': string
    }
    breakpoints: {
      small: string
      medium: string
      large: string
    }
    motion: {
      enabled: string
    }
    mode: {
      dark: string
    }
  }
}
