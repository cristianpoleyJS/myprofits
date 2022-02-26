import { useEffect } from 'react'
import ListTotal from 'components/portfolio/ListTotal'
import ListStocks from 'components/portfolio/ListStocks'
import ListCryptos from 'components/portfolio/ListCryptos'
import 'assets/styles/ListTickers.css'
import { useSelector, useDispatch } from 'react-redux'
import { ADD_STOCK, ADD_CRYPTO, getStocks, getCryptos } from 'store/actions/portfolioActions'
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
                    const res = await getStock(doc.data().ticker)
                    const globalQuote = res['Global Quote']
                    if (globalQuote) {
                        const price = globalQuote['05. price']
                        dispatch({ type: ADD_STOCK, payload: {
                            ...doc.data(),
                            price,
                            profitsPercent: ((doc.data().numStocks * price) / doc.data().moneyInvested) - 1,
                            profits: (doc.data().numStocks * price) - doc.data().moneyInvested,
                            id: doc.id
                        } })
                    }
                })
                const newCryptosData = []
                const newCryptosDataTitle = []
                newCryptos.docs.forEach(async (doc) => {
                    newCryptosData.push({ ...doc.data(), id: doc.id })
                    newCryptosDataTitle.push(getCrypto(doc.data().ticker.toLowerCase()))
                })
                Promise.all(newCryptosDataTitle).then(data => {
                    let i = 0
                    data.forEach(({ data}) => {
                        const price = data.priceUsd * 0.87
                        dispatch({ type: ADD_CRYPTO, payload: {
                            ...newCryptosData[i],
                            price,
                            profitsPercent: ((newCryptosData[i].numCoins * price) / newCryptosData[i].moneyInvested) - 1,
                            profits: (newCryptosData[i].numCoins * price) - newCryptosData[i].moneyInvested,
                            id: newCryptosData[i]
                        } })
                        i++
                    })
                })
            })
    }, [email, dispatch])

    return (
        <section className="list-tickers">
            <div className="list-tickers__header">
                <span />
                <span>Dinero invertido</span>
                <span>Nº tickers</span>
                <span>Valor actual</span>
                <span>Beneficio %</span>
                <span>Beneficio €</span>
                <span />
            </div>
            <ListStocks stocks={stocks}/>
            <ListCryptos cryptos={cryptos}/>
            <ListTotal stocks={stocks} cryptos={cryptos} />
        </section>
    )
}

export default Portfolio