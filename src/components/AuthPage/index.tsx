import { Container, makeStyles, Paper, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom'

import styles from './style.module.scss'

interface Props {
  title: string
  children: React.ReactNode
  linkTo: string
  linkMessage: string
}

const useStyles = makeStyles((theme) => ({
  link: {
    color: theme.palette.primary.main,
  },
}))

const AuthPage: React.FC<Props> = ({
  title,
  children,
  linkTo,
  linkMessage,
}) => {
  const classes = useStyles()

  return (
    <div className={styles.authPage}>
      <Container maxWidth="xs">
        <Paper className={styles.paper} elevation={3}>
          <Typography component="h1" variant="h5" className={styles.title}>
            {title}
          </Typography>
          {children}
          <Link to={linkTo} className={`${styles.link} ${classes.link}`}>
            {linkMessage}
          </Link>
        </Paper>
      </Container>
    </div>
  )
}

export default AuthPage
