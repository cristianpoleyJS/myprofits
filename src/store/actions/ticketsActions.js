import { getListTicketsFromFirestore } from 'api'

export const REMOVE_TICKET = 'tickets/remove'
export const EDIT_TICKET = 'tickets/edit'
export const ADD_TICKET = 'tickets/add'

export const getListTickets = async (userEmail) => {
    return getListTicketsFromFirestore({ userEmail })
}