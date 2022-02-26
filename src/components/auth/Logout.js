import { LOGIN_SUCCESS, IS_LOGGED, logout } from 'store/actions/authActions'
import { CLEAN_PORTFOLIO } from 'store/actions/portfolioActions'
import { useDispatch } from 'react-redux'

const Logout = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        logout()
            .then(() => {
                dispatch({ type: IS_LOGGED, payload: false })
                dispatch({ type: LOGIN_SUCCESS, payload: null })
                dispatch({ type: CLEAN_PORTFOLIO })
            })
    }
    
    return (
        <a href="/" onClick={() => handleLogout()}>
                Sign out
        </a>
    )
}


export default Logout