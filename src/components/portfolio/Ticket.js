import 'assets/styles/ListTickets.css'
import { REMOVE_STOCK, REMOVE_CRYPTO } from 'store/actions/portfolioActions'
import Button from 'components/common/Button'
import IconEdit from 'components/icons/IconEdit'
import IconRemove from 'components/icons/IconRemove'
import { useSelector, useDispatch } from 'react-redux'
import { deleteCrypto, deleteStock } from 'api'
import { TYPE_CRYPTO } from 'utils/constants'
import { transformToCurrency } from 'utils'

const Ticket = ({ ticket }) => {
    const email = useSelector(state => state.auth.user.email)
    
    const dispatch = useDispatch()
    const handleRemoveTicket = (ticket) => {
        dispatch({ type: ticket.type === TYPE_CRYPTO ? REMOVE_CRYPTO : REMOVE_STOCK, payload: { id: ticket.id } })
        ticket.type === TYPE_CRYPTO
            ? deleteCrypto({ userEmail: email, id: ticket.id })
            : deleteStock({ userEmail: email, id: ticket.id })
    }


    return (
        <div className="ticket">
            <span>{ticket.ticket}</span>
            <span>{transformToCurrency(ticket.moneyInvested)}</span>
            <span>{ticket.numCoins || ticket.numStocks}</span>
            <span>{transformToCurrency(60000)}</span>
            <span>{50}%</span>
            <span>+{0}%</span>
            <span className={`profits ${ticket.profits > 0 ? 'positive' : 'negative'}`}>{transformToCurrency(0)}</span>
            <span className="options">
                <Button padding="10px" onClick={() => handleRemoveTicket(ticket)}><IconRemove width={20} height={20} display="block"/></Button>
                <Button padding="10px"><IconEdit width={20} height={20} display="block"/></Button>
            </span>
        </div>
    )
}

export default Ticket