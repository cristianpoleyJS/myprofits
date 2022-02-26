import { CURRENCY_EUR } from 'utils/constants'

const SET_LANGAUGE = 'config/set_language'
const SET_CURRENCY = 'config/set_currency'

const initialState = {
    language: navigator.language,
    currency: CURRENCY_EUR
}

const reducers = {
    [`${SET_LANGAUGE}`]: (state, { lang }) => {
      state.language = lang
      return state
    },
    [`${SET_CURRENCY}`]: (state, { currency }) => {
      state.currency = currency
      return state
    }
}

const configReducer = (state = initialState, action) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.payload)
    : state
}

export default configReducer