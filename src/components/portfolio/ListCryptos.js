import Ticket from 'components/portfolio/Ticket'

const ListCryptos = ({ cryptos }) => {
    return (
        <ul>
            {cryptos.map(crypto => 
                <Ticket ticket={crypto} key={crypto.id}/>
            )}
        </ul>
    )
}

export default ListCryptos
