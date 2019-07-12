import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { MovieIndexPage } from 'pages/movie'

function Routes () {
  return (
    <Switch>
      <Route path='/' component={MovieIndexPage} exact />
      <Route path='/test' render={() => (<h1>TEST PAGE</h1>)} />
    </Switch>
  )
}

export default Routes
