import { useEffect } from 'react'
import ListTotal from 'components/portfolio/ListTotal'
import ListStocks from 'components/portfolio/ListStocks'
import ListCryptos from 'components/portfolio/ListCryptos'
import 'assets/styles/ListTickets.css'
import { useSelector, useDispatch } from 'react-redux'
import { ADD_STOCK, ADD_CRYPTO, getStocks, getCryptos } from '../../store/actions/portfolioActions'
import { getCrypto, getStock } from 'api'


const Portfolio = () => {
    const dispatch = useDispatch()
    const email = useSelector(state => state.auth.user.email)
    const stocks = useSelector(state => state.portfolio.stocks)
    const cryptos = useSelector(state => state.portfolio.cryptos)
    
    useEffect(() => {
        Promise
            .all([getStocks(email), getCryptos(email)])
            .then(([ newStocks, newCryptos ]) => {
                newStocks.docs.forEach(async (doc) => {
                    const res = await getStock(doc.data().ticket)
                    console.log(res)
                    dispatch({ type: ADD_STOCK, payload: {
                        ...doc.data(),
                        id: doc.id
                    } })
                })
                newCryptos.docs.forEach(async (doc) => {
                    const res = await getCrypto(doc.data().ticket)
                    console.log(res)
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
                <span>€ invested</span>
                <span>Nº tickets</span>
                <span>Current value €</span>
                <span>Percent</span>
                <span>Profits %</span>
                <span>Profits €</span>
                <span />
            </div>
            <ListStocks stocks={stocks}/>
            <ListCryptos cryptos={cryptos}/>
            <ListTotal stocks={stocks} cryptos={cryptos} />
        </section>
    )
}

export default Portfolio