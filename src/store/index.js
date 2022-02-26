import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducer from './reducers/rootReducer'

export const middleware = store => next => action => {
  if (typeof action === 'function') {
    return action(store.dispatch, store.getState)
  }
  return next(action)
}

let store = createStore(reducer, composeWithDevTools(
  applyMiddleware(middleware)
))

export default store