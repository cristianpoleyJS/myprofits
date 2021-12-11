import 'assets/styles/ListTickets.css'

const Ticket = ({ ticket }) => {
    return (
        <div className="ticket">
            <span>{ticket.ticket}</span>
            <span>{ticket.moneyInvested}</span>
            <span>{ticket.numCoins || ticket.numStocks}</span>
            <span>60000</span>
            <span>Porcentaje SC</span>
            <span>Ganancias %</span>
            <span>Ganancias actuales</span>
        </div>
    )
}

export default Ticket