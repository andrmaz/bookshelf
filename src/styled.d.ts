import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      background: string
      foreground: string
      primary: string
      secondary: string
      tertiary: string
      action: string
      active: string
      disabled: string
      backdrop: string
    }
    spacing: {
      'x-small': string
      small: string
      medium: string
      large: string
      'x-large': string
    }
    weight: {
      normal: number
      medium: number
      bold: number
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
