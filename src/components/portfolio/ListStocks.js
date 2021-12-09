import Ticket from 'components/portfolio/Ticket'

const ListStocks = ({ stocks }) => {
    return (
        <ul>
            {stocks.map(stock => 
                <Ticket ticket={stock} key={stock.id}/>
            )}
        </ul>
    )
}

export default ListStocks
