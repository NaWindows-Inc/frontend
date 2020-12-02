import React, { useEffect, useRef } from 'react'
import { useTheme } from '@material-ui/core'

import styles from './style.module.scss'


function plotData(dataSet: any, context: any, sections: any, xScale: any) {
  context.beginPath()
  context.moveTo(0, dataSet[0])
  for (let i = 1; i < sections; i++) {
    context.lineTo(i * xScale, dataSet[i])
  }
  context.stroke()
}

const Chart = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const theme = useTheme()

  useEffect(() => {
    if (canvasRef.current) {
      let canvas = canvasRef.current
      let context = canvasRef.current.getContext('2d')

      // ! /////////////////////////////////////////////
      if (context && canvas) {
        let Val_max
        let Val_min
        let sections: any
        let xScale: any
        let yScale
        // Values for the Data Plot, they can also be obtained from a external file
        // var Apple = [100, 102, 87, 89, 100, 123, 100, 90, 87, 91, 93, 88]
        // var Samsung = [30, 50, 70, 80, 90, 100, 95, 91, 85, 92, 99, 130]
        var Apple = [-30, -40, -90, -35, -40, -50, -70, -85, -30, -43, -65, -80, -43, -65, -80]
        var Samsung = [-30, -50, -50, -75, -40, -58, -40, -82, -30, -43, -65, -80]
        var Nokia = [-30, -70, -60, -45, -40, -65, -71, -67, -30, -43, -65, -80]

        // set these values for your data
        // sections = 12
        sections = Apple.length
        Val_max = -30
        Val_min = -90
        let stepSize = 10
        let columnSize = 50
        let rowSize = 50
        let margin = 10
        let xAxis = [
          ' ',
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ]
        

        // canvas = document.getElementById('canvas')
        // context = canvas.getContext('2d')
        context.fillStyle = '#0099ff'
        context.font = '14pt Verdana'

        yScale = (canvas.height - columnSize - margin) / (Val_max - Val_min)
        xScale = (canvas.width - rowSize) / sections

        context.strokeStyle = '#009933' // color of grid lines
        context.beginPath()
        // print Parameters on X axis, and grid lines on the graph
        for (let i = 1; i <= sections; i++) {
          var x = i * xScale
          // context.fillText(xAxis[i], x, columnSize - margin)
          context.moveTo(x, columnSize)
          context.lineTo(x, canvas.height - margin)
        }
        // print row header and draw horizontal grid lines
        var count = 0
        for (let scale = Val_max; scale >= Val_min; scale = scale - stepSize) {
          var y = columnSize + yScale * count * stepSize
          context.fillText(scale.toString(), margin, y + margin)
          context.moveTo(rowSize, y)
          context.lineTo(canvas.width, y)
          count++
        }
        context.stroke()

        context.translate(rowSize, canvas.height + Val_min * yScale)
        context.scale(1, -1 * yScale)

        
        // Color of each dataplot items
        context.strokeStyle = '#FF0066'
        plotData(Apple, context, sections, xScale)
        // context.strokeStyle = '#9933FF'
        // plotData(Samsung, context, sections, xScale)
        // context.strokeStyle = '#000'
        // plotData(Nokia, context, sections, xScale)

        
      }

      // ! /////////////////////////////////////////////

      // ! /////////////////////////////////////////////
      // if (context) {

      //   const computeHeight = (value: any) => {
      //     y = canvas.height - value * yScale
      //   }

      //   // var Val_Min
      //   let y: any
      //   // values of each item on the graph
      //   // var itemValue = [14, 7, 4.2, 4, 3.5]
      //   var itemValue = [90,
      //     80,
      //     45,
      //     52,
      //     34,
      //     76,
      //     22,
      //     34,
      //     76,
      //     66,
      //     54,
      //     90,
      //     12,
      //     35]

      //     // intialize values for each variables
      //     let sections = itemValue.length
      //     let Val_Max = 100
      //     var stepSize = 10
      //     var columnSize = 60
      //     var rowSize = 60
      //     var margin = 10
      //     var header = 'In Trillion $'

      //     context.fillStyle = '#000'

      //     let yScale = (canvas.height - columnSize - margin) / Val_Max
      //     let xScale = (canvas.width - rowSize) / (sections + 1)

      //     context.strokeStyle = '#000' // background black lines
      //     context.beginPath()

      //     // column names
      //     context.font = '19 pt Arial;'
      //     context.fillText(header, 0, columnSize - margin)

      //     // draw lines in the background
      //     context.font = '16 pt Helvetica'
      //     var count = 0
      //     for (let scale = Val_Max; scale >= 0; scale = scale - stepSize) {
      //       y = columnSize + yScale * count * stepSize
      //       context.fillText(scale.toString(), margin, y + margin)
      //       context.moveTo(rowSize, y)
      //       context.lineTo(canvas.width, y)
      //       count++
      //     }
      //     context.stroke()

      //     // graph's bar lines color
      //     context.fillStyle = theme.palette.primary.main

      //     // translate to bottom of graph  inorder to match the data
      //     context.translate(30, canvas.height - margin)
      //     context.scale(xScale, -1 * yScale)

      //     // draw each graph bars
      //     for (let i = 0; i < itemValue.length; i++) {
      //       context.fillRect(i + 1, 0, 0.3, itemValue[i])
      //     }
      // }

      // ! /////////////////////////////////////////////

      // if (ctx) {
      //   ctx.fillStyle = 'black' // Задаём чёрный цвет для линий
      //   ctx.lineWidth = 2.0 // Ширина линии
      //   ctx.beginPath() // Запускает путь
      //   ctx.moveTo(30, 10) // Указываем начальный путь
      //   ctx.lineTo(30, 460) // Перемешаем указатель
      //   ctx.lineTo(500, 460) // Ещё раз перемешаем указатель
      //   ctx.stroke() // Делаем контур

      //   // Цвет для рисования
      //   ctx.fillStyle = 'black'
      //   // Цикл для отображения значений по Y
      //   for (let i = 0; i < 6; i++) {
      //     ctx.fillText((5 - i) * 20 + '', 4, i * 80 + 60)
      //     ctx.beginPath()
      //     ctx.moveTo(25, i * 80 + 60)
      //     ctx.lineTo(30, i * 80 + 60)
      //     ctx.stroke()
      //   }

      //   // Массив с меткам месяцев
      //   let labels = ['JAN', 'FEB', 'MAR', 'APR', 'MAY']

      //   // Выводим меток
      //   for (var i = 0; i < 5; i++) {
      //     ctx.fillText(labels[i], 50 + i * 100, 475)
      //   }

      //   // Объявляем массив данных графика
      //   // let data = [10, 53, 39, 54, 21]
      //   let data = [90, 80, 45, 52, 34, 76, 22, 34, 76, 66, 54, 90, 12, 35]

      //   // Назначаем зелёный цвет для графика
      //   ctx.fillStyle = theme.palette.primary.main.toString()

      //   // Цикл для от рисовки графиков
      //   for (let i = 0; i < data.length; i++) {
      //     let dp = data[i]
      //     ctx.fillRect(40 + i * 100, 460 - dp * 5, 50, dp * 5)
      //   }
      // }
    }

    return () => {}
  }, [canvasRef, theme])

  return (
    <div>
      <canvas
        ref={canvasRef}
        width="750"
        height="450"
        className={styles.canvas}
      ></canvas>
    </div>
  )
}

export default Chart
