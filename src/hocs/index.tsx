import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import Routes from '../constants/routes'

const withAuthorization = (
  condition: (isAuth: boolean) => boolean,
  redirectToPath: string = Routes.SIGN_IN,
) => <BaseProps extends {}>(Component: React.ComponentType<BaseProps>) => {
  interface Props extends RouteComponentProps {}

  const WithAuthorization: React.FC<Props> = ({
    history,
    location,
    match,
    ...restProps
  }) => {
    const isAuth = useSelector((state) => state.auth.isAuth)

    useEffect(() => {
      if (condition(isAuth)) {
        history.push(redirectToPath)
      }
    }, [isAuth, history])

    return <Component {...(restProps as BaseProps)} />
  }

  return withRouter(WithAuthorization)
}

export default withAuthorization
