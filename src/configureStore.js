import ReduxThunk from 'redux-thunk'
import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'

import createRootReducer from 'reducers'

export const history = createBrowserHistory()

export const configureStore = (preloadedState) => {
  const middlewares = [
    ReduxThunk,
    routerMiddleware(history)
  ]

  const enhancers = (middlewares) => {
    if (
      process.env.NODE_ENV === 'development' &&
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ) {
      return window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__(middlewares)
    }
    else {
      return compose(middlewares)
    }
  }

  return createStore(
    createRootReducer(history),
    preloadedState,
    enhancers(applyMiddleware(...middlewares))
  )
}

export default configureStore
