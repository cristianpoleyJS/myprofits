import firebase from 'firebase/app'
import 'firebase/auth'

export const IS_LOGGED = 'auth/change_isLogged'
export const LOGIN_SUCCESS = 'auth/login_success'
export const LOGIN_ERROR = 'auth/login_error'

export const mapUserFromFirebase = (user) => {
    return {
        name: user.displayName,
        email: user.email,
        photoUrl: user.photoURL
    }
}

export const onAuthStateChanged = (callbackAuthenticated, callbackNotAuthenticated) => {
    return firebase
            .auth()
            .onAuthStateChanged(user => {
                if (user) {
                    const normalizedUser = mapUserFromFirebase(user)
                    callbackAuthenticated(normalizedUser)
                } else {
                    callbackNotAuthenticated()
                }
            })
}

export const loginWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    return firebase
        .auth()
        .signInWithPopup(googleProvider)
        .then(mapUserFromFirebase)
}

export const logout = () => {
    return firebase
            .auth()
            .signOut()
}