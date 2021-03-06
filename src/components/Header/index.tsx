import React from 'react'
import {
  AppBar,
  Container,
  IconButton,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
} from '@material-ui/core'
import { ExitToApp } from '@material-ui/icons'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'
import ShowChartIcon from '@material-ui/icons/ShowChart'

import { signOutUser } from '../../redux/auth/actions'
import { toggleTheme } from '../../redux/app/actions'

import { logout } from '../../services/authAPI'
import Routes from '../../constants/routes'

import styles from './style.module.scss'

const Header = () => {
  const dispatch = useDispatch()
  const username = useSelector((state) => state.auth.username)
  const themeType = useSelector((state) => state.app.theme)
  const theme = useTheme()
  const history = useHistory();

  const onSignOutClick = async () => {
    const token = localStorage.getItem('token')
    await logout(token ? token : '')
    dispatch(signOutUser())
    localStorage.removeItem('token')
  }

  const handleChartClick = () => {
    history.push(Routes.CHART);
  }

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <>
      <AppBar
        position="fixed"
        color={themeType === 'dark' ? 'inherit' : undefined}
      >
        <Container maxWidth="xl" disableGutters>
          <Toolbar
            className={styles.toolbar}
            style={{
              color:
                themeType === 'dark' ? theme.palette.text.primary : undefined,
            }}
          >
            <div>
              <Link to={Routes.DASHBOARD}>
                <Typography variant="h6">BLE Scanner</Typography>
              </Link>
            </div>

            <div className={styles.userPart}>
              <Tooltip title="Go to chart" aria-label="go to chart">
                <IconButton
                  aria-label="go to chart"
                  onClick={handleChartClick}
                  color="inherit"
                >
                  <ShowChartIcon />
                </IconButton>
              </Tooltip>

              <Tooltip
                title="Toggle light/dark theme"
                aria-label="toggle light/dark theme"
              >
                <IconButton
                  aria-label="toggle light/dark theme"
                  onClick={handleToggleTheme}
                  color="inherit"
                >
                  {themeType === 'light' && <Brightness4Icon />}
                  {themeType === 'dark' && <Brightness7Icon />}
                </IconButton>
              </Tooltip>

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
