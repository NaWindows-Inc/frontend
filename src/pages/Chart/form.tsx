import React from 'react'
import { Button, TextField, useTheme } from '@material-ui/core'

import styles from './style.module.scss'

const ChartForm = () => {
  const theme = useTheme()

  return (
    <div className={styles.form}>
      <div className={styles.formGrid}>
        <label>
          <div
            className={styles.line}
            style={{ borderColor: theme.palette.success.main }}
          ></div>
          <TextField label="MAC-address" variant="outlined" />
        </label>
        <label>
          <div
            className={styles.line}
            style={{ borderColor: theme.palette.warning.main }}
          ></div>
          <TextField label="MAC-address" variant="outlined" />
        </label>
        <label>
          <div
            className={styles.line}
            style={{ borderColor: theme.palette.info.main }}
          ></div>
          <TextField label="MAC-address" variant="outlined" />
        </label>
      </div>
      <Button
        className={styles.submitButton}
        variant="outlined"
        // color="primary"
      >
        Submit
      </Button>
    </div>
  )
}

export default ChartForm
