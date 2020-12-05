import React from 'react'
import { Paper, useTheme } from '@material-ui/core'

import Layout from '../../components/Layout'
import Canvas from '../../components/Canvas'

import withAuthorization from '../../hocs/withAuthorization'
import Routes from '../../constants/routes'

import styles from './style.module.scss'

const Chart = () => {
  const theme = useTheme()

  const Apple = [
    -100,
    -102,
    -87,
    -90,
    -100,
    -123,
    -100,
    -90,
    -87,
    -91,
    -93,
    -88,
  ]
  const Samsung = [-30, -50, -70, -80, -90, -100, -95, -91, -85, -92, -99, -130]
  const Nokia = [-20, -10, -20, -25, -40, -5, -10, -28, -30, -43, -65, -80]

  const dataSet = {
    data1: Apple,
    data2: Samsung,
    data3: Nokia,
  }

  return (
    <Layout>
      <Paper className={styles.paper} elevation={3}>
        <div
          style={{
            height: '80vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Canvas dataSet={dataSet} theme={theme} />
        </div>
      </Paper>
    </Layout>
  )
}

const condition = (isAuth: boolean) => !isAuth

export default withAuthorization(condition, Routes.SIGN_IN)(Chart)
