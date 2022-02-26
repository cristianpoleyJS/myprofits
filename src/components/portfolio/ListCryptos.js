import Ticker from 'components/portfolio/Ticker'

const ListCryptos = ({ cryptos }) => {
    return (
        cryptos.map(crypto => <Ticker ticker={crypto} key={crypto.id}/>)
    )
}

export default ListCryptos
