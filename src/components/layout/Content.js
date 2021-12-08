import { connect } from 'react-redux'
import Portfolio from 'components/portfolio/Portfolio'

const Content = ({ isLogged }) => {
    return (
        <div>
            {
                !isLogged ?
                    <p>Preview con gif de lo que se puede hacer</p>
                :
                <Portfolio />
            }
        </div>
    )
}


const mapStateToProps = (state) => ({
    isLogged: state.auth.isLogged
})

export default connect(mapStateToProps)(Content)