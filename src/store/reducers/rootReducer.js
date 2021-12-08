import { combineReducers } from 'redux'

import portfolioReducer from './portfolioReducer'
import authReducer from './authReducer'
import configReducer from './configReducer'

const reducer = combineReducers({
  portfolio: portfolioReducer,
  auth: authReducer,
  config: configReducer
})

export default reducer