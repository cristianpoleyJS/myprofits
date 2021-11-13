import { combineReducers } from 'redux'

import ticketsReducer from './ticketsReducer'
import authReducer from './authReducer'
import configReducer from './configReducer'

const reducer = combineReducers({
  tickets: ticketsReducer,
  auth: authReducer,
  config: configReducer
})

export default reducer