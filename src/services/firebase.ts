import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/firestore'
import 'firebase/functions'

// TODO mover par aconfiguração automática
export const fbApp = firebase.initializeApp({
  apiKey: "AIzaSyALUXZgMlUEoPoFaMx1xOieMOFsLWo8e88",
  authDomain: "store-bf207.firebaseapp.com",
  databaseURL: "https://store-bf207.firebaseio.com",
  projectId: "store-bf207",
  storageBucket: "store-bf207.appspot.com",
  messagingSenderId: "167948553433",
  appId: "1:167948553433:web:19d2db733a8c0344e0c2c8",
})

export const fbAuth = fbApp.auth()
export const fbStorageRef = firebase.storage().ref()
export const fbFs = firebase.firestore()

export default firebase