import { Ticket } from './Ticket'

export class Crypto extends Ticket {
        
    constructor ({ ticket, price, moneyInvested, numCoins }) {
        super({ ticket, price, moneyInvested })
        this.numCoins = numCoins
    }
}