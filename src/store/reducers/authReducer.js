import { LOGIN_SUCCESS, LOGIN_ERROR, IS_LOGGED } from 'store/actions/authActions'

const initialState = {
  user: null,
  error: null,
  isLogged: null
}

const reducers = {
    [`${IS_LOGGED}`]: (state, value) => {
      return {
        ...state,
        isLogged: value
      }
    },
    [`${LOGIN_SUCCESS}`]: (state, user) => {
      return {
        ...state,
        user: user
      }
    },
    [`${LOGIN_ERROR}`]: (state, error) => {
      return {
        ...state,
        error: error
      }
    },
}

const authReducer = (state = initialState, action) => {
  return reducers[action.type]
    ? reducers[action.type](state, action.payload)
    : state
}

export default authReducer