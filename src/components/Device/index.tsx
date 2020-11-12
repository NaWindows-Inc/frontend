import React from 'react'
import Typography from '@material-ui/core/Typography'

interface Props {
  mac: string
  date: string
  level: number
}

const Device: React.FC<Props> = ({ mac, date, level }) => {
  return (
    <div>
      <Typography variant="h5">Mac: {mac}</Typography>
      <Typography>Date: {date}</Typography>
      <Typography>Level: {level}%</Typography>
    </div>
  )
}

export default Device
