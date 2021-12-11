import ListTickers from 'components/portfolio/ListTickers'
import NavbarForms from 'components/portfolio/add-ticker/NavbarForms'
import 'assets/styles/Portfolio.css'
import { useSelector } from 'react-redux'


const Portfolio = () => {
    const email = useSelector(state => state.auth.user.email)
    
    return (
        <section className="portfolio">
            <NavbarForms email={email}/>
            <ListTickers />
        </section>
    )
}

export default Portfolio