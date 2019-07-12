import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

export function PrivateRoute ({
  component: Component,
  redirectPath,
  token = 'acb1234',
  componentProps,
  ...rest
}) {
  return (
    <Route
      {...rest}
      render={props => (
        token ? (
          <Component
            {...props}
            {...componentProps}
          />
        ) : (
          <Redirect to={redirectPath} />
        )
      )}
    />
  )
}

PrivateRoute.propTypes = {
  component: PropTypes.node,
  token: PropTypes.string,
  redirectPath: PropTypes.string,
  componentProps: PropTypes.node
}

PrivateRoute.defaultProps = {
  component: null,
  redirectPath: '/'
}

export default PrivateRoute
