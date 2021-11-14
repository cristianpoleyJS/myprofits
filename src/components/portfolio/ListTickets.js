import Ticket from 'components/portfolio/Ticket'

const ListTickets = ({ tickets }) => {
    return (
        <ul>
            {tickets.map(ticket => 
                <Ticket ticket={ticket} key={ticket.id}/>
            )}
        </ul>
    )
}

export default ListTickets


{/* Euros Invertidos	Número de acciones	Valor actual	Porcentaje SC	Ganancias %	Ganancias actuales
        BTC	5.277,54€	0,18956327	56155,90923	20,48%	101,71%	5.367,56€
        ETH	1.200,60€	2,16618421	4012,212506	4,66%	623,90%	7.490,59€ */}

        // <Ticket ticket={ticket} key={ticket.id}/>