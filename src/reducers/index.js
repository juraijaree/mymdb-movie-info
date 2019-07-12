import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'

import entities from './entities'
import collections from './collections'

export default (history) => combineReducers({
  router: connectRouter(history),
  entities,
  collections
})
