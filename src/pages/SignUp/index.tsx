import React from 'react'
import AuthPage from '../../components/AuthPage'
import Routes from '../../constants/routes'
import SignUpForm, { FormValues } from './SignUpForm'
import { FormikHelpers } from 'formik'
import withAuthorization from '../../hocs'
import { useDispatch } from 'react-redux'
import { authUser } from '../../redux/auth/actions'

const SignUp = () => {
  const dispatch = useDispatch()

  const handleSubmit = (
    values: FormValues,
    formikHelpers: FormikHelpers<FormValues>,
  ) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2))
      dispatch(authUser())
    }, 3000)
  }

  return (
    <AuthPage
      title="Sign Up"
      linkTo={Routes.SIGN_IN}
      linkMessage="Already have an account? Sign in"
    >
      <SignUpForm handleSubmit={handleSubmit} />
    </AuthPage>
  )
}

const condition = (isAuth: boolean) => isAuth

export default withAuthorization(condition, Routes.DASHBOARD)(SignUp)
