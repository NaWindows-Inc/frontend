import { Container, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'
import Snackbar from '../Snackbar'

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
          <Link to={linkTo} className={`${styles.link} ${classes.link}`}>
            {linkMessage}
          </Link>
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
