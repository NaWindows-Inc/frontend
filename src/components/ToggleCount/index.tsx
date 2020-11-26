import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab'
import React from 'react'

interface Props {
  countValue: number
  firstValue: number
  secondValue: number
  thirdValue: number
  handleChangeCount: (newCount: number) => void
}

const ToggleCount: React.FC<Props> = ({
  countValue,
  firstValue,
  secondValue,
  thirdValue,
  handleChangeCount,
}) => {
  return (
    <div>
      <ToggleButtonGroup
        value={countValue}
        exclusive
        onChange={(e, value) => handleChangeCount(value)}
        aria-label="text alignment"
      >
        <ToggleButton value={firstValue} aria-label="left aligned">
          {firstValue}
        </ToggleButton>
        <ToggleButton value={secondValue} aria-label="centered">
          {secondValue}
        </ToggleButton>
        <ToggleButton value={thirdValue} aria-label="right aligned">
          {thirdValue}
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}

export default ToggleCount
