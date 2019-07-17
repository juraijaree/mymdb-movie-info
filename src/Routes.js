import React from 'react'
import { Switch, Route } from 'react-router-dom'

import PrivateRoute from 'components/PrivateRoute/PrivateRoute'
import { MovieEditPage, MovieIndexPage, MovieNewPage, MovieShowPage } from 'pages/movie'

function Routes () {
  return (
    <Switch>
      <Route path={['/', '/movies']} component={MovieIndexPage} exact />
      <PrivateRoute path='/new' component={MovieNewPage} exact />
      <PrivateRoute path='/:id/edit' component={MovieEditPage} />
      <Route path='/:id' component={MovieShowPage} exact/>
    </Switch>
  )
}

export default Routes
