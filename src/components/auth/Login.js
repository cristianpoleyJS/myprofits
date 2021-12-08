import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { onAuthStateChanged, loginWithGoogle, LOGIN_SUCCESS, IS_LOGGED } from 'store/actions/authActions'

const Login = () => {
    const dispatch = useDispatch()
    
    useEffect(() => {
        onAuthStateChanged((userChanged) => {
            dispatch({ type: LOGIN_SUCCESS, payload: userChanged })
            dispatch({ type: IS_LOGGED, payload: true })
        })
    }, [dispatch])
    
    const handleLoginWithGoogle = () => {
        loginWithGoogle()
    }

    return (
        <div>
            <button onClick={() => handleLoginWithGoogle()}>Log in with Google</button>
        </div>
    )
}


export default Login