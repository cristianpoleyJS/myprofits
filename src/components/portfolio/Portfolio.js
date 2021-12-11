import ListTickets from 'components/portfolio/ListTickets'
import NavbarForms from 'components/portfolio/add-ticket/NavbarForms'
import 'assets/styles/Portfolio.css'
import { useSelector } from 'react-redux'


const Portfolio = () => {
    const email = useSelector(state => state.auth.user.email)
    
    return (
        <section className="portfolio">
            <NavbarForms email={email}/>
            <ListTickets />
        </section>
    )
}

export default Portfolio