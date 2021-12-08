import { ADD_CRYPTO, ADD_STOCK, EDIT_STOCK, REMOVE_STOCK } from 'store/actions/portfolioActions'

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
        // state.portfolio.set(id, data)
        return state
    },
    [`${REMOVE_STOCK}`]: (state, { id }) => {
        // state.portfolio.delete(id)
        return state
    }
}

const portfolioReducer = (state = initialState, action) => {
    return reducers[action.type]
      ? reducers[action.type](state, action.payload)
      : state
  }

export default portfolioReducer