import React from 'react'
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Typography,
} from '@material-ui/core'
import { ExitToApp } from '@material-ui/icons'
import { useDispatch } from 'react-redux'
import { signOutUser } from '../../redux/auth/actions'

import styles from './style.module.scss'

const Header = () => {
  const dispatch = useDispatch()

  const onSignOutClick = () => {
    dispatch(signOutUser())
    localStorage.removeItem('token')
  }

  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="xl" disableGutters>
          <Toolbar className={styles.toolbar}>
            <Typography variant="h6">BLE Scanner</Typography>
            <IconButton
              color="inherit"
              aria-label="exit"
              onClick={onSignOutClick}
            >
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
