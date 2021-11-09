import { Ticket } from './Ticket'

export class Stock extends Ticket {

    constructor ({ ticket, price, moneyInvested, opened = false, numStocks }) {
        super({ ticket, price, moneyInvested })
        this.opened = opened
        this.numStocks = numStocks
    }
}