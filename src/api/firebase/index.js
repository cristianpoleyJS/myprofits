import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/performance'
import 'firebase/analytics'
import { configAppWeb } from './config'

firebase.apps.length === 0 && firebase.initializeApp(configAppWeb)
firebase.performance()
firebase.analytics()