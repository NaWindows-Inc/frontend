import React from 'react'
import Header from '../../components/Header'
import Routes from '../../constants/routes'
import withAuthorization from '../../hocs'
import { Container, Divider, Paper, Typography } from '@material-ui/core'
import DeviceSkeleton from '../../components/DeviceSkeleton'
import Device from '../../components/Device'

import styles from './style.module.scss'

const Dashboard = () => {
  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <Paper className={styles.paper} elevation={3}>
          <Typography variant="h4" component="h2" className={styles.title}>
            Devices
          </Typography>
          <Divider />
          <Device
            mac="01:23:45:67:89:AB"
            date={new Date(1605182337660).toLocaleString('uk-UA')}
            level={89}
          />
          <Divider />
          <DeviceSkeleton />
          <Divider />
          <DeviceSkeleton />
          <Divider />
          <DeviceSkeleton />
          <Divider />
          <DeviceSkeleton />
          <Divider />
        </Paper>
      </Container>
    </div>
  )
}

const condition = (isAuth: boolean) => !isAuth

export default withAuthorization(condition, Routes.SIGN_IN)(Dashboard)
