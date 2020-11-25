import React, { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Routes from '../../constants/routes'
import withAuthorization from '../../hocs'
import { Container, Divider, Paper, Typography } from '@material-ui/core'
import DeviceSkeleton from '../../components/DeviceSkeleton'
import Device from '../../components/Device'
import { getData } from '../../services/dataAPI'
import { BleData } from '../../typings'

import styles from './style.module.scss'
import { Pagination } from '@material-ui/lab'

const COUNT = 5

const Dashboard = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<BleData[]>([])
  const [pagesCount, setPagesCount] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)

  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const result = await getData(token!, COUNT, currentPage)

      // TODO: error handle
      console.log(result)
      setData(result.items)
      setPagesCount(Math.floor(result.totalCount / COUNT))
      setTimeout(() => setIsLoading(false), 500)
    }

    fetchData()

    return () => {}
  }, [token, currentPage])

  const mappedData = data.map((item, index) => (
    <div key={index.toString()}>
      <Device
        mac={item.mac}
        date={new Date(item.time).toLocaleString('uk-UA')}
        level={item.level}
      />
      <Divider className={styles.divider} />
    </div>
  ))

  const skeleton: JSX.Element[] = []

  for (let i = 0; i < COUNT; i++) {
    skeleton.push(
      <div key={i.toString()}>
        <DeviceSkeleton />
        <Divider className={styles.divider} />
      </div>,
    )
  }

  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <Paper className={styles.paper} elevation={3}>
          <Typography variant="h4" component="h2" className={styles.title}>
            Devices
          </Typography>
          <Divider className={styles.divider} />
          {isLoading ? skeleton : mappedData}
          <div className={styles.pagination}>
            <Pagination
              count={pagesCount}
              variant="outlined"
              onChange={(event, page) => setCurrentPage(page)}
            />
          </div>
        </Paper>
      </Container>
    </div>
  )
}

const condition = (isAuth: boolean) => !isAuth

export default withAuthorization(condition, Routes.SIGN_IN)(Dashboard)
