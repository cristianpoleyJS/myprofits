import { database } from '../firebase'

export const getListTicketsFromFirestore = ({ userEmail }) => {
    return database
        .collection(`/namespaces/${userEmail}/tickets`)
        .orderBy('createdAt', 'desc')
        .get()
}

export const getListCryptosFromFirestore = ({ userEmail }) => {
    return database
        .collection(`/namespaces/${userEmail}/cryptos`)
        .orderBy('createdAt', 'desc')
        .get()
}

export const addStock = ({stock, userEmail}) => {
    return database.collection(`/namespaces/${userEmail}/tickets`).add({
        ...stock,
        type: 'stock',
        createdAt: new Date()
    })
}

export const addCrypto = ({crypto, userEmail}) => {
    return database.collection(`/namespaces/${userEmail}/tickets`).add({
        ...crypto,
        type: 'crypto',
        createdAt: new Date()
    })
}


export const deleteTicket = ({ id, userEmail }) => {
    return database.collection(`/namespaces/${userEmail}/tickets`).doc(id).delete()
}