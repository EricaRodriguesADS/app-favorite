import firebase from 'firebase/app'
import 'firebase/auth'

// TODO mover par aconfiguração automática
export const fbApp = firebase.initializeApp({
  apiKey: "AIzaSyALUXZgMlUEoPoFaMx1xOieMOFsLWo8e88",
  authDomain: "store-bf207.firebaseapp.com",
})

export const fbAuth = fbApp.auth()

export default firebase