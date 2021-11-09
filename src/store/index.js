import { createStore, combineReducers } from 'redux'
import ticketsReducer from './storeTickets'
import userReducer from './storeUser'
import configReducer from './storeConfig'

export const reducer = combineReducers({
  tickets: ticketsReducer,
  user: userReducer,
  config: configReducer
})

let store = createStore(reducer)

// Guardar la lista de tickets de la base de datos
// Guardar mi configuración de idioma
// Guardar mi configuración de tema
// Guardar usuario

export default store