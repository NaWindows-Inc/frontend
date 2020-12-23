import {
  Container,
  IconButton,
  makeStyles,
  Paper,
  Tooltip,
  Typography,
} from '@material-ui/core'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Brightness4Icon from '@material-ui/icons/Brightness4'
import Brightness7Icon from '@material-ui/icons/Brightness7'

import Snackbar from '../Snackbar'

import { toggleTheme } from '../../redux/app/actions'

import styles from './style.module.scss'

interface Props {
  title: string
  noTitleStyles?: boolean
  children: React.ReactNode
  linkTo: string
  linkMessage: string
  alertSeverity?: 'success' | 'error'
  alertOpen?: boolean
  alertMessage?: string
  alertHandleClose?: (
    event?: React.SyntheticEvent<Element, Event> | undefined,
    reason?: string | undefined,
  ) => void
}

const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.primary.main,
  },
}))

const AuthPage: React.FC<Props> = ({
  title,
  noTitleStyles,
  children,
  linkTo,
  linkMessage,
  alertSeverity,
  alertOpen,
  alertMessage,
  alertHandleClose,
}) => {
  const classes = useStyles()
  const dispatch = useDispatch()
  const themeType = useSelector((state) => state.app.theme)

  const handleToggleTheme = () => {
    dispatch(toggleTheme())
  }

  return (
    <div className={styles.authPage}>
      <Container maxWidth="xs">
        <Paper className={styles.paper} elevation={3}>
          <Typography
            component="h1"
            variant="h5"
            className={noTitleStyles ? undefined : styles.title}
          >
            {title}
          </Typography>
          {children}
          <div className={styles.bottomBlock}>
            <Link to={linkTo} className={`${styles.link} ${classes.link}`}>
              {linkMessage}
            </Link>
            <Tooltip
              title="Toggle light/dark theme"
              aria-label="toggle light/dark theme"
            >
              <IconButton
                aria-label="toggle light/dark theme"
                onClick={handleToggleTheme}
                color="primary"
              >
                {themeType === 'light' && <Brightness4Icon />}
                {themeType === 'dark' && <Brightness7Icon />}
              </IconButton>
            </Tooltip>
          </div>
        </Paper>
      </Container>
      <Snackbar
        severity={alertSeverity}
        open={alertOpen}
        message={alertMessage}
        handleClose={alertHandleClose}
      />
    </div>
  )
}

export default AuthPage
