import { useEffect } from 'react'
import ListStocks from 'components/portfolio/ListStocks'
import ListCryptos from 'components/portfolio/ListCryptos'
import Resume from 'components/portfolio/Resume'
import Chart from 'components/portfolio/Chart'
import FormStock from './add-ticket/FormStock'
import FormCrypto from './add-ticket/FormCrypto'
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
        <section className="portfolio">
            <div className="portfolio__wrapper-form">
                <FormStock email={email}/>
                <FormCrypto email={email}/>
            </div>
            <ListStocks stocks={stocks}/>
            <ListCryptos cryptos={cryptos}/>
            <Resume />
            <Chart />
        </section>
    )
}

export default Portfolio