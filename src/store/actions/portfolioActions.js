import { getListStocksFromFirestore, getListCryptosFromFirestore } from 'api'

export const CLEAN_PORTFOLIO = 'portfolio/remove'
export const REMOVE_STOCK = 'stocks/remove'
export const REMOVE_CRYPTO = 'cryptos/remove'
export const EDIT_CRYPTO = 'cryptos/edit'
export const ADD_CRYPTO = 'cryptos/add'
export const EDIT_STOCK = 'stocks/edit'
export const ADD_STOCK = 'stocks/add'

export const getStocks = (userEmail) => {
    return getListStocksFromFirestore({ userEmail })
}

export const getCryptos = (userEmail) => {
    return getListCryptosFromFirestore({ userEmail })
}