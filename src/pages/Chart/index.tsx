import React, { useEffect, useState } from 'react'
import { Paper, useTheme } from '@material-ui/core'

import Layout from '../../components/Layout'
import Canvas from '../../components/Canvas'
import ChartForm, { FormValues } from './form'

import withAuthorization from '../../hocs/withAuthorization'
import { getDataByMac } from '../../services/dataAPI'
import Routes from '../../constants/routes'

import styles from './style.module.scss'

interface DataSet {
  d1: number[]
  d2: number[]
  d3: number[]
}

const Chart = () => {
  const [firstMac, setFirstMac] = useState<string>('')
  const [secondMac, setSecondMac] = useState<string>('')
  const [thirdMac, setThirdMac] = useState<string>('')
  const [firstMacData, setFirstMacData] = useState<number[]>([])
  const [secondMacData, setSecondMacData] = useState<number[]>([])
  const [thirdMacData, setThirdMacData] = useState<number[]>([])
  const [dataSet, setDataSet] = useState<DataSet>({
    d1: [],
    d2: [],
    d3: [],
  })
  const theme = useTheme()

  const token = localStorage.getItem('token')

  useEffect(() => {
    const fetchData = async (
      mac: string,
      setData: React.Dispatch<React.SetStateAction<number[]>>,
    ) => {
      if (mac) {
        const result = await getDataByMac(token!, 12, mac)

        if (result && result.items) {
          setData(result.items.map((item) => item.level))
        }
      } else {
        setData([])
      }
    }

    fetchData(firstMac, setFirstMacData)
    fetchData(secondMac, setSecondMacData)
    fetchData(thirdMac, setThirdMacData)

    return () => {}
  }, [token, firstMac, secondMac, thirdMac])

  const handleSubmit = (values: FormValues) => {
    setFirstMac(values.firstMac)
    setSecondMac(values.secondMac)
    setThirdMac(values.thirdMac)
  }

  useEffect(() => {
    const fMac = firstMacData.slice(0, 12)
    const sMac = secondMacData.slice(0, 12)
    const tMac = thirdMacData.slice(0, 12)

    const dataSet = {
      d1: fMac.length > 1 ? fMac : [],
      d2: sMac.length > 1 ? sMac : [],
      d3: tMac.length > 1 ? tMac : [],
    }

    setDataSet(dataSet)
  }, [firstMacData, secondMacData, thirdMacData])

  return (
    <Layout>
      <Paper className={styles.paper} elevation={3}>
        <div className={styles.canvasWrapper}>
          <div className={styles.canvas}>
            <Canvas dataSet={dataSet} theme={theme} />
          </div>
        </div>
        <div className={styles.formWrapper}>
          <ChartForm handleSubmit={handleSubmit} />
        </div>
      </Paper>
    </Layout>
  )
}

const condition = (isAuth: boolean) => !isAuth

export default withAuthorization(condition, Routes.SIGN_IN)(Chart)
