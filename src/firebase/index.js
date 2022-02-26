import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/performance'
import 'firebase/analytics'

const configAppWeb = {
    apiKey: 'AIzaSyCEL0IogQWyaa7z4JFzTqFZvE9S2gXA9PI',
    authDomain: 'myprofits-719b3.firebaseapp.com',
    projectId: 'myprofits-719b3',
    storageBucket: 'myprofits-719b3.appspot.com',
    messagingSenderId: '785719340289',
    appId: '1:785719340289:web:a2ada9647e0d9e53743f00',
    measurementId: 'G-0LBHSB3Z4Q'
}

firebase.apps.length === 0 && firebase.initializeApp(configAppWeb)
firebase.performance()
firebase.analytics()

export const database = firebase.firestore()