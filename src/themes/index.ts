import {DefaultTheme} from 'styled-components'

const colors = {
  base: 'white',
  text: '#434449',
  gray: '#f1f2f7',
  gray10: '#f1f1f4',
  gray20: '#e4e5e9',
  gray80: '#6f7077',
  indigo: '#3f51b5',
  indigoDarken10: '#364495',
  indigoLighten80: '#b7c1f8',
  yellow: '#ffc107',
  green: '#4caf50',
  danger: '#ef5350',
  orange: 'orange',
  blue: '#3498db',
} as const

const devices = {
  mobile: 426,
  tablet: 768,
  laptop: 1024,
} as const

export const theme: DefaultTheme = {
  colors: {
    background: colors.base,
    foreground: colors.text,
    primary: colors.indigo,
    secondary: colors.orange,
  },
  breakpoints: {
    small: `@media (max-width: ${devices.mobile}px)`,
    medium: `@media (max-width: ${devices.tablet}px)`,
    large: `@media (max-width: ${devices.laptop}px)`,
  },
  spacing: {
    'x-small': '4px',
    small: `8px`,
    medium: '16px',
    large: `32px`,
    'x-large': '48px',
  },
  motion: {
    enabled: '@media (prefers-reduced-motion: no-preference)',
  },
  mode: {
    dark: '@media (prefers-color-scheme: dark)',
  },
}
