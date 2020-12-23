import { createMuiTheme } from '@material-ui/core/styles'

export const light = createMuiTheme({
  palette: {
    primary: {
      dark: '#1769aa',
      main: '#2196f3',
      light: '#4dabf5',
    },
  },
})

export const dark = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      dark: '#1769aa',
      main: '#2196f3',
      light: '#4dabf5',
    },
  },
})

export default dark
