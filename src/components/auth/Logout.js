import { LOGIN_SUCCESS, IS_LOGGED, logout } from 'store/actions/authActions'
import { CLEAN_PORTFOLIO } from 'store/actions/portfolioActions'
import Button from 'components/common/Button'
import {  useDispatch } from 'react-redux'

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
        <Button
            border="0"
            padding="14px 0"
            bgColor="transparent"
            onClick={() => handleLogout()}>
                Sign out
        </Button>
    )
}


export default Logout