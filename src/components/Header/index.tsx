import React from 'react'
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { ExitToApp } from '@material-ui/icons'

import styles from './style.module.scss'

const Header = () => {
  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="xl" disableGutters>
          <Toolbar className={styles.toolbar}>
            <Typography variant="h6">BLE Scanner</Typography>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <ExitToApp />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  )
}

export default Header
