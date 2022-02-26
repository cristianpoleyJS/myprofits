import { ADD_CRYPTO, EDIT_CRYPTO, REMOVE_CRYPTO, ADD_STOCK, EDIT_STOCK, REMOVE_STOCK, CLEAN_PORTFOLIO } from 'store/actions/portfolioActions'

const initialState = {
    stocks: [],
    cryptos: []
}

const reducers = {
    [`${ADD_STOCK}`]: (state, stock) => {
        const newStocks = state.stocks
        newStocks.push(stock)
        return {
            ...state,
            stocks: [...newStocks]
        }
    },
    [`${ADD_CRYPTO}`]: (state, crypto) => {
        const newCryptos = state.cryptos
        newCryptos.push(crypto)
        return {
            ...state,
            cryptos: [...newCryptos]
        }
    },
    [`${EDIT_STOCK}`]: (state, { id, data }) => {
        let foundStock = state.stocks.find(c => c.id === id)
        // eslint-disable-next-line
        foundStock = {
            ...data
        }
        return state
    },
    [`${REMOVE_STOCK}`]: (state, { id }) => {
        const newStocks = state.stocks.filter(c => c.id !== id)
        return {
            ...state,
            stocks: [...newStocks]
        }
    },
    [`${EDIT_CRYPTO}`]: (state, { id, data }) => {
        let foundCrypto = state.cryptos.find(s => s.id === id)
        // eslint-disable-next-line
        foundCrypto = {
            ...data
        }
        return state
    },
    [`${REMOVE_CRYPTO}`]: (state, { id }) => {
        const newCryptos = state.cryptos.filter(s => s.id !== id)
        return {
            ...state,
            cryptos: [...newCryptos]
        }
    },
    [`${CLEAN_PORTFOLIO}`]: () => {
        return {
            stocks: [],
            cryptos: []
        }
    }
}

const portfolioReducer = (state = initialState, action) => {
    return reducers[action.type]
      ? reducers[action.type](state, action.payload)
      : state
  }

export default portfolioReducer