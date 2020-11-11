import React from 'react'
import { FormikHelpers } from 'formik'
import AuthPage from '../../components/AuthPage'
import Routes from '../../constants/routes'
import SignInForm, { FormValues } from './SignInForm'
import withAuthorization from '../../hocs'
import { useDispatch } from 'react-redux'
import { authUser } from '../../redux/auth/actions'

const SignIn = () => {
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
      title="Sign In"
      linkTo={Routes.SIGN_UP}
      linkMessage="Don't have an account? Sign Up"
    >
      <SignInForm handleSubmit={handleSubmit} />
    </AuthPage>
  )
}

const condition = (isAuth: boolean) => isAuth

export default withAuthorization(condition, Routes.DASHBOARD)(SignIn)
