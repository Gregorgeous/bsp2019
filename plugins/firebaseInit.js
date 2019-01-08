import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
// IMPORTANT: For any github pullers: set up your own firebase instance, and store it in  "Name_for_your_FBConfig.js" and import it just as I do below (modify the path for your own file)
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
