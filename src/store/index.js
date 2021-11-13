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

// Guardar la lista de tickets de la base de datos
// Guardar mi configuración de idioma
// Guardar mi configuración de tema
// Guardar usuario

export default store