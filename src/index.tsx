import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import App from './App/App'

import { Provider as StoreProvider } from 'react-redux'
import store from './redux/store'

import { ThemeProvider } from '@material-ui/core'
import theme from './styles/theme'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <StoreProvider store={store}>
      <ThemeProvider theme={theme}>
        <Router>
          <App />
        </Router>
      </ThemeProvider>
    </StoreProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
