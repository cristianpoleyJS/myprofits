import Ticket from 'components/portfolio/Ticket'

const ListStocks = ({ stocks }) => {
    return (
        stocks.map(stock => <Ticket ticket={stock} key={stock.id}/>)
    )
}

export default ListStocks
