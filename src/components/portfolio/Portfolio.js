import { useEffect } from 'react'
import ListTickets from 'components/portfolio/ListTickets'
import Resume from 'components/portfolio/Resume'
import Chart from 'components/portfolio/Chart'
import FormStock from './add-ticket/FormStock'
import { useSelector, useDispatch } from 'react-redux'
import { ADD_TICKET, getListTickets } from '../../store/actions/ticketsActions'


const Portfolio = () => {
    const dispatch = useDispatch()
    const email = useSelector(state => state.auth.user.email)
    const tickets = useSelector(state => state.tickets.tickets)
    
    useEffect(() => {
        getListTickets(email).then(newTickets => {
            newTickets.docs.forEach((doc) => {
                dispatch({ type: ADD_TICKET, payload: {
                    ...doc.data(),
                    id: doc.id
                } })
            })
        })
    }, [email, dispatch])

    return (
        <section>
            <FormStock email={email}/>
            <ListTickets tickets={tickets}/>
            <Resume />
            <Chart />
        </section>
    )
}

export default Portfolio

// una tabla de detalles (en tiempo real)
// una tabla del total (se alimenta del detalle)
// un chart del reparto total