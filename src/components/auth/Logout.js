import {  useDispatch } from 'react-redux'
import { LOGIN_SUCCESS, IS_LOGGED, logout } from 'store/actions/authActions'

const Logout = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        logout()
            .then(() => {
                dispatch({ type: IS_LOGGED, payload: false })
                dispatch({ type: LOGIN_SUCCESS, payload: null })
            })
    }
    
    return (
        <button onClick={() => handleLogout()}>Logout</button>
    )
}


export default Logout