import { loginWithGoogle } from 'store/actions/authActions'
import Button from 'components/common/Button'

const Login = () => {
    const handleLoginWithGoogle = () => {
        loginWithGoogle()
    }

    return (
        <Button onClick={() => handleLoginWithGoogle()}>
            Sign in
        </Button>
    )
}


export default Login