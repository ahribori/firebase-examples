
// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from "firebase/app"
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
import "firebase/analytics"

// Add the Firebase products that you want to use
import "firebase/auth"
import "firebase/firestore"
import "firebase/messaging"

// TODO: Replace the following with your app's Firebase project configuration
// For Firebase JavaScript SDK v7.20.0 and later, `measurementId` is an optional field
const firebaseConfig = {
  apiKey: "AIzaSyCSJZdPFWqmk16jAkYjcrBhGO0vRhWMHEM",
  authDomain: "fir-examples-1bdae.firebaseapp.com",
  projectId: "fir-examples-1bdae",
  storageBucket: "fir-examples-1bdae.appspot.com",
  messagingSenderId: "37049027673",
  appId: "1:37049027673:web:84f8ae67fa4404bf5e7548",
  measurementId: "G-Q12XGCNXEJ"
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
} else {
  firebase.app() // if already initialized, use that one
}

export default firebase