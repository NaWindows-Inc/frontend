import React from 'react'
import Routes from '../../constants/routes'
import withAuthorization from '../../hocs'

const Dashboard = () => {
  return <div>Dashboard</div>
}

const condition = (isAuth: boolean) => !isAuth

export default withAuthorization(condition, Routes.SIGN_IN)(Dashboard)
