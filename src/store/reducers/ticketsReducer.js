const REMOVE_TICKET = 'tickets/remove'
const EDIT_TICKET = 'tickets/edit'
const ADD_TICKET = 'tickets/add'

const initialState = {
    tickets: new Map()
}

const reducers = {
    [`${ADD_TICKET}`]: (state, { id, data }) => {
        state.tickets.set(id, data)
        return state
    },
    [`${EDIT_TICKET}`]: (state, { id, data }) => {
        state.tickets.set(id, data)
        return state
    },
    [`${REMOVE_TICKET}`]: (state, { id }) => {
        state.tickets.delete(id)
        return state
    }
}

const ticketsReducer = (state = initialState, action) => {
    return reducers[action.type]
      ? reducers[action.type](state, action.payload)
      : state
  }

export default ticketsReducer