export const CHANGE_IS_LOGGED = 'auth/change_isLogged'
export const LOGIN_SUCCESS = 'auth/login_success'
export const LOGIN_ERROR = 'auth/login_error'

const initialState = {
  user: new Map(),
  error: null,
  isLogged: false
}

const reducers = {
    [`${CHANGE_IS_LOGGED}`]: (state) => {
      state.isLogged = !state.isLogged 
      return state
    },
    [`${LOGIN_SUCCESS}`]: (state, { user }) => {
      state.user = user
      return state
    },
    [`${LOGIN_ERROR}`]: (state, { error }) => {
      state.error = error
      return state
    },
}

const authReducer = (state = initialState, action) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.payload)
    : state
}

export default authReducer