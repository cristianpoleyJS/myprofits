import Ticker from 'components/portfolio/Ticker'

const ListStocks = ({ stocks }) => {
    return (
        stocks.map(stock => <Ticker ticker={stock} key={stock.id}/>)
    )
}

export default ListStocks
