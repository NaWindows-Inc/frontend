import React from 'react'
import { FormikHelpers, useFormik } from 'formik'
import { Button, TextField } from '@material-ui/core'
import * as Yup from 'yup'

import styles from '../../components/AuthPage/style.module.scss'

const SignUpSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup.string()
    .min(6, 'Password must be at least 6 characters')
    .required('Required'),
})

export interface FormValues {
  username: string
  email: string
  password: string
}

const initialValues: FormValues = {
  username: '',
  email: '',
  password: '',
}

interface Props {
  handleSubmit: (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>,
  ) => void
}

const SignUpForm: React.FC<Props> = ({ handleSubmit }) => {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: SignUpSchema,
    onSubmit: handleSubmit,
  })

  const { values, errors, touched, handleBlur, handleChange } = formik

  return (
    <form onSubmit={formik.handleSubmit} className={styles.form}>
      <TextField
        variant="outlined"
        id="username"
        label="Username"
        required
        onBlur={handleBlur}
        error={!!(errors['username'] && touched['username'])}
        helperText={
          errors.username && touched.username ? errors.username : null
        }
        onChange={handleChange}
        value={values.username}
      />
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
        Sign up
      </Button>
    </form>
  )
}

export default SignUpForm
