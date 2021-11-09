const REMOVE_TICKET = 'REMOVE_TICKET'
const EDIT_TICKET = 'EDIT_TICKET'
const ADD_TICKET = 'ADD_TICKET'

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
    if (reducers[action.type]) {
        return reducers[action.type](state, action.payload)
    }
    return state
}

export default ticketsReducer