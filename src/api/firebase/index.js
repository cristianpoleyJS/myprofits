import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/performance'
import 'firebase/auth'
import 'firebase/analytics'
import { configAppWeb } from './config'

firebase.initializeApp(configAppWeb)
firebase.performance()
firebase.analytics()

export const loginWithEmailAndPassword = () => {
    const emailProvider = new firebase.auth.AuthCredential()
    return firebase.auth().signInWithRedirect(emailProvider)
}

export const loginWithGoogle = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider()
    return firebase.auth().signInWithPopup(googleProvider)
}