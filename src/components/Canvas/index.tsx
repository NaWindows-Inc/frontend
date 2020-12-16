import React, { useEffect, useRef } from 'react'
import { Theme } from '@material-ui/core'
import { placeholder3 } from '../../constants/placeholders'

function plotData(dataSet: any, context: any, sections: any, xScale: any) {
  context.beginPath()
  context.moveTo(0, dataSet[0])
  for (let i = 1; i < sections; i++) {
    context.lineTo(i * xScale, dataSet[i])
  }
  context.stroke()
}

function compare(a1: number[], a2: number[]) {
  return a1.length === a2.length && a1.every((v: any, i: number) => v === a2[i])
}

const renderPlot = (
  canvas: HTMLCanvasElement,
  context: CanvasRenderingContext2D,
  dataSet: {
    d1: Array<number>
    d2: Array<number>
    d3: Array<number>
  },
  theme: Theme,
) => {
  const { d1, d2, d3 } = dataSet

  const firstColor = theme.palette.success.main
  const secondColor = theme.palette.warning.main
  const thirdColor = theme.palette.info.main

  // Values for the Data Plot
  const data1 = d1.length > 1 ? d1 : placeholder3
  const data2 = d2.length > 1 ? d2 : placeholder3
  const data3 =
    d3.length > 1 && !compare(d3, d1) && !compare(d3, d1) ? d3 : placeholder3

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

  context.clearRect(0, 0, canvas.width, canvas.height)
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
  d1.length > 1 && plotData(data1, context, sections, xScale)
  context.strokeStyle = secondColor
  d2.length > 1 &&
    !compare(d2, d1) &&
    plotData(data2, context, sections, xScale)
  context.strokeStyle = thirdColor
  d3.length > 1 &&
    !compare(d3, d2) &&
    !compare(d3, d1) &&
    plotData(data3, context, sections, xScale)
}

interface Props {
  dataSet: { d1: number[]; d2: number[]; d3: number[] }
  theme: Theme
}

const Canvas = ({ dataSet, theme }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current
      canvas.height = 400
      canvas.width = 650
      const context = canvas.getContext('2d')

      if (context) {
        renderPlot(canvas, context, dataSet, theme)
      }
    }

    return () => {}
  }, [canvasRef, dataSet, theme])

  return (
    <canvas
      ref={canvasRef}
      style={{
        backgroundColor: theme.palette.background.paper,
      }}
    ></canvas>
  )
}

export default Canvas
