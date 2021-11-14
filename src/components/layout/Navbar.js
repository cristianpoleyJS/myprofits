import { useEffect } from 'react'
import { connect, useDispatch } from 'react-redux'
import { onAuthStateChanged, loginWithGoogle, LOGIN_SUCCESS, IS_LOGGED, logout } from 'store/actions/authActions'

const Navbar = ({ user, isLogged }) => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        onAuthStateChanged((userChanged) => {
            dispatch({ type: LOGIN_SUCCESS, payload: userChanged })
            dispatch({ type: IS_LOGGED })
        })
    }, [dispatch])
    
    const handleLoginWithGoogle = () => {
        loginWithGoogle()
    }

    const handleLogout = () => {
        logout()
            .then(() => {
                dispatch({ type: IS_LOGGED })
                dispatch({ type: LOGIN_SUCCESS, payload: null })
            })
    }
    return (
        <header>
            Header App
            {
                !isLogged ?
                    <div>
                        <button onClick={() => handleLoginWithGoogle()}>Log in with Google</button>
                    </div>
                : <button onClick={() => handleLogout()}><img src={user.photoUrl} alt="avatar user" /> Logout</button>
            }
        </header>
    )
}

const mapStateToProps = (state) => ({
    user: state.auth.user,
    isLogged: state.auth.isLogged
})

export default connect(mapStateToProps)(Navbar)