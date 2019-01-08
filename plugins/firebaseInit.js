import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import fbConfig from '@/firebaseConfig.js'

// IDEA: this 'if' prevents an occasional "Firebase application already initialized" error
if (!firebase.apps.length) {
  firebase.initializeApp(fbConfig)
}

// This prevents console warning firebase gives us without it.
firebase.firestore().settings({ timestampsInSnapshots: true })

const fireAuth = firebase.auth()
const fireDB = firebase.firestore()

export { fireDB, fireAuth }
