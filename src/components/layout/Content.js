import Portfolio from 'components/portfolio/Portfolio'
import Home from 'components/layout/Home'
import { connect } from 'react-redux'

const Content = ({ isLogged }) => {
    return (
        <div>
            {
                !isLogged
                ? <Home />
                : <Portfolio />
            }
        </div>
    )
}


const mapStateToProps = (state) => ({
    isLogged: state.auth.isLogged
})

export default connect(mapStateToProps)(Content)