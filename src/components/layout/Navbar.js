import { connect } from 'react-redux'
import Avatar from 'components/common/Avatar'
import 'assets/styles/Navbar.css'
import Logout from 'components/auth/Logout'
import Login from 'components/auth/Login'

const Navbar = ({ user, isLogged }) => {
    return (
        <header>
            <span>MyProfits</span>
            {
                !isLogged ?
                    <Login />
                :
                <div className="navbar-right">
                    <Logout />
                    <Avatar photo={user.photoUrl} height={'40px'} width={'40px'}/>
                </div>
            }
        </header>
    )
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
    isLogged: state.auth.isLogged
})

export default connect(mapStateToProps)(Navbar)