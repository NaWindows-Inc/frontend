import React from 'react'
import ReactDOM from 'react-dom'
import './styles/index.scss'
import App from './App/App'

import { ThemeProvider } from '@material-ui/core'
import theme from './styles/theme'

import { BrowserRouter as Router } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Router>
        <App />
      </Router>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
)
