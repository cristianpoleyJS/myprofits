import { Ticker } from './Ticker'

export class Crypto extends Ticker {
        
    constructor ({ ticker, price, moneyInvested, numCoins }) {
        super({ ticker, price, moneyInvested })
        this.numCoins = numCoins
    }
}