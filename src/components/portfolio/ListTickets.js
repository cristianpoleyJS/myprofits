import { useEffect } from 'react'
import ListTotal from 'components/portfolio/ListTotal'
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
        Promise
            .all([getStocks(email), getCryptos(email)])
            .then(([ newStocks, newCryptos ]) => {
                newStocks.docs.forEach((doc) => {
                    dispatch({ type: ADD_STOCK, payload: {
                        ...doc.data(),
                        id: doc.id
                    } })
                })
                newCryptos.docs.forEach((doc) => {
                    dispatch({ type: ADD_CRYPTO, payload: {
                        ...doc.data(),
                        id: doc.id
                    } })
                })
            })
    }, [email, dispatch])

    return (
        <section className="list-tickets">
            <div className="list-tickets__header">
                <span />
                <span>Euros Invertidos</span>
                <span>Nº de acciones</span>
                <span>Valor actual</span>
                <span>Porcentaje SC</span>
                <span>Ganancias %</span>
                <span>Ganancias actuales</span>
                <span />
            </div>
            <ListStocks stocks={stocks}/>
            <hr/>
            <ListCryptos cryptos={cryptos}/>
            <hr/>
            <ListTotal stocks={stocks} cryptos={cryptos} />
        </section>
    )
}

export default Portfolio