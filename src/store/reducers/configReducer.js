import { CURRENCY_EUR } from 'utils/constants'

const SET_LANGAUGE = 'config/set_language'
const SET_CURRENCY = 'config/set_currency'
const SET_THEME = 'config/set_theme'

const initialState = {
    language: navigator.language,
    currency: CURRENCY_EUR,
    theme: window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

const reducers = {
    [`${SET_LANGAUGE}`]: (state, { lang }) => {
      state.language = lang
      return state
    },
    [`${SET_CURRENCY}`]: (state, { currency }) => {
      state.currency = currency
      return state
    },
    [`${SET_THEME}`]: (state, { theme }) => {
      state.theme = theme
      return state
    }
}

const configReducer = (state = initialState, action) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.payload)
    : state
}

export default configReducer