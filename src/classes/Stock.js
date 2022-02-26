import { Ticker } from './Ticker'

export class Stock extends Ticker {

    constructor ({ ticker, price, moneyInvested, opened = false, numStocks }) {
        super({ ticker, price, moneyInvested })
        this.opened = opened
        this.numStocks = numStocks
    }
}