import 'assets/styles/ListTickers.css'
import { REMOVE_STOCK, REMOVE_CRYPTO } from 'store/actions/portfolioActions'
import Button from 'components/common/Button'
import IconEdit from 'components/icons/IconEdit'
import IconRemove from 'components/icons/IconRemove'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCrypto, deleteStock } from 'api'
import { TYPE_CRYPTO } from 'utils/constants'
import { transformToCurrency } from 'utils'

const Ticker = ({ ticker }) => {
    const email = useSelector(state => state.auth.user.email)
    
    const dispatch = useDispatch()
    const handleRemoveTicker = (ticker) => {
        dispatch({ type: ticker.type === TYPE_CRYPTO ? REMOVE_CRYPTO : REMOVE_STOCK, payload: { id: ticker.id } })
        ticker.type === TYPE_CRYPTO
            ? deleteCrypto({ userEmail: email, id: ticker.id })
            : deleteStock({ userEmail: email, id: ticker.id })
    }


    return (
        <div className="ticker">
            <span>{ticker.ticker}</span>
            <span>{transformToCurrency(ticker.moneyInvested)}</span>
            <span>{ticker.numCoins || ticker.numStocks}</span>
            <span>{transformToCurrency(60000)}</span>
            <span>{50}%</span>
            <span>+{0}%</span>
            <span className={`profits ${ticker.profits > 0 ? 'positive' : 'negative'}`}>{transformToCurrency(0)}</span>
            <span className="options">
                <Button padding="10px" onClick={() => handleRemoveTicker(ticker)}><IconRemove width={20} height={20} display="block"/></Button>
                <Button padding="10px"><IconEdit width={20} height={20} display="block"/></Button>
            </span>
        </div>
    )
}

export default Ticker