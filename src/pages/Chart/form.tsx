import React from 'react'
import { Button, TextField, useTheme } from '@material-ui/core'

import styles from './style.module.scss'
import { useFormik } from 'formik'

export interface FormValues {
  firstMac: string
  secondMac: string
  thirdMac: string
}

const initialValues: FormValues = {
  firstMac: '',
  secondMac: '',
  thirdMac: '',
}

interface IProps {
  handleSubmit: (values: FormValues) => void
}

const ChartForm = (props: IProps) => {
  const theme = useTheme()

  const { handleSubmit } = props

  const formik = useFormik({
    initialValues: initialValues,
    onSubmit: handleSubmit,
  })

  const { values, handleChange } = formik

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className={styles.form}>
        <div className={styles.formGrid}>
          <label>
            <div
              className={styles.line}
              style={{ borderColor: theme.palette.success.main }}
            ></div>
            <TextField
              id="firstMac"
              placeholder="AA:BB:CC:DD:EE:FF"
              label="MAC-address"
              variant="outlined"
              onChange={handleChange}
              value={values.firstMac}
            />
          </label>
          <label>
            <div
              className={styles.line}
              style={{ borderColor: theme.palette.warning.main }}
            ></div>
            <TextField
              id="secondMac"
              placeholder="AA:BB:CC:DD:EE:FF"
              label="MAC-address"
              variant="outlined"
              onChange={handleChange}
              value={values.secondMac}
            />
          </label>
          <label>
            <div
              className={styles.line}
              style={{ borderColor: theme.palette.info.main }}
            ></div>
            <TextField
              id="thirdMac"
              placeholder="AA:BB:CC:DD:EE:FF"
              label="MAC-address"
              variant="outlined"
              onChange={handleChange}
              value={values.thirdMac}
            />
          </label>
        </div>
        <Button
          type="submit"
          variant="outlined"
          className={styles.submitButton}
        >
          Submit
        </Button>
      </div>
    </form>
  )
}

export default ChartForm
