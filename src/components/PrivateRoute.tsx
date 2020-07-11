import React from 'react'
import { userService } from '../services/UserService'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {

  // Add your own authentication on the below line.
  const isLoggedIn = userService.isLoggedIn()

  return (
    <Route
      {...rest}
      render={props =>
        isLoggedIn ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
        )
      }
    />
  )
}

export default PrivateRoute