import { connect, useSelector } from 'react-redux'
import { handleLoginWithGoogle, handleLoginWithEmail } from 'store/actions/authActions'

const Navbar = () => {
    const isLogged = useSelector((state) => state.auth.isLogged)

    return (
        <header>
            Header App
            <div>
                { !isLogged 
                    ?   <>
                            <button onClick={() => handleLoginWithGoogle()}>Log in with Google</button>
                            <button onClick={() => handleLoginWithEmail()}>Log in with Email</button>
                        </>
                    : <p>Loggout</p>
                    // : <button onClick={() => logout()}>Log out</button>
                }
            </div>
        </header>
    )
}

const mapStateToPros = (state) => {
    console.log(state)
    return {

    }
}

export default connect(mapStateToPros)(Navbar)