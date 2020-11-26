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
import ToggleCount from '../../components/ToggleCount'

const COUNT = 5

const Dashboard = () => {
  const [count, setCount] = useState(COUNT)
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState<BleData[]>([])
  const [pagesCount, setPagesCount] = useState(1)
  const [currentPage, setCurrentPage] = useState(1)

  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      const result = await getData(token!, count, currentPage)

      // TODO: error handle
      console.log(result)
      setData(result.items)
      setPagesCount(Math.ceil(result.totalCount / count))
      setIsLoading(false)
    }

    fetchData()

    return () => {}
  }, [token, currentPage, count])

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

  for (let i = 0; i < count; i++) {
    skeleton.push(
      <div key={i.toString()}>
        <DeviceSkeleton />
        <Divider className={styles.divider} />
      </div>,
    )
  }

  const onCountChange = (newCount: number) => {
    setCount(newCount)
    setCurrentPage(1)
  }

  return (
    <div>
      <Header />
      <Container maxWidth="md">
        <Paper className={styles.paper} elevation={3}>
          <div className={styles.headingRow}>
            <Typography variant="h4" component="h2" className={styles.title}>
              Devices
            </Typography>
            <ToggleCount
              countValue={count}
              firstValue={5}
              secondValue={10}
              thirdValue={15}
              handleChangeCount={onCountChange}
            />
          </div>
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
