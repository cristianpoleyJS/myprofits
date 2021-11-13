import 'firebase/auth'
import { loginWithEmailAndPassword, loginWithGoogle } from 'api/firebase'


export const handleLoginWithGoogle = () => {
    loginWithGoogle()
        .then(user => {
            console.log(user)
        })
        .catch(err => {
            console.error(err)
        })
}

export const handleLoginWithEmail = () => {
    loginWithEmailAndPassword()
        .then(user => {
            console.log(user)
        })
        .catch(err => {
            console.error(err)
        })
}