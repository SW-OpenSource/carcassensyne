import { rgba, darken, lighten } from 'polished'
import colors from './colors'

const theme = {
  primary: colors.blue,
  secondary: colors.pink,
  success: colors.green,
  warning: colors.amber,
  danger: colors.red,
  snow: colors.snow,
  white: colors.white,
  black: colors.black,
  grey: colors.grey,
  text: {
    dark: colors.text.dark,
    light: colors.text.light,
  },
  lightBlue: colors.lightBlue,
  boxShadow: {
    app: `0 0 30px ${rgba(colors.black, 0.125)}`,
    small: `0 0 15px 1px ${rgba(colors.black, 0.1)}`,
  },
  transition: {
    fast: '0.3s all ease-in-out 0.1s',
  },
  radius: {
    small: '6px',
    medium: '12px',
    large: '24px',
    alternate: {
      small: '6px 0',
      medium: '12px 0',
      large: '24px 0',
    },
  },
  fontHeading: 'Juice, Montserrat, Roboto, Arial',
  padding: {
    small: '12px 8px',
  },
  font: {
    light: colors.white,
    dark: colors.black,
  },
}

const mui = {
  palette: {
    primary: {
      light: lighten(0.25, theme.primary),
      main: theme.primary,
      dark: darken(0.25, theme.primary),
    },
    secondary: {
      light: lighten(0.25, theme.secondary),
      main: theme.secondary,
      dark: darken(0.25, theme.secondary),
    },
    error: {
      light: lighten(0.25, theme.danger),
      main: theme.danger,
      dark: darken(0.25, theme.danger),
    },
  },
  typography: {
    useNextVariants: true,
  },
}

export { theme, mui }
export default theme
