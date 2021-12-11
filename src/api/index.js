import { TYPE_CRYPTO, TYPE_STOCK } from 'utils/constants'
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

export const addStock = ({ stock, userEmail }) => {
    return database.collection(`/namespaces/${userEmail}/stocks`).add({
        ...stock,
        type: TYPE_STOCK,
        createdAt: new Date()
    })
}

export const addCrypto = ({ crypto, userEmail }) => {
    return database.collection(`/namespaces/${userEmail}/cryptos`).add({
        ...crypto,
        type: TYPE_CRYPTO,
        createdAt: new Date()
    })
}

export const editStock = ({ id, userEmail, stock }) => {
    return database.collection(`/namespaces/${userEmail}/stocks`).doc(id).set(stock)
}

export const editCrypto = ({ id, userEmail, crypto }) => {
    return database.collection(`/namespaces/${userEmail}/cryptos`).doc(id).set(crypto)
}

export const deleteStock = ({ id, userEmail }) => {
    return database.collection(`/namespaces/${userEmail}/stocks`).doc(id).delete()
}

export const deleteCrypto = ({ id, userEmail }) => {
    return database.collection(`/namespaces/${userEmail}/cryptos`).doc(id).delete()
}

export const getCrypto = async (coin) => {
    const res = await fetch(`https://api.coincap.io/v2/assets/${coin}`)
    return res.json()
}

export const getStock = async (symbol) => {
    const { investing } = require('investing-com-api');
    const res = await investing(symbol)
    console.log(res)
}