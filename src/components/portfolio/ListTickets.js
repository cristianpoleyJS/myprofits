import { useEffect } from 'react'
import ListStocks from 'components/portfolio/ListStocks'
import ListCryptos from 'components/portfolio/ListCryptos'
import 'assets/styles/ListTickets.css'
import { useSelector, useDispatch } from 'react-redux'
import { ADD_STOCK, ADD_CRYPTO, getStocks, getCryptos } from '../../store/actions/portfolioActions'


const Portfolio = () => {
    const dispatch = useDispatch()
    const email = useSelector(state => state.auth.user.email)
    const stocks = useSelector(state => state.portfolio.stocks)
    const cryptos = useSelector(state => state.portfolio.cryptos)
    
    useEffect(() => {
        getStocks(email).then(newStocks => {
            newStocks.docs.forEach((doc) => {
                dispatch({ type: ADD_STOCK, payload: {
                    ...doc.data(),
                    id: doc.id
                } })
            })
        })
        getCryptos(email).then(newCryptos => {
            newCryptos.docs.forEach((doc) => {
                dispatch({ type: ADD_CRYPTO, payload: {
                    ...doc.data(),
                    id: doc.id
                } })
            })
        })
    }, [email, dispatch])

    return (
        // BTC	5.277,54€	0,18956327	42431,715	20,69%	52,41%	2.765,95€
        // ETH	1.200,60€	2,16618421	3676,61406	4,71%	563,35%	6.763,62€
        // LTC	540,00€	5,05108297	136,4825175	2,12%	27,66%	149,38€
        <section className="list-tickets">
            <div className="list-tickets__header">
                <span />
                <span>Euros Invertidos</span>
                <span>Número de acciones</span>
                <span>Valor actual</span>
                <span>Porcentaje SC</span>
                <span>Ganancias %</span>
                <span>Ganancias actuales</span>
            </div>
            <ListStocks stocks={stocks}/>
            <ListCryptos cryptos={cryptos}/>
        </section>
    )
}

export default Portfolio