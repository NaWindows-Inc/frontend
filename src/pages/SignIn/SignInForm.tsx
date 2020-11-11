import React from 'react'
import { FormikHelpers, useFormik } from 'formik'
import { Button, TextField } from '@material-ui/core'
import * as Yup from 'yup'

import styles from '../../components/AuthPage/style.module.scss'

const SignInSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string().required('Required'),
})

export interface FormValues {
  email: string
  password: string
}

const initialValues: FormValues = {
  email: '',
  password: '',
}

interface Props {
  handleSubmit: (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>,
  ) => void
}

const SignInForm: React.FC<Props> = ({ handleSubmit }) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SignInSchema,
    onSubmit: handleSubmit,
  })

  const { values, errors, touched, handleBlur, handleChange } = formik

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <TextField
        variant="outlined"
        id="email"
        label="Email"
        required
        onBlur={handleBlur}
        error={!!(errors['email'] && touched['email'])}
        helperText={errors.email && touched.email ? errors.email : null}
        onChange={handleChange}
        value={values.email}
      />
      <TextField
        variant="outlined"
        id="password"
        type="password"
        label="Password"
        required
        onBlur={handleBlur}
        error={!!(errors['password'] && touched['password'])}
        helperText={
          errors.password && touched.password ? errors.password : null
        }
        onChange={handleChange}
        value={values.password}
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
        className={styles.submit}
        disabled={formik.isSubmitting}
      >
        Sign in
      </Button>
    </form>
  )
}

export default SignInForm
