import { ADD_TICKET, EDIT_TICKET, REMOVE_TICKET } from 'store/actions/ticketsActions'

const initialState = {
    tickets: []
}

const reducers = {
    [`${ADD_TICKET}`]: (state, ticket) => {
        const newTickets = state.tickets
        newTickets.push(ticket)
        return {
            ...state,
            tickets: [...newTickets]
        }
    },
    [`${EDIT_TICKET}`]: (state, { id, data }) => {
        // state.tickets.set(id, data)
        return state
    },
    [`${REMOVE_TICKET}`]: (state, { id }) => {
        // state.tickets.delete(id)
        return state
    }
}

const ticketsReducer = (state = initialState, action) => {
    return reducers[action.type]
      ? reducers[action.type](state, action.payload)
      : state
  }

export default ticketsReducer