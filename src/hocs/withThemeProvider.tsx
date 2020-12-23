import React from 'react'
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import { ConnectedProps, connect } from 'react-redux'

import { RootState } from '../typings'

import { light, dark } from '../styles/theme'

const withThemeProvider = <BaseProps extends {}>(
  Component: React.ComponentType<BaseProps>,
) => {
  interface Props extends PropsFromRedux {}

  const WithThemeProvider: React.FC<Props> = ({ theme, ...restProps }) => {
    const appliedTheme = createMuiTheme(theme === 'dark' ? dark : light)

    return (
      <ThemeProvider theme={appliedTheme}>
        <Component {...(restProps as BaseProps)} />
      </ThemeProvider>
    )
  }

  let mapState = (state: RootState) => ({
    theme: state.app.theme,
  })

  const connector = connect(mapState, {})

  type PropsFromRedux = ConnectedProps<typeof connector>

  return connector(WithThemeProvider)
}

export default withThemeProvider
