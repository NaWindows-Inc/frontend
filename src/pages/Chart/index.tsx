import React, { useEffect, useRef } from 'react'
import { Paper, Theme, useTheme } from '@material-ui/core'

import Layout from '../../components/Layout'

import withAuthorization from '../../hocs'
import Routes from '../../constants/routes'

import styles from './style.module.scss'

function plotData(dataSet: any, context: any, sections: any, xScale: any) {
  context.beginPath()
  context.moveTo(0, dataSet[0])
  for (let i = 1; i < sections; i++) {
    context.lineTo(i * xScale, dataSet[i])
  }
  context.stroke()
}

const renderPlot = (
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  dataSet: {
    data1: Array<number>
    data2: Array<number>
    data3: Array<number>
  },
  theme: Theme,
) => {
  const firstColor = theme.palette.success.main
  const secondColor = theme.palette.warning.main
  const thirdColor = theme.palette.info.main

  // Values for the Data Plot
  const { data1, data2, data3 } = dataSet

  // sections = 12
  const sections = Math.max(data1.length, data2.length, data3.length)

  // Val_max = 130
  // Val_min = -40
  const Val_max = Math.max(...data1, ...data2, ...data3) + 5
  const Val_min = Math.min(...data1, ...data2, ...data3) - 5

  const stepSize = 10
  const columnSize = 10
  const rowSize = 50
  const margin = 10

  // fill canvas background
  context.fillStyle = theme.palette.background.paper
  context.fillRect(0, 0, canvas.width, canvas.height)

  // font styles
  context.fillStyle = theme.palette.text.secondary
  context.font = '20 pt Verdana'

  const yScale = (canvas.height - columnSize - margin) / (Val_max - Val_min)
  const xScale = (canvas.width - rowSize) / sections

  context.strokeStyle = theme.palette.text.disabled // color of grid lines
  context.beginPath()

  // print Parameters on X axis, and grid lines on the graph
  for (let i = 1; i <= sections; i++) {
    let x = i * xScale
    // context.fillText(xAxis[i], x, columnSize - margin)
    context.moveTo(x, columnSize)
    context.lineTo(x, canvas.height - margin)
  }

  // print row header and draw horizontal grid lines
  let count = 0
  for (let scale = Val_max; scale >= Val_min; scale = scale - stepSize) {
    let y = columnSize + yScale * count * stepSize
    context.fillText(scale.toString(), margin, y + margin)
    context.moveTo(rowSize, y)
    context.lineTo(canvas.width - margin, y)
    count++
  }
  context.stroke()

  context.translate(rowSize, canvas.height + Val_min * yScale)
  context.scale(1, -1 * yScale)

  // Color of each dataplot items
  context.strokeStyle = firstColor
  plotData(data1, context, sections, xScale)
  context.strokeStyle = secondColor
  plotData(data2, context, sections, xScale)
  context.strokeStyle = thirdColor
  plotData(data3, context, sections, xScale)
}

const Chart = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const theme = useTheme()

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      const context = canvasRef.current.getContext('2d')

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
      const Samsung = [
        -30,
        -50,
        -70,
        -80,
        -90,
        -100,
        -95,
        -91,
        -85,
        -92,
        -99,
        -130,
      ]
      const Nokia = [-20, -10, -20, -25, -40, -5, -10, -28, -30, -43, -65, -80]

      const dataSet = {
        data1: Apple,
        data2: Samsung,
        data3: Nokia,
      }

      if (context) {
        renderPlot(canvas, context, dataSet, theme)
      }
    }

    return () => {}
  }, [canvasRef, theme])

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
          <canvas
            ref={canvasRef}
            height="400"
            width="650"
            className={styles.canvas}
          ></canvas>
        </div>
      </Paper>
    </Layout>
  )
}

const condition = (isAuth: boolean) => !isAuth

export default withAuthorization(condition, Routes.SIGN_IN)(Chart)
