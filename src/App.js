import React from 'react'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'

import configureStore, { history } from 'configureStore'

import CoreLayout from 'components/CoreLayout/CoreLayout'

import Routes from './Routes'

import './styles/styles.scss'

const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <CoreLayout>
          <Routes />
        </CoreLayout>
      </ConnectedRouter>
    </Provider>
  )
}

export default App
