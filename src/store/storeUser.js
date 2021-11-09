const CHANGE_LOGGED = 'CHANGE_LOGGED'
const SET_USER = 'SET_USER'

const initialState = {
  user: new Map(),
  logged: false
}

const reducers = {
    [`${CHANGE_LOGGED}`]: (state) => {
      state.logged = !state.logged 
      return state
    },
    [`${SET_USER}`]: (state, { user }) => {
      state.user = user
      return state
    }
}

const userReducer = (state = initialState, action) => {
    if (reducers[action.type]) {
        return reducers[action.type](state, action.payload)
    }
    return state
}

export default userReducer