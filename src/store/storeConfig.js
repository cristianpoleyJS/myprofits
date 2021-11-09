const SET_LANGAUGE = 'SET_LANGAUGE'
const SET_CURRENCY = 'SET_CURRENCY'
const SET_THEME = 'SET_THEME'

const initialState = {
    language: navigator.language,
    currency: 'EUR',
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
    if (reducers[action.type]) {
        return reducers[action.type](state, action.payload)
    }
    return state
}

export default configReducer