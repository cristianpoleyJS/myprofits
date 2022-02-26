import { connect } from 'react-redux'
import Avatar from 'components/common/Avatar'
import Theme from 'components/header/Theme'
import 'assets/styles/Header.css'
import Logout from 'components/auth/Logout'
import Login from 'components/auth/Login'
import LogoApp from 'components/icons/LogoApp'

const Header = ({ user, isLogged }) => {
    return (
        <header>
            <a className="anchor-icon" href="/"><LogoApp height={40}/></a>
            <nav>
                {   
                    isLogged === null
                    ? <></>
                    :
                        !isLogged
                        ?   <>
                                <Login text="Conéctate"/>
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