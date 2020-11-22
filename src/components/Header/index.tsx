import React from 'react'
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
} from '@material-ui/core'
import { ExitToApp } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { signOutUser } from '../../redux/auth/actions'

import styles from './style.module.scss'
import { logout } from '../../services/authAPI'

const Header = () => {
  const dispatch = useDispatch()
  const username = useSelector((state) => state.auth.username)

  const onSignOutClick = async () => {
    const token = localStorage.getItem('token')
    await logout(token ? token : '')
    dispatch(signOutUser())
    localStorage.removeItem('token')
  }

  return (
    <>
      <AppBar position="fixed">
        <Container maxWidth="xl" disableGutters>
          <Toolbar className={styles.toolbar}>
            <div>
              <Typography variant="h6">BLE Scanner</Typography>
            </div>
            <div className={styles.userPart}>
              <Typography>Hello, {username}!</Typography>
              <Tooltip title="Exit" aria-label="exit">
                <IconButton
                  color="inherit"
                  aria-label="exit"
                  onClick={onSignOutClick}
                >
                  <ExitToApp />
                </IconButton>
              </Tooltip>
            </div>
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  )
}

export default Header
