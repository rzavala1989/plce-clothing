import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAB6EHH92ZbXtsrwqkaiEnEoQLLW_mLwKs",
    authDomain: "plce-db.firebaseapp.com",
    projectId: "plce-db",
    storageBucket: "plce-db.appspot.com",
    messagingSenderId: "840724431552",
    appId: "1:840724431552:web:16a4d6db39f4f6e0df2325",
    measurementId: "G-XCN8SGFDPJ"
  }

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: 'select_account'})
export const signInWithGoogle = () => auth.signInWithPopup(provider)
//head to sign in component to hangle google sign in