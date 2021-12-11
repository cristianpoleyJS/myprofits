import Ticket from 'components/portfolio/Ticket'

const ListCryptos = ({ cryptos }) => {
    return (
        cryptos.map(crypto => <Ticket ticket={crypto} key={crypto.id}/>)
    )
}

export default ListCryptos
