import { loginWithGoogle } from 'store/actions/authActions'
import Button from 'components/common/Button'

const Login = ({ text }) => {
    const handleLoginWithGoogle = () => {
        loginWithGoogle()
    }
    return (
        <Button onClick={() => handleLoginWithGoogle()}>
            {text}
        </Button>
    )
}


export default Login