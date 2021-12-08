import { database } from '../firebase'

export const getListStocksFromFirestore = ({ userEmail }) => {
    return database
        .collection(`/namespaces/${userEmail}/stocks`)
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
    return database.collection(`/namespaces/${userEmail}/stocks`).add({
        ...stock,
        type: 'stock',
        createdAt: new Date()
    })
}

export const addCrypto = ({crypto, userEmail}) => {
    return database.collection(`/namespaces/${userEmail}/cryptos`).add({
        ...crypto,
        type: 'crypto',
        createdAt: new Date()
    })
}


export const deleteStock = ({ id, userEmail }) => {
    return database.collection(`/namespaces/${userEmail}/stocks`).doc(id).delete()
}