import { connect } from 'react-redux'
import Avatar from 'components/common/Avatar'
import Theme from 'components/header/Theme'
import 'assets/styles/Header.css'
import Logout from 'components/auth/Logout'
import Login from 'components/auth/Login'

const Header = ({ user, isLogged }) => {
    return (
        <header>
            <a href="/">MyProfits</a>
            <nav>
                {   
                    isLogged === null
                    ? <></>
                    :
                        !isLogged
                        ?   <>
                                <Login />
                                <Theme />
                            </>
                        :   <>
                                <Logout />
                                <Theme />
                                <Avatar photo={user.photoUrl} height={'40px'} width={'40px'}/>
                            </>
                }
            </nav>
        </header>
    )
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
    isLogged: state.auth.isLogged
})

export default connect(mapStateToProps)(Header)